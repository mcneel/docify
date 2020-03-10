---
title: "Rhino.FileIO.ContentHash"
date: 2020-03-10 09:24:55Z
draft: false
---

## static !=
- (summary) 
     Determines if two ContentHash instances are different by value.
     
- (since) 6.0
## static ==
- (summary) 
     Determines if two ContentHash instances are equal by value.
     
- (since) 6.0
# Properties
## ulong ByteCount
- (summary) 
     Gets the length of the content, in bytes.
     
- (since) 6.0
## DateTime HashTime
- (summary) 
     Gets the hash time, rounded to seconds.
     
- (since) 6.0
## byte[] Sha1ContentHash
- (summary) 
     Gets the 20-bytes long SHA1 hash of the content.
     
- (since) 6.0
## byte[] Sha1NameHash
- (summary) 
     Gets the 20-bytes long SHA1 hash of the name.
     
- (since) 6.0
# Methods
## static ContentHash CreateFromFile(string path)
- (summary) 
     Creates a new ContentHash, representing the content of a file.
     
- (since) 6.0
- (returns) ContentHash This is some return comment
## ContentHash Clone()
- (summary) 
     Creates a copy of this content hash.
     Because content hash is immutable, this can be used as a deep copy.
     
- (since) 6.0
- (returns) ContentHash This is some return comment
## bool Equals(ContentHash other)
- (summary) 
     Determines if another content hash has the same value.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines if another object is a content hash with same value.
     
- (since) (unknown)
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Gets an hash code for this content hash.
     Two equal content hashes have equal hash code. The other way around might not be true.
     
- (since) (unknown)
- (returns) int This is some return comment
