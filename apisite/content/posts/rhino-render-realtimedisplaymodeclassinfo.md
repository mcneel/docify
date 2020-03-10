---
title: "RealtimeDisplayModeClassInfo"
draft: false
---

*Namespace: Rhino.Render*

   Class information obligatory for registering RealtimeDisplayMode
   implementations.
   
## Properties
#### bool DontRegisterAttributesOnStart
- (summary) 
     Override and return True when you don't want your class info
     to cause display attributes to be registered with the system.
     
- (since) 6.0
#### bool DrawOpenGl
- (summary) 
     Return True if the RealtimeDisplayMode draws its result
     using OpenGL. RenderWindow usage will then be skipped.
     
- (since) 6.0
#### Guid GUID
- (summary) 
     Get the RealtimeDisplayMode implementation GUID
     
- (since) 6.0
#### string Name
- (summary) 
     Get human-facing class description for RealtimeDisplayMode
     implementation. This string might show up in the Rhino
     UI.
     
- (since) 6.0
#### Type RealtimeDisplayModeType
- (summary) 
     Get the type being registered.
     
- (since) 6.0
