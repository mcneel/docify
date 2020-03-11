---
title: "ColorHSL"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents an HSL (Hue, Saturation, Luminance) color with double precision floating point channels. 
   HSL colors are used primarily in Graphical User Interface environments as they provide a 
   very natural approach to picking colors.
## Constructors

ColorHSL(Color rgb)
: Constructs a new instance of ColorHSL that is equivalent to an RGB color.

ColorHSL(double hue,double saturation,double luminance)
: Constructs a new instance of ColorHSL with custom channel values.

ColorHSL(double alpha,double hue,double saturation,double luminance)
: Constructs a new instance of ColorHSL with custom channel values.
## Properties

double A
: Gets or sets the alpha channel value. 
     Alpha channels are limited to a 0~1 range.

double H
: Gets or sets the hue channel value. 
     Hue channels rotate between 0.0 and 1.0.

double L
: Gets or sets the luminance channel value. 
     Luminance channels are limited to a 0~1 range.

double S
: Gets or sets the saturation channel value. 
     Saturation channels are limited to a 0~1 range.
## Methods

static ColorHSL CreateFromCMYK(ColorCMYK cmyk)
: Create the nearest HSL equivalent of a CMYK color.
: Returns - The HSL equivalent of the CMYK color.

static ColorHSL CreateFromHSV(ColorHSV hsv)
: Constructs the nearest HSL equivalent of an HSV color.
: Returns - The HSL equivalent of the HSV color.
: since 6.0

static ColorHSL CreateFromLAB(ColorLAB lab)
: Create the nearest HSL equivalent of a LAB color.
: Returns - The HSL equivalent of the LAB color.

static ColorHSL CreateFromLCH(ColorLCH lch)
: Create the nearest HSL equivalent of a LCH color.
: Returns - The HSL equivalent of the LCH color.

static ColorHSL CreateFromXYZ(ColorXYZ xyz)
: Create the nearest HSL equivalent of an XYZ color.
: Returns - The HSL equivalent of the XYZ color.

System.Drawing.Color ToArgbColor()
: Convert HSL color to an equivalent System.Drawing.Color.
: Returns - A .Net framework library color value.
