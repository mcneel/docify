---
title: "Rhino.DocObjects.Tables.ViewTable"
draft: false
---

# Properties
## RhinoView ActiveView
- (summary) 
     Gets or Sets the active view.
     
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this object table.
- (since) 5.0
## bool ModelSpaceIsActive
- (summary) 
- (since) 5.0
## bool RedrawEnabled
- (summary) Returns or sets (enable or disables) screen redrawing.
- (since) 5.0
# Methods
## RhinoView Add(string title,DefinedViewportProjection projection,Rectangle position,bool floating)
- (summary) 
     Constructs a new Rhino view and, at the same time, adds it to the list.
     
- (since) 5.0
- (returns) RhinoView This is some return comment
## RhinoPageView AddPageView(string title)
- (summary) 
     Constructs a new page view with a given title and, at the same time, adds it to the list.
     
- (since) 5.0
- (returns) RhinoPageView This is some return comment
## RhinoPageView AddPageView(string title,double pageWidth,double pageHeight)
- (summary) 
     Constructs a new page view with a given title and size and, at the same time, adds it to the list.
     
- (since) 5.0
- (returns) RhinoPageView This is some return comment
## void DefaultViewLayout()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void EnableCameraIcon(RhinoView view)
- (summary) 
     Use to turn camera icon on and off
     
- (since) 6.0
- (returns) void This is some return comment
## RhinoView Find(Guid mainViewportId)
- (summary) 
     Finds a view in this document with a given main viewport Id.
     
- (since) 5.0
- (returns) RhinoView This is some return comment
## RhinoView Find(string mainViewportName,bool compareCase)
- (summary) 
     Finds a view in this document with a main viewport that has a given name. Note that there
     may be multiple views in this document that have the same name. This function only returns
     the first view found. If you want to find all the views with a given name, use the GetViewList
     function and iterate through the views.
     
- (since) 5.0
- (returns) RhinoView This is some return comment
## void FlashObjects(IEnumerable<RhinoObject> list,bool useSelectionColor)
- (summary) 
     Cause objects selection state to change momentarily so the object
     appears to flash on the screen.
     
- (since) 5.0
- (returns) void This is some return comment
## void FourViewLayout(bool useMatchingViews)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## IEnumerator<RhinoView> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<RhinoView> This is some return comment
## RhinoPageView[] GetPageViews()
- (summary) 
     Gets all page views in the document.
     
- (since) 5.0
- (returns) RhinoPageView[] This is some return comment
## RhinoView[] GetStandardRhinoViews()
- (summary) 
- (since) 5.0
- (returns) RhinoView[] This is some return comment
## RhinoView[] GetViewList(bool includeStandardViews,bool includePageViews)
- (summary) Gets an array of all the views.
- (since) 5.0
- (returns) RhinoView[] This is some return comment
## bool IsCameraIconVisible(RhinoView view)
- (summary)  Determine if a camera icon is being shown 
- (since) 6.0
- (returns) bool This is some return comment
## void Redraw()
- (summary) Redraws all views.
- (since) 5.0
- (returns) void This is some return comment
## void ThreeViewLayout(bool useMatchingViews)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
