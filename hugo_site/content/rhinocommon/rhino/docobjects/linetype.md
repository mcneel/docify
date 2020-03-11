---
title: "Linetype"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
[Serializable]
public class Linetype : ModelComponent
```
## Constructors

Linetype()
: 
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

bool IsDeleted
: Gets a value indicating whether this linetype has been deleted and is 
     currently in the Undo buffer.

bool IsModified
: True if this linetype has been modified by LinetypeTable.ModifyLinetype()
     and the modifications can be undone.

bool IsReference
: Gets a value indicting whether this linetype is a referenced linetype. 
     Referenced linetypes are part of referenced documents.

int LinetypeIndex
: The index of this linetype.

string Name
: The name of this linetype.

double PatternLength
: Total length of one repeat of the pattern.

int SegmentCount
: Number of segments in the pattern.
## Methods

static Linetype[] ReadFromFile(string path)
: Reads linetypes from either a Rhino .3dm file or an AutoCAD .lin file.
: Returns - An array of linetypes if successful, otherwise an empty array.
: since 6.6

int AppendSegment(double length,bool isSolid)
: Adds a segment to the pattern.
: Returns - Index of the added segment.

bool CommitChanges()
: 

void Default()
: Set linetype to default settings.

void GetSegment(int index,double length,bool isSolid)
: Gets the segment information at a index.

bool RemoveSegment(int index)
: Removes a segment in the linetype.
: Returns - True if the segment index was removed.

bool SetSegment(int index,double length,bool isSolid)
: Sets the length and type of the segment at index.
: Returns - True if the operation was successful; otherwise false.

bool SetSegments(IEnumerable<double> segments)
: Set all segments.
: Returns - True if the segments were replaced
: since 6.8
