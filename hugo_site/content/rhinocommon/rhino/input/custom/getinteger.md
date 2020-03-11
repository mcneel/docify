---
title: "GetInteger"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Used to get integer numbers.
```cs
public class GetInteger : GetBaseClass
```
## Constructors

GetInteger()
: 
## Methods

[GetResult](/rhinocommon/rhino/input/getresult/) Get()
: Call to get an integer.
: Returns - If the user chose a number, then ; another enumeration value otherwise.

int Number()
: 

void SetLowerLimit(int lowerLimit,bool strictlyGreaterThan)
: Sets a lower limit on the number that can be returned.
     By default there is no lower limit.

void SetUpperLimit(int upperLimit,bool strictlyLessThan)
: Sets an upper limit on the number that can be returned.
     By default there is no upper limit.
