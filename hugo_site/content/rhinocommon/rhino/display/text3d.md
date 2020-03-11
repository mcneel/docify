---
title: "Text3d"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

3D aligned text with font settings.
```cs
public class Text3d : IDisposable
```
## Constructors

Text3d(string text)
: Constructs a new instance of Text3d.

Text3d(string text,Plane plane,double height)
: Constructs a new instance of Text3d.
## Properties

bool Bold
: Gets or sets whether this Text3d object will be drawn in Bold.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the boundingbox for this Text3d object.

string FontFace
: Gets or sets the FontFace name.

double Height
: Gets or sets the height (in units) of this Text3d object. 
     The height should be a positive number larger than zero.

TextHorizontalAlignment HorizontalAlignment
: Horizontal alignment that this Text3d is drawn with
: since 6.4

bool Italic
: Gets or sets whether this Text3d object will be drawn in Italics.

string Text
: Gets or sets the text string for this Text3d object.

[Plane](/rhinocommon/rhino/geometry/plane/) TextPlane
: Gets or sets the 3D aligned plane for this Text3d object.

TextVerticalAlignment VerticalAlignment
: Vertical alignment that this Text3d is drawn with
: since 6.4
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
