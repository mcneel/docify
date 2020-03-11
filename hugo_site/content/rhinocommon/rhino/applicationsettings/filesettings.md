---
title: "FileSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties relating Rhino files.
```cs
public class FileSettings
```
## Properties

static bool AutoSaveEnabled
: Enables or disables Rhino's automatic file saving mechanism.

static string AutoSaveFile
: the file name used by Rhino's automatic file saving mechanism.

static TimeSpan AutoSaveInterval
: how often the document will be saved when Rhino's automatic file saving mechanism is enabled.

static bool AutoSaveMeshes
: save render and display meshes in autosave file.

static bool ClipboardCopyToPreviousRhinoVersion
: Gets or sets a value that decides if copies to the clipboard are performed in both the current
     and previous Rhino clipboard formats.  This means you will double the size of what is saved in
     the clipboard but will be able to copy from the current to the previous version using the
     clipboard.

static [ClipboardState](/rhinocommon/rhino/applicationsettings/clipboardstate/) ClipboardOnExit
: Gets or sets a value that determines what to do with clipboad data on exit.

static bool CreateBackupFiles
: Gets or sets a value that controls the creation of backup files.

static string DefaultRuiFile
: Gets the path to the default RUI file.

static string ExecutableFolder
: Returns the directory where the main Rhino executable is located.

static bool FileLockingEnabled
: Ensure that only one person at a time can have a file open for saving.

static bool FileLockingOpenWarning
: Gets or sets whether to display the information dialog which identifies computer files.

static string HelpFilePath
: Gets the Rhino help file path.

static DirectoryInfo InstallFolder
: Returns Rhino's installation folder.

static string LocalProfileDataFolder
: Get full path to a Rhino specific sub-folder under the per-user Local
     (non-roaming) Profile folder.  This is the folder where user-specific
     data is stored.
     
     On Windows 7, 8, usually someplace like:
       "C:\Users\[USERNAME]\AppData\Local\McNeel\Rhinoceros\[VERSION_NUMBER]\"
: since 5.8

static bool SaveViewChanges
: True for users who consider view changes a document change.

static int SearchPathCount
: Gets the amount of search paths that are currently defined.

static string TemplateFile
: Returns or sets the location of Rhino's template file.

static string TemplateFolder
: Returns or sets the location of Rhino's template files.

static string WorkingFolder
: Returns or sets Rhino's working directory, or folder.
     The working folder is the default folder for all file operations.
## Methods

static int AddSearchPath(string folder,int index)
: Adds a new imagePath to Rhino's search imagePath list.
     See "Options Files settings" in the Rhino help file for more details.
: Returns - The index where the item was inserted if success.
     -1 on failure.

static string[] AutoSaveBeforeCommands()
: Input list of commands that force AutoSave prior to running.

static bool DeleteSearchPath(string folder)
: Removes an existing imagePath from Rhino's search imagePath list.
     See "Options Files settings" in the Rhino help file for more details.
: Returns - True or False indicating success or failure.

static string FindFile(string fileName)
: Searches for a file using Rhino's search imagePath. Rhino will look for a file in the following locations:
     1. The current document's folder.
     2. Folder's specified in Options dialog, File tab.
     3. Rhino's System folders.
: Returns - full imagePath on success; None on error.

static [FileSettingsState](/rhinocommon/rhino/applicationsettings/filesettingsstate/) GetCurrentState()
: Returns the current state.
: Returns - A new instance containing the current state.

static string GetDataFolder(bool currentUser)
: Gets the data folder for machine or current user.
: Returns - A directory to user or machine data.

static [FileSettingsState](/rhinocommon/rhino/applicationsettings/filesettingsstate/) GetDefaultState()
: Returns the default state.
: Returns - A new instance containing the default state.

static string[] GetSearchPaths()
: Returns all of the imagePath items in Rhino's search imagePath list. See "Options Files settings" in the Rhino help file for more details.

static string[] RecentlyOpenedFiles()
: Returns a list of recently opened files. Note that this function does not
     check to make sure that these files still exist.
: Returns - An array of strings with the paths to the recently opened files.

static void SetAutoSaveBeforeCommands(string[] commands)
: Set list of commands that force AutoSave prior to running.
