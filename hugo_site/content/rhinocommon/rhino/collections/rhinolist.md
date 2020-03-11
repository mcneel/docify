---
title: "RhinoList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Collections](../)*

Provides helper methods to work with  and other collections.
```cs
[Serializable,
  DebuggerTypeProxy(typeof(ListDebuggerDisplayProxy<>)),
  DebuggerDisplay("Count = {Count}")]
public class RhinoList : IList<T>, IList, ICloneable
```
## Constructors

RhinoList()
: Initializes a new, empty list.
: since (unknown)

RhinoList(IEnumerable<T> collection)
: Initializes this list as a shallow duplicate of another list, array or any other enumerable set of T.
: since (unknown)

RhinoList(int initialCapacity)
: Initializes an empty list with a certain capacity.
: since (unknown)

RhinoList(int amount,T defaultValue)
: Initializes a new list with a specified amount of values.
: since (unknown)

RhinoList(RhinoList<T> list)
: Initializes an new list by shallow duplicating another list.
: since (unknown)
## Properties

int Capacity
: Gets or sets the total number of elements the internal data structure can hold without resizing.
: since (unknown)

int Count
: Gets the number of elements actually contained in the List.
: since (unknown)

T First
: Gets or sets the first item in the list. This is synonymous to calling List[0].
: since (unknown)

T Last
: Gets or sets the last item in the list. This is synonymous to calling List[Count-1].
: since (unknown)

int NullCount
: Gets the number of None references (Nothing in Visual Basic) in this list. 
     If T is a ValueType, this property always return zero.
: since (unknown)
## Methods

static IEnumerable<int[]> Point2dKNeighbors(IEnumerable<Point2d> hayPoints,IEnumerable<Point2d> needlePoints,int amount)
: Finds a certain amout of points in a list of single-precision 2D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> Point2fKNeighbors(IEnumerable<Point2f> hayPoints,IEnumerable<Point2f> needlePoints,int amount)
: Finds a certain amout of points in a list of single-precision 2D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> Point3dKNeighbors(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePoints,int amount)
: Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
     See RTree KNeighbors for alternatives.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> Point3fKNeighbors(IEnumerable<Point3f> hayPoints,IEnumerable<Point3f> needlePoints,int amount)
: Finds a certain amout of points in a list of single-precision 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

static IEnumerable<int[]> PointCloudKNeighbors(PointCloud pointcloud,IEnumerable<Point3d> needlePoints,int amount)
: Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a short list.
: Returns - An enumerable of arrays of indices; each array contains the indices for each of the needlePts.
: since 6.0

void Add(T item)
: Adds an object to the end of the List.
: since (unknown)

void AddRange(IEnumerable collection)
: Adds the elements of the specified collection to the end of the List.
: since (unknown)

void AddRange(IEnumerable<T> collection)
: Adds the elements of the specified collection to the end of the List.
: since (unknown)

ReadOnlyCollection<T> AsReadOnly()
: Constructs a read-only wrapper of this class.
: Returns - A wrapper.
: since (unknown)

int BinarySearch(int index,int count,T item,IComparer<T> comparer)
: Searches the entire sorted List for an element using the specified 
     comparer and returns the zero-based index of the element.
: Returns - The zero-based index of item in the sorted List, if item is found; 
     otherwise, a negative number that is the bitwise complement of the index 
     of the next element that is larger than item or, if there is no larger element, 
     the bitwise complement of Count.
: since (unknown)

int BinarySearch(T item)
: Searches the entire sorted List for an element using the default comparer 
     and returns the zero-based index of the element.
: Returns - The zero-based index of item in the sorted List, if item is found; 
     otherwise, a negative number that is the bitwise complement of the index 
     of the next element that is larger than item or, if there is no larger element, 
     the bitwise complement of Count.
: since (unknown)

int BinarySearch(T item,IComparer<T> comparer)
: Searches the entire sorted List for an element using the specified 
     comparer and returns the zero-based index of the element.
: Returns - The zero-based index of item in the sorted List, if item is found; 
     otherwise, a negative number that is the bitwise complement of the index 
     of the next element that is larger than item or, if there is no larger element, 
     the bitwise complement of Count.
