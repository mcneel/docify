---
title: "Dimension"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Base class for dimensions
```cs
[Serializable]
public class Dimension : AnnotationBase
```
## Properties

bool AlternateBelowLine
: 
: since 6.0

double AltLengthFactor
: 
: since 6.0

int AltLengthResolution
: 
: since 6.0

double AltLengthRoundoff
: 
: since 6.0

string AltPrefix
: 
: since 6.0

string AltSuffix
: 
: since 6.0

int AltToleranceResolution
: 
: since 6.0

bool AltUnitsDisplay
: 
: since 6.0

ZeroSuppression AltZeroSuppression
: 
: since 6.0

Guid ArrowBlockId1
: 
: since 6.0

Guid ArrowBlockId2
: 
: since 6.0

ArrowFit ArrowFit
: 
: since 6.20

ArrowType ArrowheadType1
: 
: since 6.0

ArrowType ArrowheadType2
: 
: since 6.0

double ArrowSize
: 
: since 6.0

double BaselineSpacing
: 
: since 6.0

double CentermarkSize
: 
: since 6.0

CenterMarkStyle CentermarkStyle
: 
: since 6.0

Guid DetailMeasured
: 
: since 6.0

double DimensionLineExtension
: 
: since 6.0

double DistanceScale
: 
: since 6.0

double ExtensionLineExtension
: 
: since 6.0

double ExtensionLineOffset
: 
: since 6.0

double FixedExtensionLength
: 
: since 6.0

bool FixedLengthExtensionOn
: 
: since 6.0

ForceArrow ForceArrowPosition
: 
: since 6.0

bool ForceDimensionLineBetweenExtensionLines
: 
: since 6.20

bool ForceDimLine
: 
: since 6.20

ForceText ForceTextPosition
: 
: since 6.0

double LengthFactor
: 
: since 6.0

int LengthResolution
: 
: since 6.0

double LengthRoundoff
: 
: since 6.0

double NumericValue
: Gets the numeric value (or measurement), depending on geometry type.
     LinearDimension: distance between arrow tipsRadialDimension: radius or diamater depending on typeAngularDimension: angle in degrees
: since 6.0

string PlainUserText
: 
: since 6.0

string Prefix
: 
: since 6.0

string Suffix
: 
: since 6.0

bool SuppressExtension1
: 
: since 6.0

bool SuppressExtension2
: 
: since 6.0

LeaderContentAngleStyle TextAngleType
: 
: since 6.0

TextFit TextFit
: 
: since 6.20

string TextFormula
: 
: since 6.0

TextLocation TextLocation
: 
: since 6.0

TextOrientation TextOrientation
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) TextPosition
: Gets and sets the position of text on the plane.
: since 6.0

double TextRotation
: 
: since 6.0

ToleranceDisplayFormat ToleranceFormat
: 
: since 6.0

double ToleranceHeightScale
: 
: since 6.0

double ToleranceLowerValue
: 
: since 6.0

int ToleranceResolution
: 
: since 6.0

double ToleranceUpperValue
: 
: since 6.0

bool UseDefaultTextPoint
: 
: since 6.0

ZeroSuppression ZeroSuppression
: 
: since 6.0
## Methods

[Transform](/rhinocommon/rhino/geometry/transform/) GetTextTransform(ViewportInfo viewport,DimensionStyle style,double textScale,bool drawForward)
: Get the transform for this text object's text geometry
: since 6.0

void SetAltDimensionLengthDisplayWithZeroSuppressionReset(LengthDisplay ld)
: 
: since 6.0

void SetDimensionLengthDisplayWithZeroSuppressionReset(LengthDisplay ld)
: 
: since 6.0
