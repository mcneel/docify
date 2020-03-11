---
title: "MeshingParameters"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents settings used for creating a mesh representation of a brep or surface.
```cs
public class MeshingParameters : IDisposable
```
## Constructors

MeshingParameters()
: Initializes a new instance with default values.
     Initial values are same as .

MeshingParameters(double density)
: Initializes a new instance with simple values, 
     similar to that of Rhino's meshing slider interface.
: since 6.0

MeshingParameters(double density,double minimumEdgeLength)
: Initializes a new instance with simple values, 
     similar to that of Rhino's meshing slider interface.
: since 6.0
## Properties

static MeshingParameters Coarse
: Gets mesh creation parameters for coarse meshing. 
     This corresponds with the "Jagged and Faster" default in Rhino.

static MeshingParameters Default
: Gets mesh creation parameters to create the default render mesh.
     Only use this if you plan on specifying your own custom meshing
     parameters.

static MeshingParameters DefaultAnalysisMesh
: Gets mesh creation parameters to create the default analysis mesh.
: since 6.0

static MeshingParameters FastRenderMesh
: Gets mesh creation parameters to create the a render mesh when 
     meshing speed is prefered over mesh quality.
: since 6.0

static MeshingParameters Minimal
: Gets minimal meshing parameters.

static MeshingParameters QualityRenderMesh
: Gets mesh creation parameters to create the a render mesh when mesh 
     quality is prefered over meshing speed.
: since 6.0

static MeshingParameters Smooth
: Gets mesh creation parameters for smooth meshing. 
     This corresponds with the "Smooth and Slower" default in Rhino.

bool ClosedObjectPostProcess
: Gets or sets a value indicating whether or not to post process non-closed meshes
     that should be closed. If the Brep being meshed is closed, JaggedSeams = false, 
     and ClosedObjectPostProcess = true, and the resulting mesh is not closed, then a
     post meshing process is applied to find and close gaps in the mesh. Typically the
     resulting mesh is not closed because the input Brep has a geometric flaw, like
     loops in trimming curve.
: since 6.0

bool ComputeCurvature
: Gets or sets a value indicating whether or not surface curvature 
     data will be embedded in the mesh.

double GridAmplification
: Gets or sets the grid amplification factor. 
     Values lower than 1.0 will decrease the number of initial quads, 
     values higher than 1.0 will increase the number of initial quads.

double GridAngle
: Gets or sets the maximum allowed angle difference (in radians) 
     for a single sampling quad. The angle pertains to the surface normals.

double GridAspectRatio
: Gets or sets the maximum allowed aspect ratio of sampling quads.

int GridMaxCount
: Gets or sets the maximum number of grid quads in the initial sampling grid.

int GridMinCount
: Gets or sets the minimum number of grid quads in the initial sampling grid.

bool JaggedSeams
: Gets or sets whether or not the mesh is allowed to have jagged seams. 
     When this flag is set to true, meshes on either side of a Brep Edge will not match up.

double MaximumEdgeLength
: Gets or sets the maximum allowed mesh edge length.

double MinimumEdgeLength
: Gets or sets the minimum allowed mesh edge length.

double MinimumTolerance
: Gets or sets the minimum tolerance.

double RefineAngle
: Gets or sets the mesh parameter refine angle.

bool RefineGrid
: Gets or sets a value indicating whether or not the sampling grid can be refined 
     when certain tolerances are not met.

double RelativeTolerance
: Gets or sets the relative tolerance.

bool SimplePlanes
: Gets or sets a value indicating whether or not planar areas are allowed 
     to be meshed in a simplified manner.

[MeshingParameterTextureRange](/rhinocommon/rhino/geometry/meshingparametertexturerange/) TextureRange
: Gets or sets how and if textures will be packed.
: since 6.0

double Tolerance
: Gets or sets the maximum allowed edge deviation. 
     This tolerance is measured between the center of the mesh edge and the surface.
## Methods

static MeshingParameters DocumentCurrentSetting(RhinoDoc doc)
: Gets the MeshingParameters that are currently set for a document.
     These are the same settings that are shown in the DocumentProperties
     "mesh settings" user interface.
: Returns - Meshing parameters of the document.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
