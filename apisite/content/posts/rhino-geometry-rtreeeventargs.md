---
title: "Rhino.Geometry.RTreeEventArgs"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## bool Cancel
- (summary) 
     Gets or sets a value that determines if the search should be conducted farther.
     
- (since) 5.0
## int Id
- (summary) 
     Gets the identifier of the found item.
     
- (since) 5.0
## int IdB
- (summary) 
     If search is using two r-trees, IdB is element b in the search.
     
- (since) 5.0
## IntPtr IdBPtr
- (summary) 
     If search is using two r-trees, IdB is the element b pointer in the search.
     
- (since) 5.0
## IntPtr IdPtr
- (summary) 
     Gets the identifier pointer of the found item.
     
- (since) 5.0
## BoundingBox SearchBoundingBox
- (summary) 
     Bounding box bounds used during a search. You may modify the box in a search callback
     to help reduce the bounds to search.
     
- (since) 5.0
## Sphere SearchSphere
- (summary) 
     Sphere bounds used during a search. You can modify the sphere in a search callback to
     help reduce the bounds to search.
     
- (since) 5.0
## object Tag
- (summary) 
     Gets or sets an arbitrary object that can be attached to this event args.
     This object will "stick" through a single search and can represent user-defined state.
     
- (since) 5.0
