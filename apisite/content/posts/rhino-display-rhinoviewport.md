---
title: "Rhino.Display.RhinoViewport"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Display.RhinoViewport()
- (summary) 
- (since) 5.0
## Rhino.Display.RhinoViewport(RhinoViewport other)
- (summary) 
- (since) 5.0
# Properties
## System.Drawing.Rectangle Bounds
- (summary) 
     Gets the size and location of the viewport, in pixels, relative to the parent view.
     
- (since) 5.0
## double Camera35mmLensLength
- (summary) 
- (since) 5.0
## Vector3d CameraDirection
- (summary) 
- (since) 5.0
## Point3d CameraLocation
- (summary) 
- (since) 5.0
## Point3d CameraTarget
- (summary) 
     Viewport target point.
     
- (since) 5.0
## Vector3d CameraUp
- (summary) 
- (since) 5.0
## Vector3d CameraX
- (summary) Gets the "unit to the right" vector.
- (since) 5.0
## Vector3d CameraY
- (summary) Gets the "unit up" vector.
- (since) 5.0
## Vector3d CameraZ
- (summary) Gets the unit vector in CameraDirection.
- (since) 5.0
## uint ChangeCounter
- (summary) 
     The value of change counter is incremented every time the view projection
     or construction plane changes. The user can the mouse and nestable view 
     manipulation commands to change a view at any time. The value of change
     counter can be used to detect these changes in code that is sensitive to
     the view projection.
     
- (since) 5.0
## bool ConstructionAxesVisible
- (summary) 
- (since) 5.0
## bool ConstructionGridVisible
- (summary) 
- (since) 5.0
## DisplayModeDescription DisplayMode
- (summary) 
- (since) 5.0
## double FrustumAspect
- (summary) Gets the width/height ratio of the frustum.
- (since) 5.0
## Guid Id
- (summary) Unique id for this viewport.
- (since) 5.0
## bool IsParallelProjection
- (summary) 
- (since) 5.0
## bool IsPerspectiveProjection
- (summary) 
- (since) 5.0
## bool IsPlanView
- (summary) 
     True if construction plane z axis is parallel to camera direction.
     
- (since) 5.0
## bool IsTwoPointPerspectiveProjection
- (summary) 
- (since) 5.0
## bool IsValidCamera
- (summary) 
- (since) 5.0
## bool IsValidFrustum
- (summary) 
- (since) 5.0
## string Name
- (summary) Name associated with this viewport.
- (since) 5.0
## RhinoView ParentView
- (summary) 
     Gets the parent view, if there is one
     
     Every RhinoView has an associated RhinoViewport that does all the 3d display work.
     Those associated viewports return the RhinoView as their parent view. However,
     RhinoViewports are used in other image creating contexts that do not have a parent
     RhinoView.  If you call ParentView, you MUST check for NULL return values.
     
- (since) 5.0
## double ScreenPortAspect
- (summary) 
     screen port's width/height.
     
- (since) 5.0
## System.Drawing.Size Size
- (summary) 
     Gets or sets the height and width of the viewport (in pixels)
     
- (since) 5.0
## int UserStringCount
- (summary) 
- (since) 6.18
## ViewportType ViewportType
- (summary) 
- (since) 5.0
## string WallpaperFilename
- (summary) 
- (since) 5.0
## bool WallpaperGrayscale
- (summary) 
- (since) 5.0
## bool WallpaperVisible
- (summary) 
- (since) 5.0
## bool WorldAxesVisible
- (summary) 
- (since) 5.0
# Methods
## static RhinoViewport FromId(Guid id)
- (summary) 
     Call this method to get the viewport with the specified Id.
     
- (since) 6.0
- (returns) RhinoViewport This is some return comment
## bool ChangeToParallelProjection(bool symmetricFrustum)
- (summary) 
     Use this function to change projections of valid viewports from persective to parallel.
     It will make common additional adjustments to the frustum so the resulting views are
     similar. The camera location and direction will not be changed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ChangeToPerspectiveProjection(bool symmetricFrustum,double lensLength)
