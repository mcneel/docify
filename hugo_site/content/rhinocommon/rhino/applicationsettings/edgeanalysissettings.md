---
title: "EdgeAnalysisSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties to modify the visibility of edges in edge-related commands.
```cs
public class EdgeAnalysisSettings
```
## Properties

static Color ShowEdgeColor
: Gets or sets a color used to enhance display
    edges in commands like _ShowEdges and _ShowNakedEdges.

static int ShowEdges
: Gets or sets a value referring to the group of edges that are targeted.
     0 = all.1 = naked.2 = non-manifold.
## Methods

static [EdgeAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/edgeanalysissettingsstate/) GetCurrentState()
: Gets the current settings of the application.

static [EdgeAnalysisSettingsState](/rhinocommon/rhino/applicationsettings/edgeanalysissettingsstate/) GetDefaultState()
: Gets the factory settings of the application.

static void RestoreDefaults()
: Commits the default settings as the current settings.

static void UpdateFromState(EdgeAnalysisSettingsState state)
: Sets all settings to a particular defined joined state.
