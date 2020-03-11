---
title: "Utilities"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class Utilities
```
## Properties

static Guid DefaultRenderPlugInId
: Get the plug-in Id for the default render plug-in
: since 5.3

static bool ShowIncompatibleEnvironments
: Specifies whether incompatible content should be shown in the corresponding editor.
: since 5.3

static bool ShowIncompatibleMaterials
: Specifies whether incompatible content should be shown in the corresponding editor.
: since 5.3

static bool ShowIncompatibleTextures
: Specifies whether incompatible content should be shown in the corresponding editor.
: since 5.3

static [UiFrameworks](/rhinocommon/rhino/render/utilities/uiframeworks/) UiFramework
: 
: since 7.0
## Methods

static [RenderContent](/rhinocommon/rhino/render/rendercontent/) ChangeContentType(RenderContent oldContent,Guid newType,bool harvestParameters)
: Changes the type of a content. This deletes the content and creates a replacement
    of the specified type allowing the caller to decide about harvesting.
: Returns - A new persistent render content.
: since 6.0

static string FindFile(RhinoDoc doc,string fullPathToFile)
: Finds a file and also handles network shares.
     This is a replacement for CRhinoFileUtilities::FindFile().
: Returns - The found file.
: since 6.0

static string FindFile(RhinoDoc doc,string fullPathToFile,bool unpackFromBitmapTableIfNecessary)
: Finds a file and also handles network shares.
     This is a replacement for CRhinoFileUtilities::FindFile().
: Returns - The found file.
: since 6.0

static bool IsCachedTextureFileInUse(string textureFileName)
: Determines if any texture in any persistent content list is using the specified file name for caching.
: Returns - True if the texture is present.
: since 6.0

static [RenderContent](/rhinocommon/rhino/render/rendercontent/) LoadPersistentRenderContentFromFile(uint docSerialNumber,String filename)
: Loads a content from a library file and adds it to the persistent content list of a particular document.
: Returns - The loaded content or None if an error occurred.
: since 6.0

static void MoveWindow(IntPtr hwnd,Rectangle rect,bool bRepaint,bool bRepaintNC)
: 
: since 6.0

static string PromptForSaveImageFileParameters(string filename,int width,int height,int colorDepth)
: Prompts the user for a save file name and the width, height and depth of an image to be saved.
: Returns - The new file name.
: since 6.0

static bool SafeFrameEnabled(RhinoDoc doc)
: Queries whether or not the Safe Frame is visible.
: since 6.0

static bool SetDefaultRenderPlugIn(Guid pluginId)
: Set default render application
: Returns - True if plug-in found and loaded successfully.  False if pluginId is
      invalid or was unable to load plug-in
: since 5.3

static [ShowContentChooserResults](/rhinocommon/rhino/render/utilities/showcontentchooserresults/) ShowContentChooser(Guid defaultType,Guid defaultInstanceId,RenderContentKind kinds,Guid instanceIdOut,ShowContentChooserFlags flags,RhinoDoc doc)
: Shows the content chooser to allow the user to select a new or existing content.
: Returns - The result.
: since 6.25

static bool ShowIORMenu(IntPtr hwnd,Point pt,double outIOR,string outString)
: Display and track the context menu.
: Returns - True if the function showed the IOR menu and something was picked.
: since 6.0
