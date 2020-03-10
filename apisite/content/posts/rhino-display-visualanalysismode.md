---
title: "Rhino.Display.VisualAnalysisMode"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## static Guid RhinoCurvatureColorAnalyisModeId
- (summary) 
     Id for Rhino's built-in curvature color analysis mode.  Surface curvature
     is shown using False color mapping.
     
- (since) 5.0
## static Guid RhinoCurvatureGraphAnalysisModeId
- (summary) 
     Id for Rhino's built-in curvature graphs analysis mode. Curvature hair
     is shown on curves and surfaces.
     
- (since) 5.0
## static Guid RhinoDraftAngleAnalysisModeId
- (summary) 
     Id for Rhino's built-in draft angle analysis mode.  Draft angle is 
     displayed using False colors.
     
- (since) 5.0
## static Guid RhinoEdgeAnalysisModeId
- (summary) 
     Id for Rhino's built-in edge analysis mode. Brep and mesh edges are
     shown in a selected color.
     
- (since) 5.0
## static Guid RhinoEdgeContinuityAlalysisModeId
- (summary) 
     Id for Rhino's built-in edge continuity analysis mode.
     
- (since) 7.0
## static Guid RhinoEmapAnalysisModeId
- (summary) 
     Id for Rhino's built-in emap analysis mode.  An environment map is
     shown on sufaces and meshes.
     
- (since) 5.0
## static Guid RhinoThicknessAnalysisModeId
- (summary) 
     Id for Rhino's built-in thickness analysis mode.
     
- (since) 5.0
## static Guid RhinoZebraStripeAnalysisModeId
- (summary) 
     Id for Rhino's built-in zebra stripe analysis mode. Zebra stripes are
     shown on surfaces and meshes.
     
- (since) 5.0
## Guid Id
- (summary) 
     Gets the visual analysis mode GUID.
     The Guid is specified with the GuidAttribute
     applied to the class.
     
- (since) 5.0
## string Name
- (summary) 
     Gets the name of the analysis mode. It is used by the _What command and the object
     properties details window to describe the object.
     
- (since) 5.0
## bool ShowIsoCurves
- (summary) 
     Gets True if this visual analysis mode will show isocuves on shaded surface
     objects.  Often a mode's user interface will provide a way to change this
     setting.
     The default is false.
- (since) 5.0
## AnalysisStyle Style
- (summary) 
     Gets the visual analysis mode style.
     
- (since) 5.0
# Methods
## static bool AdjustAnalysisMeshes(RhinoDoc doc,Guid analysisModeId)
- (summary) 
     Interactively adjusts surface analysis meshes of objects using a Rhino built-in analysis mode.
     
- (since) 7.0
- (returns) bool This is some return comment
## static VisualAnalysisMode Find(Guid id)
- (summary) 
     Finds a visual analysis mode by guid.
     
- (since) 5.0
- (returns) VisualAnalysisMode This is some return comment
## static VisualAnalysisMode Find(Type t)
- (summary) 
     Finds a visual analysis mode by type.
     
- (since) 5.0
- (returns) VisualAnalysisMode This is some return comment
## static VisualAnalysisMode Register(Type customAnalysisModeType)
- (summary) 
     Registers a custom visual analysis mode for use in Rhino.  It is OK to call
     register multiple times for a single custom analysis mode type, since subsequent
     register calls will notice that the type has already been registered.
     
- (since) 5.0
- (returns) VisualAnalysisMode This is some return comment
## void EnableUserInterface(bool on)
- (summary) 
     Turns the analysis mode's user interface on and off. For Rhino's built
     in modes this opens or closes the modeless dialog that controls the
     analysis mode's display settings.
     
- (since) 5.0
- (returns) void This is some return comment
## bool ObjectSupportsAnalysisMode(RhinoObject obj)
- (summary) 
     Gets a value indicating if this visual analysis mode can be used on a given Rhino object.
     
- (since) 5.0
- (returns) bool This is some return comment
