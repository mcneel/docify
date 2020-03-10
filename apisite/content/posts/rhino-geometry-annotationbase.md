---
title: "Rhino.Geometry.AnnotationBase"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## DimensionStyle.LengthDisplay AlternateDimensionLengthDisplay
- (summary) 
     Alternate length display units and format
     
- (since) 6.0
## AnnotationType AnnotationType
- (summary) 
     Type of annotation
     
- (since) 6.0
## char DecimalSeparator
- (summary) 
     Set or get the decimal separator c
     
- (since) 7.0
## DimensionStyle.LengthDisplay DimensionLengthDisplay
- (summary) 
     Length display units and format
     
- (since) 6.0
## double DimensionScale
- (summary) 
     Gets or sets the dimension scale
     
- (since) 6.0
## DimensionStyle DimensionStyle
- (summary) 
     If there are no overrides then the parent style is returned otherwise the dimension style saved with the annotation is returned.
     
- (since) 6.0
## Guid DimensionStyleId
- (summary) 
     Id of this annotation's parent dimstyle
     If this annotation has overrides to dimstyle properties, 
     those overrides will be represented in the DimensionStyle
     returned by DimensionStyle(ParentStyle)
     
- (since) 6.0
## bool DrawForward
- (summary) 
     Gets or sets whether the text is oriented towards the reader when viewed from behind
     
- (since) 6.0
## bool DrawTextFrame
- (summary) 
     Gets or sets whether to draw a frame around a text mask
     
- (since) 7.0
## Rhino.DocObjects.Font FirstCharFont
- (summary) 
     Returns the font used by the first run of text in an annotation
     
- (since) 6.5
## DocObjects.Font Font
- (summary) 
     The base Font for the text of the annotation.  The text string is rich text and therefore a different font that the base font can be associated with sub strings of the text
     
- (since) 6.0
## int FontIndex
- (summary)  Obsolete; use Font property instead 
- (since) 6.1
## double FormatWidth
- (summary)  Text format width (Wrapping rectangle) 
- (since) 6.0
## bool HasPropertyOverrides
- (summary) 
- (since) 6.0
## Color MaskColor
- (summary) 
     Color to use for drawing a text mask when it is enabled. If the mask is
     enabled and MaskColor is System.Drawing.Color.Transparent, then the
     viewport's color will be used for the MaskColor
     
- (since) 6.0
## DimensionStyle.MaskType MaskColorSource
- (summary) 
     Gets or sets whether the mask background color is from the background or from a color
     
- (since) 6.0
## bool MaskEnabled
- (summary) 
     Determines whether or not to draw a Text Mask
     
- (since) 6.0
## DimensionStyle.MaskFrame MaskFrame
- (summary) 
     Gets or sets whether to draw a frame around a text mask
     
- (since) 7.0
## double MaskOffset
- (summary) 
     Offset for the border around text of the rectangle used to draw the mask.  This 
     value multiplied by TextHeight is the offset on each side of the tight rectangle 
     around the text characters to the mask rectangle. The default value is 0.1.
     
- (since) 6.0
## bool MaskUsesViewportColor
- (summary) 
     If true, the viewport's color is used for the mask color. If
     false, the color defined by MaskColor is used
     
- (since) 6.0
## DimensionStyle ParentDimensionStyle
- (summary) 
     The parent dimension style associated with this annotation
     
- (since) 6.0
## string PlainText
- (summary) 
     Text stripped of RTF formatting information
     
- (since) 6.0
## string PlainTextWithFields
- (summary) 
     Text stripped of RTF formatting information and with field expressions intact
     
- (since) 6.19
## Plane Plane
- (summary)  Plane that this annotation lies on 
- (since) 5.0
## string RichText
- (summary) 
     Text including additional RTF formatting information
     
- (since) 6.0
## string Text
- (summary) 
     Text including additional RTF formatting information
     
- (since) 5.0
## string TextFormula
- (summary) 
     See RichText
     
