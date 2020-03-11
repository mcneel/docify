---
title: "ColorXYZ"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents an XYZ (Hue, Saturation, Luminance) color with double precision floating point channels. 
   XYZ colors are based on the CIE 1931 XYZ color space standard and they mimic the natural 
   sensitivity of cones in the human retina.
## Constructors

ColorXYZ(Color rgb)
: Constructs a new instance of ColorXYZ that is equivalent to an RGB color.

ColorXYZ(double x,double y,double z)
: Constructs a new instance of ColorXYZ with custom channel values.

ColorXYZ(double alpha,double x,double y,double z)
: Constructs a new instance of ColorXYZ with custom channel values.
## Properties

double A
: Gets or set the Alpha channel value. Channel will be limited to 0~1.

double X
: Gets or set the X channel value. Channel will be limited to 0~1.

double Y
: Gets or set the Y channel value. Channel will be limited to 0~1.

double Z
: Gets or set the Z channel value. Channel will be limited to 0~1.
## Methods

static ColorXYZ CreateFromCMYK(ColorCMYK cmyk)
: Create the nearest XYZ equivalent of a CMYK color.
: Returns - The XYZ equivalent of the CMYK color.

static ColorXYZ CreateFromHSL(ColorHSL hsl)
: Create the nearest XYZ equivalent of an HSL color.
: Returns - The XYZ equivalent of the HSL color.

static ColorXYZ CreateFromHSV(ColorHSV hsv)
: Constructs the nearest XYZ equivalent of an HSV color.
: Returns - The XYZ equivalent of the HSV color.
: since 6.0

static ColorXYZ CreateFromLAB(ColorLAB lab)
: Create the nearest XYZ equivalent of a Lab color.
: Returns - The XYZ equivalent of the LAB color.

static ColorXYZ CreateFromLCH(ColorLCH lch)
: Create the nearest XYZ equivalent of an LCH color.
: Returns - The XYZ equivalent of the LCH color.
