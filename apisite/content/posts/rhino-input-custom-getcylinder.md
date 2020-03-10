---
title: "GetCylinder"
draft: false
---

*Namespace: Rhino.Input.Custom*

   Class provides user interface to define a cylinder.
   
## Constructors
#### Rhino.Input.Custom.GetCylinder()
- (summary) 
- (since) 6.0
## Properties
#### bool BothSidesOption
- (summary) 
     Determine if the "both sides" option is enabled
     
- (since) 6.0
#### bool Cap
- (summary) 
     Gets or sets whether or not the output should be capped.
     
- (since) 6.0
#### CylinderConstraint CylinderConstraint
- (summary) 
     State of the cone/cyl constraint option. When the cone/cyl option is
     selected, the circle is being made as a base for a cone/cyl.
     By default the vertical cone/cyl option not available but is not
     selected.  By default the "Vertical" option applies to VerticalCircle.
     
- (since) 6.0
#### double DefaultSize
- (summary) 
     Default radius or diameter (based on InDiameterMode)
     
- (since) 6.0
#### double Height
- (summary)  Height of cylinder 
- (since) 6.0
#### bool InDiameterMode
- (summary) 
     Determines if the "size" value is reperesenting a radius or diameter
     
- (since) 6.0
## Methods
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
#### Commands.Result Get(Cylinder cylinder)
- (summary) 
     Prompt for the getting of a cylinder.
     
- (since) 6.0
- (returns) Commands.Result This is some return comment
#### Commands.Result GetMesh(int verticalFaces,int aroundFaces,Cylinder cylinder)
- (summary) 
     Prompt for the getting of a mesh cylinder.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
#### Commands.Result GetMesh(int verticalFaces,int aroundFaces,int capStyle,Cylinder cylinder)
- (summary) 
     Prompt for the getting of a mesh cylinder.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
