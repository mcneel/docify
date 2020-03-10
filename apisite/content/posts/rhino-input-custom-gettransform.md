---
title: "Rhino.Input.Custom.GetTransform"
draft: false
---

# Properties
## bool HaveTransform
- (summary) 
- (since) 5.0
## Collections.TransformObjectList ObjectList
- (summary) 
- (since) 5.0
## Transform Transform
- (summary) 
- (since) 5.0
# Methods
## void AddTransformObjects(TransformObjectList list)
- (summary) 
     Adds any objects you want transformed and grips you want transformed.
     Make sure no duplicates are in the list and that no grip ownwers are
     passed in as objects.
     
- (since) 5.0
- (returns) void This is some return comment
## Transform CalculateTransform(RhinoViewport viewport,Point3d point)
- (summary) 
     Retrieves the final transformation.
     Override this virtual function to provide your own custom transformation method.
- (since) 5.0
- (returns) Transform This is some return comment
## GetResult GetXform()
- (summary) 
     Gets the Transformation.
     Call this after having set up options and so on.
- (since) 5.0
- (returns) GetResult This is some return comment
