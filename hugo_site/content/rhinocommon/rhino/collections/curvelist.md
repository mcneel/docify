---
title: "CurveList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Collections](../)*

Represents a list of curves.
```cs
public class CurveList : RhinoList<Curve>
```
## Constructors

CurveList()
: Initializes a new empty list of curves.

CurveList(IEnumerable<Curve> collection)
: Initializes a new list that is filled with all items of the input enumerable.
     Input items are not explicitly duplicated (this is a shallow copy).

CurveList(int initialCapacity)
: Initializes a new empty list of curves with a predefined capacity.
     This is the amount of items the list will accept before resizing.
## Methods

void Add(Arc arc)
: Adds an arc to this list.

void Add(Circle circle)
: Adds a circle to this list.

void Add(Ellipse ellipse)
: Adds an ellipse to this list.

void Add(IEnumerable<Point3d> polyline)
: Adds a polyline to this list.

void Add(Line line)
: Adds a line to this list.

void Insert(int index,Arc arc)
: Inserts an arc at a given index of this list.

void Insert(int index,Circle circle)
: Inserts a line at a given index of this list.

void Insert(int index,Ellipse ellipse)
: Inserts an ellipse at a given index of this list.

void Insert(int index,IEnumerable<Point3d> polyline)
: Inserts a polyline at a given index of this list.

void Insert(int index,Line line)
: Inserts a line at a given index of this list.

bool Transform(Transform xform)
: Transform all the curves in this list. If at least a single transform failed 
     this function returns false.
