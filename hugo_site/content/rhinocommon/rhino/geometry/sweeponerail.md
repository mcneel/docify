---
title: "SweepOneRail"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Utility class for generating Breps by sweeping cross section curves over a single rail curve. 
   Note, this class has been superceeded by the Rhino.Geometry.Brep.CreateFromSweep static functions.
```cs
public class SweepOneRail
```
## Constructors

SweepOneRail()
: 
## Properties

double AngleToleranceRadians
: 

bool ClosedSweep
: If the input rail is closed, ClosedSweep determines if the swept breps will also
     be closed.

bool GlobalShapeBlending
: If true, the sweep is linearly blended from one end to the other,
     creating sweeps that taper from one cross-section curve to the other.
     If false, the sweep stays constant at the ends and changes more
     rapidly in the middle.
: since 5.1

bool IsFreeform
: 

bool IsRoadlike
: 

bool IsRoadlikeFront
: 

bool IsRoadlikeTop
: 

bool IsRoadlineRight
: 

int MiterType
: 0: don't miter,  1: intersect surfaces and trim sweeps,  2: rotate shapes at kinks and don't trim.

double SweepTolerance
: 
## Methods

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail,Curve crossSection)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail,Curve crossSection,double crossSectionParameter)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail,Curve crossSection,double crossSectionParameter,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail,Curve crossSection,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail,IEnumerable<Curve> crossSections,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail,Curve crossSection,double refitTolerance)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail,Curve crossSection,double crossSectionParameter,double refitTolerance)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail,IEnumerable<Curve> crossSections,double refitTolerance)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters,double refitTolerance)
: 

void SetRoadlikeUpDirection(Vector3d up)
: 

void SetToRoadlikeFront()
: 

void SetToRoadlikeRight()
: 

void SetToRoadlikeTop()
: 
