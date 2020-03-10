---
title: "CommandLineOption"
draft: false
---

*Namespace: Rhino.Input.Custom*
## Properties
#### int CurrentListOptionIndex
- (summary) 
- (since) 5.0
#### string EnglishName
- (summary) 
     The English command option name
     
- (since) 5.0
#### int Index
- (summary) 
- (since) 5.0
#### string LocalName
- (summary) 
     The localized command option name
     
- (since) 6.24
#### string StringOptionValue
- (summary) 
     Assigned by RhinoGet.Get if an option value is specified in a script or by a command window control.
     
- (since) 6.24
## Methods
#### static bool IsValidOptionName(string optionName)
- (summary) 
     Test a string to see if it can be used as an option name in any of the RhinoGet::AddCommandOption...() functions.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool IsValidOptionValueName(string optionValue)
- (summary) 
     Test a string to see if it can be used as an option value in RhinoGet::AddCommandOption,
     RhinoGet::AddCommandOptionToggle, or RhinoGet::AddCommandOptionList.
     
- (since) 5.0
- (returns) bool This is some return comment
