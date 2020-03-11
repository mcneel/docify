---
title: "VisualAnalysisMode"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Represents a base class for visual analysis modes.
   This class is abstract.
```cs
public class VisualAnalysisMode
```
## Properties

static Guid RhinoCurvatureColorAnalyisModeId
: Id for Rhino's built-in curvature color analysis mode.  Surface curvature
     is shown using False color mapping.

static Guid RhinoCurvatureGraphAnalysisModeId
: Id for Rhino's built-in curvature graphs analysis mode. Curvature hair
     is shown on curves and surfaces.

static Guid RhinoDraftAngleAnalysisModeId
: Id for Rhino's built-in draft angle analysis mode.  Draft angle is 
     displayed using False colors.

static Guid RhinoEdgeAnalysisModeId
: Id for Rhino's built-in edge analysis mode. Brep and mesh edges are
     shown in a selected color.

static Guid RhinoEdgeContinuityAlalysisModeId
: Id for Rhino's built-in edge continuity analysis mode.
: since 7.0

static Guid RhinoEmapAnalysisModeId
: Id for Rhino's built-in emap analysis mode.  An environment map is
     shown on sufaces and meshes.

static Guid RhinoThicknessAnalysisModeId
: Id for Rhino's built-in thickness analysis mode.

static Guid RhinoZebraStripeAnalysisModeId
: Id for Rhino's built-in zebra stripe analysis mode. Zebra stripes are
     shown on surfaces and meshes.

Guid Id
: Gets the visual analysis mode GUID.
     The Guid is specified with the GuidAttribute
     applied to the class.

string Name
: Gets the name of the analysis mode. It is used by the _What command and the object
     properties details window to describe the object.

bool ShowIsoCurves
: Gets True if this visual analysis mode will show isocuves on shaded surface
     objects.  Often a mode's user interface will provide a way to change this
     setting.
     The default is false.

[AnalysisStyle](/rhinocommon/rhino/display/visualanalysismode/analysisstyle/) Style
: Gets the visual analysis mode style.
## Methods

static bool AdjustAnalysisMeshes(RhinoDoc doc,Guid analysisModeId)
: Interactively adjusts surface analysis meshes of objects using a Rhino built-in analysis mode.
: Returns - True if successful, False otherwise.
: since 7.0

static VisualAnalysisMode Find(Guid id)
: Finds a visual analysis mode by guid.
: Returns - The found visual analysis mode, or None if it was not found, or on error.

static VisualAnalysisMode Find(Type t)
: Finds a visual analysis mode by type.
: Returns - A visual analysis mode on success, or None on error.

static VisualAnalysisMode Register(Type customAnalysisModeType)
: Registers a custom visual analysis mode for use in Rhino.  It is OK to call
     register multiple times for a single custom analysis mode type, since subsequent
     register calls will notice that the type has already been registered.
: Returns - An instance of registered analysis mode on success.

void EnableUserInterface(bool on)
: Turns the analysis mode's user interface on and off. For Rhino's built
     in modes this opens or closes the modeless dialog that controls the
     analysis mode's display settings.

bool ObjectSupportsAnalysisMode(RhinoObject obj)
: Gets a value indicating if this visual analysis mode can be used on a given Rhino object.
: Returns - True if this mode can indeed be used on the object; otherwise false.
