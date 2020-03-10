---
title: "RenderContentManager"
draft: false
---

*Namespace: Rhino.Render*

   RenderContentManager's RestoreRenderContents method unpacks the 
   default render contents from the from the application and places them 
   in the User's folder.  Only available on Mac at the moment.
   
## Properties
#### static string UserRenderContentPath
- (summary) 
     Get the path to: 
     Windows: C:\Users\user\AppData\Roaming\McNeel\Rhinoceros\6.0\Localization\en-US\Render Content
     macOS: ~/Library/Application Support/McNeel/Rhinoceros/6.0/Render Content
     If a CustomLibraryPath is set, this is returned
     
- (since) 6.10
## Methods
#### static bool RestoreRenderContent()
- (summary) 
     Unpacks the default render contents from the from the application and places them in the User's folder.
     This will restore the default versions if the version of Rhino that is running is newer than the contents
     of the last Rhino that wrote the version.txt file.  If the version.txt file is not present, it will
     automatically restore the default contents.  This does not overwrite files that the user has changed.
     
- (since) 6.10
- (returns) bool This is some return comment
