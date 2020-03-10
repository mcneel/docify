---
title: "Rhino.Geometry.HermiteSurface"
draft: false
---

# Constructors
## Rhino.Geometry.HermiteSurface()
- (summary) 
     Initializes a new  instance.
     
- (since) 7.0
## Rhino.Geometry.HermiteSurface(int uCount,int vCount)
- (summary) 
     Initializes a new  instance.
     
- (since) 7.0
# Properties
## bool IsValid
- (summary) 
     Returns True if the all of values in all of the internal data structues contain valid values, False otherwise.
     
- (since) 7.0
## int UCount
- (summary) 
     Gets the number of parameters in the "u" direction.
     
- (since) 7.0
## int VCount
- (summary) 
     Gets the number of parameters in the "v" direction.
     
- (since) 7.0
# Methods
## IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this class.
     
- (since) 7.0
- (returns) IntPtr This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
## IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this class.
     
- (since) 7.0
- (returns) IntPtr This is some return comment
## Point3d PointAt(int uIndex,int vIndex)
- (summary) 
     Gets the interpolation point at the u,v parameter location.
     
- (since) 7.0
- (returns) Point3d This is some return comment
## void SetPointAt(int uIndex,int vIndex,Point3d point)
- (summary) 
     Sets the interpolation point at the u,v parameter location.
     
- (since) 7.0
- (returns) void This is some return comment
## void SetTwistAt(int uIndex,int vIndex,Vector3d twist)
- (summary) 
     Set the twist direction (mixed second partial derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) void This is some return comment
## void SetUParameterAt(int index,double parameter)
- (summary) 
     Sets the "u" parameter at an index. These parameters are strictly increasing.
     
- (since) 7.0
- (returns) void This is some return comment
## void SetUTangentAt(int uIndex,int vIndex,Vector3d tangent)
- (summary) 
     Set the "u" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) void This is some return comment
## void SetVParameterAt(int index,double parameter)
- (summary) 
     Sets the "v" parameter at an index. These parameters are strictly increasing.
     
- (since) 7.0
- (returns) void This is some return comment
## void SetVTangentAt(int uIndex,int vIndex,Vector3d tangent)
- (summary) 
     Set the "v" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) void This is some return comment
## NurbsSurface ToNurbsSurface()
- (summary) 
     Constructs a NURBS surface satisfying the Hermite interpolation conditions.
     
- (since) 7.0
- (returns) NurbsSurface This is some return comment
## Vector3d TwistAt(int uIndex,int vIndex)
- (summary) 
     Get the twist direction (mixed second partial derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) Vector3d This is some return comment
## double UParameterAt(int index)
- (summary) 
     Gets the "u" parameter at an index. These parameters are strictly increasing.
     
- (since) 7.0
- (returns) double This is some return comment
## Vector3d UTangentAt(int uIndex,int vIndex)
- (summary) 
     Get the "u" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) Vector3d This is some return comment
## double VParameterAt(int index)
- (summary) 
     Gets the "v" parameter at an index. These parameters are strictly increasing.
     
- (since) 7.0
- (returns) double This is some return comment
## Vector3d VTangentAt(int uIndex,int vIndex)
- (summary) 
     Get the "v" tangent direction (actually first derivative) to intepolate at the u,v parameter location.
     
- (since) 7.0
- (returns) Vector3d This is some return comment
