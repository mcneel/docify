---
title: "Rhino.Geometry.MeshDisplacementInfo"
draft: false
---

# Constructors
## Rhino.Geometry.MeshDisplacementInfo(RenderTexture texture,TextureMapping mapping)
- (summary) 
     Constructs a displacement information instance with default values.
     Users of this class should not rely on default values to stay constant
     across service releases.
     
- (since) 6.0
# Properties
## double Black
- (summary) 
     Value considered lowest point in the displacement.
     
- (since) 6.0
## double BlackMove
- (summary) 
     The amount of displacement for the black color in the texture.
     
- (since) 6.0
## int ChannelNumber
- (summary) 
     Mapping channel number for the displacement mapping.
     
- (since) 6.0
## int FaceLimit
- (summary) 
     Runs a mesh reduction as a post process o simplify the result of
     displacement to meet the specified number of faces.
     
- (since) 6.0
## int FairingAmount
- (summary) 
     Straightens rough feature edges.
     The value specifies the number of passes.
     
- (since) 6.0
## Transform InstanceTransform
- (summary) 
     Instance transformation of the mesh.
     
- (since) 6.0
## TextureMapping Mapping
- (summary) 
     The texture mapping of the mesh.
     
- (since) 6.0
## Transform MappingTransform
- (summary) 
     Texture mapping transform.
     
- (since) 6.0
## int MemoryLimit
- (summary) 
     Specifies how much memory can be allocated for use by the
     displacement mesh. Value in megabytes.
     
- (since) 6.0
## double PostWeldAngle
- (summary) 
     Specifies the maximum angle between face normals of adjacent faces
     that will get welded together.
     
- (since) 6.0
## double RefineSensitivity
- (summary) Specifies how sensitive the divider for contrasts is on the
     displacement texture.Specify 1 to split all mesh edges on each refine step.Specify 0.99 to make even slight contrasts on the displacement
     texture cause edges to be split.Specifying 0.01 only splits edges where heavy contrast
     exists.
- (since) 6.0
## int RefineStepCount
- (summary) 
     Specifies the number of refinement passes.
     
- (since) 6.0
## double SweepPitch
- (summary) 
     Specifies how densely the object is initially subdivided.
     The lower the value, the higher the resolution of the displaced mesh.
     
- (since) 6.0
## RenderTexture Texture
- (summary) 
     The texture used as displacement.
     
- (since) 6.0
## double White
- (summary) 
     Value considered highest point of the displacement texture.
     
- (since) 6.0
## double WhiteMove
- (summary) 
     The amount of displacement for the white color in the texture.
     
- (since) 6.0
