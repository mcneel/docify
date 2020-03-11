---
title: "PreviewBackground"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

PreviewBackGround takes care of constucting and desctrutction of PreviewLight
```cs
public class PreviewBackground
```
## Constructors

PreviewBackground(IntPtr pPreviewBackground)
: Constructor for PreivewLighting
: since 6.0
## Properties

IntPtr CppPointer
: CppPointer for PreivewLighting
: since 6.0
## Methods

string ElementKind()
: ElementKind
: since 6.0

Guid EnvironmentInstanceId()
: EnvironmentInstanceId
: since 6.0

void SetEnvironmentInstanceId(Guid guid)
: SetEnvironmentInstanceId
: since 6.0

void SetUpPreview(IntPtr sceneServerPointer,Guid guid)
: SetUpPreview
: since 6.0
