---
title: "Particle"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a simple particle.
   This base class only defines position and display properties (size, color, bitmap id).
   You will most likely create a class that derives from this particle class to perform some
   sort of physical simulation (movement over time or frames).
   
## Constructors
#### Rhino.Geometry.Particle()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 5.0
## Properties
#### System.Drawing.Color Color
- (summary) 
- (since) 5.0
#### int DisplayBitmapIndex
- (summary) 
- (since) 5.0
#### int Index
- (summary) 
     Index in ParentSystem for this Particle. Can change when the particle
     system is modified.
     
- (since) 5.0
#### Point3d Location
- (summary) 3d Location of the Particle.
- (since) 5.0
#### ParticleSystem ParentSystem
- (summary) 
     Gets the parent particle system of this particle.
     
- (since) 5.0
#### float Size
- (summary) 
- (since) 5.0
## Methods
#### void Update()
- (summary) 
     Base class implementation does nothing.
     
- (since) 5.0
- (returns) void This is some return comment
