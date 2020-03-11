---
title: "LengthValue"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino](../)*

Represents a length with an associated unit system and a string
   representation of that length. This allows for going back and
   forth from numerical representation of a length and a string
   representation without "guessing" at the initial string
```cs
public class LengthValue : IDisposable
```
## Properties

AngleUnitSystem ContextAngleUnitSystem
: Returns the context AngleUnitSystem from this LengthValue's ParseSettings
: since 6.0

uint ContextLocaleId
: returns the context LocaleId from this LengthValue
: since 6.0

string LengthString
: Return length as a string
: since 6.0

StringFormat LengthStringFormat
: Returns the StringFormat from this LengthValue
: since 6.0

[StringParserSettings](/rhinocommon/rhino/input/stringparsersettings/) ParseSettings
: Parse settings
: since 6.0

UnitSystem UnitSystem
: UnitSystem used by this LengthValue
: since 6.0
## Methods

static LengthValue Create(double length,UnitSystem us,StringFormat format)
: Create from Length and UnitSystem
: since 6.0

static LengthValue Create(double length,UnitSystem us,StringFormat format,uint localeId)
: Create from Length and UnitSystem
: since 6.0

static LengthValue Create(string s,StringParserSettings ps,bool parsedAll)
: Create from string
: since 6.0

LengthValue ChangeLength(double newLength)
: Changes the numeric value in a LengthValue and leaves all of the other info unchanged
     UnitSystem, ParseSettings and StringFormat stay as they were
: Returns - A new LengthValue
: since 6.0

LengthValue ChangeUnitSystem(UnitSystem newUnits)
: Change the UnitSystem of a LengthValue
     The numeric value of Length is scaled by new_us / current unit system
     so that the absolute length stays the same
: since 6.0

void Dispose()
: actively reclaim native allocated ON_LenghtValue*
: since 6.0

bool IsUnset()
: Test IsUnset
: since 6.0

double Length()
: Length value in this instance's current unit system
: since 6.0

double Length(UnitSystem units)
: Length value in a given unit system
: since 6.0
