---
title: "UserInterfaceSection"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.UI](../)*

Custom user interface section manager
```cs
[Obsolete]
public class UserInterfaceSection
```
## Properties

[RenderContent](/rhinocommon/rhino/render/rendercontent/) RenderContent
: The RenderContent object that created this user interface object.
: since 5.1

object Window
: The user control associated with this user interface object.
: since 5.1
## Methods

static UserInterfaceSection FromWindow(object window)
: Find the UserInterfaceSection that created the specified instance of a
     window.
: Returns - If a UserInterfaceSection object is found containing a reference to
     the requested window then return the object otherwise return null.
: since 6.0

void Expand(bool expand)
: Expand or collapse this content section.
: since 5.1

[RenderContent](/rhinocommon/rhino/render/rendercontent/)[] GetContentList()
: Returns a list of currently selected content items to be edited.
: Returns - Returns a list of currently selected content items to be edited.
: since 5.1

void Show(bool visible)
: Show or hide this content section.
: since 5.1
