---
title: "DisplayPipelineAttributes"
draft: false
---

*Namespace: Rhino.Display*

   Represents display pipeline settings, such as "show transparency" and "show grips".
   
## Properties
#### Color AmbientLightingColor
- (summary) 
- (since) 6.3
#### BoundingBoxDisplayMode BoundingBoxMode
- (summary) 
- (since) 6.1
#### bool CastShadows
- (summary) Cast shadows.
- (since) 6.4
#### ContextsForDraw ContextForDraw
- (summary) 
- (since) 6.5
#### System.Drawing.Color CurveColor
- (summary) Color used for drawing curves
- (since) 5.1
#### int CurveThickness
- (summary) Pixel thickness for curves
- (since) 5.1
#### bool DisableConduits
- (summary) 
- (since) 5.0
#### bool DisableTransparency
- (summary) 
- (since) 5.0
#### string EnglishName
- (summary) 
- (since) 5.0
#### FrameBufferFillMode FillMode
- (summary) 
     Get or set the frame buffer fill mode.
     
- (since) 6.0
#### Guid Id
- (summary) 
- (since) 5.0
#### bool IgnoreHighlights
- (summary) 
- (since) 5.0
#### string LocalName
- (summary) 
- (since) 5.0
#### bool LockedObjectsDrawBehindOthers
- (summary) Locked object are drawn behind other objects
- (since) 5.1
#### MeshDisplayAttributes MeshSpecificAttributes
- (summary) 
- (since) 5.0
#### Color ObjectColor
- (summary) 
- (since) 5.0
#### float PointRadius
- (summary) 
- (since) 6.0
#### PointStyle PointStyle
- (summary) 
- (since) 6.0
#### Guid RealtimeDisplayId
- (summary) 
     Get the ID of the realtime display engine attached to the view. This will be
     Guid.Empty if no realtime display engine is in use. This can be the case for instance
     when starting a _Render session for a realtime viewport integration. That still would
     cause this ID to be Guid.Empty.
     
- (since) 6.0
#### int RealtimeRenderPasses
- (summary) 
     Get or set the realtime passes amount
     
- (since) 6.0
#### bool ShadeVertexColors
- (summary) Shade using vertex colors.
- (since) 6.4
#### bool ShadingEnabled
- (summary) Draw shaded meshes and surfaces. Set to False to use Flat Shading.
- (since) 5.1
#### Color ShadowColor
- (summary) 
- (since) 6.3
#### bool ShowAnnotations
- (summary) Show annotations.
- (since) 6.4
#### bool ShowClippingPlanes
- (summary) Show clipping planes.
- (since) 6.4
#### bool ShowCurves
- (summary) Draw curves
- (since) 5.1
#### bool ShowGrips
- (summary) 
- (since) 5.0
#### bool ShowIsoCurves
- (summary) Draw surface ISO curves.
- (since) 6.4
#### bool ShowLights
- (summary) Show light widgets.
- (since) 6.4
#### bool ShowPointClouds
- (summary) Show point clouds.
- (since) 6.4
#### bool ShowPoints
- (summary) Show points.
- (since) 6.4
#### bool ShowRealtimeRenderProgressBar
- (summary) 
     Get or set whether the display is used for preview rendering or not.
     
- (since) 6.0
#### bool ShowSurfaceEdges
- (summary) Show surface edges.
- (since) 6.4
#### bool ShowTangentEdges
- (summary) Show tangent edges.
- (since) 6.4
#### bool ShowTangentSeams
- (summary) Show tangent seams.
- (since) 6.4
#### bool ShowText
- (summary) Show text.
- (since) 6.4
#### StereoRenderContextEnum StereoRenderContext
- (summary) 
     Get or set the stereo render context.
     
- (since) 7.0
#### int SurfaceEdgeThickness
- (summary)  Thickness for surface edges 
- (since) 6.1
#### bool UseAssignedObjectMaterial
- (summary) 
     Gets whether objects ought to be drawn using their assigned rendering material.
     
- (since) 6.0
#### bool UseCustomObjectColor
- (summary) 
     Gets whether objects ought to be drawn using a custom color.
     
- (since) 6.0
#### bool UseCustomObjectMaterial
- (summary) 
     Gets whether objects ought to be drawn using a custom material.
     
- (since) 6.0
#### bool UseSingleCurveColor
- (summary) 
     Use a single color for drawing curves
     
- (since) 6.3
#### ViewDisplayAttributes ViewSpecificAttributes
- (summary) 
- (since) 5.0
#### bool XrayAllObjects
- (summary) 
- (since) 5.0
## Methods
#### void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void GetFill(Color topLeft,Color bottomLeft,Color topRight,Color bottomRight)
- (summary) 
     Get fill colors used for clearing the frame buffer
     
- (since) 6.23
- (returns) void This is some return comment
#### void GetObjectData(SerializationInfo info,StreamingContext context)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void SetFill(Color singleColor)
- (summary) 
     Set fill mode to solid color and set the fill color
     
- (since) 6.23
- (returns) void This is some return comment
#### void SetFill(Color gradientTop,Color gradientBottom)
- (summary) 
     Set fill mode to two color and set the colors
     
- (since) 6.23
- (returns) void This is some return comment
#### void SetFill(Color gradientTopLeft,Color gradientBottomLeft,Color gradientTopRight,Color gradientBottomRight)
- (summary) 
     Set the fill mode to four color gradient and set the colors
     
- (since) 6.23
- (returns) void This is some return comment
