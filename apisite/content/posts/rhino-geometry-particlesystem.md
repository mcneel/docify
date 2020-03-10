---
title: "Rhino.Geometry.ParticleSystem"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## BoundingBox BoundingBox
- (summary) 
- (since) 5.0
## bool DisplaySizesInWorldUnits
- (summary) 
- (since) 5.0
## bool DrawRequiresDepthSorting
- (summary) 
- (since) 5.0
# Methods
## bool Add(Particle particle)
- (summary) 
     Adds a particle to this ParticleSystem. A Particle can only be in one system
     at a time.  If the Particle already exists in a different system, this function
     will return false. You should remove the particle from the other system first
     before adding it.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Clear()
- (summary) 
     Remove all Particles from this system.
     
- (since) 5.0
- (returns) void This is some return comment
## IEnumerator<Particle> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<Particle> This is some return comment
## void Remove(Particle particle)
- (summary) 
     Removes a single particle from this system.
     
- (since) 5.0
- (returns) void This is some return comment
## void Update()
- (summary) 
     Calls Update on every particle in the system.
     
- (since) 5.0
- (returns) void This is some return comment
