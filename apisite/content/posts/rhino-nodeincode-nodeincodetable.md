---
title: "NodeInCodeTable"
draft: false
---

*Namespace: Rhino.NodeInCode*

   Permits rapid access to references to all Grasshopper functions.
   
## Constructors
#### Rhino.NodeInCode.NodeInCodeTable(IEnumerable<ComponentFunctionInfo> items)
- (summary) 
     Instantiates the table. Users of RhinoCommon do not typically need to call this constructor.
     
- (since) 6.0
## Properties
#### int Count
- (summary) 
     Returns the amount of items in this table.
     
- (since) 6.0
## Methods
#### void Add(ComponentFunctionInfo item)
- (summary) 
     Adds, or replaces a new instance of component function information.
     
- (since) 6.0
- (returns) void This is some return comment
#### IEnumerable<string> GetDynamicMemberNames()
- (summary) 
     Returns all additional names in the table.
     
- (since) 6.0
- (returns) IEnumerable<string> This is some return comment
#### bool TryGetIndex(GetIndexBinder binder,object[] indexes,object result)
- (summary) 
     Gets the ComponentFunctionInfo at 
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool TryGetMember(GetMemberBinder binder,object result)
- (summary) 
     Dynamically binds the table to property-like access via its item names.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool TryInvokeMember(InvokeMemberBinder binder,object[] args,object result)
- (summary) 
     Dynamically invokes a member of the table.
     
- (since) 6.0
- (returns) bool This is some return comment
