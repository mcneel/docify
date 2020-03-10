---
title: "Rhino.Render.RenderTexture"
draft: false
---

# Properties
## Transform LocalMappingTransform
- (summary) 
     Gets the transformation that can be applied to the UVW vector to convert it
     from normalized texture space into locally mapped space (ie - with repeat,
     offset and rotation applied.)
     
- (since) 5.1
## uint RenderHashWithoutLocalMapping
- (summary) 
     Render hash for texture excluding local mapping.
     
- (since) 6.0
# Methods
## static bool GetEnvironmentMappingProjection(TextureEnvironmentMappingMode mode,Vector3d reflectionVector,float u,float v)
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## static Point3d GetWcsBoxMapping(Point3d worldXyz,Vector3d normal)
- (summary) 
- (since) 5.7
- (returns) Point3d This is some return comment
## static RenderTexture NewBitmapTexture(Bitmap bitmap,RhinoDoc doc)
- (summary) 
     Constructs a new basic texture from a Bitmap.
     
- (since) 7.0
- (returns) RenderTexture This is some return comment
## static RenderTexture NewBitmapTexture(SimulatedTexture texture)
- (summary) 
     Constructs a new basic texture from a SimulatedTexture.
     
- (since) 5.3
- (returns) RenderTexture This is some return comment
## static RenderTexture NewBitmapTexture(SimulatedTexture texture,RhinoDoc doc)
- (summary) 
     Constructs a new basic texture from a SimulatedTexture.
     
- (since) 6.4
- (returns) RenderTexture This is some return comment
## TextureEvaluator CreateEvaluator()
- (summary) 
     Constructs a texture evaluator. This is an independent lightweight object
     capable of evaluating texture color throughout uvw space. May be called
     from within a rendering shade pipeline.
     
- (since) 5.1
- (returns) TextureEvaluator This is some return comment
## TextureEvaluator CreateEvaluator(TextureEvaluatorFlags evaluatorFlags)
- (summary) 
     Constructs a texture evaluator. This is an independent lightweight object
     capable of evaluating texture color throughout uvw space. May be called
     from within a rendering shade pipeline.
     
- (since) 6.0
- (returns) TextureEvaluator This is some return comment
## bool GetDisplayInViewport()
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## TextureEnvironmentMappingMode GetEnvironmentMappingMode()
- (summary) 
- (since) 5.7
- (returns) TextureEnvironmentMappingMode This is some return comment
## TextureEnvironmentMappingMode GetInternalEnvironmentMappingMode()
- (summary) 
- (since) 5.7
- (returns) TextureEnvironmentMappingMode This is some return comment
## eLocalMappingType GetLocalMappingType()
- (summary) 
- (since) 6.3
- (returns) eLocalMappingType This is some return comment
## int GetMappingChannel()
- (summary) 
- (since) 5.7
- (returns) int This is some return comment
## Vector3d GetOffset()
- (summary) 
     Get offset value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the offset in meters.
     
- (since) 5.7
- (returns) Vector3d This is some return comment
## bool GetOffsetLocked()
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## bool GetPreviewIn3D()
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## bool GetPreviewLocalMapping()
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## TextureProjectionMode GetProjectionMode()
- (summary) 
- (since) 5.7
- (returns) TextureProjectionMode This is some return comment
## Vector3d GetRepeat()
- (summary) 
     Get repeat value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the repeat across 1
     meter of the model.
     
- (since) 5.7
- (returns) Vector3d This is some return comment
## bool GetRepeatLocked()
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
## Vector3d GetRotation()
- (summary) 
- (since) 5.7
- (returns) Vector3d This is some return comment
## TextureWrapType GetWrapType()
- (summary) 
- (since) 5.7
- (returns) TextureWrapType This is some return comment
## void GraphInfo(TextureGraphInfo tgi)
- (summary) 
- (since) 6.3
- (returns) void This is some return comment
## bool IsHdrCapable()
- (summary) 
     Return True if the texture is HDR capable.
     
     When creating a custom RenderTexture implementation that is HDR capable
     set the appropriate property on the CustomRenderContentAttribute decorator on that clas.
     
- (since) 5.7
- (returns) bool This is some return comment
## bool IsImageBased()
- (summary) 
     Query if the texture is image based.
    
     When creating a custom RenderTexture implementation of an image-based texture
     set the appropriate property on the CustomRenderContentAttribute decorator on that class.
     
     Do not override this function
     
- (since) 6.0
- (returns) bool This is some return comment
## bool IsLinear()
- (summary) 
      Return True if the texture color data is linear.
      
      NOTE: this function is marked as virtual, but the correct way to make a custom RenderTexture linear is by
      setting the correct property for the CustomRenderContentAttribute decorator on the class.
      
- (since) 6.0
- (returns) bool This is some return comment
## bool IsNormalMap()
- (summary) 
     Return True if the texture is a normalmap.
     
     When creating a custom RenderTexture implementation of a normal map
     set the appropriate property on the CustomRenderContentAttribute decorator on that clas.
     
- (since) 6.16
- (returns) bool This is some return comment
## void PixelSize(int u,int v,int w)
- (summary) 
     Get the texture dimensions for the RenderTexture.
     
- (since) 6.0
- (returns) void This is some return comment
## bool SaveAsImage(string FullPath,int width,int height,int depth)
- (summary) 
     Save texture as image
     
- (since) 6.15
- (returns) bool This is some return comment
## void SetDisplayInViewport(bool value)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetDisplayInViewport(bool value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetEnvironmentMappingMode(TextureEnvironmentMappingMode value)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetEnvironmentMappingMode(TextureEnvironmentMappingMode value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetGraphInfo(TextureGraphInfo tgi)
- (summary) 
- (since) 6.3
- (returns) void This is some return comment
## void SetMappingChannel(int value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetOffset(Vector3d value,ChangeContexts changeContext)
- (summary) 
     Set offset value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the offset in meters.
     
- (since) 5.7
- (returns) void This is some return comment
## void SetOffsetLocked(bool value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetPreviewIn3D(bool value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetPreviewLocalMapping(bool value)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetPreviewLocalMapping(bool value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetProjectionMode(TextureProjectionMode value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetRepeat(Vector3d value,ChangeContexts changeContext)
- (summary) 
     Set repeat value across UVW space. If the projection type is WCS or
     other type specified in model units, then this is the repeat across 1
     meter of the model.
     
- (since) 5.7
- (returns) void This is some return comment
## void SetRepeatLocked(bool value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetRotation(Vector3d value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## void SetWrapType(TextureWrapType value,ChangeContexts changeContext)
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## SimulatedTexture SimulatedTexture(TextureGeneration tg,int size,RhinoObject obj)
- (summary) 
- (since) 6.0
- (returns) SimulatedTexture This is some return comment
## void SimulateTexture(SimulatedTexture simulation,bool isForDataOnly)
- (summary) 
- (since) 5.1
- (returns) void This is some return comment
## void SimulateTexture(SimulatedTexture simulation,TextureGeneration tg,int size,RhinoObject obj)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
