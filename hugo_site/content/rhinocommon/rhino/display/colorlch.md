---
title: "ColorLCH"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents an LCH (Lightness, A, B) color with double precision floating point channels. 
   LCH colors (also sometimes called CIELUV) are transformation of the 1931 CIE XYZ color space, 
   in order to approach perceptual uniformity. They are primarily used in computer graphics which 
   deal with colored lights.
## Constructors

ColorLCH(Color rgb)
: Constructs a new instance of ColorLCH that is equivalent to an RGB color.

ColorLCH(double lightness,double chroma,double hue)
: Constructs a new instance of ColorLCH with custom channel values.

ColorLCH(double alpha,double lightness,double chroma,double hue)
: Constructs a new instance of ColorLCH with custom channel values.
## Properties

double A
: Gets or sets the Alpha channel. The Alpha channel is limited to the 0~1 range.

double C
: Gets or sets the Chroma channel. Chroma is defined from -1.0 to +1.0.

double H
: Gets or sets the Hue channel. The hue channel is limited to the 0~360 degree range.

double L
: Gets or sets the Lightness channel.
## Methods

static ColorLCH CreateFromCMYK(ColorCMYK cmyk)
: Create the nearest LCH equivalent of a CMYK color.
: Returns - The LCH equivalent of the CMYK color.

static ColorLCH CreateFromHSL(ColorHSL hsl)
: Create the nearest LCH equivalent of an HSL color.
: Returns - The LCH equivalent of the HSL color.

static ColorLCH CreateFromLAB(ColorLAB lab)
: Create the nearest LCH equivalent of a LAB color.
: Returns - The LCH equivalent of the LAB color.

static ColorLCH CreateFromXYZ(ColorXYZ xyz)
: Create the nearest LCH equivalent of an XYZ color.
: Returns - The LCH equivalent of the XYZ color.

void MakePositive()
: Ensure the Chromaticity of this color is positive.
