---
title: "CalculateBoundingBoxEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class CalculateBoundingBoxEventArgs : DrawEventArgs
```
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the current bounding box.
## Methods

void IncludeBoundingBox(BoundingBox box)
: Unites a bounding box with the current display bounding box in order to ensure
     dynamic objects in "box" are drawn.
