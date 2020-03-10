---
title: "GripsDrawEventArgs"
draft: false
---

*Namespace: Rhino.DocObjects.Custom*
## Properties
#### int ControlPolygonStyle
- (summary) 
     What kind of line is used to display things like control polygons.
     0 = no control polygon,  1 = solid control polygon,  2 = dotted control polygon.
     
- (since) 5.0
#### bool DrawDynamicStuff
- (summary) 
     If true, then draw stuff that does not move when grips are
     dragged, like the control polygon of the "original" curve.
     
- (since) 5.0
#### bool DrawStaticStuff
- (summary) 
     If true, then draw stuff that moves when grips are dragged,
     like the curve being bent by a dragged control point.
     
- (since) 5.0
#### System.Drawing.Color GripColor
- (summary) 
- (since) 5.0
#### int GripStatusCount
- (summary) 
- (since) 5.0
#### System.Drawing.Color LockedGripColor
- (summary) 
- (since) 5.0
#### System.Drawing.Color SelectedGripColor
- (summary) 
- (since) 5.0
## Methods
#### void DrawControlPolygonLine(Line line,GripStatus startStatus,GripStatus endStatus)
- (summary) 
     Draws the lines in a control polygons.
     This is an helper function.
- (since) 5.0
- (returns) void This is some return comment
#### void DrawControlPolygonLine(Line line,int startStatus,int endStatus)
- (summary) 
     Draws the lines in a control polygons.
     This is an helper function.
- (since) 5.0
- (returns) void This is some return comment
#### void DrawControlPolygonLine(Point3d start,Point3d end,int startStatus,int endStatus)
- (summary) 
     Draws the lines in a control polygons.
     This is an helper function.
- (since) 5.0
- (returns) void This is some return comment
#### GripStatus GripStatus(int index)
- (summary) 
- (since) 5.0
- (returns) GripStatus This is some return comment
#### void RestoreViewportSettings()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
