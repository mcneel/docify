---
title: "MappingTag"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Holds texture mapping information.
```cs
public class MappingTag
```
## Properties

Guid Id
: Gets or sets a map globally unique identifier.

uint MappingCRC
: Gets or sets the cyclic redundancy check on the mapping.
     See also .

[TextureMappingType](/rhinocommon/rhino/render/texturemappingtype/) MappingType
: Gets or sets a texture mapping type: linear, cylinder, etc...

[Transform](/rhinocommon/rhino/geometry/transform/) MeshTransform
: Gets or sets a 4x4 matrix transform.
