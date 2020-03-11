---
title: "File3dmObject"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Used to store geometry table object definition and attributes in a File3dm.
```cs
public class File3dmObject : ModelComponent, IEquatable<File3dmObject>
```
## Properties

[ObjectAttributes](/rhinocommon/rhino/docobjects/objectattributes/) Attributes
: Gets the attributes that are linked with this document object.

ModelComponentType ComponentType
: Returns .
: since 6.0

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Geometry
: Gets the geometry that is linked with this document object.

string Name
: Gets or sets the Name of the object. Equivalent to this.Attributes.Name.
## Methods

bool Equals(File3dmObject other)
: Verified that two File3dmObject items refer to the same object in a document.
: Returns - True is the two objects coincide.
: since 6.0

bool Equals(object obj)
: Verified that two objects refer to the same object in a document.
: Returns - True is the two objects coincide.
: since (unknown)

int GetHashCode()
: Provides an hash code for this item.
: Returns - The hash code.
: since (unknown)
