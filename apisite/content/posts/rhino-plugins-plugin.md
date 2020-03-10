---
title: "Rhino.PlugIns.PlugIn"
date: 2020-03-10 09:24:56Z
draft: false
---

## SettingsSaved
- (summary) 
     This event is raised when an instance of Rhino has modified the
     external settings file associated with this plug-in's 
     property.
     
- (since) 6.0
# Properties
## static bool AskOnLoadProtection
- (summary) 
     If true, Rhino will display a warning dialog when load-protected plug-ins are attempting to load. 
     If false, load-protected plug-ins will silently not load.
     
- (since) 6.0
## static int InstalledPlugInCount
- (summary) 
     Returns the number of installed Rhino plug-ins.
     
- (since) 5.0
## System.Reflection.Assembly Assembly
- (summary) Source assembly for this plug-in.
- (since) 5.0
## string Description
- (summary) 
     Returns the description of the plug-in, as found in the plug-in's assembly attributes.
     
- (since) 6.0
## Guid Id
- (summary) 
     Returns the Guid, or unique Id, of the plug-in.
     
- (since) 5.0
## Guid LicenseId
- (summary) 
- (since) 6.0
## bool LoadAtStartup
- (summary) 
- (since) 5.0
## PlugInLoadTime LoadTime
- (summary) 
     Plug-ins are typically loaded on demand when they are first needed. You can change
     this behavior to load the plug-in at during different stages in time by overriding
     this property.
     
- (since) 5.0
## string Name
- (summary) 
     Returns the name of the plug-in, as found in the plug-in's assembly attributes.
     
- (since) 5.0
## PersistentSettings Settings
- (summary) 
     Persistent plug-in settings.
     
- (since) 5.0
## string SettingsDirectory
- (summary) 
- (since) 5.0
## string SettingsDirectoryAllUsers
- (summary) 
- (since) 5.0
## string Version
- (summary) 
     Returns the version of the plug-in, as found in the plug-in's assembly attributes.
     
- (since) 5.0
## PersistentSettings WindowPositionSettings
- (summary) 
- (since) 6.0
# Methods
## static PlugIn Find(Assembly pluginAssembly)
- (summary) 
     Finds the plug-in instance that was loaded from a given assembly.
     
- (since) 5.0
- (returns) PlugIn This is some return comment
## static PlugIn Find(Guid plugInId)
- (summary) 
     Finds the plug-in instance that was loaded from a given plug-in Id.
     
- (since) 5.5
- (returns) PlugIn This is some return comment
## static void FlushSettingsSavedQueue()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## static string[] GetEnglishCommandNames(Guid pluginId)
- (summary) 
     Gets names of all "non-test" commands for a given plug-in.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static string[] GetInstalledPlugInFolders()
- (summary) 
- (since) 5.0
- (returns) string[] This is some return comment
## static string[] GetInstalledPlugInNames()
- (summary) 
     Returns the names of all installed Rhino plug-ins.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static string[] GetInstalledPlugInNames(PlugInType typeFilter,bool loaded,bool unloaded)
- (summary) 
     Gets a list of installed plug-in names.  The list can be restricted by some filters.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static Dictionary<Guid, string> GetInstalledPlugIns()
- (summary) 
- (since) 5.0
- (returns) Dictionary<Guid, string> This is some return comment
## static bool GetLoadProtection(Guid pluginId,bool loadSilently)
- (summary) 
     Get load protection state for a plug-in
     
- (since) 5.5
- (returns) bool This is some return comment
## static PlugInInfo GetPlugInInfo(Guid pluginId)
- (summary) 
     Returns detailed information about an installed Rhino plug-in.
     
- (since) 6.0
- (returns) PlugInInfo This is some return comment
## static PersistentSettings GetPluginSettings(Guid plugInId,bool load)
- (summary) 
- (since) 6.0
- (returns) PersistentSettings This is some return comment
## static Guid IdFromName(string pluginName)
- (summary) 
     Gets the id of an installed plug-in giving the plug-in's name.
     
- (since) 5.5
- (returns) Guid This is some return comment
## static Guid IdFromPath(string pluginPath)
- (summary) 
     Gets the id of an installed plug-in giving the plug-in's file path.
     
- (since) 5.0
- (returns) Guid This is some return comment
## static void LoadComputeExtensionPlugins()
- (summary) 
     Used by compute's startup code to load plugins that have registered custom endpoints
     
- (since) 7.0
- (returns) void This is some return comment
## static bool LoadPlugIn(Guid pluginId)
- (summary) 
     Loads an installed plug-in.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool LoadPlugIn(Guid pluginId,bool loadQuietly,bool forceLoad)
- (summary) 
     Loads an installed plug-in.
     
- (since) 6.0
- (returns) bool This is some return comment
## static LoadPlugInResult LoadPlugIn(string path,Guid plugInId)
- (summary) 
     Attempt to load a plug-in at a path. Loaded plug-ins are remembered by
     Rhino between sessions, so this function can also be considered a plug-in
     installation routine
     
- (since) 6.0
- (returns) LoadPlugInResult This is some return comment
## static string NameFromPath(string pluginPath)
- (summary) 
     Gets a plug-in name for an installed plug-in given the path to that plug-in.
     
- (since) 5.0
- (returns) string This is some return comment
## static string PathFromId(Guid pluginId)
- (summary) 
     Gets the path to an installed plug-in given the id of that plug-in
     
- (since) 5.9
- (returns) string This is some return comment
## static string PathFromName(string pluginName)
- (summary) 
     Gets the path to an installed plug-in given the name of that plug-in
     
- (since) 5.9
- (returns) string This is some return comment
## static bool PlugInExists(Guid id,bool loaded,bool loadProtected)
- (summary) 
     Verifies that a Rhino plug-in is installed.
     
- (since) 5.0
- (returns) bool This is some return comment
## static void RaiseOnPlugInSettingsSavedEvent()
- (summary) 
     Raise any pending OnPlugInSettingsSaved events, the events are normally
     queued while a command is running and and fired while Rhino is in an
     idle state.  Calling this method will raise any pending changed events
     regardless of Rhino's current idle state or if a command is running.
     
- (since) 6.0
- (returns) void This is some return comment
## static void SavePluginSettings(Guid plugInId)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## static void SetLoadProtection(Guid pluginId,bool loadSilently)
- (summary) 
     Set load protection state for a certain plug-in
     
- (since) 5.5
- (returns) void This is some return comment
## PersistentSettings CommandSettings(string name)
- (summary) 
- (since) 5.0
- (returns) PersistentSettings This is some return comment
## Commands.Command[] GetCommands()
- (summary) 
     All of the commands associated with this plug-in.
     
- (since) 5.0
- (returns) Commands.Command[] This is some return comment
## object GetPlugInObject()
- (summary) 
- (since) 5.0
- (returns) object This is some return comment
## System.Drawing.Bitmap Icon(Size size)
- (summary) 
     Returns the plug-in's icon in bitmap form.
     
- (since) 6.0
- (returns) System.Drawing.Bitmap This is some return comment
## void SaveSettings()
- (summary) 
     Write settings to disk which will raise a 
     event.
     
- (since) 6.0
- (returns) void This is some return comment
