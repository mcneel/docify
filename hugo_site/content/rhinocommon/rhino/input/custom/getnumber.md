---
title: "GetNumber"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Used to get double precision numbers.
```cs
public class GetNumber : GetBaseClass
```
## Constructors

GetNumber()
: Create a new GetNumber.
## Methods

[GetResult](/rhinocommon/rhino/input/getresult/) Get()
: Call to get a number.
: Returns - If the user chose a number, then ; another enumeration value otherwise.

void SetLowerLimit(double lowerLimit,bool strictlyGreaterThan)
: Sets a lower limit on the number that can be returned.
     By default there is no lower limit.

void SetUpperLimit(double upperLimit,bool strictlyLessThan)
: Sets an upper limit on the number that can be returned.
     By default there is no upper limit.
