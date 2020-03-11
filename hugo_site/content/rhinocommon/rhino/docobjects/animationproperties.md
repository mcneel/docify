---
title: "AnimationProperties"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Contains information used by the Animation Tools to create sun, season,
   turntable and fly through animations.
```cs
public class AnimationProperties : IDisposable
```
## Constructors

AnimationProperties()
: Initializes a new instance of the  class.
: since 6.11

AnimationProperties(AnimationProperties source)
: Initialize new instance of the AnimationProperties class.
: since 6.11
## Properties

string AnimationName
: Gets or sets the name of the animation sequence.
: since 6.11

Guid CameraPathId
: Gets or sets the object ID of the camera path.
: since 6.11

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] CameraPoints
: Gets or sets points of the camera path.
: since 6.11

string CaptureMethod
: Gets or sets the capture method of the animation which is either preview or full.
: since 6.11

[CaptureTypes](/rhinocommon/rhino/docobjects/animationproperties/capturetypes/) CaptureType
: Gets or sets the capture type of the animation.
: since 6.11

string[] Dates
: Gets or sets the dates that are calculated for seasonal/one day sun animations.
: since 6.11

int DaysBetweenFrames
: Gets or sets the days between captured frames for seasonal sun animation.
: since 6.11

Guid DisplayMode
: Gets or sets the ID of the view display mode (wireframe, shaded...).
: since 6.11

int EndDay
: Gets or sets the end day for seasonal day sun animation in the range 1 to 31.
: since 6.11

int EndHour
: Gets or sets the end hour for one day sun animation in the range 0 to 23.
: since 6.11

int EndMinutes
: Gets or sets the end minutes for one day sun animation in the range 0 to 59.
: since 6.11

int EndMonth
: Gets or sets the end month for seasonal day sun animation in the range 1 to 12.
: since 6.11

int EndSeconds
: Gets or sets the end seconds for one day sun animation in the range 0 to 59.
: since 6.11

int EndYear
: Gets or sets the end year for seasonal day sun animation in the range 1800 to 2199.
: since 6.11

string FileExtension
: Gets or sets the file extension of the saved frames created by the animation.
: since 6.11

string FolderName
: Gets or sets the location for the saved frames.
: since 6.11

int FrameCount
: Gets or sets the number of frames to be captured.
: since 6.11

string[] Images
: Gets or sets the full path to the saved frames of an animation.
: since 6.11

double Latitude
: Gets or sets the latitude for sun animations in the range of -90 to +90.
: since 6.11

int LightIndex
: Internal value used while previewing animation.
: since 6.11

double Longitude
: Gets or sets the longitude for sun animations in the range of -180 to +180.
: since 6.11

int MinutesBetweenFrames
: Gets or sets the minutes between captured frames for one day sun animation.
: since 6.11

double NorthAngle
: Gets or sets the world angle corresponding to North in degrees.
     This angle is zero along the x-axis and increases anticlockwise.
: since 6.11

bool RenderFull
: Gets or sets a value indicating whether to capture a frame in rendered mode.
: since 6.11

bool RenderPreview
: Gets or sets a value indicating whether to capture a frame in preview rendered mode.
: since 6.11

int StartDay
: Gets or sets the start day for seasonal/one day sun animation in the range 1 to 31.
: since 6.11

int StartHour
: Gets or sets the start hour for seasonal/one day sun animation in the range 0 to 23.
: since 6.11

int StartMinutes
: Gets or sets the start minutes for seasonal/one day sun animation in the range 0 to 59.
: since 6.11

int StartMonth
: Gets or sets the start month for seasonal/one day sun animation in the range 1 to 12.
: since 6.11

int StartSeconds
: Gets or sets the start seconds for seasonal/one day sun animation in the range 0 to 59.
: since 6.11

int StartYear
: Gets or sets the start year for seasonal/one day sun animation in the range 1800 to 2199.
: since 6.11

Guid TargetPathId
: Gets or sets the object ID of the target path.
: since 6.11

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] TargetPoints
: Gets or sets points of the target path.
: since 6.11

string ViewportName
: Gets or sets the viewport that will be captured.
: since 6.11
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.11
