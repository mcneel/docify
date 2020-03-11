---
title: "Thumbnail"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Controls.ThumbnailUI](../)*

```cs
[Obsolete("Thumbnail is obsolete", false)]
public class Thumbnail : IRhRdkThumbnail, IDisposable
```
## Constructors

Thumbnail(IntPtr pRdkThumbnail)
: Constructor for Thumbnail
: since 6.0
## Properties

IntPtr CppPointer
: Thumbnail c++ pointer
: since 6.0
## Methods

void Dib(Bitmap dibOut)
: 
: since 6.0

void Dispose()
: Dispose for Thumbnail
: since 6.0

System.Drawing.Bitmap GetDib()
: 
: since 6.0

void GetDisplayRect(RectangleF rectOut)
: 
: since 6.0

Guid Id()
: 
: since 6.0

bool IsHot()
: 
: since 6.0

bool IsSelected()
: 
: since 6.0

string Label()
: 
: since 6.0
