---
title: "ViewportInfo"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents a viewing frustum.
```cs
[Serializable]
public class ViewportInfo : Runtime.CommonObject
```
## Constructors

ViewportInfo()
: Initializes a new instance.

ViewportInfo(RhinoViewport rhinoViewport)
: Copies all of the ViewportInfo data from an existing RhinoViewport.

ViewportInfo(ViewportInfo other)
: Initializes a new instance by copying values from another instance.
## Properties

static [Vector3d](/rhinocommon/rhino/geometry/vector3d/) DefaultCameraDirection
: Default z=up perspective camera direction
: since 6.0

double Camera35mmLensLength
: This property assumes the camera is horizontal and crop the
     film rather than the image when the aspect of the frustum
     is not 36/24.  (35mm film is 36mm wide and 24mm high.)
     Setting preserves camera location,
     changes the frustum, but maintains the frustum's aspect.

double CameraAngle
: Gets or sets the 1/2 smallest angle. See  for more information.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraDirection
: Gets the direction that the camera faces.

[Point3d](/rhinocommon/rhino/geometry/point3d/) CameraLocation
: Gets the camera location (position) point.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraUp
: Gets the camera up vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraX
: Gets the unit "to the right" vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraY
: Gets the unit "up" vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CameraZ
: Gets the unit vector in -CameraDirection.

double FrustumAspect
: Setting FrustumAspect changes the larger of the frustum's width/height
     so that the resulting value of width/height matches the requested
     aspect.  The camera angle is not changed.  If you change the shape
     of the view port with a call SetScreenPort(), then you generally 
     want to call SetFrustumAspect() with the value returned by 
     GetScreenPortAspect().

double FrustumBottom
: Gets the frustum bottom value. This is -top if the frustum has a horizontal symmetry axis.
     This number is usually negative.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumBottomPlane
: Gets the frustum bottom plane that separates visibile from off-screen.

[Point3d](/rhinocommon/rhino/geometry/point3d/) FrustumCenter
: Gets the frustum center point.

double FrustumFar
: Gets the frustum far-cutting value.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumFarPlane
: Gets far clipping plane if camera and frustum
     are valid.  The plane's frame is the same as the camera's
     frame.  The origin is located at the intersection of the
     camera direction ray and the far clipping plane. The plane's
     normal points into the frustum towards the camera location.

double FrustumHeight
: Gets the frustum height. This is  - .

double FrustumLeft
: Gets the frustum left value. This is -right if the frustum has a vertical symmetry axis.
     This number is usually negative.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumLeftPlane
: Gets the frustum left plane that separates visibile from off-screen.

double FrustumMaximumDiameter
: Gets the frustum maximum diameter, or the maximum between  and .

double FrustumMinimumDiameter
: Gets the frustum minimum diameter, or the minimum between  and .

double FrustumNear
: Gets the frustum near-cutting value.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumNearPlane
: Gets near clipping plane if camera and frustum
     are valid.  The plane's frame is the same as the camera's
     frame.  The origin is located at the intersection of the
     camera direction ray and the near clipping plane. The plane's
     normal points out of the frustum towards the camera
     location.

double FrustumRight
: Gets the frustum right value. This is -left if the frustum has a vertical symmetry axis.
     This number is usually positive.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumRightPlane
: Gets the frustum right plane that separates visibile from off-screen.

double FrustumTop
: Gets the frustum top value. This is -bottom if the frustum has a horizontal symmetry axis.
     This number is usually positive.

[Plane](/rhinocommon/rhino/geometry/plane/) FrustumTopPlane
: Gets the frustum top plane that separates visibile from off-screen.

double FrustumWidth
: Gets the frustum width. This is  - .

Guid Id
: Sets the viewport's id to the value used to 
     uniquely identify this viewport.
     There is no approved way to change the viewport 
     id once it is set in order to maintain consistency
     across multiple viewports and those routines that 
     manage them.

bool IsCameraDirectionLocked
: Gets or sets a value that indicates whether the direction that the camera faces is unmodifiable.

bool IsCameraLocationLocked
: Gets or sets a value that indicates whether the camera location is unmodifiable.

bool IsCameraUpLocked
: Gets or sets a value that indicates whether the camera up vector is unmodifiable.

bool IsFrustumLeftRightSymmetric
: Gets or sets a value that indicates whether the camera frustum has a vertical symmetry axis.

bool IsFrustumTopBottomSymmetric
: Gets or sets a value that indicates whether the camera frustum has a horizontal symmetry axis.

bool IsParallelProjection
: Get or set whether this projection is parallel.

bool IsPerspectiveProjection
: Get or set whether this projection is perspective.

