---
title: "DocumentOpenEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino](../)*

Provides document information for RhinoDoc events.
```cs
public class DocumentOpenEventArgs : DocumentEventArgs
```
## Properties

string FileName
: Name of file being opened.

bool Merge
: True if file is being merged into the current document. This
     occurs during the "Import" command.

bool Reference
: True if file is opened as a reference file.
