---
title: "RenderContentSerializer"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Used to import and export custom render content types such as
   materials, environments and textures.  You must override
   RenderPlugIn.RenderContentSerializers() and return an array of
   derived RenderContentSerializer class types to add to the content
   browsers.
```cs
public class RenderContentSerializer
```
## Properties

bool CanRead
: If True then the file type can be imported and will be included in the
     file open box when importing the specified render content type.
: since 5.7

bool CanWrite
: If True then the file type can be exported and will be included in the
     file save box when exporting the specified render content type.
: since 5.7

[RenderContentKind](/rhinocommon/rhino/render/rendercontentkind/) ContentType
: Type of content created when importing or exporting this file type.
: since 5.7

String EnglishDescription
: English string describing this plug-in
: since 5.7

string FileExtension
: File extension associated with this serialize object
: since 5.7

String LocalDescription
: Localized plug-in description
: since 5.7
## Methods

[RenderContent](/rhinocommon/rhino/render/rendercontent/) Read(String pathToFile)
: Called to when importing a file, file should be parsed and converted to
     a valid RenderContent object.
: Returns - Returns a valid RenderContent object such as RenderMaterial if the file
     was successfully parsed otherwise returns null.
: since 5.7

bool RegisterSerializer(Guid id)
: Register the RenderContentSerializer
: since 6.0

bool Write(String pathToFile,RenderContent renderContent,CreatePreviewEventArgs previewArgs)
: Called to save a custom RenderContent object as an external file.
: since 5.7
