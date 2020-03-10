---
title: "ScaleValue"
draft: false
---

*Namespace: Rhino*

   Represents a scale with associated LengthValues and string representations
   of the scale. This allows for going back and forth from numerical
   representations of a scale and a string representation without "guessing"
   at the initial scale.
   
## Constructors
#### Rhino.ScaleValue()
- (summary) 
     Default constructor
     
- (since) 6.0
## Properties
#### double LeftToRightScale
- (summary) 
     LeftLengthValue / RightLengthValue
     
- (since) 6.0
#### double RightToLeftScale
- (summary) 
     RightLengthValue / LeftLengthValue
     
- (since) 6.0
## Methods
#### static ScaleValue Create(LengthValue left,LengthValue right,ScaleStringFormat format)
- (summary) 
     Create from 2 length values
     
- (since) 6.0
- (returns) ScaleValue This is some return comment
#### static ScaleValue Create(string s,StringParserSettings ps)
- (summary) 
     Create from string
     
- (since) 6.0
- (returns) ScaleValue This is some return comment
#### static ScaleValue OneToOne()
- (summary) 
     Make a new ScaleValue set to OneToOne
     
- (since) 6.0
- (returns) ScaleValue This is some return comment
#### void Dispose()
- (summary) actively reclaim native allocated ON_SacleValue*
- (since) 6.0
- (returns) void This is some return comment
#### bool IsUnset()
- (summary) 
     Test IsUnset
     
- (since) 6.0
- (returns) bool This is some return comment
#### LengthValue LeftLengthValue()
- (summary) 
     Get the Left LengthValue from Scale
     
- (since) 6.0
- (returns) LengthValue This is some return comment
#### LengthValue RightLengthValue()
- (summary) 
     Get the Right LengthValue from Scale
     
- (since) 6.0
- (returns) LengthValue This is some return comment
