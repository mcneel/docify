---
title: "HatchPattern"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
[Serializable]
public class HatchPattern : ModelComponent
```
## Constructors

HatchPattern()
: 
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

string Description
: 

[HatchPatternFillType](/rhinocommon/rhino/docobjects/hatchpatternfilltype/) FillType
: 

int Index
: Index in the hatch pattern table for this pattern. -1 if not in the table.

bool IsDeleted
: Deleted hatch patterns are kept in the runtime hatch pattern table so that undo
     will work with hatch patterns.  Call IsDeleted to determine to determine if
     a hatch pattern is deleted.

bool IsReference
: Rhino allows multiple files to be viewed simultaneously. Hatch patterns in the
     document are "normal" or "reference". Reference hatch patterns are not saved.
## Methods

static HatchPattern[] ReadFromFile(string filename,bool quiet)
: Reads hatch pattern definitions from a file.
: Returns - An array of hatch patterns. This can be null, but not empty.

Rhino.Geometry.Line[] CreatePreviewGeometry(int width,int height,double angle)
: Creates preview line segments of the hatch pattern.
: Returns - The preview line segments if successful, an empty array on failure.
: since 6.8
