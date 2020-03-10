---
title: "Rhino.Display.ColorLAB"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Display.ColorLAB(Color rgb)
- (summary) 
     Constructs a new instance of ColorLAB that is equivalent to an RGB color.
     
- (since) 5.0
## Rhino.Display.ColorLAB(double lightness,double a,double b)
- (summary) 
     Constructs a new instance of ColorLAB with custom channel values.
     
- (since) 5.0
## Rhino.Display.ColorLAB(double alpha,double lightness,double a,double b)
- (summary) 
     Constructs a new instance of ColorLAB with custom channel values.
     
- (since) 5.0
# Properties
## double A
- (summary) 
     Gets or sets the Base channel. The channel is limited to 0~1.
     
- (since) 5.0
## double Alpha
- (summary) 
     Gets or sets the Alpha channel. The channel is limited to 0~1.
     
- (since) 5.0
## double B
- (summary) 
     Gets or sets the Opponent channel. The channel is limited to 0~1.
     
- (since) 5.0
## double L
- (summary) 
     Gets or sets the lightness channel. The channel is limited to 0~1.
     
- (since) 5.0
# Methods
## static ColorLAB CreateFromCMYK(ColorCMYK cmyk)
- (summary) 
     Create the nearest LAB equivalent of a CMYK color.
     
- (since) 5.0
- (returns) ColorLAB This is some return comment
## static ColorLAB CreateFromHSL(ColorHSL hsl)
- (summary) 
     Create the nearest LAB equivalent of an HSL color.
     
- (since) 5.0
- (returns) ColorLAB This is some return comment
## static ColorLAB CreateFromHSV(ColorHSV hsv)
- (summary) 
     Constructs the nearest LAB equivalent of an HSV color.
     
- (since) 6.0
- (returns) ColorLAB This is some return comment
## static ColorLAB CreateFromLCH(ColorLCH lch)
- (summary) 
     Create the nearest LAB equivalent of an LCH color.
     
- (since) 5.0
- (returns) ColorLAB This is some return comment
## static ColorLAB CreateFromXYZ(ColorXYZ xyz)
- (summary) 
     Create the nearest LAB equivalent of an XYZ color.
     
- (since) 5.0
- (returns) ColorLAB This is some return comment
