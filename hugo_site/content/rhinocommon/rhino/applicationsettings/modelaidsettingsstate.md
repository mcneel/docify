---
title: "ModelAidSettingsState"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Represents a snapshot of .
```cs
public class ModelAidSettingsState
```
## Properties

bool AltPlusArrow
: True mean Alt+arrow is used for nudging.

int ControlPolygonDisplayDensity
: Gets or sets the control polygon display density.

double CtrlNudgeKeyStep
: Gets or sets the Ctrl-key based nudge step amount.

bool DisplayControlPolygon
: Gets or sets the enabled state of Rhino's display control polygon.

bool ExtendToApparentIntersection
: Gets or sets the enabled state of Rhino's extend to apparent intersections.

bool ExtendTrimLines
: Gets or sets the enabled state of Rhino's extend trim lines.

bool GridSnap
: Gets or sets the enabled state of Rhino's grid snap modeling aid.

bool HighlightControlPolygon
: Gets or sets the enabled state of Rhino's highlight dialog modeling aid.

int MousePickboxRadius
: Gets or sets the radius of the mouse pick box in pixels.

double NudgeKeyStep
: Gets or sets the nudge step amount.

int NudgeMode
: 0 = world, 1 = cplane, 2 = view, 3 = uvn, -1 = not set.

bool Ortho
: Gets or sets the enabled state of Rhino's ortho modeling aid.

double OrthoAngle
: Gets or sets the base orthogonal angle.

bool Osnap
: Gets or sets the enabled state of Rhino's object snap modeling aid.

[CursorMode](/rhinocommon/rhino/applicationsettings/cursormode/) OsnapCursorMode
: Gets or sets the OSnap cursor mode.

[OsnapModes](/rhinocommon/rhino/applicationsettings/osnapmodes/) OsnapModes
: Returns or sets Rhino's current object snap mode.
     The mode is a bitwise value based on the OsnapModes enumeration.

int OsnapPickboxRadius
: Enables or disables Rhino's planar modeling aid.

bool Planar
: Gets or sets the enabled state of Rhino's Planar modeling aid.

[PointDisplayMode](/rhinocommon/rhino/applicationsettings/pointdisplaymode/) PointDisplay
: Gets or sets the point display mode.

bool ProjectSnapToCPlane
: Gets or sets the enabled state of Rhino's Project modeling aid.

double ShiftNudgeKeyStep
: Gets or sets the Shift-key based nudge step amount.

bool SnapToLocked
: Gets or sets the locked state of the snap modeling aid.

bool UniversalConstructionPlaneMode
: Gets or sets the locked state of the snap modeling aid.

bool UseHorizontalDialog
: Gets or sets the enabled state of Rhino's use horizontal dialog modeling aid.
