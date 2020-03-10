---
title: "Rhino.Geometry.Extrusion"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.Extrusion()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 5.0
# Properties
## int CapCount
- (summary) 
     Gets the amount of capping surfaces.
     
- (since) 5.0
## bool IsCappedAtBottom
- (summary) 
     Gets a value indicating whether the surface that fills the bottom profile is existing.
     
- (since) 5.0
## bool IsCappedAtTop
- (summary) 
     Gets a value indicating whether the surface that fills the top profile is existing.
     
- (since) 5.0
## bool IsMiteredAtEnd
- (summary) 
     Gets a value indicating whether a miter plane at the end is defined.
     
- (since) 5.0
## bool IsMiteredAtStart
- (summary) 
     Returns a value indicating whether a miter plane at start is defined.
     
- (since) 5.0
## bool IsSolid
- (summary) 
     Gets a value indicating whether there is no gap among all surfaces constructing this object.
     
- (since) 5.0
## Vector3d MiterPlaneNormalAtEnd
- (summary) 
     Gets or sets the normal of the miter plane at the end in profile coordinates.
     In profile coordinates, 0,0,1 always maps to the extrusion axis
     
- (since) 5.0
## Vector3d MiterPlaneNormalAtStart
- (summary) 
     Gets or sets the normal of the miter plane at the start in profile coordinates.
     In profile coordinates, 0,0,1 always maps to the extrusion axis
     
- (since) 5.0
## Point3d PathEnd
- (summary) 
     Gets the end point of the path.
     
- (since) 5.0
## Point3d PathStart
- (summary) 
     Gets the start point of the path.
     
- (since) 5.0
## Vector3d PathTangent
- (summary) 
     Gets the up vector of the path.
     
- (since) 5.0
## int ProfileCount
- (summary) 
     Gets the amount of profile curves.
     
- (since) 5.0
# Methods
## static Extrusion Create(Curve planarCurve,double height,bool cap)
- (summary) 
     Creates an extrusion of a 3d curve (which must be planar) and a height.
     
- (since) 5.1
- (returns) Extrusion This is some return comment
## static Extrusion CreateBoxExtrusion(Box box,bool cap)
- (summary) 
     Gets an extrusion from a box.
     
- (since) 6.0
- (returns) Extrusion This is some return comment
## static Extrusion CreateCylinderExtrusion(Cylinder cylinder,bool capBottom,bool capTop)
- (summary) 
     Gets an extrusion form of a cylinder.
     
- (since) 5.0
- (returns) Extrusion This is some return comment
## static Extrusion CreatePipeExtrusion(Cylinder cylinder,double otherRadius,bool capTop,bool capBottom)
- (summary) 
     Gets an extrusion form of a pipe.
     
- (since) 5.0
- (returns) Extrusion This is some return comment
## bool AddInnerProfile(Curve innerProfile)
- (summary) 
     Adds an inner profile.
     
- (since) 5.0
- (returns) bool This is some return comment
## Mesh GetMesh(MeshType meshType)
- (summary) 
     Obtains a reference to a specified type of mesh for this extrusion.
     
- (since) 5.6
- (returns) Mesh This is some return comment
## Plane GetPathPlane(double s)
- (summary) 
     Gets the 3D plane perpendicular to the path at a normalized path parameter.
     
- (since) 5.0
- (returns) Plane This is some return comment
## Plane GetProfilePlane(double s)
- (summary) 
     Gets the 3D plane containing the profile curve at a normalized path parameter.
     
- (since) 5.0
- (returns) Plane This is some return comment
## Transform GetProfileTransformation(double s)
- (summary) 
     Gets the transformation that maps the xy profile curve to its 3d location.
     
- (since) 5.0
- (returns) Transform This is some return comment
## Curve[] GetWireframe()
- (summary) 
     Constructs all the Wireframe curves for this Extrusion.
     
- (since) 5.6
- (returns) Curve[] This is some return comment
## LineCurve PathLineCurve()
- (summary) 
     Gets the line-like curve that is the conceptual axis of the extrusion.
     
- (since) 5.0
- (returns) LineCurve This is some return comment
## Curve Profile3d(ComponentIndex ci)
- (summary) 
     Gets one of the profiles.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Profile3d(int profileIndex,double s)
- (summary) 
     Gets a transversal isocurve of the extruded profile.
     
- (since) 5.0
- (returns) Curve This is some return comment
## int ProfileIndex(double profileParameter)
- (summary) 
     Gets the index of the profile curve at a domain related to a parameter. 
     
- (since) 5.0
- (returns) int This is some return comment
## bool SetOuterProfile(Curve outerProfile,bool cap)
- (summary) 
     Sets the outer profile of the extrusion.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetPathAndUp(Point3d a,Point3d b,Vector3d up)
- (summary) 
     Allows to set the two points at the extremes and the up vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## Brep ToBrep(bool splitKinkyFaces)
- (summary) 
     Constructs a brep form of the extrusion. The outer profile is always the first face of the brep.
     If there are inner profiles, additional brep faces are created for each profile. If the
     outer profile is closed, then end caps are added as the last two faces of the brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
## Curve WallEdge(ComponentIndex ci)
- (summary) 
     Gets one of the longitudinal curves along the beam or extrusion.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Surface WallSurface(ComponentIndex ci)
- (summary) 
     Gets one of the longitudinal surfaces of the extrusion.
     
- (since) 5.0
- (returns) Surface This is some return comment
