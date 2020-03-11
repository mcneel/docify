---
title: "MaterialRefs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

If you are developing a high quality plug-in renderer, and a user is
   assigning a custom render material to this object, then add rendering
   material information to the MaterialRefs dictionary.
   
   Note to developers:
    As soon as the MaterialRefs dictionary contains items rendering
    material queries slow down.  Do not populate the MaterialRefs
   dictionary when setting the MaterialIndex will take care of your needs.
```cs
public class MaterialRefs : IDictionary<Guid, MaterialRef>
```
## Properties

int Count
: Gets the number of elements contained in this dictionary
: since 5.10

bool IsReadOnly
: IDictionary required property, always returns False for this dictionary.
: since 5.10

ICollection<Guid> Keys
: Gets an ICollection containing the plug-in Id's in this dictionary.
: since 5.10

ICollection<MaterialRef> Values
: Gets an ICollection containing the MaterialRef objects in this
     dictionary.
: since 5.10
## Methods

void Add(Guid key,MaterialRef value)
: Add or replace an element with the provided key and value to this dictionary.
: since 5.10

void Add(KeyValuePair<Guid, MaterialRef> item)
: Adds an item to this dictionary.
: since (unknown)

void Clear()
: Removes all items from this dictionary.
: since 5.10

bool Contains(KeyValuePair<Guid, MaterialRef> item)
: Determines whether this dictionary contains a specific value.
: Returns - True if item is found in this dictionary; otherwise, false.
: since (unknown)

bool ContainsKey(Guid key)
: Determines whether this dictionary contains an MaterialRef with the
     specified plug-in id.
: Returns - True if this dictionary contains an element with the specified plug-in
     Id; otherwise, false.
: since 5.10

void CopyTo(KeyValuePair<Guid, MaterialRef>[] array,int arrayIndex)
: Copies the elements of this dictionary to an System.Array, starting at
     a particular System.Array index.
: since (unknown)

[MaterialRef](/rhinocommon/rhino/docobjects/materialref/) Create(MaterialRefCreateParams createParams)
: Call this method to create a MaterialRef which can be used when calling
     one of the Add methods.
: Returns - A temporary MaterialRef object, the caller is responsible for disposing
     of this object.
: since 5.10

IEnumerator<KeyValuePair<Guid, MaterialRef>> GetEnumerator()
: Returns an enumerator that iterates through this dictionary.
: Returns - A IEnumerator that can be used to iterate this dictionary.
: since 5.10

bool Remove(Guid key)
: Removes the MaterialRef with the specified plug-in Id from this
     dictionary.
: Returns - True if the MaterialRef is successfully removed; otherwise, false. This
     method also returns False if key was not found in the original dictionary.
: since 5.10

bool Remove(KeyValuePair<Guid, MaterialRef> item)
: Removes the element with the specified plug-in id from the this dictionary.
: since (unknown)

bool TryGetValue(Guid key,MaterialRef value)
: Gets the value associated with the specified key.
: Returns - True if this dictionary contains a MaterialRef with the specified key;
     otherwise, false.
: since 5.10
