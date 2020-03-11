---
title: "BrepTrimList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the Trims in a Brep object
```cs
public class BrepTrimList : IEnumerable<BrepTrim>, Rhino.Collections.IRhinoTable<BrepTrim>
```
## Properties

int Count
: Gets the number of brep trims.
: since 5.1
## Methods

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) Add(bool rev3d,BrepEdge edge,int curve2dIndex)
: Add a new trim that will be part of an inner, outer, or slit loop
     to the brep
: Returns - new trim
: since 5.4

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) Add(bool rev3d,BrepLoop loop,int curve2dIndex)
: Add a new trim that will be part of an inner, outer, or slit loop
     to the brep
: Returns - new trim
: since 5.4

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) Add(BrepEdge edge,bool rev3d,BrepLoop loop,int curve2dIndex)
: Add a new trim that will be part of an inner, outer, or slit loop
     to the brep.
: Returns - new trim
: since 5.4

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) Add(int curve2dIndex)
: Add a new trim that will be part of an inner, outer, or slit loop
     to the brep.
: Returns - New Trim
: since 5.4

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) AddCurveOnFace(BrepFace face,BrepEdge edge,bool rev3d,int curve2dIndex)
: Add a new curve on face to the brep
: Returns - new trim that represents the curve on surface
: since 5.4

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) AddSingularTrim(BrepVertex vertex,BrepLoop loop,IsoStatus iso,int curve2dIndex)
: Add a new singular trim to the brep.
: Returns - new trim
: since 5.4

IEnumerator<BrepTrim> GetEnumerator()
: Gets an enumerator that visits all edges.
: Returns - The enumerator.
: since 5.1

bool MatchEnds()
: Matches the endpoints of all trims in the Brep.
: Returns - True if any trim's 2d curve is changed, False otherwise.
: since 6.19

bool MatchEnds(BrepLoop loop)
: Match the endpoints of all trims in a loop.
: Returns - True if any trim's 2d curve is changed, False otherwise.
: since 6.19

bool MatchEnds(BrepTrim trim0,BrepTrim trim1)
: Match the end of a trim to the start of the next trim.
: Returns - True if either trim's 2d curve is changed, False otherwise.
: since 6.19

bool MatchEnds(int trimIndex)
: Match the endpoints of a trim to the next and previous trim.
: Returns - True if any trim's 2d curve is changed, False otherwise.
: since 6.19
