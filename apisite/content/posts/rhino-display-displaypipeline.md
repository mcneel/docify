---
title: "DisplayPipeline"
draft: false
---

*Namespace: Rhino.Display*

   The display pipeline calls events during specific phases of drawing
   During the drawing of a single frame the events are called in the following order.
   
   [Begin Drawing of a Frame]
   CalculateBoundingBoxCalculateClippingPanesSetupFrustumSetupLightingInitializeFrameBufferDrawBackgroundIf this is a layout and detail objects exist the channels are called in the
     same order for each detail object (drawn as a nested viewport)PreDrawObjectsFor Each Visible Non Highlighted ObjectSetupObjectDisplayAttributesPreDrawObjectDrawObjectPostDrawObjectPostDrawObjects - depth writing/testing onDrawForeGround - depth writing/testing offFor Each Visible Highlighted ObjectSetupObjectDisplayAttributesPreDrawObjectDrawObjectPostDrawObjectPostProcessFrameBuffer (If a delegate exists that requires this)DrawOverlay (if Rhino is in a feedback mode)
   [End of Drawing of a Frame]
  
   NOTE: There may be multiple DrawObject calls for a single object. An example of when this could
         happen would be with a shaded sphere. The shaded mesh is first drawn and these channels would
         be processed; then at a later time the isocurves for the sphere would be drawn.
## Events
#### static CalculateBoundingBox
- (summary) 
- (since) 5.0
#### static CalculateBoundingBoxZoomExtents
- (summary) 
     Calculate a bounding to include in the Zoom Extents command.
     
- (since) 5.0
#### static DisplayModeChanged
- (summary) 
- (since) 6.18
#### static DrawForeground
- (summary) 
     Called after all non-highlighted objects have been drawn and PostDrawObjects has been called.
     Depth writing and testing are turned OFF. If you want to draw with depth writing/testing,
     see PostDrawObjects.
     
- (since) 5.0
#### static DrawOverlay
- (summary) 
     If Rhino is in a feedback mode, the draw overlay call allows for temporary geometry to be drawn on top of
     everything in the scene. This is similar to the dynamic draw routine that occurs with custom get point.
     
- (since) 5.0
#### static InitFrameBuffer
- (summary) 
- (since) 6.18
#### static ObjectCulling
- (summary) 
- (since) 5.3
#### static PostDrawObjects
- (summary) 
     Called after all non-highlighted objects have been drawn. Depth writing and testing are
     still turned on. If you want to draw without depth writing/testing, see DrawForeground.
     
- (since) 5.0
#### static PreDrawObject
- (summary) 
     Called right before an individual object is being drawn. NOTE: Do not use this event
     unless you absolutely need to.  It is called for every object in the document and can
     slow disply down if a large number of objects exist in the document
     
- (since) 5.0
#### static PreDrawObjects
- (summary) 
     Called before objects are been drawn. Depth writing and testing are on.
     
- (since) 5.0
#### static PreDrawTransparentObjects
- (summary) 
     Called before transparent objects have been drawn. Depth writing and testing are on.
     
- (since) 6.12
#### static ViewportProjectionChanged
- (summary) 
     Called when the projection changes for a viewport being drawn.
     
- (since) 6.18
## Properties
#### DocObjects.RhinoObject ActiveObject
- (summary) 
- (since) 6.7
#### int ActiveObjectNestingLevel
- (summary) 
- (since) 6.7
#### DocObjects.RhinoObject[] ActiveObjectNestingStack
- (summary) 
- (since) 6.7
#### DocObjects.RhinoObject ActiveTopLevelObject
- (summary) 
- (since) 6.7
#### int DefaultCurveThickness
- (summary) 
     Gets the curve thickness as defined by the current display mode. 
     Note: this only applies to curve objects, Brep and Mesh wires may have different settings.
     
- (since) 5.0
#### DepthMode DepthMode
- (summary) 
- (since) 5.0
#### DisplayPipelineAttributes DisplayPipelineAttributes
- (summary) 
- (since) 5.3
#### float DpiScale
- (summary) 
     Scale factor used for high resolution displays. When a monitor that this
     pipeline is drawing to is at a DPI of 96, this value is one. On high
     DPI monitors, this value will commonly be greater than one.
     
- (since) 6.0
#### bool DrawingGrips
- (summary) 
     Gets a value that indicates whether the pipeline is currently in a grip drawing operation.
     
