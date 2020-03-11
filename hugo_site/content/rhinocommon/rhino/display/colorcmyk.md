---
title: "ColorCMYK"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents a CMYK (Cyan, Magenta, Yellow, Key) color with double precision floating point channels. 
   CMYK colors are used primarily in printing environments as they provide a good simulation of physical ink.
## Constructors

ColorCMYK(Color rgb)
: Initializes a new instance of ColorCMYK that is equivalent to an RGB color.

ColorCMYK(double cyan,double magenta,double yellow)
: Initializes a new instance of ColorCMYK with custom channel values. 
     The cyan, magenta and yellow values will be adjusted based on their 
     combined darkness.

ColorCMYK(double cyan,double magenta,double yellow,double key)
: Initializes a new instance of ColorCMYK with custom channel values.

ColorCMYK(double alpha,double cyan,double magenta,double yellow,double key)
: Initializes a new instance of ColorCMYK with custom channel values.
## Properties

double A
: Gets or sets the Alpha channel value. 
     Alpha channels are limited to the 0~1 range.

double C
: Gets or sets the Cyan channel value. 
     Cyan channels are limited to the 0~1 range.

double K
: Gets or sets the Key channel value. 
     Key channels are limited to the 0~1 range.

double M
: Gets or sets the Magenta channel value. 
     Magenta channels are limited to the 0~1 range.

double Y
: Gets or sets the Yellow channel value. 
     Yellow channels are limited to the 0~1 range.
## Methods

static ColorCMYK CreateFromHSL(ColorHSL hsl)
: Constructs the nearest CMYK equivalent of an HSL color.
: Returns - The CMYK equivalent of the HSL color.

static ColorCMYK CreateFromHSV(ColorHSV hsv)
: Constructs the nearest CMYK equivalent of an HSV color.
: Returns - The CMYK equivalent of the HSV color.
: since 6.0

static ColorCMYK CreateFromLAB(ColorLAB lab)
: Constructs the nearest CMYK equivalent of a LAB color.
: Returns - The CMYK equivalent of the LAB color.

static ColorCMYK CreateFromLCH(ColorLCH lch)
: Constructs the nearest CMYK equivalent of a LCH color.
: Returns - The CMYK equivalent of the LCH color.

static ColorCMYK CreateFromXYZ(ColorXYZ xyz)
: Constructs the nearest CMYK equivalent of an XYZ color.
: Returns - The CMYK equivalent of the XYZ color.
