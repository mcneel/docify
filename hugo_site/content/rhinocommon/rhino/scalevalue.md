---
title: "ScaleValue"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino](../)*

Represents a scale with associated LengthValues and string representations
   of the scale. This allows for going back and forth from numerical
   representations of a scale and a string representation without "guessing"
   at the initial scale.
```cs
public class ScaleValue : IDisposable
```
## Constructors

ScaleValue()
: Default constructor
: since 6.0
## Properties

double LeftToRightScale
: LeftLengthValue / RightLengthValue
: since 6.0

double RightToLeftScale
: RightLengthValue / LeftLengthValue
: since 6.0
## Methods

static ScaleValue Create(LengthValue left,LengthValue right,ScaleStringFormat format)
: Create from 2 length values
: since 6.0

static ScaleValue Create(string s,StringParserSettings ps)
: Create from string
: since 6.0

static ScaleValue OneToOne()
: Make a new ScaleValue set to OneToOne
: since 6.0

void Dispose()
: actively reclaim native allocated ON_SacleValue*
: since 6.0

bool IsUnset()
: Test IsUnset
: since 6.0

[LengthValue](/rhinocommon/rhino/lengthvalue/) LeftLengthValue()
: Get the Left LengthValue from Scale
: since 6.0

[LengthValue](/rhinocommon/rhino/lengthvalue/) RightLengthValue()
: Get the Right LengthValue from Scale
: since 6.0
