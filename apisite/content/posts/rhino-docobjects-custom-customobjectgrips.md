---
title: "CustomObjectGrips"
draft: false
---

*Namespace: Rhino.DocObjects.Custom*
## Properties
#### int GripCount
- (summary) 
- (since) 5.0
#### bool GripsMoved
- (summary) 
     If GripsMoved is True if some of the grips have ever been moved
     GripObject.NewLocation() sets GripsMoved=true.
     
- (since) 5.0
#### bool NewLocation
- (summary) 
     True if some of the grips have been moved. GripObject.NewLocation() sets
     NewLocation=true.  Derived classes can set NewLocation to False after 
     updating temporary display information.
     
- (since) 5.0
#### Rhino.DocObjects.RhinoObject OwnerObject
- (summary) Owner of the grips.
- (since) 5.0
## Methods
#### static bool Dragging()
- (summary) 
     Determines if grips are currently being dragged.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static void RegisterGripsEnabler(TurnOnGripsEventHandler enabler,Type customGripsType)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### CustomGripObject Grip(int index)
- (summary) 
- (since) 5.0
- (returns) CustomGripObject This is some return comment
