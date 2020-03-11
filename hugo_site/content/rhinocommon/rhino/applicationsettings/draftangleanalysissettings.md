---
title: "DraftAngleAnalysisSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

```cs
public class DraftAngleAnalysisSettings
```
## Properties

static [Interval](/rhinocommon/rhino/geometry/interval/) AngleRange
: The angle range.
: since 7.0

static bool ShowIsoCurves
: Show isoparametric curves.
: since 7.0

static [Vector3d](/rhinocommon/rhino/geometry/vector3d/) UpDirection
: The up direction.
: since 7.0
## Methods

static [DraftAngleAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/draftangleanalysissettingsstate/) GetCurrentState()
: Gets the current settings of the application.
: since 7.0

static [DraftAngleAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/draftangleanalysissettingsstate/) GetDefaultState()
: Gets the factory settings of the application.
: since 7.0

static void RestoreDefaults()
: Commits the default settings as the current settings.
: since 7.0

static void UpdateFromState(DraftAngleAnalysisSettingsState state)
: Sets all settings to a particular defined joined state.
: since 7.0
