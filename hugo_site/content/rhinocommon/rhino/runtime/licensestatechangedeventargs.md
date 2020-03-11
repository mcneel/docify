---
title: "LicenseStateChangedEventArgs"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Passed to LicenseStateChanged event on RhinoApp
```cs
public class LicenseStateChangedEventArgs : EventArgs
```
## Constructors

LicenseStateChangedEventArgs(bool callingRhinoCommonAllowed)
: LicenseStateChangedEventArgs constructor
: since 7.0
## Properties

bool CallingRhinoCommonAllowed
: True if RhinoCommon calls will never raise Rhino.Runtime.NotLicensedException.
     False otherwise
: since 7.0
