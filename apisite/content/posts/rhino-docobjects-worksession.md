---
title: "Rhino.DocObjects.Worksession"
draft: false
---

# Properties
## RhinoDoc Document
- (summary) 
     Gets the document that owns this worksession.
     
- (since) 6.0
## string FileName
- (summary) 
     Returns the path to the open worksession, or .rws, file. 
     If there is no worksession file open, or the active worksession
     has not yet been saved, then None is returned.
     
- (since) 6.0
## int ModelCount
- (summary) 
     Returns the number of models in the worksession. The active model will included
     in this count whether or not it has been saved.
     
- (since) 6.0
## string[] ModelPaths
- (summary) 
     Returns the paths to the models used by the worksession. If the active model has
     not been saved, then it will not be included in the output array.
     
- (since) 6.0
## uint RuntimeSerialNumber
- (summary) 
     Unique serial number for the worksession while the application is running.
     This is not a persistent value.
     
- (since) 6.3
# Methods
## static string FileNameFromRuntimeSerialNumber(uint runtimeSerialNumber)
- (summary) 
     Returns the path to the open worksession, or .rws, file. 
     If there is no worksession file open, or the active worksession
     has not yet been saved, then None is returned.
     
- (since) 6.3
- (returns) string This is some return comment
## string ModelPathFromSerialNumber(uint modelSerialNumber)
- (summary) 
     Returns the path to a model, used by the worksession, given a reference model serial number
     
- (since) 6.12
- (returns) string This is some return comment
