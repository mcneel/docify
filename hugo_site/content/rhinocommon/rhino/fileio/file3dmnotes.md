---
title: "File3dmNotes"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Represents the notes information stored in a 3dm file.
```cs
public class File3dmNotes
```
## Constructors

File3dmNotes()
: Creates empty default notes
## Properties

bool IsHtml
: Gets or sets the text format. If the format is HTML, true; False otherwise.

bool IsVisible
: Gets or sets the notes visibility. If the notes are visible, true; False otherwise.

string Notes
: Gets or sets the text content of the notes.

Rectangle WindowRectangle
: Gets or sets the position of the Notes when they were saved.
