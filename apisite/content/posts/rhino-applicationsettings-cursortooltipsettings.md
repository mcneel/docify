---
title: "CursorTooltipSettings"
draft: false
---

*Namespace: Rhino.ApplicationSettings*

   Cursor tooltips place information at the cursor location.
   Note: Turning on cursor tooltips turns off object snap cursors.
   
## Properties
#### static bool AutoSuppress
- (summary) 
     Attempts to display only the most useful tooltip.
     
- (since) 5.0
#### static System.Drawing.Color BackgroundColor
- (summary) Tooltip background color.
- (since) 5.0
#### static bool CommandPromptPane
- (summary) 
     Displays the current command prompt.
     
- (since) 5.0
#### static bool DistancePane
- (summary) 
     Displays the distance from the last picked point.
     
- (since) 5.0
#### static System.Drawing.Point Offset
- (summary) 
     The x and y distances in pixels from the cursor location to the tooltip.
     
- (since) 5.0
#### static bool OsnapPane
- (summary) 
     Displays the current object snap selection.
     
- (since) 5.0
#### static bool PointPane
- (summary) 
     Displays the current construction plane coordinates.
     
- (since) 5.0
#### static bool RelativePointPane
- (summary) 
     Displays the relative construction plane coordinates and angle from the last picked point.
     
- (since) 5.0
#### static System.Drawing.Color TextColor
- (summary) Tooltip text color.
- (since) 5.0
#### static bool TooltipsEnabled
- (summary) 
     Turns on/off cursor tooltips.
     
- (since) 5.0
## Methods
#### static CursorTooltipSettingsState GetCurrentState()
- (summary) 
     Gets the current settings.
     
- (since) 5.0
- (returns) CursorTooltipSettingsState This is some return comment
#### static CursorTooltipSettingsState GetDefaultState()
- (summary) 
     Gets the cursor tooltip factory settings.
     
- (since) 5.0
- (returns) CursorTooltipSettingsState This is some return comment
