<template>
  <q-page>
    <div class="q-pa-sm">
      <template v-if="members && members.items && members.items.length>0">
        <div style="height: 130px" v-if="!forScriptEditor"></div>
        <q-list>
          <div v-for="(member, index) in members.items" :key="index" :id="ViewModel.signatureAnchorRef(member.signature)" style="transition: opacity 1s" :style="activeId && activeId != ViewModel.signatureAnchorRef(member.signature) ? 'opacity: 50%' : 'opacity: 100%'" >
            <MemberSignature :member="member" :datatype="datatype"/>
            <q-separator  />
          </div>
        </q-list>
      </template>
      <template v-else>
        <q-banner inline-actions class="text-white bg-red">
          Not Found
          <template v-slot:action v-if="$route.query.version">
            <q-btn flat color="white" style="pointer-events: none;" label="Try Increasing Target Version" />
          </template>
        </q-banner>
      </template>
    </div>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky v-if="!forScriptEditor && members && members.items && members.items.length>0" expand position="top" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" style="max-height: 125px; overflow: hidden;">

      <div class="flex-break q-pa-sm flex justify-between">
            <div>
              <q-breadcrumbs v-if="datatype" class="q-mb-sm" active-color="accent">
              <q-breadcrumbs-el icon="home" :to="baseUrl" />
              <q-breadcrumbs-el
                :label="datatype.namespace"
                :to="baseUrl + datatype.namespace.toLowerCase()"
              />
              <q-breadcrumbs-el
                :label="datatype.name"
                :to="
                  (baseUrl + datatype.namespace + '.' + datatype.name).toLowerCase()
                "
              />
              <q-breadcrumbs-el :label="getTitle(datatype, members).split(' ')[0]" />
                      </q-breadcrumbs>
                      <h1 style="text-overflow: ellipsis;">{{ getTitle(datatype, members) }}</h1>
                      <p v-if="datatype">
              Class:&nbsp;
              <router-link
                class="routerlink"
                :to="
                  baseUrl +
                  datatype.namespace.toLowerCase() +
                  '.' +
                  datatype.name.toLowerCase()
                "
              >
                {{ datatype.namespace }}.{{ datatype.name }}
              </router-link>
              </p>
            </div>
            <div>
              <div v-for="(member, index) in members.items" :key="index">

                  <q-btn
                      no-caps
                      outline
                      dense
                      size="md"
                      icon="mdi-code-tags"
                      color="accent"
                      :to="exampleUrl(member)"
                      v-if="member.examples && member.examples.length > 0"

                    class="on-right"
                    style="margin-top: 10px"
                    >
                    Example
                  </q-btn>
                </div>
            </div>
            </div>

    </q-page-sticky>

  </q-page>
</template>

<script>
import MemberSignature from "src/components/MemberSignature.vue";
import ViewModel from "../ViewModel";
import Examples from "../api_examples.json";
import ProjInfo from "../proj_info.json";
import { createMetaMixin } from "quasar";
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

const titleCase = (input) => {
  input = input === undefined || input === null ? "" : input;
  input = input.toLowerCase();
  return input
    .toString()
    .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
      return separator + char.toUpperCase();
    });
};

