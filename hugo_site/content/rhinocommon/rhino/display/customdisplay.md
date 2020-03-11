---
title: "CustomDisplay"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Provides some basic (indeed, very basic) mechanisms for drawing custom geometry in viewports.
```cs
public class CustomDisplay : IDisposable
```
## Constructors

CustomDisplay(bool enable)
: Constructs a new CustomDisplay instance. You must call
     Dispose() when you are done with this instance, otherwise
     the display methods will never be switched off.
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) ClippingBox
: Gets the clipping box of this CustomDisplay.

bool Enabled
: Gets or sets the Enabled state of this CustomDisplay instance. 
     If you wish to terminate this CustomDisplay, place a call to Dispose() instead.

bool IsDisposed
: Gets a value indicating whether this CustomDisplay instance has been disposed. 
     Once a CustomDisplay has been disposed, you can no longer use it.
## Methods

void AddArc(Arc arc)
: Adds a new, black arc to the display list.

void AddArc(Arc arc,Color color)
: Adds a new, colored arc to the display list.

void AddArc(Arc arc,Color color,int thickness)
: Adds a new, colored arc to the display list.

void AddCircle(Circle circle)
: Adds a new, black circle to the display list.

void AddCircle(Circle circle,Color color)
: Adds a new, colored arc to the display list.

void AddCircle(Circle circle,Color color,int thickness)
: Adds a new, colored circle to the display list.

void AddCurve(Curve curve)
: Adds a new, black curve to the display list. 
     The curve will be duplicated so changes to the 
     original will not affect the display.

void AddCurve(Curve curve,Color color)
: Adds a new, colored curve to the display list.
     The curve will be duplicated so changes to the 
     original will not affect the display.

void AddCurve(Curve curve,Color color,int thickness)
: Adds a new, colored curve to the display list.
     The curve will be duplicated so changes to the 
     original will not affect the display.

void AddLine(Line line)
: Adds a new, black line to the display list.

void AddLine(Line line,Color color)
: Adds a new, colored line to the display list.

void AddLine(Line line,Color color,int thickness)
: Adds a new, colored line to the display list.

void AddPoint(Point3d point)
: Adds a new, black point to the display list.

void AddPoint(Point3d point,Color color)
: Adds a new colored point to the display list.

void AddPoint(Point3d point,Color color,PointStyle style,int radius)
: Adds a new stylized point to the display list.

void AddPoints(IEnumerable<Point3d> points)
: Adds a collection of black points to the display list.

void AddPoints(IEnumerable<Point3d> points,Color color)
: Adds a collection of colored points to the display list.

void AddPoints(IEnumerable<Point3d> points,Color color,PointStyle style,int radius)
: Adds a collection of stylized points to the display list.

void AddPolygon(IEnumerable<Point3d> polygon,Color fillColor,Color edgeColor,bool drawFill,bool drawEdge)
: Adds a polygon to the drawing list. Polygons are not like Hatches, when you supply a concave 
     polygon, the shading probably won't work.

void AddText(string text,Plane plane,double size)
: Adds a new, black 3D text object to the display list.

void AddText(string text,Plane plane,double size,Color color)
: Adds a new, colored 3D text object to the display list.

void AddText(Text3d text,Color color)
: Adds a new 3D text object to the display list.

void AddVector(Point3d anchor,Vector3d span)
: Adds a new, black vector to the display list.

void AddVector(Point3d anchor,Vector3d span,Color color)
: Adds a new, colored vector to the display list.

void AddVector(Point3d anchor,Vector3d span,Color color,bool drawAnchor)
: Adds a new, colored vector to the display list.

void Clear()
: Clear the drawing lists.

void Dispose()
: Dispose this CustomDisplay instance. You must call this function in order to 
     properly shut down the CustomDisplay.
