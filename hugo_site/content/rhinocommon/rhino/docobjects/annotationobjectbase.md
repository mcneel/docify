---
title: "AnnotationObjectBase"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Base class for all annotation objects (text and dimensions)
```cs
public class AnnotationObjectBase : RhinoObject
```
## Properties

[AnnotationBase](/rhinocommon/rhino/geometry/annotationbase/) AnnotationGeometry
: Get the annotation base geometry for this object
: since 6.0

string DisplayText
: Gets the text that is displayed to users.

bool HasMeasurableTextFields
: Test if the text in the annotation object contains fields
     that involve length, area, or volume measurements
: since 7.0
