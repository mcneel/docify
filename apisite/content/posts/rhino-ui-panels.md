---
title: "Panels"
draft: false
---

*Namespace: Rhino.UI*

     Access to Rhino panels and register custom panels
     
#### static Closed
- (summary) 
       This event is raised when a panel host is closed
       
- (since) 6.0
#### static Show
- (summary) 
       This event is called when a panel is shown or hidden.  This event will get raised 
       multipThis times when the active document changes in Mac Rhino.  It will called
       with show equal to False for the prevous active document and with show equal to 
       True for the current document.  When the event is raised with show equal to false
       it only means the document instace of the panel is not visible it does not mean 
       the panel host has been closed.  If you need to know when the panel host closes
       then subsribe to the Closed event.
       
- (since) 6.0
## Properties
#### static string EtoPanelStyleName
- (summary) 
       Style applied to Eto controls hosted by the Rhino.UI.Panels and
       Rhino.UI.ObjectProperties systems.
       
- (since) 6.15
#### static System.Drawing.Size IconSize
- (summary) 
       Gets the panel icon size in logical units.
       
- (since) 6.12
#### static System.Drawing.Size ScaledIconSize
- (summary) 
       Gets the panel icon size in pixels with DPI scaling applied.
       
- (since) 6.12
## Methods
#### static void ChangePanelIcon(Type panelType,Icon icon)
- (summary) 
       Update the icon used for a panel tab.
       
- (since) 6.0
- (returns) void This is some return comment
#### static void ClosePanel(Guid panelId)
- (summary) 
       Will close or hide the specified panel type, in Windows Rhino, if it
       is the only visible tab the tab dock bar will be closed as well.  In
       Mac Rhino it will always close the modeless dialog hosting the panel.
       
- (since) 5.0
- (returns) void This is some return comment
#### static void ClosePanel(Type panelType)
- (summary) 
       Will close or hide the specified panel type, in Windows Rhino, if it
       is the only visible tab the tab dock bar will be closed as well.  In
       Mac Rhino it will always close the modeless dialog hosting the panel.
       
- (since) 5.0
- (returns) void This is some return comment
#### static bool FloatPanel(Guid panelTypeId,FloatPanelMode mode)
- (summary) 
       Mac support:
         Display the specified panel in a floating window on Mac, the floating
         window will only contain the specified panel.
       
       Windows support:
         On Windows this will show or hide the floating continer containing the
         specified panel.  If the tab is docked with other tabs it will be
         floated in a new container.
       
- (since) 6.2
- (returns) bool This is some return comment
#### static bool FloatPanel(Type panelType,FloatPanelMode mode)
- (summary) 
       Mac support:
         Display the specified panel in a floating window on Mac, the floating
         window will only contain the specified panel.
       
       Windows support:
         On Windows this will show or hide the floating continer containing the
         specified panel.  If the tab is docked with other tabs it will be
         floated in a new container.
       
- (since) 6.2
- (returns) bool This is some return comment
#### static Guid[] GetOpenPanelIds()
- (summary) 
       Get a list of the currently open panel tabs in Windows Rhino, on Mac
       Rhino it will be a list of the currently visible modeless panel
       dialogs.
       
- (since) 5.0
- (returns) Guid[] This is some return comment
#### static T GetPanel()
- (summary) 
       Return an instance of a .Net panel
       
- (since) 6.0
- (returns) T This is some return comment
#### static object GetPanel(Guid panelId)
- (summary) 
       Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
       
- (since) 5.0
- (returns) object This is some return comment
#### static object GetPanel(Guid panelId,RhinoDoc rhinoDoc)
- (summary) 
       Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
       
- (since) 6.0
- (returns) object This is some return comment
#### static object GetPanel(Guid panelId,uint documentSerialNumber)
- (summary) 
       Will return an instance of a .Net panel if the panel has been
       displayed at least once.  Panel instances are not created until a
       panel is displayed.
       
- (since) 6.0
- (returns) object This is some return comment
#### static T GetPanel(RhinoDoc rhinoDoc)
- (summary) 
       Return an instance of a .Net panel
       
- (since) 6.0
- (returns) T This is some return comment
#### static T GetPanel(uint documentSerialNumber)
- (summary) 
       Return an instance of a .Net panel
       
- (since) 6.0
- (returns) T This is some return comment
#### static object [] GetPanels(Guid panelId,RhinoDoc doc)
- (summary) 
       Gets the panels.
       
- (since) 6.3
- (returns) object [] This is some return comment
#### static object[] GetPanels(Guid panelId,uint documentRuntimeSerialNumber)
- (summary) 
       Gets the panels.
       
- (since) 6.3
- (returns) object[] This is some return comment
#### static T[] GetPanels(RhinoDoc doc)
- (summary) 
- (since) 6.3
- (returns) T[] This is some return comment
#### static T [] GetPanels(uint documentRuntimeSerialNumber)
- (summary) 
       Gets the panels.
       
- (since) 6.3
- (returns) T [] This is some return comment
#### static bool IsHiding(ShowPanelReason reason)
- (summary) 
       Check to see if reason is equal to any of the show events 
       
