---
title: "PreviewAppearance"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

PreviewAppearance class
```cs
public class PreviewAppearance : IDisposable
```
## Constructors

PreviewAppearance(IntPtr pRenderContent)
: Constructor for previewappearance
: since 6.0
## Properties

IntPtr CppPointer
: Previewappearances c++ pointer
: since 6.0

[MetaData](/rhinocommon/rhino/render/datasources/metadata/) MetaData
: Previewappearance MetaData
: since 6.0
## Methods

[PreviewBackground](/rhinocommon/rhino/render/previewbackground/) Background()
: Background
: since 6.0

void Dispose()
: Dispose for previewappearance
: since 6.0

void FromMetaData(MetaData md)
: Copy data from MetaData to PreviewAppearance
: since 6.0

[PreviewGeometry](/rhinocommon/rhino/render/previewgeometry/) Geometry()
: Geometry
: since 6.0

[PreviewLighting](/rhinocommon/rhino/render/previewlighting/) Lighting()
: Lighting
: since 6.0

[IRhRdkPreviewSceneServer_eRotationType](/rhinocommon/rhino/render/irhrdkpreviewsceneserver_erotationtype/) RotationType()
: RotationType
: since 6.0

double RotationX()
: RotationX
: since 6.0

double RotationY()
: RotationY
: since 6.0

void SetRotationType(IRhRdkPreviewSceneServer_eRotationType type)
: SetRotationType
: since 6.0

void SetRotationX(double d)
: SetRotationX
: since 6.0

void SetRotationY(double d)
: SetRotationY
: since 6.0

void SetSize(double d)
: SetSize
: since 6.0

double Size()
: Size
: since 6.0

void ToMetaData()
: Copy PreviewAppearance to MetaData
: since 6.0

void ToMetaData(MetaDataProxy mdp)
: Copy PreviewAppearance to MetaData
: since 6.8