- (summary) 
     Use this function to change projections of valid viewports from parallel to perspective.
     It will make common additional adjustments to the frustum and camera location so the
     resulting views are similar. The camera direction and target point are not be changed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ChangeToPerspectiveProjection(double targetDistance,bool symmetricFrustum,double lensLength)
- (summary) 
     Use this function to change projections of valid viewports from parallel to perspective.
     It will make common additional adjustments to the frustum and camera location so the
     resulting views are similar. The camera direction and target point are not be changed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ChangeToTwoPointPerspectiveProjection(double lensLength)
- (summary) 
     Use this function to change projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool ChangeToTwoPointPerspectiveProjection(double targetDistance,Vector3d up,double lensLength)
- (summary) 
     Use this function to change projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
     
- (since) 6.0
- (returns) bool This is some return comment
## void ClearTraceImage()
- (summary) 
     Remove trace image (background bitmap) for this viewport if one exists.
     
- (since) 5.0
- (returns) void This is some return comment
## System.Drawing.Point ClientToScreen(Point clientPoint)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## System.Drawing.Point ClientToScreen(Point2d clientPoint)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## Line ClientToWorld(Point clientPoint)
- (summary) 
- (since) 5.0
- (returns) Line This is some return comment
## Line ClientToWorld(Point2d clientPoint)
- (summary) 
- (since) 5.0
- (returns) Line This is some return comment
## Plane ConstructionPlane()
- (summary) 
     Simple plane information for this viewport's construction plane. If you want
     detailed construction lpane information, use GetConstructionPlane.
     
- (since) 5.0
- (returns) Plane This is some return comment
## void DeleteAllUserStrings()
- (summary) 
- (since) 6.18
- (returns) void This is some return comment
## bool DeleteUserString(string key)
- (summary) 
- (since) 6.18
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool GetCameraAngle(double halfDiagonalAngle,double halfVerticalAngle,double halfHorizontalAngle)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## BoundingBox GetCameraExtents(IEnumerable<Point3d> points)
- (summary) 
- (since) 5.0
- (returns) BoundingBox This is some return comment
## bool GetCameraFrame(Plane frame)
- (summary) 
     Gets the camera plane.
     
- (since) 5.0
- (returns) bool This is some return comment
## DocObjects.ConstructionPlane GetConstructionPlane()
- (summary) 
- (since) 5.0
- (returns) DocObjects.ConstructionPlane This is some return comment
## bool GetDepth(BoundingBox bbox,double nearDistance,double farDistance)
- (summary) 
     Gets near and far clipping distances of a bounding box.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetDepth(Point3d point,double distance)
- (summary) Gets clipping distance of a point.
- (since) 5.0
- (returns) bool This is some return comment
## bool GetDepth(Sphere sphere,double nearDistance,double farDistance)
- (summary) 
     Gets near and far clipping distances of a sphere.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d[] GetFarRect()
- (summary) Get corners of far clipping plane rectangle.
- (since) 5.0
- (returns) Point3d[] This is some return comment
## bool GetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
- (summary) 
     Gets the view frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumBottomPlane(Plane plane)
- (summary) Get bottom world frustum clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## BoundingBox GetFrustumBoundingBox()
- (summary) 
- (since) 5.0
- (returns) BoundingBox This is some return comment
## bool GetFrustumCenter(Point3d center)
- (summary) 
     Returns world coordinates of frustum's center.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumFarPlane(Plane plane)
- (summary) Get far clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumLeftPlane(Plane plane)
- (summary) Get left world frustum clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumLine(double screenX,double screenY,Line worldLine)
- (summary) 
     Gets the world coordinate line in the view frustum that projects to a point on the screen.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumNearPlane(Plane plane)
- (summary) Get near clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumRightPlane(Plane plane)
- (summary) Get right world frustum clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool GetFrustumTopPlane(Plane plane)
- (summary) Get top world frustum clipping plane.
- (since) 5.0
- (returns) bool This is some return comment
## Point3d[] GetNearRect()
- (summary) Get corners of near clipping plane rectangle.
- (since) 5.0
- (returns) Point3d[] This is some return comment
## Transform GetPickTransform(int clientX,int clientY)
- (summary) 
     Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box. This takes a single point and inflates it by
     Rhino.ApplicationSettings.ModelAidSettings.MousePickBoxRadius to define
     the screen rectangle.
     
