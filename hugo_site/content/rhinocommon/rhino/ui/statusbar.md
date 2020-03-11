---
title: "StatusBar"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Contains static methods to control the application status bar.
```cs
public class StatusBar
```
## Methods

static void ClearMessagePane()
: Removes the message from the message pane.

static void HideProgressMeter()
: Ends, or hides, Rhino's status bar progress meter.

static void HideProgressMeter(uint docSerialNumber)
: Ends, or hides, Rhino's status bar progress meter.
: since 6.12

static void SetDistancePane(double distance)
: Sets the distance pane to a distance value.

static void SetMessagePane(string message)
: Sets the message pane to a message.

static void SetNumberPane(double number)
: Sets the number pane to a number value
: since 6.0

static void SetPointPane(Point3d point)
: Sets the point pane to a point value.

static int ShowProgressMeter(int lowerLimit,int upperLimit,string label,bool embedLabel,bool showPercentComplete)
: Starts, or shows, Rhino's status bar progress meter.
: Returns - 1 - The progress meter was created successfully.
     0 - The progress meter was not created.
     -1 - The progress meter was not created because some other process has already created it.

static int ShowProgressMeter(uint docSerialNumber,int lowerLimit,int upperLimit,string label,bool embedLabel,bool showPercentComplete)
: Starts, or shows, Rhino's status bar progress meter.
: Returns - 1 - The progress meter was created successfully.
     0 - The progress meter was not created.
     -1 - The progress meter was not created because some other process has already created it.
: since 6.12

static int UpdateProgressMeter(int position,bool absolute)
: Sets the current position of Rhino's status bar progress meter.
: Returns - The previous position if successful.

static int UpdateProgressMeter(uint docSerialNumber,int position,bool absolute)
: Sets the current position of Rhino's status bar progress meter.
: Returns - The previous position if successful.
: since 6.12
