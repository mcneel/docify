---
title: "ParticleSystem"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

```cs
public class ParticleSystem : IEnumerable<Particle>
```
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: 

bool DisplaySizesInWorldUnits
: 

bool DrawRequiresDepthSorting
: 
## Methods

bool Add(Particle particle)
: Adds a particle to this ParticleSystem. A Particle can only be in one system
     at a time.  If the Particle already exists in a different system, this function
     will return false. You should remove the particle from the other system first
     before adding it.
: Returns - True if this particle was added to the system or if is already in the system.
     False if the particle already exists in a different system.

void Clear()
: Remove all Particles from this system.

IEnumerator<Particle> GetEnumerator()
: 

void Remove(Particle particle)
: Removes a single particle from this system.

void Update()
: Calls Update on every particle in the system.
