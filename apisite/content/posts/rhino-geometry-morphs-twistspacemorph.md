---
title: "Rhino.Geometry.Morphs.TwistSpaceMorph"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.Morphs.TwistSpaceMorph()
- (summary) 
     Constructs a twist space morph.
     
- (since) 5.1
# Properties
## bool InfiniteTwist
- (summary) 
     If true, the deformation is constant throughout the object, even if the axis is shorter than the object. 
     If false, the deformation takes place only the length of the axis.
     
- (since) 5.1
## double TwistAngleRadians
- (summary) 
     Twist angle in radians.
     
- (since) 5.1
## Line TwistAxis
- (summary) Axis to rotate about.
- (since) 5.1
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.1
- (returns) void This is some return comment
## Point3d MorphPoint(Point3d point)
- (summary) Morphs an Euclidean point. This method is abstract.
- (since) 5.1
- (returns) Point3d This is some return comment
