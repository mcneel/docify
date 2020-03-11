---
title: "RhinoPageView"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

A window that contains a single layout 'page'
```cs
public class RhinoPageView : RhinoView
```
## Events

static PageViewSpaceChange
: 
## Properties

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) ActiveViewport
: The ActiveViewport is the same as the MainViewport for standard RhinoViews. In
     a RhinoPageView, the active viewport may be the RhinoViewport of a child detail object.
     Most of the time, you will use ActiveViewport unless you explicitly need to work with
     the main viewport.

double PageHeight
: Height of the page in the document's PageUnitSystem
: since 5.10

bool PageIsActive
: True if the page is active instead of any detail views. This occurs
     when the MainViewport.Id == ActiveViewportID.

string PageName
: Same as the MainViewport.Name.

int PageNumber
: Gets or sets the runtime page number and updates the page number for all
     of the other pages. The first page has a value of 0.

double PageWidth
: Width of the page in the document's PageUnitSystem
: since 5.10

string PaperName
: Returns the name of the layout's media, or paper (e.g. Letter, Legal, A1, etc.),
     used to determine the page width and page height.
: since 6.15

string PrinterName
: Returns the name of the layout's destination printer.
: since 6.15
## Methods

[DetailViewObject](/rhinocommon/rhino/docobjects/detailviewobject/) AddDetailView(string title,Point2d corner0,Point2d corner1,DefinedViewportProjection initialProjection)
: Creates a detail view object that is displayed on this page and adds it to the doc.
: Returns - Newly created detail view on success. None on error.

RhinoPageView Duplicate(bool duplicatePageGeometry)
: Copy a page view
: since 6.3

[DetailViewObject](/rhinocommon/rhino/docobjects/detailviewobject/)[] GetDetailViews()
: Gets a list of the detail view objects associated with this layout.
: Returns - An array of detail view objects if successful, an empty array if the layout has no details.

System.Drawing.Bitmap GetPreviewImage(Size size,bool grayScale)
: Creates a preview image of the page.
: Returns - A bitmap if successful, None othewise.
: since 7.0

bool SetActiveDetail(Guid detailId)
: 

bool SetActiveDetail(string detailName,bool compareCase)
: 

void SetPageAsActive()
: 
