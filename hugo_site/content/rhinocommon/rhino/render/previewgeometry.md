---
title: "PreviewGeometry"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

PreviewAppearance takes care of constucting and desctrutction of PreivewGeometry
```cs
public class PreviewGeometry
```
## Constructors

PreviewGeometry(IntPtr pPreviewGeometry)
: Constructor for PreviewGeometry
: since 6.0
## Properties

IntPtr CppPointer
: CppPointer for PreviewGeometry
: since 6.0
## Methods

string ElementKind()
: ElementKind
: since 6.0

void SetUpPreview(IntPtr sceneServerPointer,IntPtr pRenderContent,bool bCopy)
: SetUpPreview
: since 6.0
