---
title: "Rhino.Input.Custom.GetEllipsoid"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Input.Custom.GetEllipsoid()
- (summary) 
- (since) 7.0
# Properties
## Geometry.Point3d FirstPoint
- (summary) 
     Returns the first point. If in "from foci" mode, then this is the first foci point.
     
- (since) 7.0
## bool IsModeFromFoci
- (summary) 
     Indicates the ellipsoid was created from foci.
     
- (since) 7.0
## bool MarkFoci
- (summary) 
     Indicates the user wants the ellipsoid foci marked with point objects.
     
- (since) 7.0
## Geometry.Point3d SecondPoint
- (summary) 
     Returns the second point. If in "from foci" mode, then this is the second foci point.
     
- (since) 7.0
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
## Commands.Result Get(NurbsSurface ellipsoid)
- (summary) 
     Prompt for the getting of a ellipsoid.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,bool quadCaps,Mesh ellipsoid)
- (summary) 
     Prompt for the getting of a mesh ellipsoid.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
## Commands.Result GetMesh(int verticalFaces,int aroundFaces,Mesh ellipsoid)
- (summary) 
     Prompt for the getting of a mesh ellipsoid.
     
- (since) 7.0
- (returns) Commands.Result This is some return comment
