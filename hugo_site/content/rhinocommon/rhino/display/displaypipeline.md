---
title: "DisplayPipeline"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

The display pipeline calls events during specific phases of drawing
   During the drawing of a single frame the events are called in the following order.
   
   [Begin Drawing of a Frame]
   CalculateBoundingBoxCalculateClippingPanesSetupFrustumSetupLightingInitializeFrameBufferDrawBackgroundIf this is a layout and detail objects exist the channels are called in the
     same order for each detail object (drawn as a nested viewport)PreDrawObjectsFor Each Visible Non Highlighted ObjectSetupObjectDisplayAttributesPreDrawObjectDrawObjectPostDrawObjectPostDrawObjects - depth writing/testing onDrawForeGround - depth writing/testing offFor Each Visible Highlighted ObjectSetupObjectDisplayAttributesPreDrawObjectDrawObjectPostDrawObjectPostProcessFrameBuffer (If a delegate exists that requires this)DrawOverlay (if Rhino is in a feedback mode)
   [End of Drawing of a Frame]
  
   NOTE: There may be multiple DrawObject calls for a single object. An example of when this could
         happen would be with a shaded sphere. The shaded mesh is first drawn and these channels would
         be processed; then at a later time the isocurves for the sphere would be drawn.
```cs
public class DisplayPipeline
```
## Events

static CalculateBoundingBox
: 

static CalculateBoundingBoxZoomExtents
: Calculate a bounding to include in the Zoom Extents command.

static DisplayModeChanged
: 
: since 6.18

static DrawForeground
: Called after all non-highlighted objects have been drawn and PostDrawObjects has been called.
     Depth writing and testing are turned OFF. If you want to draw with depth writing/testing,
     see PostDrawObjects.

static DrawOverlay
: If Rhino is in a feedback mode, the draw overlay call allows for temporary geometry to be drawn on top of
     everything in the scene. This is similar to the dynamic draw routine that occurs with custom get point.

static InitFrameBuffer
: 
: since 6.18

static ObjectCulling
: 
: since 5.3

static PostDrawObjects
: Called after all non-highlighted objects have been drawn. Depth writing and testing are
     still turned on. If you want to draw without depth writing/testing, see DrawForeground.

static PreDrawObject
: Called right before an individual object is being drawn. NOTE: Do not use this event
     unless you absolutely need to.  It is called for every object in the document and can
     slow disply down if a large number of objects exist in the document

static PreDrawObjects
: Called before objects are been drawn. Depth writing and testing are on.

static PreDrawTransparentObjects
: Called before transparent objects have been drawn. Depth writing and testing are on.
: since 6.12

static ViewportProjectionChanged
: Called when the projection changes for a viewport being drawn.
: since 6.18
## Properties

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) ActiveObject
: 
: since 6.7

int ActiveObjectNestingLevel
: 
: since 6.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] ActiveObjectNestingStack
: 
: since 6.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) ActiveTopLevelObject
: 
: since 6.7

int DefaultCurveThickness
: Gets the curve thickness as defined by the current display mode. 
     Note: this only applies to curve objects, Brep and Mesh wires may have different settings.

[DepthMode](/rhinocommon/rhino/display/depthmode/) DepthMode
: 

[DisplayPipelineAttributes](/rhinocommon/rhino/display/displaypipelineattributes/) DisplayPipelineAttributes
: 
: since 5.3

float DpiScale
: Scale factor used for high resolution displays. When a monitor that this
     pipeline is drawing to is at a DPI of 96, this value is one. On high
     DPI monitors, this value will commonly be greater than one.
: since 6.0

bool DrawingGrips
: Gets a value that indicates whether the pipeline is currently in a grip drawing operation.

bool DrawingSurfaces
: Gets a value that indicates whether the pipeline is currently in a surface
     drawing operation.  Surface drawing means draw the shaded triangles of a mesh
     representing the surface (mesh, extrusion, or brep).  This is useful when
     inside of a draw event or display conduit to check and see if the geometry is
     about to be drawn as a shaded set of triangles representing the geometry.
     See DrawingWires to check and see if the wireframe representation of the
     geometry is going to be drawn.

