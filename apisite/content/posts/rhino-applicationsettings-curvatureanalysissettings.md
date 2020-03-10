---
title: "Rhino.ApplicationSettings.CurvatureAnalysisSettings"
draft: false
---

# Properties
## static Rhino.Geometry.Interval GaussRange
- (summary) 
     Gets or sets the Gaussian curvature range.
     
- (since) 6.0
## static Rhino.Geometry.Interval MaxRadiusRange
- (summary) 
     Gets or sets the Maximum Radius curvature range.
     
- (since) 6.0
## static Rhino.Geometry.Interval MeanRange
- (summary) 
     Gets or sets the Mean curvature range.
     
- (since) 6.0
## static Rhino.Geometry.Interval MinRadiusRange
- (summary) 
     Gets or sets the Minimum Radius curvature range.
     
- (since) 6.0
## static CurvatureStyle Style
- (summary) 
     Gets or sets the curvature analysis style.
     
- (since) 6.0
# Methods
## static bool CalculateCurvatureAutoRange(IEnumerable<Mesh> meshes,CurvatureAnalysisSettingsState settings)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static CurvatureAnalysisSettingsState GetCurrentState()
- (summary) 
     Gets the current settings of the application.
     
- (since) 6.0
- (returns) CurvatureAnalysisSettingsState This is some return comment
## static CurvatureAnalysisSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings of the application.
     
- (since) 6.0
- (returns) CurvatureAnalysisSettingsState This is some return comment
## static void RestoreDefaults()
- (summary) 
     Commits the default settings as the current settings.
     
- (since) 6.0
- (returns) void This is some return comment
## static void UpdateFromState(CurvatureAnalysisSettingsState state)
- (summary) 
     Sets all settings to a particular defined joined state.
     
- (since) 6.0
- (returns) void This is some return comment
