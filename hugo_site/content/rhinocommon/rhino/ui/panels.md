---
title: "Panels"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Access to Rhino panels and register custom panels
```cs
public class Panels
```

static Closed
: This event is raised when a panel host is closed
: since 6.0

static Show
: This event is called when a panel is shown or hidden.  This event will get raised 
       multipThis times when the active document changes in Mac Rhino.  It will called
       with show equal to False for the prevous active document and with show equal to 
       True for the current document.  When the event is raised with show equal to false
       it only means the document instace of the panel is not visible it does not mean 
       the panel host has been closed.  If you need to know when the panel host closes
       then subsribe to the Closed event.
: since 6.0
## Properties

static string EtoPanelStyleName
: Style applied to Eto controls hosted by the Rhino.UI.Panels and
       Rhino.UI.ObjectProperties systems.
: since 6.15

static Size IconSize
: Gets the panel icon size in logical units.
: since 6.12

static Size ScaledIconSize
: Gets the panel icon size in pixels with DPI scaling applied.
: since 6.12
## Methods

static void ChangePanelIcon(Type panelType,Icon icon)
: Update the icon used for a panel tab.
: since 6.0

static void ClosePanel(Guid panelId)
: Will close or hide the specified panel type, in Windows Rhino, if it
       is the only visible tab the tab dock bar will be closed as well.  In
       Mac Rhino it will always close the modeless dialog hosting the panel.

static void ClosePanel(Type panelType)
: Will close or hide the specified panel type, in Windows Rhino, if it
       is the only visible tab the tab dock bar will be closed as well.  In
       Mac Rhino it will always close the modeless dialog hosting the panel.

static bool FloatPanel(Guid panelTypeId,FloatPanelMode mode)
: Mac support:
         Display the specified panel in a floating window on Mac, the floating
         window will only contain the specified panel.
       
       Windows support:
         On Windows this will show or hide the floating continer containing the
         specified panel.  If the tab is docked with other tabs it will be
         floated in a new container.
: Returns - Return true if the panel visibility state was changed, false otherwise.
: since 6.2

static bool FloatPanel(Type panelType,FloatPanelMode mode)
: Mac support:
         Display the specified panel in a floating window on Mac, the floating
         window will only contain the specified panel.
       
       Windows support:
         On Windows this will show or hide the floating continer containing the
         specified panel.  If the tab is docked with other tabs it will be
         floated in a new container.
: Returns - Return true if the panel visibility state was changed, false otherwise.
: since 6.2

static Guid[] GetOpenPanelIds()
: Get a list of the currently open panel tabs in Windows Rhino, on Mac
       Rhino it will be a list of the currently visible modeless panel
       dialogs.
: Returns - Returns an array of panel class Id's for the currently open panels,
       if there are no open panels it will be an empty array.

static T GetPanel()
: Return an instance of a .Net panel
: since 6.0

static object GetPanel(Guid panelId)
: Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
: Returns - Returns the one and only instance of a panel if it has been properly
       registered and displayed at least once.  If the panel has never been
       displayed then None will be returned even if the panel is properly
       registered.

static object GetPanel(Guid panelId,RhinoDoc rhinoDoc)
: Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
: Returns - Returns the one and only instance of a panel if it has been properly
       registered and displayed at least once.  If the panel has never been
       displayed then None will be returned even if the panel is properly
       registered.
: since 6.0

static object GetPanel(Guid panelId,uint documentSerialNumber)
: Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
: Returns - Returns the one and only instance of a panel if it has been properly
       registered and displayed at least once.  If the panel has never been
       displayed then None will be returned even if the panel is properly
       registered.
: since 6.0

static T GetPanel(RhinoDoc rhinoDoc)
: Return an instance of a .Net panel
: since 6.0

static T GetPanel(uint documentSerialNumber)
: Return an instance of a .Net panel
: since 6.0

static object [] GetPanels(Guid panelId,RhinoDoc doc)
: Gets the panels.
: Returns - The panels.
: since 6.3

static object[] GetPanels(Guid panelId,uint documentRuntimeSerialNumber)
: Gets the panels.
: Returns - The panels.
: since 6.3

static T[] GetPanels(RhinoDoc doc)
: 
: since 6.3

static T [] GetPanels(uint documentRuntimeSerialNumber)
: Gets the panels.
: Returns - The panels.
: since 6.3

static bool IsHiding(ShowPanelReason reason)
: Check to see if reason is equal to any of the show events
: since 6.0

static bool IsPanelVisible(Guid panelId)
: Check to see if a panel is currently visible, on Windows this means
       you can see the tab, it does not necessarily mean it is the current
       tab.
: Returns - Returns True if the tab is visible otherwise it returns false.

static bool IsPanelVisible(Guid panelId,bool isSelectedTab)
: Check to see if a panel is currently visible, if isSelectedTab
       is True then the tab must be the active tab as well.
