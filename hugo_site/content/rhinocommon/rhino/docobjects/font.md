---
title: "Font"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Defines a format for text.
```cs
public class Font
```
## Constructors

Font(string familyName)
: 
: since 6.0

Font(string familyName,FontWeight weight,FontStyle style,bool underlined,bool strikethrough)
: 
: since 6.0
## Properties

bool Bold
: 

string Description
: Returns a long description that includes family, face, weight, stretch and style information. 
     Generally not useful for finding matching fonts.
: since 6.5

string EnglishFaceName
: Returns English Facename
: since 6.9

string EnglishFamilyName
: 
: since 6.9

string EnglishQuartetName
: 
: since 6.12

string FaceName
: Returns Facename

string FamilyName
: 
: since 6.5

string FamilyPlusFaceName
: Returns concatinated Family and Face names
: since 6.9

bool IsEngravingFont
: 
: since 6.10

bool IsSimulated
: 
: since 6.5

bool IsSingleStrokeFont
: 
: since 6.5

bool IsSymbolFont
: 
: since 6.5

bool Italic
: 

string LogfontName
: Returns Windows Logfont Facename
: since 6.5

double PointSize
: 
: since 6.0

string PostScriptName
: Returns the Font PostScriptName - "Apple font name"
: since 6.5

string QuartetName
: 
: since 6.7

string RichTextFontName
: Returns the Font RichTextFontName used in RTF strings:
     {\\fonttbl...{\\fN RichTextFontName;}...}
: since 6.5

bool Strikeout
: 
: since 6.0

FontStyle Style
: 
: since 6.0

bool Underlined
: 
: since 6.0

FontWeight Weight
: 
: since 6.0
## Methods

static string[] AvailableFontFaceNames()
: 

static Font FromQuartetProperties(string quartetName,bool bold,bool italic)
: 
: since 6.7

static Font[] InstalledFonts()
: 
: since 6.5

static Font[] InstalledFonts(string familyName)
: 
: since 6.5

static [FontQuartet](/rhinocommon/rhino/docobjects/fontquartet/)[] InstalledFontsAsQuartets()
: 
: since 6.7
