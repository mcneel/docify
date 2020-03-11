---
title: "GripsDrawEventArgs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

```cs
public class GripsDrawEventArgs : Rhino.Display.DrawEventArgs
```
## Properties

int ControlPolygonStyle
: What kind of line is used to display things like control polygons.
     0 = no control polygon,  1 = solid control polygon,  2 = dotted control polygon.

bool DrawDynamicStuff
: If true, then draw stuff that does not move when grips are
     dragged, like the control polygon of the "original" curve.

bool DrawStaticStuff
: If true, then draw stuff that moves when grips are dragged,
     like the curve being bent by a dragged control point.

Color GripColor
: 

int GripStatusCount
: 

Color LockedGripColor
: 

Color SelectedGripColor
: 
## Methods

void DrawControlPolygonLine(Line line,GripStatus startStatus,GripStatus endStatus)
: Draws the lines in a control polygons.
     This is an helper function.

void DrawControlPolygonLine(Line line,int startStatus,int endStatus)
: Draws the lines in a control polygons.
     This is an helper function.

void DrawControlPolygonLine(Point3d start,Point3d end,int startStatus,int endStatus)
: Draws the lines in a control polygons.
     This is an helper function.

[GripStatus](/rhinocommon/rhino/docobjects/custom/gripstatus/) GripStatus(int index)
: 

void RestoreViewportSettings()
: 
