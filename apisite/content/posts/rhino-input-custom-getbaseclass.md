---
title: "Rhino.Input.Custom.GetBaseClass"
date: 2020-03-10 09:24:56Z
draft: false
---

# Methods
## static void PostCustomMessage(object messageData)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void AcceptColor(bool enable)
- (summary) 
     If you want to allow the user to be able to type in a color r,g,b or name
     during GetPoint.Get(), GetObject::GetObjects(), etc., then call AcceptColor(true)
     before calling GetPoint()/GetObject(). If the user chooses to type in a color,
     then the result code GetResult.Color is returned and you can use RhinoGet.Color()
     to get the value of the color.  If the get accepts points, then the user will not
     be able to type in r,g,b colors but will be able to type color names.
     
- (since) 5.0
- (returns) void This is some return comment
## void AcceptCustomMessage(bool enable)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void AcceptEnterWhenDone(bool enable)
- (summary) 
     There are instances of RhinoGet that prompt with "Press Enter when Done." yet do not call AcceptNothing().
     On the Mac, these instances need an additional call to AcceptEnterWhenDone() so the GetPointOptions dialog
     can correctly enable the Done button.
     
- (since) 6.0
- (returns) void This is some return comment
## void AcceptNothing(bool enable)
- (summary) 
     If you want to allow the user to be able to press enter in order to
     skip selecting a something in GetPoint.Get(), GetObject::GetObjects(),
     etc., then call AcceptNothing( True ) beforehand.
     
- (since) 5.0
- (returns) void This is some return comment
## void AcceptNumber(bool enable,bool acceptZero)
- (summary) 
     If you want to allow the user to be able to type in a number during GetPoint.Get(),
     GetObject::GetObjects(), etc., then call AcceptNumber() beforehand.
     If the user chooses to type in a number, then the result code GetResult.Number is
     returned and you can use RhinoGet.Number() to get the value of the number. If you
     are using GetPoint and you want "0" to return (0,0,0) instead of the number zero, 
     then set acceptZero = false.
     
- (since) 5.0
- (returns) void This is some return comment
## void AcceptPoint(bool enable)
- (summary) 
     If you want to allow the user to be able to type in a point then call AcceptPoint(true)
     before calling GetPoint()/GetObject(). If the user chooses to type in a number, then
     the result code GetResult.Point is returned and you can use RhinoGet.Point()
     to get the value of the point.
     
- (since) 5.0
- (returns) void This is some return comment
## void AcceptString(bool enable)
- (summary) 
     If you want to allow the user to be able to type in a string during GetPoint.Get(),
     GetObject::GetObjects(), etc., then call AcceptString(true) before calling
     GetPoint()/GetObject(). If the user chooses to type in a string, then the result code
     GetResult.String is returned and you can use RhinoGet.String() to get the value of the string.
     
- (since) 5.0
- (returns) void This is some return comment
## void AcceptUndo(bool enable)
- (summary) 
     If you want to allow the user to have an 'undo' option in GetPoint.Get(),
     GetObject.GetObjects(), etc., then call AcceptUndo(true) beforehand.
     
- (since) 5.0
- (returns) void This is some return comment
## int AddOption(LocalizeStringPair optionName)
- (summary) 
     Adds a command line option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOption(LocalizeStringPair optionName,LocalizeStringPair optionValue)
- (summary) 
     Adds a command line option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOption(LocalizeStringPair optionName,LocalizeStringPair optionValue,bool hiddenOption)
- (summary) 
     Adds a command line option.
     
- (since) 6.9
- (returns) int This is some return comment
## int AddOption(string englishOption)
- (summary) 
     Adds a command line option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOption(string englishOption,string englishOptionValue)
- (summary) 
     Adds a command line option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOption(string englishOption,string englishOptionValue,bool hiddenOption)
- (summary) 
     Adds a command line option.
     
