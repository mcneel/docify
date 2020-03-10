---
title: "Rhino.PlugIns.RenderPlugIn"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## bool PerferBasicContent
- (summary) 
     Set to True if you would like Rhino to quickly create a basic render
     content in response to 'Create New' commands. Set to False if you would
     prefer Rhino to display the render content chooser dialog.
     
- (since) 5.12
# Methods
## static bool CurrentRendererSupportsFeature(RenderFeature feature)
- (summary) 
- (since) 6.1
- (returns) bool This is some return comment
## bool EnableAssignMaterialButton()
- (summary) 
     Called to enable/disable the "Material" button located on the
     "Material" tab in the Properties and Layer dialog boxes.  The default
     return value is False which will disable the button.  If the button is
     disabled then the OnAssignMaterial function is never called.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool EnableCreateMaterialButton()
- (summary) 
     Called to enable/disable the "New" button located on the "Material" in
     the  Properties and Layer dialog boxes.  The default return value is
     False which will disable the button.  If the button is disabled then
     the OnEditMaterial function is never called.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool EnableEditMaterialButton(RhinoDoc doc,Material material)
- (summary) 
     Called to enable/disable the "Edit" button located on the "Material" in
     the Properties and Layer dialog boxes.  The default return value is
     False  which will disable the button.  If the button is disabled then
     the OnEditMaterial function is never called.
     
- (since) 5.12
- (returns) bool This is some return comment
## List<Guid> GetRenderSettingsSections()
- (summary) 
     This function returns a list of uuid for the render settings pages that should be displayed.
     
- (since) 6.17
- (returns) List<Guid> This is some return comment
## bool OnAssignMaterial(IntPtr parent,RhinoDoc doc,Material material)
- (summary) 
     This function is called by the Object Properties and Layer Control
     dialogs when the "Material" button is pressed in the "Render" tab.
     This is only called if EnableAssignMaterialButton returns true.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool OnCreateMaterial(IntPtr parent,RhinoDoc doc,Material material)
- (summary) 
     This function is called by the Object Properties and Layer Control
     dialogs when the "New" button is pressed in the "Material" tab.  This
     is only called if EnableCreateMaterialButton returns true.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool OnEditMaterial(IntPtr parent,RhinoDoc doc,Material material)
- (summary) 
     This function is called by the Object Properties and Layer Control
     dialogs when the "Edit" button is pressed in the "Material" tab.  This
     is only called if EnableEditMaterialButton returns true. A return value
     of True means the material has been updated.
     
- (since) 5.12
- (returns) bool This is some return comment
## void RenderSettingsCustomSections(List<ICollapsibleSection> sections)
- (summary) 
     Override this function to provide custom sections for the render settings panel that are displayed
     when your plug-in is the current render plug-in.
     
- (since) 6.0
- (returns) void This is some return comment
## void SunCustomSections(List<ICollapsibleSection> sections)
- (summary) 
     Override this function to provide custom sections for the sun panel that are displayed
     when your plug-in is the current render plug-in.
     
- (since) 6.0
- (returns) void This is some return comment