- (since) 5.0
#### bool DrawingSurfaces
- (summary) 
     Gets a value that indicates whether the pipeline is currently in a surface
     drawing operation.  Surface drawing means draw the shaded triangles of a mesh
     representing the surface (mesh, extrusion, or brep).  This is useful when
     inside of a draw event or display conduit to check and see if the geometry is
     about to be drawn as a shaded set of triangles representing the geometry.
     See DrawingWires to check and see if the wireframe representation of the
     geometry is going to be drawn.
     
- (since) 5.0
#### bool DrawingWires
- (summary) 
     Gets a value that indicates whether the pipeline is currently in a curve
     drawing operation. This is useful when inside of a draw event or display
     conduit to check and see if the geometry is about to be drawn is going to
     be drawing the wire representation of the geometry (mesh, extrusion, or
     brep).  See DrawingSurfaces to check and see if the shaded mesh representation
     of the geometry is going to be drawn.
     
- (since) 5.0
#### System.Drawing.Bitmap FrameBuffer
- (summary) 
     Gets the contents of the framebuffer that this pipeline is drawing to.
     
- (since) 6.0
#### System.Drawing.Size FrameSize
- (summary) 
     Gets the size of the framebuffer that this pipeline is drawing to.
     
- (since) 5.0
#### bool IsDynamicDisplay
- (summary) 
     Gets a value that indicates whether the viewport is in Dynamic Display state. 
     Dynamic display is the state a viewport is in when it is rapidly redrawing because of
     an operation like panning or rotating. The pipeline will drop some level of detail
     while inside a dynamic display state to keep the frame rate as high as possible.
     
- (since) 5.0
#### bool IsInViewCapture
- (summary) 
     Gets a value that indicates whether this pipeline is currently drawing
     for ViewCaptureToFile or ViewCaptureToClipboard
     
- (since) 6.0
#### bool IsOpen
- (summary) 
     Is True of the pipeline is open, False otherwise.
     
- (since) 7.0
#### bool IsOpenGL
- (summary) 
     Gets a value indicating whether or not this pipeline is drawing into an OpenGL context.
     
- (since) 5.0
#### bool IsPrinting
- (summary) 
     Gets a value that indicates whether this pipeline 
     is currently drawing for printing purposes.
     
- (since) 5.0
#### bool IsStereoMode
- (summary) 
     Gets a value that indicates whether this pipeline is currently using an 
     engine that is performing stereo style drawing. Stereo drawing is for 
     providing an "enhanced 3-D" effect through stereo viewing devices.
     
- (since) 5.0
#### Transform ModelTransform
- (summary) 
     Gets or sets the current model transformation that is applied to vertices when drawing.
     
- (since) 5.0
#### bool ModelTransformIsIdentity
- (summary) 
     Gets a value that indicates whether the Model Transform is an Identity transformation.
     
- (since) 5.0
#### int NestLevel
- (summary) 
     Gets the current nested viewport drawing level. 
     This is used to know if you are currently inside the drawing of a nested viewport (detail object in Rhino). 
     Nest level = 0 Drawing is occuring in a standard Rhino viewport or on the page viewport.Nest level = 1 Drawing is occuring inside a detail view object.
- (since) 5.0
#### int RenderPass
- (summary) 
     Gets the current pass that the pipeline is in for drawing a frame. 
     Typically drawing a frame requires a single pass through the DrawFrameBuffer 
     function, but some special display effects can be achieved through 
     drawing with multiple passes.
     
- (since) 5.0
#### bool ShadingRequired
- (summary) 
     Gets or sets the "ShadingRequired" flag. This flag gets set inside the pipeline when a request is 
     made to draw a shaded mesh but the current render engine doesn't support shaded 
     mesh drawing...at this point the redraw mechanism will make sure everything will 
     work the next time around.
     
- (since) 5.0
#### int StereoProjection
- (summary) 
     Gets the current stereo projection if stereo mode is on.
     0 = left1 = right
     If stereo mode is not enables, this property always returns 0.
     
- (since) 5.0
#### bool SupportsShading
- (summary) 
     Gets whether or not this pipeline supports shaded meshes.
     
