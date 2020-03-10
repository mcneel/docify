---
title: "LightManagerSupport"
draft: false
---

*Namespace: Rhino.Render*

   Base class for implementing custom light managers in .NET
   
## Methods
#### static void RegisterLightManager(PlugIn plugin)
- (summary) 
     Find and register classes that derive from LightManagerSupport
     from the given plug-in.
     
- (since) 6.0
- (returns) void This is some return comment
#### static void RegisterProviders(Assembly assembly,Guid pluginId)
- (summary) 
     Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in. The plug-in is found in the given assembly
     
- (since) 6.0
- (returns) void This is some return comment
#### bool DeleteLight(RhinoDoc doc,Light light,bool bUndelete)
- (summary) 
      Delete light
     
- (since) 6.0
- (returns) bool This is some return comment
#### void GetLights(RhinoDoc doc,LightArray light_array)
- (summary) 
      Get all the lights that are associated to the light manager. The lights are added 
      to the LightArray parameter passed to the GetLights method
     
- (since) 6.0
- (returns) void This is some return comment
#### bool GetLightSolo(RhinoDoc doc,Guid uuid_light)
- (summary) 
      Returns the value of "ON_LIght::m_bOn" if the light is in solo storage, or 
      False if not in solo storage (ie - this is the checkbox state on the light manager dialog)
     
- (since) 6.0
- (returns) bool This is some return comment
#### void GroupLights(RhinoDoc doc,LightArray light_array)
- (summary) 
     Creates a new group with the lights
     
- (since) 6.0
- (returns) void This is some return comment
#### string LightDescription(RhinoDoc doc,Light light)
- (summary) 
      Gets the string representation of the light description 
     
- (since) 6.0
- (returns) string This is some return comment
#### bool LightFromId(RhinoDoc doc,Guid uuid,Light light)
- (summary) 
      Get Rhino.Geometry.Light object associated to Guig uuid
     
- (since) 6.0
- (returns) bool This is some return comment
#### int LightsInSoloStorage(RhinoDoc doc)
- (summary) 
      Returns the number of lights in solo storage - any number other than 0 means "in solo mode"
     
- (since) 6.0
- (returns) int This is some return comment
#### void ModifyLight(RhinoDoc doc,Light light)
- (summary) 
      Modify properties of the light 
     
- (since) 6.0
- (returns) void This is some return comment
#### int ObjectSerialNumberFromLight(RhinoDoc doc,Light light)
- (summary) 
      Get the object serial number of the light
     
- (since) 6.0
- (returns) int This is some return comment
#### void OnCustomLightEvent(RhinoDoc doc,LightMangerSupportCustomEvent le,Light light)
- (summary) 
      Generates LightMangerSupportCustomEvent: 
        light_added,
        light_deleted,
        light_undeleted,
        light_modified,
        light_sorted,
      The event triggers a Light table event that the rdk lightmanager listens too
     
- (since) 6.0
- (returns) void This is some return comment
#### bool OnEditLight(RhinoDoc doc,LightArray light_array)
- (summary) 
      The default implementation of OnEditLight selects the lights and opens
      the Lights Properties page
     
- (since) 6.0
- (returns) bool This is some return comment
#### Guid PluginId()
- (summary) 
      The Guid of the plugin 
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid RenderEngineId()
- (summary) 
      The Guid of the render engine 
     
- (since) 6.0
- (returns) Guid This is some return comment
#### bool SetLightSolo(RhinoDoc doc,Guid uuid_light,bool bSolo)
- (summary) 
     First checks to see if we are in "solo mode" - which means that there are any lights that respond "true" to IsInSoloStorage.
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
     
- (since) 6.0
- (returns) bool This is some return comment
#### void UnGroup(RhinoDoc doc,LightArray light_array)
- (summary) 
     UnGroups the lights
     
- (since) 6.0
- (returns) void This is some return comment
