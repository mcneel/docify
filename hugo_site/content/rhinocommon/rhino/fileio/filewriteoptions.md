---
title: "FileWriteOptions"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

```cs
public class FileWriteOptions : IDisposable
```
## Constructors

FileWriteOptions()
: 
## Properties

string DestinationFileName
: For use on Apple frameworks only.
     Retrns the final destination file name.
: since 6.3

int FileVersion
: 

bool IncludeBitmapTable
: The file written should include the bitmap table if your File Writing Plug-in supports it.

bool IncludeHistory
: The file written should include history information if your File Writing Plug-In supports it.

bool IncludePreviewImage
: The file written should include a preview image if your File Writing Plug-in supports it.

bool IncludeRenderMeshes
: The file written should include the render meshes if your File Writing Plug-in supports it.

bool SuppressAllInput
: 
: since 7.0

bool SuppressDialogBoxes
: If true, it means the command has been run with a '-', meaning you should not ask questions during writing. (no dialogs, no "getters", etc.)

bool UpdateDocumentPath
: If a complete, current version, 3dm file is successfully saved, then
     the name of the file will be used to update the document's default file
     path and title and document will be marked as not modified.
: since 6.7

bool WriteAsTemplate
: Write as template

bool WriteGeometryOnly
: If true, the file written should include only geometry File Writing Plug-in supports it.

bool WriteSelectedObjectsOnly
: If true, this command should export only the objects currently selected in the Rhino model.

bool WriteUserData
: If true, the file written should include User Data if your File Writing Plug-in supports it.

[Transform](/rhinocommon/rhino/geometry/transform/) Xform
: 
## Methods

void Dispose()
: 
