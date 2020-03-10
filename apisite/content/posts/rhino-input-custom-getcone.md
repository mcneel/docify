---
title: "Rhino.Input.Custom.GetCone"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Input.Custom.GetCone()
- (summary) 
- (since) 6.0
# Properties
## bool AllowInputAngle
- (summary) 
- (since) 6.0
## double ApexAngleDegrees
- (summary) 
- (since) 6.0
## double BaseAngleDegrees
- (summary) 
- (since) 6.0
## bool Cap
- (summary) 
     Gets or sets whether or not the output should be capped.
     
- (since) 6.0
## ConeConstraint ConeConstraint
- (summary) 
     State of the cone/cyl constraint option. When the cone/cyl option is
     selected, the circle is being made as a base for a cone/cyl.
     By default the vertical cone/cyl option not available but is not
     selected.  By default the "Vertical" option applies to VerticalCircle.
     
- (since) 6.0
## double DefaultSize
- (summary) 
     Default radius or diameter (based on InDiameterMode)
     
- (since) 6.0
## double Height
- (summary) 
- (since) 6.0
## bool InDiameterMode
- (summary) 
     Determines if the "size" value is reperesenting a radius or diameter
     
- (since) 6.0
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
## Commands.Result Get(Cone cone)
- (summary)  
     Prompt for the getting of a cone. 
     
- (since) 6.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,Cone cone)
- (summary) 
     Prompt for the getting of a mesh cone.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,int capStyle,Cone cone)
- (summary) 
     Prompt for the getting of a mesh cone.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
