---
title: "Point3dList"
draft: false
---

*Namespace: Rhino.Collections*

   Represents a list of .
   
## Constructors
#### Rhino.Collections.Point3dList()
- (summary) 
     Initializes a new empty list with default capacity.
     
- (since) 5.0
#### Rhino.Collections.Point3dList(IEnumerable<Point3d> collection)
- (summary) 
     Initializes a new point list by copying the values from another set.
     
- (since) 5.0
#### Rhino.Collections.Point3dList(int initialCapacity)
- (summary) 
     Initializes a new point list with a preallocated initial capacity.
     
- (since) 5.0
#### Rhino.Collections.Point3dList(Point3d[] initialPoints)
- (summary) 
     Constructs a new point list from values in a point array.
     
- (since) 5.0
## Properties
#### BoundingBox BoundingBox
- (summary) 
     Even though this is a property, it is not a "fast" calculation. Every point is
     evaluated in order to get the bounding box of the list.
     
- (since) 5.0
#### XAccess X
- (summary) 
     Returns an indexer with all X coordinates in this list.
     
- (since) 5.0
#### YAccess Y
- (summary) 
     Returns an indexer with all Y coordinates in this list.
     
- (since) 5.0
#### ZAccess Z
- (summary) 
     Returns an indexer with all Z coordinates in this list.
     
- (since) 5.0
## Methods
#### static int ClosestIndexInList(IList<Point3d> list,Point3d testPoint)
- (summary) 
     Finds the index of the point in a list of points that is closest to a test point.
     
- (since) 5.0
- (returns) int This is some return comment
#### static Point3d ClosestPointInList(IList<Point3d> list,Point3d testPoint)
- (summary) 
     Finds the point in a list of points that is closest to a test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### void Add(double x,double y,double z)
- (summary) 
     Adds a Point3d to the end of the list with given x,y,z coordinates.
     
- (since) 5.0
- (returns) void This is some return comment
#### int ClosestIndex(Point3d testPoint)
- (summary) 
     Finds the index of the point that is closest to a test point in this list.
     
- (since) 5.0
- (returns) int This is some return comment
#### Point3dList Duplicate()
- (summary) 
     Returns a deep copy of this point list instance.
     
- (since) 6.0
- (returns) Point3dList This is some return comment
#### void SetAllX(double xValue)
- (summary) 
     Set all the X values for the points to a single value
     
- (since) 5.6
- (returns) void This is some return comment
#### void SetAllY(double yValue)
- (summary) 
     Set all the Y values for the points to a single value
     
- (since) 5.6
- (returns) void This is some return comment
#### void SetAllZ(double zValue)
- (summary) 
     Set all the Z values for the points to a single value
     
- (since) 5.6
- (returns) void This is some return comment
#### void Transform(Transform xform)
- (summary) 
     Applies a transform to all the points in the list.
     
- (since) 5.0
- (returns) void This is some return comment