- (since) 5.0
#### RhinoViewport Viewport
- (summary) 
- (since) 5.0
#### ZBiasMode ZBiasMode
- (summary) 
- (since) 5.0
## Methods
#### static uint AvailableOpenGLVersion(bool coreProfile)
- (summary) 
     If Rhino is using OpenGL for display, this function will return
     major.minor version of OpenGL available for this instance of Rhino
     
- (since) 6.21
- (returns) uint This is some return comment
#### static string CrossCompileHLSL(string hlsl,string functionName,ShaderLanguage targetLanguage)
- (summary) 
     Convert HLSL code to a different shading language
     
- (since) 7.0
- (returns) string This is some return comment
#### static bool CullControlPolygon()
- (summary) 
     Returns a value indicating if only points on the side of the surface that
     face the camera are displayed.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static System.Drawing.Bitmap DrawToBitmap(RhinoViewport viewport,int width,int height)
- (summary) 
     Draw a given viewport to an off-screen bitmap.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
#### static void GetDrawListSerialNumbers(uint modelSerialNumber,uint pageSerialNumber)
- (summary) 
     Gets the current model and page view draw list serial numbers, which can
     be used to determine if a model or page view needs to be redrawn.
     
- (since) 7.0
- (returns) void This is some return comment
#### static bool MakeDefaultOpenGLContextCurrent()
- (summary) 
     Make a "default" OpenGL context current
     
- (since) 7.0
- (returns) bool This is some return comment
#### int AddClippingPlane(Point3d point,Vector3d normal)
- (summary) 
     Add a clipping plane to be used during the drawing of this frame
     
- (since) 6.3
- (returns) int This is some return comment
#### DisplayPipeline Clone(RhinoViewport viewport)
- (summary) 
     Clones the pipeline. Creates an identical copy of "this" pipeline.
     Copies all conduits from "this" pipeline to the new pipeline.
     
- (since) 7.0
- (returns) DisplayPipeline This is some return comment
#### bool Close()
- (summary) 
     Closes the pipeline.
     
- (since) 7.0
- (returns) bool This is some return comment
#### void Draw2dLine(Point from,Point to,Color color,float thickness)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void Draw2dLine(PointF from,PointF to,Color color,float thickness)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void Draw2dRectangle(Rectangle rectangle,Color strokeColor,int thickness,Color fillColor)
- (summary) 
- (since) 5.10
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified,int height)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified,int height,string fontface)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified,int height)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw2dText(string text,Color color,Point3d worldCoordinate,bool middleJustified,int height,string fontface)
- (summary) 
     Draws 2D text on the viewport.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface,bool bold,bool italic)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void Draw3dText(string text,Color color,Plane textPlane,double height,string fontface,bool bold,bool italic,TextHorizontalAlignment horizontalAlignment,TextVerticalAlignment verticalAlignment)
- (summary) 
- (since) 6.4
- (returns) void This is some return comment
#### void Draw3dText(Text3d text,Color color)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void Draw3dText(Text3d text,Color color,Plane textPlane)
- (summary) 
     Draws 3d text with a different plane than what is defined in the Text3d class.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Draw3dText(Text3d text,Color color,Point3d textPlaneOrigin)
- (summary) 
     Draws 3d text using the Text3d plane with an adjusted origin.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawActivePoint(Point3d point)
- (summary) 
     Draws a point in style used during "GetPoint" operations
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawAnnotation(AnnotationBase annotation,Color color)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawAnnotationArrowhead(Arrowhead arrowhead,Transform xform,Color color)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawArc(Arc arc,Color color)
- (summary) 
     Draw a single arc object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArc(Arc arc,Color color,int thickness)
- (summary) 
     Draw a single arc object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArrow(Line line,Color color)
- (summary) 
     Draws a single arrow object. An arrow consists of a Shaft and an Arrow head at the end of the shaft.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArrow(Line line,Color color,double screenSize,double relativeSize)
- (summary) 
     Draws a single arrow object. 
     An arrow consists of a Shaft and an Arrow head at the end of the shaft.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArrowHead(Point3d tip,Vector3d direction,Color color,double screenSize,double worldSize)
- (summary) 
     Draws a single arrow head.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArrows(IEnumerable<Line> lines,Color color)
- (summary) 
     Draws a collection of arrow objects. An arrow consists of a Shaft and an Arrow head at the end of the shaft. 
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawArrows(Line[] lines,Color color)
- (summary) 
     Draws a collection of arrow objects. An arrow consists of a Shaft and an Arrow head at the end of the shaft.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBitmap(DisplayBitmap bitmap,int left,int top)
