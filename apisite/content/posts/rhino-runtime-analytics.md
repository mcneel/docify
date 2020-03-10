---
title: "Rhino.Runtime.Analytics"
draft: false
---

# Constructors
## Rhino.Runtime.Analytics(string TrackingID,string Name)
- (summary) 
     Construct Analytics class
     
- (since) 6.0
## Rhino.Runtime.Analytics(string TrackingID,string Name,string Platform,string InstallerId,string Version)
- (summary) 
     Construct Analytics class
     
- (since) 6.0
# Properties
## static bool UsageStatisticsEnabled
- (summary) 
     Determine if user allows automatic data collection from Rhino
     
- (since) 6.0
## static Guid UserId
- (summary) 
     Returns a GUID that allows events to be aggregated by user. There is no way to determine who the
     end user is based on this GUID, unless the user tells you their ID.  On Windows, this uses the 
     registry to store the ID.  On Mac, the Hardware UUID is used as the ID.
     
- (since) 6.0
## string AppInstallerId
- (summary) 
     App Installer Id. In Rhino, we use this to differentiate between different builds such as "WIP" and "Commercial".
     Maps to Google Analytics parameter 'aiid'
     
- (since) 6.0
## string AppName
- (summary) 
     Name of Application. For example, "Ocelot". Do not include version numbers.
     Maps to Google Analytics parameter 'an'
     
- (since) 6.0
## string AppPlatform
- (summary) 
     Platform application is running on. For example "Mac", "Windows". Again, don't include version numbers.
     Maps to Google Analytics parameter 'ai'
     
- (since) 6.0
## string AppVersion
- (summary) 
     Application version string.
     Maps to Google Analytics parameter 'av'
     
- (since) 6.0
## string GoogleAnalyticsTrackingID
- (summary) 
     Google Analytics Tracking ID
     
- (since) 6.0
# Methods
## void Send(NameValueCollection data)
- (summary) 
     Advanced method for sending Google Analytics data.
     It is the caller's responsibility to make sure that all parameters passed will result in a valid Google Analytics hit. Failure to do so will result in Google Analytics ignoring your hit, and the caller will get no data.
     The Analytics class will populate data from the Application, the GoogleAnalyticsTrackingID, the User ID, and set the hit type "t" to "event". It also sets other information about the system.
     
- (since) 6.0
- (returns) void This is some return comment
## void Send(string Category)
- (summary) 
     Sends a Google Analytics event using the Measurement Protocol. See https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event for details.
     
- (since) 6.0
- (returns) void This is some return comment
## void Send(string Category,string Action)
- (summary) 
     Sends a Google Analytics event using the Measurement Protocol. See https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event for details.
     
- (since) 6.0
- (returns) void This is some return comment
## void Send(string Category,string Action,string Label)
- (summary) 
     Sends a Google Analytics event using the Measurement Protocol. See https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event for details.
     
- (since) 6.0
- (returns) void This is some return comment
## void Send(string Category,string Action,string Label,uint Value)
- (summary) 
     Sends a Google Analytics event using the Measurement Protocol. See https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event for details.
     This method is asyncrhonous and the return code is completely ignored. Validate the data you send 
     
- (since) 6.0
- (returns) void This is some return comment
