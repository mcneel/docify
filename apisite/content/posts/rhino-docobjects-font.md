---
title: "Font"
draft: false
---

*Namespace: Rhino.DocObjects*
Defines a format for text.
## Constructors
#### Rhino.DocObjects.Font(string familyName)
- (summary) 
- (since) 6.0
#### Rhino.DocObjects.Font(string familyName,FontWeight weight,FontStyle style,bool underlined,bool strikethrough)
- (summary) 
- (since) 6.0
## Properties
#### bool Bold
- (summary) 
- (since) 5.0
#### string Description
- (summary) 
     Returns a long description that includes family, face, weight, stretch and style information. 
     Generally not useful for finding matching fonts.
     
- (since) 6.5
#### string EnglishFaceName
- (summary) 
     Returns English Facename
     
- (since) 6.9
#### string EnglishFamilyName
- (summary) 
- (since) 6.9
#### string EnglishQuartetName
- (summary) 
- (since) 6.12
#### string FaceName
- (summary) 
     Returns Facename
     
- (since) 5.0
#### string FamilyName
- (summary) 
- (since) 6.5
#### string FamilyPlusFaceName
- (summary) 
     Returns concatinated Family and Face names
     
- (since) 6.9
#### bool IsEngravingFont
- (summary) 
- (since) 6.10
#### bool IsSimulated
- (summary) 
- (since) 6.5
#### bool IsSingleStrokeFont
- (summary) 
- (since) 6.5
#### bool IsSymbolFont
- (summary) 
- (since) 6.5
#### bool Italic
- (summary) 
- (since) 5.0
#### string LogfontName
- (summary) 
     Returns Windows Logfont Facename
     
- (since) 6.5
#### double PointSize
- (summary) 
- (since) 6.0
#### string PostScriptName
- (summary) 
     Returns the Font PostScriptName - "Apple font name"
     
- (since) 6.5
#### string QuartetName
- (summary) 
- (since) 6.7
#### string RichTextFontName
- (summary) 
     Returns the Font RichTextFontName used in RTF strings:
     {\\fonttbl...{\\fN RichTextFontName;}...}
     
- (since) 6.5
#### bool Strikeout
- (summary) 
- (since) 6.0
#### FontStyle Style
- (summary) 
- (since) 6.0
#### bool Underlined
- (summary) 
- (since) 6.0
#### FontWeight Weight
- (summary) 
- (since) 6.0
## Methods
#### static string[] AvailableFontFaceNames()
- (summary) 
- (since) 5.0
- (returns) string[] This is some return comment
#### static Font FromQuartetProperties(string quartetName,bool bold,bool italic)
- (summary) 
- (since) 6.7
- (returns) Font This is some return comment
#### static Font[] InstalledFonts()
- (summary) 
- (since) 6.5
- (returns) Font[] This is some return comment
#### static Font[] InstalledFonts(string familyName)
- (summary) 
- (since) 6.5
- (returns) Font[] This is some return comment
#### static FontQuartet[] InstalledFontsAsQuartets()
- (summary) 
- (since) 6.7
- (returns) FontQuartet[] This is some return comment
