---
title: "Rhino.Geometry.SweepTwoRail"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Geometry.SweepTwoRail()
- (summary) 
- (since) 5.0
# Properties
## double AngleToleranceRadians
- (summary) 
     Gets or sets the angle tolerance in radians.
     
- (since) 5.0
## bool ClosedSweep
- (summary) 
     If the input rails are closed, ClosedSweep determines if the swept Breps will also be closed.
     
- (since) 5.0
## bool MaintainHeight
- (summary) 
     Removes the association between the height scaling from the width scaling.
     
- (since) 5.0
## double SweepTolerance
- (summary) 
     Gets or sets the sweeping tolerance.
     
- (since) 5.0
# Methods
## Brep[] PerformSweep(Curve rail1,Curve rail2,Curve crossSection)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweep(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweep(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweep(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParameters1,IEnumerable<double> crossSectionParameters2)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRebuild(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRebuild(Curve rail1,Curve rail2,Curve crossSection,int rebuildCount)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRebuild(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParametersRail1,IEnumerable<double> crossSectionParametersRail2,int rebuildCount)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRebuild(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,int rebuildCount)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRefit(Curve rail1,Curve rail2,Curve crossSection,double refitTolerance)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRefit(Curve rail1,Curve rail2,Curve crossSection,double crossSectionParameterRail1,double crossSectionParameterRail2,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRefit(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,double refitTolerance)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] PerformSweepRefit(Curve rail1,Curve rail2,IEnumerable<Curve> crossSections,IEnumerable<double> crossSectionParametersRail1,IEnumerable<double> crossSectionParametersRail2,double refitTolerance)
- (summary) 
- (since) 5.0
- (returns) Brep[] This is some return comment
