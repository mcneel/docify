---
title: "LightManagerSupportClient"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class LightManagerSupportClient : IDisposable
```
## Constructors

LightManagerSupportClient(uint doc_uuid)
: 
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0
## Methods

void DeleteLight(Light light)
: 
: since 6.0

void Dispose()
: 
: since 6.0

Rhino.Geometry.Light GetLightFromId(Guid uuid)
: 
: since 6.0

[LightArray](/rhinocommon/rhino/render/lightarray/) GetLights()
: 
: since 6.0

bool GetLightSolo(Light light)
: 
: since 6.0

void GroupLights(LightArray lights)
: 
: since 6.0

string LightDescription(Light light)
: 
: since 6.0

int LightsInSoloStorage()
: 
: since 6.0

void ModifyLight(Light light)
: 
: since 6.0

Rhino.DocObjects.RhinoObject ObjectFromLight(Light light)
: 
: since 6.0

void OnEditLight(LightArray lights)
: 
: since 6.0

bool SetLightSolo(Light light,bool bSolo)
: 
: since 6.0

void UnGroup(LightArray lights)
: 
: since 6.0
