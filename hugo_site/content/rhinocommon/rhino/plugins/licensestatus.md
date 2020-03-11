---
title: "LicenseStatus"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

LicenseStatus class.
```cs
public class LicenseStatus
```
## Constructors

LicenseStatus()
: Public constructor.
## Properties

[LicenseBuildType](/rhinocommon/rhino/plugins/licensebuildtype/) BuildType
: The build contentType of the product, where:
       100 = A release build, either commercical, education, nfr, etc.
       200 = A evaluation build
       300 = A beta build, such as a wip.

DateTime? CheckOutExpirationDate
: The date and time the checked out license will expire.
     Note, this is only set if m_license_type = Standalone or CloudZoo
     and if "limited license checkout" was enabled on the Zoo server in the case of Standalone.
     Note, date and time is in local time coordinates.

DateTime? CloudZooLeaseExpiration
: Returns the expiration date of the lease this instance represents.
: since 6.4

bool CloudZooLeaseIsValid
: Returns True if the Cloud Zoo Lease represented by this instance is actively being managed by the Cloud Zoo Manager; else returns false.
: since 6.0

DateTime? ExpirationDate
: The date and time the license will expire.
     This value can be None if:
       1.) The license contentType is "Standalone" and the license does not expire.
       2.) The license contentType is "Network".
       3.) The license contentType is "NetworkCheckedOut" and the checkout does not expire
     Note, date and time is in local time coordinates.

string LicenseTitle
: The title of the license. (e.g. "Rhinoceros 6.0 Commercial")

[LicenseType](/rhinocommon/rhino/plugins/licensetype/) LicenseType
: The license contentType. (e.g. Standalone, Network, etc.)

Guid PluginId
: The ID of the plug-in that owns this license information
: since 6.0

Icon ProductIcon
: The product's icon. Note, this can be null.

Guid ProductId
: The id of the product or plugin.

string RegisteredOrganization
: The registered organization of the product (e.g. "Robert McNeel and Associates")

string RegisteredOwner
: The registered owner of the product. (e.g. "Dale Fugier")

string SerialNumber
: The "for display only" product license or serial number.
