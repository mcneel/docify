---
title: "PlugIn"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

```cs
public class PlugIn
```

SettingsSaved
: This event is raised when an instance of Rhino has modified the
     external settings file associated with this plug-in's 
     property.
: since 6.0
## Properties

static bool AskOnLoadProtection
: If true, Rhino will display a warning dialog when load-protected plug-ins are attempting to load. 
     If false, load-protected plug-ins will silently not load.
: since 6.0

static int InstalledPlugInCount
: Returns the number of installed Rhino plug-ins.

Assembly Assembly
: Source assembly for this plug-in.

string Description
: Returns the description of the plug-in, as found in the plug-in's assembly attributes.
: since 6.0

Guid Id
: Returns the Guid, or unique Id, of the plug-in.

Guid LicenseId
: 
: since 6.0

bool LoadAtStartup
: 

[PlugInLoadTime](/rhinocommon/rhino/plugins/pluginloadtime/) LoadTime
: Plug-ins are typically loaded on demand when they are first needed. You can change
     this behavior to load the plug-in at during different stages in time by overriding
     this property.

string Name
: Returns the name of the plug-in, as found in the plug-in's assembly attributes.

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) Settings
: Persistent plug-in settings.

string SettingsDirectory
: 

string SettingsDirectoryAllUsers
: 

string Version
: Returns the version of the plug-in, as found in the plug-in's assembly attributes.

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) WindowPositionSettings
: 
: since 6.0
## Methods

static PlugIn Find(Assembly pluginAssembly)
: Finds the plug-in instance that was loaded from a given assembly.
: Returns - The assembly plug-in instance if successful. Otherwise, null.

static PlugIn Find(Guid plugInId)
: Finds the plug-in instance that was loaded from a given plug-in Id.
: Returns - The plug-in instance if successful. Otherwise, null.
: since 5.5

static void FlushSettingsSavedQueue()
: 
: since 6.0

static string[] GetEnglishCommandNames(Guid pluginId)
: Gets names of all "non-test" commands for a given plug-in.
: Returns - An array with all plug-in names. This can be empty, but not null.

static string[] GetInstalledPlugInFolders()
: 

static string[] GetInstalledPlugInNames()
: Returns the names of all installed Rhino plug-ins.
: Returns - The names if successful.

static string[] GetInstalledPlugInNames(PlugInType typeFilter,bool loaded,bool unloaded)
: Gets a list of installed plug-in names.  The list can be restricted by some filters.
: Returns - An array of installed plug-in names. This can be empty, but not null.

static Dictionary<Guid, string> GetInstalledPlugIns()
: 

static bool GetLoadProtection(Guid pluginId,bool loadSilently)
: Get load protection state for a plug-in
: since 5.5

static [PlugInInfo](/rhinocommon/rhino/plugins/plugininfo/) GetPlugInInfo(Guid pluginId)
: Returns detailed information about an installed Rhino plug-in.
: Returns - Detailed information about an installed Rhino plug-in if successful, None otherwise.
: since 6.0

static [PersistentSettings](/rhinocommon/rhino/persistentsettings/) GetPluginSettings(Guid plugInId,bool load)
: 
: since 6.0

static Guid IdFromName(string pluginName)
: Gets the id of an installed plug-in giving the plug-in's name.
: Returns - The id if successful.
: since 5.5

static Guid IdFromPath(string pluginPath)
: Gets the id of an installed plug-in giving the plug-in's file path.
: Returns - The id if successful.

static void LoadComputeExtensionPlugins()
: Used by compute's startup code to load plugins that have registered custom endpoints
: since 7.0

static bool LoadPlugIn(Guid pluginId)
: Loads an installed plug-in.
: Returns - True if successful, False otherwise.

static bool LoadPlugIn(Guid pluginId,bool loadQuietly,bool forceLoad)
: Loads an installed plug-in.
: Returns - True if successful, False otherwise.
: since 6.0

static [LoadPlugInResult](/rhinocommon/rhino/plugins/loadpluginresult/) LoadPlugIn(string path,Guid plugInId)
: Attempt to load a plug-in at a path. Loaded plug-ins are remembered by
     Rhino between sessions, so this function can also be considered a plug-in
     installation routine
: since 6.0

static string NameFromPath(string pluginPath)
: Gets a plug-in name for an installed plug-in given the path to that plug-in.
: Returns - The plug-in name.

static string PathFromId(Guid pluginId)
: Gets the path to an installed plug-in given the id of that plug-in
: since 5.9

static string PathFromName(string pluginName)
: Gets the path to an installed plug-in given the name of that plug-in
: since 5.9

static bool PlugInExists(Guid id,bool loaded,bool loadProtected)
: Verifies that a Rhino plug-in is installed.
: Returns - Returns True if the plug-in exists, or is installed.

static void RaiseOnPlugInSettingsSavedEvent()
: Raise any pending OnPlugInSettingsSaved events, the events are normally
     queued while a command is running and and fired while Rhino is in an
     idle state.  Calling this method will raise any pending changed events
     regardless of Rhino's current idle state or if a command is running.
: since 6.0

static void SavePluginSettings(Guid plugInId)
: 
: since 6.0

static void SetLoadProtection(Guid pluginId,bool loadSilently)
: Set load protection state for a certain plug-in
: since 5.5

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) CommandSettings(string name)
: 

Commands.Command[] GetCommands()
: All of the commands associated with this plug-in.

object GetPlugInObject()
: 

System.Drawing.Bitmap Icon(Size size)
: Returns the plug-in's icon in bitmap form.
: Returns - The icon if successful, None otherwise.
: since 6.0

void SaveSettings()
: Write settings to disk which will raise a 
     event.
: since 6.0
