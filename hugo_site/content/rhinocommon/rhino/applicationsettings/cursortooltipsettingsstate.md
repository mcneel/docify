---
title: "CursorTooltipSettingsState"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Represents a snapshot of .
```cs
public class CursorTooltipSettingsState
```
## Properties

bool AutoSuppress
: Attempts to display only the most useful tooltip.

Color BackgroundColor
: Tooltip background color.

bool CommandPromptPane
: Displays the current command prompt.

bool DistancePane
: Displays the distance from the last picked point.

[Point](/rhinocommon/unsafenativemethods/point/) Offset
: The x and y distances in pixels from the cursor location to the tooltip.

bool OsnapPane
: Displays the current object snap selection.

bool PointPane
: Displays the current construction plane coordinates.

bool RelativePointPane
: Displays the relative construction plane coordinates and angle from the last picked point.

Color TextColor
: Tooltip text color.

bool TooltipsEnabled
: Turns on/off cursor tooltips.
