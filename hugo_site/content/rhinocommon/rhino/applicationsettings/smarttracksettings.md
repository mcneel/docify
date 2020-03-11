---
title: "SmartTrackSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties that target the Smart Track feature behavior.
```cs
public class SmartTrackSettings
```
## Properties

static int ActivationDelayMilliseconds
: Gets or sets the activation delay in milliseconds.

static Color ActivePointColor
: Gets or sets the active point color.

static Color LineColor
: Gets or sets the smart track line color.

static int MaxSmartPoints
: Gets or sets the maximum number of smart points.

static Color PointColor
: Gets or sets the point color.

static bool SmartOrtho
: Gets or sets a value indicating if the 'Smart Ortho' feature is active.
     Orthogonal lines are then drawn automatically.

static bool SmartTangents
: Gets or sets a value indicating if the 'Smart Tangents' feature is active.

static Color TanPerpLineColor
: Gets or sets the tangent and perpendicular line color.

static bool UseDottedLines
: Gets or sets a value indicating if lines are drawn dotted.

static bool UseSmartTrack
: Gets or sets if the Smart Track feature is active.
## Methods

static [SmartTrackSettingsState](/rhinocommon/rhino/applicationsettings/smarttracksettingsstate/) GetCurrentState()
: Gets the current settings.
: Returns - A new Smart Track state with current settings.

static [SmartTrackSettingsState](/rhinocommon/rhino/applicationsettings/smarttracksettingsstate/) GetDefaultState()
: Gets the Smart Track factory settings.
: Returns - A new Smart Track state with factory settings.

static void UpdateFromState(SmartTrackSettingsState state)
: Updates from a particular setting state.
