---
title: "RhinoViewport"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Displays geometry with a given projection. In standard modeling views there
   is a one to one relationship between RhinoView and RhinoViewports. In a page
   layout, there may be multiple RhinoViewports for a single layout.
```cs
public class RhinoViewport : IDisposable
```
## Constructors

RhinoViewport()
: 

RhinoViewport(RhinoViewport other)
: 
## Properties

Rectangle Bounds
: Gets the size and location of the viewport, in pixels, relative to the parent view.

double Camera35mmLensLength
: 

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraDirection
: 

[Point3d](/rhinocommon/rhino/geometry/point3d/) CameraLocation
: 

[Point3d](/rhinocommon/rhino/geometry/point3d/) CameraTarget
: Viewport target point.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraUp
: 

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraX
: Gets the "unit to the right" vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraY
: Gets the "unit up" vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraZ
: Gets the unit vector in CameraDirection.

uint ChangeCounter
: The value of change counter is incremented every time the view projection
     or construction plane changes. The user can the mouse and nestable view 
     manipulation commands to change a view at any time. The value of change
     counter can be used to detect these changes in code that is sensitive to
     the view projection.

bool ConstructionAxesVisible
: 

bool ConstructionGridVisible
: 

[DisplayModeDescription](/rhinocommon/rhino/display/displaymodedescription/) DisplayMode
: 

double FrustumAspect
: Gets the width/height ratio of the frustum.

Guid Id
: Unique id for this viewport.

bool IsParallelProjection
: 

bool IsPerspectiveProjection
: 

bool IsPlanView
: True if construction plane z axis is parallel to camera direction.

bool IsTwoPointPerspectiveProjection
: 

bool IsValidCamera
: 

bool IsValidFrustum
: 

string Name
: Name associated with this viewport.

[RhinoView](/rhinocommon/rhino/display/rhinoview/) ParentView
: Gets the parent view, if there is one
     
     Every RhinoView has an associated RhinoViewport that does all the 3d display work.
     Those associated viewports return the RhinoView as their parent view. However,
     RhinoViewports are used in other image creating contexts that do not have a parent
     RhinoView.  If you call ParentView, you MUST check for NULL return values.

double ScreenPortAspect
: screen port's width/height.

Size Size
: Gets or sets the height and width of the viewport (in pixels)

int UserStringCount
: 
: since 6.18

[ViewportType](/rhinocommon/rhino/display/viewporttype/) ViewportType
: 

string WallpaperFilename
: 

bool WallpaperGrayscale
: 

bool WallpaperVisible
: 

bool WorldAxesVisible
: 
## Methods

static RhinoViewport FromId(Guid id)
: Call this method to get the viewport with the specified Id.
: Returns - Returns a RhinoViewport if the Id is found otherwise null.
: since 6.0

bool ChangeToParallelProjection(bool symmetricFrustum)
: Use this function to change projections of valid viewports from persective to parallel.
     It will make common additional adjustments to the frustum so the resulting views are
     similar. The camera location and direction will not be changed.
: Returns - If the current projection is parallel and bSymmetricFrustum, FrustumIsLeftRightSymmetric()
     and FrustumIsTopBottomSymmetric() are all equal, then no changes are made and True is returned.

bool ChangeToPerspectiveProjection(bool symmetricFrustum,double lensLength)
: Use this function to change projections of valid viewports from parallel to perspective.
     It will make common additional adjustments to the frustum and camera location so the
     resulting views are similar. The camera direction and target point are not be changed.
: Returns - If the current projection is perspective and bSymmetricFrustum, FrustumIsLeftRightSymmetric()
     and FrustumIsTopBottomSymmetric() are all equal, then no changes are made and True is returned.

bool ChangeToPerspectiveProjection(double targetDistance,bool symmetricFrustum,double lensLength)
: Use this function to change projections of valid viewports from parallel to perspective.
     It will make common additional adjustments to the frustum and camera location so the
     resulting views are similar. The camera direction and target point are not be changed.
: Returns - If the current projection is perspective and bSymmetricFrustum, FrustumIsLeftRightSymmetric()
     and FrustumIsTopBottomSymmetric() are all equal, then no changes are made and True is returned.

