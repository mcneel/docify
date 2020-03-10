---
title: "Rhino.Input.Custom.GetLine"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Input.Custom.GetLine()
- (summary) 
- (since) 5.1
# Properties
## bool AcceptZeroLengthLine
- (summary) 
     Controls whether or not a zero length line is acceptable.
     The default is to require the user to keep picking the end
     point until we get a point different than the start point.
     
- (since) 5.1
## System.Drawing.Color FeedbackColor
- (summary) 
     If set, the feedback color is used to draw the dynamic
     line when the second point is begin picked.  If not set,
     the active layer color is used.
     
- (since) 5.1
## string FirstPointPrompt
- (summary) Prompt when getting first point
- (since) 5.1
## double FixedLength
- (summary) 
     If FixedLength > 0, the line must have the specified length
     
- (since) 5.1
## GetLineMode GetLineMode
- (summary) 
     Mode used
     
- (since) 5.1
## bool HaveFeedbackColor
- (summary) 
     If true, the feedback color is used to draw the dynamic
     line when the second point is begin picked.  If false,
     the active layer color is used.
     
- (since) 5.1
## string MidPointPrompt
- (summary) Prompt when getting midpoint
- (since) 5.1
## string SecondPointPrompt
- (summary) Prompt when getting second point
- (since) 5.1
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.1
- (returns) void This is some return comment
## void EnableAllVariations(bool on)
- (summary) 
     If true, then all line variations are shown if the default line mode is used
     
- (since) 5.1
- (returns) void This is some return comment
## void EnableFromBothSidesOption(bool on)
- (summary) 
     If true, then the "BothSides" option shows up when the
     start point is inteactively picked.
     
- (since) 5.1
- (returns) void This is some return comment
## void EnableFromMidPointOption(bool on)
- (summary) 
     If true, the the "MidPoint" options shows up
     
- (since) 5.1
- (returns) void This is some return comment
## Commands.Result Get(Line line)
- (summary) 
     Perform the 'get' operation.
     
- (since) 5.1
- (returns) Commands.Result This is some return comment
## void SetFirstPoint(Point3d point)
- (summary) 
     Use SetFirstPoint to specify the line's starting point and skip
     the start point interactive picking
     
- (since) 5.1
- (returns) void This is some return comment
