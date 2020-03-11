---
title: "ColorHSV"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents an HSV (Hue, Saturation, Value) color with double precision floating point channels. 
   HSV colors (also sometimes called HSB, where B means Brightness) are similar to HSL colors in that they
   represent colors in a cylindrical color space, and are intended to provide intuitive means to edit the 
   brightness of a particular color over RGB color space where each each color channel would need to be 
   modified to affect the color brightness.
## Constructors

ColorHSV(Color rgb)
: Constructs a new instance of ColorHSV that is equivalent to an RGB color.
: since 6.0

ColorHSV(double hue,double saturation,double value)
: Constructs a new instance of ColorHSV with custom channel values.
: since 6.0

ColorHSV(double alpha,double hue,double saturation,double value)
: Constructs a new instance of ColorHSV with custom channel values.
: since 6.0
## Properties

double A
: Gets or sets the alpha channel value. 
     Alpha channels are limited to a 0~1 range.
: since 6.0

double H
: Gets or sets the hue channel value. 
     Hue channels rotate between 0.0 and 1.0.
: since 6.0

double S
: Gets or sets the saturation channel value. 
     Saturation channels are limited to a 0~1 range.
: since 6.0

double V
: Gets or sets the value (brightness) channel value. 
     Value channels are limited to a 0~1 range.
: since 6.0
## Methods

static ColorHSV CreateFromCMYK(ColorCMYK cmyk)
: Create the nearest HSV equivalent of a CMYK color.
: Returns - The HSV equivalent of the CMYK color.
: since 6.0

static ColorHSV CreateFromHSL(ColorHSL hsl)
: Constructs the nearest CMYK equivalent of an HSV color.
: Returns - The HSV equivalent of the HSL color.
: since 6.0

static ColorHSV CreateFromLAB(ColorLAB lab)
: Create the nearest HSV equivalent of a LAB color.
: Returns - The HSV equivalent of the LAB color.
: since 6.0

static ColorHSV CreateFromLCH(ColorLCH lch)
: Create the nearest HSV equivalent of a LCH color.
: Returns - The HSV equivalent of the LCH color.
: since 6.0

static ColorHSV CreateFromXYZ(ColorXYZ xyz)
: Create the nearest HSV equivalent of an XYZ color.
: Returns - The HSV equivalent of the XYZ color.
: since 6.0

System.Drawing.Color ToArgbColor()
: Convert HSV color to an equivalent System.Drawing.Color.
: Returns - A .Net framework library color value.
: since 6.0
