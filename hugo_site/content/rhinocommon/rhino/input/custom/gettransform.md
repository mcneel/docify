---
title: "GetTransform"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Used for getting a Transform
```cs
public class GetTransform : GetPoint
```
## Properties

bool HaveTransform
: 

[TransformObjectList](/rhinocommon/rhino/collections/transformobjectlist/) ObjectList
: 

[Transform](/rhinocommon/rhino/geometry/transform/) Transform
: 
## Methods

void AddTransformObjects(TransformObjectList list)
: Adds any objects you want transformed and grips you want transformed.
     Make sure no duplicates are in the list and that no grip ownwers are
     passed in as objects.

[Transform](/rhinocommon/rhino/geometry/transform/) CalculateTransform(RhinoViewport viewport,Point3d point)
: Retrieves the final transformation.
     Override this virtual function to provide your own custom transformation method.
: Returns - A transformation matrix value.

[GetResult](/rhinocommon/rhino/input/getresult/) GetXform()
: Gets the Transformation.
     Call this after having set up options and so on.
: Returns - The result based on user choice.
