---
title: "Rhino.DocObjects.AnimationProperties"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.DocObjects.AnimationProperties()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 6.11
## Rhino.DocObjects.AnimationProperties(AnimationProperties source)
- (summary)  Initialize new instance of the AnimationProperties class. 
- (since) 6.11
# Properties
## string AnimationName
- (summary) 
     Gets or sets the name of the animation sequence.
     
- (since) 6.11
## Guid CameraPathId
- (summary) 
     Gets or sets the object ID of the camera path.
     
- (since) 6.11
## Point3d[] CameraPoints
- (summary) 
     Gets or sets points of the camera path.
     
- (since) 6.11
## string CaptureMethod
- (summary) 
     Gets or sets the capture method of the animation which is either preview or full.
     
- (since) 6.11
## CaptureTypes CaptureType
- (summary) 
     Gets or sets the capture type of the animation.
     
- (since) 6.11
## string[] Dates
- (summary) 
     Gets or sets the dates that are calculated for seasonal/one day sun animations.
     
- (since) 6.11
## int DaysBetweenFrames
- (summary) 
     Gets or sets the days between captured frames for seasonal sun animation.
     
- (since) 6.11
## Guid DisplayMode
- (summary) 
     Gets or sets the ID of the view display mode (wireframe, shaded...).
     
- (since) 6.11
## int EndDay
- (summary) 
     Gets or sets the end day for seasonal day sun animation in the range 1 to 31.
     
- (since) 6.11
## int EndHour
- (summary) 
     Gets or sets the end hour for one day sun animation in the range 0 to 23.
     
- (since) 6.11
## int EndMinutes
- (summary) 
     Gets or sets the end minutes for one day sun animation in the range 0 to 59.
     
- (since) 6.11
## int EndMonth
- (summary) 
     Gets or sets the end month for seasonal day sun animation in the range 1 to 12.
     
- (since) 6.11
## int EndSeconds
- (summary) 
     Gets or sets the end seconds for one day sun animation in the range 0 to 59.
     
- (since) 6.11
## int EndYear
- (summary) 
     Gets or sets the end year for seasonal day sun animation in the range 1800 to 2199.
     
- (since) 6.11
## string FileExtension
- (summary) 
     Gets or sets the file extension of the saved frames created by the animation.
     
- (since) 6.11
## string FolderName
- (summary) 
     Gets or sets the location for the saved frames.
     
- (since) 6.11
## int FrameCount
- (summary) 
     Gets or sets the number of frames to be captured.
     
- (since) 6.11
## string[] Images
- (summary) 
     Gets or sets the full path to the saved frames of an animation.
     
- (since) 6.11
## double Latitude
- (summary) 
     Gets or sets the latitude for sun animations in the range of -90 to +90.
     
- (since) 6.11
## int LightIndex
- (summary) 
     Internal value used while previewing animation.
     
- (since) 6.11
## double Longitude
- (summary) 
     Gets or sets the longitude for sun animations in the range of -180 to +180.
     
- (since) 6.11
## int MinutesBetweenFrames
- (summary) 
     Gets or sets the minutes between captured frames for one day sun animation.
     
- (since) 6.11
## double NorthAngle
- (summary) 
     Gets or sets the world angle corresponding to North in degrees.
     This angle is zero along the x-axis and increases anticlockwise.
     
- (since) 6.11
## bool RenderFull
- (summary) 
     Gets or sets a value indicating whether to capture a frame in rendered mode.
     
- (since) 6.11
## bool RenderPreview
- (summary) 
     Gets or sets a value indicating whether to capture a frame in preview rendered mode.
     
- (since) 6.11
## int StartDay
- (summary) 
     Gets or sets the start day for seasonal/one day sun animation in the range 1 to 31.
     
- (since) 6.11
## int StartHour
- (summary) 
     Gets or sets the start hour for seasonal/one day sun animation in the range 0 to 23.
     
- (since) 6.11
## int StartMinutes
- (summary) 
     Gets or sets the start minutes for seasonal/one day sun animation in the range 0 to 59.
     
- (since) 6.11
## int StartMonth
- (summary) 
     Gets or sets the start month for seasonal/one day sun animation in the range 1 to 12.
     
- (since) 6.11
## int StartSeconds
- (summary) 
     Gets or sets the start seconds for seasonal/one day sun animation in the range 0 to 59.
     
- (since) 6.11
## int StartYear
- (summary) 
     Gets or sets the start year for seasonal/one day sun animation in the range 1800 to 2199.
     
- (since) 6.11
## Guid TargetPathId
- (summary) 
     Gets or sets the object ID of the target path.
     
- (since) 6.11
## Point3d[] TargetPoints
- (summary) 
     Gets or sets points of the target path.
     
- (since) 6.11
## string ViewportName
- (summary) 
     Gets or sets the viewport that will be captured.
     
- (since) 6.11
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.11
- (returns) void This is some return comment