- (summary) 
     Draws a bitmap in screen coordinates
     
- (since) 5.10
- (returns) void This is some return comment
#### void DrawBox(BoundingBox box,Color color)
- (summary) 
     Draws the edges of a BoundingBox.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBox(BoundingBox box,Color color,int thickness)
- (summary) 
     Draws the edges of a BoundingBox.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBox(Box box,Color color)
- (summary) 
     Draws the edges of a Box object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBox(Box box,Color color,int thickness)
- (summary) 
     Draws the edges of a Box object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBoxCorners(BoundingBox box,Color color)
- (summary) 
     Draws corner widgets of a world aligned boundingbox. 
     Widget size will be 5% of the Box diagonal.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBoxCorners(BoundingBox box,Color color,double size)
- (summary) 
     Draws corner widgets of a world aligned boundingbox. 
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBoxCorners(BoundingBox box,Color color,double size,int thickness)
- (summary) 
     Draws corner widgets of a world aligned boundingbox. 
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBrepShaded(Brep brep,DisplayMaterial material)
- (summary) 
     Draws a shaded mesh representation of a brep.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBrepWires(Brep brep,Color color)
- (summary) 
     Draws all the wireframe curves of a brep object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawBrepWires(Brep brep,Color color,int wireDensity)
- (summary) 
     Draws all the wireframe curves of a brep object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCircle(Circle circle,Color color)
- (summary) 
     Draw a single circle object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCircle(Circle circle,Color color,int thickness)
- (summary) 
     Draw a single circle object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCone(Cone cone,Color color)
- (summary) 
     Draw a wireframe cone.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCone(Cone cone,Color color,int thickness)
- (summary) 
     Draw a wireframe cone.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawConstructionPlane(ConstructionPlane constructionPlane)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCurvatureGraph(Curve curve,Color color)
- (summary) 
     Draw a typical Rhino Curvature Graph.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCurvatureGraph(Curve curve,Color color,int hairScale)
- (summary) 
     Draw a typical Rhino Curvature Graph.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCurvatureGraph(Curve curve,Color color,int hairScale,int hairDensity,int sampleDensity)
- (summary) 
     Draw a typical Rhino Curvature Graph.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCurve(Curve curve,Color color)
- (summary) 
     Draw a single Curve object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCurve(Curve curve,Color color,int thickness)
- (summary) 
     Draw a single Curve object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCylinder(Cylinder cylinder,Color color)
- (summary) 
     Draw a wireframe cylinder.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawCylinder(Cylinder cylinder,Color color,int thickness)
- (summary) 
     Draw a wireframe cylinder.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDirectionArrow(Point3d location,Vector3d direction,Color color)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDot(float screenX,float screenY,string text)
- (summary) 
     Draws a text dot in screen coordinates.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawDot(float screenX,float screenY,string text,Color dotColor,Color textColor)
- (summary) 
     Draws a text dot in screen coordinates.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawDot(Point3d worldPosition,string text)
- (summary) 
     Draws a text dot in world coordinates.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDot(Point3d worldPosition,string text,Color dotColor,Color textColor)
- (summary) 
     Draw a text dot in world coordinates.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDot(TextDot dot,Color fillColor,Color textColor,Color borderColor)
- (summary) 
     Draw a text dot as defined by the text dot class
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawDottedLine(Line line,Color color)
- (summary) 
     Draws a single dotted line.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDottedLine(Point3d from,Point3d to,Color color)
- (summary) 
     Draws a single dotted line.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawDottedPolyline(IEnumerable<Point3d> points,Color color,bool close)
- (summary) 
     Draws a set of connected lines (polyline) in a dotted pattern (0x00001111).
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawExtrusionWires(Extrusion extrusion,Color color)
- (summary) 
     Draws all the wireframe curves of an extrusion object.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawExtrusionWires(Extrusion extrusion,Color color,int wireDensity)
- (summary) 
     Draws all the wireframe curves of an extrusion object.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawGradientHatch(Hatch hatch,Color color1,Color color2,Point3d point1,Point3d point2,bool linearGradient,float boundaryThickness,Color boundaryColor)
- (summary) 
     Draw a two point gradient filled hatch
     
