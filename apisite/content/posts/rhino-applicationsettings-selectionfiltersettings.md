---
title: "Rhino.ApplicationSettings.SelectionFilterSettings"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## static bool Enabled
- (summary) 
     Enables or disables the global object selection filter.
     
- (since) 7.0
## static Rhino.DocObjects.ObjectType GlobalGeometryFilter
- (summary) 
     The global geometry type filter controls which types of geometry will be be filtered.
     Note, the filter can be a bitwise combination of multiple object types.
     
- (since) 7.0
## static Rhino.DocObjects.ObjectType OneShotGeometryFilter
- (summary) 
     The one-shot geometry type filter controls which types of geometry will be be filtered for one selection.
     Note, the filter can be a bitwise combination of multiple object types.
     
- (since) 7.0
## static bool SubObjectSelect
- (summary) 
     Enables or disabled sub-object selection.
     
- (since) 7.0
# Methods
## static SelectionFilterSettingsState GetCurrentState()
- (summary) 
     Gets the current settings of the application.
     
- (since) 7.0
- (returns) SelectionFilterSettingsState This is some return comment
## static SelectionFilterSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings of the application.
     
- (since) 7.0
- (returns) SelectionFilterSettingsState This is some return comment
## static void RestoreDefaults()
- (summary) 
     Commits the default settings as the current settings.
     
- (since) 7.0
- (returns) void This is some return comment
## static void UpdateFromState(SelectionFilterSettingsState state)
- (summary) 
     Sets all settings to a particular defined joined state.
     
- (since) 7.0
- (returns) void This is some return comment
