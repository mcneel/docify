---
title: "MeshingParameters"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents settings used for creating a mesh representation of a brep or surface.
   
## Constructors
#### Rhino.Geometry.MeshingParameters()
- (summary) 
     Initializes a new instance with default values.
     Initial values are same as .
- (since) 5.0
#### Rhino.Geometry.MeshingParameters(double density)
- (summary) 
     Initializes a new instance with simple values, 
     similar to that of Rhino's meshing slider interface.
     
- (since) 6.0
#### Rhino.Geometry.MeshingParameters(double density,double minimumEdgeLength)
- (summary) 
     Initializes a new instance with simple values, 
     similar to that of Rhino's meshing slider interface.
     
- (since) 6.0
## Properties
#### static MeshingParameters Coarse
- (summary) 
     Gets mesh creation parameters for coarse meshing. 
     This corresponds with the "Jagged and Faster" default in Rhino.
- (since) 5.0
#### static MeshingParameters Default
- (summary) 
     Gets mesh creation parameters to create the default render mesh.
     Only use this if you plan on specifying your own custom meshing
     parameters.
     
- (since) 5.0
#### static MeshingParameters DefaultAnalysisMesh
- (summary) 
     Gets mesh creation parameters to create the default analysis mesh.
     
- (since) 6.0
#### static MeshingParameters FastRenderMesh
- (summary) 
     Gets mesh creation parameters to create the a render mesh when 
     meshing speed is prefered over mesh quality.
     
- (since) 6.0
#### static MeshingParameters Minimal
- (summary) Gets minimal meshing parameters.
- (since) 5.0
#### static MeshingParameters QualityRenderMesh
- (summary) 
     Gets mesh creation parameters to create the a render mesh when mesh 
     quality is prefered over meshing speed.
     
- (since) 6.0
#### static MeshingParameters Smooth
- (summary) 
     Gets mesh creation parameters for smooth meshing. 
     This corresponds with the "Smooth and Slower" default in Rhino.
- (since) 5.0
#### bool ClosedObjectPostProcess
- (summary) 
     Gets or sets a value indicating whether or not to post process non-closed meshes
     that should be closed. If the Brep being meshed is closed, JaggedSeams = false, 
     and ClosedObjectPostProcess = true, and the resulting mesh is not closed, then a
     post meshing process is applied to find and close gaps in the mesh. Typically the
     resulting mesh is not closed because the input Brep has a geometric flaw, like
     loops in trimming curve.
     
- (since) 6.0
#### bool ComputeCurvature
- (summary) 
     Gets or sets a value indicating whether or not surface curvature 
     data will be embedded in the mesh.
     
- (since) 5.0
#### double GridAmplification
- (summary) 
     Gets or sets the grid amplification factor. 
     Values lower than 1.0 will decrease the number of initial quads, 
     values higher than 1.0 will increase the number of initial quads.
     
- (since) 5.0
#### double GridAngle
- (summary) 
     Gets or sets the maximum allowed angle difference (in radians) 
     for a single sampling quad. The angle pertains to the surface normals.
     
- (since) 5.0
#### double GridAspectRatio
- (summary) 
     Gets or sets the maximum allowed aspect ratio of sampling quads.
     
- (since) 5.0
#### int GridMaxCount
- (summary) 
     Gets or sets the maximum number of grid quads in the initial sampling grid.
     
- (since) 5.0
#### int GridMinCount
- (summary) 
     Gets or sets the minimum number of grid quads in the initial sampling grid.
     
- (since) 5.0
#### bool JaggedSeams
- (summary) 
     Gets or sets whether or not the mesh is allowed to have jagged seams. 
     When this flag is set to true, meshes on either side of a Brep Edge will not match up.
     
- (since) 5.0
#### double MaximumEdgeLength
- (summary) 
     Gets or sets the maximum allowed mesh edge length.
     
- (since) 5.0
#### double MinimumEdgeLength
- (summary) 
     Gets or sets the minimum allowed mesh edge length.
     
- (since) 5.0
#### double MinimumTolerance
- (summary) 
     Gets or sets the minimum tolerance.
     
- (since) 5.0
#### double RefineAngle
- (summary) 
     Gets or sets the mesh parameter refine angle.
     
- (since) 5.0
#### bool RefineGrid
- (summary) 
     Gets or sets a value indicating whether or not the sampling grid can be refined 
     when certain tolerances are not met.
     
- (since) 5.0
#### double RelativeTolerance
- (summary) 
     Gets or sets the relative tolerance.
     
- (since) 5.0
#### bool SimplePlanes
- (summary) 
     Gets or sets a value indicating whether or not planar areas are allowed 
     to be meshed in a simplified manner.
     
- (since) 5.0
#### MeshingParameterTextureRange TextureRange
- (summary) 
     Gets or sets how and if textures will be packed.
     
- (since) 6.0
#### double Tolerance
- (summary) 
     Gets or sets the maximum allowed edge deviation. 
     This tolerance is measured between the center of the mesh edge and the surface.
     
- (since) 5.0
## Methods
#### static MeshingParameters DocumentCurrentSetting(RhinoDoc doc)
- (summary) 
     Gets the MeshingParameters that are currently set for a document.
     These are the same settings that are shown in the DocumentProperties
     "mesh settings" user interface.
     
- (since) 5.0
- (returns) MeshingParameters This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