bool DrawingWires
: Gets a value that indicates whether the pipeline is currently in a curve
     drawing operation. This is useful when inside of a draw event or display
     conduit to check and see if the geometry is about to be drawn is going to
     be drawing the wire representation of the geometry (mesh, extrusion, or
     brep).  See DrawingSurfaces to check and see if the shaded mesh representation
     of the geometry is going to be drawn.

Bitmap FrameBuffer
: Gets the contents of the framebuffer that this pipeline is drawing to.
: since 6.0

Size FrameSize
: Gets the size of the framebuffer that this pipeline is drawing to.

bool IsDynamicDisplay
: Gets a value that indicates whether the viewport is in Dynamic Display state. 
     Dynamic display is the state a viewport is in when it is rapidly redrawing because of
     an operation like panning or rotating. The pipeline will drop some level of detail
     while inside a dynamic display state to keep the frame rate as high as possible.

bool IsInViewCapture
: Gets a value that indicates whether this pipeline is currently drawing
     for ViewCaptureToFile or ViewCaptureToClipboard
: since 6.0

bool IsOpen
: Is True of the pipeline is open, False otherwise.
: since 7.0

bool IsOpenGL
: Gets a value indicating whether or not this pipeline is drawing into an OpenGL context.

bool IsPrinting
: Gets a value that indicates whether this pipeline 
     is currently drawing for printing purposes.

bool IsStereoMode
: Gets a value that indicates whether this pipeline is currently using an 
     engine that is performing stereo style drawing. Stereo drawing is for 
     providing an "enhanced 3-D" effect through stereo viewing devices.

[Transform](/rhinocommon/rhino/geometry/transform/) ModelTransform
: Gets or sets the current model transformation that is applied to vertices when drawing.

bool ModelTransformIsIdentity
: Gets a value that indicates whether the Model Transform is an Identity transformation.

int NestLevel
: Gets the current nested viewport drawing level. 
     This is used to know if you are currently inside the drawing of a nested viewport (detail object in Rhino). 
     Nest level = 0 Drawing is occuring in a standard Rhino viewport or on the page viewport.Nest level = 1 Drawing is occuring inside a detail view object.

int RenderPass
: Gets the current pass that the pipeline is in for drawing a frame. 
     Typically drawing a frame requires a single pass through the DrawFrameBuffer 
     function, but some special display effects can be achieved through 
     drawing with multiple passes.

bool ShadingRequired
: Gets or sets the "ShadingRequired" flag. This flag gets set inside the pipeline when a request is 
     made to draw a shaded mesh but the current render engine doesn't support shaded 
     mesh drawing...at this point the redraw mechanism will make sure everything will 
     work the next time around.

int StereoProjection
: Gets the current stereo projection if stereo mode is on.
     0 = left1 = right
     If stereo mode is not enables, this property always returns 0.

bool SupportsShading
: Gets whether or not this pipeline supports shaded meshes.

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) Viewport
: 

[ZBiasMode](/rhinocommon/rhino/display/zbiasmode/) ZBiasMode
: 
## Methods

static uint AvailableOpenGLVersion(bool coreProfile)
: If Rhino is using OpenGL for display, this function will return
     major.minor version of OpenGL available for this instance of Rhino
: Returns - major version * 10 + minor version
     For example, OpenGL 4.5 returns 45
: since 6.21

static string CrossCompileHLSL(string hlsl,string functionName,ShaderLanguage targetLanguage)
: Convert HLSL code to a different shading language
: since 7.0

static bool CullControlPolygon()
: Returns a value indicating if only points on the side of the surface that
     face the camera are displayed.
: Returns - True if backfaces of surface and mesh control polygons are culled.
     This value is determined by the _CullControlPolygon command.

static System.Drawing.Bitmap DrawToBitmap(RhinoViewport viewport,int width,int height)
: Draw a given viewport to an off-screen bitmap.
: Returns - A bitmap containing the given view, or None on error.