- (since) 7.0
- (returns) void This is some return comment
#### void DrawGradientHatch(Hatch hatch,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat,float boundaryThickness,Color boundaryColor)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
#### void DrawGradientLines(IEnumerable<Line> lines,float strokeWidth,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
#### void DrawGradientMesh(Mesh mesh,IEnumerable<ColorStop> stops,Point3d point1,Point3d point2,bool linearGradient,float repeat)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
#### void DrawHatch(Hatch hatch,Color hatchColor,Color boundaryColor)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawLine(Line line,Color color)
- (summary) 
     Draws a single line object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLine(Line line,Color color,int thickness)
- (summary) 
     Draws a single line object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLine(Point3d from,Point3d to,Color color)
- (summary) 
     Draws a single line object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLine(Point3d from,Point3d to,Color color,int thickness)
- (summary) 
     Draws a single line object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLineArrow(Line line,Color color,int thickness,double size)
- (summary) 
     Draws an arrow made up of three line segments.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLines(IEnumerable<Line> lines,Color color)
- (summary) 
     Draws a set of lines with a given color and thickness. If you want the fastest possible set of lines
     to be drawn, pass a Line[] for lines.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawLines(IEnumerable<Line> lines,Color color,int thickness)
- (summary) 
     Draws a set of lines with a given color and thickness. If you want the fastest possible set of lines
     to be drawn, pass a Line[] for lines.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMarker(Point3d tip,Vector3d direction,Color color)
- (summary) 
     Draws an arrow marker as a view-aligned widget.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness)
- (summary) 
     Draws an arrow marker as a view-aligned widget.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness,double size)
- (summary) 
     Draws an arrow marker as a view-aligned widget.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMarker(Point3d tip,Vector3d direction,Color color,int thickness,double size,double rotation)
- (summary) 
     Draws an arrow marker as a view-aligned widget.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshFalseColors(Mesh mesh)
- (summary) 
     Draws the mesh faces as False color patches. 
     The mesh must have Vertex Colors defined for this to work.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshShaded(Mesh mesh,DisplayMaterial material)
- (summary) 
     Draws the shaded faces of a given mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshShaded(Mesh mesh,DisplayMaterial material,int[] faceIndices)
- (summary) 
     Draws the shaded faces of a given mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshVertices(Mesh mesh,Color color)
- (summary) 
     Draws all the vertices in a given mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshWires(Mesh mesh,Color color)
- (summary) 
     Draws all the wires in a given mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawMeshWires(Mesh mesh,Color color,int thickness)
- (summary) 
     Draws all the wires in a given mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawObject(RhinoObject rhinoObject)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawObject(RhinoObject rhinoObject,Transform xform)
- (summary) 
     Draws a RhinoObject with an applied transformation.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawParticles(ParticleSystem particles)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawParticles(ParticleSystem particles,DisplayBitmap bitmap)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawParticles(ParticleSystem particles,DisplayBitmap[] bitmaps)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPatternedLine(Line line,Color color,int pattern,int thickness)
- (summary) 
     Draws a single line with specified pattern.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPatternedLine(Point3d from,Point3d to,Color color,int pattern,int thickness)
- (summary) 
     Draws a single line with specified pattern.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPatternedPolyline(IEnumerable<Point3d> points,Color color,int pattern,int thickness,bool close)
- (summary) 
     Draws a set of connected lines (polyline) with specified pattern.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoint(Point3d point)
- (summary) 
     Draws a point using the current display attribute size, style and color
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoint(Point3d point,Color color)
- (summary) Draws a point with a given radius, style and color.
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPoint(Point3d point,PointStyle style,Color strokeColor,Color fillColor,float radius,float strokeWidth,float secondarySize,float rotationRadians,bool diameterIsInPixels,bool autoScaleForDpi)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoint(Point3d point,PointStyle style,float radius,Color color)
- (summary) Draws a point with a given radius, style and color.
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoint(Point3d point,PointStyle style,int radius,Color color)
- (summary) Draws a point with a given radius, style and color.
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPointCloud(PointCloud cloud,float size)
- (summary) 
     Draws a point cloud.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPointCloud(PointCloud cloud,float size,Color color)
- (summary) 
     Draws a point cloud.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPointCloud(PointCloud cloud,int size)
- (summary) 
     Draws a point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPointCloud(PointCloud cloud,int size,Color color)
