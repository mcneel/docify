---
title: "ColorXYZ"
draft: false
---

*Namespace: Rhino.Display*

   Represents an XYZ (Hue, Saturation, Luminance) color with double precision floating point channels. 
   XYZ colors are based on the CIE 1931 XYZ color space standard and they mimic the natural 
   sensitivity of cones in the human retina.
   
## Constructors
#### Rhino.Display.ColorXYZ(Color rgb)
- (summary) 
     Constructs a new instance of ColorXYZ that is equivalent to an RGB color.
     
- (since) 5.0
#### Rhino.Display.ColorXYZ(double x,double y,double z)
- (summary) 
     Constructs a new instance of ColorXYZ with custom channel values.
     
- (since) 5.0
#### Rhino.Display.ColorXYZ(double alpha,double x,double y,double z)
- (summary) 
     Constructs a new instance of ColorXYZ with custom channel values.
     
- (since) 5.0
## Properties
#### double A
- (summary) 
     Gets or set the Alpha channel value. Channel will be limited to 0~1.
     
- (since) 5.0
#### double X
- (summary) 
     Gets or set the X channel value. Channel will be limited to 0~1.
     
- (since) 5.0
#### double Y
- (summary) 
     Gets or set the Y channel value. Channel will be limited to 0~1.
     
- (since) 5.0
#### double Z
- (summary) 
     Gets or set the Z channel value. Channel will be limited to 0~1.
     
- (since) 5.0
## Methods
#### static ColorXYZ CreateFromCMYK(ColorCMYK cmyk)
- (summary) 
     Create the nearest XYZ equivalent of a CMYK color.
     
- (since) 5.0
- (returns) ColorXYZ This is some return comment
#### static ColorXYZ CreateFromHSL(ColorHSL hsl)
- (summary) 
     Create the nearest XYZ equivalent of an HSL color.
     
- (since) 5.0
- (returns) ColorXYZ This is some return comment
#### static ColorXYZ CreateFromHSV(ColorHSV hsv)
- (summary) 
     Constructs the nearest XYZ equivalent of an HSV color.
     
- (since) 6.0
- (returns) ColorXYZ This is some return comment
#### static ColorXYZ CreateFromLAB(ColorLAB lab)
- (summary) 
     Create the nearest XYZ equivalent of a Lab color.
     
- (since) 5.0
- (returns) ColorXYZ This is some return comment
#### static ColorXYZ CreateFromLCH(ColorLCH lch)
- (summary) 
     Create the nearest XYZ equivalent of an LCH color.
     
- (since) 5.0
- (returns) ColorXYZ This is some return comment
