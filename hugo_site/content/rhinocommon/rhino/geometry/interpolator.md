---
title: "Interpolator"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Exposes a set of standard numeric interpolation algorithms.
```cs
public class Interpolator : RhinoList<double>
```
## Constructors

Interpolator()
: Constructs a new, empty Interpolator.

Interpolator(IEnumerable<double> collection)
: Constructs an Interpolator from a collection of numbers.

Interpolator(int initialCapacity)
: Constructs an empty Interpolator with a certain capacity.

Interpolator(int amount,double defaultValue)
: Constructs a new Interpolator with a specified amount of numbers.

Interpolator(RhinoList<double> list)
: Copy all the numbers from an existing RhinoList.
## Properties

bool Cyclical
: Gets or sets a value indicating whether or not the values inside this Interpolator 
     are to be treated as cyclical (i.e. circular).
## Methods

double InterpolateCatmullRom(double t)
: Sample the list of numbers with Catmull-Rom interpolation.
: Returns - The sampled value at t.

double InterpolateCosine(double t)
: Sample the list of numbers with cosine interpolation.
: Returns - The sampled value at t.

double InterpolateCubic(double t)
: Sample the list of numbers with cubic interpolation.
: Returns - The sampled value at t.

double InterpolateLinear(double t)
: Sample the list of numbers with linear interpolation.
: Returns - The sampled value at t.

double InterpolateNearestNeighbour(double t)
: Sample the list of numbers with Nearest Neighbour interpolation.
: Returns - The sampled value at t.
