---
title: "CollapsibleSectionImpl"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Controls](../)*

```cs
public class CollapsibleSectionImpl : IMPL_CALLBACKS, IDisposable
```
## Constructors

CollapsibleSectionImpl(ICollapsibleSection section)
: 
: since 6.0
## Events

DataChanged
: 
: since 6.0

ViewModelActivated
: 
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0

[IRdkViewModel](/rhinocommon/rhino/ui/controls/irdkviewmodel/) ViewModel
: 
: since 6.0
## Methods

static void CreateHostedSection(ICollapsibleSection section)
: 
: since 6.0

static [ICollapsibleSection](/rhinocommon/rhino/ui/controls/icollapsiblesection/) Find(IntPtr cpp)
: 
: since 6.0

static [ICollapsibleSection](/rhinocommon/rhino/ui/controls/icollapsiblesection/) GetSibling(ICollapsibleSection section,Guid siblingSectionId)
: 
: since 6.0

static [ICollapsibleSection](/rhinocommon/rhino/ui/controls/icollapsiblesection/)[] GetSiblings(ICollapsibleSection section)
: 
: since 6.0

static [ICollapsibleSection](/rhinocommon/rhino/ui/controls/icollapsiblesection/) NewNativeWrapper(IntPtr cpp)
: 
: since 6.0

void __InternalSetParent(IntPtr parent)
: 
: since 6.0

void Dispose()
: 
: since 6.0

bool IsSameObject(IntPtr cpp)
: 
: since 6.0

void ReplaceClient(ICollapsibleSection client)
: 
: since 6.0
