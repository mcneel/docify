---
title: "ViewSettingsState"
draft: false
---

*Namespace: Rhino.ApplicationSettings*

   Represents a snapshot of .
   
## Properties
#### bool AlwaysPanParallelViews
- (summary) Gets or sets the 'always pan parallel views' value.
     If the view is not looking straight at the construction plane, then
     sets parallel viewports so they will not rotate.
- (since) 5.0
#### bool DefinedViewSetCPlane
- (summary) 
     Gets or sets the 'named views set CPlane' value.
     When true, restoring a named view causes the construction plane saved with that view to also restore.
- (since) 5.0
#### bool DefinedViewSetProjection
- (summary) 
     Gets or sets the 'named views set projection' value.
     When true, restoring a named view causes the viewport projection saved with the view to also restore.
- (since) 5.0
#### bool LinkedViewports
- (summary) 
     Gets or sets the 'linked views' activated setting.
     True enables real-time view synchronization.
     When a standard view is manipulated, the camera lens length of all parallel projection
     viewports are set to match the current viewport.
- (since) 5.0
#### bool PanReverseKeyboardAction
- (summary) Gets or sets if panning with the keyboard is reversed.
     false, then Rhino pans the camera in the direction of the arrow key you press.
     true, then Rhino pans the scene instead.
- (since) 5.0
#### double PanScreenFraction
- (summary) Gets or sets the faction used as multiplier to pan the screen.
- (since) 5.0
#### int RotateCircleIncrement
- (summary) 
     Gets or sets the rotation increment.
     When the user rotates a view with the keyboard, Rhino rotates the view in steps.
     The usual step is 1/60th of a circle, which equals six degrees.
- (since) 5.0
#### bool RotateReverseKeyboard
- (summary) 
     Gets or sets the rotation direction.
     If true, then Rhino rotates the camera around the scene, otherwise, rotates the scene itself.
- (since) 5.0
#### bool RotateToView
- (summary) 
     Gets or sets the rotation reference.
     If true, then the views rotates relative to the view axes; false, than relative to the world x, y, and z axes.
- (since) 5.0
#### bool SingleClickMaximize
- (summary) 
     Gets or sets the 'single-click maximize' value.
     When true, maximizing a viewport needs a single click on the viewport title rather than a double-click.
- (since) 5.0
#### double ZoomExtentsParallelViewBorder
- (summary) 
     Border amount to apply to parallel viewport during zoom extents
     
- (since) 6.3
#### double ZoomExtentsPerspectiveViewBorder
- (summary) 
     Border amount to apply to perspective viewport during zoom extents
     
- (since) 6.3
#### double ZoomScale
- (summary) 
     Gets or sets the step size for zooming with a wheeled mouse or the Page Up and Page Down keys.
     
- (since) 5.0
