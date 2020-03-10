---
title: "Rhino.FileIO.FileReference"
draft: false
---

# Constructors
## Rhino.FileIO.FileReference(string fullPath,string relativePath,ContentHash hash,FileReferenceStatus status)
- (summary) 
     Constructs a new instance of the FileReference class,
     given a fullPath, a relativePath a content hash and a status value.
     
- (since) 6.0
# Properties
## ContentHash ContentHash
- (summary) 
     Gets the content hash.
     
- (since) 6.0
## string FullPath
- (summary) 
     Gets the absolute path of this file reference.
     
- (since) 6.0
## FileReferenceStatus FullPathStatus
- (summary) 
     Gets the file reference status.
     
- (since) 6.0
## bool IsSet
- (summary) 
     Returns an indication of the fact that the reference is actually set to a non-None value.
     
- (since) 6.0
## string RelativePath
- (summary) 
     Gets the relative path of this file reference.
     
- (since) 6.0
# Methods
## static FileReference CreateFromFullAndRelativePaths(string fullPath,string relativePath)
- (summary) 
     Returns a new file reference. This returns a new instance even if the path does not exist.
     
- (since) 6.0
- (returns) FileReference This is some return comment
## static FileReference CreateFromFullPath(string fullPath)
- (summary) 
     Returns a new file reference. This returns a new instance even if the path does not exist.
     
- (since) 6.0
- (returns) FileReference This is some return comment
## void Dispose()
- (summary) 
     Reclaims unmanaged resources used by this object.
     
- (since) 6.0
- (returns) void This is some return comment
