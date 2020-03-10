---
title: "Rhino.UI.ObjectPropertiesPageEventArgs"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.UI.ObjectPropertiesPageEventArgs(ObjectPropertiesPage page)
- (summary) 
     Used by  to notify the page when
     updating, modifying or determining if the page should be included
     in the navigation bar
     
- (since) 6.0
# Properties
## uint DocRuntimeSerialNumber
- (summary) 
     Document containing the objects and views
     
- (since) 6.0
## RhinoDoc Document
- (summary) 
     Document containing the objects and views
     
- (since) 6.0
## uint EventRuntimeSerialNumber
- (summary) 
     Gets the runtime serial number.
     
- (since) 6.14
## int ObjectCount
- (summary) 
- (since) 6.0
## RhinoObject[] Objects
- (summary) 
     Return a list of Rhino objects to be processed by this object properties page
     
- (since) 6.0
## uint ObjectTypes
- (summary) 
- (since) 6.0
## ObjectPropertiesPage Page
- (summary) 
     The page sending these arguments
     
- (since) 6.0
## RhinoView View
- (summary) 
     Active view
     
- (since) 6.0
## RhinoViewport Viewport
- (summary) 
     Active viewport
     
- (since) 6.0
# Methods
## T[] GetObjects()
- (summary) 
     Get selected objects of a given type
     
- (since) 6.0
- (returns) T[] This is some return comment
## RhinoObject[] GetObjects(ObjectType filter)
- (summary) 
     Get selected objects that match a given filter
     
- (since) 6.0
- (returns) RhinoObject[] This is some return comment
## bool IncludesObjectsType()
- (summary) 
     Return True if any of the selected objects match the given type
     
- (since) 6.0
- (returns) bool This is some return comment
## bool IncludesObjectsType(bool allMustMatch)
- (summary) 
     Return True if any of the selected objects match the given type
     
- (since) 6.7
- (returns) bool This is some return comment
## bool IncludesObjectsType(ObjectType objectTypes)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool IncludesObjectsType(ObjectType objectTypes,bool allMustMatch)
- (summary) 
- (since) 6.7
- (returns) bool This is some return comment
