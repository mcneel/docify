---
title: "TextEntity"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

```cs
[Serializable]
public class TextEntity : AnnotationBase
```
## Constructors

TextEntity()
: Initializes a new instance of the  class.
## Properties

[TextJustification](/rhinocommon/rhino/geometry/textjustification/) Justification
: Gets or sets the justification of text in relation to its base point.

TextHorizontalAlignment TextHorizontalAlignment
: 
: since 6.0

TextOrientation TextOrientation
: 
: since 6.0

TextVerticalAlignment TextVerticalAlignment
: 
: since 6.0
## Methods

static TextEntity Create(string text,Plane plane,DimensionStyle style,bool wrapped,double rectWidth,double rotationRadians)
: Create Text geometry or None if input is invalid
: since 6.0

static TextEntity CreateWithRichText(string richTextString,Plane plane,DimensionStyle style,bool wrapped,double rectWidth,double rotationRadians)
: Create RichText geometry or None if input is invalid
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/)[] CreateCurves(DimensionStyle dimstyle,bool bAllowOpen,double smallCapsScale,double spacing)
: Returns the outline curves.
: Returns - An array of curves that forms the outline or content of this text entity.
: since 6.0

[Extrusion](/rhinocommon/rhino/geometry/extrusion/)[] CreateExtrusions(DimensionStyle dimstyle,double height,double smallCapsScale,double spacing)
: Creates extrusions from the outline curves with specified height.
: Returns - An array of planar breps.
: since 6.0

[Brep](/rhinocommon/rhino/geometry/brep/)[] CreatePolySurfaces(DimensionStyle dimstyle,double height,double smallCapsScale,double spacing)
: Creates breps from the outline curves with specified height.
: Returns - An array of planar breps.
: since 6.0

[Brep](/rhinocommon/rhino/geometry/brep/)[] CreateSurfaces(DimensionStyle dimstyle,double smallCapsScale,double spacing)
: Creates planar breps from the outline curves.
: Returns - An array of planar breps.
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/)[] Explode()
: Explodes this text entity into an array of curves.
: Returns - An array of curves that forms the outline or content of this text entity.

[Transform](/rhinocommon/rhino/geometry/transform/) GetTextTransform(double textscale,DimensionStyle dimstyle)
: Get the transform for this text object's text geometry
: since 6.0

bool Transform(Transform transform,DimensionStyle style)
: Transform the object by a 4x4 transform matrix and change text height
     override to accommodate scaling in the transform if necessary
: Returns - Returns True on success otherwise returns false.
: since 6.0
