---
title: "StringParserSettings"
draft: false
---

*Namespace: Rhino.Input*
 Parameters for parsing strings 
## Constructors
#### Rhino.Input.StringParserSettings()
- (summary) 
- (since) 6.0
## Properties
#### static StringParserSettings DefaultParseSettings
- (summary) 
     - The default settings parse just about everything in
       a reasonable way.  
     - Any angle values with unspecified units will be
       treated as radians. Angles without units can be
       encountered while parsing formulas, lengths and 
       points and need to be thoughtfully considered in
       most parsing situations.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsDegrees
- (summary) 
     - The default settings parse just about everything in
       a reasonable way.
     - Any angle values with unspecified units will be
       treated as degrees.Angles without units can be
      encountered while parsing formulas, lengths and
      points and need to be thoughtfully considered in
       most parsing situations.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsDoubleNumber
- (summary) 
     - The double number settings parse and optional unary + or unary -
       and then parse a number that can be integer, decimal, or
       scientific e notation.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsEmpty
- (summary) 
     - ON_ParseSetting::FalseSettings has all parsing options
       set to false.
     - A common use of ON_ParseSettings FalseSettings is to intialize
       ON_ParseSettings classes that are used to report what happened
       during parsing.Any parsing results value set to True after
       parsing indicates that type of parsing occured.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsIntegerNumber
- (summary) 
     - The integer settings parse and optional unary + or unary - and
       then parses one or more digits.Parsing stops after the last digit.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsRadians
- (summary) 
     - The default settings parse just about everything in
       a reasonable way.
     - Any angle values with unspecified units will be
       treated as radians.Angles without units can be
       encountered while parsing formulas, lengths and
       points and need to be thoughtfully considered in
       most parsing situations.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsRationalNumber
- (summary) 
     - The rational number settings parse and optional unary + or unary -
       and then parse one or more digits.If a rational number fraction
       bar follows the last digit in the numerator, then it is parsed
       and an integer denominator is parsed.The denominator cannot
       have a unary + or - preceding the digits.Parsing stops after
       the last digit in the denominator.
     
- (since) 6.0
#### static StringParserSettings ParseSettingsRealNumber
- (summary) 
     - The real number settings parse and optional unary + or unary -
       and then parse a number that can be integer, decimal, 
       scientific e notation or pi.
     
- (since) 6.0
#### AngleUnitSystem DefaultAngleUnitSystem
- (summary) 
- (since) 6.0
#### UnitSystem DefaultLengthUnitSystem
- (summary) 
- (since) 6.0
#### bool ParseAddition
- (summary) 
- (since) 6.0
#### bool ParseArcDegreesMinutesSeconds
- (summary) 
- (since) 6.0
#### bool ParseArithmeticExpression
- (summary) 
- (since) 6.0
#### bool ParseCommaAsDecimalPoint
- (summary) 
- (since) 6.0
#### bool ParseCommaAsDigitSeparator
- (summary) 
- (since) 6.0
#### bool ParseDAsExponentInScientificENotation
- (summary) 
- (since) 6.0
#### bool ParseDivision
- (summary) 
- (since) 6.0
#### bool ParseExplicitFormulaExpression
- (summary) 
- (since) 6.0
#### bool ParseFeetInches
- (summary) 
- (since) 6.0
#### bool ParseFullStopAsDecimalPoint
- (summary) 
- (since) 6.0
#### bool ParseFullStopAsDigitSeparator
- (summary) 
- (since) 6.0
#### bool ParseHyphenAsNumberDash
- (summary) 
- (since) 6.0
#### bool ParseHyphenMinusAsNumberDash
- (summary) 
- (since) 6.0
#### bool ParseIntegerDashFraction
- (summary) 
- (since) 6.0
#### bool ParseLeadingWhiteSpace
- (summary) 
- (since) 6.0
#### bool ParseMathFunctions
- (summary) 
- (since) 6.0
#### bool ParseMultiplication
- (summary) 
- (since) 6.0
#### bool ParsePairedParentheses
- (summary) 
- (since) 6.0
#### bool ParsePi
- (summary) 
- (since) 6.0
#### bool ParseRationalNumber
- (summary) 
- (since) 6.0
#### bool ParseScientificENotation
- (summary) 
- (since) 6.0
#### bool ParseSignificandDigitSeparators
- (summary) 
- (since) 6.0
#### bool ParseSignificandFractionalPart
- (summary) 
- (since) 6.0
#### bool ParseSignificandIntegerPart
- (summary) 
- (since) 6.0
#### bool ParseSpaceAsDigitSeparator
- (summary) 
- (since) 6.0
#### bool ParseSubtraction
- (summary) 
- (since) 6.0
#### bool ParseSurveyorsNotation
- (summary) 
- (since) 6.0
#### bool ParseUnaryMinus
- (summary) 
- (since) 6.0
#### bool ParseUnaryPlus
- (summary) 
- (since) 6.0
#### uint PreferedLocaleId
- (summary) 
- (since) 6.0
## Methods
#### void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void SetAllExpressionSettingsToFalse()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void SetAllFieldsToFalse()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
