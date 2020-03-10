---
title: "Rhino.Render.LinearWorkflow"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Render.LinearWorkflow()
- (summary) 
     Create an utility object not associated with any document
     
- (since) 6.0
## Rhino.Render.LinearWorkflow(LinearWorkflow src)
- (summary) 
     Create utility object not associated with any document from another object 
     
- (since) 6.0
# Properties
## uint Hash
- (summary) 
     Linear workflow CRC
     
- (since) 6.0
## bool PostProcessFrameBuffer
- (summary) 
     Linear workflow active state
     
- (since) 6.0
## float PostProcessGamma
- (summary) 
     Linear workflow gamma
     
- (since) 6.0
## float PostProcessGammaReciprocal
- (summary) 
     Linear workflow gamma
     
- (since) 6.0
## bool PreProcessColors
- (summary) 
     Linear workflow active state
     
- (since) 6.0
## float PreProcessGamma
- (summary) 
     Linear workflow gamma
     
- (since) 6.0
## bool PreProcessTextures
- (summary) 
     Linear workflow active state
     
- (since) 6.0
# Methods
## void CopyFrom(FreeFloatingBase src)
- (summary) 
     Create a copy of linearworkflow
     
- (since) 6.0
- (returns) void This is some return comment
## bool Equals(object obj)
- (summary) 
     Compare two LinearWorkflow objects. They are considered equal when
     their Hashes match.
     
- (since) (unknown)
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Get hash code for this object. It is the Hash property cast to int.
     
- (since) (unknown)
- (returns) int This is some return comment
