---
title: "LicenseUtils"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

License Manager Utilities.
```cs
public class LicenseUtils
```
## Methods

static bool AskUserForLicense(int productType,bool standAlone,object parentWindow,string textMask,ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate onLeaseChangedDelegate,string product_path,string product_title,Guid pluginId,Guid licenseId,LicenseCapabilities capabilities)
: This version of Rhino.PlugIns.LicenseUtils.AskUserForLicense
     is used by Rhino C++ plug-ins.
: since 6.0

static bool AskUserForLicense(int productType,bool standAlone,object parentWindow,string textMask,ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate onLeaseChangedDelegate,VerifyLicenseKeyDelegate verifyLicenseKeyDelegate,VerifyPreviousVersionLicenseDelegate verifyPreviousVersionLicenseKeyDelegate,string product_path,string product_title,Guid pluginId,Guid licenseId,LicenseCapabilities capabilities)
: 
: since 6.0

static bool CheckInLicense(Guid productId)
: Checks in a previously checked out license to
     the Zoo server from which it was checked out.
: Returns - True if the license was checked in successful.
     False if not successful or on error.

static bool CheckOutLicense(Guid productId)
: Checks out a license that is on loan from a Zoo server
     on a permanent basis.
: Returns - True if the license was checked out successful.
     False if not successful or on error.

static bool ConvertLicense(Guid productId)
: Converts a product license from a standalone node
     to a network node.
: Returns - True if the license was successfully converted.
     False if not successful or on error.

static bool DeleteLicense(Guid productId)
: Deletes a license along with its license file.
: since 6.0

static string Echo(string message)
: Test connectivity with the Zoo.

static bool GetLicense(ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate leaseChangedDelegate,int product_type,int capabilities,string textMask,string product_path,string product_title,Guid pluginId,Guid licenseId)
: This version of Rhino.PlugIns.LicenseUtils.GetLicense
     is used by Rhino C++ plug-ins.
: since 6.0

static bool GetLicense(ValidateProductKeyDelegate validateProductKeyDelegate,OnLeaseChangedDelegate leaseChangedDelegate,VerifyLicenseKeyDelegate verifyLicenseKeyDelegate,VerifyPreviousVersionLicenseDelegate verifyPreviousVersionLicenseKeyDelegate,int product_type,int capabilities,string textMask,string product_path,string product_title,Guid pluginId,Guid licenseId)
: 
: since 6.0

static [LicenseCapabilities](/rhinocommon/rhino/plugins/licensecapabilities/) GetLicenseCapabilities(int filter)
: Converts an integer to a LicenseCapabilities flag
: since 5.5

static [LicenseStatus](/rhinocommon/rhino/plugins/licensestatus/)[] GetLicenseStatus()
: Returns the current status of every license for ui purposes.

static int GetLicenseType(Guid productId)
: Returns the contentType of a specified product license

static [LicenseStatus](/rhinocommon/rhino/plugins/licensestatus/) GetOneLicenseStatus(Guid productid)
: Returns the current status of a license for ui purposes.
: since 5.5

static bool Initialize()
: Initializes the license manager.

static bool IsCheckOutEnabled()
: Returns whether or not license checkout is enabled.

static bool LicenseOptionsHandler(Guid pluginId,Guid licenseId,string productTitle,bool standAlone)
: 
: since 6.0

static bool LoginToCloudZoo()
: 
: since 6.0

static bool LogoutOfCloudZoo()
: 
: since 6.0

static bool ReturnLicense(Guid productId)
: OBSOLETE - REMOVE WHEN POSSIBLE.

static void ShowBuyLicenseUi(Guid productId)
: 
: since 5.5

static bool ShowLicenseValidationUi(string cdkey)
: ShowLicenseValidationUi

static bool ShowRhinoExpiredMessage(Mode mode,int result)
: Show Rhino or Beta expired message
: since 6.0
