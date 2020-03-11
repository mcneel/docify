---
title: "StackedDialogPage"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Base class to inherit from for the addition of stacked dialog pages.
```cs
public class StackedDialogPage
```
## Properties

List<StackedDialogPage> Children
: List of child (sub) pages of this page

string EnglishPageTitle
: English string used when scripting this page and a user prefixes a
     command option with "_"

IntPtr Handle
: When running on Windows return the window handle for the parent of this
     page otherwise; return IntPtr.Zero.
: since 6.0

bool HasChildren
: Will be True if this page contains sub pages.

string LocalPageTitle
: Localized page title that will appear on a tab or other page navigation
     control.  This is also uses as a command line option when scripting
     this page.

bool Modified
: Check to see if the page has been marked as modified or not.  Marking
     the page as modified will cause the Apply button to get enabled if this
     is currently the visible page and the page includes the Apply button.
: since 6.0

Color NavigationTextColor
: Currently only used by Windows Rhino.  If this is set to True then the
     tree control item text be drawn using this color.  Set the color to
     System.Drawing.Color.Empty to use the default color.
: since 6.0

bool NavigationTextIsBold
: Currently only used by Windows Rhino.  If this is set to True then the
     tree control item text will be bold.
: since 6.0

object PageControl
: Return the control that represents this page. Rhino Windows supports
     classes that implement the IWin32Windows interface or are derived from
     some form of System.Windows.FrameworkElement or Eto.Forms.Control.  Mac
     Rhino supports controls that are derived from NSview or
     Eto.Forms.Control.

Image PageImage
: Optionally override to provide a image to display in 
     the Mac Rhino UI
: since 6.0

bool ShowApplyButton
: Called when this page is activated
: Returns - True  : if the page wants the "Apply" button to appear.
    False : if the page does not want the "Apply" button to appear.
    
    Default returns false
    Note: If True is returned OnApply will get called when the button is
          clicked.
: since 6.0

bool ShowDefaultsButton
: Called when this page is activated.
: Returns - True  : if the page wants the "Defaults" button to appear.
    False : if the page does not want the "Defaults" button to appear.
    
    Default returns false
    Note: returning False implies that OnDefaults() method will never get called.
## Methods

void AddChildPage(StackedDialogPage pageToAdd)
: Currently only supported on Windows.  Call this method to add a child
     page to a page after the parent dialog has been created.
: since 6.0

void MakeActivePage()
: Make this page the active, visible page
: since 6.0

bool OnActivate(bool active)
: Called when this page is activated/deactivated.
: Returns - If True then the page is hidden and the requested page is not
    activated otherwise will not allow you to change the current page.
    Default returns true

bool OnApply()
: Called when stacked dialog OK button is pressed.
: Returns - If return value is True then the dialog will be closed. A return of False means
     there was an error and dialog remains open so page can be properly updated.

void OnCancel()
: Called when stacked dialog Cancel button is pressed.

void OnCreateParent(IntPtr hwndParent)
: Called when the parent window has been created on Windows platforms
     only.

void OnDefaults()
: Called when stacked dialog Defaults button is pressed (see ShowDefaultsButton).

void OnHelp()
: Called when the parent dialog requests help for this page.

void OnSizeParent(int width,int height)
: Called when the parent window has been resized

void RemovePage()
: Remove this page from the dialog box
: since 6.0

void SetEnglishPageTitle(string newPageTile)
: Change the title passed to the constructor and, this will cause
     LocalPageTitle to get called also.
: since 6.0
