---
title: "ZooClientParameters"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

ZooClientParameters is a read-only set of parameters that control
   the flow of licensing inside ZooClient. Because this class flows through a number of
   other classes, functions, and UI, it is read-only so that inadvertent changes are not
   made to the data as it propagates from the caller.
```cs
public class ZooClientParameters
```
## Constructors

ZooClientParameters(Guid productGuid,Guid licenseGuid,string productTitle,int productBuildType,LicenseCapabilities capabilities,string licenseEntryTextMask,string productPath,object parentWindow,LicenseTypes selectedLicenseType,ValidateProductKeyDelegate validateProductKey,OnLeaseChangedDelegate onLeaseChangedDelegate,VerifyLicenseKeyDelegate verifyLicenseKeyDelegate,VerifyPreviousVersionLicenseDelegate verifyPreviousVersionLicenseKeyDelegate)
: ZooClientParameters Constructor
: since 6.0
## Properties

[LicenseCapabilities](/rhinocommon/rhino/plugins/licensecapabilities/) Capabilities
: LicenseCapabilities flags that set options for how licenses can be obtained for this product
: since 6.0

string LicenseEntryTextMask
: Text mask in the form @"RH4A-AAAA-AAAA-AAAA-AAAA-AAAA" that informs the user what numbers they are looking for
: since 6.0

Guid LicenseGuid
: Guid used by ZooClient to identify the license saved by ZooClient. This differs from ProductGuid because different versions of a plug-in
     with the same Plug-in ID may need different licenses.
: since 6.0

OnLeaseChangedDelegate OnLeaseChanged
: Delegate called by ZooClient when a cloud zoo lease is changed
: since 6.0

object ParentWindow
: Parent window assigned to any licensing dialogs that appear. If null, the Rhino main window is used.
: since 6.0

int ProductBuildType
: Product build type. Must be one of LicenseBuildType values.
: since 6.0

Guid ProductGuid
: Guid used by ZooClient to identify the plug-in requesting a license from ZooClient. This Guid may be used by different versions of the
     plug-in. If different licenses are used by different versions of the plug-in, the plug-in must also specify a LicenseGuid.
: since 6.0

string ProductPath
: Path to the application calling ZooClient
: since 6.0

string ProductTitle
: Title of the product, "Rhinoceros 6" for example.
: since 6.0

[LicenseTypes](/rhinocommon/rhino/runtime/licensetypes/) SelectedLicenseType
: License type selected by default when user is prompted to enter a license key
: since 6.0
## Methods

[ValidateResult](/rhinocommon/rhino/plugins/validateresult/) VerifyLicenseKey(string licenseKey,string validationCode,DateTime validationCodeInstallDate,bool gracePeriodExpired,LicenseData licenseData)
: Called by GetLicense to ensure that the license key entered by the user is legitimate and can be used.
: since 6.0

bool VerifyPreviousVersionLicense(string license,string previousVersionLicense,string errorMessage)
: When a caller calls GetLicense, ZooClient may call VerifyPreviousVersionLicense to ensure 
     previousVersionLicense is legitimate and can be used to upgrade license.
: since 6.0
