---
title: "SelectionFilterSettingsState"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Represents a snapshot of .
```cs
public class SelectionFilterSettingsState
```
## Properties

bool Enabled
: Enables or disables the global object selection filter.
: since 7.0

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) GlobalGeometryFilter
: The global geometry type filter controls which types of geometry will be be filtered.
     Note, the filter can be a bitwise combination of multiple object types.
: since 7.0

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) OneShotGeometryFilter
: The one-shot geometry type filter controls which types of geometry will be be filtered for one selection.
     Note, the filter can be a bitwise combination of multiple object types.
: since 7.0

bool SubObjectSelect
: Enables or disabled sub-object selection.
: since 7.0
