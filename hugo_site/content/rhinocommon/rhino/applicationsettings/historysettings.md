---
title: "HistorySettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Provides static (Shared in Vb.Net) properties to modify Rhino History settings.
```cs
public class HistorySettings
```
## Properties

static bool BrokenRecordWarningEnabled
: Displays a warning dialog when an action is taken that breaks the link between the output and input objects.
: since 6.10

static bool ObjectLockingEnabled
: When history object locking is enabled, objects with history on them act as if
     they were locked and the only way to modify these objects is to edit their inputs.

static bool RecordingEnabled
: When history recording is enabled, new objects keep a record of how they
     were constructed so that they can be updated if an input object changes.

static bool UpdateEnabled
: When history update is enabled, dependant objects are automatically updated
     when an antecedent is modified.
