---
title: "LicenseLease"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

LicenseLease represents a lease returned from the Cloud Zoo
```cs
public class LicenseLease
```
## Constructors

LicenseLease(IntPtr unmanagedPointer)
: 
: since 6.0

LicenseLease(string productId,string groupName,string groupId,string userName,string userId,string productTitle,string productVersion,string productEdition,string leaseId,DateTime iat,DateTime exp)
: 
: since 6.0

LicenseLease(string productId,string groupName,string groupId,string userName,string userId,string productTitle,string productVersion,string productEdition,string leaseId,DateTime iat,DateTime exp,DateTime renewable_until)
: 
: since 6.4
## Properties

DateTime Expiration
: The date when this lease will expire
: since 6.0

string GroupId
: ID of Rhino Accounts group that this lease came from
: since 6.0

string GroupName
: Name of Rhino Accounts group that this lease came from
: since 6.0

DateTime IssuedAt
: The date this lease was issued
: since 6.0

string LeaseId
: The ID of this lease.
: since 6.0

string ProductEdition
: Edition of product that this lease is issued to. For example, "Commercial" or "Beta"
: since 6.0

string ProductId
: The ID of the product that this lease is issued to
: since 6.0

string ProductTitle
: Title of product that this lease is issued to. For example, "Rhino 6"
: since 6.0

string ProductVersion
: Version of product that this lease is issued to. For example, "6.0"
: since 6.0

string UserId
: ID of Rhino Accounts user that was logged in when this lease was obtained
: since 6.0

string UserName
: Name of Rhino Accounts user that was logged in when this lease was obtained
: since 6.0
