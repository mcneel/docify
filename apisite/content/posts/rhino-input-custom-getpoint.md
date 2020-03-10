---
title: "GetPoint"
draft: false
---

*Namespace: Rhino.Input.Custom*

   Used to interactively get a point.
   
#### DynamicDraw
- (summary) 
     Event to use if you want to dynamically draw things as the mouse/digitizer moves.
     Every time the mouse moves, DynamicDraw will be called once per viewport. The
     calls to DynamicDraw happen AFTER the call to MouseMove.
    
     If you are drawing anything that takes a long time, periodically call 
     InterruptMouseMove() to see if you should stop.
     
- (since) 5.0
#### MouseDown
- (summary) 
     Called during Get2dRectangle, Get2dLine, and GetPoint(..,true) when the mouse down event for
     the initial point occurs. This function is not called during ordinary point getting because
     the mouse down event terminates an ordinary point get and returns a GetResult.Point result.
     
- (since) 5.0
#### MouseMove
- (summary) 
     Called every time the mouse moves. MouseMove is called once per mouse move and is called
     BEFORE any calls to OnDynamicDraw. If you are doing anything that takes a long time,
     periodically call InterruptMouseMove() to see if you should stop. If the view is such
     that the 2d screen point can't be mapped to a 3d point, the 'point' argument will be Unset.
     
- (since) 5.0
#### PostDrawObjects
- (summary) 
     Same as the DisplayPipeline.PostDrawObjects, but only works during the 
     operation of the Get() function.
     NOTE: You must set FullFrameRedrawDuringGet to True in order for this
     event to be called.
     
- (since) 5.0
## Constructors
#### Rhino.Input.Custom.GetPoint()
- (summary) Create a new GetPoint.
- (since) 5.0
## Properties
#### System.Drawing.Color DynamicDrawColor
- (summary) 
     Color used by CRhinoGetPoint::DynamicDraw to draw the current point and
     the line from the base point to the current point.
     
- (since) 5.0
#### bool FullFrameRedrawDuringGet
- (summary) 
     In the "RARE" case that you need to draw some depth buffered geometry during
     a Get() operation, setting this value to True will force entire frames to be redrawn
     while the user moves the mouse. This allows DisplayPipeline events to be triggered
     as well as OnPostDrawObjects
     NOTE!! Setting this value to True comes with a significant performance penalty because the
     scene needs to be fully regenerated every frame where the standard
     DynamicDraw event draws temporary decorations (geometry) on top of a static scene.
     
- (since) 5.0
#### Rhino.ApplicationSettings.OsnapModes OsnapEventType
- (summary) 
     Gets the type of object snap used to obtain the point.
     
- (since) 6.24
#### object Tag
- (summary) 
     Gets or sets an arbitrary object that can be attached to this  instance.
     Useful for passing some/ information that you may need in a DynamicDraw event since you can get at this Tag from
     the GetPointDrawEventArgs.
     
- (since) 5.0
## Methods
#### int AddConstructionPoint(Point3d point)
- (summary) 
     Adds a point to the list of construction points.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddConstructionPoints(Point3d[] points)
- (summary) 
     Adds points to the list of construction points.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddSnapPoint(Point3d point)
- (summary) 
     Adds a point to the list of osnap points.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddSnapPoints(Point3d[] points)
- (summary) 
     Adds points to the list of osnap points.
     
- (since) 5.0
- (returns) int This is some return comment
#### void ClearConstraints()
- (summary) 
     Removes any explicit constraints added by calls to GetPoint::Constraint() and enable
     the built-in constraint options.
     
- (since) 5.0
- (returns) void This is some return comment
#### void ClearConstructionPoints()
- (summary) 
     Remove all construction points.
     
- (since) 5.0
- (returns) void This is some return comment
#### void ClearSnapPoints()
- (summary) 
     Remove all snap points.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool Constrain(Arc arc)
- (summary) Constrains the picked point to lie on an arc.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Brep brep,int wireDensity,int faceIndex,bool allowPickingPointOffObject)
- (summary) Constrains the picked point to lie on a brep.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Circle circle)
- (summary) Constrains the picked point to lie on a circle.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Curve curve,bool allowPickingPointOffObject)
- (summary) Constrains the picked point to lie on a curve.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Cylinder cylinder)
- (summary) Constrains the picked point to lie on a cylinder.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Line line)
- (summary) Constrains the picked point to lie on a line.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Mesh mesh,bool allowPickingPointOffObject)
- (summary) Constrains the picked point to lie on a mesh.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Plane plane,bool allowElevator)
- (summary) constrain the picked point to lie on a plane.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Point3d from,Point3d to)
- (summary) Constrains the picked point to lie on a line.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Sphere sphere)
- (summary) Constrains the picked point to lie on a sphere.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Constrain(Surface surface,bool allowPickingPointOffObject)
- (summary) Constrains the picked point to lie on a surface.
- (since) 5.0
- (returns) bool This is some return comment
#### void ConstrainDistanceFromBasePoint(double distance)
- (summary) 
     Sets distance constraint from base point.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool ConstrainToConstructionPlane(bool throughBasePoint)
- (summary) 
     If enabled, the picked point is constrained to be on the active construction plane.
     If the base point is set, then the point is constrained to be on the plane that contains
     the base point and is parallel to the active construction plane. By default this
     constraint is enabled.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void ConstrainToTargetPlane()
- (summary) 
     Constrains point to lie on a plane that is parallel to the
     viewing plane and passes through the view's target point.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool ConstrainToVirtualCPlaneIntersection(Plane plane)
