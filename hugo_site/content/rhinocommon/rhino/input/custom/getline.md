---
title: "GetLine"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Use to interactively get a line.  The Rhino "Line" command uses GetLine.
```cs
public class GetLine : IDisposable
```
## Constructors

GetLine()
: 
: since 5.1
## Properties

bool AcceptZeroLengthLine
: Controls whether or not a zero length line is acceptable.
     The default is to require the user to keep picking the end
     point until we get a point different than the start point.
: since 5.1

Color FeedbackColor
: If set, the feedback color is used to draw the dynamic
     line when the second point is begin picked.  If not set,
     the active layer color is used.
: since 5.1

string FirstPointPrompt
: Prompt when getting first point
: since 5.1

double FixedLength
: If FixedLength > 0, the line must have the specified length
: since 5.1

[GetLineMode](/rhinocommon/rhino/input/custom/getlinemode/) GetLineMode
: Mode used
: since 5.1

bool HaveFeedbackColor
: If true, the feedback color is used to draw the dynamic
     line when the second point is begin picked.  If false,
     the active layer color is used.
: since 5.1

string MidPointPrompt
: Prompt when getting midpoint
: since 5.1

string SecondPointPrompt
: Prompt when getting second point
: since 5.1
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.1

void EnableAllVariations(bool on)
: If true, then all line variations are shown if the default line mode is used
: since 5.1

void EnableFromBothSidesOption(bool on)
: If true, then the "BothSides" option shows up when the
     start point is inteactively picked.
: since 5.1

void EnableFromMidPointOption(bool on)
: If true, the the "MidPoint" options shows up
: since 5.1

Commands.Result Get(Line line)
: Perform the 'get' operation.
: since 5.1

void SetFirstPoint(Point3d point)
: Use SetFirstPoint to specify the line's starting point and skip
     the start point interactive picking
: since 5.1
