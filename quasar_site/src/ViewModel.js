import ApiInfo from "./api_info.json";

const DataTypes = {
  NAMESPACE: "namespace",
  CLASS: "class",
  ENUM: "enum",
  EVENT: "event",
  INTERFACE: "interface",
  STRUCT: "struct",
};

const _selectedItemChangedCallbacks = {};
let _viewmodel = null;
let _typemap = null;
let _searchInstance = null;
let _selectedPath = "";
let _lastFound = null;
let _pathMap = {};

let updateTree = (path, children) => (obj) => {
  if (obj.path === path) {
    obj.children = children;
    return true;
  } else if (obj.children) return obj.children.some(updateTree(path, children));
};

const ViewModel = {
  itemPath(item) {
    if (item.path) {
      return item.path;
    }
    let path = null;
    if (item.namespace) path = item.namespace + "." + item.name;
    else path = item.name;
    return path.toLowerCase();
  },
  childTree(parent, childType) {
    const childrenGroupPath = `${this.itemPath(
      parent
    )}#${childType.toLowerCase()}`;
    const includeInherited =
      childType.toLowerCase() == "constructors" ? false : true;
    const members = this.getMembers(
      parent,
      childType.toLowerCase(),
      includeInherited
    );
    if (!members) {
      return;
    }
    if (members.length < 1) {
      return;
    }

    //An array containing top level children to determine if an overload should be skipped
    let topLevelChild = [];

    let children = members.map((x) => {
      const labelParts = this.shortSignature(
        this.memberName(x, childType.toLowerCase())
      );

      const overloads = members.filter((m) => {
        return m.path == x.path;
      });

      if (topLevelChild.includes(x.path)) {
        return null;
      } else {
        topLevelChild.push(x.path);
        return {
          label: labelParts[0],
          labelSecondary: labelParts[1],
          overload: x.overload,
          path: x.path,
          header: "secondary",
          deprecated: x.deprecated,
          obsolete: x.obsolete,
          since: x.since,
          inherited: x.inherited,
          children:
            overloads.length > 1
              ? overloads.map((o) => {
                  return {
                    label: this.shortSignature(
                      this.memberName(o, childType.toLowerCase())
                    )[1],
                    path: `${o.path}#${this.signatureAnchorRef(o.signature)}`,
                    since: o.since,
                  };
                })
              : [],
        };
      }
    });

    // Don't display overlaods in tree: WWW-2046
    children = children.filter((child) => child);

    const childrenGroup = {
      label: childType,
      namespace: parent.namespace,
      parents: [this.itemPath(parent)],
      path: childrenGroupPath,
      children,
    };
    _pathMap[childrenGroupPath] = childrenGroup;
    return childrenGroup;
  },
  lazyChildForPath(path) {
    for (let i = 0; i < ApiInfo.length; i++) {
      const type = ApiInfo[i];
      let summary = "";
      if (type.dataType !== DataTypes.NAMESPACE) {
        if (this.itemPath(type) == path) {
          const children = [];
          const constructors = this.childTree(type, "Constructors");
          if (constructors) {
            children.push(constructors);
          }
          const properties = this.childTree(type, "Properties");
          if (properties) {
            children.push(properties);
          }
          const methods = this.childTree(type, "Methods");
          if (methods) {
            children.push(methods);
          }
          const events = this.childTree(type, "Events");
          if (events) {
            children.push(events);
          }
          const operators = this.childTree(type, "Operators");
          if (operators) {
            children.push(operators);
          }
          const fields = this.childTree(type, "Fields");
          if (fields) {
            children.push(fields);
          }

          //replace the populated child in the _viewmodel and _pathMap
          _pathMap[this.itemPath(type)]["children"] = children;
          _viewmodel.forEach(updateTree(path, children));

          return children;
        }
      }
    }
  },
  resetTree() {
    _viewmodel = null;
    _searchInstance = null;
  },
  getTree() {
    if (_viewmodel) return _viewmodel;
    let viewmodel = null;
    {
      // console.log('creating viewodel')
      const namespaceDict = {};
      ApiInfo.forEach((type) => {
        let summary = "";
        if (type.summary) summary = type.summary;
        if (type.dataType === DataTypes.NAMESPACE) {
          namespaceDict[type.name] = {
            label: type.name,
            path: this.itemPath(type),
            summary: summary,
            children: [],
          };
        } else {
          const item = {
            label: type.name,
            path: this.itemPath(type),
            summary: summary,
            children: [],
          };
          if (
            type.methods ||
            type.constructors ||
            type.properties ||
            type.events ||
            type.operators ||
            type.fields
          ) {
            item["lazy"] = true;
          }

          if (type.inherits) item.inherits = type.inherits;
          const node = namespaceDict[type.namespace];
          if (!node) {
            console.warn("no namespace for " + type.name);
          } else {
            namespaceDict[type.namespace].children.push(item);
          }
        }
        _pathMap[this.itemPath(type)] = type;
      });
      viewmodel = [];
      const namespaceKeys = Object.keys(namespaceDict).sort();
      namespaceKeys.forEach((ns) => {
        viewmodel.push(namespaceDict[ns]);
      });
    }
    console.log("end tree");
    _viewmodel = viewmodel;
    return viewmodel;
  },
  getTypeMap() {
    if (_typemap) return _typemap;
    const typemap = {};
    ApiInfo.forEach((type) => {
      if (type.dataType !== DataTypes.NAMESPACE) {
        if (typemap[type.name]) {
          let existing = typemap[type.name];
          if (existing.namespace != "Rhino.Geometry") {
            //In some rare instances, classes have the same name, Rhino.Geometry should take precedence RH-80781
            typemap[type.name] = type;
          }
        } else {
          typemap[type.name] = type;
        }
      }
    });
    _typemap = typemap;
    return typemap;
  },
  setSelectedItemChangedCallback(source, callback) {
    _selectedItemChangedCallbacks[source] = callback;
  },
  findNodeByPath(path) {
    if (!path) {
      return;
    }
    path = path.toLowerCase();
    let found = null;

    if (_lastFound && this.itemPath(_lastFound) === path) {
      return _lastFound;
    }

    ApiInfo.forEach((type) => {
      if (found) return;
      if (this.itemPath(type) === path) found = type;
    });
    _lastFound = found;

    return found;
  },
  setSelectedItem(item, updateRoute = true) {
    if (!item) {
      return;
    }
    item = item.split("?")[0]; //Remove ?query string from url
    item = item.split("#")[0]; //remove #anchors from url

    //Global tree selection callback handler
    let path = item.dataType ? this.itemPath(item) : item;

    // path = path.split("?")[0];

    // console.log("loading lazy childern:", path, _selectedPath);

    //Try to load its children
    this.lazyChildForPath(path);

    path = path.toLowerCase();
    if (path === _selectedPath) return; // no change
    _selectedPath = path;
    let node = null;
    if (item.dataType) {
      node = item;
    } else {
      if (_pathMap[path]) {
        node = _pathMap[path];
      } else {
        //If node is lazy loaded it doens't exist on page load, this.lazyChildForPath(parentPath) adds it to the tree
        const parentPath = path.split(/[//,#]+/)[0];
        this.lazyChildForPath(parentPath);
        node = _pathMap[path];
      }
    }
    if (node) {
      for (const [, callback] of Object.entries(
        _selectedItemChangedCallbacks
      )) {
        callback(node, updateRoute);
      }
    }
  },
  getinheritence(item) {
    const rc = [];
    let count = 0;
    while (item && item.baseclass) {
      count++;
      if (count > 10) break; // don't allow infinite loop due to some bug in my code
      const typemap = this.getTypeMap();
      let index = item.baseclass.lastIndexOf(".");
      let baseclass = item.baseclass.substring(index + 1);
      index = baseclass.indexOf("<");
      if (index > 0) {
        baseclass = baseclass.substring(0, index + 1) + "T>";
      }
      const link = item.baseclass.toLowerCase();
      const node = { name: item.baseclass };
      item = typemap[baseclass];
      if (baseclass === "EventArgs") item = null;
      if (item) {
        node.link = link;
        node.item = item;
      }
      rc.push(node);
    }
    rc.reverse();
    return rc;
  },
  getDerivedClasses(item) {
    const fullName = `${item.namespace}.${item.name}`.toLocaleLowerCase();
    const children = Object.values(this.getTypeMap()).filter(
      (c) => c.baseclass && c.baseclass.toLocaleLowerCase() == fullName
    );
    return children.map((c) => {
      return {
        ...c,
        link: `${c.namespace}.${c.name}`.toLocaleLowerCase(),
      };
    });
  },
  sinceIsGreater(test, existing) {
    if (test === existing) return false;
    const testVersion = test.split(".");
    const existingVersion = existing.split(".");

    if (testVersion[1] == "x") {
      testVersion[1] = 999;
    }
    if (existingVersion[1] == "x") {
      existingVersion[1] = 999;
    }

    if (parseInt(testVersion[0]) < parseInt(existingVersion[0])) return false;
    if (
      testVersion[0] === existingVersion[0] &&
      parseInt(testVersion[1]) < parseInt(existingVersion[1])
    ) {
      return false;
    }
    return true;
  },
  mostRecentSince() {
    let since = "0.0";
    ApiInfo.forEach((type) => {
      if (type.constructors) {
        type.constructors.forEach((c) => {
          if (c.since && this.sinceIsGreater(c.since, since)) since = c.since;
        });
      }
      if (type.properties) {
        type.properties.forEach((prop) => {
          if (prop.since && this.sinceIsGreater(prop.since, since))
            since = prop.since;
        });
      }
      if (type.methods) {
        type.methods.forEach((m) => {
          if (m.since && this.sinceIsGreater(m.since, since)) since = m.since;
        });
      }
      if (type.operators) {
        type.operators.forEach((m) => {
          if (m.since && this.sinceIsGreater(m.since, since)) since = m.since;
        });
      }
      if (type.fields) {
        type.fields.forEach((m) => {
          if (m.since && this.sinceIsGreater(m.since, since)) since = m.since;
        });
      }
    });
    return since;
  },
  getFilteredSet(test) {
    const api = [];
    ApiInfo.forEach((type) => {
      const localApi = {
        name: type.name,
        dataType: type.dataType,
        summary: type.summary,
        constructors: [],
        methods: [],
        properties: [],
        values: [],
        operators: [],
        fields: [],
      };
      if (type.namespace) localApi.namespace = type.namespace;
      let added = test(type, type.constructors, localApi.constructors);
      added += test(type, type.properties, localApi.properties);
      added += test(type, type.methods, localApi.methods);
      added += test(type, type.operators, localApi.operators);
      added += test(type, type.fields, localApi.fields);
      if (type.values && type.since === "7.0") {
        added += test(type, type.values, localApi.values);
      }
      if (added > 0) {
        api.push(localApi);
      }
    });
    return api;
  },
  getFilteredApi(version) {
    const test = function (type, inputList, outputList) {
      let count = 0;
      if (inputList) {
        inputList.forEach((item) => {
          if (item.since === version || type.since === version) {
            outputList.push(item);
            count++;
          }
        });
      }
      return count;
    };
    return this.getFilteredSet(test);
  },
  getReferences(item) {
    // console.log('get references')
    const searchName = item.name;
    const test = function (type, inputList, outputList) {
      let count = 0;
      if (inputList) {
        inputList.forEach((member) => {
          if (member.signature.indexOf(searchName) >= 0) {
            let found = false;
            if (type.properties === inputList || type.methods === inputList) {
              // check on match for return type
              const tokens = member.signature.split(" ");
              found = tokens[0] === searchName;
              found =
                found || (tokens[0] === "static" && tokens[1] === searchName);
            }
            if (!found) {
              if (
                type.methods === inputList ||
                type.constructors === inputList
              ) {
                const index = member.signature.indexOf("(");
                const parameters = member.signature.substring(
                  index + 1,
                  member.signature.length - 1
                );
                const paramTokens = parameters.split(",");
                for (let i = 0; i < paramTokens.length; i++) {
                  if (paramTokens[i].startsWith(searchName)) {
                    found = found || paramTokens[i] === searchName;
                    if (paramTokens[i].length > searchName.length) {
                      found = paramTokens[i][searchName.length] === " ";
                    }
                  }
                }
              }
            }

            if (found) {
              outputList.push(member);
              count++;
            }
          }
        });
      }
      return count;
    };
    return this.getFilteredSet(test);
  },
  getSearchInstance() {
    return _searchInstance;
  },
  setSearchInstance(searchInstance) {
    _searchInstance = searchInstance;
  },
  getSearchList() {
    const items = [];
    ApiInfo.forEach((entry) => {
      if (entry.dataType === "namespace") return;
      const dataTypeUrl = (entry.namespace + "." + entry.name).toLowerCase();
      const typename = entry.namespace + "." + entry.name;
      let node = {
        typename: typename,
        member: entry.name,
        type: entry.dataType,
        url: dataTypeUrl,
        keywords: dataTypeUrl.replaceAll(".", " "),
      };
      if (entry.summary) node.summary = entry.summary;
      items.push(node);
      if (entry.properties) {
        entry.properties.forEach((prop) => {
          const chunks = prop.signature.split(" ");
          node = { typename: typename, member: chunks[chunks.length - 1] };
          if (items[items.length - 1].member === node.member) return;
          node.type = "property";
          node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${this.signatureAnchorRef(
            prop.signature
          )}`;
          node.since = entry.since;
          node.keywords =
            dataTypeUrl.replaceAll(".", " ") + " " + node.member.toLowerCase();
          if (prop.summary) node.summary = prop.summary;
          items.push(node);
        });
      }
      if (entry.methods) {
        entry.methods.forEach((method) => {
          let chunks = method.signature.split("(");
          chunks = chunks[0].split(" ");
          node = { typename: typename, member: chunks[chunks.length - 1] };
          node.type = "method";
          node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${this.signatureAnchorRef(
            method.signature
          )}`;
          node.since = method.since;
          node.keywords =
            dataTypeUrl.replaceAll(".", " ") + " " + node.member.toLowerCase();
          if (method.summary) node.summary = method.summary;
          items.push(node);
        });
      }
      if (entry.events) {
        entry.events.forEach((event) => {
          const chunks = event.signature.split(" ");
          node = { typename: typename, member: chunks[chunks.length - 1] };
          if (items[items.length - 1].member === node.member) return;
          node.type = "event";
          node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${this.signatureAnchorRef(
            event.signature
          )}`;
          node.since = event.since;
          node.keywords =
            dataTypeUrl.replaceAll(".", " ") + " " + node.member.toLowerCase();
          if (event.summary) node.summary = event.summary;
          items.push(node);
        });
      }
      if (entry.operators) {
        entry.operators.forEach((operator) => {
          const chunks = operator.signature.split(" ");
          node = { typename: typename, member: chunks[chunks.length - 1] };
          if (items[items.length - 1].member === node.member) return;
          node.type = "operator";
          node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${this.signatureAnchorRef(
            operator.signature
          )}`;
          node.since = operator.since;
          node.keywords =
            dataTypeUrl.replaceAll(".", " ") + " " + node.member.toLowerCase();
          if (operator.summary) node.summary = operator.summary;
          items.push(node);
        });
      }
      if (entry.fields) {
        entry.fields.forEach((field) => {
          const chunks = field.signature.split(" ");
          node = { typename: typename, member: chunks[chunks.length - 1] };
          if (items[items.length - 1].member === node.member) return;
          node.type = "field";
          node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${this.signatureAnchorRef(
            field.signature
          )}`;
          node.since = field.since;
          node.keywords =
            dataTypeUrl.replaceAll(".", " ") + " " + node.member.toLowerCase();
          if (field.summary) node.summary = field.summary;
          items.push(node);
        });
      }
    });
    return items;
  },

  getMembers(node, memberType, inherited = true) {
    const inheritence = this.getinheritence(node);
    let members = [].concat(node[memberType]);

    if (node[memberType]) {
      for (let i = 0; i < members.length; i++) {
        members[i].parent = node.namespace + "." + node.name;
        members[i].namespace = node.namespace;
        const url = this.memberUrl(memberType, members[i]);
        members[i].path = url;
        members[i].parents = [
          `${this.itemPath(node)}#${memberType}`,
          this.itemPath(node),
        ];
      }
    }
    members = members.filter((m) => m != null);
    if (inherited) {
      for (const i in inheritence) {
        if (!inheritence[i].item) continue;
        const inheritedMembers = inheritence[i].item[memberType];
        if (inheritedMembers == null) continue;

        for (let j = 0; j < inheritedMembers.length; j++) {
          inheritedMembers[j].parent =
            inheritence[i].item.namespace + "." + inheritence[i].item.name;
          inheritedMembers[j].namespace = inheritence[i].item.namespace;

          const url = this.memberUrl(memberType, inheritedMembers[j]);
          inheritedMembers[j].path = url;
        }


        const inheritedMembersMarked = inheritedMembers.map((m) => {
          m.inherited = true;
          return m;
        });

        members = members.concat(inheritedMembersMarked);
        members = members.filter((m) => m != null);

        // Morteza Aug 28, 2023: may be redundant since we're sorting at the end of this functions
        // if (memberType == "methods") {
        //   const m = { methods: true };
        //   members.sort((a, b) =>
        //     this.memberName(a, m).localeCompare(this.memberName(b, m))
        //   );
        // }
        // if (memberType == "properties") {
        //   const m = { properties: true };
        //   members.sort((a, b) =>
        //     this.memberName(a, m).localeCompare(this.memberName(b, m))
        //   );
        // }
      }
    }

    // // Adding an overload tag to members with same declarations
    // members.forEach((member, id) => {
    //   const nextMember = members[id + 1];
    //   const prevMember = members[id - 1];
    //   if (prevMember && prevMember.path == member.path) {
    //     member.overload = prevMember.overload + 1;
    //   } else if (nextMember && nextMember.path == member.path) {
    //     member.overload = 1;
    //   }
    // });

    // Updating path for  members with overloads and updating _pathMap
    members.forEach((member) => {
      if (member.overload) {
        // member.path = `${member.path}?overload=${member.overload}`;
      }
      _pathMap[member.path] = member;
    });

    members.sort((a, b) =>
      this.memberName(a, memberType).localeCompare(
        this.memberName(b, memberType)
      )
    );

    return members;
  },
  memberName(member, memberType) {
    if (memberType == "constructors" || memberType == "values")
      return member.signature;
    if (memberType == "operators") {
      const match = member.signature.match(/\S*\(.*\)/g);
      return match[0].split("(")[0];
    }
    if (memberType == "fields") {
      const declaration = member.signature.split("=")[0].trim();
      return declaration.split(" ").slice(-1)[0];
    }
    if (memberType == "methods") {
      const match = member.signature.match(/\S*\(.*\)/g);
      return match[0];
    }
    if (memberType == "properties") {
      if (member.signature.includes("this[int")) {
        return "Item";
      }
    }
    const tokens = member.signature.split(" ");
    let name = tokens[1];
    if (tokens[0] === "static") {
      name = tokens[2];
    }
    if (!name) {
      return "";
    }
    let index = name.indexOf("(");
    if (index > 0) {
      index = member.signature.indexOf(name);
      return member.signature.substring(index);
    }
    return name;
  },
  shortSignature(signature) {
    if (signature.includes("(")) {
      const parts = signature.split("(");
      const name = parts[0];
      const argsTypes = parts[1]
        .replace(/^\)+|\)+$/g, "")
        .split(",")
        .map((a) => a.trim().split(" ")[0].split(".").slice(-1)[0]);
      const commaSeparatedTypes = argsTypes.join(", ");
      // return `${name}(${commaSeparatedTypes})`;
      return [name, `(${commaSeparatedTypes})`];
    }
    return [signature, ""];
  },
  signatureAnchorRef(signature) {
    return this.shortSignature(signature)[1]
      .toLocaleLowerCase()
      .replace(/\s/g, "");
  },
  memberUrl(memberType, member) {
    if (memberType == "values") return "";
    let name = this.memberName(member, memberType).toLowerCase();
    const index = name.indexOf("(");
    if (index > 0) name = name.substring(0, index);
    if (memberType == "constructors") {
      const url = member.namespace + "." + name + "/" + name;
      return url.toLowerCase();
    }
    const url = member.parent + "/" + name;
    return url.toLowerCase();
  },
};

export default ViewModel;
