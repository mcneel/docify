---
title: "AssemblyResolver"
draft: false
---

*Namespace: Rhino.Runtime*
 Assembly Resolver for the Rhino App Domain. 
## Methods
#### static void AddSearchFile(string file)
- (summary) 
     Register another file with the Assembly Resolver. File must be a .NET assembly, 
     so it should probably be a dll, rhp or exe.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void AddSearchFolder(string folder)
- (summary) 
     Register a custom folder with the Assembly Resolver. Folders will be 
     searched recursively, so this could potentially be a very expensive operation. 
     If at all possible, you should consider only registering individual files.
     
- (since) 5.0
- (returns) void This is some return comment
