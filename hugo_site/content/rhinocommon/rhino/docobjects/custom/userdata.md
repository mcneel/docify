---
title: "UserData"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

Provides a base class for custom classes of information which may be attached to
   geometry or attribute classes.
```cs
public class UserData : IDisposable
```
## Properties

string Description
: Descriptive name of the user data.

bool ShouldWrite
: If you want to save this user data in a 3dm file, override
     ShouldWrite and return true.  If you do support serialization,
     you must also override the Read and Write functions.

[Transform](/rhinocommon/rhino/geometry/transform/) Transform
: Updated if user data is attached to a piece of geometry that is
     transformed and the virtual OnTransform() is not overridden.  If you
     override OnTransform() and want Transform to be updated, then call the 
     base class OnTransform() in your override.
     The default constructor sets Transform to the identity.
## Methods

static void Copy(CommonObject source,CommonObject destination)
: Expert user tool that copies user data that has a positive 
     CopyCount from the source object to a destination object.
     Generally speaking you don't need to use Copy().
     Simply rely on things like the copy constructors to do the right thing.

static Guid MoveUserDataFrom(CommonObject objectWithUserData)
: Moves the user data from objectWithUserData to a temporary data storage
     identifierd by the return Guid.  When MoveUserDataFrom returns, the
     objectWithUserData will not have any user data.
: Returns - Guid identifier for storage of UserData that is held in a temporary list
     by this class. This function should be used in conjunction with MoveUserDataTo
     to transfer the user data to a different object.
     Returns Guid.Empty if there was no user data to transfer.

static void MoveUserDataTo(CommonObject objectToGetUserData,Guid id,bool append)
: Moves the user data.
     See  for more information.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
