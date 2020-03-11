---
title: "Hatch"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a hatch in planar boundary loop or loops.
   This is a 2d entity with a plane defining a local coordinate system.
   The loops, patterns, angles, etc are all in this local coordinate system.
   The Hatch object manages the plane and loop array
   Fill definitions are in the HatchPattern or class derived from HatchPattern
   Hatch has an index to get the pattern definition from the pattern table.
```cs
[Serializable]
public class Hatch : GeometryBase
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) BasePoint
: Gets or sets the hatchpattern basepoint
: since 6.11

int PatternIndex
: Gets or sets the index of the pattern in the document hatch pattern table.

double PatternRotation
: Gets or sets the relative rotation of the pattern.

double PatternScale
: Gets or sets the scaling factor of the pattern.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the hatch plane
: since 6.11
## Methods

static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale)
: Constructs an array of hatches from one curve.
: Returns - An array of hatches. The array might be empty on error.

static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)
: Constructs an array of hatches from one curve.
: Returns - An array of hatches. The array might be empty on error.
: since 6.0

static Hatch[] Create(IEnumerable<Curve> curves,int hatchPatternIndex,double rotationRadians,double scale)
: Constructs an array of hatches from a set of curves.
: Returns - An array of hatches. The array might be empty on error.

static Hatch[] Create(IEnumerable<Curve> curves,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)
: Constructs an array of hatches from a set of curves.
: Returns - An array of hatches. The array might be empty on error.
: since 6.0

void CreateDisplayGeometry(HatchPattern pattern,double patternScale,Curve[] bounds,Line[] lines,Brep solidBrep)
: Generate geometry that would be used to draw the hatch with a given hatch pattern
: since 5.6

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/)[] Explode()
: Decomposes the hatch pattern into an array of geometry.
: Returns - An array of geometry that formed the appearance of the original elements.

[Curve](/rhinocommon/rhino/geometry/curve/)[] Get3dCurves(bool outer)
: Gets 3d curves that define the boundaries of the hatch

Rhino.Display.ColorGradient GetGradientFill()
: Get gradient fill information for this hatch. If the "GradientType" for
     the fill is None, then this hatch doesn't have any gradient fill.
: since 7.0

void ScalePattern(Transform xform)
: Scale the hatch's pattern
: since 6.11

void SetGradientFill(ColorGradient fill)
: 
: since 7.0
