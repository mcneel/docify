---
title: "Rhino.FileIO.NameHash"
date: 2020-03-10 09:24:55Z
draft: false
---

## static !=
- (summary) 
     Determines if two NameHash instances are different by value.
     
- (since) 6.0
## static ==
- (summary) 
     Determines if two NameHash instances are equal by value.
     
- (since) 6.0
# Constructors
## Rhino.FileIO.NameHash(string name)
- (summary) 
     Creates a new NameHash, representing a piece of text.
     
- (since) 6.0
## Rhino.FileIO.NameHash(string name,Guid parentId)
- (summary) 
     Creates a new NameHash, representing a piece of text.
     
- (since) 6.0
## Rhino.FileIO.NameHash(string name,Guid parentId,bool ignoreCase)
- (summary) 
     Creates a new NameHash, representing a piece of text.
     
- (since) 6.0
## Rhino.FileIO.NameHash(string name,Guid parentId,ModelComponentType type)
- (summary) 
     Creates a new NameHash, representing a piece of text.
     
- (since) 6.0
# Properties
## uint MappedCodePoints
- (summary) 
     Gets the NameHash flags. In some cases = number of mapped code points.
     
- (since) 6.0
## Guid ParentId
- (summary) 
     Only useful if this participates in a tree structure, as with layers.
     
- (since) 6.0
## byte[] Sha1Hash
- (summary) 
     Gets the 20-bytes long SHA-1 hash of ordinal minimum mapped unicode (UTF-32) code points.
     
- (since) 6.0
# Methods
## static NameHash CreateFilePathHash(string path)
- (summary) 
     Creates a new NameHash, representing the name of a file.
     
- (since) 6.0
- (returns) NameHash This is some return comment
## NameHash Clone()
- (summary) 
     Creates a copy of this name hash.
     Because content hash is immutable, this can be used as a deep copy.
     
- (since) 6.0
- (returns) NameHash This is some return comment
## bool Equals(NameHash other)
- (summary) 
     Determines if another name hash has the same value.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines if another object is a name hash with same value.
     
- (since) (unknown)
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Gets an hash code for this name hash.
     Two equal content hashes have equal hash code. The other way around might not be true.
     
- (since) (unknown)
- (returns) int This is some return comment
