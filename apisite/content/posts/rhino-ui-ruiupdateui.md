---
title: "RuiUpdateUi"
draft: false
---

*Namespace: Rhino.UI*
## Properties
#### bool Checked
- (summary) Set to True to enable menu item or False to check menu item
- (since) 5.11
#### bool Enabled
- (summary) Set to True to enable menu item or False to disable menu item
- (since) 5.11
#### Guid FileId
- (summary) Id of the RUI file that owns this menu item
- (since) 5.11
#### IntPtr MenuHandle
- (summary) Windows menu handle of menu that contains this item
- (since) 5.11
#### Guid MenuId
- (summary) Id of the menu that owns this menu item
- (since) 5.11
#### int MenuIndex
- (summary) Zero based index of item in the Windows menu
- (since) 5.11
#### Guid MenuItemId
- (summary) Id of the menu item that owns this menu item
- (since) 5.11
#### bool RadioChecked
- (summary) Set to True to enable menu item or False to check menu item
- (since) 5.11
#### string Text
- (summary) Menu item text
- (since) 5.11
#### uint WindowsMenuItemId
- (summary) Windows menu item ID
- (since) 5.11
## Methods
#### static bool RegisterMenuItem(Guid file,Guid menu,Guid item,UpdateMenuItemEventHandler callBack)
- (summary) Register menu item update delegate
- (since) 5.11
- (returns) bool This is some return comment
#### static bool RegisterMenuItem(string fileId,string menuId,string itemId,UpdateMenuItemEventHandler callBack)
- (summary) Register menu item update delegate
- (since) 5.11
- (returns) bool This is some return comment
