---
title: "Mesh"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.ChangeQueue](../)*

Representation of ChangeQueue Mesh
```cs
public class Mesh
```
## Properties

[ObjectAttributes](/rhinocommon/rhino/docobjects/objectattributes/) Attributes
: Get object attributes of object associated to this mesh. This will be possible only 
     after returning True from ChangeQueue.ProvideOriginalObject()
: since 6.0

[MappingChannelCollection](/rhinocommon/rhino/render/changequeue/mappingchannelcollection/) Mapping
: Get the mapping for this mesh.
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) Object
: Get a copy of the original RhinoObject this Mesh is created from. Possible only after
     return True from ChangeQueue.ProvideOriginalObject().
     
     Access this only with a using(var o = mesh.Object) {} construct.
     
     Note that the object is free floating, i.e. not part of a document.
: since 6.8

[MappingChannel](/rhinocommon/rhino/render/changequeue/mappingchannel/) SingleMapping
: Get texture mapping info as single mapping
: since 6.0
## Methods

Geometry.Mesh[] GetMeshes()
: Get a SimpleArrayMeshPointer containing all meshes for the related Mesh
: since 6.0

Guid Id()
: Get the Object Guid this mesh is for.
: Returns - Guid of parent object.
: since 6.0
