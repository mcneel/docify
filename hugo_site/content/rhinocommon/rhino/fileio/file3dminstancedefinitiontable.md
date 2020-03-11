---
title: "File3dmInstanceDefinitionTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to instance (block) definitions in the 3dm file.
```cs
public class File3dmInstanceDefinitionTable :
    File3dmCommonComponentTable<InstanceDefinitionGeometry>, 
    IList<InstanceDefinitionGeometry>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

int Add(string name,string description,Point3d basePoint,GeometryBase geometry,ObjectAttributes attributes)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.
: since 6.5

int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.
: since 6.5

int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.
: since 6.5

int AddLinked(string filename,string name,string description)
: Adds a linked instance definition to the instance definition table.
: since 6.13

[InstanceDefinitionGeometry](/rhinocommon/rhino/geometry/instancedefinitiongeometry/) FindName(string name)
: Finds an InstanceDefinitionGeometry given its name.
: Returns - An InstanceDefinitionGeometry, or None on error.
: since 6.0

[InstanceDefinitionGeometry](/rhinocommon/rhino/geometry/instancedefinitiongeometry/) FindNameHash(NameHash nameHash)
: Finds a InstanceDefinitionGeometry given its name hash.
: Returns - An InstanceDefinitionGeometry, or None on error.
: since 6.0
