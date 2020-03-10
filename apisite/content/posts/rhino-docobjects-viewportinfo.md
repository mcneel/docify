---
title: "ViewportInfo"
draft: false
---

*Namespace: Rhino.DocObjects*

   Represents a viewing frustum.
   
## Constructors
#### Rhino.DocObjects.ViewportInfo()
- (summary) 
     Initializes a new instance.
     
- (since) 5.0
#### Rhino.DocObjects.ViewportInfo(RhinoViewport rhinoViewport)
- (summary) 
     Copies all of the ViewportInfo data from an existing RhinoViewport.
     
- (since) 5.0
#### Rhino.DocObjects.ViewportInfo(ViewportInfo other)
- (summary) 
      Initializes a new instance by copying values from another instance.
     
- (since) 5.0
## Properties
#### static Vector3d DefaultCameraDirection
- (summary)  Default z=up perspective camera direction 
- (since) 6.0
#### double Camera35mmLensLength
- (summary) 
     This property assumes the camera is horizontal and crop the
     film rather than the image when the aspect of the frustum
     is not 36/24.  (35mm film is 36mm wide and 24mm high.)
     Setting preserves camera location,
     changes the frustum, but maintains the frustum's aspect.
     
- (since) 5.0
#### double CameraAngle
- (summary) 
     Gets or sets the 1/2 smallest angle. See  for more information.
     
- (since) 5.0
#### Vector3d CameraDirection
- (summary) 
     Gets the direction that the camera faces.
     
- (since) 5.0
#### Point3d CameraLocation
- (summary) 
     Gets the camera location (position) point.
     
- (since) 5.0
#### Vector3d CameraUp
- (summary) 
     Gets the camera up vector.
     
- (since) 5.0
#### Vector3d CameraX
- (summary) 
     Gets the unit "to the right" vector.
     
- (since) 5.0
#### Vector3d CameraY
- (summary) 
     Gets the unit "up" vector.
     
- (since) 5.0
#### Vector3d CameraZ
- (summary) 
     Gets the unit vector in -CameraDirection.
     
- (since) 5.0
#### double FrustumAspect
- (summary) 
     Setting FrustumAspect changes the larger of the frustum's width/height
     so that the resulting value of width/height matches the requested
     aspect.  The camera angle is not changed.  If you change the shape
     of the view port with a call SetScreenPort(), then you generally 
     want to call SetFrustumAspect() with the value returned by 
     GetScreenPortAspect().
     
- (since) 5.0
#### double FrustumBottom
- (summary) 
     Gets the frustum bottom value. This is -top if the frustum has a horizontal symmetry axis.
     This number is usually negative.
- (since) 5.0
#### Rhino.Geometry.Plane FrustumBottomPlane
- (summary) 
     Gets the frustum bottom plane that separates visibile from off-screen.
     
- (since) 5.0
#### Point3d FrustumCenter
- (summary) 
     Gets the frustum center point.
     
- (since) 5.0
#### double FrustumFar
- (summary) 
     Gets the frustum far-cutting value.
     
- (since) 5.0
#### Plane FrustumFarPlane
- (summary) 
     Gets far clipping plane if camera and frustum
     are valid.  The plane's frame is the same as the camera's
     frame.  The origin is located at the intersection of the
     camera direction ray and the far clipping plane. The plane's
     normal points into the frustum towards the camera location.
     
- (since) 5.0
#### double FrustumHeight
- (summary) 
     Gets the frustum height. This is  - .
     
- (since) 5.0
#### double FrustumLeft
- (summary) 
     Gets the frustum left value. This is -right if the frustum has a vertical symmetry axis.
     This number is usually negative.
- (since) 5.0
#### Plane FrustumLeftPlane
- (summary) 
     Gets the frustum left plane that separates visibile from off-screen.
     
- (since) 5.0
#### double FrustumMaximumDiameter
- (summary) 
     Gets the frustum maximum diameter, or the maximum between  and .
     
