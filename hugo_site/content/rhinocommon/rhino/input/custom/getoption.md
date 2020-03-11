---
title: "GetOption"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

If you want to explicitly get string input, then use GetString class with
   options. If you only want to get options, then use this class (GetOption)
```cs
public class GetOption : GetBaseClass
```
## Constructors

GetOption()
: 
## Methods

[GetResult](/rhinocommon/rhino/input/getresult/) Get()
: Call to get an option. A return value of "option" means the user selected
     a valid option. Use Option() the determine which option.
: Returns - If the user chose an option, then ; another enumeration value otherwise.
