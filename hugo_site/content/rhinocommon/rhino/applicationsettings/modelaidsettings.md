---
title: "ModelAidSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties to modify model aid settings.
```cs
public class ModelAidSettings
```
## Properties

static bool AltPlusArrow
: True means Alt+arrow is used for nudging.

static bool AutoGumballEnabled
: When AutoGumball is on, a gumball automatically appears
     when objects are prepicked.

static int ControlPolygonDisplayDensity
: Gets or sets the control polygon display density.

static double CtrlNudgeKeyStep
: Gets or sets the Ctrl-key based nudge step amount.

static bool DisplayControlPolygon
: Gets or sets the enabled state of Rhino's display control polygon.

static bool ExtendToApparentIntersection
: Gets or sets the enabled state of Rhino's extend to apparent intersections.

static bool ExtendTrimLines
: Gets or sets the enabled state of Rhino's extend trim lines.

static bool GridSnap
: Gets or sets the enabled state of Rhino's grid snap modeling aid.

static bool HighlightControlPolygon
: Gets or sets the enabled state of Rhino's highlight dialog modeling aid.

static int MousePickboxRadius
: radius of mouse pick box in pixels.

static double NudgeKeyStep
: Gets or sets the nudge step amount.

static int NudgeMode
: 0 = world, 1 = cplane, 2 = view, 3 = uvn, -1 = not set.

static bool Ortho
: Gets or sets the enabled state of Rhino's ortho modeling aid.

static double OrthoAngle
: Gets or sets the base orthogonal angle.

static bool Osnap
: Enables or disables Rhino's object snap modeling aid.

static [CursorMode](/rhinocommon/rhino/applicationsettings/cursormode/) OsnapCursorMode
: Gets or sets the OSnap cursor mode.

static [OsnapModes](/rhinocommon/rhino/applicationsettings/osnapmodes/) OsnapModes
: Returns or sets Rhino's current object snap mode.
    The mode is a bitwise value based on the OsnapModes enumeration.

static int OsnapPickboxRadius
: Enables or disables Rhino's planar modeling aid.

static bool Planar
: Gets or sets the enabled state of Rhino's Planar modeling aid.

static [PointDisplayMode](/rhinocommon/rhino/applicationsettings/pointdisplaymode/) PointDisplay
: Gets or sets the point display mode.

static bool ProjectSnapToCPlane
: Gets or sets the enabled state of Rhino's Project modeling aid.

static double ShiftNudgeKeyStep
: Gets or sets the Shift-key based nudge step amount.

static bool SnappyGumballEnabled
: When SnappyGumball is on, a dragging a gumball moves the center point.
     When snappy gumball is off, dragging a gumball moves the mouse down point.

static bool SnapToLocked
: Gets or sets the locked state of the snap modeling aid.

static bool UniversalConstructionPlaneMode
: Gets or sets the locked state of the snap modeling aid.

static bool UseHorizontalDialog
: Gets or sets the enabled state of Rhino's use horizontal dialog modeling aid.
## Methods

static [ModelAidSettingsState](/rhinocommon/rhino/applicationsettings/modelaidsettingsstate/) GetCurrentState()
: Gets the current settings.
: Returns - A new model aid state with current settings.

static [ModelAidSettingsState](/rhinocommon/rhino/applicationsettings/modelaidsettingsstate/) GetDefaultState()
: Gets the factory settings.
: Returns - A new model aid state with factory settings.

static void UpdateFromState(ModelAidSettingsState state)
: Updates from a particular setting state.
