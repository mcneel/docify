---
title: "DisplayPipelineAttributes"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents display pipeline settings, such as "show transparency" and "show grips".
```cs
[Serializable]
public class DisplayPipelineAttributes : IDisposable, ISerializable
```
## Properties

Color AmbientLightingColor
: 
: since 6.3

[BoundingBoxDisplayMode](/rhinocommon/rhino/display/displaypipelineattributes/boundingboxdisplaymode/) BoundingBoxMode
: 
: since 6.1

bool CastShadows
: Cast shadows.
: since 6.4

[ContextsForDraw](/rhinocommon/rhino/display/displaypipelineattributes/contextsfordraw/) ContextForDraw
: 
: since 6.5

Color CurveColor
: Color used for drawing curves
: since 5.1

int CurveThickness
: Pixel thickness for curves
: since 5.1

bool DisableConduits
: 

bool DisableTransparency
: 

string EnglishName
: 

[FrameBufferFillMode](/rhinocommon/rhino/render/changequeue/environment/framebufferfillmode/) FillMode
: Get or set the frame buffer fill mode.
: since 6.0

Guid Id
: 

bool IgnoreHighlights
: 

string LocalName
: 

bool LockedObjectsDrawBehindOthers
: Locked object are drawn behind other objects
: since 5.1

[MeshDisplayAttributes](/rhinocommon/rhino/display/displaypipelineattributes/meshdisplayattributes/) MeshSpecificAttributes
: 

Color ObjectColor
: 

float PointRadius
: 
: since 6.0

PointStyle PointStyle
: 
: since 6.0

Guid RealtimeDisplayId
: Get the ID of the realtime display engine attached to the view. This will be
     Guid.Empty if no realtime display engine is in use. This can be the case for instance
     when starting a _Render session for a realtime viewport integration. That still would
     cause this ID to be Guid.Empty.
: since 6.0

int RealtimeRenderPasses
: Get or set the realtime passes amount
: since 6.0

bool ShadeVertexColors
: Shade using vertex colors.
: since 6.4

bool ShadingEnabled
: Draw shaded meshes and surfaces. Set to False to use Flat Shading.
: since 5.1

Color ShadowColor
: 
: since 6.3

bool ShowAnnotations
: Show annotations.
: since 6.4

bool ShowClippingPlanes
: Show clipping planes.
: since 6.4

bool ShowCurves
: Draw curves
: since 5.1

bool ShowGrips
: 

bool ShowIsoCurves
: Draw surface ISO curves.
: since 6.4

bool ShowLights
: Show light widgets.
: since 6.4

bool ShowPointClouds
: Show point clouds.
: since 6.4

bool ShowPoints
: Show points.
: since 6.4

bool ShowRealtimeRenderProgressBar
: Get or set whether the display is used for preview rendering or not.
: since 6.0

bool ShowSurfaceEdges
: Show surface edges.
: since 6.4

bool ShowTangentEdges
: Show tangent edges.
: since 6.4

bool ShowTangentSeams
: Show tangent seams.
: since 6.4

bool ShowText
: Show text.
: since 6.4

[StereoRenderContextEnum](/rhinocommon/rhino/display/displaypipelineattributes/stereorendercontextenum/) StereoRenderContext
: Get or set the stereo render context.
: since 7.0

int SurfaceEdgeThickness
: Thickness for surface edges
: since 6.1

bool UseAssignedObjectMaterial
: Gets whether objects ought to be drawn using their assigned rendering material.
: since 6.0

bool UseCustomObjectColor
: Gets whether objects ought to be drawn using a custom color.
: since 6.0

bool UseCustomObjectMaterial
: Gets whether objects ought to be drawn using a custom material.
: since 6.0

bool UseSingleCurveColor
: Use a single color for drawing curves
: since 6.3

[ViewDisplayAttributes](/rhinocommon/rhino/display/displaypipelineattributes/viewdisplayattributes/) ViewSpecificAttributes
: 

bool XrayAllObjects
: 
## Methods

void Dispose()
: 

void GetFill(Color topLeft,Color bottomLeft,Color topRight,Color bottomRight)
: Get fill colors used for clearing the frame buffer
: since 6.23

void GetObjectData(SerializationInfo info,StreamingContext context)
: 

void SetFill(Color singleColor)
: Set fill mode to solid color and set the fill color
: since 6.23

void SetFill(Color gradientTop,Color gradientBottom)
: Set fill mode to two color and set the colors
: since 6.23

void SetFill(Color gradientTopLeft,Color gradientBottomLeft,Color gradientTopRight,Color gradientBottomRight)
: Set the fill mode to four color gradient and set the colors
: since 6.23
