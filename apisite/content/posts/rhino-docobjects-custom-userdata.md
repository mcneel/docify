---
title: "Rhino.DocObjects.Custom.UserData"
draft: false
---

# Properties
## string Description
- (summary) Descriptive name of the user data.
- (since) 5.0
## bool ShouldWrite
- (summary) 
     If you want to save this user data in a 3dm file, override
     ShouldWrite and return true.  If you do support serialization,
     you must also override the Read and Write functions.
     
- (since) 5.0
## Geometry.Transform Transform
- (summary) 
     Updated if user data is attached to a piece of geometry that is
     transformed and the virtual OnTransform() is not overridden.  If you
     override OnTransform() and want Transform to be updated, then call the 
     base class OnTransform() in your override.
     The default constructor sets Transform to the identity.
     
- (since) 5.0
# Methods
## static void Copy(CommonObject source,CommonObject destination)
- (summary) 
     Expert user tool that copies user data that has a positive 
     CopyCount from the source object to a destination object.
     Generally speaking you don't need to use Copy().
     Simply rely on things like the copy constructors to do the right thing.
     
- (since) 5.0
- (returns) void This is some return comment
## static Guid MoveUserDataFrom(CommonObject objectWithUserData)
- (summary) 
     Moves the user data from objectWithUserData to a temporary data storage
     identifierd by the return Guid.  When MoveUserDataFrom returns, the
     objectWithUserData will not have any user data.
     
- (since) 5.0
- (returns) Guid This is some return comment
## static void MoveUserDataTo(CommonObject objectToGetUserData,Guid id,bool append)
- (summary) 
     Moves the user data.
     See  for more information.
- (since) 5.0
- (returns) void This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
