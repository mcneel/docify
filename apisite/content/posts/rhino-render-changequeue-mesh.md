---
title: "Mesh"
draft: false
---

*Namespace: Rhino.Render.ChangeQueue*

   Representation of ChangeQueue Mesh
   
## Properties
#### ObjectAttributes Attributes
- (summary) 
     Get object attributes of object associated to this mesh. This will be possible only 
     after returning True from ChangeQueue.ProvideOriginalObject()
     
- (since) 6.0
#### MappingChannelCollection Mapping
- (summary) 
     Get the mapping for this mesh.
     
- (since) 6.0
#### RhinoObject Object
- (summary) 
     Get a copy of the original RhinoObject this Mesh is created from. Possible only after
     return True from ChangeQueue.ProvideOriginalObject().
     
     Access this only with a using(var o = mesh.Object) {} construct.
     
     Note that the object is free floating, i.e. not part of a document.
     
- (since) 6.8
#### MappingChannel SingleMapping
- (summary) 
     Get texture mapping info as single mapping
     
- (since) 6.0
## Methods
#### Geometry.Mesh[] GetMeshes()
- (summary) 
     Get a SimpleArrayMeshPointer containing all meshes for the related Mesh
     
- (since) 6.0
- (returns) Geometry.Mesh[] This is some return comment
#### Guid Id()
- (summary) 
     Get the Object Guid this mesh is for.
     
- (since) 6.0
- (returns) Guid This is some return comment
