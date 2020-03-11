---
title: "NodeInCodeTable"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.NodeInCode](../)*

Permits rapid access to references to all Grasshopper functions.
```cs
public class NodeInCodeTable : DynamicObject
```
## Constructors

NodeInCodeTable(IEnumerable<ComponentFunctionInfo> items)
: Instantiates the table. Users of RhinoCommon do not typically need to call this constructor.
: since 6.0
## Properties

int Count
: Returns the amount of items in this table.
: since 6.0
## Methods

void Add(ComponentFunctionInfo item)
: Adds, or replaces a new instance of component function information.
: since 6.0

IEnumerable<string> GetDynamicMemberNames()
: Returns all additional names in the table.
: since 6.0

bool TryGetIndex(GetIndexBinder binder,object[] indexes,object result)
: Gets the ComponentFunctionInfo at
: since 6.0

bool TryGetMember(GetMemberBinder binder,object result)
: Dynamically binds the table to property-like access via its item names.
: since 6.0

bool TryInvokeMember(InvokeMemberBinder binder,object[] args,object result)
: Dynamically invokes a member of the table.
: Returns - True on success.
: since 6.0
