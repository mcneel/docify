---
title: "RenderSettings"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Contains settings used in rendering.
```cs
public class RenderSettings : Runtime.CommonObject
```
## Constructors

RenderSettings()
: Initialize a new instance of the RenderSettings class.

RenderSettings(RenderSettings source)
: Initialize new instance of the RenderSettings class.
: since 6.0
## Properties

Color AmbientLight
: Gets or sets the ambient light color used in rendering.

[AntialiasLevel](/rhinocommon/rhino/antialiaslevel/) AntialiasLevel
: Gets or sets antialias level, used for render quality

Color BackgroundColorBottom
: Gets or sets the background bottom color used in rendering.

Color BackgroundColorTop
: Gets or sets the background top color used in rendering.
     Sets also the background color if a solid background color is set.

[BackgroundStyle](/rhinocommon/rhino/display/backgroundstyle/) BackgroundStyle
: How the viewport's backgroun should be filled.

bool DepthCue
: Gets or sets a value indicating whether to render using depth cues.
     These are clues to help the perception of position and orientation of objects in the image.

[Dithering](/rhinocommon/rhino/render/dithering/) Dithering
: Get the document dithering interface
: since 6.0

bool FlatShade
: Gets or sets a value indicating whether to render using flat shading.

double ImageDpi
: Number of dots/inch (dots=pixels) to use when printing and saving
     bitmaps. The default is 72.0 dots/inch.
: since 5.11

Size ImageSize
: Gets or sets a value indicating the size of the rendering result if
     UseViewportSize is set to false.  If UseViewportSize is set to true,
     then this value is ignored.

UnitSystem ImageUnitSystem
: unit system to use when converting image pixel size and dpi information
     into a print size.  Default = inches
: since 5.11

[LinearWorkflow](/rhinocommon/rhino/render/linearworkflow/) LinearWorkflow
: Get the document linear workflow interface
: since 6.0

string NamedView
: Get or set the given named view
: since 6.1

bool RenderAnnotations
: Gets or sets a value indicating whether to instruct the rendering engine to show annotations,
     such as linear dimensions or angular dimensions.

bool RenderBackfaces
: Gets or sets a value indicating whether to render back faces.

bool RenderCurves
: Gets or sets a value indicating whether to instruct the rendering engine to show curves.

bool RenderIsoparams
: Gets or sets a value indicating whether to instruct the rendering engine to show isocurves.

bool RenderMeshEdges
: Gets or sets a value indicating whether to instruct the rendering engine to show mesh edges.

bool RenderPoints
: Gets or sets a value indicating whether to instruct the rendering engine to show points.

[RenderingSources](/rhinocommon/rhino/render/rendersettings/renderingsources/) RenderSource
: Gets or sets the render source  enumeration.
: since 6.1

bool ScaleBackgroundToFit
: Gets or sets a value indicating whether to scale the wallpaper in the
     background or not. This is meaningful only if the viewport has a wallpaper
     and render settings are set to render Wallpaper into the background.
: since 6.0

int ShadowmapLevel
: 0=none, 1=normal, 2=best.

string Snapshot
: Set os get the given snapshot view
: since 6.1

string SpecificViewport
: Set or get the given specific viewport
: since 6.1

bool TransparentBackground
: Gets or sets whether rendering should be done with transparent background.
: since 6.0

bool UseHiddenLights
: Gets or sets a value indicating whether to render using lights that are on layers that are off.

bool UseViewportSize
: Gets or sets a value indicating whether to use the resolution of the
     viewport being rendered or ImageSize when rendering