- (since) 5.0
## bool TextHasRtfFormatting
- (summary) 
- (since) 6.0
## double TextHeight
- (summary) 
     AnnotationBase.TextHeight
     Gets the parent dimstyle for the annotation and 
     gets or sets the text height in the dimstyle
     
- (since) 5.0
## bool TextIsWrapped
- (summary) 
     Is text wrapping on
     
- (since) 6.0
## double TextModelWidth
- (summary) 
     Width of text in the model
     
- (since) 6.0
## double TextRotationDegrees
- (summary) 
     Rotation of text in degrees
     
- (since) 6.0
## double TextRotationRadians
- (summary) 
     Rotation of text in radians
     
- (since) 6.0
# Methods
## static bool FirstCharProperties(string rtf_str,bool bold,bool italic,bool underline,string facename)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static string FormatRtfString(string rtf_in,bool clear_bold,bool set_bold,bool clear_italic,bool set_italic,bool clear_underline,bool set_underline,bool clear_facename,bool set_facename,string facename)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## static double GetDimensionScale(RhinoDoc doc,DimensionStyle dimstyle,RhinoViewport vport)
- (summary) 
     Get view dependent dimension scale
     
- (since) 6.0
- (returns) double This is some return comment
## static string PlainTextToRtf(string str)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## bool ClearPropertyOverrides()
- (summary) 
     Clears all overriden properties for this annotation
     
- (since) 6.0
- (returns) bool This is some return comment
## BoundingBox GetBoundingBox(Transform xform)
- (summary) 
     Aligned Boundingbox solver. Gets the world axis aligned boundingbox for the transformed geometry.
     
- (since) 6.10
- (returns) BoundingBox This is some return comment
## DimensionStyle GetDimensionStyle(DimensionStyle parentDimStyle)
- (summary) 
     Return the proper dimension style from which to get properties
     for this annotation object
     If this object has style overrides, those will be included in the 
     returned dimension style and the style will be updated to include
     the current state of the parent style for non-overridden fields
     
- (since) 6.0
- (returns) DimensionStyle This is some return comment
## string GetPlainTextWithRunMap(int[] map)
- (summary) 
     Return plain text string for this annotation with field expressions unevaluated 
     intrunmap is an array of ints in groups of 3: run index, char pos start, length
     
- (since) 7.0
- (returns) string This is some return comment
## bool IsAllBold()
- (summary) 
     Returns True if all of the text in the annotation is Bold, otherwise returns false
     
- (since) 6.22
- (returns) bool This is some return comment
## bool IsAllItalic()
- (summary) 
     Returns True if all of the text in the annotation is Italic, otherwise returns false
     
- (since) 6.22
- (returns) bool This is some return comment
## bool IsAllUnderlined()
- (summary) 
     Returns True if all of the text in the annotation is Underlined, otherwise returns false
     
- (since) 6.22
- (returns) bool This is some return comment
## bool IsPropertyOverridden(Field field)
- (summary) 
     Returns True if a property is overridden
     
- (since) 6.0
- (returns) bool This is some return comment
## bool RunReplace(string repl_string,int start_run_idx,int start_run_pos,int end_run_idx,int end_run_pos)
- (summary) 
     Replace text within a formatted string
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SetBold(bool set_on)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool SetFacename(bool set_on,string facename)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool SetItalic(bool set_on)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool SetOverrideDimStyle(DimensionStyle OverrideStyle)
- (summary) 
     Set a style including overrides for this annotation object.
     The DimensionStyle OverrideStyle must have the override fields marked 
     as overridden and must have it's Id set to nil.
     Use DimensinoStyle.SetFieldOverride(Field field) and related functions
     to manage override settings. To override a field, the field value must be set
     and the field must be marked as an override. 
     The DimensionStyle passed in here must not be in the dimstyle table
     
- (since) 6.0
- (returns) bool This is some return comment
## void SetRichText(string rtfText,DimensionStyle dimstyle)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## bool SetUnderline(bool set_on)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## void WrapText()
- (summary) 
     Wrap text
     
- (since) 6.0
- (returns) void This is some return comment
