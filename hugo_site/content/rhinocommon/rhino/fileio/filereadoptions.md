---
title: "FileReadOptions"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

```cs
public class FileReadOptions : IDisposable
```
## Constructors

FileReadOptions()
: 
## Properties

bool BatchMode
: True means you cannot ask questions during reading. (no dialogs, no "getters", etc.)

bool ImportMode
: True means we are merging whatever is being read into an existing document.
      This means you need to consider things like:
     
     If the information being read is in a different unit system, it should be
     scaled if UseScaleGeometry is true.
     
     There can be existing layers, fonts, materials, dimension styles, hatch
     patterns, and so on with the same name as items being read from the file.

bool ImportReferenceMode
: True means we are reading information for a work session reference model
     or a linked instance definition.

bool InsertMode
: True means we are reading information that will be used to create an
     instance definition or some other type of "inserting" that is supported
     by Rhino's "Insert" command.

bool NewMode
: True means we are reading template information in something like
     a OnFileNew event.

bool OpenMode
: True means we are reading the information into an empty document.  This
     means you need to consider things like:
     Setting the unit system (if the file has a unit system)Creating a default layer if one is not there.Setting up appropriate views when you're finished reading.

bool ScaleGeometry
: true: If ImportMode is True and the geometry in the file being read has
     a unit system different from the model's unit system, then apply the unit
     conversion scale to the file's geometry before adding it to the model.
     
     false: Do not scale. Once case where this happens is when an instance
     definition is read from a file and the model space instance references
     have been scaled. In case the instance definition geometry cannot be
     scaled or the net result is that the size of the instance reference
     object is scaled by the square of the scale factor.

bool UseScaleGeometry
: If this parameter is true, then no questions are asked when unit conversion
     scaling is optional and the setting specified by ScaleGeometry is used.
## Methods

void Dispose()
: 
