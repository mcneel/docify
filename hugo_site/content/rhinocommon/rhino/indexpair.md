---
title: "IndexPair"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino](../)*

Represents two indices: I and J.
## Constructors

IndexPair(int i,int j)
: Initializes a new instance of  with two indices.
## Properties

int Count
: Returns the amount of elements in this pair of indices, which is always 2.
: since 6.0

int I
: Gets or sets the first, I index.

int J
: Gets or sets the second, J index.
## Methods

bool Contains(int item)
: Determines whether the  contains a specific value.
: Returns - True if  is found in the ; otherwise, false.
: since 6.0

void CopyTo(int[] array,int arrayIndex)
: Copies the elements of the  to an , starting at a particular  index.
: since 6.0

IEnumerator<int> GetEnumerator()
: Gets an enumerator that goes over  and , in this order.
: Returns - The needed enumerator.
: since 6.0

int IndexOf(int item)
: Determines the index of a specific item in .
: Returns - The index, 0 for I or 1 for J of  if found in the list; otherwise, -1.
: since 6.0