- (summary) 
     If enabled, the picked point is constrained to be on the 
     intersection of the plane and the virtual CPlane going through
     the plane origin.
     If the planes are parallel, the constraint works just like planar constraint.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void DrawLineFromPoint(Point3d startPoint,bool showDistanceInStatusBar)
- (summary) 
     Use DrawLineFromPoint() if you want a dynamic line drawn from a point to the point being picked.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableCurveSnapArrow(bool drawDirectionArrowAtSnapPoint,bool reverseArrow)
- (summary) 
     Controls display of the curve snap arrow icon.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableCurveSnapPerpBar(bool drawPerpBarAtSnapPoint,bool drawEndPoints)
- (summary) 
     Controls display of the curve snap perpendicular bar icon.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableCurveSnapTangentBar(bool drawTangentBarAtSnapPoint,bool drawEndPoints)
- (summary) 
     Controls display of the curve snap tangent bar icon.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableDrawLineFromPoint(bool enable)
- (summary) 
     Controls drawing of dynamic a line from the start point.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableNoRedrawOnExit(bool noRedraw)
- (summary) 
     The default functionality of the getpoint operation is to perform a redraw on exit.
     Calling this function with True turns off automatic redraw at the end of GetPoint.
     May be needed in some commands for flicker free feedback.
     When set to true, the caller is responsible for cleaning up the screen
     after GetPoint.
     
- (since) 6.0
- (returns) void This is some return comment
#### void EnableObjectSnapCursors(bool enable)
- (summary) 
     Enables or disables object snap cursors. By default, object snap cursors are enabled.
     
- (since) 6.0
- (returns) void This is some return comment
#### void EnableSnapToCurves(bool enable)
- (summary) 
     If you want GetPoint() to try to snap to curves when the mouse is near a curve
     (like the center point in the Circle command when the AroundCurve option is on),
     then enable the snap to curves option.
     
- (since) 5.0
- (returns) void This is some return comment
#### GetResult Get()
- (summary) 
     After setting up options and so on, call GetPoint::Get to get a 3d point. The
     point is retrieved when the mouse goes down.
     
- (since) 5.0
- (returns) GetResult This is some return comment
#### GetResult Get(bool onMouseUp)
- (summary) 
     After setting up options and so on, call this method to get a 3d point.
     
- (since) 5.0
- (returns) GetResult This is some return comment
#### GetResult Get(bool onMouseUp,bool get2DPoint)
- (summary) 
     After setting up options and so on, call this method to get a 2d or 3d point.
     
- (since) 5.12
- (returns) GetResult This is some return comment
#### Point3d[] GetConstructionPoints()
- (summary) 
     Gets current construction points.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### bool GetPlanarConstraint(RhinoViewport vp,Plane plane)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### Point3d[] GetSnapPoints()
- (summary) 
     Gets current snap points.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### bool InterruptMouseMove()
- (summary) 
     If you have lengthy computations in OnMouseMove() and/or DymanicDraw()
     overrides, then periodically call InterruptMouseMove() to see if you
     should interrupt your work because the mouse has moved again.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void PermitConstraintOptions(bool permit)
- (summary) 
     Control the availability of the built-in linear, planar, curve, and surface
     constraint options like "Along", "AlongPerp", "AlongTan", "AlongParallel",
     "Between", "OnCrv", "OnSrf", ".x", ".y", ".z", ".xy", etc.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PermitElevatorMode(int permitMode)
- (summary) 
     Permits the use of the control key to define a line constraint.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PermitFromOption(bool permit)
- (summary) 
     Control the availability of the built-in "From" option. By default, the "From" option is enabled.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PermitObjectSnap(bool permit)
- (summary) 
     By default, object snaps like "end", "near", etc. are controled by the user.
     If you want to disable this ability, then call PermitObjectSnap(false).
     
- (since) 5.0
- (returns) void This is some return comment
#### void PermitOrthoSnap(bool permit)
- (summary) 
     Controls availability of ortho snap. Default is true.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PermitTabMode(bool permit)
- (summary) 
     Permits the use of the tab key to define a line constraint.
     
- (since) 5.0
- (returns) void This is some return comment
#### BrepFace PointOnBrep(double u,double v)
- (summary) 
     Use to determine if point was on a Brep face. If the point was on a Brep face, 
     then the (u,v) are the face parameters for the point.
     
- (since) 6.0
- (returns) BrepFace This is some return comment
#### Curve PointOnCurve(double t)
- (summary) 
     Use to determine is point was on a curve.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### DocObjects.ObjRef PointOnObject()
- (summary) 
     Call this function to see if the point was on an object. If the point was
     on an object an ObjRef is returned; otherwise None is returned.
     
- (since) 5.0
- (returns) DocObjects.ObjRef This is some return comment
#### Surface PointOnSurface(double u,double v)
- (summary) 
     Use to determine if point was on a surface. If the point was on a surface, 
     then the (u,v) are the surface parameters for the point. The point returned
     by Point() is the same as surface.PointAt(u,v).
     
- (since) 6.0
- (returns) Surface This is some return comment
#### void SetBasePoint(Point3d basePoint,bool showDistanceInStatusBar)
- (summary) 
     Sets a base point used by ortho snap, from snap, planar snap, etc.
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetCursor(CursorStyle cursor)
- (summary) 
     Sets cursor that will be used when Get() is called and snap is not
     happening.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool TryGetBasePoint(Point3d basePoint)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
