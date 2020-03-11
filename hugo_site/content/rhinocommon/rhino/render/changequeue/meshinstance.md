---
title: "MeshInstance"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.ChangeQueue](../)*

Representation of ChangeQueue MeshInstance
```cs
public class MeshInstance
```
## Properties

bool CastShadows
: Return True if mesh instance should cast shadows
: since 6.0

uint GroupId
: Get identifier that specifies the grouping of these mesh instances - usually based on the object that this originally comprised.
: since 6.0

uint InstanceId
: Get the instance identifier for this mesh instance.
: since 6.0

uint MaterialId
: The Material CRC / RenderHash
: since 6.0

Guid MeshId
: Get the mesh identifier for this mesh instance.
: since 6.0

int MeshIndex
: Get the mesh index for this mesh instance.
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) OcsTransform
: OCS Transform for the MeshInstance (identity means no OCS, potentially just simple WCS/WCS Box)
: since 7.0

bool ReceiveShadows
: Return True if mesh instance should receive shadows
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) RenderMaterial
: RenderMaterial associated with mesh instance
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) Transform
: Transform for the MeshInstance
: since 6.0
