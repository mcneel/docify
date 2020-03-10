---
title: "Dialogs"
draft: false
---

*Namespace: Rhino.UI*
## Methods
#### static void KillSplash()
- (summary) 
       Destroy the splash screen if it is being displayed.
       
- (since) 5.0
- (returns) void This is some return comment
#### static void SetCustomColorDialog(EventHandler<GetColorEventArgs> handler)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### static void ShowAboutDialog(bool forceSimpleDialog)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### static bool[] ShowCheckListBox(string title,string message,IList items,IList<bool> checkState)
- (summary) 
       Displays Rhino's check list box.
       
- (since) 5.0
- (returns) bool[] This is some return comment
#### static bool ShowColorDialog(Color color)
- (summary) 
       Display Rhino's color selection dialog.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowColorDialog(Color color,bool includeButtonColors,string dialogTitle)
- (summary) 
       Display Rhino's color selection dialog.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowColorDialog(Color4f color,bool allowAlpha)
- (summary) 
       Displays the standard modal color picker dialog for floating point colors.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowColorDialog(IWin32Window parent,Color4f color,bool allowAlpha)
- (summary) 
       Displays the standard modal color picker dialog for floating point colors.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowColorDialog(object parent,Color4f color,bool allowAlpha)
- (summary) 
       Displays the standard modal color picker dialog for floating point colors.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static bool ShowColorDialog(object parent,Color4f color,bool allowAlpha,OnColorChangedEvent colorCallback)
- (summary) 
       Displays the standard modal color picker dialog for floating point colors.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static object ShowComboListBox(string title,string message,IList items)
- (summary) 
       Displays Rhino's combo list box.
       
- (since) 5.0
- (returns) object This is some return comment
#### static int ShowContextMenu(IEnumerable<string> items,Point screenPoint,IEnumerable<int> modes)
- (summary) 
       Creates an ETO ContextMenu from an array of strings. Use the modes array to enable/disable menu items
       
- (since) 5.0
- (returns) int This is some return comment
#### static bool ShowEditBox(string title,string message,string defaultText,bool multiline,string text)
- (summary) 
       Displays Rhino's string edit box.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static object ShowLineTypes(string title,string message,RhinoDoc doc)
- (summary) 
       Displays Rhino's LineType list box.
       
- (since) 6.7
- (returns) object This is some return comment
#### static object ShowListBox(string title,string message,IList items)
- (summary) 
       Displays Rhino's list box.
       
- (since) 5.0
- (returns) object This is some return comment
#### static object ShowListBox(string title,string message,IList items,object selectedItem)
- (summary) 
       Displays Rhino's list box.
       
- (since) 5.0
- (returns) object This is some return comment
#### static ShowMessageResult ShowMessage(object parent,string message,string title,ShowMessageButton buttons,ShowMessageIcon icon,ShowMessageDefaultButton defaultButton,ShowMessageOptions options,ShowMessageMode mode)
- (summary) 
       Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
       
- (since) 6.0
- (returns) ShowMessageResult This is some return comment
#### static ShowMessageResult ShowMessage(string message,string title)
- (summary) 
       Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
       
- (since) 6.0
- (returns) ShowMessageResult This is some return comment
#### static ShowMessageResult ShowMessage(string message,string title,ShowMessageButton buttons,ShowMessageIcon icon)
- (summary) 
       Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
       
- (since) 6.0
- (returns) ShowMessageResult This is some return comment
#### static System.Windows.Forms.DialogResult ShowMessageBox(string message,string title)
- (summary) 
       Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
       
- (since) 5.0
- (returns) System.Windows.Forms.DialogResult This is some return comment
#### static System.Windows.Forms.DialogResult ShowMessageBox(string message,string title,MessageBoxButtons buttons,MessageBoxIcon icon)
- (summary) 
       Same as System.Windows.Forms.MessageBox.Show but using a message box tailored to Rhino.
       
- (since) 5.0
- (returns) System.Windows.Forms.DialogResult This is some return comment
#### static string[] ShowMultiListBox(string title,string message,IList<string> items,IList<string> defaults)
- (summary) 
       Displays Rhino's multiple selection list box.
       
- (since) 5.12
- (returns) string[] This is some return comment
#### static bool ShowNumberBox(string title,string message,double number)
- (summary) 
       Displays Rhino's number edit box.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowNumberBox(string title,string message,double number,double minimum,double maximum)
- (summary) 
       Displays Rhino's number edit box.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static string[] ShowPropertyListBox(string title,string message,IList items,IList<string> values)
- (summary) 
       Displays Rhino's property list box.
       
- (since) 5.0
- (returns) string[] This is some return comment
#### static bool ShowSelectLayerDialog(int layerIndex,string dialogTitle,bool showNewLayerButton,bool showSetCurrentButton,bool initialSetCurrentState)
- (summary) 
       Displays Rhino's single layer selection dialog.
       
- (since) 5.0
- (returns) bool This is some return comment
#### static bool ShowSelectLinetypeDialog(int linetypeIndex,bool displayByLayer)
- (summary) 
       Displays Rhino's single linetype selection dialog.
       
- (since) 6.0
- (returns) bool This is some return comment
#### static bool ShowSelectMultipleLayersDialog(IEnumerable<int> defaultLayerIndices,string dialogTitle,bool showNewLayerButton,int[] layerIndices)
- (summary) 
- (since) 5.9
- (returns) bool This is some return comment
#### static System.Windows.Forms.DialogResult ShowSemiModal(Form form)
- (summary) 
       Show a windows form that is modal in the sense that this function does not return until
       the form is closed, but also allows for interaction with other elements of the Rhino
       user interface.
       
- (since) 5.0
- (returns) System.Windows.Forms.DialogResult This is some return comment
#### static bool ShowSunDialog(Sun sun)
- (summary) Show the tabbed sun dialog.
- (since) 6.0
- (returns) bool This is some return comment
#### static void ShowTextDialog(string message,string title)
- (summary) 
       Display a text dialog similar to the dialog used for the "What" command.
       
- (since) 5.0
- (returns) void This is some return comment