: since (unknown)

void Clear()
: Removes all elements from the List.
: since (unknown)

bool Contains(T item)
: Determines whether an element is in the List.
: Returns - True if item is found in the List; otherwise, false.
: since (unknown)

RhinoList<TOutput> ConvertAll(Converter<T, TOutput> converter)
: Aggregates all results of a conversion function over this table into a new list.
: Returns - The new list.
: since (unknown)

void CopyTo(int index,T[] array,int arrayIndex,int count)
: Copies a range of elements from the List to a compatible one-dimensional array, 
     starting at the specified index of the target array.
: since (unknown)

void CopyTo(T[] array)
: Copies the entire List to a compatible one-dimensional array, 
     starting at the beginning of the target array.
: since (unknown)

void CopyTo(T[] array,int arrayIndex)
: Copies the entire List to a compatible one-dimensional array, 
     starting at the specified index of the target array.
: since (unknown)

RhinoList<T> Duplicate()
: Returns a shallow copy of this instance.
     If the generic type is comprised of only value types (struct, enum, ptr), then the result will be a deep copy.
: Returns - The duplicated list.
: since (unknown)

bool Exists(Predicate<T> match)
: Determines whether the List contains elements that match the 
     conditions defined by the specified predicate.
: Returns - True if the List contains one or more elements that match the 
     conditions defined by the specified predicate; otherwise, false.
: since (unknown)

