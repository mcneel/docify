---
title: "Rhino.Render.RenderSourceView"
draft: false
---

# Constructors
## Rhino.Render.RenderSourceView(RhinoDoc doc)
- (summary) 
     Create a new RenderSourceView for the given doc.
     
     Note that this should be done with using(var rsv = new RenderSourceView(doc)) {}
     
     If the RenderSettings have the source view set to for instance a SnapShot this
     construct will ensure that the (active) view is set to the correct snapshot, and
     reverted back to the original once this instance goes out of scope.
     
- (since) 6.0
# Methods
## void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## Rhino.DocObjects.ViewInfo GetViewInfo()
- (summary) 
     Get the ViewInfo as specified by the render source view settings.
     
- (since) 6.0
- (returns) Rhino.DocObjects.ViewInfo This is some return comment
