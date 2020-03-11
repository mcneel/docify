---
title: "ColorLAB"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents a LAB (Lightness, A, B) color with double precision floating point channels. 
   LAB colors are based on nonlinearly compressed CIE XYZ color space coordinates.  
   The A and B parameters of a LAB color represent the opponents.
## Constructors

ColorLAB(Color rgb)
: Constructs a new instance of ColorLAB that is equivalent to an RGB color.

ColorLAB(double lightness,double a,double b)
: Constructs a new instance of ColorLAB with custom channel values.

ColorLAB(double alpha,double lightness,double a,double b)
: Constructs a new instance of ColorLAB with custom channel values.
## Properties

double A
: Gets or sets the Base channel. The channel is limited to 0~1.

double Alpha
: Gets or sets the Alpha channel. The channel is limited to 0~1.

double B
: Gets or sets the Opponent channel. The channel is limited to 0~1.

double L
: Gets or sets the lightness channel. The channel is limited to 0~1.
## Methods

static ColorLAB CreateFromCMYK(ColorCMYK cmyk)
: Create the nearest LAB equivalent of a CMYK color.
: Returns - The LAB equivalent of the CMYK color.

static ColorLAB CreateFromHSL(ColorHSL hsl)
: Create the nearest LAB equivalent of an HSL color.
: Returns - The LAB equivalent of the HSL color.

static ColorLAB CreateFromHSV(ColorHSV hsv)
: Constructs the nearest LAB equivalent of an HSV color.
: Returns - The LAB equivalent of the HSV color.
: since 6.0

static ColorLAB CreateFromLCH(ColorLCH lch)
: Create the nearest LAB equivalent of an LCH color.
: Returns - The LAB equivalent of the LCH color.

static ColorLAB CreateFromXYZ(ColorXYZ xyz)
: Create the nearest LAB equivalent of an XYZ color.
: Returns - The LAB equivalent of the XYZ color.
