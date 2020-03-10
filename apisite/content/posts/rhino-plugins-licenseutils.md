---
title: "Rhino.PlugIns.LicenseUtils"
date: 2020-03-10 09:24:56Z
draft: false
---

# Methods
## static bool AskUserForLicense(int productType,bool standAlone,object parentWindow,string textMask,ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate onLeaseChangedDelegate,string product_path,string product_title,Guid pluginId,Guid licenseId,LicenseCapabilities capabilities)
- (summary) 
     This version of Rhino.PlugIns.LicenseUtils.AskUserForLicense
     is used by Rhino C++ plug-ins.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool AskUserForLicense(int productType,bool standAlone,object parentWindow,string textMask,ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate onLeaseChangedDelegate,VerifyLicenseKeyDelegate verifyLicenseKeyDelegate,VerifyPreviousVersionLicenseDelegate verifyPreviousVersionLicenseKeyDelegate,string product_path,string product_title,Guid pluginId,Guid licenseId,LicenseCapabilities capabilities)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static bool CheckInLicense(Guid productId)
- (summary) 
     Checks in a previously checked out license to
     the Zoo server from which it was checked out.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool CheckOutLicense(Guid productId)
- (summary) 
     Checks out a license that is on loan from a Zoo server
     on a permanent basis.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool ConvertLicense(Guid productId)
- (summary) 
     Converts a product license from a standalone node
     to a network node.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool DeleteLicense(Guid productId)
- (summary) 
     Deletes a license along with its license file.
     
- (since) 6.0
- (returns) bool This is some return comment
## static string Echo(string message)
- (summary)  Test connectivity with the Zoo. 
- (since) 5.0
- (returns) string This is some return comment
## static bool GetLicense(ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate leaseChangedDelegate,int product_type,int capabilities,string textMask,string product_path,string product_title,Guid pluginId,Guid licenseId)
- (summary) 
     This version of Rhino.PlugIns.LicenseUtils.GetLicense
     is used by Rhino C++ plug-ins.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool GetLicense(ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate leaseChangedDelegate,VerifyLicenseKeyDelegate verifyLicenseKeyDelegate,VerifyPreviousVersionLicenseDelegate verifyPreviousVersionLicenseKeyDelegate,int product_type,int capabilities,string textMask,string product_path,string product_title,Guid pluginId,Guid licenseId)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static LicenseCapabilities GetLicenseCapabilities(int filter)
- (summary) 
     Converts an integer to a LicenseCapabilities flag
     
- (since) 5.5
- (returns) LicenseCapabilities This is some return comment
## static LicenseStatus[] GetLicenseStatus()
- (summary) 
     Returns the current status of every license for ui purposes.
     
- (since) 5.0
- (returns) LicenseStatus[] This is some return comment
## static int GetLicenseType(Guid productId)
- (summary) 
     Returns the contentType of a specified product license
     
- (since) 5.0
- (returns) int This is some return comment
## static LicenseStatus GetOneLicenseStatus(Guid productid)
- (summary) 
     Returns the current status of a license for ui purposes.
     
- (since) 5.5
- (returns) LicenseStatus This is some return comment
## static bool Initialize()
- (summary)  Initializes the license manager. 
- (since) 5.0
- (returns) bool This is some return comment
## static bool IsCheckOutEnabled()
- (summary) 
     Returns whether or not license checkout is enabled.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool LicenseOptionsHandler(Guid pluginId,Guid licenseId,string productTitle,bool standAlone)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static bool LoginToCloudZoo()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static bool LogoutOfCloudZoo()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static bool ReturnLicense(Guid productId)
- (summary) 
     OBSOLETE - REMOVE WHEN POSSIBLE.
     
- (since) 5.0
- (returns) bool This is some return comment
## static void ShowBuyLicenseUi(Guid productId)
- (summary) 
- (since) 5.5
- (returns) void This is some return comment
## static bool ShowLicenseValidationUi(string cdkey)
- (summary) 
     ShowLicenseValidationUi
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool ShowRhinoExpiredMessage(Mode mode,int result)
- (summary) 
     Show Rhino or Beta expired message
     
- (since) 6.0
- (returns) bool This is some return comment
