---
title: "BrepFace"
draft: false
---

*Namespace: Rhino.Geometry*

   Provides strongly-typed access to brep faces.
   A Brep face is composed of one surface and trimming curves.
## Properties
#### Brep Brep
- (summary) 
     Gets the Brep that owns this face.
     
- (since) 6.9
#### int FaceIndex
- (summary) Index of face in Brep.Faces array.
- (since) 5.0
#### bool IsSurface
- (summary) 
     Gets a value indicating whether the face is synonymous with the underlying surface. 
     If a Face has no trimming curves then it is considered a Surface.
     
- (since) 5.0
#### Collections.BrepLoopList Loops
- (summary) 
     Loops in this face.
     
- (since) 5.0
#### bool OrientationIsReversed
- (summary) 
     True if face orientation is opposite of natural surface orientation.
     
- (since) 5.0
#### BrepLoop OuterLoop
- (summary) 
     Every face has a single outer loop.
     
- (since) 5.0
#### int SurfaceIndex
- (summary) 
     Surface index of the 3d surface geometry used by this face or -1
     
- (since) 5.6
## Methods
#### int[] AdjacentEdges()
- (summary) 
     Gets the indices of all the BrepEdges that delineate this Face.
     
- (since) 5.0
- (returns) int[] This is some return comment
#### int[] AdjacentFaces()
- (summary) 
     Gets the indices of all the BrepFaces that surround (are adjacent to) this face.
     
- (since) 5.0
- (returns) int[] This is some return comment
#### bool ChangeSurface(int surfaceIndex)
- (summary) 
     Expert user tool that replaces the 3d surface geometry use by the face.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Brep CreateExtrusion(Curve pathCurve,bool cap)
- (summary) 
     Extrude a face in a Brep.
     
- (since) 5.3
- (returns) Brep This is some return comment
#### bool DraftAnglePoint(Point2d testPoint,double testAngle,Vector3d pullDirection,bool edge,Point3d draftPoint,double draftAngle)
- (summary) 
      Returns the surface draft angle and point at a parameter.
     
- (since) 6.0
- (returns) bool This is some return comment
#### Brep DuplicateFace(bool duplicateMeshes)
- (summary) 
     Duplicate a face from the brep to create new single face brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### Surface DuplicateSurface()
- (summary) 
     Gets a copy to the untrimmed surface that this face is based on.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Mesh GetMesh(MeshType meshType)
- (summary) 
     Obtains a reference to a specified type of mesh for this brep face.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### PointFaceRelation IsPointOnFace(double u,double v)
- (summary) 
     Tests if a parameter space point is on the interior of a trimmed face.
     
- (since) 5.0
- (returns) PointFaceRelation This is some return comment
#### Point3d[] PullPointsToFace(IEnumerable<Point3d> points,double tolerance)
- (summary) 
     Pulls one or more points to a brep face.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### bool RebuildEdges(double tolerance,bool rebuildSharedEdges,bool rebuildVertices)
- (summary) 
     Rebuild the edges used by a face so they lie on the surface.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Brep RemoveHoles(double tolerance)
- (summary) 
     Remove all inner loops, or holes, from a Brep face.
     
- (since) 6.0
- (returns) Brep This is some return comment
#### bool SetDomain(int direction,Interval domain)
- (summary) 
     Sets the surface domain of this face.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetMesh(MeshType meshType,Mesh mesh)
- (summary) 
     Sets a reference to a specified type of mesh for this brep face.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ShrinkFace(ShrinkDisableSide disableSide)
- (summary) 
     Shrinks the underlying untrimmed surface of this Brep face close to trimming boundaries.
     Shrinking a surface is like extending smoothly, only backwards. knot of full multiplicity
     are added where you want the surface to be cut off. Then the remaining control points are
     thrown away.  
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool ShrinkSurfaceToEdge()
- (summary) 
     Shrinks the underlying untrimmed surface of this Brep face right to the trimming boundaries.
     Note, shrinking the trimmed surface can sometimes cause problems later since having
     the edges so close to the trimming boundaries can cause commands that use the surface
     edges as input to fail.
     
- (since) 6.16
- (returns) bool This is some return comment
#### Brep Split(IEnumerable<Curve> curves,double tolerance)
- (summary) 
     Split this face using 3D trimming curves.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### Curve[] TrimAwareIsoCurve(int direction,double constantParameter)
- (summary) 
     Similar to IsoCurve function, except this function pays attention to trims on faces 
     and may return multiple curves.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
#### Interval[] TrimAwareIsoIntervals(int direction,double constantParameter)
- (summary) 
     Gets intervals where the iso curve exists on a BrepFace (trimmed surface)
     
- (since) 5.0
- (returns) Interval[] This is some return comment
#### Surface UnderlyingSurface()
- (summary) 
     Gets the untrimmed surface that is the base of this face.
     
- (since) 5.0
- (returns) Surface This is some return comment
