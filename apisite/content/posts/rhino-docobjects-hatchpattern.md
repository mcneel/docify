---
title: "Rhino.DocObjects.HatchPattern"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.DocObjects.HatchPattern()
- (summary) 
- (since) 5.0
# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## string Description
- (summary) 
- (since) 5.0
## HatchPatternFillType FillType
- (summary) 
- (since) 5.0
## int Index
- (summary) 
     Index in the hatch pattern table for this pattern. -1 if not in the table.
     
- (since) 5.0
## bool IsDeleted
- (summary) 
     Deleted hatch patterns are kept in the runtime hatch pattern table so that undo
     will work with hatch patterns.  Call IsDeleted to determine to determine if
     a hatch pattern is deleted.
     
- (since) 5.0
## bool IsReference
- (summary) 
     Rhino allows multiple files to be viewed simultaneously. Hatch patterns in the
     document are "normal" or "reference". Reference hatch patterns are not saved.
     
- (since) 5.0
# Methods
## static HatchPattern[] ReadFromFile(string filename,bool quiet)
- (summary) 
     Reads hatch pattern definitions from a file.
     
- (since) 5.0
- (returns) HatchPattern[] This is some return comment
## Rhino.Geometry.Line[] CreatePreviewGeometry(int width,int height,double angle)
- (summary) 
     Creates preview line segments of the hatch pattern.
     
- (since) 6.8
- (returns) Rhino.Geometry.Line[] This is some return comment
