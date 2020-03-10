---
title: "Rhino.Display.ColorCMYK"
draft: false
---

# Constructors
## Rhino.Display.ColorCMYK(Color rgb)
- (summary) 
     Initializes a new instance of ColorCMYK that is equivalent to an RGB color.
     
- (since) 5.0
## Rhino.Display.ColorCMYK(double cyan,double magenta,double yellow)
- (summary) 
     Initializes a new instance of ColorCMYK with custom channel values. 
     The cyan, magenta and yellow values will be adjusted based on their 
     combined darkness.
     
- (since) 5.0
## Rhino.Display.ColorCMYK(double cyan,double magenta,double yellow,double key)
- (summary) 
     Initializes a new instance of ColorCMYK with custom channel values. 
     
- (since) 5.0
## Rhino.Display.ColorCMYK(double alpha,double cyan,double magenta,double yellow,double key)
- (summary) 
     Initializes a new instance of ColorCMYK with custom channel values. 
     
- (since) 5.0
# Properties
## double A
- (summary) 
     Gets or sets the Alpha channel value. 
     Alpha channels are limited to the 0~1 range.
     
- (since) 5.0
## double C
- (summary) 
     Gets or sets the Cyan channel value. 
     Cyan channels are limited to the 0~1 range.
     
- (since) 5.0
## double K
- (summary) 
     Gets or sets the Key channel value. 
     Key channels are limited to the 0~1 range.
     
- (since) 5.0
## double M
- (summary) 
     Gets or sets the Magenta channel value. 
     Magenta channels are limited to the 0~1 range.
     
- (since) 5.0
## double Y
- (summary) 
     Gets or sets the Yellow channel value. 
     Yellow channels are limited to the 0~1 range.
     
- (since) 5.0
# Methods
## static ColorCMYK CreateFromHSL(ColorHSL hsl)
- (summary) 
     Constructs the nearest CMYK equivalent of an HSL color.
     
- (since) 5.0
- (returns) ColorCMYK This is some return comment
## static ColorCMYK CreateFromHSV(ColorHSV hsv)
- (summary) 
     Constructs the nearest CMYK equivalent of an HSV color.
     
- (since) 6.0
- (returns) ColorCMYK This is some return comment
## static ColorCMYK CreateFromLAB(ColorLAB lab)
- (summary) 
     Constructs the nearest CMYK equivalent of a LAB color.
     
- (since) 5.0
- (returns) ColorCMYK This is some return comment
## static ColorCMYK CreateFromLCH(ColorLCH lch)
- (summary) 
     Constructs the nearest CMYK equivalent of a LCH color.
     
- (since) 5.0
- (returns) ColorCMYK This is some return comment
## static ColorCMYK CreateFromXYZ(ColorXYZ xyz)
- (summary) 
     Constructs the nearest CMYK equivalent of an XYZ color.
     
- (since) 5.0
- (returns) ColorCMYK This is some return comment