export default {
  components: {
    MemberSignature,
  },
  props: {
    baseUrl: { type: String },
  },
  data() {
    const mostRecent = ViewModel.mostRecentSince();
    return {
      ViewModel,
      memberName: null,
      datatype: null,
      members: {},
      version: mostRecent,
      activeId: null,
      forScriptEditor: false,
    };
  },
  mixins: [
    //This is where page meta gets set because why the heck NOT Quasar
    createMetaMixin(function () {
      // "this" here refers to your component
      if (!this.$route.path.startsWith("/example"))
      {
        const node = ViewModel.findNodeByPath(this.$route.params.datatype);
        const memberName = this.$route.params.member;
        const members = this.getMembers(node, memberName);
        const desc = node.name + "." + this.getTitle(node, members);
        return {
          title: desc,
          meta: {
            description: { name: "description", content: desc },
          },
        };
      }
      //TODO: example page meta
    }),
  ],
  mounted() {
    console.log("mounted member detail");
    this.renderUrl(this.$route);

    if (this.$route.query.plain) {
        this.forScriptEditor = true;
    }

        // If this page is loaded with an anchor URL, attempt to scroll to
        // it right after the page is loaded
        this.checkHash();
        if (this.$route.hash) {
          this.$nextTick(() => {
            const el = document.getElementById(this.$route.hash.substring(1))
            if (el) {
              this.scrollToElement(el, -125)
            }
          })
        }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to.params.datatype && to.params.member) {
        this.renderUrl(to);

        // If this page is loaded with an anchor URL, attempt to scroll to
        // it right after the page is loaded
        this.checkHash();
        if (to.hash) {
          console.log("hash has:", to.hash.substring(1))
          // this.$nextTick(() => {
            const el = document.getElementById(to.hash.substring(1))
            if (el) {
              this.scrollToElement(el, -125)
            }
          // })
        }
      }
    },
  },
  methods: {
    // takes an element object
    scrollToElement (el, padding) {
      console.log("scrolling to:", el)
      const target = getScrollTarget(el)
      const offset = el.offsetTop + padding
      const duration = 250
      setVerticalScrollPosition(target, offset, duration)
    },
    checkHash() {
      this.activeId = this.$route.hash.substring(1)
      if (this.activeId) {
        setTimeout(() => {
          this.activeId = null;
        }, 2000); // dim after 2 seconds
      }
    },
    renderUrl(route) {
      //TODO: need to pay attention to full path when setting selected item
      this.datatype = ViewModel.findNodeByPath(route.params.datatype);
      this.memberName = route.params.member.toLowerCase();
      const members = this.getMembers(this.datatype, this.memberName);

      if (!members.items || members.items.length == 0){
        return;
      }

      if (route.query["overload"]){
        //overloads are indexed from 1 and up
        members.items = [members.items[route.query["overload"]-1]]
      }

      members.items = members.items.map((m) => {
        const examples = this.getExamples(this.datatype, m);
        return { ...m, examples };
      });

      if (route.query.version){
        members.items = members.items.filter((m) => {
          if (!m.since){return true;}
          const include = route.query.version && m.since && ViewModel.sinceIsGreater(route.query.version, m.since);
          // console.log("testing:", m.since, "against", route.query.version, include);
          return include;
        });
      }

      this.members = Object.freeze(members);
      const selectedItem = decodeURI(
        route.fullPath.substring(this.baseUrl.length)
      );
      ViewModel.setSelectedItem(selectedItem, false);
    },
    getMembers(datatype, memberName) {
      if (datatype.name.toLowerCase() === memberName) {
        // TODO: pay attention and see if order is same as tree order
        // datatype.constructors.sort((a, b) => {
        //   if (a.deprecated && !b.deprecated) return 1;
        //   if (!a.deprecated && b.deprecated) return -1;
        //   return 0;
        // });
        return {
          isConstructor: true,
          items: datatype.constructors,
        };
      }
      if (datatype.properties) {
        const props = [];
        for (let i = 0; i < datatype.properties.length; i++) {
          const prop = datatype.properties[i];
          const chunks = prop.signature.split(" ");
          const name = chunks[chunks.length - 1];
          if (name.toLowerCase() === memberName) props.push(prop);
          else if (memberName == "item" && prop.signature.includes("this[int")) props.push(prop);
        }
        if (props.length > 0) {
          const m = { properties: true };
          props.sort((a, b) =>
            ViewModel.memberName(a, m).localeCompare(ViewModel.memberName(b, m))
          );
          return {
            isProperty: true,
            items: props,
          };
        }
      }
      if (datatype.methods) {
        const methods = [];
        for (let i = 0; i < datatype.methods.length; i++) {
          const m = datatype.methods[i];
          const index = m.signature.indexOf("(");
          const chunks = m.signature.substring(0, index).split(" ");
          const name = chunks[chunks.length - 1];
          if (name.toLowerCase() === memberName) methods.push(m);
        }
        if (methods.length > 0) {
          const m = { methods: true };
          methods.sort((a, b) =>
            ViewModel.memberName(a, m).localeCompare(ViewModel.memberName(b, m))
          );
          return {
            isMethod: true,
            items: methods,
          };
        }
      }
      if (datatype.events) {
        const events = [];
        for (let i = 0; i < datatype.events.length; i++) {
          const event = datatype.events[i];
          const chunks = event.signature.split(" ");
          const name = chunks[chunks.length - 1];
          if (name.toLowerCase() === memberName) events.push(event);
        }
        if (events.length > 0) {
          // Not sorted in tree, therefore not sorted here
          // const m = { events: true };
          // events.sort((a, b) =>
          //   ViewModel.memberName(a, m).localeCompare(ViewModel.memberName(b, m))
          // );
          return {
            isEvent: true,
            items: events,
          };
        }
      }
      if (datatype.operators) {
        const operators = [];
        for (let i = 0; i < datatype.operators.length; i++) {
          const operator = datatype.operators[i];
          const match = operator.signature.match(/\S*\(.*\)/g);
          const name = match[0].split("(")[0];
          if (name.toLowerCase() === memberName) operators.push(operator);
        }
        if (operators.length > 0) {
          // Not sorted in tree, therefore not sorted here
          // const m = { operators: true };
          // operators.sort((a, b) =>
          //   ViewModel.memberName(a, m).localeCompare(ViewModel.memberName(b, m))
          // );
          return {
            isOperator: true,
            items: operators,
          };
        }
      }

      if (datatype.fields) {
        const fields = [];
        for (let i = 0; i < datatype.fields.length; i++) {
          const field = datatype.fields[i];
          const declaration = field.signature.split("=")[0].trim();
          const name = declaration.split(" ").slice(-1)[0];
          if (name.toLowerCase() === memberName) fields.push(field);
        }
        if (fields.length > 0) {
          // Not sorted in tree, therefore not sorted here
          // const m = { fields: true };
          // fields.sort((a, b) =>
          //   ViewModel.memberName(a, m).localeCompare(ViewModel.memberName(b, m))
          // );
          return {
            isField: true,
            items: fields,
          };
        }
      }

      return {};
    },
    getLines(text) {
      if (text == null) return text;
      const lines = text.split("  \n");
      // if (lines.length > 1) console.log('split worked')
      return lines;
    },
    getTitle(datatype, members) {
      if (members.isConstructor) {
        return datatype.name + " constructor";
      }
      if (members.isProperty) {
       if (members.items[0].signature.includes("this[int"))
       {
          return "Item property"
       }
        const chunks = members.items[0].signature.split(" ");
        return chunks[chunks.length - 1] + " property";
      }
      if (members.isMethod) {
        const name = members.items[0].signature;
        const index = name.indexOf("(");
        const chunks = name.substring(0, index).split(" ");
        return chunks[chunks.length - 1] + " method";
      }
      if (members.isEvent) {
        const chunks = members.items[0].signature.split(" ");
        return chunks[chunks.length - 1] + " event";
      }
      if (members.isOperator) {
        const match = members.items[0].signature.match(/\S*\(.*\)/g);
        const name = match[0].split("(")[0];
        return name + " operator";
      }
      if (members.isField) {
        const declaration = members.items[0].signature.split("=")[0].trim();
        const name = declaration.split(" ").slice(-1)[0];
        return name + " field";
      }
      return this.memberName;
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
          return null;
        }
      }
      return type
    },
    typeUrl(typeToken){
    const tokenPath = this.tokenPath(typeToken)
    let link = tokenPath ? this.baseUrl + tokenPath : null
    //Try to get system links
    if(!link){
      if( typeToken.toLowerCase().startsWith("system")){
        let cleanType = typeToken.split("<")[0];
        cleanType = cleanType.split("[")[0];
        link = `https://learn.microsoft.com/en-us/dotnet/api/${cleanType}`
      }
    }
    return link;
    },
    signature(member){
      const tokens = member.signature.split(' ')
      const chunks = []
      if (tokens[0] === 'static') {
        chunks.push({ name: tokens[0] + ' ' })
        tokens.shift()
      }
      if (this.members.isEvent) {
        chunks.push({ name: tokens[0]+ ' '  })
        chunks.push({ name: tokens[1] })
        return chunks
      }
      if (this.members.isProperty || this.members.isMethod || this.members.isOperator) {
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
    exampleUrl(member) {
      let name = member.examples[0].name;
      const index = name.lastIndexOf(".");
      name = name.substring(0, index).toLowerCase();
      return this.baseUrl + "examples/" + name;
    },
    getExamples(parentType, item) {
      if (!item.examples) {
        item.examples = [];
        let fullname = null;
        if (parentType.namespace)
          fullname = parentType.namespace + "." + parentType.name;
        else fullname = parentType.name;
        Examples.forEach((example) => {
          example.members.forEach((member) => {
            const type = member[0];
            if (fullname === type) {
              const signature = member[1];
              if (signature === item.signature) {
                item.examples.push(example);
              }
            }
          });
        });
      }
      return item.examples;
    },
  },
};
</script>
