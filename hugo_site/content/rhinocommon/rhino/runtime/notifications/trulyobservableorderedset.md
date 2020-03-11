---
title: "TrulyObservableOrderedSet"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.Notifications](../)*

An ordered set that notifies its subscribers whenever one of its INotifyPropertyChanged elements raises its PropertyChanged event.
```cs
public class TrulyObservableOrderedSet : IList<T>, INotifyCollectionChanged
```

CollectionChanged
: Triggered whenever the set changes or when one of its elements has its PropertyChanged event triggered.
: since (unknown)
## Constructors

TrulyObservableOrderedSet()
: Creates an empty instance.
: since (unknown)

TrulyObservableOrderedSet(IEnumerable<T> items)
: Creates an instance with the given items.
: since (unknown)
## Properties

int Count
: Returns the total number of items in the set.
: since (unknown)

bool IsReadOnly
: Always returns false.
: since (unknown)
## Methods

void Add(T item)
: Adds an object to the end of the ordered set if the set does not already contain the item.
: since (unknown)

void Clear()
: Clears the ordered set.
: since (unknown)

bool Contains(T item)
: Determines whether an element is in the set.
: Returns - True if the item is in the set; otherwise false.
: since (unknown)

void CopyTo(T[] array,int arrayIndex)
: Copies the values of the set to an array.
: since (unknown)

IEnumerator<T> GetEnumerator()
: Returns an enumerator that iterates through the set.
: since (unknown)

int IndexOf(T item)
: Searches for the specified object and returns the zero-based index of the first occurrence.
: Returns - The zero-based index of the first occurrence of item if found; otherwise -1.
: since (unknown)

void Insert(int index,T item)
: Inserts an element at the specified index.
: since (unknown)

bool Remove(T item)
: Removes an element from the set.
: Returns - Returns True if the element was removed; otherwise returns false.
: since (unknown)

void RemoveAt(int index)
: Removes an element at the specified index from the set.
: since (unknown)

void Sort(Func<T, TKey> keySelector,bool descending)
: Sorts the set.
: since (unknown)
