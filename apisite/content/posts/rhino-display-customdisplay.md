---
title: "Rhino.Display.CustomDisplay"
draft: false
---

# Constructors
## Rhino.Display.CustomDisplay(bool enable)
- (summary) 
     Constructs a new CustomDisplay instance. You must call
     Dispose() when you are done with this instance, otherwise
     the display methods will never be switched off.
     
- (since) 5.0
# Properties
## BoundingBox ClippingBox
- (summary) 
     Gets the clipping box of this CustomDisplay.
     
- (since) 5.0
## bool Enabled
- (summary) 
     Gets or sets the Enabled state of this CustomDisplay instance. 
     If you wish to terminate this CustomDisplay, place a call to Dispose() instead.
     
- (since) 5.0
## bool IsDisposed
- (summary) 
     Gets a value indicating whether this CustomDisplay instance has been disposed. 
     Once a CustomDisplay has been disposed, you can no longer use it.
     
- (since) 5.0
# Methods
## void AddArc(Arc arc)
- (summary) 
     Adds a new, black arc to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddArc(Arc arc,Color color)
- (summary) 
     Adds a new, colored arc to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddArc(Arc arc,Color color,int thickness)
- (summary) 
     Adds a new, colored arc to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCircle(Circle circle)
- (summary) 
     Adds a new, black circle to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCircle(Circle circle,Color color)
- (summary) 
     Adds a new, colored arc to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCircle(Circle circle,Color color,int thickness)
- (summary) 
     Adds a new, colored circle to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCurve(Curve curve)
- (summary) 
     Adds a new, black curve to the display list. 
     The curve will be duplicated so changes to the 
     original will not affect the display.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCurve(Curve curve,Color color)
- (summary) 
     Adds a new, colored curve to the display list.
     The curve will be duplicated so changes to the 
     original will not affect the display.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddCurve(Curve curve,Color color,int thickness)
- (summary) 
     Adds a new, colored curve to the display list.
     The curve will be duplicated so changes to the 
     original will not affect the display.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddLine(Line line)
- (summary) 
     Adds a new, black line to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddLine(Line line,Color color)
- (summary) 
     Adds a new, colored line to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddLine(Line line,Color color,int thickness)
- (summary) 
     Adds a new, colored line to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoint(Point3d point)
- (summary) 
     Adds a new, black point to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoint(Point3d point,Color color)
- (summary) 
     Adds a new colored point to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoint(Point3d point,Color color,PointStyle style,int radius)
- (summary) 
     Adds a new stylized point to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoints(IEnumerable<Point3d> points)
- (summary) 
     Adds a collection of black points to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoints(IEnumerable<Point3d> points,Color color)
- (summary) 
     Adds a collection of colored points to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPoints(IEnumerable<Point3d> points,Color color,PointStyle style,int radius)
- (summary) 
     Adds a collection of stylized points to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddPolygon(IEnumerable<Point3d> polygon,Color fillColor,Color edgeColor,bool drawFill,bool drawEdge)
- (summary) 
     Adds a polygon to the drawing list. Polygons are not like Hatches, when you supply a concave 
     polygon, the shading probably won't work.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddText(string text,Plane plane,double size)
- (summary) 
     Adds a new, black 3D text object to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddText(string text,Plane plane,double size,Color color)
- (summary) 
     Adds a new, colored 3D text object to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddText(Text3d text,Color color)
- (summary) 
      Adds a new 3D text object to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddVector(Point3d anchor,Vector3d span)
- (summary) 
     Adds a new, black vector to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddVector(Point3d anchor,Vector3d span,Color color)
- (summary) 
     Adds a new, colored vector to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddVector(Point3d anchor,Vector3d span,Color color,bool drawAnchor)
- (summary) 
     Adds a new, colored vector to the display list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Clear()
- (summary) 
     Clear the drawing lists.
     
- (since) 5.0
- (returns) void This is some return comment
## void Dispose()
- (summary) 
     Dispose this CustomDisplay instance. You must call this function in order to 
     properly shut down the CustomDisplay.
     
- (since) 5.0
- (returns) void This is some return comment