static void GetDrawListSerialNumbers(uint modelSerialNumber,uint pageSerialNumber)
: Gets the current model and page view draw list serial numbers, which can
     be used to determine if a model or page view needs to be redrawn.
: since 7.0

static bool MakeDefaultOpenGLContextCurrent()
: Make a "default" OpenGL context current
: since 7.0

int AddClippingPlane(Point3d point,Vector3d normal)
: Add a clipping plane to be used during the drawing of this frame
: Returns - index for the added clipping plane
: since 6.3

DisplayPipeline Clone(RhinoViewport viewport)
: Clones the pipeline. Creates an identical copy of "this" pipeline.
     Copies all conduits from "this" pipeline to the new pipeline.
: Returns - The newly cloned pipeline if successful, None otherwise.
     or failed to close.
: since 7.0

bool Close()
: Closes the pipeline.
: Returns - True if the pipeline was closed, False if it was already closed
     or failed to close.
: since 7.0

void Draw2dLine(Point from,Point to,Color color,float thickness)
: 
: since 6.0

void Draw2dLine(PointF from,PointF to,Color color,float thickness)
: 
: since 6.0

void Draw2dRectangle(Rectangle rectangle,Color strokeColor,int thickness,Color fillColor)
: 
: since 5.10

void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified)
: Draws 2D text on the viewport.

void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified,int height)
: Draws 2D text on the viewport.

void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified,int height,string fontface)
: Draws 2D text on the viewport.

void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified)
: Draws 2D text on the viewport.

void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified,int height)
: Draws 2D text on the viewport.

void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified,int height,string fontface)
: Draws 2D text on the viewport.

void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface)
: 

void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface,bool bold,bool italic)
: 
: since 6.0

void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface,bool bold,bool italic,TextHorizontalAlignment horizontalAlignment,TextVerticalAlignment verticalAlignment)
: 
: since 6.4

void Draw3dText(Text3d text,Color color)
: 

void Draw3dText(Text3d text,Color color,Plane textPlane)
: Draws 3d text with a different plane than what is defined in the Text3d class.

void Draw3dText(Text3d text,Color color,Point3d textPlaneOrigin)
: Draws 3d text using the Text3d plane with an adjusted origin.

void DrawActivePoint(Point3d point)
: Draws a point in style used during "GetPoint" operations
: since 6.0

void DrawAnnotation(AnnotationBase annotation,Color color)
: 
: since 6.0

void DrawAnnotationArrowhead(Arrowhead arrowhead,Transform xform,Color color)
: 
: since 6.0

void DrawArc(Arc arc,Color color)
: Draw a single arc object.

void DrawArc(Arc arc,Color color,int thickness)
: Draw a single arc object.

void DrawArrow(Line line,Color color)
: Draws a single arrow object. An arrow consists of a Shaft and an Arrow head at the end of the shaft.

void DrawArrow(Line line,Color color,double screenSize,double relativeSize)
: Draws a single arrow object. 
     An arrow consists of a Shaft and an Arrow head at the end of the shaft.

void DrawArrowHead(Point3d tip,Vector3d direction,Color color,double screenSize,double worldSize)
: Draws a single arrow head.

void DrawArrows(IEnumerable<Line> lines,Color color)
: Draws a collection of arrow objects. An arrow consists of a Shaft and an Arrow head at the end of the shaft.

void DrawArrows(Line[] lines,Color color)
: Draws a collection of arrow objects. An arrow consists of a Shaft and an Arrow head at the end of the shaft.

void DrawBitmap(DisplayBitmap bitmap,int left,int top)
: Draws a bitmap in screen coordinates
: since 5.10

void DrawBox(BoundingBox box,Color color)
: Draws the edges of a BoundingBox.

void DrawBox(BoundingBox box,Color color,int thickness)
: Draws the edges of a BoundingBox.

void DrawBox(Box box,Color color)
: Draws the edges of a Box object.

void DrawBox(Box box,Color color,int thickness)
: Draws the edges of a Box object.

