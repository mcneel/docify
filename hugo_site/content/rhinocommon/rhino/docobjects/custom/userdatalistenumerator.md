---
title: "UserDataListEnumerator"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

Enumerator for UserDataList
```cs
public class UserDataListEnumerator : IEnumerator<UserData>
```
## Constructors

UserDataListEnumerator(UserDataList udl)
: Create new UserDataListEnumerator
: since 6.0
## Properties

[UserData](/rhinocommon/rhino/docobjects/custom/userdata/) Current
: Get current UserData on the enumerator.
: since 6.0
## Methods

void Dispose()
: Implement Dispose(). NOP.
: since 6.0

bool MoveNext()
: Advance enumerator to next UserData item.
: Returns - True if there is a next item.
: since 6.0

void Reset()
: Reset the enumerator
: since 6.0