bool ChangeToTwoPointPerspectiveProjection(double lensLength)
: Use this function to change projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
: Returns - If the current projection is perspective and bSymmetricFrustum, FrustumIsLeftRightSymmetric()
     and FrustumIsTopBottomSymmetric() are all equal, then no changes are made and True is returned.
: since 6.0

bool ChangeToTwoPointPerspectiveProjection(double targetDistance,Vector3d up,double lensLength)
: Use this function to change projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
: Returns - If the current projection is perspective and bSymmetricFrustum, FrustumIsLeftRightSymmetric()
     and FrustumIsTopBottomSymmetric() are all equal, then no changes are made and True is returned.
: since 6.0

void ClearTraceImage()
: Remove trace image (background bitmap) for this viewport if one exists.

System.Drawing.Point ClientToScreen(Point clientPoint)
: 

System.Drawing.Point ClientToScreen(Point2d clientPoint)
: 

[Line](/rhinocommon/rhino/geometry/line/) ClientToWorld(Point clientPoint)
: 

[Line](/rhinocommon/rhino/geometry/line/) ClientToWorld(Point2d clientPoint)
: 

[Plane](/rhinocommon/rhino/geometry/plane/) ConstructionPlane()
: Simple plane information for this viewport's construction plane. If you want
     detailed construction lpane information, use GetConstructionPlane.

void DeleteAllUserStrings()
: 
: since 6.18

bool DeleteUserString(string key)
: 
: since 6.18

void Dispose()
: 

bool GetCameraAngle(double halfDiagonalAngle,double halfVerticalAngle,double halfHorizontalAngle)
: 

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetCameraExtents(IEnumerable<Point3d> points)
: 

bool GetCameraFrame(Plane frame)
: Gets the camera plane.
: Returns - True if current camera orientation is valid.

DocObjects.ConstructionPlane GetConstructionPlane()
: 

bool GetDepth(BoundingBox bbox,double nearDistance,double farDistance)
: Gets near and far clipping distances of a bounding box.
: Returns - True if the bounding box intersects the view frustum and near_dist/far_dist were set.
     False if the bounding box does not intesect the view frustum.

bool GetDepth(Point3d point,double distance)
: Gets clipping distance of a point.
: Returns - True if the point is ing the view frustum and near_dist/far_dist were set.
     False if the bounding box does not intesect the view frustum.

bool GetDepth(Sphere sphere,double nearDistance,double farDistance)
: Gets near and far clipping distances of a sphere.
: Returns - True if the sphere intersects the view frustum and near_dist/far_dist were set.
     False if the sphere does not intesect the view frustum.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetFarRect()
: Get corners of far clipping plane rectangle.
: Returns - [left_bottom, right_bottom, left_top, right_top] points on success
     None on failure.

bool GetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
: Gets the view frustum.
: Returns - True if operation succeeded.

bool GetFrustumBottomPlane(Plane plane)
: Get bottom world frustum clipping plane.
: Returns - True if camera and frustum are valid and plane was set.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetFrustumBoundingBox()
: 

bool GetFrustumCenter(Point3d center)
: Returns world coordinates of frustum's center.
: Returns - True if the center was successfully computed.

bool GetFrustumFarPlane(Plane plane)
: Get far clipping plane.
: Returns - True if camera and frustum are valid.

bool GetFrustumLeftPlane(Plane plane)
: Get left world frustum clipping plane.
: Returns - True if camera and frustum are valid and plane was set.

bool GetFrustumLine(double screenX,double screenY,Line worldLine)
: Gets the world coordinate line in the view frustum that projects to a point on the screen.
: Returns - True if successful.
     False if view projection or frustum is invalid.

bool GetFrustumNearPlane(Plane plane)
: Get near clipping plane.
: Returns - True if camera and frustum are valid.

bool GetFrustumRightPlane(Plane plane)
: Get right world frustum clipping plane.
: Returns - True if camera and frustum are valid and plane was set.

bool GetFrustumTopPlane(Plane plane)
: Get top world frustum clipping plane.
: Returns - True if camera and frustum are valid and plane was set.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetNearRect()
: Get corners of near clipping plane rectangle.
: Returns - [left_bottom, right_bottom, left_top, right_top] points on success
     None on failure.

