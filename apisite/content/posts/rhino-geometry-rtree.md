---
title: "RTree"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a spatial search structure based on implementations of the
   R-tree algorithm by Toni Gutman.
   
## Constructors
#### Rhino.Geometry.RTree()
- (summary) Initializes a new, empty instance of the tree.
- (since) 5.0
## Properties
#### int Count
- (summary) 
     Gets the number of items in this tree.
     
- (since) 5.0
## Methods
#### static RTree CreateFromPointArray(IEnumerable<Point3d> points)
- (summary) 
     Constructs a new tree with an element for each pointcloud point.
     
- (since) 6.0
- (returns) RTree This is some return comment
#### static RTree CreateMeshFaceTree(Mesh mesh)
- (summary) 
     Constructs a new tree with an element for each face in the mesh.
     The element id is set to the index of the face.
     
- (since) 5.0
- (returns) RTree This is some return comment
#### static RTree CreatePointCloudTree(PointCloud cloud)
- (summary) 
     Constructs a new tree with an element for each pointcloud point.
     
- (since) 5.0
- (returns) RTree This is some return comment
#### static IEnumerable<int[]> Point3dClosestPoints(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePts,double limitDistance)
- (summary) 
     Finds the point in a list of 3D points that is closest to a test point.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
#### static IEnumerable<int[]> Point3dKNeighbors(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePts,int amount)
- (summary) 
     Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
#### static IEnumerable<int[]> PointCloudClosestPoints(PointCloud pointcloud,IEnumerable<Point3d> needlePts,double limitDistance)
- (summary) 
     Finds the point in a list of 3D points that is closest to a test point.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
#### static IEnumerable<int[]> PointCloudKNeighbors(PointCloud pointcloud,IEnumerable<Point3d> needlePts,int amount)
- (summary) 
     Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
#### static bool SearchOverlaps(RTree treeA,RTree treeB,double tolerance,EventHandler<RTreeEventArgs> callback)
- (summary) 
     Searches two R-trees for all pairs elements whose bounding boxes overlap.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void Clear()
- (summary) 
     Removes all elements.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool Insert(BoundingBox box,int elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Insert(BoundingBox box,IntPtr elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Insert(Point2d point,int elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Insert(Point2d point,IntPtr elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Insert(Point3d point,int elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Insert(Point3d point,IntPtr elementId)
- (summary) Inserts an element into the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(BoundingBox box,int elementId)
- (summary) Removes an element from the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(BoundingBox box,IntPtr elementId)
- (summary) Removes an element from the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(Point2d point,int elementId)
- (summary) Removes an element from the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(Point3d point,int elementId)
- (summary) Removes an element from the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(Point3d point,IntPtr elementId)
- (summary) Removes an element from the tree.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Search(BoundingBox box,EventHandler<RTreeEventArgs> callback)
- (summary) 
     Searches for items in a bounding box.
     The bounding box can be singular and contain exactly one single point.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Search(BoundingBox box,EventHandler<RTreeEventArgs> callback,object tag)
- (summary) 
     Searches for items in a bounding box.
     The bounding box can be singular and contain exactly one single point.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback)
- (summary) 
     Searches for items in a sphere.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback,object tag)
- (summary) 
     Searches for items in a sphere.
     
- (since) 5.0
- (returns) bool This is some return comment
