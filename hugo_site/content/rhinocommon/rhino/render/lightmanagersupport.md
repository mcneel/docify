---
title: "LightManagerSupport"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Base class for implementing custom light managers in .NET
```cs
public class LightManagerSupport
```
## Methods

static void RegisterLightManager(PlugIn plugin)
: Find and register classes that derive from LightManagerSupport
     from the given plug-in.
: since 6.0

static void RegisterProviders(Assembly assembly,Guid pluginId)
: Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in. The plug-in is found in the given assembly
: since 6.0

bool DeleteLight(RhinoDoc doc,Light light,bool bUndelete)
: Delete light
: Returns - If delete is successful, then return true, else return false
: since 6.0

void GetLights(RhinoDoc doc,LightArray light_array)
: Get all the lights that are associated to the light manager. The lights are added 
      to the LightArray parameter passed to the GetLights method
: since 6.0

bool GetLightSolo(RhinoDoc doc,Guid uuid_light)
: Returns the value of "ON_LIght::m_bOn" if the light is in solo storage, or 
      False if not in solo storage (ie - this is the checkbox state on the light manager dialog)
: Returns - Returns True if the light is in solo storage, or False if not in solo storage
: since 6.0

void GroupLights(RhinoDoc doc,LightArray light_array)
: Creates a new group with the lights
: since 6.0

string LightDescription(RhinoDoc doc,Light light)
: Gets the string representation of the light description
: Returns - Returns the string representation of the light description
: since 6.0

bool LightFromId(RhinoDoc doc,Guid uuid,Light light)
: Get Rhino.Geometry.Light object associated to Guig uuid
: since 6.0

int LightsInSoloStorage(RhinoDoc doc)
: Returns the number of lights in solo storage - any number other than 0 means "in solo mode"
: Returns - Returns the number of lights in solo storage - any number other than 0 means "in solo mode"
: since 6.0

void ModifyLight(RhinoDoc doc,Light light)
: Modify properties of the light
: since 6.0

int ObjectSerialNumberFromLight(RhinoDoc doc,Light light)
: Get the object serial number of the light
: since 6.0

void OnCustomLightEvent(RhinoDoc doc,LightMangerSupportCustomEvent le,Light light)
: Generates LightMangerSupportCustomEvent: 
        light_added,
        light_deleted,
        light_undeleted,
        light_modified,
        light_sorted,
      The event triggers a Light table event that the rdk lightmanager listens too
: Returns - Returns the string representation of the light description
: since 6.0

bool OnEditLight(RhinoDoc doc,LightArray light_array)
: The default implementation of OnEditLight selects the lights and opens
      the Lights Properties page
: Returns - Returns True if successful, else false
: since 6.0

Guid PluginId()
: The Guid of the plugin
: Returns - Returns the Guid of the plugin
: since 6.0

Guid RenderEngineId()
: The Guid of the render engine
: Returns - Returns the Guid of the render engine that is associated with this light manager
: since 6.0

bool SetLightSolo(RhinoDoc doc,Guid uuid_light,bool bSolo)
: First checks to see if we are in "solo mode" - which means that there are any lights that respond "true" to IsInSoloStorage.
     If in solo mode:
      If bSolo = true
       Sets this light on.
      If bSolo = false
       If this is the last light "on", forces all lights out of solo mode.
       If there are other lights on, turns this light off.
     If not in solo mode:
      If bSolo = true
       Forces all lights into solo storage and sets this light on.
      If bSolo = false
       This shouldn't happen.  Will cause an ASSERT
: Returns - Returns True if action is successful
: since 6.0

void UnGroup(RhinoDoc doc,LightArray light_array)
: UnGroups the lights
: since 6.0
