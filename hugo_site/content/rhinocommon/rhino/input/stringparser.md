---
title: "StringParser"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Input](../)*

Parse strings to numbers, distances and angles
```cs
public class StringParser
```
## Methods

static int ParseAngleExpession(string expression,int start_offset,int expression_length,StringParserSettings parse_settings_in,AngleUnitSystem output_angle_unit_system,double value_out,StringParserSettings parse_results,AngleUnitSystem parsed_unit_system)
: 
: since 6.0

static bool ParseAngleExpressionDegrees(string expression,double angle_degrees)
: 
: since 6.0

static bool ParseAngleExpressionRadians(string expression,double angle_radians)
: 
: since 6.0

static int ParseLengthExpession(string expression,int start_offset,int expression_length,StringParserSettings parse_settings_in,UnitSystem output_unit_system,double value_out,StringParserSettings parse_results,UnitSystem parsed_unit_system)
: Parse a string for a length value.
     Expression can include complex expressions
     Most complex version of length parsing
: Returns - Returns the count of characters that were parsed or 0 if the operation was unsuccesful
: since 6.0

static int ParseLengthExpession(string expression,StringParserSettings parse_settings_in,UnitSystem output_unit_system,double value_out)
: Parse a string for a length value.
     Expression can include complex expressions
     Simplest version of Length parsing
: Returns - Count of characters parsed or 0 for failure
: since 6.0

static int ParseNumber(string expression,int max_count,StringParserSettings settings_in,StringParserSettings settings_out,double answer)
: Parse a string expression to get a number
: Returns - Count of characters in expression parsed
     if ParseNumber() returns 0, parse was unsuccesful
: since 6.0
