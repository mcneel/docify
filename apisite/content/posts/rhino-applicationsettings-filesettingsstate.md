---
title: "Rhino.ApplicationSettings.FileSettingsState"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## bool AutoSaveEnabled
- (summary) Enables or disables Rhino's automatic file saving mechanism.
- (since) 5.0
## System.TimeSpan AutoSaveInterval
- (summary) How often the document will be saved when Rhino's automatic file saving mechanism is enabled.
- (since) 5.0
## bool AutoSaveMeshes
- (summary) Saves render and display meshes in autosave file.
- (since) 5.0
## bool ClipboardCopyToPreviousRhinoVersion
- (summary) 
     Gets or sets a value that decides if copies to the clipboard are performed in both the current
     and previous Rhino clipboard formats.  This means you will double the size of what is saved in
     the clipboard but will be able to copy from the current to the previous version using the
     clipboard.
     
- (since) 5.0
## ClipboardState ClipboardOnExit
- (summary) 
     Gets or sets a value that determines what to do with clipboad data on exit.
     
- (since) 5.0
## bool CreateBackupFiles
- (summary) 
     Gets or sets a value indicating whether to create backup files.
     
- (since) 5.0
## bool FileLockingEnabled
- (summary) Ensures that only one person at a time can have a file open for saving.
- (since) 5.0
## bool FileLockingOpenWarning
- (summary) Displays an information dialog which identifies computer file is open on.
- (since) 5.0
## bool SaveViewChanges
- (summary) True for users who consider view changes a document change.
- (since) 5.0
