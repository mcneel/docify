---
title: "GeneralSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties to give access to Rhinoceros settings.
```cs
public class GeneralSettings
```
## Properties

static bool AutoUpdateCommandHelp
: Command help dialog auto-update feature.

static TimeSpan ContextMenuDelay
: Time to wait before permitting context menu display.

static bool EnableContextMenu
: True if right mouse down + delay will pop up context menu on a mouse up if no move happens.

static int MaximumPopupMenuLines
: Gets or sets the maximum number of popup menu lines.

static int MaximumUndoMemoryMb
: Gets or sets the minimum undo memory Mb.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.

static string MiddleMouseMacro
: Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.

static [MiddleMouseMode](/rhinocommon/rhino/applicationsettings/middlemousemode/) MiddleMouseMode
: Gets or sets what happens when the user clicks the middle mouse.

static string MiddleMousePopupToolbar
: Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.

static int MinimumUndoSteps
: Gets or sets the minimum undo steps.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.

static [MouseSelectMode](/rhinocommon/rhino/applicationsettings/mouseselectmode/) MouseSelectMode
: Gets or sets the current selection mode.

static int NewObjectIsoparmCount
: Gets or sets the number of isoparm curves to show on new objects.

static bool UseExtrusions
: Should extrusion objects be created for things like cylinders
: since 6.0
## Methods

static [GeneralSettingsState](/rhinocommon/rhino/applicationsettings/generalsettingsstate/) GetCurrentState()
: Gets the current settings.
: Returns - A new general state with current settings.

static [GeneralSettingsState](/rhinocommon/rhino/applicationsettings/generalsettingsstate/) GetDefaultState()
: Gets the factory settings.
: Returns - A new general state with factory settings.
