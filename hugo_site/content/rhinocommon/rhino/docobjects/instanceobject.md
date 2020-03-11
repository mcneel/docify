---
title: "InstanceObject"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class InstanceObject : RhinoObject
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) InsertionPoint
: Basepoint coordinates of a block.

[InstanceDefinition](/rhinocommon/rhino/docobjects/instancedefinition/) InstanceDefinition
: instance definition that this object uses.

[Transform](/rhinocommon/rhino/geometry/transform/) InstanceXform
: transformation applied to an instance definition for this object.
## Methods

void Explode(bool explodeNestedInstances,RhinoObject[] pieces,ObjectAttributes[] pieceAttributes,Transform[] pieceTransforms)
: Explodes the instance reference into pieces.

bool UsesDefinition(int definitionIndex,int nestingLevel)
: Determine if this reference uses an instance definition
: Returns - True or False depending on if the deifinition is used
: since 5.2
