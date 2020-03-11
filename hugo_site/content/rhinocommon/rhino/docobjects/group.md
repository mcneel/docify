---
title: "Group"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class Group : ModelComponent
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

int UserStringCount
: Gets the amount of user strings.
: since 6.4
## Methods

string GetUserString(string key)
: Gets user string from this geometry.
: Returns - string associated with the key if successful. None if no key was found.
: since 6.4

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets a copy of all (user key string, user value string) pairs attached to this geometry.
: Returns - A new collection.
: since 6.4

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.
: since 6.4
