---
title: "RenderContentCollection"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderContentCollection : IDisposable, IEnumerable
```
## Constructors

RenderContentCollection()
: 
: since 6.0

RenderContentCollection(IntPtr nativePtr)
: 
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0
## Methods

void Add(RenderContentCollection collection)
: 
: since 6.0

void Append(RenderContent content)
: 
: since 6.0

void Clear()
: 
: since 6.0

[RenderContent](/rhinocommon/rhino/render/rendercontent/) ContentAt(int index)
: 
: since 6.0

bool ContentNeedsPreviewThumbnail(RenderContent c)
: 
: since 7.0

bool ContentNeedsPreviewThumbnail(RenderContent c,bool bIncludeChildren)
: 
: since 7.0

int Count()
: 
: since 6.0

void Dispose()
: 
: since 6.0

[RenderContent](/rhinocommon/rhino/render/rendercontent/) Find_Sel(Guid uuid)
: 
: since 6.0

string FirstTag()
: 
: since 6.13

IEnumerator GetEnumerator()
: 
: since 6.0

[FilterContentByUsage](/rhinocommon/rhino/render/filtercontentbyusage/) GetFilterContentByUsage()
: 
: since 6.9

bool GetForcedVaries()
: 
: since 6.9

string GetSearchPattern()
: 
: since 6.0

[ContentCollectionIterator](/rhinocommon/rhino/render/contentcollectioniterator/) Iterator()
: 
: since 6.0

string NextTag()
: 
: since 6.13

void Remove(RenderContentCollection collection)
: 
: since 6.0

void Set(RenderContentCollection collection)
: 
: since 6.0

void SetForcedVaries(bool b)
: 
: since 6.9

void SetSearchPattern(string pattern)
: 
: since 6.0
