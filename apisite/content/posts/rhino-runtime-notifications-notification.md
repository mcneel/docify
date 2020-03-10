---
title: "Rhino.Runtime.Notifications.Notification"
date: 2020-03-10 09:24:55Z
draft: false
---

## PropertyChanged
- (summary) 
     Triggered whenever a visible property of the instance changes.
     
- (since) 6.0
# Constructors
## Rhino.Runtime.Notifications.Notification()
- (summary) 
     Creates a new instance that can be edited by any assembly.
     
- (since) 6.0
## Rhino.Runtime.Notifications.Notification(IEnumerable<Assembly> allowedAssemblies)
- (summary) 
     Creates a new instance that can be edited by the given assemblies.
     
- (since) 6.0
# Properties
## ICollection<Assembly> AllowedAssemblies
- (summary) 
     The assemblies that can modify this instance.
     
- (since) 6.0
## string AlternateButtonTitle
- (summary) 
     The localized title of the Alternate button.
     
- (since) 6.0
## Action<ButtonType> ButtonClicked
- (summary) 
     An Action that will be invoked whenever a button for the notification is clicked or the notification is closed.
     
- (since) 6.0
## string CancelButtonTitle
- (summary) 
     The localized title of the Cancel button.
     
- (since) 6.0
## string ConfirmButtonTitle
- (summary) 
     The localized title of the Confirm button.
     
- (since) 6.0
## DateTime DateUpdated
- (summary) 
     The date the notification was last modified.
     
- (since) 6.0
## string Description
- (summary) 
     The description of the notification. The description is displayed in the Notifications panel in Rhino.
     
- (since) 6.0
## string Message
- (summary) 
     The message of the notification. The message is shown only when the instance is displayed modally. It should contain details about the notification.
     
- (since) 6.0
## IDictionary<string, string> MetadataCopy
- (summary) 
     A copy of all the metadata for this class.
     
- (since) 6.0
## Severity SeverityLevel
- (summary) 
     The severity of the notification. Changing the severity of the notification may change the way Rhino chooses to display the Notifications panel. 
     
- (since) 6.0
## Guid? ShowEventId
- (summary) 
     A field used by Rhino for displaying notifications. Not intended for public use.
     
- (since) 6.0
## string Title
- (summary) 
     The title of the notification. The title is displayed when the notification is displayed modally in Rhino.
     
- (since) 6.0
# Methods
## static void ExecuteAssemblyProtectedCode(Action action)
- (summary) 
     If a  object is only allowed to be modified by certain
     assemblies, then any code that interacts with it must be wrapped around this method,
     or a  will be thrown. For performance reasons,
     the code wrapped by this method should be kept as simple as possible.
     
- (since) 6.3
- (returns) void This is some return comment
## static TResult ExecuteAssemblyProtectedCode(Func<TResult> func)
- (summary) 
     If a  object is only allowed to be modified by certain
     assemblies, then any code that interacts with it must be wrapped around this method,
     or a  will be thrown. For performance reasons,
     the code wrapped by this method should be kept as simple as possible.
     
- (since) 6.3
- (returns) TResult This is some return comment
## bool Editable()
- (summary) 
     Determines whether an assembly can modify the instance. Any code that modifies an assembly protected
     notification must be wrapped in a  method.
     
- (since) 6.3
- (returns) bool This is some return comment
## void HideModal()
- (summary) 
     Tells Rhino to hide the notification if it is being currently shown as a modal.
     
- (since) 6.0
- (returns) void This is some return comment
## bool RemoveMetadata(string key)
- (summary) 
     Removes metadata from this instance.
     
- (since) 6.0
- (returns) bool This is some return comment
## void ShowModal()
- (summary) 
     Tells Rhino to display the notification modally.
     
- (since) 6.0
- (returns) void This is some return comment
## string ToString()
- (summary) 
     Returns a readable string representation of the instance.
     
- (since) (unknown)
- (returns) string This is some return comment
