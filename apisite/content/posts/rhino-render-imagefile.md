---
title: "ImageFile"
draft: false
---

*Namespace: Rhino.Render*

     Controls interaction with RDK render image files
     
## Events
#### static Deleted
- (summary) 
       Called when the RDK is cleaning up old render image files, a
       plug-in should delete any plug-in specific image files at this
       time.
       
- (since) 5.11
#### static Loaded
- (summary) 
       Generally called when the "RenderOpenLastRender" command is run,
       this event is raised after the render window has been created and the
       saved scene has been loaded.
       
- (since) 5.11
#### static Saved
- (summary) 
       Render image file saved, happens when a rendering completes.
       If a plug-in needs to save additional file information it should
       write it to the same folder as the Rhino render image file.  Rhino
       will take care of deleting old data.
       
- (since) 5.11