- (since) 5.0
#### double FrustumMinimumDiameter
- (summary) 
     Gets the frustum minimum diameter, or the minimum between  and .
     
- (since) 5.0
#### double FrustumNear
- (summary) 
     Gets the frustum near-cutting value.
     
- (since) 5.0
#### Plane FrustumNearPlane
- (summary) 
     Gets near clipping plane if camera and frustum
     are valid.  The plane's frame is the same as the camera's
     frame.  The origin is located at the intersection of the
     camera direction ray and the near clipping plane. The plane's
     normal points out of the frustum towards the camera
     location.
     
- (since) 5.0
#### double FrustumRight
- (summary) 
     Gets the frustum right value. This is -left if the frustum has a vertical symmetry axis.
     This number is usually positive.
- (since) 5.0
#### Plane FrustumRightPlane
- (summary) 
     Gets the frustum right plane that separates visibile from off-screen.
     
- (since) 5.0
#### double FrustumTop
- (summary) 
     Gets the frustum top value. This is -bottom if the frustum has a horizontal symmetry axis.
     This number is usually positive.
- (since) 5.0
#### Plane FrustumTopPlane
- (summary) 
     Gets the frustum top plane that separates visibile from off-screen.
     
- (since) 5.0
#### double FrustumWidth
- (summary) 
     Gets the frustum width. This is  - .
     
- (since) 5.0
#### Guid Id
- (summary) 
     Sets the viewport's id to the value used to 
     uniquely identify this viewport.
     There is no approved way to change the viewport 
     id once it is set in order to maintain consistency
     across multiple viewports and those routines that 
     manage them.
     
- (since) 5.0
#### bool IsCameraDirectionLocked
- (summary) 
     Gets or sets a value that indicates whether the direction that the camera faces is unmodifiable.
     
- (since) 5.0
#### bool IsCameraLocationLocked
- (summary) 
     Gets or sets a value that indicates whether the camera location is unmodifiable.
     
- (since) 5.0
#### bool IsCameraUpLocked
- (summary) 
     Gets or sets a value that indicates whether the camera up vector is unmodifiable.
     
- (since) 5.0
#### bool IsFrustumLeftRightSymmetric
- (summary) 
     Gets or sets a value that indicates whether the camera frustum has a vertical symmetry axis.
     
- (since) 5.0
#### bool IsFrustumTopBottomSymmetric
- (summary) 
     Gets or sets a value that indicates whether the camera frustum has a horizontal symmetry axis.
     
- (since) 5.0
#### bool IsParallelProjection
- (summary) 
     Get or set whether this projection is parallel.
     
- (since) 5.0
#### bool IsPerspectiveProjection
- (summary) 
     Get or set whether this projection is perspective.
     
- (since) 5.0
#### bool IsTwoPointPerspectiveProjection
- (summary) 
     Gets a value that indicates whether this projection is a two-point perspective.
     
- (since) 5.0
#### bool IsValidCamera
- (summary) 
     Gets a value that indicates whether the camera is valid.
     
- (since) 5.0
#### bool IsValidFrustum
- (summary) 
     Gets a value that indicates whether the frustum is valid.
     
- (since) 5.0
#### double PerspectiveMinNearDist
- (summary) 
     Expert user function to control the minimum
     value of near when perspective projections
     are being used.
     
- (since) 7.0
#### double PerspectiveMinNearOverFar
- (summary) 
     Expert user function to control the minimum
     ratio of near/far when perspective projections
     are begin used.
     
- (since) 7.0
#### System.Drawing.Rectangle ScreenPort
- (summary) 
     Get or set the screen port.  and 
- (since) 6.0
#### double ScreenPortAspect
- (summary) 
     Gets the sceen aspect ratio.
     This is width / height.
