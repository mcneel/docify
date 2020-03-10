---
title: "Rhino.Geometry.Interpolator"
draft: false
---

# Constructors
## Rhino.Geometry.Interpolator()
- (summary) 
     Constructs a new, empty Interpolator.
     
- (since) 5.0
## Rhino.Geometry.Interpolator(IEnumerable<double> collection)
- (summary) 
     Constructs an Interpolator from a collection of numbers.
     
- (since) 5.0
## Rhino.Geometry.Interpolator(int initialCapacity)
- (summary) 
     Constructs an empty Interpolator with a certain capacity.
     
- (since) 5.0
## Rhino.Geometry.Interpolator(int amount,double defaultValue)
- (summary) 
     Constructs a new Interpolator with a specified amount of numbers.
     
- (since) 5.0
## Rhino.Geometry.Interpolator(RhinoList<double> list)
- (summary) 
     Copy all the numbers from an existing RhinoList.
     
- (since) 5.0
# Properties
## bool Cyclical
- (summary) 
     Gets or sets a value indicating whether or not the values inside this Interpolator 
     are to be treated as cyclical (i.e. circular).
     
- (since) 5.0
# Methods
## double InterpolateCatmullRom(double t)
- (summary) 
     Sample the list of numbers with Catmull-Rom interpolation.
     
- (since) 5.0
- (returns) double This is some return comment
## double InterpolateCosine(double t)
- (summary) 
     Sample the list of numbers with cosine interpolation.
     
- (since) 5.0
- (returns) double This is some return comment
## double InterpolateCubic(double t)
- (summary) 
     Sample the list of numbers with cubic interpolation.
     
- (since) 5.0
- (returns) double This is some return comment
## double InterpolateLinear(double t)
- (summary) 
     Sample the list of numbers with linear interpolation.
     
- (since) 5.0
- (returns) double This is some return comment
## double InterpolateNearestNeighbour(double t)
- (summary) 
     Sample the list of numbers with Nearest Neighbour interpolation. 
     
- (since) 5.0
- (returns) double This is some return comment