: Returns - On Windows:
         The return value is demendant on the isSelectedTab value.  If
         isSelectedTab is True then the panel must be included in a
         visible tabbed container and must also be the active tab to be
         true.  If isSelectedTab is False then the panel only has to be 
         included in a visible tabbed container to be true.
       On Mac:
         isSelected is ignored and True is returned if the panel appears
         in any inspector panel.
: since 6.0

static bool IsPanelVisible(Type panelType)
: Check to see if a panel is currently visible, on Windows this means
       you can see the tab, it does not necessarily mean it is the current
       tab.
: Returns - Returns True if panelType is non None and the tab is visible otherwise
       it returns false.

static bool IsPanelVisible(Type panelType,bool isSelectedTab)
: Check to see if a panel is currently visible, if isSelectedTab
       is True then the tab must be the active tab as well.
: Returns - On Windows:
         The return value is demendant on the isSelectedTab value.  If
         isSelectedTab is True then the panel must be included in a
         visible tabbed container and must also be the active tab to be
         true.  If isSelectedTab is False then the panel only has to be 
         included in a visible tabbed container to be true.
       On Mac:
         isSelected is ignored and True is returned if the panel appears
         in any inspector panel.
: since 6.0

static bool IsShowing(ShowPanelReason reason)
: Check to see if reason is equal to any of the hide events
: since 6.0

static void OnClosePanel(Guid panelId,uint documentSerialNumber)
: Call this method to raise the Closed event
: since 6.0

static void OnShowPanel(Guid panelId,uint documentSerialNumber,bool show)
: Call this method to raise the Show event
: since 6.0

static void OpenPanel(Guid panelId)
: Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.

static void OpenPanel(Guid panelId,bool makeSelectedPanel)
: Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
: since 6.0

static Guid OpenPanel(Guid dockBarId,Guid panelId)
: In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
: Returns - Returns True if the
: since 5.12

static Guid OpenPanel(Guid dockBarId,Guid panelId,bool makeSelectedPanel)
: In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
: Returns - Returns True if the
: since 6.0

static Guid OpenPanel(Guid dockBarId,Type panelType)
: In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
: Returns - Returns True if the
: since 5.12

static Guid OpenPanel(Guid dockBarId,Type panelType,bool makeSelectedPanel)
: In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
: Returns - Returns True if the
: since 6.0

static void OpenPanel(Type panelType)
: Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.

static void OpenPanel(Type panelType,bool makeSelectedPanel)
: Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
: since 6.0

static bool OpenPanelAsSibling(Guid panelId,Guid siblingPanelId)
: In Mac Rhino this will currently just call OpenPanel, in Windows Rhino
       this will look for a dock bar which contains the sibling panel and add
       this panel to that dock bar as necessary, if the panel was in another
       dock bar it will be moved to this dock bar.
: Returns - Returns True if the panel was successfully opened.

static bool OpenPanelAsSibling(Guid panelId,Guid siblingPanelId,bool makeSelectedPanel)
: In Mac Rhino this will currently just call OpenPanel, in Windows Rhino
       this will look for a dock bar which contains the sibling panel and add
       this panel to that dock bar as necessary, if the panel was in another
       dock bar it will be moved to this dock bar.
: Returns - Returns True if the panel was successfully opened.
: since 6.0

static Guid PanelDockBar(Guid panelId)
: Will always return Guid.Emty in Mac Rhino.  In Windows Rhino it will
       look for the dock bar which contains the specified panel class Id and
       return the dock bar Id.
: Returns - Always returns Guid.Empty on Mac Rhino.  On Windows Rhino it will
       return the Id for the dock bar which host the specified panel or 
       Guid.Empty if the panel is not currently visible.
: since 5.12

static Guid PanelDockBar(Type panelType)
: Will always return Guid.Emty in Mac Rhino.  In Windows Rhino it will
       look for the dock bar which contains the specified panel class Id and
       return the dock bar Id.
: Returns - Always returns Guid.Empty on Mac Rhino.  On Windows Rhino it will
       return the Id for the dock bar which host the specified panel or 
       Guid.Empty if the panel is not currently visible.
: since 5.12

static Guid[] PanelDockBars(Guid panelId)
: Will always return a empty array in Mac Rhino.  In Windows Rhino it will
       look for any panel dock bars that contain the specified panel class Id and
       return the dock bar Id's.
: Returns - Always returns Guid.Empty on Mac Rhino.  On Windows Rhino it will
       return the Id for the dock bar which host the specified panel or 
       Guid.Empty if the panel is not currently visible.
: since 6.1

static void RegisterPanel(PlugIn plugin,Type panelType,string caption,Icon icon)
: You typically register your panel class in your plug-in's OnLoad
       function.  This will register your custom call with Rhino, Rhino will
       create an instance of your class the first time your panel is created
       and embed this instance of your class in a panel container.

static void RegisterPanel(PlugIn plugIn,Type type,string caption,Icon icon,PanelType panelType)
: Call once to register a panel type which will get dynamically created
       and embedded in a Rhino docking/floating location.
: since 6.1
