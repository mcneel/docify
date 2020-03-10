---
title: "Rhino.Input.Custom.GetTruncatedCone"
draft: false
---

# Constructors
## Rhino.Input.Custom.GetTruncatedCone()
- (summary) 
- (since) 7.0
# Properties
## bool Cap
- (summary) 
     Gets or sets whether or not the output should be capped.
     
- (since) 7.0
## CylinderConstraint CylinderConstraint
- (summary) 
     State of the cone/cyl constraint option. When the cone/cyl option is
     selected, the circle is being made as a base for a cone/cyl.
     By default the vertical cone/cyl option not available but is not
     selected.  By default the "Vertical" option applies to VerticalCircle.
     
- (since) 7.0
## double DefaultSize
- (summary) 
     Default radius or diameter (based on InDiameterMode)
     
- (since) 7.0
## double Height
- (summary) 
     Height of truncated cone.
     
- (since) 7.0
## bool InDiameterMode
- (summary) 
     Determines if the "size" value is reperesenting a radius or diameter
     
- (since) 7.0
## double SecondRadius
- (summary) 
     Radius of second circle.
     
- (since) 7.0
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
## Commands.Result Get(Brep truncatedCone)
- (summary) 
     Prompt for the getting of a truncated cone.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,int capStyle,Mesh truncatedCone)
- (summary) 
     Prompt for the getting of a mesh truncated cone.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,Mesh truncatedCone)
- (summary) 
     Prompt for the getting of a mesh truncated cone.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
