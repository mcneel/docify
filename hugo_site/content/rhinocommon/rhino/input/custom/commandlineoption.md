---
title: "CommandLineOption"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

```cs
public class CommandLineOption
```
## Properties

int CurrentListOptionIndex
: 

string EnglishName
: The English command option name

int Index
: 

string LocalName
: The localized command option name
: since 6.24

string StringOptionValue
: Assigned by RhinoGet.Get if an option value is specified in a script or by a command window control.
: since 6.24
## Methods

static bool IsValidOptionName(string optionName)
: Test a string to see if it can be used as an option name in any of the RhinoGet::AddCommandOption...() functions.
: Returns - True if string can be used as an option name.

static bool IsValidOptionValueName(string optionValue)
: Test a string to see if it can be used as an option value in RhinoGet::AddCommandOption,
     RhinoGet::AddCommandOptionToggle, or RhinoGet::AddCommandOptionList.
: Returns - True if string can be used as an option value.
