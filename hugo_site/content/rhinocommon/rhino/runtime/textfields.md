---
title: "TextFields"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

This Class Processes Text Field Functions
```cs
public class TextFields
```
## Methods

static double Area(string id)
: Returns the area value for a selected object id
: since 7.0

static double Area(string id,string unitSystem)
: Returns the area value for a selected object id in a specified unit system
: since 7.0

static string BlockAttributeText(string key,string prompt,string defaultValue)
: User text associated with a block
: since 7.0

static int BlockInstanceCount(string instanceDefinitionNameOrId)
: Returns the number of block instances found in the document
       with the specified block definition name or the instance reference id.
: since 7.0

static string BlockInstanceName(string blockId)
: Returns the block definition name of a block instance
: since 7.0

static double CurveLength(string id)
: Get length of a curve given a string id
: since 7.0

static double CurveLength(string id,string unitSystem)
: Get length of a curve given a string id in a specified unit system.
       UnitSystem enum as string
: since 7.0

static string Date()
: Current date
: since 7.0

static string Date(string dateFormat)
: Current date in a specified format
: since 7.0

static string Date(string dateFormat,string languageId)
: Current Date in a specific format and language
: since 7.0

static string DateModified()
: Date the document was last edited
: since 7.0

static string DateModified(string dateFormat)
: Date the document was last edited in a specified format
: since 7.0

static string DateModified(string dateFormat,string languageId)
: Date the document was last edited in a specific format and language
: since 7.0

static string DetailScale(string detailId,string scaleFormat)
: Returns a detail views scale
: since 7.0

static string DocumentText(string key)
: Return document user string for a given key
: since 7.0

static string FileName()
: Return full path to the document
: since 7.0

static string FileName(string options)
: Return path to the document
: since 7.0

static [InstanceAttributeField](/rhinocommon/rhino/runtime/textfields/instanceattributefield/)[] GetInstanceAttributeFields(InstanceDefinition idef)
: 
: since 7.0

static [InstanceAttributeField](/rhinocommon/rhino/runtime/textfields/instanceattributefield/)[] GetInstanceAttributeFields(string str)
: Gets an array of block attribute definitions associated with a
     TextObject.
: Returns - Will return a empty array if text is None or there is no attributes
     otherwise; returns a list of one or more attribute definitions embedded
     in the text string.
: since 7.0

static [InstanceAttributeField](/rhinocommon/rhino/runtime/textfields/instanceattributefield/)[] GetInstanceAttributeFields(TextObject text)
: Gets an array of block attribute definitions associated with a
     TextObject.
: Returns - Will return a empty array if text is None or there is no attributes
     otherwise; returns a list of one or more attribute definitions embedded
     in the text string.
: since 7.0

static string LayerName(string layerId)
: Returns the name of a layer based on the layers guid
: since 7.0

static string LayoutUserText(string key)
: Returns a value from the active layouts user text strings for the specified key.
: since 7.0

static string LayoutUserText(string layoutId,string key)
: Returns user text value from a layout id Key
: since 7.0

static string ModelUnits()
: 
: since 7.0

static string Notes()
: Notes for a RhinoDoc
: since 7.0

static int NumPages()
: Number of layout pages in a document
: since 7.0

static string ObjectLayer(string id)
: Return an object's layer name
: since 7.0

static string ObjectName(string id)
: Return an object's name
: since 7.0

static double PageHeight()
: Return the current layout page height in the layout units
: since 7.0

static string PageName()
: Return the current layout page name
: since 7.0

static string PageName(string id)
: Return the page name for the specified View ID
: since 7.0

static int PageNumber()
: Returns the current layouts page number
: since 7.0

static double PageWidth()
: Return the current layout page width in the layout units
: since 7.0

static string PaperName()
: Returns the layouts selected paper name
       example Letter / A4 / A6
: since 7.0

static string PointCoordinate(string pointId,string axis)
: returns the location of a 3d point
: since 7.0

static string UserText(string id,string key)
: User text associated with an object, block or layout
: since 7.0

static string UserText(string id,string key,string prompt)
: User text associated with an object, block or layout
: since 7.0

static string UserText(string id,string key,string prompt,string defaultValue)
: User text associated with an object, block or layout
: since 7.0

static double Volume(string id)
: Returns the volume for the selected object id
: since 7.0

static double Volume(string id,string unitSystem)
: Returns volume for selected object id in the specified unit system
: since 7.0