- (since) 5.0
#### Point3d TargetPoint
- (summary) 
     The current value of the target point.  This point does not play
     a role in the view projection calculations.  It can be used as a 
     fixed point when changing the camera so the visible regions of the
     before and after frustums both contain the region of interest.
     The default constructor sets this point on ON_3dPoint::UnsetPoint.
     You must explicitly call one SetTargetPoint() functions to set
     the target point.
     
- (since) 5.0
#### System.Drawing.SizeF ViewScale
- (summary) 
     Applies scaling factors to parallel projection clipping coordinates
     by setting the m_clip_mod transformation. 
     If you want to compress the view projection across the viewing
     plane, then set x = 0.5, y = 1.0, and z = 1.0.
     
- (since) 5.0
## Methods
#### static double CalculateCameraRotationAngle(Vector3d direction,Vector3d up)
- (summary) 
     Calculates the camera rotation angle.
     
- (since) 6.8
- (returns) double This is some return comment
#### static Vector3d CalculateCameraUpDirection(Point3d location,Vector3d direction,double angle)
- (summary) 
     Calculates the camera up direction.
     
- (since) 6.8
- (returns) Vector3d This is some return comment
#### bool ChangeToParallelProjection(bool symmetricFrustum)
- (summary) 
     Use this function to change projections of valid viewports
     from parallel to perspective.  It will make common additional
     adjustments to the frustum and camera location so the resulting
     views are similar.  The camera direction and target point are
     not be changed.
     If the current projection is parallel and symmetricFrustum,
     FrustumIsLeftRightSymmetric() and FrustumIsTopBottomSymmetric()
     are all equal, then no changes are made and True is returned.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ChangeToPerspectiveProjection(double targetDistance,bool symmetricFrustum,double lensLength)
- (summary) 
     Use this function to change projections of valid viewports
     from parallel to perspective.  It will make common additional
     adjustments to the frustum and camera location so the resulting
     views are similar.  The camera direction and target point are
     not changed.
     If the current projection is perspective and symmetricFrustum,
     IsFrustumIsLeftRightSymmetric, and IsFrustumIsTopBottomSymmetric
     are all equal, then no changes are made and True is returned.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ChangeToSymmetricFrustum(bool isLeftRightSymmetric,bool isTopBottomSymmetric,double targetDistance)
- (summary) 
     If needed, adjusts the current frustum so it has the 
     specified symmetries and adjust the camera location
     so the target plane remains visible.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ChangeToTwoPointPerspectiveProjection(double targetDistance,Vector3d up,double lensLength)
- (summary) 
     Changes projections of valid viewports
     to a two point perspective.  It will make common additional
     adjustments to the frustum and camera location and direction
     so the resulting views are similar.
     If the current projection is perspective and
     IsFrustumIsLeftRightSymmetric is True and
     IsFrustumIsTopBottomSymmetric is false, then no changes are
     made and True is returned.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool DollyCamera(Vector3d dollyVector)
- (summary) 
     DollyCamera() does not update the frustum's clipping planes.
     To update the frustum's clipping planes call DollyFrustum(d)
     with d = dollyVector o cameraFrameZ.  To convert screen locations
     into a dolly vector, use GetDollyCameraVector().
     Does not update frustum.  To update frustum use DollyFrustum(d) with d = dollyVector o cameraFrameZ.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool DollyExtents(BoundingBox cameraCoordinateBoundingBox,double border)
- (summary) 
     Dolly the camera location and so that the view frustum contains
     all of the document objects that can be seen in view.
     If the projection is perspective, the camera angle is not changed.
     
- (since) 5.6
- (returns) bool This is some return comment
#### bool DollyExtents(IEnumerable<GeometryBase> geometry,double border)
- (summary) 
     Dolly the camera location and so that the view frustum contains
     all of the document objects that can be seen in view.
     If the projection is perspective, the camera angle is not changed.
     
- (since) 5.6
- (returns) bool This is some return comment
#### bool DollyFrustum(double dollyDistance)
- (summary) 
     Moves the frustum clipping planes.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Extents(double halfViewAngleRadians,BoundingBox bbox)
