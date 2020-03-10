---
title: "Rhino.DocObjects.MaterialRefs"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## int Count
- (summary) 
     Gets the number of elements contained in this dictionary
     
- (since) 5.10
## bool IsReadOnly
- (summary) 
     IDictionary required property, always returns False for this dictionary.
     
- (since) 5.10
## ICollection<Guid> Keys
- (summary) 
     Gets an ICollection containing the plug-in Id's in this dictionary.
     
- (since) 5.10
## ICollection<MaterialRef> Values
- (summary) 
     Gets an ICollection containing the MaterialRef objects in this
     dictionary.
     
- (since) 5.10
# Methods
## void Add(Guid key,MaterialRef value)
- (summary) 
     Add or replace an element with the provided key and value to this dictionary.
     
- (since) 5.10
- (returns) void This is some return comment
## void Add(KeyValuePair<Guid, MaterialRef> item)
- (summary) 
     Adds an item to this dictionary.
     
- (since) (unknown)
- (returns) void This is some return comment
## void Clear()
- (summary) 
     Removes all items from this dictionary.
     
- (since) 5.10
- (returns) void This is some return comment
## bool Contains(KeyValuePair<Guid, MaterialRef> item)
- (summary) 
     Determines whether this dictionary contains a specific value.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool ContainsKey(Guid key)
- (summary) 
     Determines whether this dictionary contains an MaterialRef with the
     specified plug-in id.
     
- (since) 5.10
- (returns) bool This is some return comment
## void CopyTo(KeyValuePair<Guid, MaterialRef>[] array,int arrayIndex)
- (summary) 
     Copies the elements of this dictionary to an System.Array, starting at
     a particular System.Array index.
     
- (since) (unknown)
- (returns) void This is some return comment
## MaterialRef Create(MaterialRefCreateParams createParams)
- (summary) 
     Call this method to create a MaterialRef which can be used when calling
     one of the Add methods.
     
- (since) 5.10
- (returns) MaterialRef This is some return comment
## IEnumerator<KeyValuePair<Guid, MaterialRef>> GetEnumerator()
- (summary) 
     Returns an enumerator that iterates through this dictionary.
     
- (since) 5.10
- (returns) IEnumerator<KeyValuePair<Guid, MaterialRef>> This is some return comment
## bool Remove(Guid key)
- (summary) 
     Removes the MaterialRef with the specified plug-in Id from this
     dictionary.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool Remove(KeyValuePair<Guid, MaterialRef> item)
- (summary) 
     Removes the element with the specified plug-in id from the this dictionary.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool TryGetValue(Guid key,MaterialRef value)
- (summary) 
     Gets the value associated with the specified key.
     
- (since) 5.10
- (returns) bool This is some return comment
