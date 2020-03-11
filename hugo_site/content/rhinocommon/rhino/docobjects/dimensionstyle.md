---
title: "DimensionStyle"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Can also be considered an annotation style since it is used for
   more than just dimensions
```cs
[Serializable]
public class DimensionStyle : ModelComponent
```
## Constructors

DimensionStyle()
: Create a new non-document controlled annotation style
## Properties

bool AlternateBelowLine
: 
: since 6.0

LengthDisplay AlternateDimensionLengthDisplay
: 
: since 6.0

double AlternateLengthFactor
: 

int AlternateLengthResolution
: 
: since 6.0

string AlternatePrefix
: 
: since 6.0

double AlternateRoundoff
: 
: since 6.0

string AlternateSuffix
: 
: since 6.0

int AlternateToleranceResolution
: 
: since 6.0

bool AlternateUnitsDisplay
: 
: since 6.0

ZeroSuppression AlternateZeroSuppress
: 
: since 6.0

AngleDisplayFormat AngleFormat
: 
: since 6.0

int AngleResolution
: 

ZeroSuppression AngleZeroSuppress
: 
: since 6.0

double AngularRoundoff
: 
: since 6.0

int ArcLengthSymbol
: 
: since 6.0

Guid ArrowBlockId1
: 
: since 6.0

Guid ArrowBlockId2
: 
: since 6.0

double ArrowLength
: 

ArrowType ArrowType1
: 
: since 6.0

ArrowType ArrowType2
: 
: since 6.0

double BaselineSpacing
: 
: since 6.0

double CentermarkSize
: 

CenterMarkStyle CenterMarkType
: 
: since 6.0

ModelComponentType ComponentType
: Returns .
: since 6.0

char DecimalSeparator
: 
: since 7.0

LengthDisplay DimensionLengthDisplay
: 
: since 6.0

double DimensionLineExtension
: 
: since 6.0

double DimensionScale
: 
: since 6.0

[ScaleValue](/rhinocommon/rhino/scalevalue/) DimensionScaleValue
: 
: since 6.0

LeaderContentAngleStyle DimRadialTextAngleType
: 
: since 6.0

TextLocation DimRadialTextLocation
: 
: since 6.0

TextOrientation DimRadialTextOrientation
: 
: since 6.0

LeaderContentAngleStyle DimTextAngleType
: 
: since 6.0

TextLocation DimTextLocation
: 
: since 6.0

TextOrientation DimTextOrientation
: 
: since 6.0

bool DrawForward
: 
: since 6.0

bool DrawTextMask
: 
: since 6.0

double ExtensionLineExtension
: 

double ExtensionLineOffset
: 

ArrowFit FitArrow
: 
: since 6.20

TextFit FitText
: 
: since 6.20

double FixedExtensionLength
: 
: since 6.0

bool FixedExtensionOn
: 
: since 6.0

[Font](/rhinocommon/rhino/docobjects/font/) Font
: 
: since 6.0

bool ForceDimensionLineBetweenExtensionLines
: 
: since 6.20

bool HasFieldOverrides
: Checks if any fields in this DimensionStyle are overrides
: Returns - True if any fields are overrides
     False is no fields are overrides
: since 6.0

bool IsChild
: Tests if this DimensionStyle is a child of any other DimensionStyle
: Returns - True if this is a child DimensionStyle, 
     False otherwise.
: since 6.0

bool IsDeleted
: 
: since 6.0

bool IsReference
: 

Guid LeaderArrowBlockId
: 
: since 6.0

double LeaderArrowLength
: 

ArrowType LeaderArrowType
: 
: since 5.6

LeaderContentAngleStyle LeaderContentAngleType
: Style of leader content angle
     Horizontal
     Aligned
     Rotated
: since 6.0

LeaderCurveStyle LeaderCurveType
: 
: since 6.0

bool LeaderHasLanding
: 
: since 6.0

double LeaderLandingLength
: 
: since 6.0

TextHorizontalAlignment LeaderTextHorizontalAlignment
: 
: since 6.0

TextOrientation LeaderTextOrientation
: 
: since 6.0

double LeaderTextRotationDegrees
: 
: since 6.0

double LeaderTextRotationRadians
: Angle of leader text for Rotated style
: since 6.0

TextVerticalAlignment LeaderTextVerticalAlignment
: 
: since 6.0

double LengthFactor
: 

int LengthResolution
: 

Color MaskColor
: 
: since 6.0

MaskType MaskColorSource
: 
: since 6.0

MaskFrame MaskFrameType
: 
: since 7.0

double MaskOffset
: 
: since 6.0

Guid ParentId
: Get or Set the Id of this DimensionStyle's parent.
     If ParentId is Guid.Empty, this DimensionStyle has no parent
: since 6.0

string Prefix
: 

double Roundoff
: 
: since 6.0

double ScaleLeftLengthMillimeters
: 
: since 6.0

double ScaleRightLengthMillimeters
: 
: since 6.0

StackDisplayFormat StackFractionFormat
: 
: since 6.0

double StackHeightScale
: 
: since 6.0

string Suffix
: 

bool SuppressArrow1
: 
: since 6.0

bool SuppressArrow2
: 
: since 6.0

bool SuppressExtension1
: 
: since 6.0

bool SuppressExtension2
: 
: since 6.0

double TextGap
: 

double TextHeight
: 

TextHorizontalAlignment TextHorizontalAlignment
: 
: since 6.0

int TextMoveLeader
: 
: since 6.0

TextOrientation TextOrientation
: 
: since 6.0

double TextRotation
: 
: since 6.0

bool TextUnderlined
: 
: since 6.0

TextVerticalAlignment TextVerticalAlignment
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

ZeroSuppression ToleranceZeroSuppress
: 
: since 6.0

ZeroSuppression ZeroSuppress
: 
: since 6.0
## Methods

UnitSystem AlternateDimensionLengthDisplayUnit(uint model_serial_number)
: 
: since 6.0

void ClearAllFieldOverrides()
: Sets all the fields in this DimensionStyle to be not overridden
     Does not change any dimstyle_id's or parent_id's
: since 6.0

void ClearFieldOverride(Field field)
: Set the field as not overridden
: since 6.0

void CopyFrom(DimensionStyle source)
: Copy settings from source dimension style without changing the name, Id or
     index of this DimensionStyle.
: since 6.0

Bitmap CreatePreviewBitmap(int width,int height)
: 
: since 6.0

UnitSystem DimensionLengthDisplayUnit(uint model_serial_number)
: 
: since 6.0

DimensionStyle Duplicate()
: Construct a deep (full) copy of this object.
: Returns - An object of the same type as this, with the same properties and behavior.
: since 6.0

DimensionStyle Duplicate(string newName,Guid newId,Guid newParentId)
: Construct a deep (full) copy of this object.
: Returns - An object of the same type as this, with the same properties and behavior.
: since 6.0

bool IsChildOf(Guid parentId)
: Tests if this DimensionStyle is a child of a specific DimensionStyle
: Returns - True if this is a child of the DimensionStyle with Parent
     False otherwise.
: since 6.0

bool IsFieldOverriden(Field field)
: 
: since (unknown)

void ScaleLengthValues(double scale)
: Scales all length values by 'scale'
: since 6.0

void SetFieldOverride(Field field)
: Set a field as overridden
: since 6.0
