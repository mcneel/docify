---
title: "LinearWorkflow"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

This is the interface to linear workflow settings.
```cs
public class LinearWorkflow : DocumentOrFreeFloatingBase
```
## Constructors

LinearWorkflow()
: Create an utility object not associated with any document
: since 6.0

LinearWorkflow(LinearWorkflow src)
: Create utility object not associated with any document from another object
: since 6.0
## Properties

uint Hash
: Linear workflow CRC
: since 6.0

bool PostProcessFrameBuffer
: Linear workflow active state
: since 6.0

float PostProcessGamma
: Linear workflow gamma
: since 6.0

float PostProcessGammaReciprocal
: Linear workflow gamma
: since 6.0

bool PreProcessColors
: Linear workflow active state
: since 6.0

float PreProcessGamma
: Linear workflow gamma
: since 6.0

bool PreProcessTextures
: Linear workflow active state
: since 6.0
## Methods

void CopyFrom(FreeFloatingBase src)
: Create a copy of linearworkflow
: since 6.0

bool Equals(object obj)
: Compare two LinearWorkflow objects. They are considered equal when
     their Hashes match.
: since (unknown)

int GetHashCode()
: Get hash code for this object. It is the Hash property cast to int.
: since (unknown)
