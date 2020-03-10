---
title: "Rhino.UI.Gumball.GumballDisplayConduit"
draft: false
---

# Constructors
## Rhino.UI.Gumball.GumballDisplayConduit()
- (summary) 
- (since) 5.0
# Properties
## GumballObject BaseGumball
- (summary) Starting location.
- (since) 5.0
## bool Enabled
- (summary) 
- (since) 5.0
## GumballObject Gumball
- (summary) 
- (since) 5.0
## Transform GumballTransform
- (summary) 
     The gumball transformation is the transformation calculated by comparing
     the current gumball to the starting BaseGumball.
     
- (since) 5.0
## bool InRelocate
- (summary) 
- (since) 5.0
## GumballPickResult PickResult
- (summary) The inital mouse down event sets PickResult.
- (since) 5.0
## Transform PreTransform
- (summary) 
     The pre-transform is a transformation that needs to be applied before
     the gumball transformation.
     
- (since) 5.0
## Transform TotalTransform
- (summary) 
     The total transformation is GumballTransform * PreTransform.
     
- (since) 5.0
# Methods
## void CheckShiftAndControlKeys()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool PickGumball(PickContext pickContext,GetPoint getPoint)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void SetBaseGumball(GumballObject gumball)
- (summary) 
     Contents of the gumball are copied to the base gumball of this class.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetBaseGumball(GumballObject gumball,GumballAppearanceSettings appearanceSettings)
- (summary) 
     Contents of the gumball are copied to the base gumball of this class.
     
- (since) 5.0
- (returns) void This is some return comment
## bool UpdateGumball(Point3d point,Line worldLine)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
