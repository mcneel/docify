---
title: "Rhino.DocObjects.DetailViewObject"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## string DescriptiveTitle
- (summary) 
      Detail objects have two strings that can be used to describe the detail:
      1. The name string that is part of the object's attributes
      2. The viewport projection title that is part of the viewport
      This function combines these two strings to create a single "description" string in the form of attribute_name - projection_title.
     
- (since) 7.0
## Rhino.Geometry.DetailView DetailGeometry
- (summary) 
     Returns the detail view geometry.
     
- (since) 5.0
## bool IsActive
- (summary) 
     Gets or sets the active state of the detail view.
     
- (since) 5.0
## Geometry.Transform PageToWorldTransform
- (summary) 
     Returns the page coordinate to world coordinate transformation.
     
- (since) 6.0
## Rhino.Display.RhinoViewport Viewport
- (summary) 
     Gets the detail view's viewport.
     
- (since) 5.0
## Geometry.Transform WorldToPageTransform
- (summary) 
     Gets the world coordinate to page coordinate transformation.
     
- (since) 6.0
# Methods
## bool CommitViewportChanges()
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFormattedScale(ScaleFormat format,string value)
- (summary) 
     Returns the detail view object's scale as a formatted string. 
     The detail view object's viewport must be to parallel projection.
     
- (since) 7.0
- (returns) bool This is some return comment
