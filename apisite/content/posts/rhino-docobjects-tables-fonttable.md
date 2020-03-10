---
title: "Rhino.DocObjects.Tables.FontTable"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## int Count
- (summary) Number of fonts in the table.
- (since) 5.0
## int CurrentIndex
- (summary) 
     At all times, there is a "current" font.  Unless otherwise specified,
     new dimension objects are assigned to the current font. The current
     font is never deleted.
     Returns: Zero based font index of the current font.
     
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this table.
- (since) 5.0
# Methods
## int FindOrCreate(string face,bool bold,bool italic)
- (summary) 
     Get a DimensionStyle with the specified characteristics
     the settings other than face, bold and italic are copied from the current style
     
- (since) 5.0
- (returns) int This is some return comment
## int FindOrCreate(string face,bool bold,bool italic,DimensionStyle template_style)
- (summary) 
     Get a DimensionStyle with the specified characteristics
     
- (since) 6.0
- (returns) int This is some return comment
## IEnumerator<Font> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<Font> This is some return comment
