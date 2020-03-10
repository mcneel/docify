---
title: "Rhino.Display.ViewCaptureSettings"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Display.ViewCaptureSettings()
- (summary) 
- (since) 6.0
## Rhino.Display.ViewCaptureSettings(RhinoPageView sourcePageView,double dpi)
- (summary) 
- (since) 6.0
## Rhino.Display.ViewCaptureSettings(RhinoView sourceView,Size mediaSize,double dpi)
- (summary) 
- (since) 6.0
# Properties
## double ArrowheadSizeMillimeters
- (summary) 
     arrowhead size in millimeters
     
- (since) 6.15
## Rectangle CropRectangle
- (summary)  Actual area of output rectangle that view capture is sent to. 
- (since) 6.0
## double DefaultPrintWidthMillimeters
- (summary) 
     Line thickness used to print objects with no defined thickness (in mm)
     
- (since) 6.15
## RhinoDoc Document
- (summary) 
- (since) 6.15
## bool DrawAxis
- (summary) 
- (since) 6.0
## bool DrawBackground
- (summary) 
- (since) 6.0
## bool DrawBackgroundBitmap
- (summary) 
- (since) 6.2
## bool DrawClippingPlanes
- (summary) 
- (since) 6.0
## bool DrawGrid
- (summary) 
- (since) 6.0
## bool DrawLights
- (summary) 
- (since) 6.0
## bool DrawLockedObjects
- (summary) 
- (since) 6.0
## bool DrawMargins
- (summary) 
- (since) 6.0
## bool DrawSelectedObjectsOnly
- (summary) 
- (since) 6.0
## bool DrawWallpaper
- (summary) 
- (since) 6.2
## bool IsScaleToFit
- (summary) 
     Returns True if the model has been scaled to fit.
     
- (since) 6.21
## bool IsValid
- (summary) 
- (since) 6.0
## Size MediaSize
- (summary)  Total size of the image or page in dots 
- (since) 6.0
## int ModelScaleType
- (summary) 
- (since) 6.21
## AnchorLocation OffsetAnchor
- (summary) 
- (since) 6.2
## ColorMode OutputColor
- (summary) 
- (since) 6.8
## double PointSizeMillimeters
- (summary) 
     size of point objects in millimeters
     if scale <= 0 the size is minimized so points are always drawn as small as possible
     
- (since) 6.15
## bool RasterMode
- (summary) 
- (since) 6.17
## double Resolution
- (summary)  Capture "density" in dots per inch 
- (since) 6.0
## bool UsePrintWidths
- (summary) 
- (since) 6.15
## double WireThicknessScale
- (summary) 
     scaling factor to apply to object print widths (typically 1.0). This is
     helpful when printing something at 1/2 scale and having all of the curves
     print 1/2 as thick
     
- (since) 6.15
# Methods
## void Dispose()
- (summary) Actively reclaims unmanaged resources that this instance uses.
- (since) 6.0
- (returns) void This is some return comment
## bool GetMargins(UnitSystem lengthUnits,double left,double top,double right,double bottom)
- (summary) 
     Get distances from the edge of the paper (MediaSize) to the CropRectangle
     in a defined unit system
     
- (since) 6.2
- (returns) bool This is some return comment
## double GetModelScale(UnitSystem pageUnits,UnitSystem modelUnits)
- (summary) 
     Returns the model scale factor.
     
- (since) 6.21
- (returns) double This is some return comment
## void GetOffset(UnitSystem lengthUnits,bool fromMargin,double x,double y)
- (summary) 
- (since) 6.2
- (returns) void This is some return comment
## void SetLayout(Size mediaSize,Rectangle cropRectangle)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## bool SetMargins(UnitSystem lengthUnits,double left,double top,double right,double bottom)
- (summary) 
     Set distances from the edge of the paper (MediaSize) to the CropRectange
     in a defined unit system
     
- (since) 6.2
- (returns) bool This is some return comment
## void SetModelScaleToFit(bool promptOnChange)
- (summary) 
     Scales the model to fit.
     
- (since) 6.21
- (returns) void This is some return comment
## void SetModelScaleToValue(double scale)
- (summary) 
     Sets the model scale to a value.
     
- (since) 6.21
- (returns) void This is some return comment
## void SetOffset(UnitSystem lengthUnits,bool fromMargin,double x,double y)
- (summary) 
- (since) 6.2
- (returns) void This is some return comment
## void SetViewport(RhinoViewport viewport)
- (summary) 
- (since) 6.15
- (returns) void This is some return comment
