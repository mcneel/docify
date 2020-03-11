---
title: "RuiUpdateUi"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

```cs
[CLSCompliant(false)]
public class RuiUpdateUi : EventArgs
```
## Properties

bool Checked
: Set to True to enable menu item or False to check menu item
: since 5.11

bool Enabled
: Set to True to enable menu item or False to disable menu item
: since 5.11

Guid FileId
: Id of the RUI file that owns this menu item
: since 5.11

IntPtr MenuHandle
: Windows menu handle of menu that contains this item
: since 5.11

Guid MenuId
: Id of the menu that owns this menu item
: since 5.11

int MenuIndex
: Zero based index of item in the Windows menu
: since 5.11

Guid MenuItemId
: Id of the menu item that owns this menu item
: since 5.11

bool RadioChecked
: Set to True to enable menu item or False to check menu item
: since 5.11

string Text
: Menu item text
: since 5.11

uint WindowsMenuItemId
: Windows menu item ID
: since 5.11
## Methods

static bool RegisterMenuItem(Guid file,Guid menu,Guid item,UpdateMenuItemEventHandler callBack)
: Register menu item update delegate
: Returns - True if Registered otherwise false
: since 5.11

static bool RegisterMenuItem(string fileId,string menuId,string itemId,UpdateMenuItemEventHandler callBack)
: Register menu item update delegate
: Returns - True if Registered otherwise false
: since 5.11
