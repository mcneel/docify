---
title: "GripObject"
draft: false
---

*Namespace: Rhino.DocObjects*
## Properties
#### Point3d CurrentLocation
- (summary) 
- (since) 5.0
#### int Index
- (summary) 
- (since) 5.0
#### bool Moved
- (summary) 
     True if the grip has moved from OriginalLocation.
     
- (since) 5.0
#### Point3d OriginalLocation
- (summary) 
- (since) 5.0
#### Guid OwnerId
- (summary) 
- (since) 5.0
#### double Weight
- (summary) 
     The weight of a NURBS control point grip or RhinoMath.UnsetValue
     if the grip is not a NURBS control point grip.
     
- (since) 5.0
## Methods
#### bool GetCageParameters(double u,double v,double w)
- (summary) 
     Retrieves the 2d parameter space values of this GripObject from the cage it's associated with.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool GetCurveParameters(double t)
- (summary) 
     Retrieves the 2d parameter space values of this GripObject from the curve it's associated with.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool GetGripDirections(Vector3d u,Vector3d v,Vector3d normal)
- (summary) 
     Sometimes grips have directions.  These directions
     can have any length and do not have to be orthoganal.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool GetSurfaceParameters(double u,double v)
- (summary) 
     Retrieves the 2d parameter space values of this GripObject from the surface it's associated with.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void Move(Point3d newLocation)
- (summary) 
     Moves the grip to a new location.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Move(Transform xform)
- (summary) 
     Moves the grip to a new location.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Move(Vector3d delta)
- (summary) 
     Moves the grip to a new location.
     
- (since) 5.0
- (returns) void This is some return comment
#### GripObject NeighborGrip(int directionR,int directionS,int directionT,bool wrap)
- (summary) 
     Used to get a grip's logical neighbors, like NURBS curve, suface,
     and cage control point grips.
     
- (since) 5.0
- (returns) GripObject This is some return comment
#### void UndoMove()
- (summary) 
     Undoes any grip moves made by calling Move.
     
- (since) 5.0
- (returns) void This is some return comment
