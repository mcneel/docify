---
title: "Particle"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a simple particle.
   This base class only defines position and display properties (size, color, bitmap id).
   You will most likely create a class that derives from this particle class to perform some
   sort of physical simulation (movement over time or frames).
```cs
public class Particle
```
## Constructors

Particle()
: Initializes a new instance of the  class.
## Properties

Color Color
: 

int DisplayBitmapIndex
: 

int Index
: Index in ParentSystem for this Particle. Can change when the particle
     system is modified.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Location
: 3d Location of the Particle.

[ParticleSystem](/rhinocommon/rhino/geometry/particlesystem/) ParentSystem
: Gets the parent particle system of this particle.

float Size
: 
## Methods

void Update()
: Base class implementation does nothing.
