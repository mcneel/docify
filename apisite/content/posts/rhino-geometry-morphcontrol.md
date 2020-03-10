---
title: "MorphControl"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a geometry that is able to control the morphing behaviour of some other geometry.
   
## Constructors
#### Rhino.Geometry.MorphControl(NurbsCurve originCurve,NurbsCurve targetCurve)
- (summary) 
     Constructs a MorphControl that allows for morphing between two curves.
     
- (since) 5.0
## Properties
#### NurbsCurve Curve
- (summary) 
     Returns the morph control's curve.  While this should never be null, the 
     calling function should check.  
     
- (since) 6.0
#### bool PreserveStructure
- (summary) 
     True if the morph should be done in a way that preserves the structure
     of the geometry.  In particular, for NURBS objects, True  eans that
     only the control points are moved.  The PreserveStructure value does not
     affect the way meshes and points are morphed. The default is false.
     
- (since) 5.0
#### bool QuickPreview
- (summary) 
     True if the morph should be done as quickly as possible because the
     result is being used for some type of dynamic preview.  If QuickPreview
     is true, the tolerance may be ignored. The QuickPreview value does not
     affect the way meshes and points are morphed. The default is false.
     
- (since) 5.0
#### double SpaceMorphTolerance
- (summary) 
     The 3d fitting tolerance used when morphing surfaces and breps.
     The default is 0.0 and any value <= 0.0 is ignored by morphing functions.
     The value returned by Tolerance does not affect the way meshes and points are morphed.
     
- (since) 5.0
#### NurbsSurface Surface
- (summary) 
     Returns the morph control's surface.  While this should never be null, the 
     calling function should check.  
     
- (since) 6.0
## Methods
#### bool Morph(GeometryBase geometry)
- (summary) Applies the space morph to geometry.
- (since) 5.0
- (returns) bool This is some return comment
