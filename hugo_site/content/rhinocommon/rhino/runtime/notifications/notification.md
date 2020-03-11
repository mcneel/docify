---
title: "Notification"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.Notifications](../)*

A Notification instance can be used to inform the user about various events. For
   a Notification instance to be displayed in Rhino, it must be added to the
   . When added, it will be displayed in the
   Notifications panel in Rhino. A Notification contains 1 to 3 buttons that are 
   automatically wired to its  Action if it is not null. 
   The buttons are displayed when the Notification is shown modally by either the user 
   clicking on a particular notification in the Notifications panel, or by programatically 
   showing it using .
   
   Currently, only process-wide notifications are
   supported; document specific notifications are not possible.
   
   Notification instances contain metadata that can be added, modified, or removed during
   its life. The metadata is important for LINQ queries and other patterns.
   For example, a particular action may require that multiple notifications be modified. 
   Thus, a LINQ query can be performed on the  using metadata
   to retrieve related Notification objects and modify them as a batch.
   
   Notification objects implement . By default, a 
   Notification can be editedby any assembly, but explicitly specifing allowed assemblies 
   in the constructor changes this behavior.
   
   Notification objects are not thread-safe and should only be manipulated in UI thread.
```cs
public class Notification : INotifyPropertyChanged, IAssemblyRestrictedObject
```

PropertyChanged
: Triggered whenever a visible property of the instance changes.
: since 6.0
## Constructors

Notification()
: Creates a new instance that can be edited by any assembly.
: since 6.0

Notification(IEnumerable<Assembly> allowedAssemblies)
: Creates a new instance that can be edited by the given assemblies.
: since 6.0
## Properties

ICollection<Assembly> AllowedAssemblies
: The assemblies that can modify this instance.
: since 6.0

string AlternateButtonTitle
: The localized title of the Alternate button.
: since 6.0

Action<ButtonType> ButtonClicked
: An Action that will be invoked whenever a button for the notification is clicked or the notification is closed.
: since 6.0

string CancelButtonTitle
: The localized title of the Cancel button.
: since 6.0

string ConfirmButtonTitle
: The localized title of the Confirm button.
: since 6.0

DateTime DateUpdated
: The date the notification was last modified.
: since 6.0

string Description
: The description of the notification. The description is displayed in the Notifications panel in Rhino.
: since 6.0

string Message
: The message of the notification. The message is shown only when the instance is displayed modally. It should contain details about the notification.
: since 6.0

IDictionary<string, string> MetadataCopy
: A copy of all the metadata for this class.
: since 6.0

[Severity](/rhinocommon/rhino/runtime/notifications/notification/severity/) SeverityLevel
: The severity of the notification. Changing the severity of the notification may change the way Rhino chooses to display the Notifications panel.
: since 6.0

Guid? ShowEventId
: A field used by Rhino for displaying notifications. Not intended for public use.
: since 6.0

string Title
: The title of the notification. The title is displayed when the notification is displayed modally in Rhino.
: since 6.0
## Methods

static void ExecuteAssemblyProtectedCode(Action action)
: If a  object is only allowed to be modified by certain
     assemblies, then any code that interacts with it must be wrapped around this method,
     or a  will be thrown. For performance reasons,
     the code wrapped by this method should be kept as simple as possible.
: since 6.3

static TResult ExecuteAssemblyProtectedCode(Func<TResult> func)
: If a  object is only allowed to be modified by certain
     assemblies, then any code that interacts with it must be wrapped around this method,
     or a  will be thrown. For performance reasons,
     the code wrapped by this method should be kept as simple as possible.
: since 6.3

bool Editable()
: Determines whether an assembly can modify the instance. Any code that modifies an assembly protected
     notification must be wrapped in a  method.
: since 6.3

void HideModal()
: Tells Rhino to hide the notification if it is being currently shown as a modal.
: since 6.0

bool RemoveMetadata(string key)
: Removes metadata from this instance.
: Returns - True if the metada was removed; otherwise false.
: since 6.0

void ShowModal()
: Tells Rhino to display the notification modally.
: since 6.0

string ToString()
: Returns a readable string representation of the instance.
: since (unknown)
