---
title: "GeometryBase"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Provides a common base for most geometric classes. This class is abstract.
```cs
[Serializable]
public class GeometryBase : Runtime.CommonObject
```
## Properties

bool HasBrepForm
: Returns True if the Brep.TryConvertBrep function will be successful for this object
: since 5.6

bool IsDeformable
: True if object can be accurately modified with "squishy" transformations like
     projections, shears, and non-uniform scaling.

bool IsDocumentControlled
: If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) ObjectType
: Useful for switch statements that need to differentiate between
     basic object types like points, curves, surfaces, and so on.

int UserStringCount
: Gets the amount of user strings.
## Methods

static bool GeometryEquals(GeometryBase first,GeometryBase second)
: Determines if two geometries equal one another, in pure geometrical shape.
     This version only compares the geometry itself and does not include any user
     data comparisons.
     This is a comparison by value: for two identical items it will be true, no matter
     where in memory they may be stored.
: Returns - The indication of equality
: since 6.0

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) ComponentIndex()
: If this piece of geometry is a component in something larger, like a BrepEdge
     in a Brep, then this function returns the component index.
: Returns - This object's component index.  If this object is not a sub-piece of a larger
     geometric entity, then the returned index has 
     m_type = ComponentIndex.InvalidType
     and m_index = -1.

GeometryBase Duplicate()
: Constructs a deep (full) copy of this object.
: Returns - An object of the same type as this, with the same properties and behavior.

GeometryBase DuplicateShallow()
: Constructs a light copy of this object. By "light", it is meant that the same
     underlying data is used until something is done to attempt to change it. For example,
     you could have a shallow copy of a very heavy mesh object and the same underlying
     data will be used when doing things like inspecting the number of faces on the mesh.
     If you modify the location of one of the mesh vertices, the shallow copy will create
     a full duplicate of the underlying mesh data and the shallow copy will become a
     deep copy.
: Returns - An object of the same type as this object.
     This behavior is overridden by implementing classes.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(bool accurate)
: Boundingbox solver. Gets the world axis aligned boundingbox for the geometry.
: Returns - The boundingbox of the geometry in world coordinates or BoundingBox.Empty 
     if not bounding box could be found.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(Plane plane)
: Aligned Boundingbox solver. Gets the plane aligned boundingbox.
: Returns - A BoundingBox in plane coordinates.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(Plane plane,Box worldBox)
: Aligned Boundingbox solver. Gets the plane aligned boundingbox.
: Returns - A BoundingBox in plane coordinates.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(Transform xform)
: Aligned Boundingbox solver. Gets the world axis aligned boundingbox for the transformed geometry.
: Returns - The accurate boundingbox of the transformed geometry in world coordinates 
     or BoundingBox.Empty if not bounding box could be found.

string GetUserString(string key)
: Gets user string from this geometry.
: Returns - string associated with the key if successful. None if no key was found.

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets a copy of all (user key string, user value string) pairs attached to this geometry.
: Returns - A new collection.

bool MakeDeformable()
: If possible, converts the object into a form that can be accurately modified
     with "squishy" transformations like projections, shears, an non-uniform scaling.
: Returns - False if object cannot be converted to a deformable object. True if object was
     already deformable or was converted into a deformable object.

uint MemoryEstimate()
: Computes an estimate of the number of bytes that this object is using in memory.
: Returns - An estimated memory footprint.

bool Rotate(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
: Rotates the object about the specified axis. A positive rotation 
     angle results in a counter-clockwise rotation about the axis (right hand rule).
: Returns - True if geometry successfully rotated.

bool Scale(double scaleFactor)
: Scales the object by the specified factor. The scale is centered at the origin.
: Returns - True if geometry successfully scaled.

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.

bool Transform(Transform xform)
: Transforms the geometry. If the input Transform has a SimilarityType of
     OrientationReversing, you may want to consider flipping the transformed
     geometry after calling this function when it makes sense. For example,
     you may want to call Flip() on a Brep after transforming it.
: Returns - True if geometry successfully transformed.

bool Translate(double x,double y,double z)
: Translates the object along the specified vector.
: Returns - True if geometry successfully translated.

bool Translate(Vector3d translationVector)
: Translates the object along the specified vector.
: Returns - True if geometry successfully translated.
