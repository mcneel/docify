---
title: "RealtimeDisplayModeClassInfo"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Class information obligatory for registering RealtimeDisplayMode
   implementations.
```cs
public class RealtimeDisplayModeClassInfo
```
## Properties

bool DontRegisterAttributesOnStart
: Override and return True when you don't want your class info
     to cause display attributes to be registered with the system.
: since 6.0

bool DrawOpenGl
: Return True if the RealtimeDisplayMode draws its result
     using OpenGL. RenderWindow usage will then be skipped.
: since 6.0

Guid GUID
: Get the RealtimeDisplayMode implementation GUID
: since 6.0

string Name
: Get human-facing class description for RealtimeDisplayMode
     implementation. This string might show up in the Rhino
     UI.
: since 6.0

Type RealtimeDisplayModeType
: Get the type being registered.
: since 6.0
