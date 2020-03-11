---
title: "RhinoView"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

A RhinoView represents a single "window" display of a document. A view could
   contain one or many RhinoViewports (many in the case of Layout views with detail viewports).
   Standard Rhino modeling views have one viewport.
```cs
public class RhinoView
```
## Events

static Create
: 

static Destroy
: 

static Modified
: 
: since 7.0

static Rename
: 

static SetActive
: 
## Properties

static bool EnableDrawing
: Gets or sets the 'drawing enabled' flag. By default, drawing is enabled.
     There are some rare situations where scipts want to disable drawing for a while.

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) ActiveViewport
: The ActiveViewport is the same as the MainViewport for standard RhinoViews. In
     a RhinoPageView, the active viewport may be the RhinoViewport of a child detail object.
     Most of the time, you will use ActiveViewport unless you explicitly need to work with
     the main viewport.

Guid ActiveViewportID
: Returns viewport ID for the active viewport. Faster than ActiveViewport function when
     working with page views.

Rectangle Bounds
: Gets the size and location of the view including its nonclient elements, in pixels, relative to the parent control.

Rectangle ClientRectangle
: Gets the rectangle that represents the client area of the view.

[DisplayPipeline](/rhinocommon/rhino/display/displaypipeline/) DisplayPipeline
: Gets the display pipeline used for this view.
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 

bool Floating
: Floating state of RhinoView.
     if true, then the view will be in a floating frame window. Otherwise
     the view will be embeded in the main frame.

IntPtr Handle
: Gets the window handle that this view is bound to.

bool IsPageView
: Return True if this view is a RhinoPageView.
: since 7.0

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) MainViewport
: A RhinoView contains a "main viewport" that fills the entire view client window.
     RhinoPageViews may also contain nested child RhinoViewports for implementing
     detail viewports.
     The MainViewport will always return this RhinoView's m_vp.

bool Maximized
: 

[RealtimeDisplayMode](/rhinocommon/rhino/render/realtimedisplaymode/) RealtimeDisplayMode
: Gets the RealtimeDisplayMode active for this view. None if the view doesn't have a RealtimeDisplayMode set.
: since 6.0

uint RuntimeSerialNumber
: 
: since 6.0

Rectangle ScreenRectangle
: Gets the rectangle that represents the client area of the view in screen coordinates.

Size Size
: Gets or sets the size of the view
: since 6.0

bool TitleVisible
: Visibility of the viewport title window.
## Methods

static RhinoView FromRuntimeSerialNumber(uint serialNumber)
: Get a RhinoView from it's unique runtime serial number
: Returns - RhinoView or None if no view exists for a given serial number
: since 6.0

System.Drawing.Bitmap CaptureToBitmap()
: Capture View contents to a bitmap.
: Returns - The bitmap of the complete view.

System.Drawing.Bitmap CaptureToBitmap(bool grid,bool worldAxes,bool cplaneAxes)
: Captures the view contents to a bitmap allowing for visibility of grid and axes.
: Returns - A new bitmap.

System.Drawing.Bitmap CaptureToBitmap(DisplayModeDescription mode)
: Capture View contents to a bitmap using a display mode description to define
     how drawing is performed.
: Returns - A new bitmap.

System.Drawing.Bitmap CaptureToBitmap(DisplayPipelineAttributes attributes)
: Captures view contents to a bitmap using display attributes to define how
     drawing is performed.
: Returns - A new bitmap.

System.Drawing.Bitmap CaptureToBitmap(Size size)
: Capture View contents to a bitmap.
: Returns - The bitmap of the specified part of the view.

System.Drawing.Bitmap CaptureToBitmap(Size size,bool grid,bool worldAxes,bool cplaneAxes)
: Captures a part of the view contents to a bitmap allowing for visibility of grid and axes.
: Returns - A new bitmap.

System.Drawing.Bitmap CaptureToBitmap(Size size,DisplayModeDescription mode)
: Capture View contents to a bitmap using a display mode description to define
     how drawing is performed.
: Returns - A new bitmap.

System.Drawing.Bitmap CaptureToBitmap(Size size,DisplayPipelineAttributes attributes)
: Capture View contents to a bitmap using display attributes to define how
     drawing is performed.
: Returns - A new bitmap.

System.Drawing.Point ClientToScreen(Point clientPoint)
: 

Geometry.Point2d ClientToScreen(Point2d clientPoint)
: 

bool Close()
: Remove this View from Rhino. DO NOT attempt to use this instance of this
     class after calling Close.
: Returns - True on success

bool CreateShadedPreviewImage(string imagePath,Size size,bool ignoreHighlights,bool drawConstructionPlane,bool useGhostedShading)
: Creates a bitmap preview image of model.
: Returns - True if successful.

bool CreateWireframePreviewImage(string imagePath,Size size,bool ignoreHighlights,bool drawConstructionPlane)
: Creates a bitmap preview image of model.
: Returns - True if successful.

bool Equals(object obj)
: 
: since (unknown)

int GetHashCode()
: 
: since (unknown)

bool MouseCaptured(bool bIncludeMovement)
: Returns whether or not the mouse is captured in this view.
: Returns - True if captured, False otherwise.
: since 6.0

void Redraw()
: Redraws this view.

System.Drawing.Point ScreenToClient(Point screenPoint)
: Converts a point in screen coordinates to client coordinates for this view.
: Returns - A 2D point in client coordinates.

Geometry.Point2d ScreenToClient(Point2d screenPoint)
: 
: since 5.8

double SpeedTest(int frameCount,bool freezeDrawList,int direction,double angleDeltaRadians)
: 
: since 5.8
