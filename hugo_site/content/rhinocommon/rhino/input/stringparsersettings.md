---
title: "StringParserSettings"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Input](../)*

Parameters for parsing strings
```cs
public class StringParserSettings : IDisposable
```
## Constructors

StringParserSettings()
: 
: since 6.0
## Properties

static StringParserSettings DefaultParseSettings
: - The default settings parse just about everything in
       a reasonable way.  
     - Any angle values with unspecified units will be
       treated as radians. Angles without units can be
       encountered while parsing formulas, lengths and 
       points and need to be thoughtfully considered in
       most parsing situations.
: since 6.0

static StringParserSettings ParseSettingsDegrees
: - The default settings parse just about everything in
       a reasonable way.
     - Any angle values with unspecified units will be
       treated as degrees.Angles without units can be
      encountered while parsing formulas, lengths and
      points and need to be thoughtfully considered in
       most parsing situations.
: since 6.0

static StringParserSettings ParseSettingsDoubleNumber
: - The double number settings parse and optional unary + or unary -
       and then parse a number that can be integer, decimal, or
       scientific e notation.
: since 6.0

static StringParserSettings ParseSettingsEmpty
: - ON_ParseSetting::FalseSettings has all parsing options
       set to false.
     - A common use of ON_ParseSettings FalseSettings is to intialize
       ON_ParseSettings classes that are used to report what happened
       during parsing.Any parsing results value set to True after
       parsing indicates that type of parsing occured.
: since 6.0

static StringParserSettings ParseSettingsIntegerNumber
: - The integer settings parse and optional unary + or unary - and
       then parses one or more digits.Parsing stops after the last digit.
: since 6.0

static StringParserSettings ParseSettingsRadians
: - The default settings parse just about everything in
       a reasonable way.
     - Any angle values with unspecified units will be
       treated as radians.Angles without units can be
       encountered while parsing formulas, lengths and
       points and need to be thoughtfully considered in
       most parsing situations.
: since 6.0

static StringParserSettings ParseSettingsRationalNumber
: - The rational number settings parse and optional unary + or unary -
       and then parse one or more digits.If a rational number fraction
       bar follows the last digit in the numerator, then it is parsed
       and an integer denominator is parsed.The denominator cannot
       have a unary + or - preceding the digits.Parsing stops after
       the last digit in the denominator.
: since 6.0

static StringParserSettings ParseSettingsRealNumber
: - The real number settings parse and optional unary + or unary -
       and then parse a number that can be integer, decimal, 
       scientific e notation or pi.
: since 6.0

AngleUnitSystem DefaultAngleUnitSystem
: 
: since 6.0

UnitSystem DefaultLengthUnitSystem
: 
: since 6.0

bool ParseAddition
: 
: since 6.0

bool ParseArcDegreesMinutesSeconds
: 
: since 6.0

bool ParseArithmeticExpression
: 
: since 6.0

bool ParseCommaAsDecimalPoint
: 
: since 6.0

bool ParseCommaAsDigitSeparator
: 
: since 6.0

bool ParseDAsExponentInScientificENotation
: 
: since 6.0

bool ParseDivision
: 
: since 6.0

bool ParseExplicitFormulaExpression
: 
: since 6.0

bool ParseFeetInches
: 
: since 6.0

bool ParseFullStopAsDecimalPoint
: 
: since 6.0

bool ParseFullStopAsDigitSeparator
: 
: since 6.0

bool ParseHyphenAsNumberDash
: 
: since 6.0

bool ParseHyphenMinusAsNumberDash
: 
: since 6.0

bool ParseIntegerDashFraction
: 
: since 6.0

bool ParseLeadingWhiteSpace
: 
: since 6.0

bool ParseMathFunctions
: 
: since 6.0

bool ParseMultiplication
: 
: since 6.0

bool ParsePairedParentheses
: 
: since 6.0

bool ParsePi
: 
: since 6.0

bool ParseRationalNumber
: 
: since 6.0

bool ParseScientificENotation
: 
: since 6.0

bool ParseSignificandDigitSeparators
: 
: since 6.0

bool ParseSignificandFractionalPart
: 
: since 6.0

bool ParseSignificandIntegerPart
: 
: since 6.0

bool ParseSpaceAsDigitSeparator
: 
: since 6.0

bool ParseSubtraction
: 
: since 6.0

bool ParseSurveyorsNotation
: 
: since 6.0

bool ParseUnaryMinus
: 
: since 6.0

bool ParseUnaryPlus
: 
: since 6.0

uint PreferedLocaleId
: 
: since 6.0
## Methods

void Dispose()
: 
: since 6.0

void SetAllExpressionSettingsToFalse()
: 
: since 6.0

void SetAllFieldsToFalse()
: 
: since 6.0
