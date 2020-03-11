---
title: "NameHash"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Contains information that is useful to uniquly identify an object name.
   This object is immutable.
```cs
public class NameHash : ICloneable, IEquatable<NameHash>
```

static !=
: Determines if two NameHash instances are different by value.
: Returns - True if they are different by value, otherwise false.
: since 6.0

static ==
: Determines if two NameHash instances are equal by value.
: Returns - True if they are equal by value, otherwise false.
: since 6.0
## Constructors

NameHash(string name)
: Creates a new NameHash, representing a piece of text.
: since 6.0

NameHash(string name,Guid parentId)
: Creates a new NameHash, representing a piece of text.
: Returns - A new hash
: since 6.0

NameHash(string name,Guid parentId,bool ignoreCase)
: Creates a new NameHash, representing a piece of text.
: Returns - A new hash
: since 6.0

NameHash(string name,Guid parentId,ModelComponentType type)
: Creates a new NameHash, representing a piece of text.
: Returns - A new hash
: since 6.0
## Properties

uint MappedCodePoints
: Gets the NameHash flags. In some cases = number of mapped code points.
: since 6.0

Guid ParentId
: Only useful if this participates in a tree structure, as with layers.
: since 6.0

byte[] Sha1Hash
: Gets the 20-bytes long SHA-1 hash of ordinal minimum mapped unicode (UTF-32) code points.
: since 6.0
## Methods

static NameHash CreateFilePathHash(string path)
: Creates a new NameHash, representing the name of a file.
: since 6.0

NameHash Clone()
: Creates a copy of this name hash.
     Because content hash is immutable, this can be used as a deep copy.
: Returns - A different instance of the same name hash.
: since 6.0

bool Equals(NameHash other)
: Determines if another name hash has the same value.
: Returns - True if the two hashes are equal.
: since 6.0

bool Equals(object obj)
: Determines if another object is a name hash with same value.
: Returns - True if the two hashes are equal.
: since (unknown)

int GetHashCode()
: Gets an hash code for this name hash.
     Two equal content hashes have equal hash code. The other way around might not be true.
: Returns - An hash code value.
: since (unknown)