bool IsTwoPointPerspectiveProjection
: Gets a value that indicates whether this projection is a two-point perspective.

bool IsValidCamera
: Gets a value that indicates whether the camera is valid.

bool IsValidFrustum
: Gets a value that indicates whether the frustum is valid.

double PerspectiveMinNearDist
: Expert user function to control the minimum
     value of near when perspective projections
     are being used.
: since 7.0

double PerspectiveMinNearOverFar
: Expert user function to control the minimum
     ratio of near/far when perspective projections
     are begin used.
: since 7.0

Rectangle ScreenPort
: Get or set the screen port.  and
: since 6.0

double ScreenPortAspect
: Gets the sceen aspect ratio.
     This is width / height.

[Point3d](/rhinocommon/rhino/geometry/point3d/) TargetPoint
: The current value of the target point.  This point does not play
     a role in the view projection calculations.  It can be used as a 
     fixed point when changing the camera so the visible regions of the
     before and after frustums both contain the region of interest.
     The default constructor sets this point on ON_3dPoint::UnsetPoint.
     You must explicitly call one SetTargetPoint() functions to set
     the target point.

SizeF ViewScale
: Applies scaling factors to parallel projection clipping coordinates
     by setting the m_clip_mod transformation. 
     If you want to compress the view projection across the viewing
     plane, then set x = 0.5, y = 1.0, and z = 1.0.
## Methods

static double CalculateCameraRotationAngle(Vector3d direction,Vector3d up)
: Calculates the camera rotation angle.
: Returns - The camera rotation angle in radians.
: since 6.8

static [Vector3d](/rhinocommon/rhino/geometry/vector3d/) CalculateCameraUpDirection(Point3d location,Vector3d direction,double angle)
: Calculates the camera up direction.
: Returns - The camera up direction.
: since 6.8

bool ChangeToParallelProjection(bool symmetricFrustum)
: Use this function to change projections of valid viewports
     from parallel to perspective.  It will make common additional
     adjustments to the frustum and camera location so the resulting
     views are similar.  The camera direction and target point are
     not be changed.
     If the current projection is parallel and symmetricFrustum,
     FrustumIsLeftRightSymmetric() and FrustumIsTopBottomSymmetric()
     are all equal, then no changes are made and True is returned.
: Returns - True if the operation succeeded; otherwise, false.

bool ChangeToPerspectiveProjection(double targetDistance,bool symmetricFrustum,double lensLength)
: Use this function to change projections of valid viewports
     from parallel to perspective.  It will make common additional
     adjustments to the frustum and camera location so the resulting
     views are similar.  The camera direction and target point are
     not changed.
     If the current projection is perspective and symmetricFrustum,
     IsFrustumIsLeftRightSymmetric, and IsFrustumIsTopBottomSymmetric
     are all equal, then no changes are made and True is returned.
: Returns - True if the operation succeeded; otherwise, false.

bool ChangeToSymmetricFrustum(bool isLeftRightSymmetric,bool isTopBottomSymmetric,double targetDistance)
: If needed, adjusts the current frustum so it has the 
     specified symmetries and adjust the camera location
     so the target plane remains visible.
: Returns - Returns True if the viewport has now a frustum with the specified symmetries.

bool ChangeToTwoPointPerspectiveProjection(double targetDistance,Vector3d up,double lensLength)
: Changes projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
     If the current projection is perspective and
     IsFrustumIsLeftRightSymmetric is True and
     IsFrustumIsTopBottomSymmetric is false, then no changes are
     made and True is returned.
: Returns - True if the operation succeeded; otherwise, false.

bool DollyCamera(Vector3d dollyVector)
: DollyCamera() does not update the frustum's clipping planes.
     To update the frustum's clipping planes call DollyFrustum(d)
     with d = dollyVector o cameraFrameZ.  To convert screen locations
     into a dolly vector, use GetDollyCameraVector().
     Does not update frustum.  To update frustum use DollyFrustum(d) with d = dollyVector o cameraFrameZ.
: Returns - True if the operation succeeded; otherwise, false.

bool DollyExtents(BoundingBox cameraCoordinateBoundingBox,double border)
: Dolly the camera location and so that the view frustum contains
     all of the document objects that can be seen in view.
     If the projection is perspective, the camera angle is not changed.
: Returns - True if successful.
: since 5.6

bool DollyExtents(IEnumerable<GeometryBase> geometry,double border)
: Dolly the camera location and so that the view frustum contains
     all of the document objects that can be seen in view.
     If the projection is perspective, the camera angle is not changed.
: Returns - True if successful.
: since 5.6

bool DollyFrustum(double dollyDistance)
: Moves the frustum clipping planes.
: Returns - True if the operation succeeded; otherwise, false.

