---
title: "GetString"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Used to get strings.
```cs
public class GetString : GetBaseClass
```
## Constructors

GetString()
: Constructs a new GetString.
## Methods

[GetResult](/rhinocommon/rhino/input/getresult/) Get()
: Returns the string that the user typed. By default, space stops the string input.
: Returns - The result type. If the user typed a string, this is .

[GetResult](/rhinocommon/rhino/input/getresult/) GetLiteralString()
: Returns the string that the user typed. By default, space does not stop input.
: Returns - The result type. If the user typed a string, this is .
