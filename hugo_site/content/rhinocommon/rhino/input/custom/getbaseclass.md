---
title: "GetBaseClass"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Base class for GetObject, GetPoint, GetSphere, etc.
   
   You will never directly create a GetBaseClass but you will use its member
   functions after calling GetObject.Gets(), GetPoint.Get(), and so on.
   
   Provides tools to set command prompt, set command options, and specify
   if the "get" can optionally accept numbers, nothing (pressing enter),
   and undo.
```cs
public class GetBaseClass : IDisposable
```
## Methods

static void PostCustomMessage(object messageData)
: 

void AcceptColor(bool enable)
: If you want to allow the user to be able to type in a color r,g,b or name
     during GetPoint.Get(), GetObject::GetObjects(), etc., then call AcceptColor(true)
     before calling GetPoint()/GetObject(). If the user chooses to type in a color,
     then the result code GetResult.Color is returned and you can use RhinoGet.Color()
     to get the value of the color.  If the get accepts points, then the user will not
     be able to type in r,g,b colors but will be able to type color names.

void AcceptCustomMessage(bool enable)
: 

void AcceptEnterWhenDone(bool enable)
: There are instances of RhinoGet that prompt with "Press Enter when Done." yet do not call AcceptNothing().
     On the Mac, these instances need an additional call to AcceptEnterWhenDone() so the GetPointOptions dialog
     can correctly enable the Done button.
: since 6.0

void AcceptNothing(bool enable)
: If you want to allow the user to be able to press enter in order to
     skip selecting a something in GetPoint.Get(), GetObject::GetObjects(),
     etc., then call AcceptNothing( True ) beforehand.

void AcceptNumber(bool enable,bool acceptZero)
: If you want to allow the user to be able to type in a number during GetPoint.Get(),
     GetObject::GetObjects(), etc., then call AcceptNumber() beforehand.
     If the user chooses to type in a number, then the result code GetResult.Number is
     returned and you can use RhinoGet.Number() to get the value of the number. If you
     are using GetPoint and you want "0" to return (0,0,0) instead of the number zero, 
     then set acceptZero = false.

void AcceptPoint(bool enable)
: If you want to allow the user to be able to type in a point then call AcceptPoint(true)
     before calling GetPoint()/GetObject(). If the user chooses to type in a number, then
     the result code GetResult.Point is returned and you can use RhinoGet.Point()
     to get the value of the point.

void AcceptString(bool enable)
: If you want to allow the user to be able to type in a string during GetPoint.Get(),
     GetObject::GetObjects(), etc., then call AcceptString(true) before calling
     GetPoint()/GetObject(). If the user chooses to type in a string, then the result code
     GetResult.String is returned and you can use RhinoGet.String() to get the value of the string.

void AcceptUndo(bool enable)
: If you want to allow the user to have an 'undo' option in GetPoint.Get(),
     GetObject.GetObjects(), etc., then call AcceptUndo(true) beforehand.

int AddOption(LocalizeStringPair optionName)
: Adds a command line option.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOption(LocalizeStringPair optionName,LocalizeStringPair optionValue)
: Adds a command line option.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOption(LocalizeStringPair optionName,LocalizeStringPair optionValue,bool hiddenOption)
: Adds a command line option.
: Returns - option index value (>0) or 0 if option cannot be added.
: since 6.9

int AddOption(string englishOption)
: Adds a command line option.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOption(string englishOption,string englishOptionValue)
: Adds a command line option.
: Returns - Option index value (>0) or 0 if option cannot be added.

int AddOption(string englishOption,string englishOptionValue,bool hiddenOption)
: Adds a command line option.
: Returns - Option index value (>0) or 0 if option cannot be added.
: since 6.9

int AddOptionColor(LocalizeStringPair optionName,OptionColor colorValue)
: Add a command line option to get colors and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionColor(LocalizeStringPair optionName,OptionColor colorValue,string prompt)
: Add a command line option to get colors and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionColor(string englishName,OptionColor colorValue)
: Add a command line option to get colors and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionColor(string englishName,OptionColor colorValue,string prompt)
: Add a command line option to get colors and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue)
: Adds a command line option to get numbers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue,string prompt)
: Adds a command line option to get numbers and automatically saves the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionDouble(string englishName,OptionDouble numberValue)
: Adds a command line option to get numbers and automatically save the value.
: Returns - Option index value (>0) or 0 if option cannot be added.

int AddOptionDouble(string englishName,OptionDouble numberValue,string prompt)
: Adds a command line option to get numbers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionEnumList(string englishOptionName,T defaultValue)
: Adds a choice of enum values as list option
: Returns - Option index
: since 5.4

int AddOptionEnumList(string englishOptionName,T defaultValue,T[] include)
: Adds a choice of enum values as list option. Allows to include only some enum values.
: Returns - Option index
: since 6.0

int AddOptionEnumSelectionList(string englishOptionName,IEnumerable<T> enumSelection,int listCurrentIndex)
: Adds a list of enum values as option list. Use enumSelection[go.Option.CurrentListOptionIndex] to retrieve selection.
: since 5.4

