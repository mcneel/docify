---
title: "GetTorus"
draft: false
---

*Namespace: Rhino.Input.Custom*

   Class provides user interface to define a torus.
   
## Constructors
#### Rhino.Input.Custom.GetTorus()
- (summary) 
- (since) 7.0
## Properties
#### double DefaultSize
- (summary) 
     Default radius or diameter (based on InDiameterMode)
     
- (since) 7.0
#### bool FixInnerRadius
- (summary) 
     Second radius opion. The first radius chosen sets the inner dimension of the torus and the second radius is constrained to be outside of the first radius.
     
- (since) 7.0
#### bool InDiameterMode
- (summary) 
     Determines if the "size" value is reperesenting a radius or diameter
     
- (since) 7.0
#### bool InSecondDiameterMode
- (summary) 
     Second radius opion. Determines if the second "size" value is reperesenting a radius or diameter
     
- (since) 7.0
#### double SecondSize
- (summary) 
     Second radius or diameter (based on InSecondDiameterMode)
     
- (since) 7.0
## Methods
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
#### Commands.Result Get(Torus torus)
- (summary) 
     Prompt for the getting of a torus.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
#### Commands.Result GetMesh(int verticalFaces,int aroundFaces,Torus torus)
- (summary) 
     Prompt for the getting of a mesh torus.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