- (summary) 
     Draws a point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPoints(IEnumerable<Point3d> points,PointStyle style,Color strokeColor,Color fillColor,float radius,float strokeWidth,float secondarySize,float rotationRadians,bool diameterIsInPixels,bool autoScaleForDpi)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoints(IEnumerable<Point3d> points,PointStyle style,float radius,Color color)
- (summary) Draw a set of points with a given radius, style and color.
- (since) 6.0
- (returns) void This is some return comment
#### void DrawPoints(IEnumerable<Point3d> points,PointStyle style,int radius,Color color)
- (summary) Draw a set of points with a given radius, style and color.
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPolygon(IEnumerable<Point3d> points,Color color,bool filled)
- (summary) 
     Draws a filled, convex polygon from a collection of points.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPolyline(IEnumerable<Point3d> polyline,Color color)
- (summary) 
     Draws a single Polyline object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawPolyline(IEnumerable<Point3d> polyline,Color color,int thickness)
- (summary) 
     Draws a single Polyline object.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawRoundedRectangle(PointF center,float pixelWidth,float pixelHeight,float cornerRadius,Color strokeColor,float strokeWidth,Color fillColor)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawSphere(Sphere sphere,Color color)
- (summary) 
     Draw a wireframe sphere.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSphere(Sphere sphere,Color color,int thickness)
- (summary) 
     Draw a wireframe sphere.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprite(DisplayBitmap bitmap,Point2d screenLocation,float size)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprite(DisplayBitmap bitmap,Point2d screenLocation,float size,Color blendColor)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprite(DisplayBitmap bitmap,Point3d worldLocation,float size,bool sizeInWorldSpace)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprite(DisplayBitmap bitmap,Point3d worldLocation,float size,Color blendColor,bool sizeInWorldSpace)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprites(DisplayBitmap bitmap,DisplayBitmapDrawList items,float size,bool sizeInWorldSpace)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void DrawSprites(DisplayBitmap bitmap,DisplayBitmapDrawList items,float size,Vector3d translation,bool sizeInWorldSpace)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### bool DrawStereoFrameBuffer(ViewportInfo viewportLeft,ViewportInfo viewportRight,uint handleLeft,uint handleRight)
- (summary) 
     Draws the viewport as seen from the left and the right eye viewports
     and returns the result as OpenGL texture handles.
     
- (since) 6.8
- (returns) bool This is some return comment
#### void DrawSubDShaded(SubD subd,DisplayMaterial material)
- (summary) 
     Draw a shaded mesh representation of a SubD
     
- (since) 7.0
- (returns) void This is some return comment
#### void DrawSubDWires(SubD subd,Color color,float thickness)
- (summary) 
     Draws all the wireframe curves of a SubD object
     
- (since) 7.0
- (returns) void This is some return comment
#### void DrawSurface(Surface surface,Color wireColor,int wireDensity)
- (summary) 
     Draw wireframe display for a single surface.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawText(TextEntity text,Color color)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawText(TextEntity text,Color color,double scale)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawText(TextEntity text,Color color,Transform xform)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void DrawTorus(Torus torus,Color color)
- (summary) 
     Draw a wireframe torus.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawTorus(Torus torus,Color color,int thickness)
- (summary) 
     Draw a wireframe torus.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DrawZebraPreview(Brep brep,Color color)
- (summary) 
     Draws a shaded Brep with Zebra stripe preview.
     
- (since) 6.16
- (returns) void This is some return comment
#### void EnableClippingPlanes(bool enable)
- (summary) 
     Enable or disable the Clipping Plane logic of the engine. 
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableColorWriting(bool enable)
- (summary) 
     Enable or disable the ColorWriting behaviour of the engine. 
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableDepthTesting(bool enable)
- (summary) 
     Enable or disable the DepthTesting behaviour of the engine. 
     When DepthTesting is disabled, objects in front will no 
     longer occlude objects behind them.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableDepthWriting(bool enable)
- (summary) 
     Enable or disable the DepthWriting behaviour of the engine. 
     When DepthWriting is disabled, drawn geometry does not affect the Z-Buffer.
     
- (since) 5.0
- (returns) void This is some return comment
#### void EnableLighting(bool enable)
- (summary) 
     Enable or disable the Lighting logic of the engine. 
     
