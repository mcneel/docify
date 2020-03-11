---
title: "File3dmSettings"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

General settings in a 3dm file.
```cs
public class File3dmSettings
```
## Properties

double ModelAbsoluteTolerance
: Gets or sets the model space absolute tolerance.

double ModelAngleToleranceDegrees
: Gets or sets the model space angle tolerance.

double ModelAngleToleranceRadians
: Gets or sets the model space angle tolerance.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ModelBasepoint
: Gets or sets the model basepoint that is used when the file is read as an instance definition.
     This point is mapped to the origin in the instance definition.

double ModelRelativeTolerance
: Gets or sets the model space relative tolerance.

UnitSystem ModelUnitSystem
: Gets or sets the model unit system, using  enumeration.

string ModelUrl
: Gets or sets a Uniform Resource Locator (URL) direction for the model.

double PageAbsoluteTolerance
: Gets or sets the page space absolute tolerance.

double PageAngleToleranceDegrees
: Gets or sets the page space angle tolerance.

double PageAngleToleranceRadians
: Gets or sets the page space angle tolerance.

double PageRelativeTolerance
: Gets or sets the page space relative tolerance.

UnitSystem PageUnitSystem
: Gets or sets the page unit system, using  enumeration.