void DrawBoxCorners(BoundingBox box,Color color)
: Draws corner widgets of a world aligned boundingbox. 
     Widget size will be 5% of the Box diagonal.

void DrawBoxCorners(BoundingBox box,Color color,double size)
: Draws corner widgets of a world aligned boundingbox.

void DrawBoxCorners(BoundingBox box,Color color,double size,int thickness)
: Draws corner widgets of a world aligned boundingbox.

void DrawBrepShaded(Brep brep,DisplayMaterial material)
: Draws a shaded mesh representation of a brep.

void DrawBrepWires(Brep brep,Color color)
: Draws all the wireframe curves of a brep object.

void DrawBrepWires(Brep brep,Color color,int wireDensity)
: Draws all the wireframe curves of a brep object.

void DrawCircle(Circle circle,Color color)
: Draw a single circle object.

void DrawCircle(Circle circle,Color color,int thickness)
: Draw a single circle object.

void DrawCone(Cone cone,Color color)
: Draw a wireframe cone.

void DrawCone(Cone cone,Color color,int thickness)
: Draw a wireframe cone.

void DrawConstructionPlane(ConstructionPlane constructionPlane)
: 

void DrawCurvatureGraph(Curve curve,Color color)
: Draw a typical Rhino Curvature Graph.

void DrawCurvatureGraph(Curve curve,Color color,int hairScale)
: Draw a typical Rhino Curvature Graph.

void DrawCurvatureGraph(Curve curve,Color color,int hairScale,int hairDensity,int sampleDensity)
: Draw a typical Rhino Curvature Graph.

void DrawCurve(Curve curve,Color color)
: Draw a single Curve object.

void DrawCurve(Curve curve,Color color,int thickness)
: Draw a single Curve object.

void DrawCylinder(Cylinder cylinder,Color color)
: Draw a wireframe cylinder.

void DrawCylinder(Cylinder cylinder,Color color,int thickness)
: Draw a wireframe cylinder.

void DrawDirectionArrow(Point3d location,Vector3d direction,Color color)
: 

void DrawDot(float screenX,float screenY,string text)
: Draws a text dot in screen coordinates.
: since 6.0

void DrawDot(float screenX,float screenY,string text,Color dotColor,Color textColor)
: Draws a text dot in screen coordinates.
: since 6.0

void DrawDot(Point3d worldPosition,string text)
: Draws a text dot in world coordinates.

void DrawDot(Point3d worldPosition,string text,Color dotColor,Color textColor)
: Draw a text dot in world coordinates.

void DrawDot(TextDot dot,Color fillColor,Color textColor,Color borderColor)
: Draw a text dot as defined by the text dot class
: since 6.0

void DrawDottedLine(Line line,Color color)
: Draws a single dotted line.

void DrawDottedLine(Point3d from,Point3d to,Color color)
: Draws a single dotted line.

void DrawDottedPolyline(IEnumerable<Point3d> points,Color color,bool close)
: Draws a set of connected lines (polyline) in a dotted pattern (0x00001111).

void DrawExtrusionWires(Extrusion extrusion,Color color)
: Draws all the wireframe curves of an extrusion object.
: since 6.0

void DrawExtrusionWires(Extrusion extrusion,Color color,int wireDensity)
: Draws all the wireframe curves of an extrusion object.
: since 6.0

void DrawGradientHatch(Hatch hatch,Color color1,Color color2,Point3d point1,Point3d point2,bool linearGradient,float boundaryThickness,Color boundaryColor)
: Draw a two point gradient filled hatch
: since 7.0

void DrawGradientHatch(Hatch hatch,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat,float boundaryThickness,Color boundaryColor)
: 
: since 7.0

void DrawGradientLines(IEnumerable<Line> lines,float strokeWidth,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat)
: 
: since 7.0

void DrawGradientMesh(Mesh mesh,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat)
: 
: since 7.0

void DrawHatch(Hatch hatch,Color hatchColor,Color boundaryColor)
: 
: since 6.0

