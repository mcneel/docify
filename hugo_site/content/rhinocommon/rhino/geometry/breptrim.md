---
title: "BrepTrim"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Brep trim information is stored in BrepTrim classes. Brep.Trims is an
   array of all the trims in the brep. A BrepTrim is derived from CurveProxy
   so the trim can supply easy to use evaluation tools via the Curve virtual
   member functions.
   Note well that the domains and orientations of the curve m_C2[trim.m_c2i]
   and the trim as a curve may not agree.
```cs
public class BrepTrim : CurveProxy
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets the Brep that owns this trim.
: since 5.1

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Edge
: Brep edge this trim belongs to. This will be None for singular trims
: since 5.1

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) EndVertex
: BrepVertex at end of trim
: since 6.0

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Face
: Brep face this trim belongs to
: since 5.1

[IsoStatus](/rhinocommon/rhino/geometry/isostatus/) IsoStatus
: 
: since 5.6

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) Loop
: Loop that this trim belongs to
: since 5.1

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) StartVertex
: BrepVertex at start of trim
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/) TrimCurve
: Gets the Brep.Curves2D 2d curve geometry used by this trim, or null.
: since 6.0

int TrimCurveIndex
: Gets the Brep.Curves2D 2d curve index of the 2d curve geometry used by this trim, or -1.
: since 6.0

int TrimIndex
: Gets the index of this trim in the Brep.Trims collection.
: since 5.1

[BrepTrimType](/rhinocommon/rhino/geometry/breptrimtype/) TrimType
: Type of trim
: since 5.1
## Methods

void GetTolerances(double toleranceU,double toleranceV)
: The values in tolerance[] record the accuracy of the parameter space
     trimming curves.
: since 5.6

bool GetTrimParameter(double edgeParameter,double trimParameter)
: Get corresponding trim parameter at given edge parameter.
: Returns - True on success
: since 5.12

bool IsReversed()
: Get orientation of trim with respect to it's corresponding edge.
: Returns - True if the 2d trim and 3d edge have opposite orientations
: since 5.12

void SetTolerances(double toleranceU,double toleranceV)
: The values in tolerance[] record the accuracy of the parameter space
     trimming curves.
: since 5.6

bool SetTrimCurve(int curve2dIndex)
: Set 2d curve geometry used by a b-rep trim.
: Returns - True if successful
: since 5.4

bool SetTrimCurve(int curve2dIndex,Interval subDomain)
: Set 2d curve geometry used by a b-rep trim.
: Returns - True if successful
: since 5.4
