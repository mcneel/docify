---
title: "SelectionFilterSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Selection filter settings restrict any selection mode (SelWindow, SelCrossing, SelAll, etc.) to specified object types.
   Note, selection filter settings are not persistent.
```cs
public class SelectionFilterSettings
```
## Properties

static bool Enabled
: Enables or disables the global object selection filter.
: since 7.0

static [ObjectType](/rhinocommon/rhino/docobjects/objecttype/) GlobalGeometryFilter
: The global geometry type filter controls which types of geometry will be be filtered.
     Note, the filter can be a bitwise combination of multiple object types.
: since 7.0

static [ObjectType](/rhinocommon/rhino/docobjects/objecttype/) OneShotGeometryFilter
: The one-shot geometry type filter controls which types of geometry will be be filtered for one selection.
     Note, the filter can be a bitwise combination of multiple object types.
: since 7.0

static bool SubObjectSelect
: Enables or disabled sub-object selection.
: since 7.0
## Methods

static [SelectionFilterSettingsState](/rhinocommon/rhino/applicationsettings/selectionfiltersettingsstate/) GetCurrentState()
: Gets the current settings of the application.
: since 7.0

static [SelectionFilterSettingsState](/rhinocommon/rhino/applicationsettings/selectionfiltersettingsstate/) GetDefaultState()
: Gets the factory settings of the application.
: since 7.0

static void RestoreDefaults()
: Commits the default settings as the current settings.
: since 7.0

static void UpdateFromState(SelectionFilterSettingsState state)
: Sets all settings to a particular defined joined state.
: since 7.0
