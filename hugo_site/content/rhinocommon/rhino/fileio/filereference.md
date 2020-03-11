---
title: "FileReference"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Manages a reference to an existing or nonexisting file,
   using either or both absolute or relative paths.
   Once constructed, this class is immutable.
```cs
public class FileReference : IDisposable
```
## Constructors

FileReference(string fullPath,string relativePath,ContentHash hash,FileReferenceStatus status)
: Constructs a new instance of the FileReference class,
     given a fullPath, a relativePath a content hash and a status value.
: since 6.0
## Properties

[ContentHash](/rhinocommon/rhino/fileio/contenthash/) ContentHash
: Gets the content hash.
: since 6.0

string FullPath
: Gets the absolute path of this file reference.
: since 6.0

FileReferenceStatus FullPathStatus
: Gets the file reference status.
: since 6.0

bool IsSet
: Returns an indication of the fact that the reference is actually set to a non-None value.
: since 6.0

string RelativePath
: Gets the relative path of this file reference.
: since 6.0
## Methods

static FileReference CreateFromFullAndRelativePaths(string fullPath,string relativePath)
: Returns a new file reference. This returns a new instance even if the path does not exist.
: Returns - A file reference to the specified paths.
: since 6.0

static FileReference CreateFromFullPath(string fullPath)
: Returns a new file reference. This returns a new instance even if the path does not exist.
: Returns - A file reference to the specified path.
: since 6.0

void Dispose()
: Reclaims unmanaged resources used by this object.
: since 6.0
