---
title: "Rhino.PlugIns.LicenseLease"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.PlugIns.LicenseLease(IntPtr unmanagedPointer)
- (summary) 
- (since) 6.0
## Rhino.PlugIns.LicenseLease(string productId,string groupName,string groupId,string userName,string userId,string productTitle,string productVersion,string productEdition,string leaseId,DateTime iat,DateTime exp)
- (summary) 
- (since) 6.0
## Rhino.PlugIns.LicenseLease(string productId,string groupName,string groupId,string userName,string userId,string productTitle,string productVersion,string productEdition,string leaseId,DateTime iat,DateTime exp,DateTime renewable_until)
- (summary) 
- (since) 6.4
# Properties
## DateTime Expiration
- (summary) 
     The date when this lease will expire
     
- (since) 6.0
## string GroupId
- (summary) 
     ID of Rhino Accounts group that this lease came from
     
- (since) 6.0
## string GroupName
- (summary) 
     Name of Rhino Accounts group that this lease came from
     
- (since) 6.0
## DateTime IssuedAt
- (summary) 
     The date this lease was issued
     
- (since) 6.0
## string LeaseId
- (summary) 
     The ID of this lease. 
     
- (since) 6.0
## string ProductEdition
- (summary) 
     Edition of product that this lease is issued to. For example, "Commercial" or "Beta"
     
- (since) 6.0
## string ProductId
- (summary) 
     The ID of the product that this lease is issued to
     
- (since) 6.0
## string ProductTitle
- (summary) 
     Title of product that this lease is issued to. For example, "Rhino 6"
     
- (since) 6.0
## string ProductVersion
- (summary) 
     Version of product that this lease is issued to. For example, "6.0"
     
- (since) 6.0
## string UserId
- (summary) 
     ID of Rhino Accounts user that was logged in when this lease was obtained
     
- (since) 6.0
## string UserName
- (summary) 
     Name of Rhino Accounts user that was logged in when this lease was obtained
     
- (since) 6.0
