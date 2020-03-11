---
title: "RenderTexture"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderTexture : RenderContent
```
## Properties

[Transform](/rhinocommon/rhino/geometry/transform/) LocalMappingTransform
: Gets the transformation that can be applied to the UVW vector to convert it
     from normalized texture space into locally mapped space (ie - with repeat,
     offset and rotation applied.)
: since 5.1

uint RenderHashWithoutLocalMapping
: Render hash for texture excluding local mapping.
: since 6.0
## Methods

static bool GetEnvironmentMappingProjection(TextureEnvironmentMappingMode mode,Vector3d reflectionVector,float u,float v)
: 
: since 5.7

static [Point3d](/rhinocommon/rhino/geometry/point3d/) GetWcsBoxMapping(Point3d worldXyz,Vector3d normal)
: 
: since 5.7

static RenderTexture NewBitmapTexture(Bitmap bitmap,RhinoDoc doc)
: Constructs a new basic texture from a Bitmap.
: Returns - A new render texture.
: since 7.0

static RenderTexture NewBitmapTexture(SimulatedTexture texture)
: Constructs a new basic texture from a SimulatedTexture.
: Returns - A new render texture.
: since 5.3

static RenderTexture NewBitmapTexture(SimulatedTexture texture,RhinoDoc doc)
: Constructs a new basic texture from a SimulatedTexture.
: Returns - A new render texture.
: since 6.4

[TextureEvaluator](/rhinocommon/rhino/render/textureevaluator/) CreateEvaluator()
: Constructs a texture evaluator. This is an independent lightweight object
     capable of evaluating texture color throughout uvw space. May be called
     from within a rendering shade pipeline.
: Returns - A texture evaluator instance.
: since 5.1

[TextureEvaluator](/rhinocommon/rhino/render/textureevaluator/) CreateEvaluator(TextureEvaluatorFlags evaluatorFlags)
: Constructs a texture evaluator. This is an independent lightweight object
     capable of evaluating texture color throughout uvw space. May be called
     from within a rendering shade pipeline.
: Returns - A texture evaluator instance.
: since 6.0

bool GetDisplayInViewport()
: 
: since 5.7

[TextureEnvironmentMappingMode](/rhinocommon/rhino/render/textureenvironmentmappingmode/) GetEnvironmentMappingMode()
: 
: since 5.7

[TextureEnvironmentMappingMode](/rhinocommon/rhino/render/textureenvironmentmappingmode/) GetInternalEnvironmentMappingMode()
: 
: since 5.7

eLocalMappingType GetLocalMappingType()
: 
: since 6.3

int GetMappingChannel()
: 
: since 5.7

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) GetOffset()
: Get offset value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the offset in meters.
: since 5.7

bool GetOffsetLocked()
: 
: since 5.7

bool GetPreviewIn3D()
: 
: since 5.7

bool GetPreviewLocalMapping()
: 
: since 5.7

[TextureProjectionMode](/rhinocommon/rhino/render/textureprojectionmode/) GetProjectionMode()
: 
: since 5.7

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) GetRepeat()
: Get repeat value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the repeat across 1
     meter of the model.
: since 5.7

bool GetRepeatLocked()
: 
: since 5.7

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) GetRotation()
: 
: since 5.7

[TextureWrapType](/rhinocommon/rhino/render/texturewraptype/) GetWrapType()
: 
: since 5.7

void GraphInfo(TextureGraphInfo tgi)
: 
: since 6.3

bool IsHdrCapable()
: Return True if the texture is HDR capable.
     
     When creating a custom RenderTexture implementation that is HDR capable
     set the appropriate property on the CustomRenderContentAttribute decorator on that clas.
: since 5.7

bool IsImageBased()
: Query if the texture is image based.
    
     When creating a custom RenderTexture implementation of an image-based texture
     set the appropriate property on the CustomRenderContentAttribute decorator on that class.
     
     Do not override this function
: Returns - True if the texture is image-based.
: since 6.0

bool IsLinear()
: Return True if the texture color data is linear.
      
      NOTE: this function is marked as virtual, but the correct way to make a custom RenderTexture linear is by
      setting the correct property for the CustomRenderContentAttribute decorator on the class.
: since 6.0

bool IsNormalMap()
: Return True if the texture is a normalmap.
     
     When creating a custom RenderTexture implementation of a normal map
     set the appropriate property on the CustomRenderContentAttribute decorator on that clas.
: since 6.16

void PixelSize(int u,int v,int w)
: Get the texture dimensions for the RenderTexture.
: since 6.0

bool SaveAsImage(string FullPath,int width,int height,int depth)
: Save texture as image
: Returns - returns True if file was saved, otherwise false
: since 6.15

void SetDisplayInViewport(bool value)
: 
: since 6.0

void SetDisplayInViewport(bool value,ChangeContexts changeContext)
: 
: since 5.7

void SetEnvironmentMappingMode(TextureEnvironmentMappingMode value)
: 
: since 6.0

void SetEnvironmentMappingMode(TextureEnvironmentMappingMode value,ChangeContexts changeContext)
: 
: since 5.7

void SetGraphInfo(TextureGraphInfo tgi)
: 
: since 6.3

void SetMappingChannel(int value,ChangeContexts changeContext)
: 
: since 5.7

void SetOffset(Vector3d value,ChangeContexts changeContext)
: Set offset value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the offset in meters.
: since 5.7

void SetOffsetLocked(bool value,ChangeContexts changeContext)
: 
: since 5.7

void SetPreviewIn3D(bool value,ChangeContexts changeContext)
: 
: since 5.7

void SetPreviewLocalMapping(bool value)
: 
: since 6.0

void SetPreviewLocalMapping(bool value,ChangeContexts changeContext)
: 
: since 5.7

void SetProjectionMode(TextureProjectionMode value,ChangeContexts changeContext)
: 
: since 5.7

void SetRepeat(Vector3d value,ChangeContexts changeContext)
: Set repeat value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the repeat across 1
     meter of the model.
: since 5.7

void SetRepeatLocked(bool value,ChangeContexts changeContext)
: 
: since 5.7

void SetRotation(Vector3d value,ChangeContexts changeContext)
: 
: since 5.7

void SetWrapType(TextureWrapType value,ChangeContexts changeContext)
: 
: since 5.7

[SimulatedTexture](/rhinocommon/rhino/render/simulatedtexture/) SimulatedTexture(TextureGeneration tg,int size,RhinoObject obj)
: 
: since 6.0

void SimulateTexture(SimulatedTexture simulation,bool isForDataOnly)
: 
: since 5.1

void SimulateTexture(SimulatedTexture simulation,TextureGeneration tg,int size,RhinoObject obj)
: 
: since 6.0
