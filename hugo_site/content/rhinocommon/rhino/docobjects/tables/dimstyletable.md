---
title: "DimStyleTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class DimStyleTable :
    RhinoDocCommonTable<DimensionStyle>,
     ICollection<DimensionStyle>
```
## Properties

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/)[] BuiltInStyles
: Creates an array of default AnnotationStyle objects
: since 6.0

ModelComponentType ComponentType
: Returns .
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) Current
: Returns an instance of the current .
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) CurrentDimensionStyle
: Do not use. Use the  property.

Guid CurrentId
: 
: since 6.0

int CurrentIndex
: 
: since 6.0
## Methods

int Add(DimensionStyle dimstyle,bool reference)
: Adds a new DimensionStyle to the document.
: Returns - index of new AnnotationStyle.
: since 6.0

int Add(string name)
: Adds a new AnnotationStyle to the document. The new AnnotationStyle will be initialized
     with the current default AnnotationStyle properties.
: Returns - index of new AnnotationStyle.

int Add(string name,bool reference)
: Adds a new AnnotationStyle to the document. The new AnnotationStyle will be initialized
     with the current default AnnotationStyle properties.
: Returns - index of new AnnotationStyle.

bool Delete(DimensionStyle item)
: Removes an annotation style.
: Returns - True if the item was removed; False otherwise.
: since 6.0

bool Delete(int index,bool quiet)
: 
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) Find(Guid styleId,bool ignoreDeleted)
: 
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) Find(string name,bool ignoreDeleted)
: 

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindIndex(int index)
: Retrieves a DimensionStyle object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A DimensionStyle object, or None if none was found.
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindName(string name)
: Finds the DimensionStyle with a given name and retuns it. None is returned if no DimensionStyle is found.
: Returns - The instance, or null.
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindRoot(Guid styleId,bool ignoreDeleted)
: 
: since 6.0

IEnumerator<DimensionStyle> GetEnumerator()
: 

string GetUnusedStyleName()
: Get a unique name for a style that does not already exist in the DimStyle table
: since 6.0

string GetUnusedStyleName(string rootName)
: Get a unique name for a dimension style that does not already exist in the DimStyle table
: since 6.0

[ModifyType](/rhinocommon/rhino/docobjects/tables/modifytype/) Modify(DimensionStyle dimstyle,AnnotationBase annotation)
: 
: since 6.0

bool Modify(DimensionStyle newSettings,Guid dimstyleId,bool quiet)
: Modifies dimension style settings.
: Returns - True if successful. False if Id is not already in table
: since 6.0

bool Modify(DimensionStyle newSettings,int dimstyleIndex,bool quiet)
: Modifies dimension style settings.
: Returns - True if successful. False if dimstyleIndex is out of range
: since 6.0

bool SetCurrent(int index,bool quiet)
: Sets the  property.
: Returns - True if the method achieved its goal; otherwise false.
: since 6.0

bool SetCurrentDimensionStyleIndex(int index,bool quiet)
: Do not use. Use the  method.
: Returns - Do not use.
