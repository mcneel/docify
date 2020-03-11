---
title: "Field"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.Fields](../)*

Generic data fields used to add publicly accessible properties to
   RenderContent.FieldDictionary.  These should be created by calling a
   FieldDictaionary.Add() method on a Render content object.  These are
   allocated after the RenderContent object's C++ object is created and
   added to the underlying C++ objects content dictionary, who ever
   allocates a field is responsible for deleting it so these objects clean
   up the C++ pointers when they are disposed of.
```cs
public class Field
```
## Properties

string Key
: Field name value string passed to the constructor
: since 5.1

string Name
: Field name value string passed to the constructor.
: since 6.0

object Tag
: Gets or sets an object that contains data to associate with the field.
: Returns - An object that contains information that is associated with the field.
: since 5.1

int TextureAmountMax
: Set Max value for Texture amount
: since 7.0

int TextureAmountMin
: Set Min value for Texture amount
: since 7.0
## Methods

T GetValue()
: Parametrized version of GetValue calling appropriate ValueAs* methods.
: Returns - Value of type T of the field
: since 6.12

object ValueAsObject()
: 
: since 5.7
