---
title: "Rhino.Render.RenderContentSerializer"
draft: false
---

# Properties
## bool CanRead
- (summary) 
     If True then the file type can be imported and will be included in the
     file open box when importing the specified render content type.
     
- (since) 5.7
## bool CanWrite
- (summary) 
     If True then the file type can be exported and will be included in the
     file save box when exporting the specified render content type.
     
- (since) 5.7
## RenderContentKind ContentType
- (summary) 
     Type of content created when importing or exporting this file type.
     
- (since) 5.7
## String EnglishDescription
- (summary) 
     English string describing this plug-in
     
- (since) 5.7
## string FileExtension
- (summary) 
     File extension associated with this serialize object
     
- (since) 5.7
## String LocalDescription
- (summary) 
     Localized plug-in description
     
- (since) 5.7
# Methods
## RenderContent Read(String pathToFile)
- (summary) 
     Called to when importing a file, file should be parsed and converted to
     a valid RenderContent object.
     
- (since) 5.7
- (returns) RenderContent This is some return comment
## bool RegisterSerializer(Guid id)
- (summary) 
     Register the RenderContentSerializer
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Write(String pathToFile,RenderContent renderContent,CreatePreviewEventArgs previewArgs)
- (summary) 
     Called to save a custom RenderContent object as an external file.
     
- (since) 5.7
- (returns) bool This is some return comment
