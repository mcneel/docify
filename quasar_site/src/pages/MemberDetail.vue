<template>
  <q-page>
    <div class="q-pa-sm">
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
      <h1>{{ getTitle(datatype, members) }}</h1>
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

      <q-list>
        <div v-for="(member, index) in members.items" :key="index">
          <q-item>
            <q-item-section>
              <q-item-label v-if="member.summary" class="text-h6"
                >Description:</q-item-label
              >
              <q-item-label caption v-if="member.summary" class="on-right">
                <span
                  v-for="(line, index) in getLines(member.summary)"
                  :key="1000 + index"
                >
                  <br v-if="index > 0" />
                  {{ line }}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>

          <!--Syntax-->
          <q-item>
            <q-item-section>
              <q-item-label v-if="member.signature" class="text-h6"
                >Syntax:</q-item-label
              >
              <q-card
                flat
                bordered
                style="font-family: monospace; margin: 10px; padding: 10px"
              >
                <q-item-label
                  style="font-size: 18px"
                  :class="member.deprecated && 'light-dimmed'"
                >
                  <template
                    v-for="(chunk, idx) in preSyntax(member)"
                    :key="idx + 1000"
                  >
                    <span v-if="chunk.link">
                      <router-link class="routerlink" :to="chunk.link">{{
                        chunk.name.trim()
                      }}</router-link>
                    </span>
                    <span v-else>{{ chunk.name }}</span>
                  </template>
                  <template
                    v-for="parameter in member.parameters"
                    :key="parameter.name"
                  >
                    <br />
                    <span class="q-pl-lg">{{ parameter.type }}&nbsp;</span>
                    <span class="text-italic">{{ parameter.name }},</span>
                  </template>
                  <span v-if="member.signature.endsWith(')')">
                    <br v-if="member.parameters" />
                    )
                  </span>
                </q-item-label>
              </q-card>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label caption class="on-right">
                <q-badge v-if="member.deprecated" outline color="negative"
                  >deprecated in {{ member.deprecated }}
                  <q-tooltip
                    >Deprecated in version {{ member.deprecated }}</q-tooltip
                  >
                </q-badge>
              </q-item-label>
              <q-item-label v-if="member.parameters" class="text-h6"
                >Parameters:</q-item-label
              >
              <q-item-label
                class="row"
                v-for="parameter in member.parameters"
                :key="parameter.name"
              >
                <ul
                  style="
                    padding-inline-start: 0px;
                    list-style-type: none;
                    margin-block-start: 0;
                    margin-block-end: 5px;
                  "
                >
                  <li class="text-italic">{{ parameter.name }}</li>
                  <li class="q-pl-lg text-weight-light"><span>Type: </span>
                    <template v-if="linkForType(parameter.type)">
                      <router-link class="routerlink text-weight-regular" :to="linkForType(parameter.type)">
                        {{ parameter.type }}
                      </router-link></template>
                    <template v-else><span class="disabled disabledLink text-weight-regular">{{ parameter.type }}</span></template>
                  </li>
                  <li v-html="parameter.summary" class="q-pl-lg text-weight-light"></li>
                </ul>
              </q-item-label>
              <q-item-label
                v-if="member.returns"
                class="text-h6"
                style="margin-top: 10px"
                >Returns:</q-item-label
              >
              <q-item-label class="on-right text-weight-light" v-if="member.returns">
                {{ member.returns }}
              </q-item-label>
              <q-item-label
                caption
                v-if="member.since"
                class="text-bold"
                style="margin-top: 10px"
                >Available since:</q-item-label
              >
              <q-item-label caption class="on-right" v-if="member.since">
                {{ member.since }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            v-if="member.examples && member.examples.length > 0"
            dense
            class="on-right"
            style="margin-top: 10px"
          >
            <q-btn
              no-caps
              outline
              dense
              size="sm"
              icon="mdi-code-tags"
              color="secondary"
              :to="exampleUrl(member)"
            >
              Example
            </q-btn>
          </q-item>
          <q-separator spaced inset />
        </div>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import ViewModel from "../ViewModel";
import Examples from "../api_examples.json";
import ProjInfo from "../proj_info.json";
import { createMetaMixin } from "quasar";

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
  props: {
    baseUrl: { type: String },
  },
  data() {
    const mostRecent = ViewModel.mostRecentSince();
    return {
      memberName: null,
      datatype: null,
      members: {},
      version: mostRecent,
    };
  },
  mixins: [
    //This is where page meta gets set because why the heck NOT Quasar
    createMetaMixin(function () {
      // "this" here refers to your component
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
    }),
  ],
  mounted() {
    console.log("mounted member detail");
    this.renderUrl(this.$route);
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to.params.datatype && to.params.member) {
        this.renderUrl(to);
      }
    },
  },
  methods: {
    renderUrl(route) {
      //TODO: need to pay attention to full path when setting selected item
      this.datatype = ViewModel.findNodeByPath(route.params.datatype);
      this.memberName = route.params.member.toLowerCase();
      const members = this.getMembers(this.datatype, this.memberName);
      members.items = members.items.map((m) => {
        const examples = this.getExamples(this.datatype, m);
        return { ...m, examples };
      });
      this.members = Object.freeze(members);
      const selectedItem = decodeURI(
        route.fullPath.substring(this.baseUrl.length)
      );
      ViewModel.setSelectedItem(selectedItem, false);
    },
    getMembers(datatype, memberName) {
      if (datatype.name.toLowerCase() === memberName) {
        datatype.constructors.sort((a, b) => {
          if (a.deprecated && !b.deprecated) return 1;
          if (!a.deprecated && b.deprecated) return -1;
          return 0;
        });
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
        }
        if (props.length > 0) {
          props.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1;
            if (!a.deprecated && b.deprecated) return -1;
            return 0;
          });
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
          methods.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1;
            if (!a.deprecated && b.deprecated) return -1;
            return 0;
          });
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
          events.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1;
            if (!a.deprecated && b.deprecated) return -1;
            return 0;
          });
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
          operators.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1;
            if (!a.deprecated && b.deprecated) return -1;
            return 0;
          });
          return {
            isOperator: true,
            items: operators,
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
      return this.memberName;
    },
    tokenPath(token) {
      // skip tokens that start with a lower case letter
      if (token.length < 1 || token[0] === token[0].toLowerCase()) return null;
      if (token.endsWith("[]")) token = token.substring(0, token.length - 2);
      // if (token === this.datatype.name) return null
      const typeMap = ViewModel.getTypeMap();
      const type = typeMap[token];
      if (!type) return null;
      return ViewModel.itemPath(type);
    },
    preSyntax(member) {
      // const noArgs = member.signature.split('(')[0]
      // const tokens = noArgs.split(' ')
      const tokens = member.signature.split(" ");
      const chunks = [];
      if (tokens[0] === "static") {
        chunks.push({ name: tokens[0] + " " });
        tokens.shift();
      }
      if (this.members.isEvent) {
        chunks.push({ name: tokens[0] });
        return chunks;
      }
      if (
        this.members.isProperty ||
        this.members.isMethod ||
        this.members.isOperator
      ) {
        // try to get a link for the return type
        const tokenPath = this.tokenPath(tokens[0]);
        const link = tokenPath ? this.baseUrl + tokenPath : null;
        if (link) {
          chunks.push({
            link: link,
            name: tokens[0],
          });
          chunks.push({ name: " " });
        } else {
          chunks.push({ name: tokens[0] + " " });
        }
        tokens.shift();
      }
      const declaration = tokens.join(" ");
      const parenIndex = declaration.indexOf("(");
      if (parenIndex > 0) {
        chunks.push({ name: declaration.substring(0, parenIndex + 1) });
        const parameterTokens = declaration
          .substring(parenIndex + 1, declaration.length - 1)
          .split(",");
        for (let i = 0; i < parameterTokens.length; i++) {
          if (
            parameterTokens[i].indexOf("<") > 0 &&
            i < parameterTokens.length - 1
          ) {
            parameterTokens[i] =
              parameterTokens[i] + "," + parameterTokens[i + 1];
            parameterTokens[i + 1] = "";
          }
        }
      }
      //   for (let i = 0; i < parameterTokens.length; i++) {
      //     if (!parameterTokens[i]) continue
      //     if (i > 0) chunks.push({ name: ', ' })
      //     const parameter = parameterTokens[i].trim()
      //     const paramChunks = parameter.split(' ')
      //     const typeToken = paramChunks[paramChunks.length - 2]
      //     const paramName = paramChunks[paramChunks.length - 1]
      //     const tokenPath = this.tokenPath(typeToken)
      //     const link = tokenPath ? this.baseUrl + tokenPath : null

      //     // console.log(tokens);
      //     if (link) {
      //       for (let j = 0; j < paramChunks.length - 2; j++) {
      //         chunks.push({ name: paramChunks[j] + ' ' })
      //       }
      //       chunks.push({
      //         link: link,
      //         name: typeToken + ' '
      //       })
      //       chunks.push({ name: paramChunks[paramChunks.length - 1] })
      //       //keep track of param names and their types
      //       this.paramTypes[paramName] = {
      //         link: link,
      //         path: titleCase(tokenPath),
      //         type: typeToken
      //       }
      //     } else {
      //       chunks.push({ name: parameter })
      //       this.paramTypes[paramName] = {
      //         path: tokenPath || typeToken,
      //         type: typeToken
      //       }
      //     }
      //   }
      //   chunks.push({ name: ')' })
      // } else {
      //   chunks.push({ name: declaration })
      // }
      if (member.property) {
        let s = " {";
        for (let i = 0; i < member.property.length; i++) {
          if (i > 0) s += "|";
          s += member.property[i];
        }
        s += "}";
        chunks.push({ name: s });
      }
      return chunks;
    },
    linkForType(typeToken){
      const tokenPath = this.tokenPath(typeToken)
      const link = tokenPath ? this.baseUrl + tokenPath : null
      return link;
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
