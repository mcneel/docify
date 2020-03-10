---
title: "Rhino.ApplicationSettings.HistorySettings"
draft: false
---

# Properties
## static bool BrokenRecordWarningEnabled
- (summary) 
     Displays a warning dialog when an action is taken that breaks the link between the output and input objects. 
     
- (since) 6.10
## static bool ObjectLockingEnabled
- (summary) 
     When history object locking is enabled, objects with history on them act as if
     they were locked and the only way to modify these objects is to edit their inputs.
     
- (since) 5.0
## static bool RecordingEnabled
- (summary) 
     When history recording is enabled, new objects keep a record of how they
     were constructed so that they can be updated if an input object changes.
     
- (since) 5.0
## static bool UpdateEnabled
- (summary) 
     When history update is enabled, dependant objects are automatically updated
     when an antecedent is modified.
     
- (since) 5.0
