---
title: "Rhino.Render.TextureEvaluator"
draft: false
---

# Methods
## static void FreeByteArray(IntPtr p)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
## static byte GetByteArrayValue(IntPtr p,int offset)
- (summary) 
- (since) 7.0
- (returns) byte This is some return comment
## static IntPtr NewByteArray(int width,int height)
- (summary) 
- (since) 7.0
- (returns) IntPtr This is some return comment
## static void Rdk_TextureEvaluator_ApplyGamma(IntPtr p,int width,int height,float gamma)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
## static void SetByteArrayValue(IntPtr p,int offset,byte value)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
## bool CanBeDumpedToBytes(int width,int height)
- (summary) 
     Fast access to bitmap evaluator for Cycles - supply size (which you will probably have received from CRhRdkTexture::PixelSize) to see
     if the data can be extracted direct to a width*height*4 array of unsigned chars.
     This is implemented by EVF(L"CanBeDumpedToBytes", ON_2iSize*) != nullptr;
     
- (since) 7.0
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
     For Dispose pattern
     
- (since) 5.1
- (returns) void This is some return comment
## void DumpToBytes(int width,int height,IntPtr buffer)
- (summary) 
     Fast access to bitmap evaluator for Cycles - supply size (which you will probably have received from CRhRdkTexture::PixelSize) to see
     if the data can be extracted direct to a width*height*4 array of unsigned chars.
     This is implemented by EVF(L"CanBeDumpedToBytes", ON_2iSize*) != nullptr;
     
- (since) 7.0
- (returns) void This is some return comment
## Display.Color4f GetColor(Point3d uvw,Vector3d duvwdx,Vector3d duvwdy)
- (summary) 
     Get the color of the texture at a particular point in uvw space.
   May be called from within a rendering shade pipeline.
   note For ray differentials see Pharr Humphreys, "Physically Based Rendering", chapter 11.
     
- (since) 5.1
- (returns) Display.Color4f This is some return comment
## bool GetColor(Point3d uvw,Vector3d duvwdx,Vector3d duvwdy,Color4f color)
- (summary) 
     Optimized version of GetColor for callers.  Much faster in the case of a native (C++) evaluator.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool Initialize()
- (summary) 
     Call this function before calling GetColor for the first time. Ideally, this should
   be on the main thread, but you can also call it on a worker thread as long as you
     are sure that Initialize() or GetColor() cannot be called at the same time on another thread.
     
- (since) 6.0
- (returns) bool This is some return comment
