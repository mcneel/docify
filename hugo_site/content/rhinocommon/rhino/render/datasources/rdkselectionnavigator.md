---
title: "RdkSelectionNavigator"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.DataSources](../)*

```cs
public class RdkSelectionNavigator : IDisposable
```
## Constructors

RdkSelectionNavigator(IntPtr pRhinoSettings)
: 
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0
## Methods

void Add(RenderContentCollection selectedContentArray)
: Add a selection of contents at the current position.
   Clears the navigator ahead of the current position.
: since 6.0

bool CanGoBackwards()
: Check the backwards status of the navigator
: Returns - True if it is possible to navigate backwards, else false
: since 6.0

bool CanGoForwards()
: Check the forwards status of the navigator
: Returns - True if it is possible to navigate forwards, else false
: since 6.0

void Clear()
: Clear the navigator.
: since 6.0

void Dispose()
: 
: since 6.0

bool GoBackwards(RenderContentCollection selectedContentArray)
: Navigate backwards if possible
: Returns - True on success, else false
: since 6.0

bool GoForwards(RenderContentCollection selectedContentArray)
: Navigate forwards if possible
: Returns - True on success, else false
: since 6.0
