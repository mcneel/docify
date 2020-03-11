---
title: "AnnotationBase"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Provides a common base class to all annotation geometry.
   This class refers to the geometric element that is independent from the document.
```cs
[Serializable]
public class AnnotationBase : GeometryBase
```
## Properties

LengthDisplay AlternateDimensionLengthDisplay
: Alternate length display units and format
: since 6.0

AnnotationType AnnotationType
: Type of annotation
: since 6.0

char DecimalSeparator
: Set or get the decimal separator c
: since 7.0

LengthDisplay DimensionLengthDisplay
: Length display units and format
: since 6.0

double DimensionScale
: Gets or sets the dimension scale
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) DimensionStyle
: If there are no overrides then the parent style is returned otherwise the dimension style saved with the annotation is returned.
: since 6.0

Guid DimensionStyleId
: Id of this annotation's parent dimstyle
     If this annotation has overrides to dimstyle properties, 
     those overrides will be represented in the DimensionStyle
     returned by DimensionStyle(ParentStyle)
: since 6.0

bool DrawForward
: Gets or sets whether the text is oriented towards the reader when viewed from behind
: since 6.0

bool DrawTextFrame
: Gets or sets whether to draw a frame around a text mask
: since 7.0

[Font](/rhinocommon/rhino/docobjects/font/) FirstCharFont
: Returns the font used by the first run of text in an annotation
: since 6.5

[Font](/rhinocommon/rhino/docobjects/font/) Font
: The base Font for the text of the annotation.  The text string is rich text and therefore a different font that the base font can be associated with sub strings of the text
: since 6.0

int FontIndex
: Obsolete; use Font property instead
: since 6.1

double FormatWidth
: Text format width (Wrapping rectangle)
: since 6.0

bool HasPropertyOverrides
: 
: since 6.0

Color MaskColor
: Color to use for drawing a text mask when it is enabled. If the mask is
     enabled and MaskColor is System.Drawing.Color.Transparent, then the
     viewport's color will be used for the MaskColor
: since 6.0

MaskType MaskColorSource
: Gets or sets whether the mask background color is from the background or from a color
: since 6.0

bool MaskEnabled
: Determines whether or not to draw a Text Mask
: since 6.0

MaskFrame MaskFrame
: Gets or sets whether to draw a frame around a text mask
: since 7.0

double MaskOffset
: Offset for the border around text of the rectangle used to draw the mask.  This 
     value multiplied by TextHeight is the offset on each side of the tight rectangle 
     around the text characters to the mask rectangle. The default value is 0.1.
: since 6.0

bool MaskUsesViewportColor
: If true, the viewport's color is used for the mask color. If
     false, the color defined by MaskColor is used
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) ParentDimensionStyle
: The parent dimension style associated with this annotation
: since 6.0

string PlainText
: Text stripped of RTF formatting information
: since 6.0

string PlainTextWithFields
: Text stripped of RTF formatting information and with field expressions intact
: since 6.19

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Plane that this annotation lies on

string RichText
: Text including additional RTF formatting information
: since 6.0

string Text
: Text including additional RTF formatting information

string TextFormula
: See RichText

bool TextHasRtfFormatting
: 
: since 6.0

double TextHeight
: AnnotationBase.TextHeight
     Gets the parent dimstyle for the annotation and 
     gets or sets the text height in the dimstyle

bool TextIsWrapped
: Is text wrapping on
: since 6.0

double TextModelWidth
: Width of text in the model
: since 6.0

double TextRotationDegrees
: Rotation of text in degrees
: since 6.0

double TextRotationRadians
: Rotation of text in radians
: since 6.0
## Methods

static bool FirstCharProperties(string rtf_str,bool bold,bool italic,bool underline,string facename)
: 
: since 6.0

static string FormatRtfString(string rtf_in,bool clear_bold,bool set_bold,bool clear_italic,bool set_italic,bool clear_underline,bool set_underline,bool clear_facename,bool set_facename,string facename)
: 
: since 6.0

static double GetDimensionScale(RhinoDoc doc,DimensionStyle dimstyle,RhinoViewport vport)
: Get view dependent dimension scale
: since 6.0

static string PlainTextToRtf(string str)
: 
: since 6.0

bool ClearPropertyOverrides()
: Clears all overriden properties for this annotation
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(Transform xform)
: Aligned Boundingbox solver. Gets the world axis aligned boundingbox for the transformed geometry.
: Returns - The boundingbox of the transformed geometry in world coordinates 
     or BoundingBox.Empty if not bounding box could be found.
: since 6.10

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) GetDimensionStyle(DimensionStyle parentDimStyle)
: Return the proper dimension style from which to get properties
     for this annotation object
     If this object has style overrides, those will be included in the 
     returned dimension style and the style will be updated to include
     the current state of the parent style for non-overridden fields
: since 6.0

string GetPlainTextWithRunMap(int[] map)
: Return plain text string for this annotation with field expressions unevaluated 
     intrunmap is an array of ints in groups of 3: run index, char pos start, length
: since 7.0

bool IsAllBold()
: Returns True if all of the text in the annotation is Bold, otherwise returns false
: since 6.22

bool IsAllItalic()
: Returns True if all of the text in the annotation is Italic, otherwise returns false
: since 6.22

bool IsAllUnderlined()
: Returns True if all of the text in the annotation is Underlined, otherwise returns false
: since 6.22

bool IsPropertyOverridden(Field field)
: Returns True if a property is overridden
: since 6.0

bool RunReplace(string repl_string,int start_run_idx,int start_run_pos,int end_run_idx,int end_run_pos)
: Replace text within a formatted string
: since 7.0

bool SetBold(bool set_on)
: 
: since 6.0

bool SetFacename(bool set_on,string facename)
: 
: since 6.0

bool SetItalic(bool set_on)
: 
: since 6.0

bool SetOverrideDimStyle(DimensionStyle OverrideStyle)
: Set a style including overrides for this annotation object.
     The DimensionStyle OverrideStyle must have the override fields marked 
     as overridden and must have it's Id set to nil.
     Use DimensinoStyle.SetFieldOverride(Field field) and related functions
     to manage override settings. To override a field, the field value must be set
     and the field must be marked as an override. 
     The DimensionStyle passed in here must not be in the dimstyle table
: since 6.0

void SetRichText(string rtfText,DimensionStyle dimstyle)
: 
: since 6.0

bool SetUnderline(bool set_on)
: 
: since 6.0

void WrapText()
: Wrap text
: since 6.0
