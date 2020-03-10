---
title: "Rhino.Collections.RhinoList"
draft: false
---

# Constructors
## Rhino.Collections.RhinoList()
- (summary) 
     Initializes a new, empty list.
     
- (since) (unknown)
## Rhino.Collections.RhinoList(IEnumerable<T> collection)
- (summary) 
     Initializes this list as a shallow duplicate of another list, array or any other enumerable set of T.
     
- (since) (unknown)
## Rhino.Collections.RhinoList(int initialCapacity)
- (summary) 
     Initializes an empty list with a certain capacity.
     
- (since) (unknown)
## Rhino.Collections.RhinoList(int amount,T defaultValue)
- (summary) 
     Initializes a new list with a specified amount of values.
     
- (since) (unknown)
## Rhino.Collections.RhinoList(RhinoList<T> list)
- (summary) 
     Initializes an new list by shallow duplicating another list.
     
- (since) (unknown)
# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of elements the internal data structure can hold without resizing.
     
- (since) (unknown)
## int Count
- (summary) 
     Gets the number of elements actually contained in the List.
     
- (since) (unknown)
## T First
- (summary) 
     Gets or sets the first item in the list. This is synonymous to calling List[0].
     
- (since) (unknown)
## T Last
- (summary) 
     Gets or sets the last item in the list. This is synonymous to calling List[Count-1].
     
- (since) (unknown)
## int NullCount
- (summary) 
     Gets the number of None references (Nothing in Visual Basic) in this list. 
     If T is a ValueType, this property always return zero.
     
- (since) (unknown)
# Methods
## static IEnumerable<int[]> Point2dKNeighbors(IEnumerable<Point2d> hayPoints,IEnumerable<Point2d> needlePoints,int amount)
- (summary) 
     Finds a certain amout of points in a list of single-precision 2D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
## static IEnumerable<int[]> Point2fKNeighbors(IEnumerable<Point2f> hayPoints,IEnumerable<Point2f> needlePoints,int amount)
- (summary) 
     Finds a certain amout of points in a list of single-precision 2D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
## static IEnumerable<int[]> Point3dKNeighbors(IEnumerable<Point3d> hayPoints,IEnumerable<Point3d> needlePoints,int amount)
- (summary) 
     Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
     See RTree KNeighbors for alternatives.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
## static IEnumerable<int[]> Point3fKNeighbors(IEnumerable<Point3f> hayPoints,IEnumerable<Point3f> needlePoints,int amount)
- (summary) 
     Finds a certain amout of points in a list of single-precision 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a "short list".
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
## static IEnumerable<int[]> PointCloudKNeighbors(PointCloud pointcloud,IEnumerable<Point3d> needlePoints,int amount)
- (summary) 
     Finds a certain amout of points in a list of 3D points that are the k-closest to a test point.
     This method searches needlePoints by computing all distances from each pointcloud point and keeping a short list.
     
- (since) 6.0
- (returns) IEnumerable<int[]> This is some return comment
## void Add(T item)
- (summary) 
     Adds an object to the end of the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## void AddRange(IEnumerable collection)
- (summary) 
     Adds the elements of the specified collection to the end of the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## void AddRange(IEnumerable<T> collection)
- (summary) 
     Adds the elements of the specified collection to the end of the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## ReadOnlyCollection<T> AsReadOnly()
- (summary) 
     Constructs a read-only wrapper of this class.
     
- (since) (unknown)
- (returns) ReadOnlyCollection<T> This is some return comment
## int BinarySearch(int index,int count,T item,IComparer<T> comparer)
- (summary) 
     Searches the entire sorted List for an element using the specified 
     comparer and returns the zero-based index of the element.
     
- (since) (unknown)
- (returns) int This is some return comment
## int BinarySearch(T item)
- (summary) 
     Searches the entire sorted List for an element using the default comparer 
     and returns the zero-based index of the element.
     
- (since) (unknown)
- (returns) int This is some return comment
## int BinarySearch(T item,IComparer<T> comparer)
- (summary) 
     Searches the entire sorted List for an element using the specified 
     comparer and returns the zero-based index of the element.
     
- (since) (unknown)
- (returns) int This is some return comment
## void Clear()
- (summary) 
     Removes all elements from the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## bool Contains(T item)
- (summary) 
     Determines whether an element is in the List.
     
- (since) (unknown)
- (returns) bool This is some return comment
## RhinoList<TOutput> ConvertAll(Converter<T, TOutput> converter)
- (summary) 
     Aggregates all results of a conversion function over this table into a new list.
     
- (since) (unknown)
- (returns) RhinoList<TOutput> This is some return comment
## void CopyTo(int index,T[] array,int arrayIndex,int count)
- (summary) 
     Copies a range of elements from the List to a compatible one-dimensional array, 
     starting at the specified index of the target array.
     
- (since) (unknown)
- (returns) void This is some return comment
## void CopyTo(T[] array)
- (summary) 
     Copies the entire List to a compatible one-dimensional array, 
     starting at the beginning of the target array.
     
- (since) (unknown)
- (returns) void This is some return comment
## void CopyTo(T[] array,int arrayIndex)
- (summary) 
     Copies the entire List to a compatible one-dimensional array, 
     starting at the specified index of the target array.
     
- (since) (unknown)
- (returns) void This is some return comment
## RhinoList<T> Duplicate()
- (summary) 
     Returns a shallow copy of this instance.
     If the generic type is comprised of only value types (struct, enum, ptr), then the result will be a deep copy.
     
- (since) (unknown)
- (returns) RhinoList<T> This is some return comment
## bool Exists(Predicate<T> match)
- (summary) 
     Determines whether the List contains elements that match the 
     conditions defined by the specified predicate.
     