void DrawLine(Line line,Color color)
: Draws a single line object.

void DrawLine(Line line,Color color,int thickness)
: Draws a single line object.

void DrawLine(Point3d from,Point3d to,Color color)
: Draws a single line object.

void DrawLine(Point3d from,Point3d to,Color color,int thickness)
: Draws a single line object.

void DrawLineArrow(Line line,Color color,int thickness,double size)
: Draws an arrow made up of three line segments.

void DrawLines(IEnumerable<Line> lines,Color color)
: Draws a set of lines with a given color and thickness. If you want the fastest possible set of lines
     to be drawn, pass a Line[] for lines.

void DrawLines(IEnumerable<Line> lines,Color color,int thickness)
: Draws a set of lines with a given color and thickness. If you want the fastest possible set of lines
     to be drawn, pass a Line[] for lines.

void DrawMarker(Point3d tip,Vector3d direction,Color color)
: Draws an arrow marker as a view-aligned widget.

void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness)
: Draws an arrow marker as a view-aligned widget.

void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness,double size)
: Draws an arrow marker as a view-aligned widget.

void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness,double size,double rotation)
: Draws an arrow marker as a view-aligned widget.

void DrawMeshFalseColors(Mesh mesh)
: Draws the mesh faces as False color patches. 
     The mesh must have Vertex Colors defined for this to work.

void DrawMeshShaded(Mesh mesh,DisplayMaterial material)
: Draws the shaded faces of a given mesh.

void DrawMeshShaded(Mesh mesh,DisplayMaterial material,int[] faceIndices)
: Draws the shaded faces of a given mesh.

void DrawMeshVertices(Mesh mesh,Color color)
: Draws all the vertices in a given mesh.

void DrawMeshWires(Mesh mesh,Color color)
: Draws all the wires in a given mesh.

void DrawMeshWires(Mesh mesh,Color color,int thickness)
: Draws all the wires in a given mesh.

void DrawObject(RhinoObject rhinoObject)
: 

void DrawObject(RhinoObject rhinoObject,Transform xform)
: Draws a RhinoObject with an applied transformation.

void DrawParticles(ParticleSystem particles)
: 

void DrawParticles(ParticleSystem particles,DisplayBitmap bitmap)
: 

void DrawParticles(ParticleSystem particles,DisplayBitmap[] bitmaps)
: 

void DrawPatternedLine(Line line,Color color,int pattern,int thickness)
: Draws a single line with specified pattern.
: since 6.0

void DrawPatternedLine(Point3d from,Point3d to,Color color,int pattern,int thickness)
: Draws a single line with specified pattern.
: since 6.0

void DrawPatternedPolyline(IEnumerable<Point3d> points,Color color,int pattern,int thickness,bool close)
: Draws a set of connected lines (polyline) with specified pattern.
: since 6.0

void DrawPoint(Point3d point)
: Draws a point using the current display attribute size, style and color
: since 6.0

void DrawPoint(Point3d point,Color color)
: Draws a point with a given radius, style and color.

void DrawPoint(Point3d point,PointStyle style,Color strokeColor,Color fillColor,float radius,float strokeWidth,float secondarySize,float rotationRadians,bool diameterIsInPixels,bool autoScaleForDpi)
: 
: since 6.0

void DrawPoint(Point3d point,PointStyle style,float radius,Color color)
: Draws a point with a given radius, style and color.
: since 6.0

void DrawPoint(Point3d point,PointStyle style,int radius,Color color)
: Draws a point with a given radius, style and color.

void DrawPointCloud(PointCloud cloud,float size)
: Draws a point cloud.
: since 6.0

void DrawPointCloud(PointCloud cloud,float size,Color color)
: Draws a point cloud.
: since 6.0

void DrawPointCloud(PointCloud cloud,int size)
: Draws a point cloud.

void DrawPointCloud(PointCloud cloud,int size,Color color)
: Draws a point cloud.