- (summary) 
     Extends this viewport view to include a bounding box.
     Use Extents() as a quick way to set a viewport to so that bounding
     volume is inside of a viewports frustrum.
     The view angle is used to determine the position of the camera.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Extents(double halfViewAngleRadians,Sphere sphere)
- (summary) 
     Extends this viewport view to include a sphere.
     Use Extents() as a quick way to set a viewport to so that bounding
     volume is inside of a viewports frustrum.
     The view angle is used to determine the position of the camera.
- (since) 5.0
- (returns) bool This is some return comment
#### Point3d FrustumCenterPoint(double targetDistance)
- (summary) 
     Return a point on the central axis of the view frustum.
     This point is a good choice for a general purpose target point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool GetBoundingBoxDepth(BoundingBox bbox,double nearDistance,double farDistance)
- (summary) 
     Gets near and far clipping distances of a bounding box.
     This function ignores the current value of the viewport's 
     near and far settings. If the viewport is a perspective
     projection, the it intersects the semi infinite frustum
     volume with the bounding box and returns the near and far
     distances of the intersection.  If the viewport is a parallel
     projection, it instersects the infinte view region with the
     bounding box and returns the near and far distances of the
     projection.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool GetCameraAngles(double halfDiagonalAngleRadians,double halfVerticalAngleRadians,double halfHorizontalAngleRadians)
- (summary) 
     Gets the field of view angles.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool GetCameraFrame(Point3d location,Vector3d cameraX,Vector3d cameraY,Vector3d cameraZ)
- (summary) 
     Gets location and vectors of this camera.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Vector3d GetDollyCameraVector(int screenX0,int screenY0,int screenX1,int screenY1,double projectionPlaneDistance)
- (summary) 
     Gets a world coordinate dolly vector that can be passed to DollyCamera().
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Vector3d GetDollyCameraVector(Point screen0,Point screen1,double projectionPlaneDistance)
- (summary) 
     Gets a world coordinate dolly vector that can be passed to DollyCamera().
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Point3d[] GetFarPlaneCorners()
- (summary) 
     Gets the corners of far clipping plane rectangle.
     4 points are returned in the order of bottom left, bottom right,
     top left, top right.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### bool GetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
- (summary) 
     Gets the view frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Line GetFrustumLine(double screenX,double screenY)
- (summary) 
     Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
     
- (since) 5.1
- (returns) Line This is some return comment
#### Line GetFrustumLine(Point screenPoint)
- (summary) 
     Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
     
- (since) 5.1
- (returns) Line This is some return comment
#### Line GetFrustumLine(PointF screenPoint)
- (summary) 
     Gets the world coordinate line in the view frustum
     that projects to a point on the screen.
     
- (since) 5.1
- (returns) Line This is some return comment
#### Point3d[] GetNearPlaneCorners()
- (summary) 
     Gets the corners of near clipping plane rectangle.
     4 points are returned in the order of bottom left, bottom right,
     top left, top right.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### bool GetPointDepth(Point3d point,double distance)
- (summary) 
     Gets the clipping distance of a point. This function ignores the
     current value of the viewport's near and far settings. If
     the viewport is a perspective projection, then it intersects
     the semi infinite frustum volume with the bounding box and
     returns the near and far distances of the intersection.
     If the viewport is a parallel projection, it instersects the
     infinte view region with the bounding box and returns the
     near and far distances of the projection.
     
- (since) 5.0
- (returns) bool This is some return comment
#### System.Drawing.Rectangle GetScreenPort()
- (summary) 
     Gets the location of viewport in pixels.
     See documentation for SetScreenPort.
     
- (since) 5.0
- (returns) System.Drawing.Rectangle This is some return comment
#### System.Drawing.Rectangle GetScreenPort(int near,int far)
- (summary) 
     Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
