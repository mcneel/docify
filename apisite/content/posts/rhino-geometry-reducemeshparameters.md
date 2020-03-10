---
title: "Rhino.Geometry.ReduceMeshParameters"
draft: false
---

# Constructors
## Rhino.Geometry.ReduceMeshParameters()
- (summary) 
     Constructs a polygon reduction parameter object with default values.
     Users of this class should not rely on default values to stay constant
     across service releases.
     
- (since) 6.0
# Properties
## int Accuracy
- (summary) Integer from 1 to 10 telling how accurate reduction algorithm
     to use. Greater number gives more accurate results
- (since) 6.0
## bool AllowDistortion
- (summary) If True mesh appearance is not changed even if the target polygon count is not reached
- (since) 6.0
## CancellationToken CancelToken
- (summary) 
- (since) 6.0
## int DesiredPolygonCount
- (summary) Desired or target number of faces
- (since) 6.0
## string Error
- (summary) 
- (since) 6.0
## int[] FaceTags
- (summary) 
- (since) 6.0
## ComponentIndex[] LockedComponents
- (summary) List of topological mesh vertices and mesh vertices that will not be moved or deleted in reduction process.
     Each mesh vertex will lock the corresponding topological mesh vertex. In other words it is not possible to have a
     locked and non-locked mesh vertex at the same location.
- (since) 6.0
## bool NormalizeMeshSize
- (summary) If True mesh is fitted to an axis aligned unit cube until reduction is complete
- (since) 6.0
## IProgress<double> ProgressReporter
- (summary) 
- (since) 6.0
