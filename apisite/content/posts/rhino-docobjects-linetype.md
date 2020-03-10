---
title: "Rhino.DocObjects.Linetype"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.DocObjects.Linetype()
- (summary) 
- (since) 5.0
# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## bool IsDeleted
- (summary) 
     Gets a value indicating whether this linetype has been deleted and is 
     currently in the Undo buffer.
     
- (since) 5.0
## bool IsModified
- (summary) 
     True if this linetype has been modified by LinetypeTable.ModifyLinetype()
     and the modifications can be undone.
     
- (since) 5.0
## bool IsReference
- (summary) 
     Gets a value indicting whether this linetype is a referenced linetype. 
     Referenced linetypes are part of referenced documents.
     
- (since) 5.0
## int LinetypeIndex
- (summary) The index of this linetype.
- (since) 5.0
## string Name
- (summary) The name of this linetype.
- (since) 5.0
## double PatternLength
- (summary) Total length of one repeat of the pattern.
- (since) 5.0
## int SegmentCount
- (summary) Number of segments in the pattern.
- (since) 5.0
# Methods
## static Linetype[] ReadFromFile(string path)
- (summary) 
     Reads linetypes from either a Rhino .3dm file or an AutoCAD .lin file.
     
- (since) 6.6
- (returns) Linetype[] This is some return comment
## int AppendSegment(double length,bool isSolid)
- (summary) Adds a segment to the pattern.
- (since) 5.0
- (returns) int This is some return comment
## bool CommitChanges()
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void Default()
- (summary) 
     Set linetype to default settings.
     
- (since) 5.0
- (returns) void This is some return comment
## void GetSegment(int index,double length,bool isSolid)
- (summary) 
     Gets the segment information at a index.
     
- (since) 5.0
- (returns) void This is some return comment
## bool RemoveSegment(int index)
- (summary) Removes a segment in the linetype.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetSegment(int index,double length,bool isSolid)
- (summary) Sets the length and type of the segment at index.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetSegments(IEnumerable<double> segments)
- (summary) Set all segments.
- (since) 6.8
- (returns) bool This is some return comment
