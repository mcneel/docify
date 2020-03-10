---
title: "BrepTrimList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to all the Trims in a Brep object
   
## Properties
#### int Count
- (summary) 
     Gets the number of brep trims.
     
- (since) 5.1
## Methods
#### BrepTrim Add(bool rev3d,BrepEdge edge,int curve2dIndex)
- (summary) 
     Add a new trim that will be part of an inner, outer, or slit loop
     to the brep
     
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### BrepTrim Add(bool rev3d,BrepLoop loop,int curve2dIndex)
- (summary) 
     Add a new trim that will be part of an inner, outer, or slit loop
     to the brep
     
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### BrepTrim Add(BrepEdge edge,bool rev3d,BrepLoop loop,int curve2dIndex)
- (summary) 
     Add a new trim that will be part of an inner, outer, or slit loop
     to the brep.
     
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### BrepTrim Add(int curve2dIndex)
- (summary) 
     Add a new trim that will be part of an inner, outer, or slit loop
     to the brep.
     
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### BrepTrim AddCurveOnFace(BrepFace face,BrepEdge edge,bool rev3d,int curve2dIndex)
- (summary) Add a new curve on face to the brep
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### BrepTrim AddSingularTrim(BrepVertex vertex,BrepLoop loop,IsoStatus iso,int curve2dIndex)
- (summary)  Add a new singular trim to the brep. 
- (since) 5.4
- (returns) BrepTrim This is some return comment
#### IEnumerator<BrepTrim> GetEnumerator()
- (summary) 
     Gets an enumerator that visits all edges.
     
- (since) 5.1
- (returns) IEnumerator<BrepTrim> This is some return comment
#### bool MatchEnds()
- (summary) 
     Matches the endpoints of all trims in the Brep.
     
- (since) 6.19
- (returns) bool This is some return comment
#### bool MatchEnds(BrepLoop loop)
- (summary) 
     Match the endpoints of all trims in a loop.
     
- (since) 6.19
- (returns) bool This is some return comment
#### bool MatchEnds(BrepTrim trim0,BrepTrim trim1)
- (summary) 
     Match the end of a trim to the start of the next trim.
     
- (since) 6.19
- (returns) bool This is some return comment
#### bool MatchEnds(int trimIndex)
- (summary) 
     Match the endpoints of a trim to the next and previous trim.
     
- (since) 6.19
- (returns) bool This is some return comment
