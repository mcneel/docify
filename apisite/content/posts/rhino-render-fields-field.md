---
title: "Field"
draft: false
---

*Namespace: Rhino.Render.Fields*

   Generic data fields used to add publicly accessible properties to
   RenderContent.FieldDictionary.  These should be created by calling a
   FieldDictaionary.Add() method on a Render content object.  These are
   allocated after the RenderContent object's C++ object is created and
   added to the underlying C++ objects content dictionary, who ever
   allocates a field is responsible for deleting it so these objects clean
   up the C++ pointers when they are disposed of.
   
## Properties
#### string Key
- (summary) 
     Field name value string passed to the constructor
     
- (since) 5.1
#### string Name
- (summary) 
     Field name value string passed to the constructor.
     
- (since) 6.0
#### object Tag
- (summary) 
     Gets or sets an object that contains data to associate with the field.
     
- (since) 5.1
#### int TextureAmountMax
- (summary) 
     Set Max value for Texture amount
     
- (since) 7.0
#### int TextureAmountMin
- (summary) 
     Set Min value for Texture amount
     
- (since) 7.0
## Methods
#### T GetValue()
- (summary) 
     Parametrized version of GetValue calling appropriate ValueAs* methods.
     
- (since) 6.12
- (returns) T This is some return comment
#### object ValueAsObject()
- (summary) 
- (since) 5.7
- (returns) object This is some return comment
