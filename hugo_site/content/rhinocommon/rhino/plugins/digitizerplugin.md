---
title: "DigitizerPlugIn"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

```cs
public class DigitizerPlugIn : PlugIn
```
## Methods

void SendPoint(Point3d point,MouseButton mousebuttons,bool shiftKey,bool controlKey)
: If the digitizer is enabled, call this function to send a point to Rhino.
     Call this function as much as you like.  The digitizers that Rhino currently
     supports send a point every 15 milliseconds or so. This function should be
     called when users press or release any digitizer button.
: since 6.0

void SendRay(Ray3d ray,MouseButton mousebuttons,bool shiftKey,bool controlKey)
: If the digitizer is enabled, call this function to send a point and direction to Rhino.
     Call this function as much as you like.  The digitizers that Rhino currently
     supports send a point every 15 milliseconds or so. This function should be
     called when users press or release any digitizer button.
: since 6.0