void DrawPoints(IEnumerable<Point3d> points,PointStyle style,Color strokeColor,Color fillColor,float radius,float strokeWidth,float secondarySize,float rotationRadians,bool diameterIsInPixels,bool autoScaleForDpi)
: 
: since 6.0

void DrawPoints(IEnumerable<Point3d> points,PointStyle style,float radius,Color color)
: Draw a set of points with a given radius, style and color.
: since 6.0

void DrawPoints(IEnumerable<Point3d> points,PointStyle style,int radius,Color color)
: Draw a set of points with a given radius, style and color.

void DrawPolygon(IEnumerable<Point3d> points,Color color,bool filled)
: Draws a filled, convex polygon from a collection of points.

void DrawPolyline(IEnumerable<Point3d> polyline,Color color)
: Draws a single Polyline object.

void DrawPolyline(IEnumerable<Point3d> polyline,Color color,int thickness)
: Draws a single Polyline object.

void DrawRoundedRectangle(PointF center,float pixelWidth,float pixelHeight,float cornerRadius,Color strokeColor,float strokeWidth,Color fillColor)
: 
: since 6.0

void DrawSphere(Sphere sphere,Color color)
: Draw a wireframe sphere.

void DrawSphere(Sphere sphere,Color color,int thickness)
: Draw a wireframe sphere.

void DrawSprite(DisplayBitmap bitmap,Point2d screenLocation,float size)
: 

void DrawSprite(DisplayBitmap bitmap,Point2d screenLocation,float size,Color blendColor)
: 

void DrawSprite(DisplayBitmap bitmap,Point3d worldLocation,float size,bool sizeInWorldSpace)
: 

void DrawSprite(DisplayBitmap bitmap,Point3d worldLocation,float size,Color blendColor,bool sizeInWorldSpace)
: 

void DrawSprites(DisplayBitmap bitmap,DisplayBitmapDrawList items,float size,bool sizeInWorldSpace)
: 

void DrawSprites(DisplayBitmap bitmap,DisplayBitmapDrawList items,float size,Vector3d translation,bool sizeInWorldSpace)
: 

bool DrawStereoFrameBuffer(ViewportInfo viewportLeft,ViewportInfo viewportRight,uint handleLeft,uint handleRight)
: Draws the viewport as seen from the left and the right eye viewports
     and returns the result as OpenGL texture handles.
: Returns - True if drawing succedded, False otherwise.
: since 6.8

void DrawSubDShaded(SubD subd,DisplayMaterial material)
: Draw a shaded mesh representation of a SubD
: since 7.0

void DrawSubDWires(SubD subd,Color color,float thickness)
: Draws all the wireframe curves of a SubD object
: since 7.0

void DrawSurface(Surface surface,Color wireColor,int wireDensity)
: Draw wireframe display for a single surface.

void DrawText(TextEntity text,Color color)
: 
: since 6.0

void DrawText(TextEntity text,Color color,double scale)
: 
: since 6.0

void DrawText(TextEntity text,Color color,Transform xform)
: 
: since 6.0

void DrawTorus(Torus torus,Color color)
: Draw a wireframe torus.

void DrawTorus(Torus torus,Color color,int thickness)
: Draw a wireframe torus.

void DrawZebraPreview(Brep brep,Color color)
: Draws a shaded Brep with Zebra stripe preview.
: since 6.16

void EnableClippingPlanes(bool enable)
: Enable or disable the Clipping Plane logic of the engine.

void EnableColorWriting(bool enable)
: Enable or disable the ColorWriting behaviour of the engine.

void EnableDepthTesting(bool enable)
: Enable or disable the DepthTesting behaviour of the engine. 
     When DepthTesting is disabled, objects in front will no 
     longer occlude objects behind them.

void EnableDepthWriting(bool enable)
: Enable or disable the DepthWriting behaviour of the engine. 
     When DepthWriting is disabled, drawn geometry does not affect the Z-Buffer.

void EnableLighting(bool enable)
: Enable or disable the Lighting logic of the engine.

[Light](/rhinocommon/rhino/geometry/light/)[] GetLights()
: Get lights that this pipeline is current using
: since 6.3

