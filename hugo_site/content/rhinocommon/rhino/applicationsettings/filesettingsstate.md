---
title: "FileSettingsState"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Represents a snapshot of .
```cs
public class FileSettingsState
```
## Properties

bool AutoSaveEnabled
: Enables or disables Rhino's automatic file saving mechanism.

TimeSpan AutoSaveInterval
: How often the document will be saved when Rhino's automatic file saving mechanism is enabled.

bool AutoSaveMeshes
: Saves render and display meshes in autosave file.

bool ClipboardCopyToPreviousRhinoVersion
: Gets or sets a value that decides if copies to the clipboard are performed in both the current
     and previous Rhino clipboard formats.  This means you will double the size of what is saved in
     the clipboard but will be able to copy from the current to the previous version using the
     clipboard.

[ClipboardState](/rhinocommon/rhino/applicationsettings/clipboardstate/) ClipboardOnExit
: Gets or sets a value that determines what to do with clipboad data on exit.

bool CreateBackupFiles
: Gets or sets a value indicating whether to create backup files.

bool FileLockingEnabled
: Ensures that only one person at a time can have a file open for saving.

bool FileLockingOpenWarning
: Displays an information dialog which identifies computer file is open on.

bool SaveViewChanges
: True for users who consider view changes a document change.
