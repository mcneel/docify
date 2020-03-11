---
title: "ObjectPropertiesPage"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Base class used to add object property user interface panels
```cs
public class ObjectPropertiesPage
```
## Properties

bool AllObjectsMustBeSupported
: Returns True when running on Mac which requires only objects of 
     SupportedTypes.  Returns False when running on Windows which only
     requires a single item of SupportedTypes to be selected.
     
     Override if you wish to change the above behavior.
: since 6.7

string EnglishPageTitle
: English string used to describe this page

Icon Icon
: (OBSOLETE - Override PageIcon instead)
     Icon to display in the object properties tab control

string LocalPageTitle
: Localized page description string, returns the EnglishPageTitle by
     default.

object PageControl
: The control that represents this page. Rhino Windows supports classes
     that implement the IWin32Windows interface, are derived from
     System.Windows.FrameworkElement or Eto.Forms.Control.  Mac Rhino
     supports controls that are derived from NSview or Eto.Forms.Control.

string PageIconEmbeddedResourceString
: Resource string for a embedded icon resource in the assembly containing
     the page instance.  If this returns a valid resource and Rhino can
     load the icon the loaed icon will get used directly otherwise;
     the PageIcon method will get called.
: since 6.4

PropertyPageType PageType
: Override this and return the page you want to replace a specific object
     properties page.
: since 5.11

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] SelectedObjects
: Return a list of Rhino objects to be processed by this object properties page
: since 5.11

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) SupportedTypes
: Override to specify which objects this page supports
: since 6.0

bool SupportsSubObjects
: If your object properties page supports sub-object selection, you
     should override this method and return true.  This is ignored for view
     pages.  The default implementation returns false.
: since 6.0
## Methods

bool AnySelectedObject()
: Return True if any of the selected objects match the given type
: since 6.0

bool AnySelectedObject(bool allMustMatch)
: Return True if any of the selected objects match the given type
: since 6.7

T[] GetSelectedObjects()
: Get selected objects of a given type
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] GetSelectedObjects(ObjectType filter)
: Get selected objects that match a given filter
: since 6.0

void InitializeControls(RhinoObject rhObj)
: Called on the active page after the selected objects list has changed
     to notify the page to initialize its content to reflect the new
     object list.

void ModifyPage(Action<ObjectPropertiesPageEventArgs> callbackAction)
: Call this method when the page is ready to modify the selected objects
     list.  Rhino will suspend UpdatePageNotfictaion, call the passed action
     then restore UpdatePageNotfictaion.
: since 6.0

bool OnActivate(bool active)
: Called when this page is activated/deactivated.
: Returns - If True then the page is hidden and the requested page is not
    activated otherwise will not allow you to change the current page.
    Default returns true.  The return value is currently ignored.

void OnCreateParent(IntPtr hwndParent)
: Called when the parent container is initially created.

void OnHelp()
: Called when the F1 key or help button is pressed, override to display
     plug-in specific help for this page.

void OnSizeParent(int width,int height)
: Called when the parent containers client rectangle size has changed and
     the PageControl has been resized.

System.Drawing.Icon PageIcon(Size sizeInPixels)
: Icon to display in the object properties tab control.  Will not get called
     if PageIconEmbeddedResourceString is overriden and provides a string for a 
     successfully loaded icon resrouce.
: since 6.0

Commands.Result RunScript(ObjectPropertiesPageEventArgs e)
: This method is called when scripting the Rhino Properties command and
     choosing this page.
: since 6.0

Commands.Result RunScript(RhinoDoc doc,RhinoObject[] objectList)
: This method is called when scripting the Rhino Properties command and
     choosing this page.
: since 6.0

bool ShouldDisplay(ObjectPropertiesPageEventArgs e)
: Called when the selected objects list changes, return True if the
     object list contains one or more object the page can modify.
: since 6.0

bool ShouldDisplay(RhinoObject rhObj)
: Called when the selected objects list changes, return True if the
     object list contains one or more object the page can modify.

void UpdatePage(ObjectPropertiesPageEventArgs e)
: Called on the active page after the selected objects list has changed
     to notify the page to initialize its content to reflect the new
     object list.
: since 6.0