int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue)
: Adds a command line option to get integers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue,string prompt)
: Adds a command line option to get integers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionInteger(string englishName,OptionInteger intValue)
: Adds a command line option to get integers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionInteger(string englishName,OptionInteger intValue,string prompt)
: Adds a command line option to get integers and automatically save the value.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionList(LocalizeStringPair optionName,IEnumerable<LocalizeStringPair> listValues,int listCurrentIndex)
: Adds a command line list option.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionList(string englishOptionName,IEnumerable<string> listValues,int listCurrentIndex)
: Adds a command line list option.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionToggle(LocalizeStringPair optionName,OptionToggle toggleValue)
: Adds a command line option to toggle a setting.
: Returns - option index value (>0) or 0 if option cannot be added.

int AddOptionToggle(string englishName,OptionToggle toggleValue)
: Adds a command line option to toggle a setting.
: Returns - option index value (>0) or 0 if option cannot be added.

void ClearCommandOptions()
: Clear all command options.

void ClearDefault()
: Clears any defaults set using SetDefaultPoint, SetDefaultNumber, SetDefaultString, or SetCommandPromptDefault.

Color Color()
: Gets a color if Get*() returns GetResult.Color.
: Returns - The color chosen by the user.

[Result](/rhinocommon/rhino/commands/result/) CommandResult()
: Helper method for getting command result value from getter results.
: Returns - The converted command result.

object CustomMessage()
: 

void Dispose()
: 

void EnableTransparentCommands(bool enable)
: Control the availability of transparent commands during the get.

T GetSelectedEnumValue()
: Returns the selected enum value. Use this in combination with .
     This must be called directly after having called a Get method, and having obtained a  value.
: since 5.4

T GetSelectedEnumValueFromSelectionList(IEnumerable<T> selectionList)
: Returns the selected enum value by looking at the list of values from which to select.
     Use this in combination with
: since 5.4

bool GotDefault()
: Returns True if user pressed Enter to accept a default point, number,
     or string set using SetDefaultPoint, SetDefaultNumber, or SetDefaultString.
: Returns - True if the result if the default point, number or string set. Otherwise, false.

System.Drawing.Point[] Line2d()
: Returns two points defining the location in the view window of the 2d line selected
     in GetPoint::Get2dLine().
     (0,0) = upper left corner of window.
: Returns - An array with two 2D points.

double Number()
: Gets a number if GetPoint.Get(), GetObject.GetObjects(), etc., returns GetResult.Number.
: Returns - The number chosen by the user.

[CommandLineOption](/rhinocommon/rhino/input/custom/commandlineoption/) Option()
: 

int OptionIndex()
: 

Rectangle PickRectangle()
: If the get was a GetObjects() and the mouse was used to select the objects,
     then the returned rect has left < right and top < bottom. This rect
     is the Windows GDI screen coordinates of the picking rectangle.
     RhinoViewport.GetPickXform( pick_rect, pick_xform )
     will calculate the picking transformation that was used.
     In all other cases, left=right=top=bottom=0;
: Returns - The picking rectangle; or 0 in the specified cases.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point()
: Gets a point if Get*() returns GetResult.Point.
: Returns - The point chosen by the user.

System.Drawing.Point Point2d()
: Returns location in view of point in selected in GetPoint::Get() or GetPoint::Get2dPoint().
     (0,0) = upper left corner of window.
: Returns - The location.

Rectangle Rectangle2d()
: Returns the location in the view of the 2d rectangle selected in GetPoint::Get2dRectangle().
     rect.left < rect.right and rect.top < rect.bottom
     (0,0) = upper left corner of window.
: Returns - The rectangle.

[GetResult](/rhinocommon/rhino/input/getresult/) Result()
: Returns result of the Get*() call.
: Returns - The result of the last Get*() call.

void SetCommandPrompt(string prompt)
: Sets prompt message that appears in the command prompt window.

void SetCommandPromptDefault(string defaultValue)
: Sets message that describes what default value will be used if the user presses enter.
     This description appears in angle brackets <> in the command prompt window. You do
     not need to provide a default value description unless you explicity enable AcceptNothing.

void SetDefaultColor(Color defaultColor)
: Sets a color as default value that will be returned if the user presses ENTER key during the get.

void SetDefaultInteger(int defaultValue)
: Sets a number as default value that will be returned if the user presses ENTER key during the get.

void SetDefaultNumber(double defaultNumber)
: Sets a number as default value that will be returned if the user presses ENTER key during the get.

void SetDefaultPoint(Point3d point)
: Sets a point as default value that will be returned if the user presses the ENTER key during the get.

void SetDefaultString(string defaultValue)
: Sets a string as default value that will be returned
     if the user presses ENTER key during the get.

void SetWaitDuration(int milliseconds)
: Sets the wait duration (in milliseconds) of the getter. If the duration passes without 
     the user making a decision, the GetResult.Timeout code is returned.

string StringResult()
: Gets a string if GetPoint.Get(), GetObject.GetObjects(), etc., returns GetResult.String.
: Returns - The string chosen by the user.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Vector()
: Gets a direction if Get*() returns GetResult.Point (Set by some digitizers, but in general it's (0,0,0).
: Returns - The vector chosen by the user.

[RhinoView](/rhinocommon/rhino/display/rhinoview/) View()
: Gets a view the user clicked in during GetPoint.Get(), GetObject.GetObjects(), etc.
: Returns - The view chosen by the user.
