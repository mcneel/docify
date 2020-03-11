---
title: "RenderPlugIn"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

```cs
public class RenderPlugIn : PlugIn
```
## Properties

bool PerferBasicContent
: Set to True if you would like Rhino to quickly create a basic render
     content in response to 'Create New' commands. Set to False if you would
     prefer Rhino to display the render content chooser dialog.
: since 5.12
## Methods

static bool CurrentRendererSupportsFeature(RenderFeature feature)
: 
: since 6.1

bool EnableAssignMaterialButton()
: Called to enable/disable the "Material" button located on the
     "Material" tab in the Properties and Layer dialog boxes.  The default
     return value is False which will disable the button.  If the button is
     disabled then the OnAssignMaterial function is never called.
: since 5.12

bool EnableCreateMaterialButton()
: Called to enable/disable the "New" button located on the "Material" in
     the  Properties and Layer dialog boxes.  The default return value is
     False which will disable the button.  If the button is disabled then
     the OnEditMaterial function is never called.
: since 5.12

bool EnableEditMaterialButton(RhinoDoc doc,Material material)
: Called to enable/disable the "Edit" button located on the "Material" in
     the Properties and Layer dialog boxes.  The default return value is
     False  which will disable the button.  If the button is disabled then
     the OnEditMaterial function is never called.
: since 5.12

List<Guid> GetRenderSettingsSections()
: This function returns a list of uuid for the render settings pages that should be displayed.
: Returns - Return a Id list of of the Render settings sections that will be displayed
: since 6.17

bool OnAssignMaterial(IntPtr parent,RhinoDoc doc,Material material)
: This function is called by the Object Properties and Layer Control
     dialogs when the "Material" button is pressed in the "Render" tab.
     This is only called if EnableAssignMaterialButton returns true.
: since 5.12

bool OnCreateMaterial(IntPtr parent,RhinoDoc doc,Material material)
: This function is called by the Object Properties and Layer Control
     dialogs when the "New" button is pressed in the "Material" tab.  This
     is only called if EnableCreateMaterialButton returns true.
: since 5.12

bool OnEditMaterial(IntPtr parent,RhinoDoc doc,Material material)
: This function is called by the Object Properties and Layer Control
     dialogs when the "Edit" button is pressed in the "Material" tab.  This
     is only called if EnableEditMaterialButton returns true. A return value
     of True means the material has been updated.
: since 5.12

void RenderSettingsCustomSections(List<ICollapsibleSection> sections)
: Override this function to provide custom sections for the render settings panel that are displayed
     when your plug-in is the current render plug-in.
: since 6.0

void SunCustomSections(List<ICollapsibleSection> sections)
: Override this function to provide custom sections for the sun panel that are displayed
     when your plug-in is the current render plug-in.
: since 6.0
