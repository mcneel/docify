---
title: "SpaceMorph"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a spacial, Euclidean morph.
   
## Properties
#### bool PreserveStructure
- (summary) 
     True if the morph should be done in a way that preserves the structure of the geometry.
     In particular, for NURBS objects, True means that only the control points are moved.
     The PreserveStructure value does not affect the way meshes and points are morphed.
     The default is false.
     
- (since) 5.0
#### bool QuickPreview
- (summary) 
     True if the morph should be done as quickly as possible because the result
     is being used for some type of dynamic preview. If QuickPreview is true,
     the tolerance may be ignored.
     The QuickPreview value does not affect the way meshes and points are morphed.
     The default is false.
     
- (since) 5.0
#### double Tolerance
- (summary) 
     The desired accuracy of the morph. This value is primarily used for deforming
     surfaces and breps. The default is 0.0 and any value <= 0.0 is ignored by
     morphing functions. The Tolerance value does not affect the way meshes and points
     are morphed.
     
- (since) 5.0
## Methods
#### static bool IsMorphable(GeometryBase geometry)
- (summary) 
     True if the geometry can be morphed by calling SpaceMorph.Morph(geometry)
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Morph(GeometryBase geometry)
- (summary) Apply the space morph to geometry.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Morph(Plane plane)
- (summary) 
     Apply the space morph to a plane.
     
- (since) 6.0
- (returns) bool This is some return comment
#### Point3d MorphPoint(Point3d point)
- (summary) Morphs an Euclidean point. This method is abstract.
- (since) 5.0
- (returns) Point3d This is some return comment
