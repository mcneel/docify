---
title: "Rhino.Display.ColorHSV"
draft: false
---

# Constructors
## Rhino.Display.ColorHSV(Color rgb)
- (summary) 
     Constructs a new instance of ColorHSV that is equivalent to an RGB color.
     
- (since) 6.0
## Rhino.Display.ColorHSV(double hue,double saturation,double value)
- (summary) 
     Constructs a new instance of ColorHSV with custom channel values.
     
- (since) 6.0
## Rhino.Display.ColorHSV(double alpha,double hue,double saturation,double value)
- (summary) 
     Constructs a new instance of ColorHSV with custom channel values.
     
- (since) 6.0
# Properties
## double A
- (summary) 
     Gets or sets the alpha channel value. 
     Alpha channels are limited to a 0~1 range.
     
- (since) 6.0
## double H
- (summary) 
     Gets or sets the hue channel value. 
     Hue channels rotate between 0.0 and 1.0.
     
- (since) 6.0
## double S
- (summary) 
     Gets or sets the saturation channel value. 
     Saturation channels are limited to a 0~1 range.
     
- (since) 6.0
## double V
- (summary) 
     Gets or sets the value (brightness) channel value. 
     Value channels are limited to a 0~1 range.
     
- (since) 6.0
# Methods
## static ColorHSV CreateFromCMYK(ColorCMYK cmyk)
- (summary) 
     Create the nearest HSV equivalent of a CMYK color.
     
- (since) 6.0
- (returns) ColorHSV This is some return comment
## static ColorHSV CreateFromHSL(ColorHSL hsl)
- (summary) 
     Constructs the nearest CMYK equivalent of an HSV color.
     
- (since) 6.0
- (returns) ColorHSV This is some return comment
## static ColorHSV CreateFromLAB(ColorLAB lab)
- (summary) 
     Create the nearest HSV equivalent of a LAB color.
     
- (since) 6.0
- (returns) ColorHSV This is some return comment
## static ColorHSV CreateFromLCH(ColorLCH lch)
- (summary) 
     Create the nearest HSV equivalent of a LCH color.
     
- (since) 6.0
- (returns) ColorHSV This is some return comment
## static ColorHSV CreateFromXYZ(ColorXYZ xyz)
- (summary) 
     Create the nearest HSV equivalent of an XYZ color.
     
- (since) 6.0
- (returns) ColorHSV This is some return comment
## System.Drawing.Color ToArgbColor()
- (summary) 
     Convert HSV color to an equivalent System.Drawing.Color.
     
- (since) 6.0
- (returns) System.Drawing.Color This is some return comment
