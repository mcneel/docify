---
title: "NotificationButtonClickedArgs"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.Notifications](../)*

Used when a button is clicked for a notification.
```cs
public class NotificationButtonClickedArgs : EventArgs
```
## Constructors

NotificationButtonClickedArgs(Notification notification,ButtonType buttonClicked)
: Creates a new instance.
: since 6.0
## Properties

[ButtonType](/rhinocommon/rhino/runtime/notifications/buttontype/) ButtonClicked
: The button that was clicked.
: since 6.0

[Notification](/rhinocommon/rhino/runtime/notifications/notification/) Notification
: The notification whose button was clicked.
: since 6.0
