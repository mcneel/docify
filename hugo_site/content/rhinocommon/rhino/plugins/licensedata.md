---
title: "LicenseData"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

Zoo plugin license data.
```cs
public class LicenseData
```
## Constructors

LicenseData()
: Public constructor.

LicenseData(string productLicense,string serialNumber,string licenseTitle)
: Public constructor

LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType)
: Public constructor

LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount)
: Public constructor

LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate)
: Public constructor
: since (unknown)

LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate,Icon productIcon)
: Public constructor
: since (unknown)

LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate,Icon productIcon,bool requiresOnlineValidation,bool isUpgradeFromPreviousVersion)
: Public constructor
: since (unknown)
## Properties

[LicenseBuildType](/rhinocommon/rhino/plugins/licensebuildtype/) BuildType
: The build of the product that this license work with.
     When your product requests a license from the Zoo, it
     will specify one of these build types.

DateTime? DateToExpire
: The date and time the license is set to expire.
     This is provided by the plugin that validated the license.
     This time value should be in Coordinated Universal Time (UTC).

string ErrorMessage
: Error message set by calls to callback functions
: since 6.0

bool IsUpgradeFromPreviousVersion
: Set to True if this license requires a previous version license to be entered.
     Caller must also pass VerifyPreviousVersionLicenseDelegate to GetLicense/AskUserForLicense.
: since 6.0

int LicenseCount
: The number of instances supported by this license.
     This is provided by the plugin that validated the license.

bool LicenseExpires
: 
: since 6.0

string LicenseTitle
: The title of the license.
     This is provided by the plugin that validated the license.
     (e.g. "Rhinoceros 6.0 Commercial")

Icon ProductIcon
: The product's icon. This will displayed in the "license"
     page in the Options dialog. Note, this can be null.
     Note, LicenseData creates it's own copy of the icon.

string ProductLicense
: The actual product license. 
     This is provided by the plugin that validated the license.

bool RequiresOnlineValidation
: Set to True if this license requires online validation.
     Caller must also pass VerifyOnlineValidationCodeDelegate to GetLicense/AskUserForLicense
: since 6.0

string SerialNumber
: The "for display only" product license.
     This is provided by the plugin that validated the license.
## Methods

static bool IsNotValid(LicenseData data)
: Indicates whether a LicenseData object is either None or invalid.

static bool IsValid(LicenseData data)
: Indicates whether a LicenseData object is not None and valid.

void Dispose()
: 

bool IsValid()
: Public validator.

bool IsValid(bool ignoreExpirationDate)
: 
: since 6.0
