---
title: "Rhino.DocObjects.ConstructionPlane"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.DocObjects.ConstructionPlane()
- (summary) 
     Initializes a new instance of .
     
- (since) 5.0
# Properties
## bool DepthBuffered
- (summary) 
     Gets or sets whether the grid is drawn on top of geometry.
     false=grid is always drawn behind 3d geometrytrue=grid is drawn at its depth as a 3d plane and grid lines obscure things behind the grid.
- (since) 5.0
## int GridLineCount
- (summary) 
     Gets or sets the total amount of grid lines in each direction.
     
- (since) 5.0
## double GridSpacing
- (summary) 
     Gets or sets the distance between grid lines.
     
- (since) 5.0
## System.Drawing.Color GridXColor
- (summary) 
     Gets or sets the color of the grid X-axis mark.
     
- (since) 5.0
## System.Drawing.Color GridYColor
- (summary) 
     Gets or sets the color of the grid Y-axis mark.
     
- (since) 5.0
## System.Drawing.Color GridZColor
- (summary) 
     Gets or sets the color of the grid Z-axis mark.
     
- (since) 5.0
## string Name
- (summary) 
     Gets or sets the name of the construction plane.
     
- (since) 5.0
## Plane Plane
- (summary) 
     Gets or sets the geometric plane to use for construction.
     
- (since) 5.0
## bool ShowAxes
- (summary) 
     Gets or sets whether the axes of the grid shuld be visible.
     
- (since) 5.0
## bool ShowGrid
- (summary) 
     Gets or sets whether the grid itself should be visible. 
     
- (since) 5.0
## bool ShowZAxis
- (summary) 
     Gets or sets whether the Z axis of the grid shuld be visible.
     
- (since) 6.0
## double SnapSpacing
- (summary) 
     when "grid snap" is enabled, the distance between snap points.
     Typically this is the same distance as grid spacing.
     
- (since) 5.0
## System.Drawing.Color ThickLineColor
- (summary) 
     Gets or sets the color of the thicker, wider line.
     
- (since) 5.0
## int ThickLineFrequency
- (summary) 
     Gets or sets the recurrence of a wider line on the grid.
     0: No lines are thick, all are drawn thin.1: All lines are thick.2: Every other line is thick.3: One line in three lines is thick (and two are thin).4: ...
- (since) 5.0
## System.Drawing.Color ThinLineColor
- (summary) 
     Gets or sets the color of the thinner, less prominent line.
     
- (since) 5.0