float[] GetOpenGLCameraToClip()
: Get an array of 16 floats that represents the "camera" to "clip" coordinate
     transformation in OpenGL's right handed coordinate system
: since 6.0

float[] GetOpenGLWorldToCamera(bool includeModelTransform)
: Get an array of 16 floats that represents the "world" to "camera" coordinate
     transformation in OpenGL's right handed coordinate system
: since 6.0

float[] GetOpenGLWorldToClip(bool includeModelTransform)
: Get an array of 16 floats that represents the "world" to "clip" coordinate
     transformation in OpenGL's right handed coordinate system
: since 6.0

bool InterruptDrawing()
: Tests to see if the pipeline should stop drawing more geometry and just show what it has so far. 
     If a drawing operation is taking a long time, this function will return True and tell Rhino it should just 
     finish up and show the frame buffer. This is used in dynamic drawing operations.
: Returns - True if the pipeline should stop attempting to draw more geometry and just show the frame buffer.

bool IsActive(RhinoObject rhinoObject)
: Determines if an object can be visible in this viewport based on it's object type and display attributes. 
     This test does not check for visibility based on location of the object. 
     NOTE: Use CRhinoDisplayPipeline::IsVisible() to perform "visibility" 
           tests based on location (is some part of the object in the view frustum). 
           Use CRhinoDisplayPipeline::IsActive() to perform "visibility" 
           tests based on object type.
: Returns - True if this object can be drawn in the pipeline's viewport based on it's object type and display attributes.

bool IsVisible(BoundingBox bbox)
: Test a given box for visibility inside the view frustum under the current 
     viewport and model transformation settings.
: Returns - True if at least some portion of the box is visible, False if not.

bool IsVisible(Point3d worldCoordinate)
: Test a given 3d world coordinate point for visibility inside the view 
     frustum under the current viewport and model transformation settings.
: Returns - True if the point is visible, False if it is not.

bool IsVisible(RhinoObject rhinoObject)
: Test a given object for visibility inside the view frustum under the current viewport and model 
     transformation settings. This function calls a virtual IsVisibleFinal function that 
     subclassed pipelines can add extra tests to. In the base class, this test only tests 
     visibility based on the objects world coordinates location and does not pay attention 
     to the object's attributes.
     
     NOTE: Use CRhinoDisplayPipeline::IsVisible() to perform "visibility" 
           tests based on location (is some part of the object in the view frustum). 
           Use CRhinoDisplayPipeline::IsActive() to perform "visibility" 
           tests based on object type.
: Returns - True if the object is visible, False if not.

System.Drawing.Rectangle Measure2dText(string text,Point2d definitionPoint,bool middleJustified,double rotationRadians,int height,string fontFace)
: Determines screen rectangle that would be drawn to using the Draw2dText(..) function
     with the same parameters.
: Returns - rectangle in the viewport's screen coordinates on success.
: since 5.10

bool Open()
: Opens the pipeline.
: Returns - True if the pipeline was opened, False if it was already open
     or failed to open.
: since 7.0

void PopClipTesting()
: Pop a ClipTesting flag off the engine's stack.

void PopCullFaceMode()
: Pop a FaceCull flag off the engine's stack.

void PopDepthTesting()
: Pop a DepthTesting flag off the engine's stack.

void PopDepthWriting()
: Pop a DepthWriting flag off the engine's stack.

void PopModelTransform()
: Pop a model transformation off the engine's model transform stack.

void PushClipTesting(bool enable)
: Push a ClipTesting flag on the engine's stack.

void PushCullFaceMode(CullFaceMode mode)
: Push a FaceCull flag on the engine's stack.

void PushDepthTesting(bool enable)
: Push a DepthTesting flag on the engine's stack.

void PushDepthWriting(bool enable)
: Push a DepthWriting flag on the engine's stack.

void PushModelTransform(Transform xform)
: Push a model transformation on the engine's model transform stack.

void RemoveClippingPlane(int index)
: Remove a clipping plane from the pipeline for this frame
: since 6.3
