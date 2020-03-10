---
title: "Rhino.Geometry.GeometryBase"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## bool HasBrepForm
- (summary) 
     Returns True if the Brep.TryConvertBrep function will be successful for this object
     
- (since) 5.6
## bool IsDeformable
- (summary) 
     True if object can be accurately modified with "squishy" transformations like
     projections, shears, and non-uniform scaling.
     
- (since) 5.0
## bool IsDocumentControlled
- (summary) 
     If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.
     
- (since) 5.0
## ObjectType ObjectType
- (summary) 
     Useful for switch statements that need to differentiate between
     basic object types like points, curves, surfaces, and so on.
     
- (since) 5.0
## int UserStringCount
- (summary) 
     Gets the amount of user strings.
     
- (since) 5.0
# Methods
## static bool GeometryEquals(GeometryBase first,GeometryBase second)
- (summary) 
     Determines if two geometries equal one another, in pure geometrical shape.
     This version only compares the geometry itself and does not include any user
     data comparisons.
     This is a comparison by value: for two identical items it will be true, no matter
     where in memory they may be stored.
     
- (since) 6.0
- (returns) bool This is some return comment
## ComponentIndex ComponentIndex()
- (summary) 
     If this piece of geometry is a component in something larger, like a BrepEdge
     in a Brep, then this function returns the component index.
     
- (since) 5.0
- (returns) ComponentIndex This is some return comment
## GeometryBase Duplicate()
- (summary) 
     Constructs a deep (full) copy of this object.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
## GeometryBase DuplicateShallow()
- (summary) 
     Constructs a light copy of this object. By "light", it is meant that the same
     underlying data is used until something is done to attempt to change it. For example,
     you could have a shallow copy of a very heavy mesh object and the same underlying
     data will be used when doing things like inspecting the number of faces on the mesh.
     If you modify the location of one of the mesh vertices, the shallow copy will create
     a full duplicate of the underlying mesh data and the shallow copy will become a
     deep copy.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
## BoundingBox GetBoundingBox(bool accurate)
- (summary) 
     Boundingbox solver. Gets the world axis aligned boundingbox for the geometry.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## BoundingBox GetBoundingBox(Plane plane)
- (summary) 
     Aligned Boundingbox solver. Gets the plane aligned boundingbox.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## BoundingBox GetBoundingBox(Plane plane,Box worldBox)
- (summary) 
     Aligned Boundingbox solver. Gets the plane aligned boundingbox.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## BoundingBox GetBoundingBox(Transform xform)
- (summary) 
     Aligned Boundingbox solver. Gets the world axis aligned boundingbox for the transformed geometry.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## string GetUserString(string key)
- (summary) 
     Gets user string from this geometry.
     
- (since) 5.0
- (returns) string This is some return comment
## System.Collections.Specialized.NameValueCollection GetUserStrings()
- (summary) 
     Gets a copy of all (user key string, user value string) pairs attached to this geometry.
     
- (since) 5.0
- (returns) System.Collections.Specialized.NameValueCollection This is some return comment
## bool MakeDeformable()
- (summary) 
     If possible, converts the object into a form that can be accurately modified
     with "squishy" transformations like projections, shears, an non-uniform scaling.
     
- (since) 5.0
- (returns) bool This is some return comment
## uint MemoryEstimate()
- (summary) 
     Computes an estimate of the number of bytes that this object is using in memory.
     
- (since) 5.0
- (returns) uint This is some return comment
## bool Rotate(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
- (summary) 
     Rotates the object about the specified axis. A positive rotation 
     angle results in a counter-clockwise rotation about the axis (right hand rule).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Scale(double scaleFactor)
- (summary) 
     Scales the object by the specified factor. The scale is centered at the origin.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetUserString(string key,string value)
- (summary) 
     Attach a user string (key,value combination) to this geometry.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Transforms the geometry. If the input Transform has a SimilarityType of
     OrientationReversing, you may want to consider flipping the transformed
     geometry after calling this function when it makes sense. For example,
     you may want to call Flip() on a Brep after transforming it.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Translate(double x,double y,double z)
- (summary) Translates the object along the specified vector.
- (since) 5.0
- (returns) bool This is some return comment
## bool Translate(Vector3d translationVector)
- (summary) Translates the object along the specified vector.
- (since) 5.0
- (returns) bool This is some return comment
