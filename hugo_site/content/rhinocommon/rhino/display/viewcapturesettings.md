---
title: "ViewCaptureSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Used to hold the information required to generate high resolution output
   of a RhinoViewport.  This is used for generating paper prints or image files
```cs
public class ViewCaptureSettings : IDisposable
```
## Constructors

ViewCaptureSettings()
: 
: since 6.0

ViewCaptureSettings(RhinoPageView sourcePageView,double dpi)
: 
: since 6.0

ViewCaptureSettings(RhinoView sourceView,Size mediaSize,double dpi)
: 
: since 6.0
## Properties

double ArrowheadSizeMillimeters
: arrowhead size in millimeters
: since 6.15

Rectangle CropRectangle
: Actual area of output rectangle that view capture is sent to.
: since 6.0

double DefaultPrintWidthMillimeters
: Line thickness used to print objects with no defined thickness (in mm)
: since 6.15

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 
: since 6.15

bool DrawAxis
: 
: since 6.0

bool DrawBackground
: 
: since 6.0

bool DrawBackgroundBitmap
: 
: since 6.2

bool DrawClippingPlanes
: 
: since 6.0

bool DrawGrid
: 
: since 6.0

bool DrawLights
: 
: since 6.0

bool DrawLockedObjects
: 
: since 6.0

bool DrawMargins
: 
: since 6.0

bool DrawSelectedObjectsOnly
: 
: since 6.0

bool DrawWallpaper
: 
: since 6.2

bool IsScaleToFit
: Returns True if the model has been scaled to fit.
: since 6.21

bool IsValid
: 
: since 6.0

Size MediaSize
: Total size of the image or page in dots
: since 6.0

int ModelScaleType
: 
: since 6.21

[AnchorLocation](/rhinocommon/rhino/display/viewcapturesettings/anchorlocation/) OffsetAnchor
: 
: since 6.2

[ColorMode](/rhinocommon/rhino/display/viewcapturesettings/colormode/) OutputColor
: 
: since 6.8

double PointSizeMillimeters
: size of point objects in millimeters
     if scale <= 0 the size is minimized so points are always drawn as small as possible
: since 6.15

bool RasterMode
: 
: since 6.17

double Resolution
: Capture "density" in dots per inch
: since 6.0

bool UsePrintWidths
: 
: since 6.15

double WireThicknessScale
: scaling factor to apply to object print widths (typically 1.0). This is
     helpful when printing something at 1/2 scale and having all of the curves
     print 1/2 as thick
: since 6.15
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

bool GetMargins(UnitSystem lengthUnits,double left,double top,double right,double bottom)
: Get distances from the edge of the paper (MediaSize) to the CropRectangle
     in a defined unit system
: Returns - True if successful.
     False if unsuccessful (this could happen if there is no set device_dpi)
: since 6.2

double GetModelScale(UnitSystem pageUnits,UnitSystem modelUnits)
: Returns the model scale factor.
: Returns - The model scale factor.
: since 6.21

void GetOffset(UnitSystem lengthUnits,bool fromMargin,double x,double y)
: 
: since 6.2

void SetLayout(Size mediaSize,Rectangle cropRectangle)
: 
: since 6.0

bool SetMargins(UnitSystem lengthUnits,double left,double top,double right,double bottom)
: Set distances from the edge of the paper (MediaSize) to the CropRectange
     in a defined unit system
: Returns - True if successful.
     False if unsuccessful (this could happen if there is no set device_dpi)
: since 6.2

void SetModelScaleToFit(bool promptOnChange)
: Scales the model to fit.
: since 6.21

void SetModelScaleToValue(double scale)
: Sets the model scale to a value.
: since 6.21

void SetOffset(UnitSystem lengthUnits,bool fromMargin,double x,double y)
: 
: since 6.2

void SetViewport(RhinoViewport viewport)
: 
: since 6.15
