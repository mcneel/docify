---
title: "Rhino.Geometry.PointCloud"
draft: false
---

# Constructors
## Rhino.Geometry.PointCloud()
- (summary) 
     Initializes a new instance of the  class
     that is empty.
     
- (since) 5.0
## Rhino.Geometry.PointCloud(IEnumerable<Point3d> points)
- (summary) 
     Initializes a new instance of the  class,
     copying the content from a set of points.
     
- (since) 5.0
## Rhino.Geometry.PointCloud(PointCloud other)
- (summary) 
     Initializes a new instance of the  class,
     copying (Merge) the content of another pointcloud.
     
- (since) 5.0
# Properties
## bool ContainsColors
- (summary) 
     Gets a value indicating whether or not the points in this 
     pointcloud have colors assigned to them.
     
- (since) 5.0
## bool ContainsHiddenFlags
- (summary) 
     Gets a value indicating whether or not the points in this 
     pointcloud have hidden flags assigned to them.
     
- (since) 5.0
## bool ContainsNormals
- (summary) 
     Gets a value indicating whether or not the points in this 
     pointcloud have normals assigned to them.
     
- (since) 5.0
## int Count
- (summary) 
     Gets the number of points in this pointcloud.
     
- (since) 5.0
## int HiddenPointCount
- (summary) 
     Gets the number of points that have their Hidden flag set.
     
- (since) 5.0
# Methods
## void Add(Point3d point)
- (summary) 
     Append a new point to the end of the list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Point3d point,Color color)
- (summary) 
     Append a new point to the end of the list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Point3d point,Vector3d normal)
- (summary) 
     Append a new point to the end of the list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Add(Point3d point,Vector3d normal,Color color)
- (summary) 
     Append a new point to the end of the list.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddRange(IEnumerable<Point3d> points)
- (summary) 
     Appends a collection of points to this point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddRange(IEnumerable<Point3d> points,IEnumerable<Color> colors)
- (summary) 
     Appends a collection of points and normal vectors to this point cloud.
     
- (since) 6.0
- (returns) void This is some return comment
## void AddRange(IEnumerable<Point3d> points,IEnumerable<Vector3d> normals)
- (summary) 
     Appends a collection of points and normal vectors to this point cloud.
     
- (since) 6.0
- (returns) void This is some return comment
## void AddRange(IEnumerable<Point3d> points,IEnumerable<Vector3d> normals,IEnumerable<Color> colors)
- (summary) 
     Appends a collection of points and normal vectors to this point cloud.
     
- (since) 6.0
- (returns) void This is some return comment
## PointCloudItem AppendNew()
- (summary) 
     Appends a new PointCloudItem to the end of this point cloud.
     
- (since) 5.0
- (returns) PointCloudItem This is some return comment
## IReadOnlyList<Point3d> AsReadOnlyListOfPoints()
- (summary) 
     Returns an enumerator and list indexer over point cloud locations. 
     
- (since) 6.0
- (returns) IReadOnlyList<Point3d> This is some return comment
## void ClearColors()
- (summary) 
     Destroys the color information in this point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
## void ClearHiddenFlags()
- (summary) 
     Destroys the hidden flag information in this point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
## void ClearNormals()
- (summary) 
     Destroys the normal vector information in this point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
## int ClosestPoint(Point3d testPoint)
- (summary) 
     Returns index of the closest point in the point cloud to a given test point.
     
- (since) 5.0
- (returns) int This is some return comment
## Color[] GetColors()
- (summary) 
     Copy all the point colors in this point cloud to an array.
     
- (since) 5.0
- (returns) Color[] This is some return comment
## IEnumerator<PointCloudItem> GetEnumerator()
- (summary) 
     Gets an enumerator that allows to modify each pointcloud point.
     
- (since) 5.0
- (returns) IEnumerator<PointCloudItem> This is some return comment
## Vector3d[] GetNormals()
- (summary) 
     Copy all the normal vectors in this point cloud to an array.
     
- (since) 5.0
- (returns) Vector3d[] This is some return comment
## Point3d[] GetPoints()
- (summary) 
     Copy all the point coordinates in this point cloud to an array.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## void Insert(int index,Point3d point)
- (summary) Inserts a new point into the point list.
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Point3d point,Color color)
- (summary) 
     Inserts a new point into the point list.
     
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Point3d point,Vector3d normal)
- (summary) Inserts a new point into the point list.
- (since) 5.0
- (returns) void This is some return comment
## void Insert(int index,Point3d point,Vector3d normal,Color color)
- (summary) 
     Inserts a new point into the point list.
     
- (since) 5.0
- (returns) void This is some return comment
## PointCloudItem InsertNew(int index)
- (summary) 
     Inserts a new  at a specific position of the point cloud.
     
- (since) 5.0
- (returns) PointCloudItem This is some return comment
## void InsertRange(int index,IEnumerable<Point3d> points)
- (summary) 
     Append a collection of points to this point cloud.
     
- (since) 5.0
- (returns) void This is some return comment
## void Merge(PointCloud other)
- (summary) 
     Copies the point values of another pointcloud into this one.
     
- (since) 5.0
- (returns) void This is some return comment
## Point3d PointAt(int index)
- (summary) 
     Returns the location of the point at a specific index.
     
- (since) 6.0
- (returns) Point3d This is some return comment
## void RemoveAt(int index)
- (summary) 
     Remove the point at the given index.
     
- (since) 5.0
- (returns) void This is some return comment
