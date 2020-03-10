---
title: "QuadRemeshParameters"
draft: false
---

*Namespace: Rhino.Geometry*

   Parameters for QuadRemesh method
   
## Properties
#### bool AdaptiveQuadCount
- (summary) 
     Respect the original Target Quad Count value as much as possible.
     True returns more quads than TargetQuadCount depending on amount of high-curvature areas.
     
- (since) 7.0
#### double AdaptiveSize
- (summary) 
     Larger values results in for quad sizes that adjust to match input curvature.
     Smaller values results in more uniform quad sizes at the risk of less feature preservation.
     Range [0 - 100]
     
- (since) 7.0
#### bool DetectHardEdges
- (summary) 
     When enabled the hard edges in models will be retained.
     
- (since) 7.0
#### int GuideCurveInfluence
- (summary) 
     0 = Approximate
     1 = Interpolate Edge Ring
     2 = Interpolate Edge Loop
     This value is ignored if Guide Curves are not supplied
     
- (since) 7.0
#### int PreserveMeshArrayEdgesMode
- (summary) 
     0=off, 1=On(Smart), 2=On(Strict) :
     Mesh array's created from Breps will have their brep face edge boundaries retained.
     Smart - Small or insignificant input faces are ignored.
     Strict - All input faces are factored in remeshed result.
     
- (since) 7.0
#### QuadRemeshSymmetryAxis SymmetryAxis
- (summary)  Symmetry axis to use for symmetric remeshing 
- (since) 7.0
#### int TargetQuadCount
- (summary) 
     The number of quads to try to achieve in the final remeshed object
     
- (since) 7.0
