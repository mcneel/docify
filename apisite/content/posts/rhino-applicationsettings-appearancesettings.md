---
title: "Rhino.ApplicationSettings.AppearanceSettings"
draft: false
---

# Properties
## static Color CommandPromptBackgroundColor
- (summary) 
     Gets or sets the color of the command prompt background.
     
- (since) 5.0
## static Color CommandPromptHypertextColor
- (summary) 
     Gets or sets the color of the command prompt hypertext.
     
- (since) 5.0
## static CommandPromptPosition CommandPromptPosition
- (summary) 
     Gets or sets the command prompt position.
     
- (since) 5.0
## static Color CommandPromptTextColor
- (summary) 
     Gets or sets the color of the command prompt text.
     
- (since) 5.0
## static Color CrosshairColor
- (summary) 
     Gets or sets the color of the crosshair icon.
     
- (since) 5.0
## static Color CurrentLayerBackgroundColor
- (summary) 
     Gets or sets the color used by the layer manager dialog as the background color for the current layer.
    
- (since) 5.0
## static string DefaultFontFaceName
- (summary) 
     Gets or sets the default font face name used in Rhino.
     
- (since) 5.0
## static Color DefaultLayerColor
- (summary) 
     Gets or sets the default layer color.
     
- (since) 5.0
## static Color DefaultObjectColor
- (summary) 
     Gets or sets the default color for new objects.
     
- (since) 5.0
## static bool EchoCommandsToHistoryWindow
- (summary) Gets or sets a value that determines if command names are written to the history window.
- (since) 5.0
## static bool EchoPromptsToHistoryWindow
- (summary) Gets or sets a value that determines if prompt messages are written to the history window.
- (since) 5.0
## static Color EditCandidateColor
- (summary) 
     Gets or sets the color of objects that are eligible to be edited.
    
- (since) 6.0
## static Color FeedbackColor
- (summary) 
     Gets or sets the feedback color.
     
- (since) 5.0
## static Color FrameBackgroundColor
- (summary) 
     Gets or sets the background color of the frame.
     
- (since) 5.0
## static Color GridThickLineColor
- (summary) 
     Gets or sets the color of the thick line of the grid.
     
- (since) 5.0
## static Color GridThinLineColor
- (summary) 
     Gets or sets the color of the thin line of the grid.
     
- (since) 5.0
## static Color GridXAxisLineColor
- (summary) 
     Gets or sets the color of the X axis of the grid.
     
- (since) 5.0
## static Color GridYAxisLineColor
- (summary) 
     Gets or sets the color of the Y axis of the grid.
     
- (since) 5.0
## static Color GridZAxisLineColor
- (summary) 
     Gets or sets the color of the Z axis of the grid.
     
- (since) 5.0
## static int LanguageIdentifier
- (summary) Gets or sets the language identifier.
- (since) 5.0
## static Color LockedObjectColor
- (summary) color used to draw locked objects.
- (since) 5.0
## static bool MenuVisible
- (summary) Gets or sets a value that determines if the File menu is visible.
- (since) 5.0
## static Color PageviewPaperColor
- (summary) 
     Gets or sets the paper background. A rectangle is drawn into the background
     of page views to represent the printed area. The alpha portion of the color
     is used to draw the paper blended into the background
    
- (since) 5.0
## static int PreviousLanguageIdentifier
- (summary) 
     Gets or sets the previous language identifier.
     
- (since) 5.0
## static Color SelectedObjectColor
- (summary) 
    The color used to draw selected objects.
    The default is yellow, but this can be customized by the user.
    
- (since) 5.0
## static bool ShowCrosshairs
- (summary) Gets or sets a value that determines if cross hairs are visible.
- (since) 5.0
## static bool ShowFullPathInTitleBar
- (summary) Gets or sets a value that determines if the full path of the document is shown in the Rhino title bar.
- (since) 5.0
## static bool ShowSideBar
- (summary) 
     Should the side bar be displayed
     
- (since) 6.0
## static Color TrackingColor
- (summary) 
     Gets or sets the tracking color.
     
- (since) 5.0
## static bool UsePaintColors
- (summary) 
     Gets or sets a value indicating if logical paint colors should be used.
     
- (since) 5.0
## static Color ViewportBackgroundColor
- (summary) 
     Gets or sets the viewport background color.
     
- (since) 5.0
## static Color WorldCoordIconXAxisColor
- (summary) 
     Gets or sets the color of the world coordinate X axis.
     
- (since) 5.0
## static Color WorldCoordIconYAxisColor
- (summary) 
     Gets or sets the color of the world coordinate Y axis.
     
- (since) 5.0
## static Color WorldCoordIconZAxisColor
- (summary) 
     Gets or sets the color of the world coordinate Z axis.
     
- (since) 5.0
# Methods
## static AppearanceSettingsState GetCurrentState()
- (summary) 
     Gets the current settings of the application.
     
- (since) 5.0
- (returns) AppearanceSettingsState This is some return comment
## static AppearanceSettingsState GetDefaultState()
- (summary) 
     Gets the factory settings of the application.
     
- (since) 5.0
- (returns) AppearanceSettingsState This is some return comment
## static Color GetPaintColor(PaintColor whichColor)
- (summary) 
     Gets the .Net library color that is currently associated with a paint color.
     
- (since) 5.0
- (returns) Color This is some return comment
## static Color GetWidgetColor(WidgetColor whichColor)
- (summary) 
     Gets the .Net library color that is currently associated with a widget color.
     
- (since) 6.0
- (returns) Color This is some return comment
## static bool InitialMainWindowPosition(Rectangle bounds)
- (summary) 
     Location where the Main Rhino window attempts to show when the application is first
     started.
     
- (since) 6.0
- (returns) bool This is some return comment
## static void RestoreDefaults()
- (summary) 
     Commits the default settings as the current settings.
     
- (since) 5.0
- (returns) void This is some return comment
## static void SetPaintColor(PaintColor whichColor,Color c)
- (summary) 
     Sets the logical paint color association to a spacific .Net library color, without forced UI update.
     
- (since) 5.0
- (returns) void This is some return comment
## static void SetPaintColor(PaintColor whichColor,Color c,bool forceUiUpdate)
- (summary) 
     Sets the logical paint color association to a spacific .Net library color.
     
- (since) 5.0
- (returns) void This is some return comment
## static void SetWidgetColor(WidgetColor whichColor,Color c)
- (summary) 
     Sets the logical widget color association to a spacific .Net library color, without forced UI update.
     
- (since) 6.0
- (returns) void This is some return comment
## static void SetWidgetColor(WidgetColor whichColor,Color c,bool forceUiUpdate)
- (summary) 
     Sets the logical widget color association to a spacific .Net library color.
     
- (since) 6.0
- (returns) void This is some return comment
## static void UpdateFromState(AppearanceSettingsState state)
- (summary) 
     Sets all settings to a particular defined joined state.
     
- (since) 5.0
- (returns) void This is some return comment
