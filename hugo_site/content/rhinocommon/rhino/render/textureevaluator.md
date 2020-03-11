---
title: "TextureEvaluator"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

This is the interface to a lightweight object capable of evaluating texture color throughout uvw space.  Derive from this class to create your own texture evaluator to return from a custom RenderTexture.
```cs
public class TextureEvaluator : IDisposable
```
## Methods

static void FreeByteArray(IntPtr p)
: 
: since 7.0

static byte GetByteArrayValue(IntPtr p,int offset)
: 
: since 7.0

static IntPtr NewByteArray(int width,int height)
: 
: since 7.0

static void Rdk_TextureEvaluator_ApplyGamma(IntPtr p,int width,int height,float gamma)
: 
: since 7.0

static void SetByteArrayValue(IntPtr p,int offset,byte value)
: 
: since 7.0

bool CanBeDumpedToBytes(int width,int height)
: Fast access to bitmap evaluator for Cycles - supply size (which you will probably have received from CRhRdkTexture::PixelSize) to see
     if the data can be extracted direct to a width*height*4 array of unsigned chars.
     This is implemented by EVF(L"CanBeDumpedToBytes", ON_2iSize*) != nullptr;
: Returns - True if the evaluator returned a valid color.  Otherwise false.
: since 7.0

void Dispose()
: For Dispose pattern
: since 5.1

void DumpToBytes(int width,int height,IntPtr buffer)
: Fast access to bitmap evaluator for Cycles - supply size (which you will probably have received from CRhRdkTexture::PixelSize) to see
     if the data can be extracted direct to a width*height*4 array of unsigned chars.
     This is implemented by EVF(L"CanBeDumpedToBytes", ON_2iSize*) != nullptr;
: Returns - True if the evaluator returned a valid color.  Otherwise false.
: since 7.0

Display.Color4f GetColor(Point3d uvw,Vector3d duvwdx,Vector3d duvwdy)
: Get the color of the texture at a particular point in uvw space.
   May be called from within a rendering shade pipeline.
   note For ray differentials see Pharr Humphreys, "Physically Based Rendering", chapter 11.
: Returns - The texture color at this point in UV space.
: since 5.1

bool GetColor(Point3d uvw,Vector3d duvwdx,Vector3d duvwdy,Color4f color)
: Optimized version of GetColor for callers.  Much faster in the case of a native (C++) evaluator.
: Returns - True if the evaluator returned a valid color.  Otherwise false.
: since 7.0

bool Initialize()
: Call this function before calling GetColor for the first time. Ideally, this should
   be on the main thread, but you can also call it on a worker thread as long as you
     are sure that Initialize() or GetColor() cannot be called at the same time on another thread.
: since 6.0
