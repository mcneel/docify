---
title: "HiddenLineDrawingParameters"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Input used for computing a hidden line drawing
```cs
public class HiddenLineDrawingParameters
```
## Constructors

HiddenLineDrawingParameters()
: default constructor
: since 6.0
## Properties

double AbsoluteTolerance
: Absolute tolerance is used to decide if curves overlap or intersect.
     A suggested value is to use RhinoDoc.AbsoluteTolerance
: since 6.0

bool Flatten
: Flatten the computed geometry
: since 6.0

bool IncludeHiddenCurves
: Include hidden curves in hidden line drawing (default is true)
: since 6.0

bool IncludeTangentEdges
: Include tangent edges in hidden line drawing (default is true)
: since 6.0

bool IncludeTangentSeams
: Include tangent seams in hidden line drawing (default is true)
: since 6.0
## Methods

void AddClippingPlane(Plane plane)
: Specify clipping planes that are active for this view.
: since 6.0

bool AddGeometry(GeometryBase geometry,object tag)
: Add geometry that should be included in the calculation
: Returns - True if the type of geometry can be added for calculations.
     Currently only curves, meshes, breps, surfaces and extrusions are supported
: since 6.0

bool AddGeometry(GeometryBase geometry,Transform xform,object tag)
: Add geometry that should be included in the calculation
: Returns - True if the type of geometry can be added for calculations.
     Currently only points, point clouds, curves, meshes, breps, surfaces and extrusions are supported
: since 6.0

void SetViewport(RhinoViewport viewport)
: Set the viewport for the hidden line drawing (HLD). The viewport supplies
     the projection that determinest he visibility of curves, and the HLD 
     coordinate system in which the resulting curves are represented. The
     HLD-coordinate system is a right handed system for 3-D model space, in 
     which the 3rd coordinate direction is the projection direction. In particular
     the z-coordinate direction points from the scene toward the camera.
: Returns - True if the viewport has been set.
: since 6.0

void SetViewport(ViewportInfo viewport)
: Set the viewport for the hidden line drawing (HLD). The viewport supplies
     the projection that determines the visibility of curves, and the HLD 
     coordinate system in which the resulting curves are represented. The
     HLD-coordinate system is a right handed system for 3-D model space, in 
     which the 3rd coordinate direction is the projection direction. In particular
     the z-coordinate direction points from the scene toward the camera.
: Returns - True if the viewport has been set.
: since 6.0
