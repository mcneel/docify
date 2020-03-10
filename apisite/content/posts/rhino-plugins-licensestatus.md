---
title: "Rhino.PlugIns.LicenseStatus"
draft: false
---

# Constructors
## Rhino.PlugIns.LicenseStatus()
- (summary) Public constructor.
- (since) 5.0
# Properties
## LicenseBuildType BuildType
- (summary) 
     The build contentType of the product, where:
       100 = A release build, either commercical, education, nfr, etc.
       200 = A evaluation build
       300 = A beta build, such as a wip.
     
- (since) 5.0
## DateTime? CheckOutExpirationDate
- (summary) 
     The date and time the checked out license will expire.
     Note, this is only set if m_license_type = Standalone or CloudZoo
     and if "limited license checkout" was enabled on the Zoo server in the case of Standalone.
     Note, date and time is in local time coordinates.
     
- (since) 5.0
## DateTime? CloudZooLeaseExpiration
- (summary) 
     Returns the expiration date of the lease this instance represents.
     
- (since) 6.4
## bool CloudZooLeaseIsValid
- (summary) 
     Returns True if the Cloud Zoo Lease represented by this instance is actively being managed by the Cloud Zoo Manager; else returns false.
     
- (since) 6.0
## DateTime? ExpirationDate
- (summary) 
     The date and time the license will expire.
     This value can be None if:
       1.) The license contentType is "Standalone" and the license does not expire.
       2.) The license contentType is "Network".
       3.) The license contentType is "NetworkCheckedOut" and the checkout does not expire
     Note, date and time is in local time coordinates.
     
- (since) 5.0
## string LicenseTitle
- (summary) The title of the license. (e.g. "Rhinoceros 6.0 Commercial")
- (since) 5.0
## LicenseType LicenseType
- (summary) The license contentType. (e.g. Standalone, Network, etc.)
- (since) 5.0
## Guid PluginId
- (summary) 
     The ID of the plug-in that owns this license information
     
- (since) 6.0
## Icon ProductIcon
- (summary) The product's icon. Note, this can be null.
- (since) 5.0
## Guid ProductId
- (summary) The id of the product or plugin.
- (since) 5.0
## string RegisteredOrganization
- (summary) The registered organization of the product (e.g. "Robert McNeel and Associates")
- (since) 5.0
## string RegisteredOwner
- (summary) The registered owner of the product. (e.g. "Dale Fugier")
- (since) 5.0
## string SerialNumber
- (summary) The "for display only" product license or serial number.
- (since) 5.0
