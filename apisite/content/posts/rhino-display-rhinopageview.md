---
title: "Rhino.Display.RhinoPageView"
date: 2020-03-10 09:24:56Z
draft: false
---

# Events
## static PageViewSpaceChange
- (summary) 
- (since) 5.0
# Properties
## RhinoViewport ActiveViewport
- (summary) 
     The ActiveViewport is the same as the MainViewport for standard RhinoViews. In
     a RhinoPageView, the active viewport may be the RhinoViewport of a child detail object.
     Most of the time, you will use ActiveViewport unless you explicitly need to work with
     the main viewport.
     
- (since) 5.0
## double PageHeight
- (summary) 
     Height of the page in the document's PageUnitSystem
     
- (since) 5.10
## bool PageIsActive
- (summary) 
     True if the page is active instead of any detail views. This occurs
     when the MainViewport.Id == ActiveViewportID.
     
- (since) 5.0
## string PageName
- (summary) Same as the MainViewport.Name.
- (since) 5.0
## int PageNumber
- (summary) 
     Gets or sets the runtime page number and updates the page number for all
     of the other pages. The first page has a value of 0.
     
- (since) 5.0
## double PageWidth
- (summary) 
     Width of the page in the document's PageUnitSystem
     
- (since) 5.10
## string PaperName
- (summary) 
     Returns the name of the layout's media, or paper (e.g. Letter, Legal, A1, etc.),
     used to determine the page width and page height.
     
- (since) 6.15
## string PrinterName
- (summary) 
     Returns the name of the layout's destination printer.
     
- (since) 6.15
# Methods
## DetailViewObject AddDetailView(string title,Point2d corner0,Point2d corner1,DefinedViewportProjection initialProjection)
- (summary) 
     Creates a detail view object that is displayed on this page and adds it to the doc.
     
- (since) 5.0
- (returns) DetailViewObject This is some return comment
## RhinoPageView Duplicate(bool duplicatePageGeometry)
- (summary)  Copy a page view 
- (since) 6.3
- (returns) RhinoPageView This is some return comment
## DetailViewObject[] GetDetailViews()
- (summary) 
     Gets a list of the detail view objects associated with this layout.
     
- (since) 5.0
- (returns) DetailViewObject[] This is some return comment
## System.Drawing.Bitmap GetPreviewImage(Size size,bool grayScale)
- (summary) 
     Creates a preview image of the page.
     
- (since) 7.0
- (returns) System.Drawing.Bitmap This is some return comment
## bool SetActiveDetail(Guid detailId)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetActiveDetail(string detailName,bool compareCase)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void SetPageAsActive()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
