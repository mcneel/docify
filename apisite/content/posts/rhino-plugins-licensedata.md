---
title: "Rhino.PlugIns.LicenseData"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.PlugIns.LicenseData()
- (summary) 
     Public constructor.
     
- (since) 5.0
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle)
- (summary) 
     Public constructor
     
- (since) 5.0
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType)
- (summary) 
     Public constructor
     
- (since) 5.0
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount)
- (summary) 
     Public constructor
     
- (since) 5.0
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate)
- (summary) 
     Public constructor
     
- (since) (unknown)
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate,Icon productIcon)
- (summary) 
     Public constructor
     
- (since) (unknown)
## Rhino.PlugIns.LicenseData(string productLicense,string serialNumber,string licenseTitle,LicenseBuildType buildType,int licenseCount,DateTime? expirationDate,Icon productIcon,bool requiresOnlineValidation,bool isUpgradeFromPreviousVersion)
- (summary) 
     Public constructor
     
- (since) (unknown)
# Properties
## LicenseBuildType BuildType
- (summary) 
     The build of the product that this license work with.
     When your product requests a license from the Zoo, it
     will specify one of these build types.
     
- (since) 5.0
## DateTime? DateToExpire
- (summary) 
     The date and time the license is set to expire.
     This is provided by the plugin that validated the license.
     This time value should be in Coordinated Universal Time (UTC).
     
- (since) 5.0
## string ErrorMessage
- (summary) 
     Error message set by calls to callback functions
     
- (since) 6.0
## bool IsUpgradeFromPreviousVersion
- (summary) 
     Set to True if this license requires a previous version license to be entered.
     Caller must also pass VerifyPreviousVersionLicenseDelegate to GetLicense/AskUserForLicense.
     
- (since) 6.0
## int LicenseCount
- (summary) 
     The number of instances supported by this license.
     This is provided by the plugin that validated the license.
     
- (since) 5.0
## bool LicenseExpires
- (summary) 
- (since) 6.0
## string LicenseTitle
- (summary) 
     The title of the license.
     This is provided by the plugin that validated the license.
     (e.g. "Rhinoceros 6.0 Commercial")
     
- (since) 5.0
## Icon ProductIcon
- (summary) 
     The product's icon. This will displayed in the "license"
     page in the Options dialog. Note, this can be null.
     Note, LicenseData creates it's own copy of the icon.
     
- (since) 5.0
## string ProductLicense
- (summary) 
     The actual product license. 
     This is provided by the plugin that validated the license.
     
- (since) 5.0
## bool RequiresOnlineValidation
- (summary) 
     Set to True if this license requires online validation.
     Caller must also pass VerifyOnlineValidationCodeDelegate to GetLicense/AskUserForLicense
     
- (since) 6.0
## string SerialNumber
- (summary) 
     The "for display only" product license.
     This is provided by the plugin that validated the license.
     
- (since) 5.0
# Methods
## static bool IsNotValid(LicenseData data)
- (summary) 
     Indicates whether a LicenseData object is either None or invalid.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool IsValid(LicenseData data)
- (summary) 
     Indicates whether a LicenseData object is not None and valid.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool IsValid()
- (summary) 
     Public validator.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValid(bool ignoreExpirationDate)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
