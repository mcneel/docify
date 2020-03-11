---
title: "RhinoGet"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input](../)*

Base class for GetObject, GetPoint, GetSphere, etc.
   
   You will never directly create a RhinoGet but you will use its member
   functions after calling GetObject::GetObjects(), GetPoint::GetPoint(), and so on.
   
   Provides tools to set command prompt, set command options, and specify
   if the "get" can optionally accept numbers, nothing (pressing enter),
   and undo.
```cs
public class RhinoGet
```
## Properties

static [BitmapFileTypes](/rhinocommon/rhino/input/rhinoget/bitmapfiletypes/) AllBitmapFileTypes
: 
: since 6.0
## Methods

static [Result](/rhinocommon/rhino/commands/result/) Get2dRectangle(bool solidPen,Rectangle rectangle,RhinoView rectView)
: Gets a rectangle in view window coordinates.
: Returns - Success or Cancel.

static [Result](/rhinocommon/rhino/commands/result/) GetAngle(string commandPrompt,Point3d basePoint,Point3d referencePoint,double defaultAngleRadians,double angleRadians)
: Allows user to interactively pick an angle
: since 5.2

static [Result](/rhinocommon/rhino/commands/result/) GetArc(Arc arc)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetBool(string prompt,bool acceptNothing,string offPrompt,string onPrompt,bool boolValue)
: Easy to use bool getter.
: Returns - The getter result based on user choice.
     Commands.Result.Success - got value.Commands.Result.Nothing - user pressed enter.Commands.Result.Cancel - user cancelled value getting.

static [Result](/rhinocommon/rhino/commands/result/) GetBox(Box box)
: Asks the user to select a Box in the viewport.
: Returns - Commands.Result.Success if successful.

static [Result](/rhinocommon/rhino/commands/result/) GetBox(Box box,GetBoxMode mode,Point3d basePoint,string prompt1,string prompt2,string prompt3)
: Asks the user to select a Box in the viewport.
: Returns - Commands.Result.Success if successful.

static [Result](/rhinocommon/rhino/commands/result/) GetBoxWithCounts(int xMin,int xCount,int yMin,int yCount,int zMin,int zCount,Point3d[] corners)
: Gets a 3d box with prompts for counts in X, Y and Z directions.
: Returns - Commands.Result.Success if successful.
: since 6.0

static [Result](/rhinocommon/rhino/commands/result/) GetCircle(Circle circle)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetColor(string prompt,bool acceptNothing,Color color)
: Easy to use color getter.
: Returns - Commands.Result.Success - got color.Commands.Result.Nothing - user pressed enter.Commands.Result.Cancel - user cancel color getting.

static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent)
: 
: since 6.0

static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent,BitmapFileTypes fileTypes)
: 
: since 6.0

static string GetFileNameScripted(GetFileNameMode mode,string defaultName)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetGrip(GripObject grip,string prompt)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetGrips(GripObject[] grips,string prompt)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetHelix(NurbsCurve helix)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetInteger(string prompt,bool acceptNothing,int outputNumber)
: Easy to use number getter.
: Returns - Commands.Result.Success - got number
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel number getting.

static [Result](/rhinocommon/rhino/commands/result/) GetInteger(string prompt,bool acceptNothing,int outputNumber,int lowerLimit,int upperLimit)
: Easy to use number getter.
: Returns - Commands.Result.Success - got number
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel number getting.

static [Result](/rhinocommon/rhino/commands/result/) GetLine(Line line)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetLinearDimension(LinearDimension dimension)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetMultipleObjects(string prompt,bool acceptNothing,GetObjectGeometryFilter filter,ObjRef[] rhObjects)
: Easy to use object getter for getting multiple objects.
: Returns - Commands.Result.Success - got object
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel object getting.

static [Result](/rhinocommon/rhino/commands/result/) GetMultipleObjects(string prompt,bool acceptNothing,ObjectType filter,ObjRef[] rhObjects)
: Easy to use object getter for getting multiple objects.
: Returns - Commands.Result.Success - got object
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel object getting.

static [Result](/rhinocommon/rhino/commands/result/) GetNumber(string prompt,bool acceptNothing,double outputNumber)
: Easy to use number getter.
: Returns - Commands.Result.Success - got number
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel number getting.

static [Result](/rhinocommon/rhino/commands/result/) GetNumber(string prompt,bool acceptNothing,double outputNumber,double lowerLimit,double upperLimit)
: Easy to use number getter.
: Returns - Commands.Result.Success - got number.Commands.Result.Nothing - user pressed enter.Commands.Result.Cancel - user cancel number getting.