- (since) 6.9
- (returns) int This is some return comment
## int AddOptionColor(LocalizeStringPair optionName,OptionColor colorValue)
- (summary) 
     Add a command line option to get colors and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionColor(LocalizeStringPair optionName,OptionColor colorValue,string prompt)
- (summary) 
     Add a command line option to get colors and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionColor(string englishName,OptionColor colorValue)
- (summary) 
     Add a command line option to get colors and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionColor(string englishName,OptionColor colorValue,string prompt)
- (summary) 
     Add a command line option to get colors and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue)
- (summary) 
     Adds a command line option to get numbers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue,string prompt)
- (summary) 
     Adds a command line option to get numbers and automatically saves the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionDouble(string englishName,OptionDouble numberValue)
- (summary) 
     Adds a command line option to get numbers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionDouble(string englishName,OptionDouble numberValue,string prompt)
- (summary) 
     Adds a command line option to get numbers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionEnumList(string englishOptionName,T defaultValue)
- (summary) 
     Adds a choice of enum values as list option 
     
- (since) 5.4
- (returns) int This is some return comment
## int AddOptionEnumList(string englishOptionName,T defaultValue,T[] include)
- (summary) 
     Adds a choice of enum values as list option. Allows to include only some enum values.
     
- (since) 6.0
- (returns) int This is some return comment
## int AddOptionEnumSelectionList(string englishOptionName,IEnumerable<T> enumSelection,int listCurrentIndex)
- (summary) 
     Adds a list of enum values as option list. Use enumSelection[go.Option.CurrentListOptionIndex] to retrieve selection.
     
- (since) 5.4
- (returns) int This is some return comment
## int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue)
- (summary) 
     Adds a command line option to get integers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue,string prompt)
- (summary) 
     Adds a command line option to get integers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionInteger(string englishName,OptionInteger intValue)
- (summary) 
     Adds a command line option to get integers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionInteger(string englishName,OptionInteger intValue,string prompt)
- (summary) 
     Adds a command line option to get integers and automatically save the value.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionList(LocalizeStringPair optionName,IEnumerable<LocalizeStringPair> listValues,int listCurrentIndex)
- (summary) 
     Adds a command line list option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionList(string englishOptionName,IEnumerable<string> listValues,int listCurrentIndex)
- (summary) 
     Adds a command line list option.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionToggle(LocalizeStringPair optionName,OptionToggle toggleValue)
- (summary) 
     Adds a command line option to toggle a setting.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddOptionToggle(string englishName,OptionToggle toggleValue)
- (summary) 
     Adds a command line option to toggle a setting.
     
- (since) 5.0
- (returns) int This is some return comment
## void ClearCommandOptions()
- (summary) Clear all command options.
- (since) 5.0
- (returns) void This is some return comment
## void ClearDefault()
- (summary) 
     Clears any defaults set using SetDefaultPoint, SetDefaultNumber, SetDefaultString, or SetCommandPromptDefault.
     
- (since) 5.0
- (returns) void This is some return comment
## Color Color()
- (summary) Gets a color if Get*() returns GetResult.Color.
- (since) 5.0
- (returns) Color This is some return comment
## Result CommandResult()
- (summary) 
     Helper method for getting command result value from getter results.
     
- (since) 5.0
- (returns) Result This is some return comment
## object CustomMessage()
- (summary) 
- (since) 5.0
- (returns) object This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void EnableTransparentCommands(bool enable)
- (summary) 
     Control the availability of transparent commands during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## T GetSelectedEnumValue()
- (summary) 
     Returns the selected enum value. Use this in combination with .
     This must be called directly after having called a Get method, and having obtained a  value.
- (since) 5.4
- (returns) T This is some return comment
## T GetSelectedEnumValueFromSelectionList(IEnumerable<T> selectionList)
- (summary) 
     Returns the selected enum value by looking at the list of values from which to select.
     Use this in combination with 
