---
title: "RTreeEventArgs"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents event data that is passed when when an item that meets certain 
   criteria is found and the passed RTree event is raised.
```cs
public class RTreeEventArgs : EventArgs
```
## Properties

bool Cancel
: Gets or sets a value that determines if the search should be conducted farther.

int Id
: Gets the identifier of the found item.

int IdB
: If search is using two r-trees, IdB is element b in the search.

IntPtr IdBPtr
: If search is using two r-trees, IdB is the element b pointer in the search.

IntPtr IdPtr
: Gets the identifier pointer of the found item.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) SearchBoundingBox
: Bounding box bounds used during a search. You may modify the box in a search callback
     to help reduce the bounds to search.

[Sphere](/rhinocommon/rhino/geometry/sphere/) SearchSphere
: Sphere bounds used during a search. You can modify the sphere in a search callback to
     help reduce the bounds to search.

object Tag
: Gets or sets an arbitrary object that can be attached to this event args.
     This object will "stick" through a single search and can represent user-defined state.
