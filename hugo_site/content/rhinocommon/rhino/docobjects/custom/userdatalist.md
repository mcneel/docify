---
title: "UserDataList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

Represents a collection of user data.
```cs
public class UserDataList : IEnumerable<UserData>
```
## Properties

int Count
: Number of UserData objects in this list.
## Methods

bool Add(UserData userdata)
: If the userdata is already in a different UserDataList, it
     will be removed from that list and added to this list.
: Returns - Whether this operation succeeded.

bool Contains(Guid userdataId)
: Checks for the existence of a specific type of userdata in this list
     Both .NET and native userdata is checked
: since 6.1

[UserData](/rhinocommon/rhino/docobjects/custom/userdata/) Find(Type userdataType)
: Finds a specific data type in this regulated collection.
: Returns - The found data, or None of nothing was found.

IEnumerator<UserData> GetEnumerator()
: Get enumerator for UserDataList
: since 6.0

void Purge()
: Removes all user data from this geometry.
: since 6.0

bool Remove(UserData userdata)
: Remove the userdata from this list
: Returns - True if the user data was successfully removed
: since 5.6
