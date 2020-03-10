---
title: "EdgeAnalysisSettings"
draft: false
---

*Namespace: Rhino.ApplicationSettings*

   Contains static methods and properties to modify the visibility of edges in edge-related commands.
   
## Properties
#### static Color ShowEdgeColor
- (summary) Gets or sets a color used to enhance display
    edges in commands like _ShowEdges and _ShowNakedEdges.
- (since) 5.0
#### static int ShowEdges
- (summary) 
     Gets or sets a value referring to the group of edges that are targeted.
     0 = all.1 = naked.2 = non-manifold.
- (since) 5.0
## Methods
#### static EdgeAnalysisSettingsState GetCurrentState()
- (summary) 
     Gets the current settings of the application.
     
- (since) 5.0
- (returns) EdgeAnalysisSettingsState This is some return comment
#### static EdgeAnalysisSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings of the application.
     
- (since) 5.0
- (returns) EdgeAnalysisSettingsState This is some return comment
#### static void RestoreDefaults()
- (summary) 
     Commits the default settings as the current settings.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void UpdateFromState(EdgeAnalysisSettingsState state)
- (summary) 
     Sets all settings to a particular defined joined state.
     
- (since) 5.0
- (returns) void This is some return comment
