---
title: "MeshDisplacementInfo"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Contains mesh displacement information.
```cs
public class MeshDisplacementInfo
```
## Constructors

MeshDisplacementInfo(RenderTexture texture,TextureMapping mapping)
: Constructs a displacement information instance with default values.
     Users of this class should not rely on default values to stay constant
     across service releases.
: since 6.0
## Properties

double Black
: Value considered lowest point in the displacement.
: since 6.0

double BlackMove
: The amount of displacement for the black color in the texture.
: since 6.0

int ChannelNumber
: Mapping channel number for the displacement mapping.
: since 6.0

int FaceLimit
: Runs a mesh reduction as a post process o simplify the result of
     displacement to meet the specified number of faces.
: since 6.0

int FairingAmount
: Straightens rough feature edges.
     The value specifies the number of passes.
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) InstanceTransform
: Instance transformation of the mesh.
: since 6.0

[TextureMapping](/rhinocommon/rhino/render/texturemapping/) Mapping
: The texture mapping of the mesh.
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) MappingTransform
: Texture mapping transform.
: since 6.0

int MemoryLimit
: Specifies how much memory can be allocated for use by the
     displacement mesh. Value in megabytes.
: since 6.0

double PostWeldAngle
: Specifies the maximum angle between face normals of adjacent faces
     that will get welded together.
: since 6.0

double RefineSensitivity
: Specifies how sensitive the divider for contrasts is on the
     displacement texture.Specify 1 to split all mesh edges on each refine step.Specify 0.99 to make even slight contrasts on the displacement
     texture cause edges to be split.Specifying 0.01 only splits edges where heavy contrast
     exists.
: since 6.0

int RefineStepCount
: Specifies the number of refinement passes.
: since 6.0

double SweepPitch
: Specifies how densely the object is initially subdivided.
     The lower the value, the higher the resolution of the displaced mesh.
: since 6.0

[RenderTexture](/rhinocommon/rhino/render/rendertexture/) Texture
: The texture used as displacement.
: since 6.0

double White
: Value considered highest point of the displacement texture.
: since 6.0

double WhiteMove
: The amount of displacement for the white color in the texture.
: since 6.0
