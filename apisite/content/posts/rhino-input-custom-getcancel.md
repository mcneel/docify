---
title: "GetCancel"
draft: false
---

*Namespace: Rhino.Input.Custom*
#### TaskCompleted
- (summary) 
- (since) 6.0
## Constructors
#### Rhino.Input.Custom.GetCancel()
- (summary) 
- (since) 6.0
## Properties
#### IProgress<double> Progress
- (summary) 
- (since) 6.0
#### string ProgressMessage
- (summary) 
- (since) 6.0
#### bool ProgressReporting
- (summary) 
- (since) 6.0
#### CancellationToken Token
- (summary) 
- (since) 6.0
## Methods
#### Result Wait(Task task,RhinoDoc doc)
- (summary) 
     Awaits a particular task to finish.
     
- (since) 7.0
- (returns) Result This is some return comment
#### Result Wait(Task<TResult> task,RhinoDoc doc)
- (summary) 
     Awaits a particular task to finish.
     
- (since) 6.0
- (returns) Result This is some return comment
#### Result WaitAll(IEnumerable<Task<TResult>> tasks,RhinoDoc doc)
- (summary) 
     Awaits some tasks to finish.
     
- (since) (unknown)
- (returns) Result This is some return comment
#### Result WaitAll(IEnumerable<Task> tasks,RhinoDoc doc)
- (summary) 
     Awaits some tasks to finish.
     
- (since) 7.0
- (returns) Result This is some return comment
