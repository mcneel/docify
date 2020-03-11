---
title: "InstanceDefinitionGeometry"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a block definition in a File3dm. This is the same as
   Rhino.DocObjects.InstanceDefinition, but not associated with a RhinoDoc.
```cs
public class InstanceDefinitionGeometry : ModelComponent
```
## Constructors

InstanceDefinitionGeometry()
: Initializes a new block definition.
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

string Description
: Gets or sets the description of the definition.
## Methods

Guid[] GetObjectIds()
: list of object ids in the instance geometry table
: since 5.6
