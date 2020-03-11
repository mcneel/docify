---
title: "TextDot"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a text dot, or an annotation entity with text that always faces the camera and always has the same size.
   This class refers to the geometric element that is independent from the document.
```cs
[Serializable]
public class TextDot : GeometryBase
```
## Constructors

TextDot(string text,Point3d location)
: Initializes a new textdot based on the text and the location.
## Properties

string FontFace
: Font face used for displaying the dot
: since 5.2

int FontHeight
: Height of font used for displaying the dot
: since 5.2

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point
: Gets or sets the position of the textdot.

string SecondaryText
: Gets or sets the secondary text of the textdot.
: since 6.0

string Text
: Gets or sets the primiary text of the textdot.
