---
title: "GetPoint"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Used to interactively get a point.
```cs
public class GetPoint : GetBaseClass
```

DynamicDraw
: Event to use if you want to dynamically draw things as the mouse/digitizer moves.
     Every time the mouse moves, DynamicDraw will be called once per viewport. The
     calls to DynamicDraw happen AFTER the call to MouseMove.
    
     If you are drawing anything that takes a long time, periodically call 
     InterruptMouseMove() to see if you should stop.

MouseDown
: Called during Get2dRectangle, Get2dLine, and GetPoint(..,true) when the mouse down event for
     the initial point occurs. This function is not called during ordinary point getting because
     the mouse down event terminates an ordinary point get and returns a GetResult.Point result.

MouseMove
: Called every time the mouse moves. MouseMove is called once per mouse move and is called
     BEFORE any calls to OnDynamicDraw. If you are doing anything that takes a long time,
     periodically call InterruptMouseMove() to see if you should stop. If the view is such
     that the 2d screen point can't be mapped to a 3d point, the 'point' argument will be Unset.

PostDrawObjects
: Same as the DisplayPipeline.PostDrawObjects, but only works during the 
     operation of the Get() function.
     NOTE: You must set FullFrameRedrawDuringGet to True in order for this
     event to be called.
## Constructors

GetPoint()
: Create a new GetPoint.
## Properties

Color DynamicDrawColor
: Color used by CRhinoGetPoint::DynamicDraw to draw the current point and
     the line from the base point to the current point.

bool FullFrameRedrawDuringGet
: In the "RARE" case that you need to draw some depth buffered geometry during
     a Get() operation, setting this value to True will force entire frames to be redrawn
     while the user moves the mouse. This allows DisplayPipeline events to be triggered
     as well as OnPostDrawObjects
     NOTE!! Setting this value to True comes with a significant performance penalty because the
     scene needs to be fully regenerated every frame where the standard
     DynamicDraw event draws temporary decorations (geometry) on top of a static scene.

[OsnapModes](/rhinocommon/rhino/applicationsettings/osnapmodes/) OsnapEventType
: Gets the type of object snap used to obtain the point.
: since 6.24

object Tag
: Gets or sets an arbitrary object that can be attached to this  instance.
     Useful for passing some/ information that you may need in a DynamicDraw event since you can get at this Tag from
     the GetPointDrawEventArgs.
## Methods

int AddConstructionPoint(Point3d point)
: Adds a point to the list of construction points.
: Returns - Total number of construction points.

int AddConstructionPoints(Point3d[] points)
: Adds points to the list of construction points.
: Returns - Total number of construction points.

int AddSnapPoint(Point3d point)
: Adds a point to the list of osnap points.
: Returns - Total number of snap points.

int AddSnapPoints(Point3d[] points)
: Adds points to the list of osnap points.
: Returns - Total number of snap points.

void ClearConstraints()
: Removes any explicit constraints added by calls to GetPoint::Constraint() and enable
     the built-in constraint options.

void ClearConstructionPoints()
: Remove all construction points.

void ClearSnapPoints()
: Remove all snap points.

bool Constrain(Arc arc)
: Constrains the picked point to lie on an arc.
: Returns - True if constraint could be applied.

bool Constrain(Brep brep,int wireDensity,int faceIndex,bool allowPickingPointOffObject)
: Constrains the picked point to lie on a brep.
: Returns - True if constraint could be applied.

bool Constrain(Circle circle)
: Constrains the picked point to lie on a circle.
: Returns - True if constraint could be applied.

bool Constrain(Curve curve,bool allowPickingPointOffObject)
: Constrains the picked point to lie on a curve.
: Returns - True if constraint could be applied.

bool Constrain(Cylinder cylinder)
: Constrains the picked point to lie on a cylinder.
: Returns - True if constraint could be applied.

bool Constrain(Line line)
: Constrains the picked point to lie on a line.
: Returns - True if constraint could be applied.

bool Constrain(Mesh mesh,bool allowPickingPointOffObject)
: Constrains the picked point to lie on a mesh.
: Returns - True if constraint could be applied.

bool Constrain(Plane plane,bool allowElevator)
: constrain the picked point to lie on a plane.
: Returns - True if constraint could be applied.

bool Constrain(Point3d from,Point3d to)
: Constrains the picked point to lie on a line.
: Returns - True if constraint could be applied.

bool Constrain(Sphere sphere)
: Constrains the picked point to lie on a sphere.
: Returns - True if constraint could be applied.

bool Constrain(Surface surface,bool allowPickingPointOffObject)
: Constrains the picked point to lie on a surface.
: Returns - True if constraint could be applied.

void ConstrainDistanceFromBasePoint(double distance)
: Sets distance constraint from base point.

bool ConstrainToConstructionPlane(bool throughBasePoint)
: If enabled, the picked point is constrained to be on the active construction plane.
     If the base point is set, then the point is constrained to be on the plane that contains
     the base point and is parallel to the active construction plane. By default this
     constraint is enabled.
: Returns - If True and the base point is set, then the point is constrained to be on the plane parallel
     to the construction plane that passes through the base point, even when planar mode is off.
     If throughBasePoint is false, then the base point shift only happens if planar mode is on.

