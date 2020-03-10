---
title: "Rhino.ApplicationSettings.FileSettings"
draft: false
---

# Properties
## static bool AutoSaveEnabled
- (summary) Enables or disables Rhino's automatic file saving mechanism.
- (since) 5.0
## static string AutoSaveFile
- (summary) the file name used by Rhino's automatic file saving mechanism.
- (since) 5.0
## static System.TimeSpan AutoSaveInterval
- (summary) how often the document will be saved when Rhino's automatic file saving mechanism is enabled.
- (since) 5.0
## static bool AutoSaveMeshes
- (summary) save render and display meshes in autosave file.
- (since) 5.0
## static bool ClipboardCopyToPreviousRhinoVersion
- (summary) 
     Gets or sets a value that decides if copies to the clipboard are performed in both the current
     and previous Rhino clipboard formats.  This means you will double the size of what is saved in
     the clipboard but will be able to copy from the current to the previous version using the
     clipboard.
     
- (since) 5.0
## static ClipboardState ClipboardOnExit
- (summary) 
     Gets or sets a value that determines what to do with clipboad data on exit.
     
- (since) 5.0
## static bool CreateBackupFiles
- (summary) Gets or sets a value that controls the creation of backup files.
- (since) 5.0
## static string DefaultRuiFile
- (summary) 
     Gets the path to the default RUI file.
     
- (since) 5.0
## static string ExecutableFolder
- (summary) Returns the directory where the main Rhino executable is located.
- (since) 5.0
## static bool FileLockingEnabled
- (summary) Ensure that only one person at a time can have a file open for saving.
- (since) 5.0
## static bool FileLockingOpenWarning
- (summary) Gets or sets whether to display the information dialog which identifies computer files.
- (since) 5.0
## static string HelpFilePath
- (summary) 
     Gets the Rhino help file path.
     
- (since) 5.0
## static System.IO.DirectoryInfo InstallFolder
- (summary) Returns Rhino's installation folder.
- (since) 5.0
## static string LocalProfileDataFolder
- (summary) 
     Get full path to a Rhino specific sub-folder under the per-user Local
     (non-roaming) Profile folder.  This is the folder where user-specific
     data is stored.
     
     On Windows 7, 8, usually someplace like:
       "C:\Users\[USERNAME]\AppData\Local\McNeel\Rhinoceros\[VERSION_NUMBER]\"
     
- (since) 5.8
## static bool SaveViewChanges
- (summary) True for users who consider view changes a document change.
- (since) 5.0
## static int SearchPathCount
- (summary) 
     Gets the amount of search paths that are currently defined.
     
- (since) 5.0
## static string TemplateFile
- (summary) Returns or sets the location of Rhino's template file.
- (since) 5.0
## static string TemplateFolder
- (summary) Returns or sets the location of Rhino's template files.
- (since) 5.0
## static string WorkingFolder
- (summary) 
     Returns or sets Rhino's working directory, or folder.
     The working folder is the default folder for all file operations.
     
- (since) 5.0
# Methods
## static int AddSearchPath(string folder,int index)
- (summary) 
     Adds a new imagePath to Rhino's search imagePath list.
     See "Options Files settings" in the Rhino help file for more details.
     
- (since) 5.0
- (returns) int This is some return comment
## static string[] AutoSaveBeforeCommands()
- (summary) Input list of commands that force AutoSave prior to running.
- (since) 5.0
- (returns) string[] This is some return comment
## static bool DeleteSearchPath(string folder)
- (summary) 
     Removes an existing imagePath from Rhino's search imagePath list.
     See "Options Files settings" in the Rhino help file for more details.
     
- (since) 5.0
- (returns) bool This is some return comment
## static string FindFile(string fileName)
- (summary) 
     Searches for a file using Rhino's search imagePath. Rhino will look for a file in the following locations:
     1. The current document's folder.
     2. Folder's specified in Options dialog, File tab.
     3. Rhino's System folders.
     
- (since) 5.0
- (returns) string This is some return comment
## static FileSettingsState GetCurrentState()
- (summary) 
     Returns the current state.
     
- (since) 5.0
- (returns) FileSettingsState This is some return comment
## static string GetDataFolder(bool currentUser)
- (summary) 
     Gets the data folder for machine or current user.
     
- (since) 5.0
- (returns) string This is some return comment
## static FileSettingsState GetDefaultState()
- (summary) 
     Returns the default state.
     
- (since) 5.0
- (returns) FileSettingsState This is some return comment
## static string[] GetSearchPaths()
- (summary) 
     Returns all of the imagePath items in Rhino's search imagePath list. See "Options Files settings" in the Rhino help file for more details.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static string[] RecentlyOpenedFiles()
- (summary) 
     Returns a list of recently opened files. Note that this function does not
     check to make sure that these files still exist.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static void SetAutoSaveBeforeCommands(string[] commands)
- (summary) Set list of commands that force AutoSave prior to running.
- (since) 5.0
- (returns) void This is some return comment
