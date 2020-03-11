---
title: "CursorTooltipSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Cursor tooltips place information at the cursor location.
   Note: Turning on cursor tooltips turns off object snap cursors.
```cs
public class CursorTooltipSettings
```
## Properties

static bool AutoSuppress
: Attempts to display only the most useful tooltip.

static Color BackgroundColor
: Tooltip background color.

static bool CommandPromptPane
: Displays the current command prompt.

static bool DistancePane
: Displays the distance from the last picked point.

static [Point](/rhinocommon/unsafenativemethods/point/) Offset
: The x and y distances in pixels from the cursor location to the tooltip.

static bool OsnapPane
: Displays the current object snap selection.

static bool PointPane
: Displays the current construction plane coordinates.

static bool RelativePointPane
: Displays the relative construction plane coordinates and angle from the last picked point.

static Color TextColor
: Tooltip text color.

static bool TooltipsEnabled
: Turns on/off cursor tooltips.
## Methods

static [CursorTooltipSettingsState](/rhinocommon/rhino/applicationsettings/cursortooltipsettingsstate/) GetCurrentState()
: Gets the current settings.
: Returns - A new cursor tooltip state with current settings.

static [CursorTooltipSettingsState](/rhinocommon/rhino/applicationsettings/cursortooltipsettingsstate/) GetDefaultState()
: Gets the cursor tooltip factory settings.
: Returns - A new cursor tooltip state with factory settings.
