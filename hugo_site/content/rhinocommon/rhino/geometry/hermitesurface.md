---
title: "HermiteSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Create an ON_NurbsSurface satisfying Hermite interpolation conditions at a grid of points.
```cs
public class HermiteSurface : IDisposable
```
## Constructors

HermiteSurface()
: Initializes a new  instance.
: since 7.0

HermiteSurface(int uCount,int vCount)
: Initializes a new  instance.
: since 7.0
## Properties

bool IsValid
: Returns True if the all of values in all of the internal data structues contain valid values, False otherwise.
: since 7.0

int UCount
: Gets the number of parameters in the "u" direction.
: since 7.0

int VCount
: Gets the number of parameters in the "v" direction.
: since 7.0
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this class.
: Returns - The const pointer.
: since 7.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this class.
: Returns - The non-const pointer.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(int uIndex,int vIndex)
: Gets the interpolation point at the u,v parameter location.
: Returns - The point location.
: since 7.0

void SetPointAt(int uIndex,int vIndex,Point3d point)
: Sets the interpolation point at the u,v parameter location.
: since 7.0

void SetTwistAt(int uIndex,int vIndex,Vector3d twist)
: Set the twist direction (mixed second partial derivative) to intepolate at the u,v parameter location.
: since 7.0

void SetUParameterAt(int index,double parameter)
: Sets the "u" parameter at an index. These parameters are strictly increasing.
: since 7.0

void SetUTangentAt(int uIndex,int vIndex,Vector3d tangent)
: Set the "u" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
: since 7.0

void SetVParameterAt(int index,double parameter)
: Sets the "v" parameter at an index. These parameters are strictly increasing.
: since 7.0

void SetVTangentAt(int uIndex,int vIndex,Vector3d tangent)
: Set the "v" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
: since 7.0

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Constructs a NURBS surface satisfying the Hermite interpolation conditions.
: Returns - A NURBS surface is successful, None otherwise.
: since 7.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TwistAt(int uIndex,int vIndex)
: Get the twist direction (mixed second partial derivative) to intepolate at the u,v parameter location.
: Returns - The twist direction.
: since 7.0

double UParameterAt(int index)
: Gets the "u" parameter at an index. These parameters are strictly increasing.
: Returns - The parameter.
: since 7.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) UTangentAt(int uIndex,int vIndex)
: Get the "u" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
: Returns - The tangent direction.
: since 7.0

double VParameterAt(int index)
: Gets the "v" parameter at an index. These parameters are strictly increasing.
: Returns - The parameter.
: since 7.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) VTangentAt(int uIndex,int vIndex)
: Get the "v" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
: Returns - The tangent direction.
: since 7.0
