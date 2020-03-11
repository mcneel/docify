---
title: "DetailViewObject"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

A detail view object is a nested Rhino viewport placed on a page view with a 2D closed curve
   boundary. It can be any type of modeling view.
```cs
public class DetailViewObject : RhinoObject
```
## Properties

string DescriptiveTitle
: Detail objects have two strings that can be used to describe the detail:
      1. The name string that is part of the object's attributes
      2. The viewport projection title that is part of the viewport
      This function combines these two strings to create a single "description" string in the form of attribute_name - projection_title.
: since 7.0

[DetailView](/rhinocommon/rhino/geometry/detailview/) DetailGeometry
: Returns the detail view geometry.

bool IsActive
: Gets or sets the active state of the detail view.

[Transform](/rhinocommon/rhino/geometry/transform/) PageToWorldTransform
: Returns the page coordinate to world coordinate transformation.
: since 6.0

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) Viewport
: Gets the detail view's viewport.

[Transform](/rhinocommon/rhino/geometry/transform/) WorldToPageTransform
: Gets the world coordinate to page coordinate transformation.
: since 6.0
## Methods

bool CommitViewportChanges()
: 

bool GetFormattedScale(ScaleFormat format,string value)
: Returns the detail view object's scale as a formatted string. 
     The detail view object's viewport must be to parallel projection.
: Returns - True if successful, False otherwise
: since 7.0
