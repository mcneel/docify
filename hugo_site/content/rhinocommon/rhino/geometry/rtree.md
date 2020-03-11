---
title: "RTree"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a spatial search structure based on implementations of the
   R-tree algorithm by Toni Gutman.
```cs
public class RTree : IDisposable
```
## Constructors

RTree()
: Initializes a new, empty instance of the tree.
## Properties

int Count
: Gets the number of items in this tree.
## Methods

static RTree CreateFromPointArray(IEnumerable<Point3d> points)
: Constructs a new tree with an element for each pointcloud point.
: Returns - A new tree, or None on error.
: since 6.0

static RTree CreateMeshFaceTree(Mesh mesh)
: Constructs a new tree with an element for each face in the mesh.
     The element id is set to the index of the face.
: Returns - A new tree, or None on error.

static RTree CreatePointCloudTree(PointCloud cloud)
: Constructs a new tree with an element for each pointcloud point.
: Returns - A new tree, or None on error.

static IEnumerable<int[]> Point3dClosestPoints(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePts,double limitDistance)
: Finds the point in a list of 3D points that is closest to a test point.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> Point3dKNeighbors(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePts,int amount)
: Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> PointCloudClosestPoints(PointCloud pointcloud,IEnumerable<Point3d> needlePts,double limitDistance)
: Finds the point in a list of 3D points that is closest to a test point.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> PointCloudKNeighbors(PointCloud pointcloud,IEnumerable<Point3d> needlePts,int amount)
: Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static bool SearchOverlaps(RTree treeA,RTree treeB,double tolerance,EventHandler<RTreeEventArgs> callback)
: Searches two R-trees for all pairs elements whose bounding boxes overlap.
: Returns - True if entire tree was searched.  It is possible no results were found.

void Clear()
: Removes all elements.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

bool Insert(BoundingBox box,int elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Insert(BoundingBox box,IntPtr elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Insert(Point2d point,int elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Insert(Point2d point,IntPtr elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Insert(Point3d point,int elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Insert(Point3d point,IntPtr elementId)
: Inserts an element into the tree.
: Returns - True if element was successfully inserted.

bool Remove(BoundingBox box,int elementId)
: Removes an element from the tree.
: Returns - True if element was successfully removed.

bool Remove(BoundingBox box,IntPtr elementId)
: Removes an element from the tree.
: Returns - True if element was successfully removed.

bool Remove(Point2d point,int elementId)
: Removes an element from the tree.
: Returns - True if element was successfully removed.

bool Remove(Point3d point,int elementId)
: Removes an element from the tree.
: Returns - True if element was successfully removed.

bool Remove(Point3d point,IntPtr elementId)
: Removes an element from the tree.
: Returns - True if element was successfully removed.

bool Search(BoundingBox box,EventHandler<RTreeEventArgs> callback)
: Searches for items in a bounding box.
     The bounding box can be singular and contain exactly one single point.
: Returns - True if entire tree was searched. It is possible no results were found.

bool Search(BoundingBox box,EventHandler<RTreeEventArgs> callback,object tag)
: Searches for items in a bounding box.
     The bounding box can be singular and contain exactly one single point.
: Returns - True if entire tree was searched. It is possible no results were found.

bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback)
: Searches for items in a sphere.
: Returns - True if entire tree was searched. It is possible no results were found.

bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback,object tag)
: Searches for items in a sphere.
: Returns - True if entire tree was searched. It is possible no results were found.
