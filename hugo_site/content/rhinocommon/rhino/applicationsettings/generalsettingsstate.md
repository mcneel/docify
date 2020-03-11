---
title: "GeneralSettingsState"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Represents a snapshot of .
```cs
public class GeneralSettingsState
```
## Properties

bool AutoUpdateCommandHelp
: Gets or sets the command help dialog auto-update feature.

TimeSpan ContextMenuDelay
: Gets or sets the time to wait before permitting context menu display.

bool EnableContextMenu
: True if right mouse down + delay will pop up context menu on a mouse up if no move happens.

int MaximumPopupMenuLines
: Gets or sets the maximum number of popup menu lines.

int MaximumUndoMemoryMb
: Gets or sets the minimum undo memory Mb.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.

string MiddleMouseMacro
: Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.

[MiddleMouseMode](/rhinocommon/rhino/applicationsettings/middlemousemode/) MiddleMouseMode
: Gets or sets what happens when the user clicks the middle mouse.

string MiddleMousePopupToolbar
: Gets or sets the toolbar to popup when the middle mouse is clicked on
     a view, this value is only used when MiddleMouseMode is set to
     PopupToolbar.

int MinimumUndoSteps
: Gets or sets the minimum undo steps.
     Undo records will be purged if there are more than MinimumUndoSteps and
     they use more than MaximumUndoMemoryMb.

[MouseSelectMode](/rhinocommon/rhino/applicationsettings/mouseselectmode/) MouseSelectMode
: Gets or sets the current selection mode.

int NewObjectIsoparmCount
: Gets or sets the number of isoparm curves to show on new objects.
