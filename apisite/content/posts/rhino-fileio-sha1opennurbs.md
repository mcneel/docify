---
title: "Rhino.FileIO.SHA1OpenNURBS"
draft: false
---

# Constructors
## Rhino.FileIO.SHA1OpenNURBS()
- (summary) 
     Constructs a new instance of the SHA1 algorithm.
     
- (since) 6.0
# Methods
## static byte[] FileSystemPathHash(string path,bool? ignoreCase)
- (summary)  
     Computes the SHA1 hash of a file system path, converted to UTF8.
         These file system paths have identical values of FileSystemPathHash():/x/y/z/name.ext\x\y\z\name.ext/x//y//z/name.ext/x/y/a/b/c/../../../z/name.ext/X/Y/Z/NAME.EXT (When ignoreCase is true)
- (since) (unknown)
- (returns) byte[] This is some return comment
## static byte[] StringHash(string input)
- (summary) 
     Computes the SHA1 hash of a string, converted to UTF8.
     
- (since) 6.0
- (returns) byte[] This is some return comment
## void Initialize()
- (summary) 
     Resets this instance of the algorithm, so that it can be used again.
     It is not required to call this method after creation.
     
- (since) 6.0
- (returns) void This is some return comment
