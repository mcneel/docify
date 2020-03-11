---
title: "SHA1OpenNURBS"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides the OpenNURBS implementation of SHA1.
   
   This class is provided only with the purpose of hashing. It is not meant to be
   used for any cryptographic purpose.
```cs
public class SHA1OpenNURBS : SHA1
```
## Constructors

SHA1OpenNURBS()
: Constructs a new instance of the SHA1 algorithm.
: since 6.0
## Methods

static byte[] FileSystemPathHash(string path,bool? ignoreCase)
: Computes the SHA1 hash of a file system path, converted to UTF8.
         These file system paths have identical values of FileSystemPathHash():/x/y/z/name.ext\x\y\z\name.ext/x//y//z/name.ext/x/y/a/b/c/../../../z/name.ext/X/Y/Z/NAME.EXT (When ignoreCase is true)
: Returns - A 20-byte long SHA1 hash.
: since (unknown)

static byte[] StringHash(string input)
: Computes the SHA1 hash of a string, converted to UTF8.
: Returns - A 20-byte long SHA1 hash.
: since 6.0

void Initialize()
: Resets this instance of the algorithm, so that it can be used again.
     It is not required to call this method after creation.
: since 6.0
