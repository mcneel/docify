---
title: "Rhino.FileIO.File3dmInstanceDefinitionTable"
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
# Methods
## int Add(string name,string description,Point3d basePoint,GeometryBase geometry,ObjectAttributes attributes)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 6.5
- (returns) int This is some return comment
## int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 6.5
- (returns) int This is some return comment
## int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 6.5
- (returns) int This is some return comment
## int AddLinked(string filename,string name,string description)
- (summary) 
     Adds a linked instance definition to the instance definition table.
     
- (since) 6.13
- (returns) int This is some return comment
## InstanceDefinitionGeometry FindName(string name)
- (summary) 
     Finds an InstanceDefinitionGeometry given its name.
     
- (since) 6.0
- (returns) InstanceDefinitionGeometry This is some return comment
## InstanceDefinitionGeometry FindNameHash(NameHash nameHash)
- (summary) 
     Finds a InstanceDefinitionGeometry given its name hash.
     
- (since) 6.0
- (returns) InstanceDefinitionGeometry This is some return comment