- (since) 5.0
- (returns) void This is some return comment
#### Light[] GetLights()
- (summary) 
     Get lights that this pipeline is current using
     
- (since) 6.3
- (returns) Light[] This is some return comment
#### float[] GetOpenGLCameraToClip()
- (summary) 
     Get an array of 16 floats that represents the "camera" to "clip" coordinate
     transformation in OpenGL's right handed coordinate system
     
- (since) 6.0
- (returns) float[] This is some return comment
#### float[] GetOpenGLWorldToCamera(bool includeModelTransform)
- (summary) 
     Get an array of 16 floats that represents the "world" to "camera" coordinate
     transformation in OpenGL's right handed coordinate system
     
- (since) 6.0
- (returns) float[] This is some return comment
#### float[] GetOpenGLWorldToClip(bool includeModelTransform)
- (summary) 
     Get an array of 16 floats that represents the "world" to "clip" coordinate
     transformation in OpenGL's right handed coordinate system
     
- (since) 6.0
- (returns) float[] This is some return comment
#### bool InterruptDrawing()
- (summary) 
     Tests to see if the pipeline should stop drawing more geometry and just show what it has so far. 
     If a drawing operation is taking a long time, this function will return True and tell Rhino it should just 
     finish up and show the frame buffer. This is used in dynamic drawing operations. 
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsActive(RhinoObject rhinoObject)
- (summary) 
     Determines if an object can be visible in this viewport based on it's object type and display attributes. 
     This test does not check for visibility based on location of the object. 
     NOTE: Use CRhinoDisplayPipeline::IsVisible() to perform "visibility" 
           tests based on location (is some part of the object in the view frustum). 
           Use CRhinoDisplayPipeline::IsActive() to perform "visibility" 
           tests based on object type.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsVisible(BoundingBox bbox)
- (summary) 
     Test a given box for visibility inside the view frustum under the current 
     viewport and model transformation settings.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsVisible(Point3d worldCoordinate)
- (summary) 
     Test a given 3d world coordinate point for visibility inside the view 
     frustum under the current viewport and model transformation settings.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsVisible(RhinoObject rhinoObject)
- (summary) 
     Test a given object for visibility inside the view frustum under the current viewport and model 
     transformation settings. This function calls a virtual IsVisibleFinal function that 
     subclassed pipelines can add extra tests to. In the base class, this test only tests 
     visibility based on the objects world coordinates location and does not pay attention 
     to the object's attributes.
     
     NOTE: Use CRhinoDisplayPipeline::IsVisible() to perform "visibility" 
           tests based on location (is some part of the object in the view frustum). 
           Use CRhinoDisplayPipeline::IsActive() to perform "visibility" 
           tests based on object type.
     
- (since) 5.0
- (returns) bool This is some return comment
#### System.Drawing.Rectangle Measure2dText(string text,Point2d definitionPoint,bool middleJustified,double rotationRadians,int height,string fontFace)
- (summary) 
     Determines screen rectangle that would be drawn to using the Draw2dText(..) function
     with the same parameters.
     
- (since) 5.10
- (returns) System.Drawing.Rectangle This is some return comment
#### bool Open()
- (summary) 
     Opens the pipeline.
     
- (since) 7.0
- (returns) bool This is some return comment
#### void PopClipTesting()
- (summary) 
     Pop a ClipTesting flag off the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PopCullFaceMode()
- (summary) 
     Pop a FaceCull flag off the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PopDepthTesting()
- (summary) 
     Pop a DepthTesting flag off the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PopDepthWriting()
- (summary) 
     Pop a DepthWriting flag off the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PopModelTransform()
- (summary) 
     Pop a model transformation off the engine's model transform stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PushClipTesting(bool enable)
- (summary) 
     Push a ClipTesting flag on the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PushCullFaceMode(CullFaceMode mode)
- (summary) 
     Push a FaceCull flag on the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PushDepthTesting(bool enable)
- (summary) 
     Push a DepthTesting flag on the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PushDepthWriting(bool enable)
- (summary) 
     Push a DepthWriting flag on the engine's stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void PushModelTransform(Transform xform)
- (summary) 
     Push a model transformation on the engine's model transform stack.
     
- (since) 5.0
- (returns) void This is some return comment
#### void RemoveClippingPlane(int index)
- (summary) 
     Remove a clipping plane from the pipeline for this frame
     
- (since) 6.3
- (returns) void This is some return comment
