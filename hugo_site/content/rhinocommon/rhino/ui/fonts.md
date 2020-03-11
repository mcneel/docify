---
title: "Fonts"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Rhino.Rumtime.UI
```cs
public class Fonts
```
## Properties

static [Font](/rhinocommon/rhino/docobjects/font/) BoldHeadingFont
: Returns a font that is 1.2x NormalFont and Bold
: since 6.0

static [Font](/rhinocommon/rhino/docobjects/font/) HeadingFont
: Returns a font used for dialog headings. 1.2x the size of NormalFont.
: since 6.0

static [Font](/rhinocommon/rhino/docobjects/font/) NormalFont
: Returns the normal font used for dialog boxes and buttons.
: since 6.0

static [Font](/rhinocommon/rhino/docobjects/font/) SmallFont
: Returns a font use for small text in dialog boxes. 0.8x the size of NormalFont.
: since 6.0

static [Font](/rhinocommon/rhino/docobjects/font/) TitleFont
: Returns a font used for dialog titles. 2x the size of NormalFont, and bold.
: since 6.0
## Methods

static [Font](/rhinocommon/rhino/docobjects/font/) GetUiFont(Style style,Size size)
: GetUiFont provides access to a set of unmanaged fonts used by Rhino.
: since 6.0