- (since) 5.0
- (returns) Transform This is some return comment
## Transform GetPickTransform(Point clientPoint)
- (summary) 
     Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box. This takes a single point and inflates it by
     Rhino.ApplicationSettings.ModelAidSettings.MousePickBoxRadius to define
     the screen rectangle.
     
- (since) 5.0
- (returns) Transform This is some return comment
## Transform GetPickTransform(Rectangle clientRectangle)
- (summary) 
     Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box.
     
- (since) 5.0
- (returns) Transform This is some return comment
## bool GetScreenPort(int portLeft,int portRight,int portBottom,int portTop,int portNear,int portFar)
- (summary) 
     Location of viewport in pixels.  These are provided so you can set the port you are using
     and get the appropriate transformations to and from screen space.
     
- (since) 5.0
- (returns) bool This is some return comment
## Transform GetTransform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)
- (summary) 
     Gets a transform from origin coordinate system to a target coordinate system.
     
- (since) 5.0
- (returns) Transform This is some return comment
## string GetUserString(string key)
- (summary) 
     Gets a user string.
     
- (since) 6.18
- (returns) string This is some return comment
## System.Collections.Specialized.NameValueCollection GetUserStrings()
- (summary) 
     Gets an independent copy of the collection of (user text key, user text value) pairs attached to this object.
     
- (since) 6.18
- (returns) System.Collections.Specialized.NameValueCollection This is some return comment
## bool GetWorldToScreenScale(Point3d pointInFrustum,double pixelsPerUnit)
- (summary) 
     Gets the world to screen size scaling factor at a point in frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsVisible(BoundingBox bbox)
- (summary) 
     Returns True if some portion of a world coordinate bounding box is
     potentially visible in the viewing frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsVisible(Point3d point)
- (summary) 
     Deterines if a world coordinate point is visible in the viewing frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool KeyboardDolly(bool leftRight,double amount)
- (summary) 
     Emulates the keyboard arrow key in terms of interaction.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool KeyboardDollyInOut(double amount)
- (summary) 
     Emulates the keyboard arrow key in terms of interaction.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool KeyboardRotate(bool leftRight,double angleRadians)
- (summary) 
     Emulates the keyboard arrow key in terms of interaction.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Magnify(double magnificationFactor,bool mode)
- (summary) 
     Zooms or dollies in order to scale the viewport projection of observed objects.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Magnify(double magnificationFactor,bool mode,Point fixedScreenPoint)
- (summary) 
     Zooms or dollies in order to scale the viewport projection of observed objects.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseAdjustLensLength(Point mousePreviousPoint,Point mouseCurrentPoint,bool moveTarget)
