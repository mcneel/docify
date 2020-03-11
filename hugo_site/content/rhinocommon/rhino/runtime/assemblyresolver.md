---
title: "AssemblyResolver"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Assembly Resolver for the Rhino App Domain.
```cs
public class AssemblyResolver
```
## Methods

static void AddSearchFile(string file)
: Register another file with the Assembly Resolver. File must be a .NET assembly, 
     so it should probably be a dll, rhp or exe.

static void AddSearchFolder(string folder)
: Register a custom folder with the Assembly Resolver. Folders will be 
     searched recursively, so this could potentially be a very expensive operation. 
     If at all possible, you should consider only registering individual files.
