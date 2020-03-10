---
title: "Rhino.Geometry.TextEntity"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.TextEntity()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 5.0
# Properties
## TextJustification Justification
- (summary) 
     Gets or sets the justification of text in relation to its base point.
     
- (since) 5.0
## TextHorizontalAlignment TextHorizontalAlignment
- (summary) 
- (since) 6.0
## TextOrientation TextOrientation
- (summary) 
- (since) 6.0
## TextVerticalAlignment TextVerticalAlignment
- (summary) 
- (since) 6.0
# Methods
## static TextEntity Create(string text,Plane plane,DimensionStyle style,bool wrapped,double rectWidth,double rotationRadians)
- (summary)  Create Text geometry or None if input is invalid 
- (since) 6.0
- (returns) TextEntity This is some return comment
## static TextEntity CreateWithRichText(string richTextString,Plane plane,DimensionStyle style,bool wrapped,double rectWidth,double rotationRadians)
- (summary)  Create RichText geometry or None if input is invalid 
- (since) 6.0
- (returns) TextEntity This is some return comment
## Curve[] CreateCurves(DimensionStyle dimstyle,bool bAllowOpen,double smallCapsScale,double spacing)
- (summary) 
     Returns the outline curves.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## Extrusion[] CreateExtrusions(DimensionStyle dimstyle,double height,double smallCapsScale,double spacing)
- (summary) 
     Creates extrusions from the outline curves with specified height.
     
- (since) 6.0
- (returns) Extrusion[] This is some return comment
## Brep[] CreatePolySurfaces(DimensionStyle dimstyle,double height,double smallCapsScale,double spacing)
- (summary) 
     Creates breps from the outline curves with specified height.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## Brep[] CreateSurfaces(DimensionStyle dimstyle,double smallCapsScale,double spacing)
- (summary) 
     Creates planar breps from the outline curves.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## Curve[] Explode()
- (summary) 
     Explodes this text entity into an array of curves.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Transform GetTextTransform(double textscale,DimensionStyle dimstyle)
- (summary)  Get the transform for this text object's text geometry 
- (since) 6.0
- (returns) Transform This is some return comment
## bool Transform(Transform transform,DimensionStyle style)
- (summary) 
     Transform the object by a 4x4 transform matrix and change text height
     override to accommodate scaling in the transform if necessary
     
- (since) 6.0
- (returns) bool This is some return comment
