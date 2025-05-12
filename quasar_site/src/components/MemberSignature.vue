<template>
  <q-item>
    <q-item-section>
      <q-item-label class="text-h6">
        Description:
        <q-btn
          flat
          round
          color="blue"
          icon="mdi-link"
          @click="this.$router.push({ hash: `#${ViewModel.signatureAnchorRef(member.signature)}` })"
        ></q-btn>
      </q-item-label>
      <q-item-label caption v-if="member.summary">
        <p><span v-html="member.summary"></span></p>
      </q-item-label>
    </q-item-section>
  </q-item>
  <div class="q-pl-lg">
    <!--Syntax-->
    <q-item>
      <q-item-section>
        <q-item-label v-if="member.signature" class="text-h6">Syntax:</q-item-label>
        <q-card flat bordered style="font-family: monospace; margin-top: 10px; padding: 10px">
          <q-card-section horizontal>
            <q-item-label style="font-size: 18px; width: 100%" :class="member.deprecated || member.obsolete && 'disabled'">
              {{ member.modifiers && member.modifiers.join(' ') }}
              <template v-for="chunk,id in signature(member)" :key="id">
                <template v-if="chunk.indent">
                  <br/>
                  <span class="q-pl-lg"></span>
                </template>
                <template v-if="chunk.break">
                  <br/>
                </template>
                <template v-if="chunk.link">
                  <router-link v-if="!chunk.link.toLowerCase().startsWith('http')" :to="chunk.link" class="routerlink">
                    {{ chunk.name }}
                    <q-tooltip v-if="chunk.enumValues">{{ chunk.enumValues }}</q-tooltip>
                  </router-link>
                  <a v-else :href="chunk.link" target="_blank" class="routerlink">{{ chunk.name }}</a>
                </template>
                <span v-else :class="chunk.role == 'name' && 'text-italic'">{{ chunk.name }}</span>
              </template>
            </q-item-label>
            <q-card-actions vertical class="">
              <q-btn flat round color="blue" icon="mdi-content-copy" @click="copyToClipboard(member.signature)"></q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label caption class="on-right">
          <q-badge v-if="member.protected" outline color="warning" class="q-ma-sm">protected</q-badge>
          <q-badge v-if="member.virtual" outline color="warning" class="q-ma-sm">virtual</q-badge>
          <q-badge v-if="member.deprecated" outline color="negative" class="q-ma-sm">
            deprecated in {{ member.deprecated }}
            <q-tooltip>Deprecated in version {{ member.deprecated }}</q-tooltip>
          </q-badge>
          <q-badge v-if="member.obsolete" outline color="negative" class="q-ma-sm">obsolete: {{ member.obsolete }}</q-badge>
        </q-item-label>
        <q-item-label v-if="member.parameters" class="text-h6">Parameters:</q-item-label>
        <q-item-label class="row" v-for="parameter in member.parameters" :key="parameter.name">
          <ul style="padding-inline-start: 0px; list-style-type: none; margin-block-start: 0; margin-block-end: 5px;">
            <li class="text-italic">{{ parameter.name }}</li>
            <li class="q-pl-lg text-weight-light">
              <span>Type: </span>
              <template v-if="typeUrl(parameter.type)">
                <router-link class="routerlink text-weight-regular" :to="typeUrl(parameter.type)" v-if="!typeUrl(parameter.type).toLowerCase().startsWith('http')">
                  {{ parameter.type }}
                </router-link>
                <a v-else :href="typeUrl(parameter.type)" target="_blank" class="routerlink text-weight-regular">{{ parameter.type }}</a>
                <q-tooltip v-if="typeFromToken(parameter.type) && typeFromToken(parameter.type)['dataType']=='enum'">{{ typeFromToken(parameter.type).values.map(v => v.signature) }}</q-tooltip>
              </template>
              <template v-else>
                <span class="disabled disabledLink text-weight-regular">{{ parameter.type }}</span>
              </template>
            </li>
            <li v-html="parameter.summary" class="q-pl-lg text-weight-light"></li>
          </ul>
        </q-item-label>
        <q-item-label v-if="signature(member).filter(m => m.isReturn).length>0" class="text-h6" style="margin-top: 10px">Returns:</q-item-label>
        <q-item-label class="on-right text-weight-light">
          <template v-for="(returnType, index) in signature(member).filter(m => m.isReturn)" :key="index">
            <template v-if="returnType.link">
              Type:
              <router-link v-if="!returnType.link.toLowerCase().startsWith('http')" :to="returnType.link" class="routerlink">{{ returnType.name }}
                <q-tooltip v-if="returnType.enumValues">{{ returnType.enumValues }}</q-tooltip>
              </router-link>
              <a v-else :href="returnType.link" target="_blank" class="routerlink">{{ returnType.name }}</a>
            </template>
            <template v-else>
              Type: {{ returnType.name }}
            </template>
          </template>
        </q-item-label>
        <q-item-label class="on-right text-weight-light" v-if="member.returns">
          {{ member.returns }}
        </q-item-label>
        <q-item-label v-if="member.remarks" class="text-h6" style="margin-top: 10px">Remarks:</q-item-label>
        <q-item-label class="on-right text-weight-light" v-if="member.remarks">
          <div v-html="member.remarks"></div>
        </q-item-label>
        <q-item-label caption v-if="member.since" class="text-bold" style="margin-top: 10px">Available since:</q-item-label>
        <q-item-label caption class="on-right" v-if="member.since">
          {{ member.since }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import ViewModel from "../ViewModel";

export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
    datatype: {
      type: String,
      required: true,
    },
    baseUrl: {
      type: String
    },
  },
  data() {
    const mostRecent = ViewModel.mostRecentSince();
    return {
      ViewModel,
      memberName: null,
      version: mostRecent,
      activeId: null,
      forScriptEditor: false,
    };
  },
  methods: {
    signature(member){
      const tokens = member.signature.split(' ')
      const chunks = []
      if (tokens[0] === 'static') {
        chunks.push({ name: tokens[0] + ' ' })
        tokens.shift()
      }
      if (member.isEvent) {
        chunks.push({ name: tokens[0]+ ' '  })
        chunks.push({ name: tokens[1] })
        return chunks
      }

      if (member.isProperty || member.isMethod || member.isOperator) {
        // try to get a link for the return type
        // const tokenPath = this.tokenPath(tokens[0])
        // const link = tokenPath ? this.baseUrl + tokenPath : null
        const link = this.typeUrl(tokens[0]);
        const returnType = this.typeFromToken(tokens[0]);
        const name = tokens[0].split(".").slice(-1)[0];
        if (link) {
          chunks.push({
            link: link,
            name: name,
            isReturn: true,
            enumValues: returnType && returnType["dataType"] == "enum" ? returnType.values.map(v => v.signature) : null
          })
          chunks.push({ name: ' ' })
        } else {
          chunks.push({ name: name + ' ', isReturn: true })
        }
        tokens.shift()
      }
      const declaration = tokens.join(' ')
      const parenIndex = declaration.indexOf('(')
      if (parenIndex > 0) {
        chunks.push({ name: declaration.substring(0, parenIndex + 1) })
        const parameterTokens = declaration.substring(parenIndex + 1, declaration.length - 1).split(',')

        for (let i = 0; i < parameterTokens.length; i++) {
          if (parameterTokens[i].indexOf('<') > 0 && parameterTokens[i].indexOf('>') < 0 && i < (parameterTokens.length - 1)) {
            //This only should happen for arguments formatted like <a,b> not just <a>
            parameterTokens[i] = parameterTokens[i] + ',' + parameterTokens[i + 1]
            parameterTokens[i + 1] = ''
          }
        }

        for (let i = 0; i < parameterTokens.length; i++) {
          if (!parameterTokens[i]) continue
          if (i > 0) chunks.push({ name: ', ' })
          const parameter = parameterTokens[i].trim()
          const paramChunks = parameter.split(' ')
          let typeToken = paramChunks[paramChunks.length - 2]
          const paramName = paramChunks[paramChunks.length - 1]
          const link = this.typeUrl(typeToken);
          const paramType = this.typeFromToken(typeToken);
          const  enumValues = paramType && paramType["dataType"] == "enum" ? paramType.values.map(v => v.signature) : null

          //remove namespaced types (usually system.blah.blah)
          typeToken= typeToken.split(".").slice(-1)[0]

          //indent all parameters
          chunks.push({indent:true});
          for (let j = 0; j < paramChunks.length - 2; j++) {
            chunks.push({ name: paramChunks[j] + ' ' })
          }
          chunks.push({
            link: link,
            enumValues,
            name: typeToken + ' ',
          })
          chunks.push({ name: paramName, role:"name" })
        }

        chunks.push({ name: ')', break: parameterTokens.filter(p=>p.length>0).length>0 })
      } else {
        chunks.push({ name: declaration })
      }
      if (member.property) {
        let s = ' {'
        for (let i = 0; i < member.property.length; i++) {
          if (i > 0) s += '|'
          s += member.property[i]
        }
        s += '}'
        chunks.push({ name: s })
      }
      return chunks
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    tokenPath(token) {
      const type = this.typeFromToken(token);
      if (!type){
        return null;
      }
      return ViewModel.itemPath(type);
    },
    typeFromToken(token) {
      // skip tokens that start with a lower case letter
      if (token.length < 1 || token[0] === token[0].toLowerCase()) return null;
      if (token.endsWith("[]")) token = token.substring(0, token.length - 2);
      // if (token === this.datatype.name) return null
      const typeMap = ViewModel.getTypeMap();
      let type = typeMap[token];
      if (!type){
        //WWW-2098: try looking for enums which have . separated names in this dictionary
        type = typeMap[`${this.datatype.name}.${token}`];
        if (!type){
          //WWW-2523 RhinoCommon docs: Some method argument type links are disabled
          type = typeMap[token.split(".").slice(-1)[0]];
          if (!type){
            return null;
          }
        }
      }
      return type
    },
    typeUrl(typeToken){
    const tokenPath = this.tokenPath(typeToken)
    let link = tokenPath ? this.baseUrl + tokenPath : null
    //Try to get system links
    // console.log("typetoken", typeToken)
    if(!link){
      // if( typeToken.toLowerCase().startsWith("system")){
      //   let cleanType = typeToken.split("<")[0];
      //   cleanType = cleanType.split("[")[0];
      //   link = `https://learn.microsoft.com/en-us/dotnet/api/${cleanType}`
      // }
      const standardCSharpTypes = {
        "int": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "string": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type",
        "bool": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool",
        "double": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types",
        "float": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types",
        "decimal": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types",
        "char": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/char",
        "byte": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "void": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",
        "object": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type",
        "DateTime": "https://learn.microsoft.com/en-us/dotnet/api/system.datetime",
        "uint": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "sbyte": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "short": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "ushort": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "long": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "ulong": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types",
        "Version": "https://learn.microsoft.com/en-us/dotnet/api/system.version",
        "System.Collections.Specialized.NameValueCollection": "https://learn.microsoft.com/en-us/dotnet/api/system.collections.specialized.namevaluecollection",
        "Color": "https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color",
        "System.Int32[]": "https://learn.microsoft.com/en-us/dotnet/api/system.int32",
        // Add more standard types as needed
      };

      if (!link && standardCSharpTypes[typeToken]) {
        link = standardCSharpTypes[typeToken];
      }
    }
    // console.log(`returning link for ${typeToken} path: ${tokenPath}`, link)
    return link;
    },
  },
};
</script>

<style scoped>
/* add any necessary styles here */
</style>
