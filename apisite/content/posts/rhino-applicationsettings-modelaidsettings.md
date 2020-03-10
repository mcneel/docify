---
title: "Rhino.ApplicationSettings.ModelAidSettings"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## static bool AltPlusArrow
- (summary) True means Alt+arrow is used for nudging.
- (since) 5.0
## static bool AutoGumballEnabled
- (summary) 
     When AutoGumball is on, a gumball automatically appears
     when objects are prepicked.
     
- (since) 5.0
## static int ControlPolygonDisplayDensity
- (summary) Gets or sets the control polygon display density.
- (since) 5.0
## static double CtrlNudgeKeyStep
- (summary) Gets or sets the Ctrl-key based nudge step amount.
- (since) 5.0
## static bool DisplayControlPolygon
- (summary) Gets or sets the enabled state of Rhino's display control polygon.
- (since) 5.0
## static bool ExtendToApparentIntersection
- (summary) Gets or sets the enabled state of Rhino's extend to apparent intersections.
- (since) 5.0
## static bool ExtendTrimLines
- (summary) Gets or sets the enabled state of Rhino's extend trim lines.
- (since) 5.0
## static bool GridSnap
- (summary) Gets or sets the enabled state of Rhino's grid snap modeling aid.
- (since) 5.0
## static bool HighlightControlPolygon
- (summary) Gets or sets the enabled state of Rhino's highlight dialog modeling aid.
- (since) 5.0
## static int MousePickboxRadius
- (summary) radius of mouse pick box in pixels.
- (since) 5.0
## static double NudgeKeyStep
- (summary) Gets or sets the nudge step amount.
- (since) 5.0
## static int NudgeMode
- (summary) 0 = world, 1 = cplane, 2 = view, 3 = uvn, -1 = not set.
- (since) 5.0
## static bool Ortho
- (summary) Gets or sets the enabled state of Rhino's ortho modeling aid.
- (since) 5.0
## static double OrthoAngle
- (summary) Gets or sets the base orthogonal angle.
- (since) 5.0
## static bool Osnap
- (summary) Enables or disables Rhino's object snap modeling aid.
- (since) 5.0
## static CursorMode OsnapCursorMode
- (summary) Gets or sets the OSnap cursor mode.
- (since) 5.0
## static OsnapModes OsnapModes
- (summary) 
    Returns or sets Rhino's current object snap mode.
    The mode is a bitwise value based on the OsnapModes enumeration.
    
- (since) 5.0
## static int OsnapPickboxRadius
- (summary) Enables or disables Rhino's planar modeling aid.
- (since) 5.0
## static bool Planar
- (summary) Gets or sets the enabled state of Rhino's Planar modeling aid.
- (since) 5.0
## static PointDisplayMode PointDisplay
- (summary) Gets or sets the point display mode.
- (since) 5.0
## static bool ProjectSnapToCPlane
- (summary) Gets or sets the enabled state of Rhino's Project modeling aid.
- (since) 5.0
## static double ShiftNudgeKeyStep
- (summary) Gets or sets the Shift-key based nudge step amount.
- (since) 5.0
## static bool SnappyGumballEnabled
- (summary) 
     When SnappyGumball is on, a dragging a gumball moves the center point.
     When snappy gumball is off, dragging a gumball moves the mouse down point.
     
- (since) 5.0
## static bool SnapToLocked
- (summary) Gets or sets the locked state of the snap modeling aid.
- (since) 5.0
## static bool UniversalConstructionPlaneMode
- (summary) Gets or sets the locked state of the snap modeling aid.
- (since) 5.0
## static bool UseHorizontalDialog
- (summary) Gets or sets the enabled state of Rhino's use horizontal dialog modeling aid.
- (since) 5.0
# Methods
## static ModelAidSettingsState GetCurrentState()
- (summary) 
     Gets the current settings.
     
- (since) 5.0
- (returns) ModelAidSettingsState This is some return comment
## static ModelAidSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings.
     
- (since) 5.0
- (returns) ModelAidSettingsState This is some return comment
## static void UpdateFromState(ModelAidSettingsState state)
- (summary) 
     Updates from a particular setting state.
     
- (since) 5.0
- (returns) void This is some return comment
