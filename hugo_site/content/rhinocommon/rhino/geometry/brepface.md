---
title: "BrepFace"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Provides strongly-typed access to brep faces.
   A Brep face is composed of one surface and trimming curves.
```cs
public class BrepFace : SurfaceProxy
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets the Brep that owns this face.
: since 6.9

int FaceIndex
: Index of face in Brep.Faces array.

bool IsSurface
: Gets a value indicating whether the face is synonymous with the underlying surface. 
     If a Face has no trimming curves then it is considered a Surface.

[BrepLoopList](/rhinocommon/rhino/geometry/collections/breplooplist/) Loops
: Loops in this face.

bool OrientationIsReversed
: True if face orientation is opposite of natural surface orientation.

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) OuterLoop
: Every face has a single outer loop.

int SurfaceIndex
: Surface index of the 3d surface geometry used by this face or -1
: since 5.6
## Methods

int[] AdjacentEdges()
: Gets the indices of all the BrepEdges that delineate this Face.

int[] AdjacentFaces()
: Gets the indices of all the BrepFaces that surround (are adjacent to) this face.

bool ChangeSurface(int surfaceIndex)
: Expert user tool that replaces the 3d surface geometry use by the face.
: Returns - True if successful.

[Brep](/rhinocommon/rhino/geometry/brep/) CreateExtrusion(Curve pathCurve,bool cap)
: Extrude a face in a Brep.
: Returns - A Brep on success or None on failure.
: since 5.3

bool DraftAnglePoint(Point2d testPoint,double testAngle,Vector3d pullDirection,bool edge,Point3d draftPoint,double draftAngle)
: Returns the surface draft angle and point at a parameter.
: Returns - True if successful, False otherwise.
: since 6.0

[Brep](/rhinocommon/rhino/geometry/brep/) DuplicateFace(bool duplicateMeshes)
: Duplicate a face from the brep to create new single face brep.
: Returns - A new single-face brep synonymous with the current Face.

[Surface](/rhinocommon/rhino/geometry/surface/) DuplicateSurface()
: Gets a copy to the untrimmed surface that this face is based on.
: Returns - A copy of this face's underlying surface.

[Mesh](/rhinocommon/rhino/geometry/mesh/) GetMesh(MeshType meshType)
: Obtains a reference to a specified type of mesh for this brep face.
: Returns - A mesh.

[PointFaceRelation](/rhinocommon/rhino/geometry/pointfacerelation/) IsPointOnFace(double u,double v)
: Tests if a parameter space point is on the interior of a trimmed face.
: Returns - A value describing the spatial relationship between the point and the face.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] PullPointsToFace(IEnumerable<Point3d> points,double tolerance)
: Pulls one or more points to a brep face.
: Returns - An array of pulled points.

bool RebuildEdges(double tolerance,bool rebuildSharedEdges,bool rebuildVertices)
: Rebuild the edges used by a face so they lie on the surface.
: Returns - True on success.

[Brep](/rhinocommon/rhino/geometry/brep/) RemoveHoles(double tolerance)
: Remove all inner loops, or holes, from a Brep face.
: since 6.0

bool SetDomain(int direction,Interval domain)
: Sets the surface domain of this face.
: Returns - True on success, False on failure.

bool SetMesh(MeshType meshType,Mesh mesh)
: Sets a reference to a specified type of mesh for this brep face.
: Returns - True if the operation succeeded; otherwise false.

bool ShrinkFace(ShrinkDisableSide disableSide)
: Shrinks the underlying untrimmed surface of this Brep face close to trimming boundaries.
     Shrinking a surface is like extending smoothly, only backwards. knot of full multiplicity
     are added where you want the surface to be cut off. Then the remaining control points are
     thrown away.
: Returns - True on success, False on failure.
: since 6.0

bool ShrinkSurfaceToEdge()
: Shrinks the underlying untrimmed surface of this Brep face right to the trimming boundaries.
     Note, shrinking the trimmed surface can sometimes cause problems later since having
     the edges so close to the trimming boundaries can cause commands that use the surface
     edges as input to fail.
: Returns - True on success, False on failure.
: since 6.16

[Brep](/rhinocommon/rhino/geometry/brep/) Split(IEnumerable<Curve> curves,double tolerance)
: Split this face using 3D trimming curves.
: Returns - A brep consisting of all the split fragments, or None on failure.

[Curve](/rhinocommon/rhino/geometry/curve/)[] TrimAwareIsoCurve(int direction,double constantParameter)
: Similar to IsoCurve function, except this function pays attention to trims on faces 
     and may return multiple curves.
: Returns - Isoparametric curves connecting all points with the constantParameter value.

[Interval](/rhinocommon/rhino/geometry/interval/)[] TrimAwareIsoIntervals(int direction,double constantParameter)
: Gets intervals where the iso curve exists on a BrepFace (trimmed surface)
: Returns - If direction = 0, the parameter space iso interval connects the 2d points
     (intervals[i][0],iso_constant) and (intervals[i][1],iso_constant).
     If direction = 1, the parameter space iso interval connects the 2d points
     (iso_constant,intervals[i][0]) and (iso_constant,intervals[i][1]).

[Surface](/rhinocommon/rhino/geometry/surface/) UnderlyingSurface()
: Gets the untrimmed surface that is the base of this face.
: Returns - A surface, or None on error.
