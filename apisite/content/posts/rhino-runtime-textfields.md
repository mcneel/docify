---
title: "Rhino.Runtime.TextFields"
draft: false
---

# Methods
## static double Area(string id)
- (summary) 
       Returns the area value for a selected object id
     
- (since) 7.0
- (returns) double This is some return comment
## static double Area(string id,string unitSystem)
- (summary) 
       Returns the area value for a selected object id in a specified unit system
     
- (since) 7.0
- (returns) double This is some return comment
## static string BlockAttributeText(string key,string prompt,string defaultValue)
- (summary) 
       User text associated with a block
     
- (since) 7.0
- (returns) string This is some return comment
## static int BlockInstanceCount(string instanceDefinitionNameOrId)
- (summary) 
       Returns the number of block instances found in the document
       with the specified block definition name or the instance reference id.
     
- (since) 7.0
- (returns) int This is some return comment
## static string BlockInstanceName(string blockId)
- (summary) 
     Returns the block definition name of a block instance
     
- (since) 7.0
- (returns) string This is some return comment
## static double CurveLength(string id)
- (summary) 
       Get length of a curve given a string id
     
- (since) 7.0
- (returns) double This is some return comment
## static double CurveLength(string id,string unitSystem)
- (summary) 
       Get length of a curve given a string id in a specified unit system.
       UnitSystem enum as string
     
- (since) 7.0
- (returns) double This is some return comment
## static string Date()
- (summary) 
     Current date
     
- (since) 7.0
- (returns) string This is some return comment
## static string Date(string dateFormat)
- (summary) 
     Current date in a specified format
     
- (since) 7.0
- (returns) string This is some return comment
## static string Date(string dateFormat,string languageId)
- (summary) 
     Current Date in a specific format and language
     
- (since) 7.0
- (returns) string This is some return comment
## static string DateModified()
- (summary) 
     Date the document was last edited
     
- (since) 7.0
- (returns) string This is some return comment
## static string DateModified(string dateFormat)
- (summary) 
     Date the document was last edited in a specified format
     
- (since) 7.0
- (returns) string This is some return comment
## static string DateModified(string dateFormat,string languageId)
- (summary) 
     Date the document was last edited in a specific format and language
     
- (since) 7.0
- (returns) string This is some return comment
## static string DetailScale(string detailId,string scaleFormat)
- (summary) 
       Returns a detail views scale
     
- (since) 7.0
- (returns) string This is some return comment
## static string DocumentText(string key)
- (summary) 
       Return document user string for a given key
     
- (since) 7.0
- (returns) string This is some return comment
## static string FileName()
- (summary) 
       Return full path to the document
     
- (since) 7.0
- (returns) string This is some return comment
## static string FileName(string options)
- (summary) 
       Return path to the document
     
- (since) 7.0
- (returns) string This is some return comment
## static InstanceAttributeField[] GetInstanceAttributeFields(InstanceDefinition idef)
- (summary) 
- (since) 7.0
- (returns) InstanceAttributeField[] This is some return comment
## static InstanceAttributeField[] GetInstanceAttributeFields(string str)
- (summary) 
     Gets an array of block attribute definitions associated with a
     TextObject.
     
- (since) 7.0
- (returns) InstanceAttributeField[] This is some return comment
## static InstanceAttributeField[] GetInstanceAttributeFields(TextObject text)
- (summary) 
     Gets an array of block attribute definitions associated with a
     TextObject.
     
- (since) 7.0
- (returns) InstanceAttributeField[] This is some return comment
## static string LayerName(string layerId)
- (summary) 
       Returns the name of a layer based on the layers guid
     
- (since) 7.0
- (returns) string This is some return comment
## static string LayoutUserText(string key)
- (summary) 
     Returns a value from the active layouts user text strings for the specified key.
     
- (since) 7.0
- (returns) string This is some return comment
## static string LayoutUserText(string layoutId,string key)
- (summary) 
     Returns user text value from a layout id Key
     
- (since) 7.0
- (returns) string This is some return comment
## static string ModelUnits()
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
## static string Notes()
- (summary) 
       Notes for a RhinoDoc
     
- (since) 7.0
- (returns) string This is some return comment
## static int NumPages()
- (summary) 
       Number of layout pages in a document
     
- (since) 7.0
- (returns) int This is some return comment
## static string ObjectLayer(string id)
- (summary) 
       Return an object's layer name
     
- (since) 7.0
- (returns) string This is some return comment
## static string ObjectName(string id)
- (summary) 
       Return an object's name
     
- (since) 7.0
- (returns) string This is some return comment
## static double PageHeight()
- (summary) 
       Return the current layout page height in the layout units
     
- (since) 7.0
- (returns) double This is some return comment
## static string PageName()
- (summary) 
       Return the current layout page name
     
- (since) 7.0
- (returns) string This is some return comment
## static string PageName(string id)
- (summary) 
       Return the page name for the specified View ID
     
- (since) 7.0
- (returns) string This is some return comment
## static int PageNumber()
- (summary) 
       Returns the current layouts page number
     
- (since) 7.0
- (returns) int This is some return comment
## static double PageWidth()
- (summary) 
       Return the current layout page width in the layout units
     
- (since) 7.0
- (returns) double This is some return comment
## static string PaperName()
- (summary) 
       Returns the layouts selected paper name
       example Letter / A4 / A6
     
- (since) 7.0
- (returns) string This is some return comment
## static string PointCoordinate(string pointId,string axis)
- (summary) 
       returns the location of a 3d point
     
- (since) 7.0
- (returns) string This is some return comment
## static string UserText(string id,string key)
- (summary) 
       User text associated with an object, block or layout
     
- (since) 7.0
- (returns) string This is some return comment
## static string UserText(string id,string key,string prompt)
- (summary) 
       User text associated with an object, block or layout
     
- (since) 7.0
- (returns) string This is some return comment
## static string UserText(string id,string key,string prompt,string defaultValue)
- (summary) 
       User text associated with an object, block or layout
     
- (since) 7.0
- (returns) string This is some return comment
## static double Volume(string id)
- (summary) 
       Returns the volume for the selected object id
     
- (since) 7.0
- (returns) double This is some return comment
## static double Volume(string id,string unitSystem)
- (summary) 
       Returns volume for selected object id in the specified unit system
     
- (since) 7.0
- (returns) double This is some return comment