bool Extents(double halfViewAngleRadians,BoundingBox bbox)
: Extends this viewport view to include a bounding box.
     Use Extents() as a quick way to set a viewport to so that bounding
     volume is inside of a viewports frustrum.
     The view angle is used to determine the position of the camera.
: Returns - True if the operation succeeded; otherwise, false.

bool Extents(double halfViewAngleRadians,Sphere sphere)
: Extends this viewport view to include a sphere.
     Use Extents() as a quick way to set a viewport to so that bounding
     volume is inside of a viewports frustrum.
     The view angle is used to determine the position of the camera.
: Returns - True if the operation succeeded; otherwise, false.

[Point3d](/rhinocommon/rhino/geometry/point3d/) FrustumCenterPoint(double targetDistance)
: Return a point on the central axis of the view frustum.
     This point is a good choice for a general purpose target point.
: Returns - A point on the frustum's central axis.  If the viewport or input
     is not valid, then ON_3dPoint::UnsetPoint is returned.

bool GetBoundingBoxDepth(BoundingBox bbox,double nearDistance,double farDistance)
: Gets near and far clipping distances of a bounding box.
     This function ignores the current value of the viewport's 
     near and far settings. If the viewport is a perspective
     projection, the it intersects the semi infinite frustum
     volume with the bounding box and returns the near and far
     distances of the intersection.  If the viewport is a parallel
     projection, it instersects the infinte view region with the
     bounding box and returns the near and far distances of the
     projection.
: Returns - True if the bounding box intersects the view frustum and near_dist/far_dist were set. 
     False if the bounding box does not intesect the view frustum.

bool GetCameraAngles(double halfDiagonalAngleRadians,double halfVerticalAngleRadians,double halfHorizontalAngleRadians)
: Gets the field of view angles.
: Returns - True if the operation succeeded; otherwise, false.

bool GetCameraFrame(Point3d location,Vector3d cameraX,Vector3d cameraY,Vector3d cameraZ)
: Gets location and vectors of this camera.
: Returns - True if current camera orientation is valid; otherwise false.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) GetDollyCameraVector(int screenX0,int screenY0,int screenX1,int screenY1,double projectionPlaneDistance)
: Gets a world coordinate dolly vector that can be passed to DollyCamera().
: Returns - The world coordinate dolly vector.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) GetDollyCameraVector(Point screen0,Point screen1,double projectionPlaneDistance)
: Gets a world coordinate dolly vector that can be passed to DollyCamera().
: Returns - The world coordinate dolly vector.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetFarPlaneCorners()
: Gets the corners of far clipping plane rectangle.
     4 points are returned in the order of bottom left, bottom right,
     top left, top right.
: Returns - Four corner points on success.
     Empty array if viewport is not valid.

bool GetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
: Gets the view frustum.
: Returns - True if operation succeeded; otherwise, false.

[Line](/rhinocommon/rhino/geometry/line/) GetFrustumLine(double screenX,double screenY)
: Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
: Returns - 3d world coordinate line segment starting on the near clipping plane and ending on the far clipping plane.
: since 5.1

[Line](/rhinocommon/rhino/geometry/line/) GetFrustumLine(Point screenPoint)
: Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
: Returns - 3d world coordinate line segment starting on the near clipping plane and ending on the far clipping plane.
: since 5.1

[Line](/rhinocommon/rhino/geometry/line/) GetFrustumLine(PointF screenPoint)
: Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
: Returns - 3d world coordinate line segment starting on the near clipping plane and ending on the far clipping plane.
: since 5.1

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetNearPlaneCorners()
: Gets the corners of near clipping plane rectangle.
     4 points are returned in the order of bottom left, bottom right,
     top left, top right.
: Returns - Four corner points on success.
     Empty array if viewport is not valid.

bool GetPointDepth(Point3d point,double distance)
: Gets the clipping distance of a point. This function ignores the
     current value of the viewport's near and far settings. If
     the viewport is a perspective projection, then it intersects
     the semi infinite frustum volume with the bounding box and
     returns the near and far distances of the intersection.
     If the viewport is a parallel projection, it instersects the
     infinte view region with the bounding box and returns the
     near and far distances of the projection.
: Returns - True if the bounding box intersects the view frustum and
     near_dist/far_dist were set.
     False if the bounding box does not intesect the view frustum.

System.Drawing.Rectangle GetScreenPort()
: Gets the location of viewport in pixels.
     See documentation for SetScreenPort.
: Returns - The rectangle, or Empty rectangle on error.

System.Drawing.Rectangle GetScreenPort(int near,int far)
: Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
: Returns - The rectangle, or Empty rectangle on error.