static [Result](/rhinocommon/rhino/commands/result/) GetOneObject(string prompt,bool acceptNothing,GetObjectGeometryFilter filter,ObjRef objref)
: Easy to use object getter.
: Returns - Commands.Result.Success - got object
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel object getting.

static [Result](/rhinocommon/rhino/commands/result/) GetOneObject(string prompt,bool acceptNothing,ObjectType filter,ObjRef rhObject)
: Easy to use object getter.
: Returns - Commands.Result.Success - got object
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel object getting.

static [Result](/rhinocommon/rhino/commands/result/) GetPlane(Plane plane)
: Gets an oriented infinite plane.
: Returns - Commands.Result.Success - got plane.Commands.Result.Nothing - user pressed enter.Commands.Result.Cancel - user cancel number getting.

static [Result](/rhinocommon/rhino/commands/result/) GetPoint(string prompt,bool acceptNothing,Point3d point)
: Gets a point coordinate from the document.
: Returns - Commands.Result.Success - got point
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel point getting.

static [Result](/rhinocommon/rhino/commands/result/) GetPointOnMesh(Guid meshObjectId,string prompt,bool acceptNothing,Point3d point)
: Gets a point constrained to an existing mesh in the document.
: Returns - A command result based on user choice.

static [Result](/rhinocommon/rhino/commands/result/) GetPointOnMesh(MeshObject meshObject,string prompt,bool acceptNothing,Point3d point)
: Gets a point constrained to an existing mesh in the document.
: Returns - The command result based on user choice.

static [Result](/rhinocommon/rhino/commands/result/) GetPolygon(int numberSides,bool inscribed,Polyline polyline)
: 
: since 6.0

static [Result](/rhinocommon/rhino/commands/result/) GetPolyline(Polyline polyline)
: 
: since 5.9

static [Result](/rhinocommon/rhino/commands/result/) GetPrintWindow(ViewCaptureSettings settings)
: 
: since 6.1

static [Result](/rhinocommon/rhino/commands/result/) GetRectangle(GetBoxMode mode,Point3d firstPoint,IEnumerable<string> prompts,Point3d[] corners)
: Gets a 3d rectangle made up of four points.
: Returns - Commands.Result.Success if successful.

static [Result](/rhinocommon/rhino/commands/result/) GetRectangle(Point3d[] corners)
: Gets a 3d rectangle.
: Returns - Commands.Result.Success if successful.

static [Result](/rhinocommon/rhino/commands/result/) GetRectangle(string firstPrompt,Point3d[] corners)
: Gets a 3d rectangle.
: Returns - Commands.Result.Success if successful.
: since 6.0

static [Result](/rhinocommon/rhino/commands/result/) GetRectangleWithCounts(int xMin,int xCount,int yMin,int yCount,Point3d[] corners)
: Gets a 3d rectangle with prompts for counts in X and Y directions.
: Returns - Commands.Result.Success if successful.
: since 6.0

static [Result](/rhinocommon/rhino/commands/result/) GetSpiral(NurbsCurve spiral)
: 

static [Result](/rhinocommon/rhino/commands/result/) GetString(string prompt,bool acceptNothing,string outputString)
: Easy to use string getter.
: Returns - Commands.Result.Success - got string
     Commands.Result.Nothing - user pressed enter
     Commands.Result.Cancel - user cancel string getting.

static [Result](/rhinocommon/rhino/commands/result/) GetView(string commandPrompt,RhinoView view)
: Allows the user to interactively pick a viewport.
: Returns - The result based on user choice.

static bool InGet(RhinoDoc doc)
: Returns True if the document is current in a "Get" operation.
: Returns - True if a getter is currently active.

static bool InGetObject(RhinoDoc doc)
: Returns True if currently in a GetObject.GetObjects()
: since 6.0

static bool InGetPoint(RhinoDoc doc)
: Returns True if currently in a GetPoint.Get()
: since 6.0

static string StringToCommandOptionName(string stringToConvert)
: Convert some arbitrary string value to a valid command option name
     removing any invalid characters.
: Returns - Returns None if the string is None or empty or if it contains nothing
     but invalid characters.  If the converted string is one or more
     characters in length then the converted value is returned.
: since 6.0

static [LocalizeStringPair](/rhinocommon/rhino/ui/localizestringpair/) StringToCommandOptionName(string englishString,string localizedString)
: Convert some arbitrary string value to a valid command option name
     removing any invalid characters.
: Returns - Returns None if the strings are None or empty or if they contain
     nothing but invalid characters.  If the converted string is one or more
     charcters in length then a  is returned
     characters the converted string values.  If the localized string is
     None or empty then the English string is used as the localized value.
: since 6.0
