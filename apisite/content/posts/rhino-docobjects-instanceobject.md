---
title: "Rhino.DocObjects.InstanceObject"
draft: false
---

# Properties
## Point3d InsertionPoint
- (summary) Basepoint coordinates of a block.
- (since) 5.0
## InstanceDefinition InstanceDefinition
- (summary) instance definition that this object uses.
- (since) 5.0
## Transform InstanceXform
- (summary) 
     transformation applied to an instance definition for this object.
     
- (since) 5.0
# Methods
## void Explode(bool explodeNestedInstances,RhinoObject[] pieces,ObjectAttributes[] pieceAttributes,Transform[] pieceTransforms)
- (summary) 
     Explodes the instance reference into pieces.
     
- (since) 5.0
- (returns) void This is some return comment
## bool UsesDefinition(int definitionIndex,int nestingLevel)
- (summary) Determine if this reference uses an instance definition
- (since) 5.2
- (returns) bool This is some return comment
