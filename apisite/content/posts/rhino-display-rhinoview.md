---
title: "Rhino.Display.RhinoView"
date: 2020-03-10 09:24:56Z
draft: false
---

# Events
## static Create
- (summary) 
- (since) 5.0
## static Destroy
- (summary) 
- (since) 5.0
## static Modified
- (summary) 
- (since) 7.0
## static Rename
- (summary) 
- (since) 5.0
## static SetActive
- (summary) 
- (since) 5.0
# Properties
## static bool EnableDrawing
- (summary) 
     Gets or sets the 'drawing enabled' flag. By default, drawing is enabled.
     There are some rare situations where scipts want to disable drawing for a while.
- (since) 5.0
## RhinoViewport ActiveViewport
- (summary) 
     The ActiveViewport is the same as the MainViewport for standard RhinoViews. In
     a RhinoPageView, the active viewport may be the RhinoViewport of a child detail object.
     Most of the time, you will use ActiveViewport unless you explicitly need to work with
     the main viewport.
     
- (since) 5.0
## Guid ActiveViewportID
- (summary) 
     Returns viewport ID for the active viewport. Faster than ActiveViewport function when
     working with page views.
     
- (since) 5.0
## System.Drawing.Rectangle Bounds
- (summary) 
     Gets the size and location of the view including its nonclient elements, in pixels, relative to the parent control.
     
- (since) 5.0
## System.Drawing.Rectangle ClientRectangle
- (summary) 
     Gets the rectangle that represents the client area of the view. 
     
- (since) 5.0
## DisplayPipeline DisplayPipeline
- (summary) 
     Gets the display pipeline used for this view.
     
- (since) 6.0
## RhinoDoc Document
- (summary) 
- (since) 5.0
## bool Floating
- (summary) 
     Floating state of RhinoView.
     if true, then the view will be in a floating frame window. Otherwise
     the view will be embeded in the main frame.
     
- (since) 5.0
## IntPtr Handle
- (summary) 
     Gets the window handle that this view is bound to.
     
- (since) 5.0
## bool IsPageView
- (summary) 
     Return True if this view is a RhinoPageView.
     
- (since) 7.0
## RhinoViewport MainViewport
- (summary) 
     A RhinoView contains a "main viewport" that fills the entire view client window.
     RhinoPageViews may also contain nested child RhinoViewports for implementing
     detail viewports.
     The MainViewport will always return this RhinoView's m_vp.
     
- (since) 5.0
## bool Maximized
- (summary) 
- (since) 5.0
## RealtimeDisplayMode RealtimeDisplayMode
- (summary) 
     Gets the RealtimeDisplayMode active for this view. None if the view doesn't have a RealtimeDisplayMode set.
     
- (since) 6.0
## uint RuntimeSerialNumber
- (summary) 
- (since) 6.0
## System.Drawing.Rectangle ScreenRectangle
- (summary) 
     Gets the rectangle that represents the client area of the view in screen coordinates.
     
- (since) 5.0
## System.Drawing.Size Size
- (summary) 
     Gets or sets the size of the view
     
- (since) 6.0
## bool TitleVisible
- (summary) 
     Visibility of the viewport title window.
     
- (since) 5.0
# Methods
## static RhinoView FromRuntimeSerialNumber(uint serialNumber)
- (summary) 
     Get a RhinoView from it's unique runtime serial number
     
- (since) 6.0
- (returns) RhinoView This is some return comment
## System.Drawing.Bitmap CaptureToBitmap()
- (summary) 
     Capture View contents to a bitmap.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(bool grid,bool worldAxes,bool cplaneAxes)
- (summary) 
     Captures the view contents to a bitmap allowing for visibility of grid and axes.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(DisplayModeDescription mode)
- (summary) 
     Capture View contents to a bitmap using a display mode description to define
     how drawing is performed.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(DisplayPipelineAttributes attributes)
- (summary) 
     Captures view contents to a bitmap using display attributes to define how
     drawing is performed.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(Size size)
- (summary) 
     Capture View contents to a bitmap.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(Size size,bool grid,bool worldAxes,bool cplaneAxes)
- (summary) 
     Captures a part of the view contents to a bitmap allowing for visibility of grid and axes.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(Size size,DisplayModeDescription mode)
- (summary) 
     Capture View contents to a bitmap using a display mode description to define
     how drawing is performed.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CaptureToBitmap(Size size,DisplayPipelineAttributes attributes)
- (summary) 
     Capture View contents to a bitmap using display attributes to define how
     drawing is performed.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Point ClientToScreen(Point clientPoint)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## Geometry.Point2d ClientToScreen(Point2d clientPoint)
- (summary) 
- (since) 5.0
- (returns) Geometry.Point2d This is some return comment
## bool Close()
- (summary) 
     Remove this View from Rhino. DO NOT attempt to use this instance of this
     class after calling Close.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool CreateShadedPreviewImage(string imagePath,Size size,bool ignoreHighlights,bool drawConstructionPlane,bool useGhostedShading)
- (summary) Creates a bitmap preview image of model.
- (since) 5.0
- (returns) bool This is some return comment
## bool CreateWireframePreviewImage(string imagePath,Size size,bool ignoreHighlights,bool drawConstructionPlane)
- (summary) Creates a bitmap preview image of model.
- (since) 5.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
- (since) (unknown)
- (returns) int This is some return comment
## bool MouseCaptured(bool bIncludeMovement)
- (summary) 
     Returns whether or not the mouse is captured in this view.
     
- (since) 6.0
- (returns) bool This is some return comment
## void Redraw()
- (summary) Redraws this view.
- (since) 5.0
- (returns) void This is some return comment
## System.Drawing.Point ScreenToClient(Point screenPoint)
- (summary) 
     Converts a point in screen coordinates to client coordinates for this view.
     
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## Geometry.Point2d ScreenToClient(Point2d screenPoint)
- (summary) 
- (since) 5.8
- (returns) Geometry.Point2d This is some return comment
## double SpeedTest(int frameCount,bool freezeDrawList,int direction,double angleDeltaRadians)
- (summary) 
- (since) 5.8
- (returns) double This is some return comment