- (summary) 
     Adjusts the camera lens length.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool MouseDollyZoom(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Zooms lens (thus adjusting the field of view) while moving the camera.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseInOutDolly(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Moves the camera towards or away from the view maintaing focus on the view.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseLateralDolly(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Pans the camera
     
- (since) 6.0
- (returns) bool This is some return comment
## bool MouseMagnify(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Moves the camera towards or away from the view.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseRotateAroundTarget(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Rotates the viewport around target.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseRotateCamera(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Rotates the view around the camera location.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MouseTilt(Point mousePreviousPoint,Point mouseCurrentPoint)
- (summary) 
     Tilts the camera view.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool NextConstructionPlane()
- (summary) 
     Sets the construction plane to the plane that was
     active before the last call to PreviousConstructionPlane.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool NextViewProjection()
- (summary) 
     Sets the view projection and target to the settings that 
     were active before the last call to PrevView.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool PopConstructionPlane()
- (summary) 
     Sets the construction plane to the plane that was
     active before the last call to PushConstructionPlane.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool PopViewProjection()
- (summary) 
     Sets the view projection and target to the settings at the top of
     the view stack and removes those settings from the view stack.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool PreviousConstructionPlane()
- (summary) 
     Sets the construction plane to the plane that was
     active before the last call to NextConstructionPlane
     or SetConstructionPlane.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool PreviousViewProjection()
- (summary) 
     Sets the view projection and target to the settings that
     were active before the last call to NextViewProjection.
     
- (since) 5.0
- (returns) bool This is some return comment
## void PushConstructionPlane(ConstructionPlane cplane)
- (summary) 
     Pushes the current construction plane on the viewport's
     construction plane stack and sets the construction plane
     to cplane.
     
- (since) 5.0
- (returns) void This is some return comment
## bool PushViewInfo(ViewInfo viewinfo,bool includeTraceImage)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void PushViewProjection()
- (summary) 
     Appends the current view projection and target to the viewport's view stack.
     
- (since) 5.0
- (returns) void This is some return comment
## bool Rotate(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
- (summary) 
     Rotates about the specified axis. A positive rotation angle results
     in a counter-clockwise rotation about the axis (right hand rule).
     
- (since) 5.0
- (returns) bool This is some return comment
## System.Drawing.Point ScreenToClient(Point screenPoint)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## void SetCameraDirection(Vector3d cameraDirection,bool updateTargetLocation)
- (summary) 
     Set viewport camera direction. By default the target location is changed so that
     the vector from the camera location to the target is parallel to the camera direction.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetCameraLocation(Point3d cameraLocation,bool updateTargetLocation)
- (summary) 
      Set viewport camera location. By default the target location is changed so that
      the vector from the camera location to the target is parallel to the camera direction
      vector.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetCameraLocations(Point3d targetLocation,Point3d cameraLocation)
- (summary) 
     Set viewport camera location and target location. The camera direction vector is
     changed so that it is parallel to the vector from the camera location to
     the target location.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetCameraTarget(Point3d targetLocation,bool updateCameraLocation)
- (summary) 
     Set viewport target point. By default the camera location
     is translated so that the camera direction vector is parallel
     to the vector from the camera location to the target location.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetClippingPlanes(BoundingBox box)
- (summary) 
     Sets optimal clipping planes to view objects in a world coordinate 3d bounding box.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetConstructionPlane(ConstructionPlane cplane)
- (summary) 
     Sets the construction plane to cplane.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetConstructionPlane(Plane plane)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool SetProjection(DefinedViewportProjection projection,string viewName,bool updateConstructionPlane)
- (summary) 
     Set viewport to a defined projection.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetToPlanView(Point3d planeOrigin,Vector3d planeXaxis,Vector3d planeYaxis,bool setConstructionPlane)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTraceImage(string bitmapFileName,Plane plane,double width,double height,bool grayscale,bool filtered)
- (summary) 
     Set trace image (background bitmap) for this viewport.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetUserString(string key,string value)
- (summary) 
     Attach a user string (key,value combination) to this geometry.
     
- (since) 6.18
- (returns) bool This is some return comment
## bool SetViewProjection(ViewportInfo projection,bool updateTargetLocation)
- (summary) 
     Sets the viewport camera projection.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetWallpaper(string imageFilename,bool grayscale)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetWallpaper(string imageFilename,bool grayscale,bool visible)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## Point2d WorldToClient(Point3d worldPoint)
- (summary) 
     Convert a point from world coordinates in the viewport to a 2d screen
     point in the local coordinates of the viewport (X/Y of point is relative
     to top left corner of viewport on screen)
     
- (since) 5.0
- (returns) Point2d This is some return comment
## bool ZoomBoundingBox(BoundingBox box)
- (summary) 
     Zooms the viewport to the given bounding box.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ZoomExtents()
- (summary) 
     Dollies the camera location and so that the view frustum contains all of the
     selected document objects that can be seen in view. If the projection is
     perspective, the camera angle is not changed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ZoomExtentsSelected()
- (summary) 
     Dollies the camera location and so that the view frustum contains all of the
     selected document objects that can be seen in view. If the projection is
     perspective, the camera angle is not changed.
     
- (since) 5.0
- (returns) bool This is some return comment
