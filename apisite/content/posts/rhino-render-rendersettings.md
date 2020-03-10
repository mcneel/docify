---
title: "Rhino.Render.RenderSettings"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Render.RenderSettings()
- (summary)  Initialize a new instance of the RenderSettings class. 
- (since) 5.0
## Rhino.Render.RenderSettings(RenderSettings source)
- (summary)  Initialize new instance of the RenderSettings class. 
- (since) 6.0
# Properties
## System.Drawing.Color AmbientLight
- (summary) 
     Gets or sets the ambient light color used in rendering.
     
- (since) 5.0
## AntialiasLevel AntialiasLevel
- (summary) 
     Gets or sets antialias level, used for render quality
     
- (since) 5.0
## System.Drawing.Color BackgroundColorBottom
- (summary) 
     Gets or sets the background bottom color used in rendering.
     
- (since) 5.0
## System.Drawing.Color BackgroundColorTop
- (summary) 
     Gets or sets the background top color used in rendering.
     Sets also the background color if a solid background color is set.
- (since) 5.0
## Display.BackgroundStyle BackgroundStyle
- (summary) 
     How the viewport's backgroun should be filled.
     
- (since) 5.0
## bool DepthCue
- (summary) 
     Gets or sets a value indicating whether to render using depth cues.
     These are clues to help the perception of position and orientation of objects in the image.
- (since) 5.0
## Dithering Dithering
- (summary) 
     Get the document dithering interface
     
- (since) 6.0
## bool FlatShade
- (summary) 
     Gets or sets a value indicating whether to render using flat shading.
     
- (since) 5.0
## double ImageDpi
- (summary) 
     Number of dots/inch (dots=pixels) to use when printing and saving
     bitmaps. The default is 72.0 dots/inch.
     
- (since) 5.11
## System.Drawing.Size ImageSize
- (summary) 
     Gets or sets a value indicating the size of the rendering result if
     UseViewportSize is set to false.  If UseViewportSize is set to true,
     then this value is ignored.
     
- (since) 5.0
## UnitSystem ImageUnitSystem
- (summary) 
     unit system to use when converting image pixel size and dpi information
     into a print size.  Default = inches
     
- (since) 5.11
## LinearWorkflow LinearWorkflow
- (summary) 
     Get the document linear workflow interface
     
- (since) 6.0
## string NamedView
- (summary) 
     Get or set the given named view
     
- (since) 6.1
## bool RenderAnnotations
- (summary) 
     Gets or sets a value indicating whether to instruct the rendering engine to show annotations,
     such as linear dimensions or angular dimensions.
     
- (since) 5.0
## bool RenderBackfaces
- (summary) 
     Gets or sets a value indicating whether to render back faces.
     
- (since) 5.0
## bool RenderCurves
- (summary) 
     Gets or sets a value indicating whether to instruct the rendering engine to show curves.
     
- (since) 5.0
## bool RenderIsoparams
- (summary) 
     Gets or sets a value indicating whether to instruct the rendering engine to show isocurves.
     
- (since) 5.0
## bool RenderMeshEdges
- (summary) 
     Gets or sets a value indicating whether to instruct the rendering engine to show mesh edges.
     
- (since) 5.0
## bool RenderPoints
- (summary) 
     Gets or sets a value indicating whether to instruct the rendering engine to show points.
     
- (since) 5.0
## RenderingSources RenderSource
- (summary) 
     Gets or sets the render source  enumeration.
     
- (since) 6.1
## bool ScaleBackgroundToFit
- (summary) 
     Gets or sets a value indicating whether to scale the wallpaper in the
     background or not. This is meaningful only if the viewport has a wallpaper
     and render settings are set to render Wallpaper into the background.
     
- (since) 6.0
## int ShadowmapLevel
- (summary) 
     0=none, 1=normal, 2=best.
     
- (since) 5.0
## string Snapshot
- (summary) 
     Set os get the given snapshot view
     
- (since) 6.1
## string SpecificViewport
- (summary) 
     Set or get the given specific viewport
     
- (since) 6.1
## bool TransparentBackground
- (summary) 
     Gets or sets whether rendering should be done with transparent background.
     
- (since) 6.0
## bool UseHiddenLights
- (summary) 
     Gets or sets a value indicating whether to render using lights that are on layers that are off.
     
- (since) 5.0
## bool UseViewportSize
- (summary) 
     Gets or sets a value indicating whether to use the resolution of the
     viewport being rendered or ImageSize when rendering
     
- (since) 5.0