- (since) 6.0
- (returns) bool This is some return comment
#### static bool IsPanelVisible(Guid panelId)
- (summary) 
       Check to see if a panel is currently visible, on Windows this means
       you can see the tab, it does not necessarily mean it is the current
       tab.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool IsPanelVisible(Guid panelId,bool isSelectedTab)
- (summary) 
       Check to see if a panel is currently visible, if isSelectedTab
       is True then the tab must be the active tab as well.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static bool IsPanelVisible(Type panelType)
- (summary) 
       Check to see if a panel is currently visible, on Windows this means
       you can see the tab, it does not necessarily mean it is the current
       tab.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool IsPanelVisible(Type panelType,bool isSelectedTab)
- (summary) 
       Check to see if a panel is currently visible, if isSelectedTab
       is True then the tab must be the active tab as well.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static bool IsShowing(ShowPanelReason reason)
- (summary) 
       Check to see if reason is equal to any of the hide events 
       
- (since) 6.0
- (returns) bool This is some return comment
#### static void OnClosePanel(Guid panelId,uint documentSerialNumber)
- (summary) 
       Call this method to raise the Closed event
       
- (since) 6.0
- (returns) void This is some return comment
#### static void OnShowPanel(Guid panelId,uint documentSerialNumber,bool show)
- (summary) 
       Call this method to raise the Show event
       
- (since) 6.0
- (returns) void This is some return comment
#### static void OpenPanel(Guid panelId)
- (summary) 
       Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
       
- (since) 5.0
- (returns) void This is some return comment
#### static void OpenPanel(Guid panelId,bool makeSelectedPanel)
- (summary) 
       Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
       
- (since) 6.0
- (returns) void This is some return comment
#### static Guid OpenPanel(Guid dockBarId,Guid panelId)
- (summary) 
       In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
       
- (since) 5.12
- (returns) Guid This is some return comment
#### static Guid OpenPanel(Guid dockBarId,Guid panelId,bool makeSelectedPanel)
- (summary) 
       In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
       
- (since) 6.0
- (returns) Guid This is some return comment
#### static Guid OpenPanel(Guid dockBarId,Type panelType)
- (summary) 
       In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
       
- (since) 5.12
- (returns) Guid This is some return comment
#### static Guid OpenPanel(Guid dockBarId,Type panelType,bool makeSelectedPanel)
- (summary) 
       In Mac Rhino this will just call the version of OpenPanel that takes
       a class type Id.  In Windows Rhino this will look for a dock bar with
       the specified Id and open or move the specified panel to that dock
       bar.
       
- (since) 6.0
- (returns) Guid This is some return comment
#### static void OpenPanel(Type panelType)
- (summary) 
       Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
       
- (since) 5.0
- (returns) void This is some return comment
#### static void OpenPanel(Type panelType,bool makeSelectedPanel)
- (summary) 
       Open the specified panel in its current or default location and if it
       is in a dock bar containing more than one tab, make it the current tab.
       
- (since) 6.0
- (returns) void This is some return comment
#### static bool OpenPanelAsSibling(Guid panelId,Guid siblingPanelId)
- (summary) 
       In Mac Rhino this will currently just call OpenPanel, in Windows Rhino
       this will look for a dock bar which contains the sibling panel and add
       this panel to that dock bar as necessary, if the panel was in another
       dock bar it will be moved to this dock bar.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool OpenPanelAsSibling(Guid panelId,Guid siblingPanelId,bool makeSelectedPanel)
- (summary) 
       In Mac Rhino this will currently just call OpenPanel, in Windows Rhino
       this will look for a dock bar which contains the sibling panel and add
       this panel to that dock bar as necessary, if the panel was in another
       dock bar it will be moved to this dock bar.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static Guid PanelDockBar(Guid panelId)
- (summary) 
       Will always return Guid.Emty in Mac Rhino.  In Windows Rhino it will
       look for the dock bar which contains the specified panel class Id and
       return the dock bar Id.
       
- (since) 5.12
- (returns) Guid This is some return comment
#### static Guid PanelDockBar(Type panelType)
- (summary) 
       Will always return Guid.Emty in Mac Rhino.  In Windows Rhino it will
       look for the dock bar which contains the specified panel class Id and
       return the dock bar Id.
       
- (since) 5.12
- (returns) Guid This is some return comment
#### static Guid[] PanelDockBars(Guid panelId)
- (summary) 
       Will always return a empty array in Mac Rhino.  In Windows Rhino it will
       look for any panel dock bars that contain the specified panel class Id and
       return the dock bar Id's.
       
- (since) 6.1
- (returns) Guid[] This is some return comment
#### static void RegisterPanel(PlugIn plugin,Type panelType,string caption,Icon icon)
- (summary) 
       You typically register your panel class in your plug-in's OnLoad
       function.  This will register your custom call with Rhino, Rhino will
       create an instance of your class the first time your panel is created
       and embed this instance of your class in a panel container.
       
- (since) 5.0
- (returns) void This is some return comment
#### static void RegisterPanel(PlugIn plugIn,Type type,string caption,Icon icon,PanelType panelType)
- (summary) 
       Call once to register a panel type which will get dynamically created
       and embedded in a Rhino docking/floating location.
       
- (since) 6.1
- (returns) void This is some return comment
