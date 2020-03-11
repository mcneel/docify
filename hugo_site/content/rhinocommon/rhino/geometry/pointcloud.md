---
title: "PointCloud"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a collection of coordinates with optional normal vectors and colors.
```cs
[Serializable]
public class PointCloud : GeometryBase, IEnumerable<PointCloudItem>
```
## Constructors

PointCloud()
: Initializes a new instance of the  class
     that is empty.

PointCloud(IEnumerable<Point3d> points)
: Initializes a new instance of the  class,
     copying the content from a set of points.

PointCloud(PointCloud other)
: Initializes a new instance of the  class,
     copying (Merge) the content of another pointcloud.
## Properties

bool ContainsColors
: Gets a value indicating whether or not the points in this 
     pointcloud have colors assigned to them.

bool ContainsHiddenFlags
: Gets a value indicating whether or not the points in this 
     pointcloud have hidden flags assigned to them.

bool ContainsNormals
: Gets a value indicating whether or not the points in this 
     pointcloud have normals assigned to them.

int Count
: Gets the number of points in this pointcloud.

int HiddenPointCount
: Gets the number of points that have their Hidden flag set.
## Methods

void Add(Point3d point)
: Append a new point to the end of the list.

void Add(Point3d point,Color color)
: Append a new point to the end of the list.

void Add(Point3d point,Vector3d normal)
: Append a new point to the end of the list.

void Add(Point3d point,Vector3d normal,Color color)
: Append a new point to the end of the list.

void AddRange(IEnumerable<Point3d> points)
: Appends a collection of points to this point cloud.

void AddRange(IEnumerable<Point3d> points,IEnumerable<Color> colors)
: Appends a collection of points and normal vectors to this point cloud.
: since 6.0

void AddRange(IEnumerable<Point3d> points,IEnumerable<Vector3d> normals)
: Appends a collection of points and normal vectors to this point cloud.
: since 6.0

void AddRange(IEnumerable<Point3d> points,IEnumerable<Vector3d> normals,IEnumerable<Color> colors)
: Appends a collection of points and normal vectors to this point cloud.
: since 6.0

[PointCloudItem](/rhinocommon/rhino/geometry/pointclouditem/) AppendNew()
: Appends a new PointCloudItem to the end of this point cloud.
: Returns - The newly appended item.

IReadOnlyList<Point3d> AsReadOnlyListOfPoints()
: Returns an enumerator and list indexer over point cloud locations.
: Returns - The read-only list. This is a reference to the present point cloud.
: since 6.0

void ClearColors()
: Destroys the color information in this point cloud.

void ClearHiddenFlags()
: Destroys the hidden flag information in this point cloud.

void ClearNormals()
: Destroys the normal vector information in this point cloud.

int ClosestPoint(Point3d testPoint)
: Returns index of the closest point in the point cloud to a given test point.
: Returns - Index of point in the point cloud on success. -1 on failure.

Color[] GetColors()
: Copy all the point colors in this point cloud to an array.
: Returns - An array containing all the colors in this point cloud.

IEnumerator<PointCloudItem> GetEnumerator()
: Gets an enumerator that allows to modify each pointcloud point.
: Returns - A instance of .

[Vector3d](/rhinocommon/rhino/geometry/vector3d/)[] GetNormals()
: Copy all the normal vectors in this point cloud to an array.
: Returns - An array containing all the normals in this point cloud.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetPoints()
: Copy all the point coordinates in this point cloud to an array.
: Returns - An array containing all the points in this point cloud.

void Insert(int index,Point3d point)
: Inserts a new point into the point list.

void Insert(int index,Point3d point,Color color)
: Inserts a new point into the point list.

void Insert(int index,Point3d point,Vector3d normal)
: Inserts a new point into the point list.

void Insert(int index,Point3d point,Vector3d normal,Color color)
: Inserts a new point into the point list.

[PointCloudItem](/rhinocommon/rhino/geometry/pointclouditem/) InsertNew(int index)
: Inserts a new  at a specific position of the point cloud.
: Returns - The newly inserted item.

void InsertRange(int index,IEnumerable<Point3d> points)
: Append a collection of points to this point cloud.

void Merge(PointCloud other)
: Copies the point values of another pointcloud into this one.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(int index)
: Returns the location of the point at a specific index.
: since 6.0

void RemoveAt(int index)
: Remove the point at the given index.