void GetScreenPortLocation(int left,int top,int right,int bottom)
: Get the location of viewport in pixels (non System.Drawing version of GetScreenPort)
: since 6.0

bool GetSphereDepth(Sphere sphere,double nearDistance,double farDistance)
: Gets near and far clipping distances of a bounding sphere.
: Returns - True if the sphere intersects the view frustum and near_dist/far_dist were set.
     False if the sphere does not intesect the view frustum.

double GetWorldToScreenScale(Point3d pointInFrustum)
: Gets the scale factor from point in frustum to screen scale.
: Returns - number of pixels per world unit at the 3d point.
: since 5.1

[Transform](/rhinocommon/rhino/geometry/transform/) GetXform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)
: Computes a transform from a coordinate system to another.
: Returns - The 4x4 transformation matrix (acts on the left).

bool RotateCamera(double rotationAngleRadians,Vector3d rotationAxis,Point3d rotationCenter)
: Rotates the view camera.
: Returns - True if rotation is successful, False otherwise.
: since 7.0

bool SetCameraDirection(Vector3d direction)
: Sets the direction that the camera faces.
: Returns - True if the direction was set; otherwise false.

bool SetCameraLocation(Point3d location)
: Sets the camera location (position) point.
: Returns - True if the operation succeeded; otherwise, false.

bool SetCameraUp(Vector3d up)
: Sets the camera up vector.
: Returns - True if the direction was set; otherwise false.

bool SetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
: Sets the view frustum. If FrustumSymmetryIsLocked() is true
     and left != -right or bottom != -top, then they will be
     adjusted so the resulting frustum is symmetric.
: Returns - True if operation succeeded; otherwise, false.

bool SetFrustumNearFar(BoundingBox boundingBox)
: Sets the frustum near and far using a bounding box.
: Returns - True if operation succeeded; otherwise, false.

bool SetFrustumNearFar(double nearDistance,double farDistance)
: Sets the frustum near and far distances using two values.
: Returns - True if operation succeeded; otherwise, false.

bool SetFrustumNearFar(double nearDistance,double farDistance,double minNearDistance,double minNearOverFar,double targetDistance)
: Sets near and far clipping distance subject to constraints.
: Returns - True if operation succeeded; otherwise, false.

bool SetFrustumNearFar(Point3d center,double radius)
: Sets the frustum near and far using a center point and radius.
: Returns - True if operation succeeded; otherwise, false.

bool SetScreenPort(int left,int right,int bottom,int top,int near,int far)
: Location of viewport in pixels.
     These are provided so you can set the port you are using
     and get the appropriate transformations to and from
     screen space.
     // For a Windows window
     /      int width = width of window client area in pixels;
     /      int height = height of window client area in pixels;
     /      port_left = 0;
     /      port_right = width;
     /      port_top = 0;
     /      port_bottom = height;
     /      port_near = 0;
     /      port_far = 1;
     /      SetScreenPort( port_left, port_right, 
     /                     port_bottom, port_top, 
     /                     port_near, port_far );
: Returns - True if input is valid.

bool SetScreenPort(Rectangle windowRectangle)
: Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
: Returns - True if input is valid.

bool SetScreenPort(Rectangle windowRectangle,int near,int far)
: Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
: Returns - True if input is valid.

double TargetDistance(bool useFrustumCenterFallback)
: Gets the distance from the target point to the camera plane.
     Note that if the frustum is not symmetric, then this distance
     is shorter than the distance from the target to the camera location.
: Returns - Shortest signed distance from camera plane to target point.
     If the target point is on the visible side of the camera,
     a positive value is returned.  ON_UNSET_VALUE is returned
     when the input of view is not valid.

bool TransformCamera(Transform xform)
: Transforms the view camera location, direction, and up.
: Returns - True if a valid camera was transformed, False if
     invalid camera, frustum, or transformation.
: since 7.0

void UnlockCamera()
: Unlocks the camera vectors and location.

void UnlockFrustumSymmetry()
: Unlocks frustum horizontal and vertical symmetries.

bool ZoomToScreenRect(int left,int top,int right,int bottom)
: Zooms to a screen zone.
     View changing from screen input points. Handy for
     using a mouse to manipulate a view.
     ZoomToScreenRect() may change camera and frustum settings.
: Returns - True if the operation succeeded; otherwise, false.

bool ZoomToScreenRect(Rectangle windowRectangle)
: Zooms to a screen zone.
     View changing from screen input points. Handy for
     using a mouse to manipulate a view.
     ZoomToScreenRect() may change camera and frustum settings.
: Returns - True if the operation succeeded; otherwise, false.
