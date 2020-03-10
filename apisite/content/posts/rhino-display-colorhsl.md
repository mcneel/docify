---
title: "Rhino.Display.ColorHSL"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Display.ColorHSL(Color rgb)
- (summary) 
     Constructs a new instance of ColorHSL that is equivalent to an RGB color.
     
- (since) 5.0
## Rhino.Display.ColorHSL(double hue,double saturation,double luminance)
- (summary) 
     Constructs a new instance of ColorHSL with custom channel values.
     
- (since) 5.0
## Rhino.Display.ColorHSL(double alpha,double hue,double saturation,double luminance)
- (summary) 
     Constructs a new instance of ColorHSL with custom channel values.
     
- (since) 5.0
# Properties
## double A
- (summary) 
     Gets or sets the alpha channel value. 
     Alpha channels are limited to a 0~1 range.
     
- (since) 5.0
## double H
- (summary) 
     Gets or sets the hue channel value. 
     Hue channels rotate between 0.0 and 1.0.
     
- (since) 5.0
## double L
- (summary) 
     Gets or sets the luminance channel value. 
     Luminance channels are limited to a 0~1 range.
     
- (since) 5.0
## double S
- (summary) 
     Gets or sets the saturation channel value. 
     Saturation channels are limited to a 0~1 range.
     
- (since) 5.0
# Methods
## static ColorHSL CreateFromCMYK(ColorCMYK cmyk)
- (summary) 
     Create the nearest HSL equivalent of a CMYK color.
     
- (since) 5.0
- (returns) ColorHSL This is some return comment
## static ColorHSL CreateFromHSV(ColorHSV hsv)
- (summary) 
     Constructs the nearest HSL equivalent of an HSV color.
     
- (since) 6.0
- (returns) ColorHSL This is some return comment
## static ColorHSL CreateFromLAB(ColorLAB lab)
- (summary) 
     Create the nearest HSL equivalent of a LAB color.
     
- (since) 5.0
- (returns) ColorHSL This is some return comment
## static ColorHSL CreateFromLCH(ColorLCH lch)
- (summary) 
     Create the nearest HSL equivalent of a LCH color.
     
- (since) 5.0
- (returns) ColorHSL This is some return comment
## static ColorHSL CreateFromXYZ(ColorXYZ xyz)
- (summary) 
     Create the nearest HSL equivalent of an XYZ color.
     
- (since) 5.0
- (returns) ColorHSL This is some return comment
## System.Drawing.Color ToArgbColor()
- (summary) 
     Convert HSL color to an equivalent System.Drawing.Color.
     
- (since) 5.0
- (returns) System.Drawing.Color This is some return comment
