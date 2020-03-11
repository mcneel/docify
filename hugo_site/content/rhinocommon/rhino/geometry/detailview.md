---
title: "DetailView"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a view of the model placed on a page layout.
```cs
[Serializable]
public class DetailView : GeometryBase
```
## Properties

bool IsParallelProjection
: Gets or sets whether the view is parallel.

bool IsPerspectiveProjection
: Gets or sets whether the view is perspective.

bool IsProjectionLocked
: Gets or sets whether the view projection is locked.

double PageToModelRatio
: Gets the page units/model units quotient.
## Methods

bool SetScale(double modelLength,UnitSystem modelUnits,double pageLength,UnitSystem pageUnits)
: Sets the detail viewport's projection so geometry is displayed at a certain scale.
: Returns - True on success. False if the DetailView projection is perspective or input values are incongruous.
