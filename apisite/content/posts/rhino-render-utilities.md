---
title: "Rhino.Render.Utilities"
draft: false
---

# Properties
## static Guid DefaultRenderPlugInId
- (summary) 
     Get the plug-in Id for the default render plug-in
     
- (since) 5.3
## static bool ShowIncompatibleEnvironments
- (summary) 
     Specifies whether incompatible content should be shown in the corresponding editor.
     
- (since) 5.3
## static bool ShowIncompatibleMaterials
- (summary) 
     Specifies whether incompatible content should be shown in the corresponding editor.
     
- (since) 5.3
## static bool ShowIncompatibleTextures
- (summary) 
     Specifies whether incompatible content should be shown in the corresponding editor.
     
- (since) 5.3
## static UiFrameworks UiFramework
- (summary) 
- (since) 7.0
# Methods
## static RenderContent ChangeContentType(RenderContent oldContent,Guid newType,bool harvestParameters)
- (summary) 
     Changes the type of a content. This deletes the content and creates a replacement
    of the specified type allowing the caller to decide about harvesting.
     
- (since) 6.0
- (returns) RenderContent This is some return comment
## static string FindFile(RhinoDoc doc,string fullPathToFile)
- (summary) 
     Finds a file and also handles network shares.
     This is a replacement for CRhinoFileUtilities::FindFile().
- (since) 6.0
- (returns) string This is some return comment
## static string FindFile(RhinoDoc doc,string fullPathToFile,bool unpackFromBitmapTableIfNecessary)
- (summary) 
     Finds a file and also handles network shares.
     This is a replacement for CRhinoFileUtilities::FindFile().
- (since) 6.0
- (returns) string This is some return comment
## static bool IsCachedTextureFileInUse(string textureFileName)
- (summary) 
     Determines if any texture in any persistent content list is using the specified file name for caching.
     
- (since) 6.0
- (returns) bool This is some return comment
## static RenderContent LoadPersistentRenderContentFromFile(uint docSerialNumber,String filename)
- (summary) 
     Loads a content from a library file and adds it to the persistent content list of a particular document.
     
- (since) 6.0
- (returns) RenderContent This is some return comment
## static void MoveWindow(IntPtr hwnd,Rectangle rect,bool bRepaint,bool bRepaintNC)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## static string PromptForSaveImageFileParameters(string filename,int width,int height,int colorDepth)
- (summary) 
     Prompts the user for a save file name and the width, height and depth of an image to be saved.
     
- (since) 6.0
- (returns) string This is some return comment
## static bool SafeFrameEnabled(RhinoDoc doc)
- (summary) 
     Queries whether or not the Safe Frame is visible.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool SetDefaultRenderPlugIn(Guid pluginId)
- (summary) 
     Set default render application
     
- (since) 5.3
- (returns) bool This is some return comment
## static ShowContentChooserResults ShowContentChooser(Guid defaultType,Guid defaultInstanceId,RenderContentKind kinds,Guid instanceIdOut,ShowContentChooserFlags flags,RhinoDoc doc)
- (summary) 
     Shows the content chooser to allow the user to select a new or existing content.
     
- (since) 6.25
- (returns) ShowContentChooserResults This is some return comment
## static bool ShowIORMenu(IntPtr hwnd,Point pt,double outIOR,string outString)
- (summary) 
     Display and track the context menu.
     
- (since) 6.0
- (returns) bool This is some return comment
