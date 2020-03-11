---
title: "RenderSourceView"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Helper class to get the correct view from the Render View Source settings.
   
   An instance of this class is supposed to be used with the using() {} construct.
```cs
public class RenderSourceView : IDisposable
```
## Constructors

RenderSourceView(RhinoDoc doc)
: Create a new RenderSourceView for the given doc.
     
     Note that this should be done with using(var rsv = new RenderSourceView(doc)) {}
     
     If the RenderSettings have the source view set to for instance a SnapShot this
     construct will ensure that the (active) view is set to the correct snapshot, and
     reverted back to the original once this instance goes out of scope.
: since 6.0
## Methods

void Dispose()
: 
: since 6.0

Rhino.DocObjects.ViewInfo GetViewInfo()
: Get the ViewInfo as specified by the render source view settings.
: Returns - ViewInfo if view was found, None otherwise
: since 6.0
