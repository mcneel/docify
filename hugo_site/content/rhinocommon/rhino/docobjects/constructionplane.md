---
title: "ConstructionPlane"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents a contruction plane inside the document.
   Use Rhino.DocObjects.Tables.NamedConstructionPlaneTable
   methods and indexers to add and access a .
```cs
public class ConstructionPlane
```
## Constructors

ConstructionPlane()
: Initializes a new instance of .
## Properties

bool DepthBuffered
: Gets or sets whether the grid is drawn on top of geometry.
     false=grid is always drawn behind 3d geometrytrue=grid is drawn at its depth as a 3d plane and grid lines obscure things behind the grid.

int GridLineCount
: Gets or sets the total amount of grid lines in each direction.

double GridSpacing
: Gets or sets the distance between grid lines.

Color GridXColor
: Gets or sets the color of the grid X-axis mark.

Color GridYColor
: Gets or sets the color of the grid Y-axis mark.

Color GridZColor
: Gets or sets the color of the grid Z-axis mark.

string Name
: Gets or sets the name of the construction plane.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the geometric plane to use for construction.

bool ShowAxes
: Gets or sets whether the axes of the grid shuld be visible.

bool ShowGrid
: Gets or sets whether the grid itself should be visible.

bool ShowZAxis
: Gets or sets whether the Z axis of the grid shuld be visible.
: since 6.0

double SnapSpacing
: when "grid snap" is enabled, the distance between snap points.
     Typically this is the same distance as grid spacing.

Color ThickLineColor
: Gets or sets the color of the thicker, wider line.

int ThickLineFrequency
: Gets or sets the recurrence of a wider line on the grid.
     0: No lines are thick, all are drawn thin.1: All lines are thick.2: Every other line is thick.3: One line in three lines is thick (and two are thin).4: ...

Color ThinLineColor
: Gets or sets the color of the thinner, less prominent line.
