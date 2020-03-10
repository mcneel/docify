---
title: "TrulyObservableOrderedSet"
draft: false
---

*Namespace: Rhino.Runtime.Notifications*

   An ordered set that notifies its subscribers whenever one of its INotifyPropertyChanged elements raises its PropertyChanged event.
   
#### CollectionChanged
- (summary) 
     Triggered whenever the set changes or when one of its elements has its PropertyChanged event triggered.
     
- (since) (unknown)
## Constructors
#### Rhino.Runtime.Notifications.TrulyObservableOrderedSet()
- (summary) 
     Creates an empty instance.
     
- (since) (unknown)
#### Rhino.Runtime.Notifications.TrulyObservableOrderedSet(IEnumerable<T> items)
- (summary) 
     Creates an instance with the given items.
     
- (since) (unknown)
## Properties
#### int Count
- (summary) 
     Returns the total number of items in the set.
     
- (since) (unknown)
#### bool IsReadOnly
- (summary) 
     Always returns false.
     
- (since) (unknown)
## Methods
#### void Add(T item)
- (summary) 
     Adds an object to the end of the ordered set if the set does not already contain the item.
     
- (since) (unknown)
- (returns) void This is some return comment
#### void Clear()
- (summary) 
     Clears the ordered set.
     
- (since) (unknown)
- (returns) void This is some return comment
#### bool Contains(T item)
- (summary) 
     Determines whether an element is in the set.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### void CopyTo(T[] array,int arrayIndex)
- (summary) 
     Copies the values of the set to an array.
     
- (since) (unknown)
- (returns) void This is some return comment
#### IEnumerator<T> GetEnumerator()
- (summary) 
     Returns an enumerator that iterates through the set.
     
- (since) (unknown)
- (returns) IEnumerator<T> This is some return comment
#### int IndexOf(T item)
- (summary) 
     Searches for the specified object and returns the zero-based index of the first occurrence.
     
- (since) (unknown)
- (returns) int This is some return comment
#### void Insert(int index,T item)
- (summary) 
     Inserts an element at the specified index.
     
- (since) (unknown)
- (returns) void This is some return comment
#### bool Remove(T item)
- (summary) 
     Removes an element from the set.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### void RemoveAt(int index)
- (summary) 
     Removes an element at the specified index from the set.
     
- (since) (unknown)
- (returns) void This is some return comment
#### void Sort(Func<T, TKey> keySelector,bool descending)
- (summary) 
     Sorts the set.
     
- (since) (unknown)
- (returns) void This is some return comment
