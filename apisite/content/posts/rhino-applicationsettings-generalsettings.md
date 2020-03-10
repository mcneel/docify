---
title: "Rhino.ApplicationSettings.GeneralSettings"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## static bool AutoUpdateCommandHelp
- (summary) 
     Command help dialog auto-update feature.
     
- (since) 5.0
## static System.TimeSpan ContextMenuDelay
- (summary) 
     Time to wait before permitting context menu display.
     
- (since) 5.0
## static bool EnableContextMenu
- (summary) 
     True if right mouse down + delay will pop up context menu on a mouse up if no move happens.
     
- (since) 5.0
## static int MaximumPopupMenuLines
- (summary) 
     Gets or sets the maximum number of popup menu lines.
     
- (since) 5.0
## static int MaximumUndoMemoryMb
- (summary) 
     Gets or sets the minimum undo memory Mb.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.
- (since) 5.0
## static string MiddleMouseMacro
- (summary) 
     Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.
     
- (since) 5.0
## static MiddleMouseMode MiddleMouseMode
- (summary) 
     Gets or sets what happens when the user clicks the middle mouse.
     
- (since) 5.0
## static string MiddleMousePopupToolbar
- (summary) 
     Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.
     
- (since) 5.0
## static int MinimumUndoSteps
- (summary) 
     Gets or sets the minimum undo steps.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.
- (since) 5.0
## static MouseSelectMode MouseSelectMode
- (summary) 
     Gets or sets the current selection mode.
     
- (since) 5.0
## static int NewObjectIsoparmCount
- (summary) 
     Gets or sets the number of isoparm curves to show on new objects.
     
- (since) 5.0
## static bool UseExtrusions
- (summary) 
     Should extrusion objects be created for things like cylinders
     
- (since) 6.0
# Methods
## static GeneralSettingsState GetCurrentState()
- (summary) 
     Gets the current settings.
     
- (since) 5.0
- (returns) GeneralSettingsState This is some return comment
## static GeneralSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings.
     
- (since) 5.0
- (returns) GeneralSettingsState This is some return comment