- (since) 5.0
- (returns) System.Drawing.Rectangle This is some return comment
#### void GetScreenPortLocation(int left,int top,int right,int bottom)
- (summary) 
     Get the location of viewport in pixels (non System.Drawing version of GetScreenPort)
     
- (since) 6.0
- (returns) void This is some return comment
#### bool GetSphereDepth(Sphere sphere,double nearDistance,double farDistance)
- (summary) 
     Gets near and far clipping distances of a bounding sphere.
     
- (since) 5.0
- (returns) bool This is some return comment
#### double GetWorldToScreenScale(Point3d pointInFrustum)
- (summary) 
     Gets the scale factor from point in frustum to screen scale.
     
- (since) 5.1
- (returns) double This is some return comment
#### Transform GetXform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)
- (summary) 
     Computes a transform from a coordinate system to another.
     
- (since) 5.0
- (returns) Transform This is some return comment
#### bool RotateCamera(double rotationAngleRadians,Vector3d rotationAxis,Point3d rotationCenter)
- (summary) 
     Rotates the view camera.
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool SetCameraDirection(Vector3d direction)
- (summary) 
     Sets the direction that the camera faces.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetCameraLocation(Point3d location)
- (summary) 
     Sets the camera location (position) point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetCameraUp(Vector3d up)
- (summary) 
     Sets the camera up vector.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetFrustum(double left,double right,double bottom,double top,double nearDistance,double farDistance)
- (summary) 
     Sets the view frustum. If FrustumSymmetryIsLocked() is true
     and left != -right or bottom != -top, then they will be
     adjusted so the resulting frustum is symmetric.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetFrustumNearFar(BoundingBox boundingBox)
- (summary) 
     Sets the frustum near and far using a bounding box.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetFrustumNearFar(double nearDistance,double farDistance)
- (summary) 
     Sets the frustum near and far distances using two values.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetFrustumNearFar(double nearDistance,double farDistance,double minNearDistance,double minNearOverFar,double targetDistance)
- (summary) 
     Sets near and far clipping distance subject to constraints.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetFrustumNearFar(Point3d center,double radius)
- (summary) 
     Sets the frustum near and far using a center point and radius.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetScreenPort(int left,int right,int bottom,int top,int near,int far)
- (summary) 
     Location of viewport in pixels.
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
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetScreenPort(Rectangle windowRectangle)
- (summary) 
     Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetScreenPort(Rectangle windowRectangle,int near,int far)
- (summary) 
     Gets the location of viewport in pixels.
     See value meanings in SetScreenPort.
- (since) 5.0
- (returns) bool This is some return comment
#### double TargetDistance(bool useFrustumCenterFallback)
- (summary) 
     Gets the distance from the target point to the camera plane.
     Note that if the frustum is not symmetric, then this distance
     is shorter than the distance from the target to the camera location.
     
- (since) 5.0
- (returns) double This is some return comment
#### bool TransformCamera(Transform xform)
- (summary) 
     Transforms the view camera location, direction, and up.
     
- (since) 7.0
- (returns) bool This is some return comment
#### void UnlockCamera()
- (summary) 
     Unlocks the camera vectors and location.
     
- (since) 5.0
- (returns) void This is some return comment
#### void UnlockFrustumSymmetry()
- (summary) 
     Unlocks frustum horizontal and vertical symmetries.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool ZoomToScreenRect(int left,int top,int right,int bottom)
- (summary) 
     Zooms to a screen zone.
     View changing from screen input points. Handy for
     using a mouse to manipulate a view.
     ZoomToScreenRect() may change camera and frustum settings.
- (since) 5.0
- (returns) bool This is some return comment
#### bool ZoomToScreenRect(Rectangle windowRectangle)
- (summary) 
     Zooms to a screen zone.
     View changing from screen input points. Handy for
     using a mouse to manipulate a view.
     ZoomToScreenRect() may change camera and frustum settings.
- (since) 5.0
- (returns) bool This is some return comment