- (since) (unknown)
- (returns) bool This is some return comment
## T Find(Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the first occurrence within the entire List.
     
- (since) (unknown)
- (returns) T This is some return comment
## RhinoList<T> FindAll(Predicate<T> match)
- (summary) 
     Retrieves all the elements that match the conditions defined by the specified predicate.
     
- (since) (unknown)
- (returns) RhinoList<T> This is some return comment
## int FindIndex(int startIndex,int count,Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the specified predicate, 
     and returns the zero-based index of the first occurrence within the range of elements 
     in the List that extends from the specified index to the last element.
     
- (since) (unknown)
- (returns) int This is some return comment
## int FindIndex(int startIndex,Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the first 
     occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## int FindIndex(Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the first 
     occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## T FindLast(Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the last occurrence within the entire List.
     
- (since) (unknown)
- (returns) T This is some return comment
## int FindLastIndex(int startIndex,int count,Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## int FindLastIndex(int startIndex,Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## int FindLastIndex(Predicate<T> match)
- (summary) 
     Searches for an element that matches the conditions defined by the 
     specified predicate, and returns the zero-based index of the last 
     occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## void ForEach(Action<T> action)
- (summary) 
     Performs the specified action on each element of the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## IEnumerator<T> GetEnumerator()
- (summary) 
     Constructs an enumerator that is capable of iterating over all items in this list.
     
- (since) (unknown)
- (returns) IEnumerator<T> This is some return comment
## RhinoList<T> GetRange(int index,int count)
- (summary) 
     Constructs a shallow copy of a range of elements in the source List.
     
- (since) (unknown)
- (returns) RhinoList<T> This is some return comment
## int IndexOf(T item)
- (summary) 
     Searches for the specified object and returns the zero-based index of the 
     first occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## int IndexOf(T item,int index)
- (summary) 
     Searches for the specified object and returns the zero-based index of 
     the first occurrence within the range of elements in the List that 
     extends from the specified index to the last element.
     
- (since) (unknown)
- (returns) int This is some return comment
## int IndexOf(T item,int index,int count)
- (summary) 
     Searches for the specified object and returns the zero-based index of the first 
     occurrence within the range of elements in the List that starts at the specified 
     index and contains the specified number of elements.
     
- (since) (unknown)
- (returns) int This is some return comment
## void Insert(int index,T item)
- (summary) 
     Inserts an element into the List at the specified index.
     
- (since) (unknown)
- (returns) void This is some return comment
## void InsertRange(int index,IEnumerable<T> collection)
- (summary) 
     Inserts the elements of a collection into the List at the specified index.
     
- (since) (unknown)
- (returns) void This is some return comment
## int LastIndexOf(T item)
- (summary) 
     Searches for the specified object and returns the zero-based 
     index of the last occurrence within the entire List.
     
- (since) (unknown)
- (returns) int This is some return comment
## int LastIndexOf(T item,int index)
- (summary) 
     Searches for the specified object and returns the zero-based index 
     of the last occurrence within the range of elements in the List 
     that extends from the first element to the specified index.
     
- (since) (unknown)
- (returns) int This is some return comment
## int LastIndexOf(T item,int index,int count)
- (summary) 
     Searches for the specified object and returns the zero-based index of the 
     last occurrence within the range of elements in the List that contains 
     the specified number of elements and ends at the specified index.
     
- (since) (unknown)
- (returns) int This is some return comment
## int RemapIndex(int index)
- (summary) 
     Remap an index in the infinite range onto the List index range.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool Remove(T item)
- (summary) 
     Removes the first occurrence of a specific object from the List.
     
- (since) (unknown)
- (returns) bool This is some return comment
## int RemoveAll(Predicate<T> match)
- (summary) 
     Removes the all the elements that match the conditions defined by the specified predicate.
     
- (since) (unknown)
- (returns) int This is some return comment
## void RemoveAt(int index)
- (summary) 
     Removes the element at the specified index of the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## int RemoveNulls()
- (summary) 
     Removes all elements from the List that are None references (Nothing in Visual Basic). 
     This function will not do anything if T is not a Reference type.
     
- (since) (unknown)
- (returns) int This is some return comment
## void RemoveRange(int index,int count)
- (summary) 
     Removes a range of elements from the List.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Reverse()
- (summary) 
     Reverses the order of the elements in the entire List.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Reverse(int index,int count)
- (summary) 
     Reverses the order of the elements in the specified range.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort()
- (summary) 
     Sorts the elements in the entire List using the default comparer.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort(Comparison<T> comparison)
- (summary) 
     Sorts the elements in the entire list using the specified comparer.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort(double[] keys)
- (summary) 
     Sort this list based on a list of numeric keys of equal length. 
     The keys array will not be altered.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort(IComparer<T> comparer)
- (summary) 
     Sorts the elements in the entire list using the specified System.Comparison(T)
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort(int index,int count,IComparer<T> comparer)
- (summary) 
     Sorts the elements in a range of elements in list using the specified comparer.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Sort(int[] keys)
- (summary) 
     Sort this list based on a list of numeric keys of equal length. 
     The keys array will not be altered.
     
- (since) (unknown)
- (returns) void This is some return comment
## T[] ToArray()
- (summary) 
     Constructs an array that contains all items in this list.
     
- (since) (unknown)
- (returns) T[] This is some return comment
## void TrimExcess()
- (summary) 
     Sets the capacity to the actual number of elements in the List, 
     if that number is less than a threshold value.
     
- (since) (unknown)
- (returns) void This is some return comment
## bool TrueForAll(Predicate<T> match)
- (summary) 
     Determines whether every element in the List matches the conditions defined by the specified predicate.
     
- (since) (unknown)
- (returns) bool This is some return comment