- (since) 5.4
- (returns) T This is some return comment
## bool GotDefault()
- (summary) 
     Returns True if user pressed Enter to accept a default point, number,
     or string set using SetDefaultPoint, SetDefaultNumber, or SetDefaultString.
     
- (since) 5.0
- (returns) bool This is some return comment
## System.Drawing.Point[] Line2d()
- (summary) 
     Returns two points defining the location in the view window of the 2d line selected
     in GetPoint::Get2dLine().
     (0,0) = upper left corner of window.
- (since) 5.0
- (returns) System.Drawing.Point[] This is some return comment
## double Number()
- (summary) 
     Gets a number if GetPoint.Get(), GetObject.GetObjects(), etc., returns GetResult.Number.
     
- (since) 5.0
- (returns) double This is some return comment
## CommandLineOption Option()
- (summary) 
- (since) 5.0
- (returns) CommandLineOption This is some return comment
## int OptionIndex()
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## Rectangle PickRectangle()
- (summary) 
     If the get was a GetObjects() and the mouse was used to select the objects,
     then the returned rect has left < right and top < bottom. This rect
     is the Windows GDI screen coordinates of the picking rectangle.
     RhinoViewport.GetPickXform( pick_rect, pick_xform )
     will calculate the picking transformation that was used.
     In all other cases, left=right=top=bottom=0;
     
- (since) 5.0
- (returns) Rectangle This is some return comment
## Point3d Point()
- (summary) 
     Gets a point if Get*() returns GetResult.Point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## System.Drawing.Point Point2d()
- (summary) 
     Returns location in view of point in selected in GetPoint::Get() or GetPoint::Get2dPoint().
     (0,0) = upper left corner of window.
     
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## Rectangle Rectangle2d()
- (summary) 
     Returns the location in the view of the 2d rectangle selected in GetPoint::Get2dRectangle().
     rect.left < rect.right and rect.top < rect.bottom
     (0,0) = upper left corner of window.
     
- (since) 5.0
- (returns) Rectangle This is some return comment
## GetResult Result()
- (summary) Returns result of the Get*() call.
- (since) 5.0
- (returns) GetResult This is some return comment
## void SetCommandPrompt(string prompt)
- (summary) 
     Sets prompt message that appears in the command prompt window.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetCommandPromptDefault(string defaultValue)
- (summary) 
     Sets message that describes what default value will be used if the user presses enter.
     This description appears in angle brackets <> in the command prompt window. You do
     not need to provide a default value description unless you explicity enable AcceptNothing.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDefaultColor(Color defaultColor)
- (summary) 
     Sets a color as default value that will be returned if the user presses ENTER key during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDefaultInteger(int defaultValue)
- (summary) 
     Sets a number as default value that will be returned if the user presses ENTER key during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDefaultNumber(double defaultNumber)
- (summary) 
     Sets a number as default value that will be returned if the user presses ENTER key during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDefaultPoint(Point3d point)
- (summary) 
     Sets a point as default value that will be returned if the user presses the ENTER key during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDefaultString(string defaultValue)
- (summary) 
     Sets a string as default value that will be returned
     if the user presses ENTER key during the get.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetWaitDuration(int milliseconds)
- (summary) 
     Sets the wait duration (in milliseconds) of the getter. If the duration passes without 
     the user making a decision, the GetResult.Timeout code is returned.
     
- (since) 5.0
- (returns) void This is some return comment
## string StringResult()
- (summary) 
     Gets a string if GetPoint.Get(), GetObject.GetObjects(), etc., returns GetResult.String.
     
- (since) 5.0
- (returns) string This is some return comment
## Vector3d Vector()
- (summary) 
     Gets a direction if Get*() returns GetResult.Point (Set by some digitizers, but in general it's (0,0,0).
     
- (since) 5.0
- (returns) Vector3d This is some return comment
## RhinoView View()
- (summary) 
     Gets a view the user clicked in during GetPoint.Get(), GetObject.GetObjects(), etc.
     
- (since) 5.0
- (returns) RhinoView This is some return comment
