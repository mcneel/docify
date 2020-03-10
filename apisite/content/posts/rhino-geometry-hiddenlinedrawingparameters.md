---
title: "Rhino.Geometry.HiddenLineDrawingParameters"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.HiddenLineDrawingParameters()
- (summary) default constructor
- (since) 6.0
# Properties
## double AbsoluteTolerance
- (summary) 
     Absolute tolerance is used to decide if curves overlap or intersect.
     A suggested value is to use RhinoDoc.AbsoluteTolerance
     
- (since) 6.0
## bool Flatten
- (summary)  Flatten the computed geometry 
- (since) 6.0
## bool IncludeHiddenCurves
- (summary)  Include hidden curves in hidden line drawing (default is true) 
- (since) 6.0
## bool IncludeTangentEdges
- (summary)  Include tangent edges in hidden line drawing (default is true) 
- (since) 6.0
## bool IncludeTangentSeams
- (summary)  Include tangent seams in hidden line drawing (default is true) 
- (since) 6.0
# Methods
## void AddClippingPlane(Plane plane)
- (summary)  Specify clipping planes that are active for this view. 
- (since) 6.0
- (returns) void This is some return comment
## bool AddGeometry(GeometryBase geometry,object tag)
- (summary) 
     Add geometry that should be included in the calculation
     
- (since) 6.0
- (returns) bool This is some return comment
## bool AddGeometry(GeometryBase geometry,Transform xform,object tag)
- (summary) 
     Add geometry that should be included in the calculation
     
- (since) 6.0
- (returns) bool This is some return comment
## void SetViewport(RhinoViewport viewport)
- (summary) 
     Set the viewport for the hidden line drawing (HLD). The viewport supplies
     the projection that determinest he visibility of curves, and the HLD 
     coordinate system in which the resulting curves are represented. The
     HLD-coordinate system is a right handed system for 3-D model space, in 
     which the 3rd coordinate direction is the projection direction. In particular
     the z-coordinate direction points from the scene toward the camera.
     
- (since) 6.0
- (returns) void This is some return comment
## void SetViewport(ViewportInfo viewport)
- (summary) 
     Set the viewport for the hidden line drawing (HLD). The viewport supplies
     the projection that determines the visibility of curves, and the HLD 
     coordinate system in which the resulting curves are represented. The
     HLD-coordinate system is a right handed system for 3-D model space, in 
     which the 3rd coordinate direction is the projection direction. In particular
     the z-coordinate direction points from the scene toward the camera.
     
- (since) 6.0
- (returns) void This is some return comment
