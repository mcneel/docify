---
title: "ThumbnailList"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Controls.Thumbnaillist](../)*

```cs
public class ThumbnailList : Eto.Forms.Panel, IThumbnailList
```
## Constructors

ThumbnailList()
: 
: since (unknown)
## Properties

ContentEditingContext CEC
: 
: since (unknown)

bool Created
: 
: since (unknown)

bool Enabled
: 
: since (unknown)

string EnglishCaption
: 
: since (unknown)

bool Hidden
: 
: since (unknown)

IntPtr HolderParent
: 
: since (unknown)

string LocalCaption
: 
: since (unknown)

bool Shown
: 
: since (unknown)

RdkThumbnaillistViewModel ViewModel
: 
: since (unknown)
## Methods

void Add(IRhRdkThumbnail t)
: 
: since (unknown)

void Clear()
: 
: since (unknown)

Rhino.Render.RenderContent ContentFromThumbId(Guid uuidThumb)
: 
: since (unknown)

[IRhRdkThumbnail](/rhinocommon/rhino/ui/controls/thumbnailui/irhrdkthumbnail/) Get(Guid u)
: 
: since (unknown)

void GetGridMetrics(int w,int h,int ox,int oy)
: 
: since (unknown)

[IRhRdkContentThumbnailList_Sizes](/rhinocommon/rhino/ui/controls/thumbnailui/irhrdkcontentthumbnaillist_sizes/) GetSize()
: 
: since (unknown)

void GetStatisticsHeaderHeight()
: 
: since (unknown)

[IRhRdkThumbnailList_Modes](/rhinocommon/rhino/ui/controls/thumbnailui/irhrdkthumbnaillist_modes/) Mode()
: 
: since (unknown)

void Move(Rectangle rect,bool bRepaint,bool bRepaintNC)
: 
: since (unknown)

bool PropagateSelectedAppearance()
: 
: since (unknown)

void SaveMetaDataToDocument()
: 
: since (unknown)

Rhino.Render.PreviewAppearance SelectedAppearance()
: 
: since (unknown)

void SetClientText(string w)
: 
: since (unknown)

void SetCustomBitmapSize(int w,int h)
: 
: since (unknown)

void SetMode(IRhRdkThumbnailList_Modes m,bool b)
: 
: since (unknown)

void SetSearchPattern(string w)
: 
: since (unknown)

void SetSettingsPath(string w)
: 
: since (unknown)

void SetShowLabels(bool b)
: 
: since (unknown)

[IRhRdkThumbnailList_Shapes](/rhinocommon/rhino/ui/controls/thumbnailui/irhrdkthumbnaillist_shapes/) Shape()
: 
: since (unknown)

bool ShowLabels()
: 
: since (unknown)

Guid UUID()
: 
: since (unknown)

void ViewModelActivated()
: 
: since (unknown)
