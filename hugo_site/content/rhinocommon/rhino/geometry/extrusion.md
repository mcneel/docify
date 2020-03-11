---
title: "Extrusion"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an extrusion, or objects such as beams or linearly extruded elements,
   that can be represented by profile curves and two miter planes at the extremes.
```cs
[Serializable]
public class Extrusion : Surface
```
## Constructors

Extrusion()
: Initializes a new instance of the  class.
## Properties

int CapCount
: Gets the amount of capping surfaces.

bool IsCappedAtBottom
: Gets a value indicating whether the surface that fills the bottom profile is existing.

bool IsCappedAtTop
: Gets a value indicating whether the surface that fills the top profile is existing.

bool IsMiteredAtEnd
: Gets a value indicating whether a miter plane at the end is defined.

bool IsMiteredAtStart
: Returns a value indicating whether a miter plane at start is defined.

bool IsSolid
: Gets a value indicating whether there is no gap among all surfaces constructing this object.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) MiterPlaneNormalAtEnd
: Gets or sets the normal of the miter plane at the end in profile coordinates.
     In profile coordinates, 0,0,1 always maps to the extrusion axis

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) MiterPlaneNormalAtStart
: Gets or sets the normal of the miter plane at the start in profile coordinates.
     In profile coordinates, 0,0,1 always maps to the extrusion axis

[Point3d](/rhinocommon/rhino/geometry/point3d/) PathEnd
: Gets the end point of the path.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PathStart
: Gets the start point of the path.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) PathTangent
: Gets the up vector of the path.

int ProfileCount
: Gets the amount of profile curves.
## Methods

static Extrusion Create(Curve planarCurve,double height,bool cap)
: Creates an extrusion of a 3d curve (which must be planar) and a height.
: Returns - If the input is valid, then a new extrusion is returned. Otherwise None is returned
: since 5.1

static Extrusion CreateBoxExtrusion(Box box,bool cap)
: Gets an extrusion from a box.
: Returns - Extrusion on success. None on failure.
: since 6.0

static Extrusion CreateCylinderExtrusion(Cylinder cylinder,bool capBottom,bool capTop)
: Gets an extrusion form of a cylinder.
: Returns - Extrusion on success. None on failure.

static Extrusion CreatePipeExtrusion(Cylinder cylinder,double otherRadius,bool capTop,bool capBottom)
: Gets an extrusion form of a pipe.
: Returns - Extrusion on success. None on failure.

bool AddInnerProfile(Curve innerProfile)
: Adds an inner profile.
: Returns - True if the profile was set.

[Mesh](/rhinocommon/rhino/geometry/mesh/) GetMesh(MeshType meshType)
: Obtains a reference to a specified type of mesh for this extrusion.
: Returns - A mesh.
: since 5.6

[Plane](/rhinocommon/rhino/geometry/plane/) GetPathPlane(double s)
: Gets the 3D plane perpendicular to the path at a normalized path parameter.
: Returns - A plane. The plane is Invalid on failure.

[Plane](/rhinocommon/rhino/geometry/plane/) GetProfilePlane(double s)
: Gets the 3D plane containing the profile curve at a normalized path parameter.
: Returns - A plane. The plane is Invalid on failure.

[Transform](/rhinocommon/rhino/geometry/transform/) GetProfileTransformation(double s)
: Gets the transformation that maps the xy profile curve to its 3d location.
: Returns - A Transformation. The transform is Invalid on failure.

[Curve](/rhinocommon/rhino/geometry/curve/)[] GetWireframe()
: Constructs all the Wireframe curves for this Extrusion.
: Returns - An array of Wireframe curves.
: since 5.6

[LineCurve](/rhinocommon/rhino/geometry/linecurve/) PathLineCurve()
: Gets the line-like curve that is the conceptual axis of the extrusion.
: Returns - The path as a line curve.

[Curve](/rhinocommon/rhino/geometry/curve/) Profile3d(ComponentIndex ci)
: Gets one of the profiles.
: Returns - The profile.

[Curve](/rhinocommon/rhino/geometry/curve/) Profile3d(int profileIndex,double s)
: Gets a transversal isocurve of the extruded profile.
: Returns - The profile.

int ProfileIndex(double profileParameter)
: Gets the index of the profile curve at a domain related to a parameter.
: Returns - -1 if profileParameter does not correspond to a point on the profile curve.
     When the profileParameter corresponds to the end of one profile and the
     beginning of the next profile, the index of the next profile is returned.

bool SetOuterProfile(Curve outerProfile,bool cap)
: Sets the outer profile of the extrusion.
: Returns - True if the profile was set. If the outer profile is closed, then the
     extrusion may also have inner profiles. If the outer profile is open,
     the extrusion may not have inner profiles. If the extrusion already
     has a profile, the set will fail.

bool SetPathAndUp(Point3d a,Point3d b,Vector3d up)
: Allows to set the two points at the extremes and the up vector.
: Returns - True if the operation succeeded; otherwise false.
     Setting up=a-b will make the operation fail.

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep(bool splitKinkyFaces)
: Constructs a brep form of the extrusion. The outer profile is always the first face of the brep.
     If there are inner profiles, additional brep faces are created for each profile. If the
     outer profile is closed, then end caps are added as the last two faces of the brep.
: Returns - A brep with a similar shape like this extrustion, or None on error.

[Curve](/rhinocommon/rhino/geometry/curve/) WallEdge(ComponentIndex ci)
: Gets one of the longitudinal curves along the beam or extrusion.
: Returns - The profile.

[Surface](/rhinocommon/rhino/geometry/surface/) WallSurface(ComponentIndex ci)
: Gets one of the longitudinal surfaces of the extrusion.
: Returns - The surface.
