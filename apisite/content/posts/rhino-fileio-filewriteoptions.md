---
title: "Rhino.FileIO.FileWriteOptions"
draft: false
---

# Constructors
## Rhino.FileIO.FileWriteOptions()
- (summary) 
- (since) 5.0
# Properties
## string DestinationFileName
- (summary) 
     For use on Apple frameworks only.
     Retrns the final destination file name.
     
- (since) 6.3
## int FileVersion
- (summary) 
- (since) 5.0
## bool IncludeBitmapTable
- (summary) 
     The file written should include the bitmap table if your File Writing Plug-in supports it.
     
- (since) 5.0
## bool IncludeHistory
- (summary) 
     The file written should include history information if your File Writing Plug-In supports it.
     
- (since) 5.0
## bool IncludePreviewImage
- (summary) 
     The file written should include a preview image if your File Writing Plug-in supports it.
     
- (since) 5.0
## bool IncludeRenderMeshes
- (summary) 
     The file written should include the render meshes if your File Writing Plug-in supports it.
     
- (since) 5.0
## bool SuppressAllInput
- (summary) 
- (since) 7.0
## bool SuppressDialogBoxes
- (summary) 
     If true, it means the command has been run with a '-', meaning you should not ask questions during writing. (no dialogs, no "getters", etc.)
     
- (since) 5.0
## bool UpdateDocumentPath
- (summary) 
     If a complete, current version, 3dm file is successfully saved, then
     the name of the file will be used to update the document's default file
     path and title and document will be marked as not modified.
     
- (since) 6.7
## bool WriteAsTemplate
- (summary) 
     Write as template
     
- (since) 5.0
## bool WriteGeometryOnly
- (summary) 
     If true, the file written should include only geometry File Writing Plug-in supports it.
     
- (since) 5.0
## bool WriteSelectedObjectsOnly
- (summary) 
     If true, this command should export only the objects currently selected in the Rhino model.
     
- (since) 5.0
## bool WriteUserData
- (summary) 
     If true, the file written should include User Data if your File Writing Plug-in supports it.
     
- (since) 5.0
## Geometry.Transform Xform
- (summary) 
- (since) 5.0
# Methods
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
