---
title: "Rhino.Geometry.BrepTrim"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Brep Brep
- (summary) 
     Gets the Brep that owns this trim.
     
- (since) 5.1
## BrepEdge Edge
- (summary) 
     Brep edge this trim belongs to. This will be None for singular trims
     
- (since) 5.1
## BrepVertex EndVertex
- (summary) 
     BrepVertex at end of trim
     
- (since) 6.0
## BrepFace Face
- (summary) 
     Brep face this trim belongs to
     
- (since) 5.1
## IsoStatus IsoStatus
- (summary) 
- (since) 5.6
## BrepLoop Loop
- (summary) 
     Loop that this trim belongs to
     
- (since) 5.1
## BrepVertex StartVertex
- (summary) 
     BrepVertex at start of trim
     
- (since) 6.0
## Curve TrimCurve
- (summary) 
     Gets the Brep.Curves2D 2d curve geometry used by this trim, or null.
     
- (since) 6.0
## int TrimCurveIndex
- (summary) 
     Gets the Brep.Curves2D 2d curve index of the 2d curve geometry used by this trim, or -1.
     
- (since) 6.0
## int TrimIndex
- (summary) 
     Gets the index of this trim in the Brep.Trims collection.
     
- (since) 5.1
## BrepTrimType TrimType
- (summary) Type of trim
- (since) 5.1
# Methods
## void GetTolerances(double toleranceU,double toleranceV)
- (summary) 
     The values in tolerance[] record the accuracy of the parameter space
     trimming curves.
     
- (since) 5.6
- (returns) void This is some return comment
## bool GetTrimParameter(double edgeParameter,double trimParameter)
- (summary) 
     Get corresponding trim parameter at given edge parameter.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool IsReversed()
- (summary) 
     Get orientation of trim with respect to it's corresponding edge.
     
- (since) 5.12
- (returns) bool This is some return comment
## void SetTolerances(double toleranceU,double toleranceV)
- (summary) 
     The values in tolerance[] record the accuracy of the parameter space
     trimming curves.
     
- (since) 5.6
- (returns) void This is some return comment
## bool SetTrimCurve(int curve2dIndex)
- (summary) 
     Set 2d curve geometry used by a b-rep trim.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool SetTrimCurve(int curve2dIndex,Interval subDomain)
- (summary) 
     Set 2d curve geometry used by a b-rep trim.
     
- (since) 5.4
- (returns) bool This is some return comment
