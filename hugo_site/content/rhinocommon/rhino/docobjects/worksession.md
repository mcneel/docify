---
title: "Worksession"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Manages a list of models that are being used as reference geometry.
```cs
public class Worksession
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Gets the document that owns this worksession.
: since 6.0

string FileName
: Returns the path to the open worksession, or .rws, file. 
     If there is no worksession file open, or the active worksession
     has not yet been saved, then None is returned.
: since 6.0

int ModelCount
: Returns the number of models in the worksession. The active model will included
     in this count whether or not it has been saved.
: since 6.0

string[] ModelPaths
: Returns the paths to the models used by the worksession. If the active model has
     not been saved, then it will not be included in the output array.
: since 6.0

uint RuntimeSerialNumber
: Unique serial number for the worksession while the application is running.
     This is not a persistent value.
: since 6.3
## Methods

static string FileNameFromRuntimeSerialNumber(uint runtimeSerialNumber)
: Returns the path to the open worksession, or .rws, file. 
     If there is no worksession file open, or the active worksession
     has not yet been saved, then None is returned.
: since 6.3

string ModelPathFromSerialNumber(uint modelSerialNumber)
: Returns the path to a model, used by the worksession, given a reference model serial number
: Returns - The path to the model if successful, None otherwise.
: since 6.12
