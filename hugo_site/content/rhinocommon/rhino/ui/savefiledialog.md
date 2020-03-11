---
title: "SaveFileDialog"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Similar to the System.Windows.Forms.SaveFileDialog, but with customized
   Rhino user interface.
```cs
public class SaveFileDialog
```
## Constructors

SaveFileDialog()
: 
## Properties

string DefaultExt
: The default file name extension. The returned string does not include the period.

string FileName
: Gets or sets a string containing the file name selected in the file dialog box.

string Filter
: Gets or sets the current file name filter string, which determines
     the choices that appear in the "Save as file type" or "Files of type"
     box in the dialog box. See System.Windows.Forms.FileDialog for details.

string InitialDirectory
: Gets or sets the initial directory displayed by the file dialog box.

string Title
: Gets or sets the file dialog box title.
## Methods

System.Windows.Forms.DialogResult ShowDialog()
: 

bool ShowSaveDialog()
: 
: Returns - True if a file was selected. False if the dialog was cancelled
: since 5.10