T Find(Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the first occurrence within the entire List.
: Returns - The first element that matches the conditions defined by the specified predicate, 
     if found; otherwise, the default value for type T.
: since (unknown)

RhinoList<T> FindAll(Predicate<T> match)
: Retrieves all the elements that match the conditions defined by the specified predicate.
: Returns - A ON_List(T) containing all the elements that match the conditions 
     defined by the specified predicate, if found; otherwise, an empty ON_List(T).
: since (unknown)

int FindIndex(int startIndex,int count,Predicate<T> match)
: Searches for an element that matches the conditions defined by the specified predicate, 
     and returns the zero-based index of the first occurrence within the range of elements 
     in the List that extends from the specified index to the last element.
: Returns - The zero-based index of the first occurrence of an element that 
     matches the conditions defined by match, if found; otherwise, -1.
: since (unknown)

int FindIndex(int startIndex,Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the first 
     occurrence within the entire List.
: Returns - The zero-based index of the first occurrence of an element that 
     matches the conditions defined by match, if found; otherwise, -1.
: since (unknown)

int FindIndex(Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the first 
     occurrence within the entire List.
: Returns - The zero-based index of the first occurrence of an element that 
     matches the conditions defined by match, if found; otherwise, -1.
: since (unknown)

T FindLast(Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the last occurrence within the entire List.
: Returns - The last element that matches the conditions defined by the specified predicate, 
     if found; otherwise, the default value for type T.
: since (unknown)

int FindLastIndex(int startIndex,int count,Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
: Returns - The zero-based index of the last occurrence of an element that matches 
     the conditions defined by match, if found; otherwise, -1.
: since (unknown)

int FindLastIndex(int startIndex,Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
: Returns - The zero-based index of the last occurrence of an element that matches 
     the conditions defined by match, if found; otherwise, -1.
: since (unknown)

int FindLastIndex(Predicate<T> match)
: Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
: Returns - The zero-based index of the last occurrence of an element that matches 
     the conditions defined by match, if found; otherwise, -1.
: since (unknown)

void ForEach(Action<T> action)
: Performs the specified action on each element of the List.
: since (unknown)

IEnumerator<T> GetEnumerator()
: Constructs an enumerator that is capable of iterating over all items in this list.
: Returns - The new enumerator.
: since (unknown)

RhinoList<T> GetRange(int index,int count)
: Constructs a shallow copy of a range of elements in the source List.
: Returns - A shallow copy of a range of elements in the source List.
: since (unknown)

int IndexOf(T item)
: Searches for the specified object and returns the zero-based index of the 
     first occurrence within the entire List.
: Returns - The zero-based index of the first occurrence of item within 
     the entire List, if found; otherwise, -1.
: since (unknown)

int IndexOf(T item,int index)
: Searches for the specified object and returns the zero-based index of 
     the first occurrence within the range of elements in the List that 
     extends from the specified index to the last element.
: Returns - The zero-based index of the first occurrence of item within 
     the entire List, if found; otherwise, -1.
: since (unknown)

int IndexOf(T item,int index,int count)
: Searches for the specified object and returns the zero-based index of the first 
     occurrence within the range of elements in the List that starts at the specified 
     index and contains the specified number of elements.
: Returns - The zero-based index of the first occurrence of item within 
     the entire List, if found; otherwise, -1.
: since (unknown)

void Insert(int index,T item)
: Inserts an element into the List at the specified index.
: since (unknown)

void InsertRange(int index,IEnumerable<T> collection)
: Inserts the elements of a collection into the List at the specified index.
: since (unknown)

int LastIndexOf(T item)
: Searches for the specified object and returns the zero-based 
     index of the last occurrence within the entire List.
: Returns - The zero-based index of the last occurrence of item within 
     the entire the List, if found; otherwise, -1.
: since (unknown)

int LastIndexOf(T item,int index)
: Searches for the specified object and returns the zero-based index 
     of the last occurrence within the range of elements in the List 
     that extends from the first element to the specified index.
: Returns - The zero-based index of the last occurrence of item within 
     the entire the List, if found; otherwise, -1.
: since (unknown)

int LastIndexOf(T item,int index,int count)
: Searches for the specified object and returns the zero-based index of the 
     last occurrence within the range of elements in the List that contains 
     the specified number of elements and ends at the specified index.
: Returns - The zero-based index of the last occurrence of item within 
     the entire the List, if found; otherwise, -1.
: since (unknown)

int RemapIndex(int index)
: Remap an index in the infinite range onto the List index range.
: Returns - Remapped index.
: since (unknown)

bool Remove(T item)
: Removes the first occurrence of a specific object from the List.
: Returns - True if item is successfully removed; otherwise, false. 
     This method also returns False if item was not found in the List.
: since (unknown)

int RemoveAll(Predicate<T> match)
: Removes the all the elements that match the conditions defined by the specified predicate.
: Returns - The number of elements removed from the List.
: since (unknown)

void RemoveAt(int index)
: Removes the element at the specified index of the List.
: since (unknown)

int RemoveNulls()
: Removes all elements from the List that are None references (Nothing in Visual Basic). 
     This function will not do anything if T is not a Reference type.
: Returns - The number of nulls removed from the List.
: since (unknown)

void RemoveRange(int index,int count)
: Removes a range of elements from the List.
: since (unknown)

void Reverse()
: Reverses the order of the elements in the entire List.
: since (unknown)

void Reverse(int index,int count)
: Reverses the order of the elements in the specified range.
: since (unknown)

void Sort()
: Sorts the elements in the entire List using the default comparer.
: since (unknown)

void Sort(Comparison<T> comparison)
: Sorts the elements in the entire list using the specified comparer.
: since (unknown)

void Sort(double[] keys)
: Sort this list based on a list of numeric keys of equal length. 
     The keys array will not be altered.
: since (unknown)

void Sort(IComparer<T> comparer)
: Sorts the elements in the entire list using the specified System.Comparison(T)
: since (unknown)

void Sort(int index,int count,IComparer<T> comparer)
: Sorts the elements in a range of elements in list using the specified comparer.
: since (unknown)

void Sort(int[] keys)
: Sort this list based on a list of numeric keys of equal length. 
     The keys array will not be altered.
: since (unknown)

T[] ToArray()
: Constructs an array that contains all items in this list.
: Returns - An array containing all items in this list.
: since (unknown)

void TrimExcess()
: Sets the capacity to the actual number of elements in the List, 
     if that number is less than a threshold value.
: since (unknown)

bool TrueForAll(Predicate<T> match)
: Determines whether every element in the List matches the conditions defined by the specified predicate.
: Returns - True if every element in the List matches the conditions defined by 
     the specified predicate; otherwise, false. If the list has no elements, the return value is true.
: since (unknown)
