---
title: "Rhino.UI.ObjectPropertiesPage"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## bool AllObjectsMustBeSupported
- (summary) 
     Returns True when running on Mac which requires only objects of 
     SupportedTypes.  Returns False when running on Windows which only
     requires a single item of SupportedTypes to be selected.
     
     Override if you wish to change the above behavior.
     
- (since) 6.7
## string EnglishPageTitle
- (summary) 
     English string used to describe this page
     
- (since) 5.0
## System.Drawing.Icon Icon
- (summary) 
     (OBSOLETE - Override PageIcon instead)
     Icon to display in the object properties tab control
     
- (since) 5.0
## string LocalPageTitle
- (summary) 
     Localized page description string, returns the EnglishPageTitle by
     default.
     
- (since) 5.0
## object PageControl
- (summary) 
     The control that represents this page. Rhino Windows supports classes
     that implement the IWin32Windows interface, are derived from
     System.Windows.FrameworkElement or Eto.Forms.Control.  Mac Rhino
     supports controls that are derived from NSview or Eto.Forms.Control.
     
- (since) 5.0
## string PageIconEmbeddedResourceString
- (summary) 
     Resource string for a embedded icon resource in the assembly containing
     the page instance.  If this returns a valid resource and Rhino can
     load the icon the loaed icon will get used directly otherwise;
     the PageIcon method will get called.
     
- (since) 6.4
## PropertyPageType PageType
- (summary) 
     Override this and return the page you want to replace a specific object
     properties page.
     
- (since) 5.11
## RhinoObject[] SelectedObjects
- (summary) 
     Return a list of Rhino objects to be processed by this object properties page
     
- (since) 5.11
## ObjectType SupportedTypes
- (summary) 
     Override to specify which objects this page supports
     
- (since) 6.0
## bool SupportsSubObjects
- (summary) 
     If your object properties page supports sub-object selection, you
     should override this method and return true.  This is ignored for view
     pages.  The default implementation returns false.
     
- (since) 6.0
# Methods
## bool AnySelectedObject()
- (summary) 
     Return True if any of the selected objects match the given type
     
- (since) 6.0
- (returns) bool This is some return comment
## bool AnySelectedObject(bool allMustMatch)
- (summary) 
     Return True if any of the selected objects match the given type
     
- (since) 6.7
- (returns) bool This is some return comment
## T[] GetSelectedObjects()
- (summary) 
     Get selected objects of a given type
     
- (since) 6.0
- (returns) T[] This is some return comment
## RhinoObject[] GetSelectedObjects(ObjectType filter)
- (summary) 
     Get selected objects that match a given filter
     
- (since) 6.0
- (returns) RhinoObject[] This is some return comment
## void InitializeControls(RhinoObject rhObj)
- (summary) 
     Called on the active page after the selected objects list has changed
     to notify the page to initialize its content to reflect the new
     object list.
     
- (since) 5.0
- (returns) void This is some return comment
## void ModifyPage(Action<ObjectPropertiesPageEventArgs> callbackAction)
- (summary) 
     Call this method when the page is ready to modify the selected objects
     list.  Rhino will suspend UpdatePageNotfictaion, call the passed action
     then restore UpdatePageNotfictaion. 
     
- (since) 6.0
- (returns) void This is some return comment
## bool OnActivate(bool active)
- (summary) Called when this page is activated/deactivated.
- (since) 5.0
- (returns) bool This is some return comment
## void OnCreateParent(IntPtr hwndParent)
- (summary) 
     Called when the parent container is initially created.
     
- (since) 5.0
- (returns) void This is some return comment
## void OnHelp()
- (summary) 
     Called when the F1 key or help button is pressed, override to display
     plug-in specific help for this page.
     
- (since) 5.0
- (returns) void This is some return comment
## void OnSizeParent(int width,int height)
- (summary) 
     Called when the parent containers client rectangle size has changed and
     the PageControl has been resized.
     
- (since) 5.0
- (returns) void This is some return comment
## System.Drawing.Icon PageIcon(Size sizeInPixels)
- (summary) 
     Icon to display in the object properties tab control.  Will not get called
     if PageIconEmbeddedResourceString is overriden and provides a string for a 
     successfully loaded icon resrouce.
     
- (since) 6.0
- (returns) System.Drawing.Icon This is some return comment
## Commands.Result RunScript(ObjectPropertiesPageEventArgs e)
- (summary) 
     This method is called when scripting the Rhino Properties command and
     choosing this page.
     
- (since) 6.0
- (returns) Commands.Result This is some return comment
## Commands.Result RunScript(RhinoDoc doc,RhinoObject[] objectList)
- (summary) 
     This method is called when scripting the Rhino Properties command and
     choosing this page.
     
- (since) 6.0
- (returns) Commands.Result This is some return comment
## bool ShouldDisplay(ObjectPropertiesPageEventArgs e)
- (summary) 
     Called when the selected objects list changes, return True if the
     object list contains one or more object the page can modify.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool ShouldDisplay(RhinoObject rhObj)
- (summary) 
     Called when the selected objects list changes, return True if the
     object list contains one or more object the page can modify.
     
- (since) 5.0
- (returns) bool This is some return comment
## void UpdatePage(ObjectPropertiesPageEventArgs e)
- (summary) 
     Called on the active page after the selected objects list has changed
     to notify the page to initialize its content to reflect the new
     object list.
     
- (since) 6.0
- (returns) void This is some return comment
