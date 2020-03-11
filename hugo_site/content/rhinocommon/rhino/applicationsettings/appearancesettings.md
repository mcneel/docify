---
title: "AppearanceSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Provides static methods and properties to deal with the appearance of the application.
```cs
public class AppearanceSettings
```
## Properties

static Color CommandPromptBackgroundColor
: Gets or sets the color of the command prompt background.

static Color CommandPromptHypertextColor
: Gets or sets the color of the command prompt hypertext.

static [CommandPromptPosition](/rhinocommon/rhino/applicationsettings/commandpromptposition/) CommandPromptPosition
: Gets or sets the command prompt position.

static Color CommandPromptTextColor
: Gets or sets the color of the command prompt text.

static Color CrosshairColor
: Gets or sets the color of the crosshair icon.

static Color CurrentLayerBackgroundColor
: Gets or sets the color used by the layer manager dialog as the background color for the current layer.

static string DefaultFontFaceName
: Gets or sets the default font face name used in Rhino.

static Color DefaultLayerColor
: Gets or sets the default layer color.

static Color DefaultObjectColor
: Gets or sets the default color for new objects.

static bool EchoCommandsToHistoryWindow
: Gets or sets a value that determines if command names are written to the history window.

static bool EchoPromptsToHistoryWindow
: Gets or sets a value that determines if prompt messages are written to the history window.

static Color EditCandidateColor
: Gets or sets the color of objects that are eligible to be edited.
: since 6.0

static Color FeedbackColor
: Gets or sets the feedback color.

static Color FrameBackgroundColor
: Gets or sets the background color of the frame.

static Color GridThickLineColor
: Gets or sets the color of the thick line of the grid.

static Color GridThinLineColor
: Gets or sets the color of the thin line of the grid.

static Color GridXAxisLineColor
: Gets or sets the color of the X axis of the grid.

static Color GridYAxisLineColor
: Gets or sets the color of the Y axis of the grid.

static Color GridZAxisLineColor
: Gets or sets the color of the Z axis of the grid.

static int LanguageIdentifier
: Gets or sets the language identifier.

static Color LockedObjectColor
: color used to draw locked objects.

static bool MenuVisible
: Gets or sets a value that determines if the File menu is visible.

static Color PageviewPaperColor
: Gets or sets the paper background. A rectangle is drawn into the background
     of page views to represent the printed area. The alpha portion of the color
     is used to draw the paper blended into the background

static int PreviousLanguageIdentifier
: Gets or sets the previous language identifier.

static Color SelectedObjectColor
: The color used to draw selected objects.
    The default is yellow, but this can be customized by the user.

static bool ShowCrosshairs
: Gets or sets a value that determines if cross hairs are visible.

static bool ShowFullPathInTitleBar
: Gets or sets a value that determines if the full path of the document is shown in the Rhino title bar.

static bool ShowSideBar
: Should the side bar be displayed
: since 6.0

static Color TrackingColor
: Gets or sets the tracking color.

static bool UsePaintColors
: Gets or sets a value indicating if logical paint colors should be used.

static Color ViewportBackgroundColor
: Gets or sets the viewport background color.

static Color WorldCoordIconXAxisColor
: Gets or sets the color of the world coordinate X axis.

static Color WorldCoordIconYAxisColor
: Gets or sets the color of the world coordinate Y axis.

static Color WorldCoordIconZAxisColor
: Gets or sets the color of the world coordinate Z axis.
## Methods

static [AppearanceSettingsState](/rhinocommon/rhino/applicationsettings/appearancesettingsstate/) GetCurrentState()
: Gets the current settings of the application.
: Returns - An instance of a class that represents all the settings as they appear in the Rhino _Options dialog,
     joined in a single class.

static [AppearanceSettingsState](/rhinocommon/rhino/applicationsettings/appearancesettingsstate/) GetDefaultState()
: Gets the factory settings of the application.
: Returns - An instance of a class that represents all the default settings joined together.

static Color GetPaintColor(PaintColor whichColor)
: Gets the .Net library color that is currently associated with a paint color.
: Returns - A .Net library color.

static Color GetWidgetColor(WidgetColor whichColor)
: Gets the .Net library color that is currently associated with a widget color.
: Returns - A .Net library color.
: since 6.0

static bool InitialMainWindowPosition(Rectangle bounds)
: Location where the Main Rhino window attempts to show when the application is first
     started.
: Returns - False if the information could not be retrieved.
: since 6.0

static void RestoreDefaults()
: Commits the default settings as the current settings.

static void SetPaintColor(PaintColor whichColor,Color c)
: Sets the logical paint color association to a spacific .Net library color, without forced UI update.

static void SetPaintColor(PaintColor whichColor,Color c,bool forceUiUpdate)
: Sets the logical paint color association to a spacific .Net library color.

static void SetWidgetColor(WidgetColor whichColor,Color c)
: Sets the logical widget color association to a spacific .Net library color, without forced UI update.
: since 6.0

static void SetWidgetColor(WidgetColor whichColor,Color c,bool forceUiUpdate)
: Sets the logical widget color association to a spacific .Net library color.
: since 6.0

static void UpdateFromState(AppearanceSettingsState state)
: Sets all settings to a particular defined joined state.
