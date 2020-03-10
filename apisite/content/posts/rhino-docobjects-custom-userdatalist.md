---
title: "UserDataList"
draft: false
---

*Namespace: Rhino.DocObjects.Custom*
Represents a collection of user data.
## Properties
#### int Count
- (summary) Number of UserData objects in this list.
- (since) 5.0
## Methods
#### bool Add(UserData userdata)
- (summary) 
     If the userdata is already in a different UserDataList, it
     will be removed from that list and added to this list.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(Guid userdataId)
- (summary) 
     Checks for the existence of a specific type of userdata in this list
     Both .NET and native userdata is checked
     
- (since) 6.1
- (returns) bool This is some return comment
#### UserData Find(Type userdataType)
- (summary) 
     Finds a specific data type in this regulated collection.
     
- (since) 5.0
- (returns) UserData This is some return comment
#### IEnumerator<UserData> GetEnumerator()
- (summary) 
     Get enumerator for UserDataList
     
- (since) 6.0
- (returns) IEnumerator<UserData> This is some return comment
#### void Purge()
- (summary) 
     Removes all user data from this geometry.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool Remove(UserData userdata)
- (summary) 
     Remove the userdata from this list
     
- (since) 5.6
- (returns) bool This is some return comment
