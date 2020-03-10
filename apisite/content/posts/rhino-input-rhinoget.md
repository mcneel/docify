---
title: "Rhino.Input.RhinoGet"
draft: false
---

# Properties
## static BitmapFileTypes AllBitmapFileTypes
- (summary) 
- (since) 6.0
# Methods
## static Result Get2dRectangle(bool solidPen,Rectangle rectangle,RhinoView rectView)
- (summary) 
     Gets a rectangle in view window coordinates.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetAngle(string commandPrompt,Point3d basePoint,Point3d referencePoint,double defaultAngleRadians,double angleRadians)
- (summary) 
     Allows user to interactively pick an angle
     
- (since) 5.2
- (returns) Result This is some return comment
## static Result GetArc(Arc arc)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetBool(string prompt,bool acceptNothing,string offPrompt,string onPrompt,bool boolValue)
- (summary) Easy to use bool getter.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetBox(Box box)
- (summary) 
     Asks the user to select a Box in the viewport.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetBox(Box box,GetBoxMode mode,Point3d basePoint,string prompt1,string prompt2,string prompt3)
- (summary) 
     Asks the user to select a Box in the viewport.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetBoxWithCounts(int xMin,int xCount,int yMin,int yCount,int zMin,int zCount,Point3d[] corners)
- (summary)  Gets a 3d box with prompts for counts in X, Y and Z directions.
- (since) 6.0
- (returns) Result This is some return comment
## static Result GetCircle(Circle circle)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetColor(string prompt,bool acceptNothing,Color color)
- (summary) Easy to use color getter.
- (since) 5.0
- (returns) Result This is some return comment
## static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent,BitmapFileTypes fileTypes)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## static string GetFileNameScripted(GetFileNameMode mode,string defaultName)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## static Result GetGrip(GripObject grip,string prompt)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetGrips(GripObject[] grips,string prompt)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetHelix(NurbsCurve helix)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetInteger(string prompt,bool acceptNothing,int outputNumber)
- (summary) 
     Easy to use number getter.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetInteger(string prompt,bool acceptNothing,int outputNumber,int lowerLimit,int upperLimit)
- (summary) 
     Easy to use number getter.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetLine(Line line)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetLinearDimension(LinearDimension dimension)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetMultipleObjects(string prompt,bool acceptNothing,GetObjectGeometryFilter filter,ObjRef[] rhObjects)
- (summary) Easy to use object getter for getting multiple objects.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetMultipleObjects(string prompt,bool acceptNothing,ObjectType filter,ObjRef[] rhObjects)
- (summary) Easy to use object getter for getting multiple objects.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetNumber(string prompt,bool acceptNothing,double outputNumber)
- (summary) 
     Easy to use number getter.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetNumber(string prompt,bool acceptNothing,double outputNumber,double lowerLimit,double upperLimit)
- (summary) 
     Easy to use number getter.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetOneObject(string prompt,bool acceptNothing,GetObjectGeometryFilter filter,ObjRef objref)
- (summary) Easy to use object getter.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetOneObject(string prompt,bool acceptNothing,ObjectType filter,ObjRef rhObject)
- (summary) Easy to use object getter.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetPlane(Plane plane)
- (summary) 
     Gets an oriented infinite plane.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetPoint(string prompt,bool acceptNothing,Point3d point)
- (summary) 
     Gets a point coordinate from the document.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetPointOnMesh(Guid meshObjectId,string prompt,bool acceptNothing,Point3d point)
- (summary) 
     Gets a point constrained to an existing mesh in the document.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetPointOnMesh(MeshObject meshObject,string prompt,bool acceptNothing,Point3d point)
- (summary) 
     Gets a point constrained to an existing mesh in the document.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetPolygon(int numberSides,bool inscribed,Polyline polyline)
- (summary) 
- (since) 6.0
- (returns) Result This is some return comment
## static Result GetPolyline(Polyline polyline)
- (summary) 
- (since) 5.9
- (returns) Result This is some return comment
## static Result GetPrintWindow(ViewCaptureSettings settings)
- (summary) 
- (since) 6.1
- (returns) Result This is some return comment
## static Result GetRectangle(GetBoxMode mode,Point3d firstPoint,IEnumerable<string> prompts,Point3d[] corners)
- (summary) 
     Gets a 3d rectangle made up of four points.
     
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetRectangle(Point3d[] corners)
- (summary)  Gets a 3d rectangle. 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetRectangle(string firstPrompt,Point3d[] corners)
- (summary)  Gets a 3d rectangle. 
- (since) 6.0
- (returns) Result This is some return comment
## static Result GetRectangleWithCounts(int xMin,int xCount,int yMin,int yCount,Point3d[] corners)
- (summary)  Gets a 3d rectangle with prompts for counts in X and Y directions.
- (since) 6.0
- (returns) Result This is some return comment
## static Result GetSpiral(NurbsCurve spiral)
- (summary) 
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetString(string prompt,bool acceptNothing,string outputString)
- (summary) Easy to use string getter.
- (since) 5.0
- (returns) Result This is some return comment
## static Result GetView(string commandPrompt,RhinoView view)
- (summary) 
     Allows the user to interactively pick a viewport.
     
- (since) 5.0
- (returns) Result This is some return comment
## static bool InGet(RhinoDoc doc)
- (summary) 
     Returns True if the document is current in a "Get" operation.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool InGetObject(RhinoDoc doc)
- (summary) Returns True if currently in a GetObject.GetObjects()
- (since) 6.0
- (returns) bool This is some return comment
## static bool InGetPoint(RhinoDoc doc)
- (summary) Returns True if currently in a GetPoint.Get()
- (since) 6.0
- (returns) bool This is some return comment
## static string StringToCommandOptionName(string stringToConvert)
- (summary) 
     Convert some arbitrary string value to a valid command option name
     removing any invalid characters.
     
- (since) 6.0
- (returns) string This is some return comment
## static LocalizeStringPair StringToCommandOptionName(string englishString,string localizedString)
- (summary) 
     Convert some arbitrary string value to a valid command option name
     removing any invalid characters.
     
- (since) 6.0
- (returns) LocalizeStringPair This is some return comment
