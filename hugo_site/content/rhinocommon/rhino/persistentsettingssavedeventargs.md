---
title: "PersistentSettingsSavedEventArgs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino](../)*

Event argument passed to the  event.
```cs
public class PersistentSettingsSavedEventArgs : EventArgs
```
## Properties

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) PlugInSettings
: The old PlugIn settings
: since 6.0

bool SavedByThisRhino
: Will be True if this instance of Rhino is writing the settings file
     or False if a different instance of Rhino has modified the settings
     file.
: since 6.0
## Methods

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) CommandSettings(string englishCommandName)
: The new command settings
: since 6.0