[Transform](/rhinocommon/rhino/geometry/transform/) GetPickTransform(int clientX,int clientY)
: Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box. This takes a single point and inflates it by
     Rhino.ApplicationSettings.ModelAidSettings.MousePickBoxRadius to define
     the screen rectangle.
: Returns - A transformation matrix.

[Transform](/rhinocommon/rhino/geometry/transform/) GetPickTransform(Point clientPoint)
: Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box. This takes a single point and inflates it by
     Rhino.ApplicationSettings.ModelAidSettings.MousePickBoxRadius to define
     the screen rectangle.
: Returns - A transformation matrix.

[Transform](/rhinocommon/rhino/geometry/transform/) GetPickTransform(Rectangle clientRectangle)
: Takes a rectangle in screen coordinates and returns a transformation
     that maps the 3d frustum defined by the rectangle to a -1/+1 clipping
     coordinate box.
: Returns - A transformation matrix.

bool GetScreenPort(int portLeft,int portRight,int portBottom,int portTop,int portNear,int portFar)
: Location of viewport in pixels.  These are provided so you can set the port you are using
     and get the appropriate transformations to and from screen space.
: Returns - True if the operation is successful.

[Transform](/rhinocommon/rhino/geometry/transform/) GetTransform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)
: Gets a transform from origin coordinate system to a target coordinate system.
: Returns - 4x4 transformation matrix (acts on the left)
     Identity matrix is returned if this function fails.

string GetUserString(string key)
: Gets a user string.
: Returns - string associated with the key if successful. None if no key was found.
: since 6.18

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets an independent copy of the collection of (user text key, user text value) pairs attached to this object.
: Returns - A collection of key strings and values strings. This
: since 6.18

bool GetWorldToScreenScale(Point3d pointInFrustum,double pixelsPerUnit)
: Gets the world to screen size scaling factor at a point in frustum.
: Returns - True if the operation is successful.

bool IsVisible(BoundingBox bbox)
: Returns True if some portion of a world coordinate bounding box is
     potentially visible in the viewing frustum.
: Returns - True if the box is potentially visible; otherwise false.

bool IsVisible(Point3d point)
: Deterines if a world coordinate point is visible in the viewing frustum.
: Returns - True if the point is visible; otherwise false.

bool KeyboardDolly(bool leftRight,double amount)
: Emulates the keyboard arrow key in terms of interaction.
: Returns - True if operation succeeded; otherwise false.

bool KeyboardDollyInOut(double amount)
: Emulates the keyboard arrow key in terms of interaction.
: Returns - True if operation succeeded; otherwise false.

bool KeyboardRotate(bool leftRight,double angleRadians)
: Emulates the keyboard arrow key in terms of interaction.
: Returns - True if operation succeeded; otherwise false.

bool Magnify(double magnificationFactor,bool mode)
: Zooms or dollies in order to scale the viewport projection of observed objects.
: Returns - True if operation succeeded; otherwise false.

bool Magnify(double magnificationFactor,bool mode,Point fixedScreenPoint)
: Zooms or dollies in order to scale the viewport projection of observed objects.
: Returns - True if operation succeeded; otherwise false.

bool MouseAdjustLensLength(Point mousePreviousPoint,Point mouseCurrentPoint,bool moveTarget)
: Adjusts the camera lens length.
: since 6.0

bool MouseDollyZoom(Point mousePreviousPoint,Point mouseCurrentPoint)
: Zooms lens (thus adjusting the field of view) while moving the camera.

bool MouseInOutDolly(Point mousePreviousPoint,Point mouseCurrentPoint)
: Moves the camera towards or away from the view maintaing focus on the view.

bool MouseLateralDolly(Point mousePreviousPoint,Point mouseCurrentPoint)
: Pans the camera
: since 6.0

bool MouseMagnify(Point mousePreviousPoint,Point mouseCurrentPoint)
: Moves the camera towards or away from the view.

bool MouseRotateAroundTarget(Point mousePreviousPoint,Point mouseCurrentPoint)
: Rotates the viewport around target.

bool MouseRotateCamera(Point mousePreviousPoint,Point mouseCurrentPoint)
: Rotates the view around the camera location.

bool MouseTilt(Point mousePreviousPoint,Point mouseCurrentPoint)
: Tilts the camera view.

bool NextConstructionPlane()
: Sets the construction plane to the plane that was
     active before the last call to PreviousConstructionPlane.