void ConstrainToTargetPlane()
: Constrains point to lie on a plane that is parallel to the
     viewing plane and passes through the view's target point.

bool ConstrainToVirtualCPlaneIntersection(Plane plane)
: If enabled, the picked point is constrained to be on the 
     intersection of the plane and the virtual CPlane going through
     the plane origin.
     If the planes are parallel, the constraint works just like planar constraint.
: Returns - True if the operation succeeded; False otherwise.

void DrawLineFromPoint(Point3d startPoint,bool showDistanceInStatusBar)
: Use DrawLineFromPoint() if you want a dynamic line drawn from a point to the point being picked.

void EnableCurveSnapArrow(bool drawDirectionArrowAtSnapPoint,bool reverseArrow)
: Controls display of the curve snap arrow icon.

void EnableCurveSnapPerpBar(bool drawPerpBarAtSnapPoint,bool drawEndPoints)
: Controls display of the curve snap perpendicular bar icon.

void EnableCurveSnapTangentBar(bool drawTangentBarAtSnapPoint,bool drawEndPoints)
: Controls display of the curve snap tangent bar icon.

void EnableDrawLineFromPoint(bool enable)
: Controls drawing of dynamic a line from the start point.

void EnableNoRedrawOnExit(bool noRedraw)
: The default functionality of the getpoint operation is to perform a redraw on exit.
     Calling this function with True turns off automatic redraw at the end of GetPoint.
     May be needed in some commands for flicker free feedback.
     When set to true, the caller is responsible for cleaning up the screen
     after GetPoint.
: since 6.0

void EnableObjectSnapCursors(bool enable)
: Enables or disables object snap cursors. By default, object snap cursors are enabled.
: since 6.0

void EnableSnapToCurves(bool enable)
: If you want GetPoint() to try to snap to curves when the mouse is near a curve
     (like the center point in the Circle command when the AroundCurve option is on),
     then enable the snap to curves option.

[GetResult](/rhinocommon/rhino/input/getresult/) Get()
: After setting up options and so on, call GetPoint::Get to get a 3d point. The
     point is retrieved when the mouse goes down.

[GetResult](/rhinocommon/rhino/input/getresult/) Get(bool onMouseUp)
: After setting up options and so on, call this method to get a 3d point.
: Returns - if the user chose a point; other enumeration value otherwise.

[GetResult](/rhinocommon/rhino/input/getresult/) Get(bool onMouseUp,bool get2DPoint)
: After setting up options and so on, call this method to get a 2d or 3d point.
: Returns - if the user chose a 3d point;  if the user chose a 2d point; other enumeration value otherwise.
: since 5.12

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetConstructionPoints()
: Gets current construction points.
: Returns - An array of points.

bool GetPlanarConstraint(RhinoViewport vp,Plane plane)
: 
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetSnapPoints()
: Gets current snap points.
: Returns - An array of points.

bool InterruptMouseMove()
: If you have lengthy computations in OnMouseMove() and/or DymanicDraw()
     overrides, then periodically call InterruptMouseMove() to see if you
     should interrupt your work because the mouse has moved again.
: Returns - True if you should interrupt your work; False otherwise.

void PermitConstraintOptions(bool permit)
: Control the availability of the built-in linear, planar, curve, and surface
     constraint options like "Along", "AlongPerp", "AlongTan", "AlongParallel",
     "Between", "OnCrv", "OnSrf", ".x", ".y", ".z", ".xy", etc.

void PermitElevatorMode(int permitMode)
: Permits the use of the control key to define a line constraint.

void PermitFromOption(bool permit)
: Control the availability of the built-in "From" option. By default, the "From" option is enabled.

void PermitObjectSnap(bool permit)
: By default, object snaps like "end", "near", etc. are controled by the user.
     If you want to disable this ability, then call PermitObjectSnap(false).

void PermitOrthoSnap(bool permit)
: Controls availability of ortho snap. Default is true.

void PermitTabMode(bool permit)
: Permits the use of the tab key to define a line constraint.

[BrepFace](/rhinocommon/rhino/geometry/brepface/) PointOnBrep(double u,double v)
: Use to determine if point was on a Brep face. If the point was on a Brep face, 
     then the (u,v) are the face parameters for the point.
: Returns - The Brep face or None if the point was not on a Brep face.
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/) PointOnCurve(double t)
: Use to determine is point was on a curve.
: Returns - A curve at a specified parameter value.

DocObjects.ObjRef PointOnObject()
: Call this function to see if the point was on an object. If the point was
     on an object an ObjRef is returned; otherwise None is returned.
: Returns - A point object reference.

[Surface](/rhinocommon/rhino/geometry/surface/) PointOnSurface(double u,double v)
: Use to determine if point was on a surface. If the point was on a surface, 
     then the (u,v) are the surface parameters for the point. The point returned
     by Point() is the same as surface.PointAt(u,v).
: Returns - The surface or None if the point was not on a surface.
: since 6.0

void SetBasePoint(Point3d basePoint,bool showDistanceInStatusBar)
: Sets a base point used by ortho snap, from snap, planar snap, etc.

void SetCursor(CursorStyle cursor)
: Sets cursor that will be used when Get() is called and snap is not
     happening.
: since 6.0

bool TryGetBasePoint(Point3d basePoint)
: 
