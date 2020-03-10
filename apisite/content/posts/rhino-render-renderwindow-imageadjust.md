---
title: "ImageAdjust"
draft: false
---

*Namespace: Rhino.Render*

     Class to set image adjusting settings to a RenderWindow. This can't be
     directly created. Instead, one should use RenderWindow.GetAdjust() to
     get an ImageAdjust instance that can be modified, then passed into
     RenderWindow.SetAdjust() to update image adjusting settings.1
     
## Properties
#### Dithering.Methods Dither
- (summary) 
       Set the Dithering method to use when adjusting the RenderWindow
       content.
       
- (since) 6.0
#### float Gamma
- (summary) 
       Set the gamma value. The inverse of this will be used to apply
       gamma correction to the RenderWindow RGBA channel when necessary.
       
- (since) 6.0
