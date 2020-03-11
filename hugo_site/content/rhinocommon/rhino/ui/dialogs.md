---
title: "Dialogs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

```cs
public class Dialogs
```
## Methods

static void KillSplash()
: Destroy the splash screen if it is being displayed.

static void SetCustomColorDialog(EventHandler<GetColorEventArgs> handler)
: 

static void ShowAboutDialog(bool forceSimpleDialog)
: 
: since 6.0

static bool[] ShowCheckListBox(string title,string message,IList items,IList<bool> checkState)
: Displays Rhino's check list box.
: Returns - An array or boolean values determining if the user checked the corresponding box. On error, null.

static bool ShowColorDialog(Color color)
: Display Rhino's color selection dialog.
: Returns - True if the color changed. False if the color has not changed or the user pressed cancel.

static bool ShowColorDialog(Color color,bool includeButtonColors,string dialogTitle)
: Display Rhino's color selection dialog.
: Returns - True if the color changed. False if the color has not changed or the user pressed cancel.

static bool ShowColorDialog(Color4f color,bool allowAlpha)
: Displays the standard modal color picker dialog for floating point colors.
: Returns - True if a color was picked, False if the user canceled the picker dialog.

static bool ShowColorDialog(IWin32Window parent,Color4f color,bool allowAlpha)
: Displays the standard modal color picker dialog for floating point colors.
: Returns - True if a color was picked, False if the user canceled the picker dialog.

static bool ShowColorDialog(object parent,Color4f color,bool allowAlpha)
: Displays the standard modal color picker dialog for floating point colors.
: Returns - True if a color was picked, False if the user canceled the picker dialog.
: since 6.0

static bool ShowColorDialog(object parent,Color4f color,bool allowAlpha,OnColorChangedEvent colorCallback)
: Displays the standard modal color picker dialog for floating point colors.
: Returns - True if a color was picked, False if the user canceled the picker dialog.
: since 6.0

static object ShowComboListBox(string title,string message,IList items)
: Displays Rhino's combo list box.
: Returns - selected item.None if the user canceled.

static int ShowContextMenu(IEnumerable<string> items,Point screenPoint,IEnumerable<int> modes)
: Creates an ETO ContextMenu from an array of strings. Use the modes array to enable/disable menu items

static bool ShowEditBox(string title,string message,string defaultText,bool multiline,string text)
: Displays Rhino's string edit box.
: Returns - True of OK was clicked, False otherwise.

static object ShowLineTypes(string title,string message,RhinoDoc doc)
: Displays Rhino's LineType list box.
: Returns - The id of the selected item if successful, None on cancel.
: since 6.7

static object ShowListBox(string title,string message,IList items)
: Displays Rhino's list box.
: Returns - The selected item if successful, None on cancel.

static object ShowListBox(string title,string message,IList items,object selectedItem)
: Displays Rhino's list box.
: Returns - The selected item if successful, None on cancel.

static [ShowMessageResult](/rhinocommon/rhino/ui/showmessageresult/) ShowMessage(object parent,string message,string title,ShowMessageButton buttons,ShowMessageIcon icon,ShowMessageDefaultButton defaultButton,ShowMessageOptions options,ShowMessageMode mode)
: Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
: Returns - One of the ShowMessageBoxResult values.
: since 6.0

static [ShowMessageResult](/rhinocommon/rhino/ui/showmessageresult/) ShowMessage(string message,string title)
: Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
: Returns - One of the ShowMessageBoxResult values.
: since 6.0

static [ShowMessageResult](/rhinocommon/rhino/ui/showmessageresult/) ShowMessage(string message,string title,ShowMessageButton buttons,ShowMessageIcon icon)
: Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
: Returns - One of the ShowMessageBoxResult values.
: since 6.0

static System.Windows.Forms.DialogResult ShowMessageBox(string message,string title)
: Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.

static System.Windows.Forms.DialogResult ShowMessageBox(string message,string title,MessageBoxButtons buttons,MessageBoxIcon icon)
: Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.

static string[] ShowMultiListBox(string title,string message,IList<string> items,IList<string> defaults)
: Displays Rhino's multiple selection list box.
: Returns - The selected items if successful, None on cancel.
: since 5.12

static bool ShowNumberBox(string title,string message,double number)
: Displays Rhino's number edit box.
: Returns - True of OK was clicked, False otherwise.

static bool ShowNumberBox(string title,string message,double number,double minimum,double maximum)
: Displays Rhino's number edit box.
: Returns - True of OK was clicked, False otherwise.

static string[] ShowPropertyListBox(string title,string message,IList items,IList<string> values)
: Displays Rhino's property list box.
: Returns - A list of property values if successful, None otherwise.

static bool ShowSelectLayerDialog(int layerIndex,string dialogTitle,bool showNewLayerButton,bool showSetCurrentButton,bool initialSetCurrentState)
: Displays Rhino's single layer selection dialog.
: Returns - True if the dialog was closed with the OK button. False if the dialog was closed with escape.

static bool ShowSelectLinetypeDialog(int linetypeIndex,bool displayByLayer)
: Displays Rhino's single linetype selection dialog.
: Returns - True if the dialog was closed with the OK button. False if the dialog was closed with escape.
: since 6.0

static bool ShowSelectMultipleLayersDialog(IEnumerable<int> defaultLayerIndices,string dialogTitle,bool showNewLayerButton,int[] layerIndices)
: 
: Returns - True if the dialog was closed with the OK button. False if the dialog was closed with escape.
: since 5.9

static System.Windows.Forms.DialogResult ShowSemiModal(Form form)
: Show a windows form that is modal in the sense that this function does not return until
       the form is closed, but also allows for interaction with other elements of the Rhino
       user interface.
: Returns - One of the System.Windows.Forms.DialogResult values.

static bool ShowSunDialog(Sun sun)
: Show the tabbed sun dialog.
: Returns - Returns True if the user clicked OK, or False if the user cancelled.
: since 6.0

static void ShowTextDialog(string message,string title)
: Display a text dialog similar to the dialog used for the "What" command.
