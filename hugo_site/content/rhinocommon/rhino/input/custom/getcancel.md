---
title: "GetCancel"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

```cs
public class GetCancel : GetBaseClass
```

TaskCompleted
: 
: since 6.0
## Constructors

GetCancel()
: 
: since 6.0
## Properties

IProgress<double> Progress
: 
: since 6.0

string ProgressMessage
: 
: since 6.0

bool ProgressReporting
: 
: since 6.0

CancellationToken Token
: 
: since 6.0
## Methods

[Result](/rhinocommon/rhino/commands/result/) Wait(Task task,RhinoDoc doc)
: Awaits a particular task to finish.
: Returns - A result enumeration.
: since 7.0

[Result](/rhinocommon/rhino/commands/result/) Wait(Task<TResult> task,RhinoDoc doc)
: Awaits a particular task to finish.
: Returns - A result enumeration.
: since 6.0

[Result](/rhinocommon/rhino/commands/result/) WaitAll(IEnumerable<Task<TResult>> tasks,RhinoDoc doc)
: Awaits some tasks to finish.
: Returns - A result enumeration.
: since (unknown)

[Result](/rhinocommon/rhino/commands/result/) WaitAll(IEnumerable<Task> tasks,RhinoDoc doc)
: Awaits some tasks to finish.
: Returns - A result enumeration.
: since 7.0