: Returns - True if successful.

bool NextViewProjection()
: Sets the view projection and target to the settings that 
     were active before the last call to PrevView.
: Returns - True if the view stack was popped.

bool PopConstructionPlane()
: Sets the construction plane to the plane that was
     active before the last call to PushConstructionPlane.
: Returns - True if a construction plane was popped.

bool PopViewProjection()
: Sets the view projection and target to the settings at the top of
     the view stack and removes those settings from the view stack.
: Returns - True if there were settings that could be popped from the stack.

bool PreviousConstructionPlane()
: Sets the construction plane to the plane that was
     active before the last call to NextConstructionPlane
     or SetConstructionPlane.
: Returns - True if successful.

bool PreviousViewProjection()
: Sets the view projection and target to the settings that
     were active before the last call to NextViewProjection.
: Returns - True if the view stack was popped.

void PushConstructionPlane(ConstructionPlane cplane)
: Pushes the current construction plane on the viewport's
     construction plane stack and sets the construction plane
     to cplane.

bool PushViewInfo(ViewInfo viewinfo,bool includeTraceImage)
: 

void PushViewProjection()
: Appends the current view projection and target to the viewport's view stack.

bool Rotate(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
: Rotates about the specified axis. A positive rotation angle results
     in a counter-clockwise rotation about the axis (right hand rule).
: Returns - True if geometry successfully rotated.

System.Drawing.Point ScreenToClient(Point screenPoint)
: 

void SetCameraDirection(Vector3d cameraDirection,bool updateTargetLocation)
: Set viewport camera direction. By default the target location is changed so that
     the vector from the camera location to the target is parallel to the camera direction.

void SetCameraLocation(Point3d cameraLocation,bool updateTargetLocation)
: Set viewport camera location. By default the target location is changed so that
      the vector from the camera location to the target is parallel to the camera direction
      vector.

void SetCameraLocations(Point3d targetLocation,Point3d cameraLocation)
: Set viewport camera location and target location. The camera direction vector is
     changed so that it is parallel to the vector from the camera location to
     the target location.

void SetCameraTarget(Point3d targetLocation,bool updateCameraLocation)
: Set viewport target point. By default the camera location
     is translated so that the camera direction vector is parallel
     to the vector from the camera location to the target location.

void SetClippingPlanes(BoundingBox box)
: Sets optimal clipping planes to view objects in a world coordinate 3d bounding box.

void SetConstructionPlane(ConstructionPlane cplane)
: Sets the construction plane to cplane.

void SetConstructionPlane(Plane plane)
: 

bool SetProjection(DefinedViewportProjection projection,string viewName,bool updateConstructionPlane)
: Set viewport to a defined projection.
: Returns - True if successful.

bool SetToPlanView(Point3d planeOrigin,Vector3d planeXaxis,Vector3d planeYaxis,bool setConstructionPlane)
: 

bool SetTraceImage(string bitmapFileName,Plane plane,double width,double height,bool grayscale,bool filtered)
: Set trace image (background bitmap) for this viewport.
: Returns - True if successful.

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.
: since 6.18

bool SetViewProjection(ViewportInfo projection,bool updateTargetLocation)
: Sets the viewport camera projection.
: Returns - True on success.

bool SetWallpaper(string imageFilename,bool grayscale)
: 

bool SetWallpaper(string imageFilename,bool grayscale,bool visible)
: 

[Point2d](/rhinocommon/rhino/geometry/point2d/) WorldToClient(Point3d worldPoint)
: Convert a point from world coordinates in the viewport to a 2d screen
     point in the local coordinates of the viewport (X/Y of point is relative
     to top left corner of viewport on screen)
: Returns - The 2D point on the screen.

bool ZoomBoundingBox(BoundingBox box)
: Zooms the viewport to the given bounding box.
: Returns - True if operation succeeded; otherwise false.

bool ZoomExtents()
: Dollies the camera location and so that the view frustum contains all of the
     selected document objects that can be seen in view. If the projection is
     perspective, the camera angle is not changed.
: Returns - True if successful.

bool ZoomExtentsSelected()
: Dollies the camera location and so that the view frustum contains all of the
     selected document objects that can be seen in view. If the projection is
     perspective, the camera angle is not changed.
: Returns - True if successful.
