---
title: "GetEllipsoid"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Class provides user interface to define a truncated cone.
```cs
public class GetEllipsoid : IDisposable
```
## Constructors

GetEllipsoid()
: 
: since 7.0
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) FirstPoint
: Returns the first point. If in "from foci" mode, then this is the first foci point.
: since 7.0

bool IsModeFromFoci
: Indicates the ellipsoid was created from foci.
: since 7.0

bool MarkFoci
: Indicates the user wants the ellipsoid foci marked with point objects.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) SecondPoint
: Returns the second point. If in "from foci" mode, then this is the second foci point.
: since 7.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

Commands.Result Get(NurbsSurface ellipsoid)
: Prompt for the getting of a ellipsoid.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,bool quadCaps,Mesh ellipsoid)
: Prompt for the getting of a mesh ellipsoid.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,Mesh ellipsoid)
: Prompt for the getting of a mesh ellipsoid.
: Returns - The result of the getting operation.
: since 7.0
