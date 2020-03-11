---
title: "ViewTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class ViewTable : IEnumerable<RhinoView>
```
## Properties

[RhinoView](/rhinocommon/rhino/display/rhinoview/) ActiveView
: Gets or Sets the active view.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this object table.

bool ModelSpaceIsActive
: 

bool RedrawEnabled
: Returns or sets (enable or disables) screen redrawing.
## Methods

[RhinoView](/rhinocommon/rhino/display/rhinoview/) Add(string title,DefinedViewportProjection projection,Rectangle position,bool floating)
: Constructs a new Rhino view and, at the same time, adds it to the list.
: Returns - The newly constructed Rhino view; or None on error.

[RhinoPageView](/rhinocommon/rhino/display/rhinopageview/) AddPageView(string title)
: Constructs a new page view with a given title and, at the same time, adds it to the list.
: Returns - The newly created page view on success; or None on error.

[RhinoPageView](/rhinocommon/rhino/display/rhinopageview/) AddPageView(string title,double pageWidth,double pageHeight)
: Constructs a new page view with a given title and size and, at the same time, adds it to the list.
: Returns - The newly created page view on success; or None on error.

void DefaultViewLayout()
: 

void EnableCameraIcon(RhinoView view)
: Use to turn camera icon on and off
: since 6.0

[RhinoView](/rhinocommon/rhino/display/rhinoview/) Find(Guid mainViewportId)
: Finds a view in this document with a given main viewport Id.
: Returns - View on success. None if the view could not be found in this document.

[RhinoView](/rhinocommon/rhino/display/rhinoview/) Find(string mainViewportName,bool compareCase)
: Finds a view in this document with a main viewport that has a given name. Note that there
     may be multiple views in this document that have the same name. This function only returns
     the first view found. If you want to find all the views with a given name, use the GetViewList
     function and iterate through the views.
: Returns - A Rhino view on success; None on error.

void FlashObjects(IEnumerable<RhinoObject> list,bool useSelectionColor)
: Cause objects selection state to change momentarily so the object
     appears to flash on the screen.

void FourViewLayout(bool useMatchingViews)
: 

IEnumerator<RhinoView> GetEnumerator()
: 

[RhinoPageView](/rhinocommon/rhino/display/rhinopageview/)[] GetPageViews()
: Gets all page views in the document.
: Returns - An array with all page views. The return value can be an empty array but not null.

[RhinoView](/rhinocommon/rhino/display/rhinoview/)[] GetStandardRhinoViews()
: 

[RhinoView](/rhinocommon/rhino/display/rhinoview/)[] GetViewList(bool includeStandardViews,bool includePageViews)
: Gets an array of all the views.
: Returns - A array of Rhino views. This array can be emptry, but not null.

bool IsCameraIconVisible(RhinoView view)
: Determine if a camera icon is being shown
: since 6.0

void Redraw()
: Redraws all views.

void ThreeViewLayout(bool useMatchingViews)
: 
