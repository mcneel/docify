---
title: "Rhino.Display.DisplayModeDescription"
draft: false
---

# Properties
## static Guid AmbientOcclusionId
- (summary) 
- (since) 6.0
## static Guid GhostedId
- (summary) 
- (since) 6.0
## static Guid PenId
- (summary) 
- (since) 6.0
## static Guid RaytracedId
- (summary) 
- (since) 6.0
## static Guid RenderedId
- (summary) 
- (since) 6.0
## static Guid RenderedShadowsId
- (summary) 
- (since) 6.0
## static Guid ShadedId
- (summary) 
- (since) 6.0
## static Guid TechId
- (summary) 
- (since) 6.0
## static Guid WireframeId
- (summary) 
- (since) 6.0
## static Guid XRayId
- (summary) 
- (since) 6.0
## bool AllowObjectAssignment
- (summary) 
- (since) 5.0
## DisplayPipelineAttributes DisplayAttributes
- (summary) 
- (since) 5.0
## string EnglishName
- (summary) 
- (since) 5.0
## Guid Id
- (summary) 
- (since) 5.0
## bool InMenu
- (summary) 
- (since) 5.0
## string LocalName
- (summary) 
- (since) 5.0
## bool PipelineLocked
- (summary) 
- (since) 5.0
## bool ShadedPipelineRequired
- (summary) 
- (since) 5.0
## bool SupportsShadeCommand
- (summary) 
- (since) 5.0
## bool SupportsShading
- (summary) 
- (since) 5.0
## bool WireframePipelineRequired
- (summary) 
- (since) 5.0
# Methods
## static Guid AddDisplayMode(DisplayModeDescription displayMode)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
## static Guid AddDisplayMode(string name)
- (summary) 
     Adds a new display mode.
     
- (since) 6.7
- (returns) Guid This is some return comment
## static Guid CopyDisplayMode(Guid id,string name)
- (summary) 
     Copies an existing display mode.
     
- (since) 6.7
- (returns) Guid This is some return comment
## static bool DeleteDiplayMode(Guid id)
- (summary) 
     Deletes an existing display mode.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool DeleteDisplayMode(Guid id)
- (summary) 
     Deletes an existing display mode.
     
- (since) 7.0
- (returns) bool This is some return comment
## static bool ExportToFile(DisplayModeDescription displayMode,string filename)
- (summary) 
     Exports a DisplayModeDescription to a Windows-style .ini file.
     
- (since) 6.0
- (returns) bool This is some return comment
## static DisplayModeDescription FindByName(string englishName)
- (summary) 
- (since) 5.0
- (returns) DisplayModeDescription This is some return comment
## static DisplayModeDescription GetDisplayMode(Guid id)
- (summary) 
- (since) 5.0
- (returns) DisplayModeDescription This is some return comment
## static DisplayModeDescription[] GetDisplayModes()
- (summary) 
     Gets all display mode descriptions that Rhino currently knows about.
     
- (since) 5.0
- (returns) DisplayModeDescription[] This is some return comment
## static Guid ImportFromFile(string filename)
- (summary) 
     Imports a DisplayModeDescription from a Windows-style .ini file.
     
- (since) 6.0
- (returns) Guid This is some return comment
## static bool UpdateDisplayMode(DisplayModeDescription displayMode)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
