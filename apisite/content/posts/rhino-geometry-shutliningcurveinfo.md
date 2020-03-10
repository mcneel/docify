---
title: "ShutLiningCurveInfo"
draft: false
---

*Namespace: Rhino.Geometry*

   Contains shutlining curve information. This is used in .
   
## Constructors
#### Rhino.Geometry.ShutLiningCurveInfo(Curve curve,double radius,int profile,bool pull,bool isBump,IEnumerable<Interval> curveIntervals,bool enabled)
- (summary) 
     Creates a new instance of the ShutLining curve information class.
     
- (since) 6.0
## Properties
#### Curve Curve
- (summary) 
     The profile curve.
     
- (since) 6.0
#### ReadOnlyCollection<Interval> CurveIntervals
- (summary) 
     The parts of the curve to use as profiles.
     
- (since) 6.0
#### bool Enabled
- (summary) 
     If true, this curve is active.
     
- (since) 6.0
#### bool IsBump
- (summary) 
     True if profile constitutes a bump. See Rhino's Help for more information.
     
- (since) 6.0
#### int Profile
- (summary) 
     >The profile type.
     
- (since) 6.0
#### bool Pull
- (summary) 
     True if the curve should be pulled.
     
- (since) 6.0
#### double Radius
- (summary) 
     The profile radius.
     
- (since) 6.0
