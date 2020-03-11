---
title: "Channel"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class Channel : IDisposable
```
## Methods

void AddValue(int x,int y,Color4f value)
: Add value to existing values at point x, y.
       If x or y are out of range, the function will fail and may crash Rhino.
: since 6.0

void Dispose()
: 

int PixelSize()
: Returns the size of the data in one pixel in the channel. For RDK standard channels, this value is always sizeof(float). 
       For the special chanRGBA collective channel,
       this value is 4 * sizeof(float).
: Returns - The size of a pixel.

void SetValue(int x,int y,Color4f value)
: If x or y are out of range, the function will fail and may crash Rhino.

void SetValue(int x,int y,float value)
: If x or y are out of range, the function will fail and may crash Rhino.

void SetValues(Rectangle rectangle,Size bufferResolution,PixelBuffer colorBuffer)
: Set a pixel buffer
: since 6.0
