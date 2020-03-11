---
title: "SweepTwoRail"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Utility class for generating Breps by sweeping cross section curves over two rail curves.
   Note, this class has been superceeded by the Rhino.Geometry.Brep.CreateFromSweep static functions.
```cs
public class SweepTwoRail
```
## Constructors

SweepTwoRail()
: 
## Properties

double AngleToleranceRadians
: Gets or sets the angle tolerance in radians.

bool ClosedSweep
: If the input rails are closed, ClosedSweep determines if the swept Breps will also be closed.

bool MaintainHeight
: Removes the association between the height scaling from the width scaling.

double SweepTolerance
: Gets or sets the sweeping tolerance.
## Methods

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail1,Curve rail2,Curve crossSection)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweep(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters1,IEnumerable<double> crossSectionParameters2)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail1,Curve rail2,Curve crossSection,int rebuildCount)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParametersRail1,IEnumerable<double> crossSectionParametersRail2,int rebuildCount)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRebuild(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,int rebuildCount)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail1,Curve rail2,Curve crossSection,double refitTolerance)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2,double refitTolerance)
: 

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,double refitTolerance)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformSweepRefit(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParametersRail1,IEnumerable<double> crossSectionParametersRail2,double refitTolerance)
: 
