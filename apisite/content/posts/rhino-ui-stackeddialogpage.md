---
title: "StackedDialogPage"
draft: false
---

*Namespace: Rhino.UI*

   Base class to inherit from for the addition of stacked dialog pages.
   
## Properties
#### List<StackedDialogPage> Children
- (summary) 
     List of child (sub) pages of this page
     
- (since) 5.0
#### string EnglishPageTitle
- (summary) 
     English string used when scripting this page and a user prefixes a
     command option with "_"
     
- (since) 5.0
#### IntPtr Handle
- (summary) 
     When running on Windows return the window handle for the parent of this
     page otherwise; return IntPtr.Zero.
     
- (since) 6.0
#### bool HasChildren
- (summary) 
     Will be True if this page contains sub pages.
     
- (since) 5.0
#### string LocalPageTitle
- (summary) 
     Localized page title that will appear on a tab or other page navigation
     control.  This is also uses as a command line option when scripting
     this page.
     
- (since) 5.0
#### bool Modified
- (summary) 
     Check to see if the page has been marked as modified or not.  Marking
     the page as modified will cause the Apply button to get enabled if this
     is currently the visible page and the page includes the Apply button.
     
- (since) 6.0
#### System.Drawing.Color NavigationTextColor
- (summary) 
     Currently only used by Windows Rhino.  If this is set to True then the
     tree control item text be drawn using this color.  Set the color to
     System.Drawing.Color.Empty to use the default color.
     
- (since) 6.0
#### bool NavigationTextIsBold
- (summary) 
     Currently only used by Windows Rhino.  If this is set to True then the
     tree control item text will be bold.
     
- (since) 6.0
#### object PageControl
- (summary) 
     Return the control that represents this page. Rhino Windows supports
     classes that implement the IWin32Windows interface or are derived from
     some form of System.Windows.FrameworkElement or Eto.Forms.Control.  Mac
     Rhino supports controls that are derived from NSview or
     Eto.Forms.Control.
     
- (since) 5.0
#### System.Drawing.Image PageImage
- (summary) 
     Optionally override to provide a image to display in 
     the Mac Rhino UI
     
- (since) 6.0
#### bool ShowApplyButton
- (summary) Called when this page is activated
- (since) 6.0
#### bool ShowDefaultsButton
- (summary) Called when this page is activated.
- (since) 5.0
## Methods
#### void AddChildPage(StackedDialogPage pageToAdd)
- (summary) 
     Currently only supported on Windows.  Call this method to add a child
     page to a page after the parent dialog has been created.
     
- (since) 6.0
- (returns) void This is some return comment
#### void MakeActivePage()
- (summary) 
     Make this page the active, visible page
     
- (since) 6.0
- (returns) void This is some return comment
#### bool OnActivate(bool active)
- (summary) Called when this page is activated/deactivated.
- (since) 5.0
- (returns) bool This is some return comment
#### bool OnApply()
- (summary) Called when stacked dialog OK button is pressed.
- (since) 5.0
- (returns) bool This is some return comment
#### void OnCancel()
- (summary) Called when stacked dialog Cancel button is pressed.
- (since) 5.0
- (returns) void This is some return comment
#### void OnCreateParent(IntPtr hwndParent)
- (summary) 
     Called when the parent window has been created on Windows platforms
     only.
     
- (since) 5.0
- (returns) void This is some return comment
#### void OnDefaults()
- (summary) Called when stacked dialog Defaults button is pressed (see ShowDefaultsButton).
- (since) 5.0
- (returns) void This is some return comment
#### void OnHelp()
- (summary) 
     Called when the parent dialog requests help for this page.
     
- (since) 5.0
- (returns) void This is some return comment
#### void OnSizeParent(int width,int height)
- (summary) 
     Called when the parent window has been resized
     
- (since) 5.0
- (returns) void This is some return comment
#### void RemovePage()
- (summary) 
     Remove this page from the dialog box
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetEnglishPageTitle(string newPageTile)
- (summary) 
     Change the title passed to the constructor and, this will cause
     LocalPageTitle to get called also.
     
- (since) 6.0
- (returns) void This is some return comment
