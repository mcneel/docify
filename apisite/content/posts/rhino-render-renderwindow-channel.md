---
title: "Rhino.Render.RenderWindow.Channel"
date: 2020-03-10 09:24:55Z
draft: false
---

# Methods
## void AddValue(int x,int y,Color4f value)
- (summary) 
       Add value to existing values at point x, y.
       If x or y are out of range, the function will fail and may crash Rhino.
       
- (since) 6.0
- (returns) void This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## int PixelSize()
- (summary) 
       Returns the size of the data in one pixel in the channel. For RDK standard channels, this value is always sizeof(float). 
       For the special chanRGBA collective channel,
       this value is 4 * sizeof(float).
       
- (since) 5.0
- (returns) int This is some return comment
## void SetValue(int x,int y,Color4f value)
- (summary) 
       If x or y are out of range, the function will fail and may crash Rhino.
       
- (since) 5.0
- (returns) void This is some return comment
## void SetValue(int x,int y,float value)
- (summary) 
       If x or y are out of range, the function will fail and may crash Rhino.
       
- (since) 5.0
- (returns) void This is some return comment
## void SetValues(Rectangle rectangle,Size bufferResolution,PixelBuffer colorBuffer)
- (summary) 
       Set a pixel buffer
       
- (since) 6.0
- (returns) void This is some return comment
