---
title: "SweepOneRail"
draft: false
---

*Namespace: Rhino.Geometry*

   Utility class for generating Breps by sweeping cross section curves over a single rail curve. 
   Note, this class has been superceeded by the Rhino.Geometry.Brep.CreateFromSweep static functions.
   
## Constructors
#### Rhino.Geometry.SweepOneRail()
- (summary) 
- (since) 5.0
## Properties
#### double AngleToleranceRadians
- (summary) 
- (since) 5.0
#### bool ClosedSweep
- (summary) 
     If the input rail is closed, ClosedSweep determines if the swept breps will also
     be closed.
     
- (since) 5.0
#### bool GlobalShapeBlending
- (summary) 
     If true, the sweep is linearly blended from one end to the other,
     creating sweeps that taper from one cross-section curve to the other.
     If false, the sweep stays constant at the ends and changes more
     rapidly in the middle.
     
- (since) 5.1
#### bool IsFreeform
- (summary) 
- (since) 5.0
#### bool IsRoadlike
- (summary) 
- (since) 5.0
#### bool IsRoadlikeFront
- (summary) 
- (since) 5.0
#### bool IsRoadlikeTop
- (summary) 
- (since) 5.0
#### bool IsRoadlineRight
- (summary) 
- (since) 5.0
#### int MiterType
- (summary) 
     0: don't miter,  1: intersect surfaces and trim sweeps,  2: rotate shapes at kinks and don't trim.
     
- (since) 5.0
#### double SweepTolerance
- (summary) 
- (since) 5.0
## Methods
#### Brep[] PerformSweep(Curve rail,Curve crossSection)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweep(Curve rail,Curve crossSection,double crossSectionParameter)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRebuild(Curve rail,Curve crossSection,double crossSectionParameter,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRebuild(Curve rail,Curve crossSection,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRebuild(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRebuild(Curve rail,IEnumerable<Curve> crossSections,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRefit(Curve rail,Curve crossSection,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRefit(Curve rail,Curve crossSection,double crossSectionParameter,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRefit(Curve rail,IEnumerable<Curve> crossSections,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### Brep[] PerformSweepRefit(Curve rail,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
#### void SetRoadlikeUpDirection(Vector3d up)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void SetToRoadlikeFront()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void SetToRoadlikeRight()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void SetToRoadlikeTop()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
