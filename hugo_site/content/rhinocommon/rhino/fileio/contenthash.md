---
title: "ContentHash"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Contains information that is useful to uniquly identify an object.
   This object is immutable.
```cs
public class ContentHash : ICloneable, IEquatable<ContentHash>
```

static !=
: Determines if two ContentHash instances are different by value.
: Returns - True if they are different by value, otherwise false.
: since 6.0

static ==
: Determines if two ContentHash instances are equal by value.
: Returns - True if they are equal by value, otherwise false.
: since 6.0
## Properties

ulong ByteCount
: Gets the length of the content, in bytes.
: since 6.0

DateTime HashTime
: Gets the hash time, rounded to seconds.
: since 6.0

byte[] Sha1ContentHash
: Gets the 20-bytes long SHA1 hash of the content.
: since 6.0

byte[] Sha1NameHash
: Gets the 20-bytes long SHA1 hash of the name.
: since 6.0
## Methods

static ContentHash CreateFromFile(string path)
: Creates a new ContentHash, representing the content of a file.
: since 6.0

ContentHash Clone()
: Creates a copy of this content hash.
     Because content hash is immutable, this can be used as a deep copy.
: Returns - A different instance of the same content hash.
: since 6.0

bool Equals(ContentHash other)
: Determines if another content hash has the same value.
: Returns - True if the two hashes are equal.
: since 6.0

bool Equals(object obj)
: Determines if another object is a content hash with same value.
: Returns - True if the two hashes are equal.
: since (unknown)

int GetHashCode()
: Gets an hash code for this content hash.
     Two equal content hashes have equal hash code. The other way around might not be true.
: Returns - An hash code value.
: since (unknown)
