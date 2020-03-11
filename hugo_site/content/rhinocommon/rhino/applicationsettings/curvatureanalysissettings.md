---
title: "CurvatureAnalysisSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties to modify curvature analysis-related commands.
```cs
public class CurvatureAnalysisSettings
```
## Properties

static [Interval](/rhinocommon/rhino/geometry/interval/) GaussRange
: Gets or sets the Gaussian curvature range.
: since 6.0

static [Interval](/rhinocommon/rhino/geometry/interval/) MaxRadiusRange
: Gets or sets the Maximum Radius curvature range.
: since 6.0

static [Interval](/rhinocommon/rhino/geometry/interval/) MeanRange
: Gets or sets the Mean curvature range.
: since 6.0

static [Interval](/rhinocommon/rhino/geometry/interval/) MinRadiusRange
: Gets or sets the Minimum Radius curvature range.
: since 6.0

static [CurvatureStyle](/rhinocommon/rhino/applicationsettings/curvatureanalysissettings/curvaturestyle/) Style
: Gets or sets the curvature analysis style.
: since 6.0
## Methods

static bool CalculateCurvatureAutoRange(IEnumerable<Mesh> meshes,CurvatureAnalysisSettingsState settings)
: 
: since 6.0

static [CurvatureAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/curvatureanalysissettingsstate/) GetCurrentState()
: Gets the current settings of the application.
: since 6.0

static [CurvatureAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/curvatureanalysissettingsstate/) GetDefaultState()
: Gets the factory settings of the application.
: since 6.0

static void RestoreDefaults()
: Commits the default settings as the current settings.
: since 6.0

static void UpdateFromState(CurvatureAnalysisSettingsState state)
: Sets all settings to a particular defined joined state.
: since 6.0
