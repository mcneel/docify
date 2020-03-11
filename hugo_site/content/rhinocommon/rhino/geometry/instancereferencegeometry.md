---
title: "InstanceReferenceGeometry"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a reference to the geometry in a block definition.
```cs
public class InstanceReferenceGeometry : GeometryBase
```
## Constructors

InstanceReferenceGeometry(Guid instanceDefinitionId,Transform transform)
: Constructor used when creating nested instance references.
: since 5.1
## Properties

Guid ParentIdefId
: The unique id for the parent instance definition of this instance reference.
: since 5.6

[Transform](/rhinocommon/rhino/geometry/transform/) Xform
: Transformation for this reference.
: since 5.6
