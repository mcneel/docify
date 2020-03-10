---
title: "Rhino.LengthValue"
draft: false
---

# Properties
## AngleUnitSystem ContextAngleUnitSystem
- (summary) 
     Returns the context AngleUnitSystem from this LengthValue's ParseSettings
     
- (since) 6.0
## uint ContextLocaleId
- (summary) 
     returns the context LocaleId from this LengthValue
     
- (since) 6.0
## string LengthString
- (summary) 
     Return length as a string
     
- (since) 6.0
## StringFormat LengthStringFormat
- (summary) 
     Returns the StringFormat from this LengthValue
     
- (since) 6.0
## StringParserSettings ParseSettings
- (summary)  Parse settings 
- (since) 6.0
## UnitSystem UnitSystem
- (summary) 
     UnitSystem used by this LengthValue
     
- (since) 6.0
# Methods
## static LengthValue Create(double length,UnitSystem us,StringFormat format)
- (summary) Create from Length and UnitSystem
- (since) 6.0
- (returns) LengthValue This is some return comment
## static LengthValue Create(double length,UnitSystem us,StringFormat format,uint localeId)
- (summary) Create from Length and UnitSystem
- (since) 6.0
- (returns) LengthValue This is some return comment
## static LengthValue Create(string s,StringParserSettings ps,bool parsedAll)
- (summary)  Create from string 
- (since) 6.0
- (returns) LengthValue This is some return comment
## LengthValue ChangeLength(double newLength)
- (summary) 
     Changes the numeric value in a LengthValue and leaves all of the other info unchanged
     UnitSystem, ParseSettings and StringFormat stay as they were
     
- (since) 6.0
- (returns) LengthValue This is some return comment
## LengthValue ChangeUnitSystem(UnitSystem newUnits)
- (summary) 
     Change the UnitSystem of a LengthValue
     The numeric value of Length is scaled by new_us / current unit system
     so that the absolute length stays the same
     
- (since) 6.0
- (returns) LengthValue This is some return comment
## void Dispose()
- (summary) actively reclaim native allocated ON_LenghtValue*
- (since) 6.0
- (returns) void This is some return comment
## bool IsUnset()
- (summary) 
     Test IsUnset
     
- (since) 6.0
- (returns) bool This is some return comment
## double Length()
- (summary) 
     Length value in this instance's current unit system
     
- (since) 6.0
- (returns) double This is some return comment
## double Length(UnitSystem units)
- (summary)  Length value in a given unit system 
- (since) 6.0
- (returns) double This is some return comment
