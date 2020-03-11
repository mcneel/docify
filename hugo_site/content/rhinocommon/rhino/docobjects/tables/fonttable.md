---
title: "FontTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Font tables store the list of fonts in a Rhino document.
   The FontTable is now just a wrapper around the DimStyles table.
```cs
public class FontTable : IEnumerable<Font>, Collections.IRhinoTable<Font>
```
## Properties

int Count
: Number of fonts in the table.

int CurrentIndex
: At all times, there is a "current" font.  Unless otherwise specified,
     new dimension objects are assigned to the current font. The current
     font is never deleted.
     Returns: Zero based font index of the current font.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
## Methods

int FindOrCreate(string face,bool bold,bool italic)
: Get a DimensionStyle with the specified characteristics
     the settings other than face, bold and italic are copied from the current style

int FindOrCreate(string face,bool bold,bool italic,DimensionStyle template_style)
: Get a DimensionStyle with the specified characteristics
: since 6.0

IEnumerator<Font> GetEnumerator()
: 
