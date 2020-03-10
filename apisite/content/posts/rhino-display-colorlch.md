---
title: "ColorLCH"
draft: false
---

*Namespace: Rhino.Display*

   Represents an LCH (Lightness, A, B) color with double precision floating point channels. 
   LCH colors (also sometimes called CIELUV) are transformation of the 1931 CIE XYZ color space, 
   in order to approach perceptual uniformity. They are primarily used in computer graphics which 
   deal with colored lights.
   
## Constructors
#### Rhino.Display.ColorLCH(Color rgb)
- (summary) 
     Constructs a new instance of ColorLCH that is equivalent to an RGB color.
     
- (since) 5.0
#### Rhino.Display.ColorLCH(double lightness,double chroma,double hue)
- (summary) 
     Constructs a new instance of ColorLCH with custom channel values.
     
- (since) 5.0
#### Rhino.Display.ColorLCH(double alpha,double lightness,double chroma,double hue)
- (summary) 
     Constructs a new instance of ColorLCH with custom channel values.
     
- (since) 5.0
## Properties
#### double A
- (summary) 
     Gets or sets the Alpha channel. The Alpha channel is limited to the 0~1 range.
     
- (since) 5.0
#### double C
- (summary) 
     Gets or sets the Chroma channel. Chroma is defined from -1.0 to +1.0.
     
- (since) 5.0
#### double H
- (summary) 
     Gets or sets the Hue channel. The hue channel is limited to the 0~360 degree range.
     
- (since) 5.0
#### double L
- (summary) 
     Gets or sets the Lightness channel.
     
- (since) 5.0
## Methods
#### static ColorLCH CreateFromCMYK(ColorCMYK cmyk)
- (summary) 
     Create the nearest LCH equivalent of a CMYK color.
     
- (since) 5.0
- (returns) ColorLCH This is some return comment
#### static ColorLCH CreateFromHSL(ColorHSL hsl)
- (summary) 
     Create the nearest LCH equivalent of an HSL color.
     
- (since) 5.0
- (returns) ColorLCH This is some return comment
#### static ColorLCH CreateFromLAB(ColorLAB lab)
- (summary) 
     Create the nearest LCH equivalent of a LAB color.
     
- (since) 5.0
- (returns) ColorLCH This is some return comment
#### static ColorLCH CreateFromXYZ(ColorXYZ xyz)
- (summary) 
     Create the nearest LCH equivalent of an XYZ color.
     
- (since) 5.0
- (returns) ColorLCH This is some return comment
#### void MakePositive()
- (summary) 
     Ensure the Chromaticity of this color is positive. 
     
- (since) 5.0
- (returns) void This is some return comment
