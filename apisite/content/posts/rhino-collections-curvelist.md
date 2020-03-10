---
title: "Rhino.Collections.CurveList"
draft: false
---

# Constructors
## Rhino.Collections.CurveList()
- (summary) 
     Initializes a new empty list of curves.
     
- (since) 5.0
## Rhino.Collections.CurveList(IEnumerable<Curve> collection)
- (summary) 
     Initializes a new list that is filled with all items of the input enumerable.
     Input items are not explicitly duplicated (this is a shallow copy).
- (since) 5.0
## Rhino.Collections.CurveList(int initialCapacity)
- (summary) 
     Initializes a new empty list of curves with a predefined capacity.
     This is the amount of items the list will accept before resizing.
- (since) 5.0
# Methods
## void Add(Arc arc)
- (summary) 
     Adds an arc to this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Circle circle)
- (summary) 
     Adds a circle to this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Ellipse ellipse)
- (summary) 
     Adds an ellipse to this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(IEnumerable<Point3d> polyline)
- (summary) 
     Adds a polyline to this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Line line)
- (summary) 
     Adds a line to this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Arc arc)
- (summary) 
     Inserts an arc at a given index of this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Circle circle)
- (summary) 
     Inserts a line at a given index of this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Ellipse ellipse)
- (summary) 
     Inserts an ellipse at a given index of this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,IEnumerable<Point3d> polyline)
- (summary) 
     Inserts a polyline at a given index of this list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Line line)
- (summary) 
     Inserts a line at a given index of this list.
     
- (since) 5.0
- (returns) void This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Transform all the curves in this list. If at least a single transform failed 
     this function returns false.
     
- (since) 5.0
- (returns) bool This is some return comment
