---
title: "DisplayModeDescription"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Description of a how Rhino will display in a viewport. These are the modes
   that are listed under "Advanced display" in the options dialog.
```cs
[Serializable]
public class DisplayModeDescription : IDisposable, ISerializable
```
## Properties

static Guid AmbientOcclusionId
: 
: since 6.0

static Guid GhostedId
: 
: since 6.0

static Guid PenId
: 
: since 6.0

static Guid RaytracedId
: 
: since 6.0

static Guid RenderedId
: 
: since 6.0

static Guid RenderedShadowsId
: 
: since 6.0

static Guid ShadedId
: 
: since 6.0

static Guid TechId
: 
: since 6.0

static Guid WireframeId
: 
: since 6.0

static Guid XRayId
: 
: since 6.0

bool AllowObjectAssignment
: 

[DisplayPipelineAttributes](/rhinocommon/rhino/display/displaypipelineattributes/) DisplayAttributes
: 

string EnglishName
: 

Guid Id
: 

bool InMenu
: 

string LocalName
: 

bool PipelineLocked
: 

bool ShadedPipelineRequired
: 

bool SupportsShadeCommand
: 

bool SupportsShading
: 

bool WireframePipelineRequired
: 
## Methods

static Guid AddDisplayMode(DisplayModeDescription displayMode)
: 

static Guid AddDisplayMode(string name)
: Adds a new display mode.
: Returns - The id of the new display mode if successful. Guid.Empty on error.
: since 6.7

static Guid CopyDisplayMode(Guid id,string name)
: Copies an existing display mode.
: Returns - The id of the new display mode if successful. Guid.Empty on error.
: since 6.7

static bool DeleteDiplayMode(Guid id)
: Deletes an existing display mode.
: Returns - True if successful, False oteherwise.

static bool DeleteDisplayMode(Guid id)
: Deletes an existing display mode.
: Returns - True if successful, False oteherwise.
: since 7.0

static bool ExportToFile(DisplayModeDescription displayMode,string filename)
: Exports a DisplayModeDescription to a Windows-style .ini file.
: since 6.0

static DisplayModeDescription FindByName(string englishName)
: 

static DisplayModeDescription GetDisplayMode(Guid id)
: 

static DisplayModeDescription[] GetDisplayModes()
: Gets all display mode descriptions that Rhino currently knows about.
: Returns - Copies of all of the display mode descriptions. If you want to modify
     these descriptions, you must call UpdateDisplayMode or AddDisplayMode.

static Guid ImportFromFile(string filename)
: Imports a DisplayModeDescription from a Windows-style .ini file.
: Returns - The id of the DisplayModeDescription if successsful.
: since 6.0

static bool UpdateDisplayMode(DisplayModeDescription displayMode)
: 

void Dispose()
: 
