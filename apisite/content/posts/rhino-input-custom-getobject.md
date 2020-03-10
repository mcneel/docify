---
title: "Rhino.Input.Custom.GetObject"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Input.Custom.GetObject()
- (summary) 
- (since) 5.0
# Properties
## bool AlreadySelectedObjectSelect
- (summary) 
     Allow selecting objects that are already selected. By default, GetObjects() disallows
     selection of objects that are already selected to avoid putting the same object
     in the selection set more than once. Calling EnableAlreadySelectedObjectSelect = true
     overrides that restriction and allows selected objects to be selected and
     returned by GetObjects. This is useful because, coupled with the return immediately
     mode of GetObjects(1, -1), it is possible to select a selected object to deselect
     when the selected objects are being managed outside GetObjects() as in the case of
     CRhinoPolyEdge::GetEdge().
     
- (since) 5.0
## bool BottomObjectPreference
- (summary) 
     By default, if a call to Input is permitted to select different parts of
     the same object, like a polysurface, a surface and an edge, then the
     top-most object is prefered. (polysurface beats face beats edge). If
     you want the bottom most object to be prefered, then call 
     EnableBottomObjectPreference = True before calling GetObjects().
     
- (since) 5.0
## bool ChooseOneQuestion
- (summary) 
     By default, if a call to Input is permitted to select different parts
     of the same object, like a polysurface and an edge of that polysurface,
     then the top-most object is automatically selected. If you want the
     choose-one-object mechanism to include pop up in these cases, then call
     EnableChooseOneQuestion = True before calling GetObjects().
     
- (since) 5.0
## bool DeselectAllBeforePostSelect
- (summary) 
     True if pre-selected input will be deselected before
     post-selection begins when no pre-selected input is valid.
     
- (since) 5.0
## GeometryAttributeFilter GeometryAttributeFilter
- (summary) 
     The geometry attribute filter provides a secondary filter that
     can be used to restrict which objects can be selected. Control
     of the type of geometry (points, curves, surfaces, meshes, etc.)
     is provided by GetObject.SetGeometryFilter. The geometry attribute
     filter is used to require the selected geometry to have certain
     attributes (open, closed, etc.). The default attribute filter
     permits selection of all types of geometry.
     
- (since) 5.0
## ObjectType GeometryFilter
- (summary) 
     The geometry type filter controls which types of geometry
     (points, curves, surfaces, meshes, etc.) can be selected.
     The default geometry type filter permits selection of all
     types of geometry.
     NOTE: the filter can be a bitwise combination of multiple ObjectTypes.
     
- (since) 5.0
## bool GroupSelect
- (summary) 
     By default, groups are ignored in GetObject. If you want your call to
     GetObjects() to select every object in a group that has any objects
     selected, then enable group selection.
     
- (since) 5.0
## bool InactiveDetailPickEnabled
- (summary) 
     By default, objects in inactive details are not permitted to be picked.
     In a few rare cases this is used (ex. picking circles during DimRadius)
     
- (since) 5.8
## int ObjectCount
- (summary) 
     Gets the number of objects that were selected.
     
- (since) 5.0
## bool ObjectsWerePreselected
- (summary) 
- (since) 5.0
## bool OneByOnePostSelect
- (summary) 
     In one-by-one post selection, the user is forced
     to select objects by post picking them one at a time.
     
- (since) 5.0
## bool ReferenceObjectSelect
- (summary) 
     By default, reference objects can be selected. If you do not want to be
     able to select reference objects, then call EnableReferenceObjectSelect=false.
     
- (since) 5.0
## uint SerialNumber
- (summary) 
     Each instance of GetObject has a unique runtime serial number that
     is used to identify object selection events associated with that instance.
     
- (since) 5.0
## bool SubObjectSelect
- (summary) 
     By default, GetObject.Input will permit a user to select
     sub-objects (like a curve in a b-rep or a curve in a group).
     If you only want the user to select "top" level objects,
     then call EnableSubObjectSelect = false.
     
- (since) 5.0
# Methods
## static GetObject ActiveGetObject(RhinoDoc doc)
- (summary) 
     Get the currently running GetObject for a given document
     
- (since) 6.3
- (returns) GetObject This is some return comment
## void AppendToPickList(ObjRef objref)
- (summary) 
- (since) 6.3
- (returns) void This is some return comment
## void ClearObjects()
- (summary) 
     Clear possible special object drawing
     
- (since) 6.12
- (returns) void This is some return comment
## bool CustomGeometryFilter(RhinoObject rhObject,GeometryBase geometry,ComponentIndex componentIndex)
- (summary) 
     Checks geometry to see if it can be selected.
     Override to provide fancy filtering.
     
- (since) 5.0
- (returns) bool This is some return comment
## void DisablePreSelect()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void EnableClearObjectsOnEntry(bool enable)
- (summary) 
     By default the picked object list is cleared when GetObject.GetObjects() is called.
     If you are reusing a GetObject class and do not want the existing object list
     cleared when you call Input, then call EnableClearObjectsOnEntry(false) before
     calling GetObjects().
     
- (since) 5.0
- (returns) void This is some return comment
## void EnableHighlight(bool enable)
- (summary) 
     By default, any object post-pick selected by GetObjects() is highlighted.
     If you want to post-pick objects and not have them automatically highlight,
     then call EnableHighlight = false.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnableIgnoreGrips(bool enable)
- (summary) 
     By default, post selection will select objects with grips on. If you do
     not want to be able to post select objects with grips on, then call
     EnableIgnoreGrips = false. The ability to preselect an object with grips
     on is determined by the value returned by the virtual
     RhinoObject.IsSelectableWithGripsOn.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnablePostSelect(bool enable)
- (summary) 
     Control the availability of post selection in GetObjects.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnablePreSelect(bool enable,bool ignoreUnacceptablePreselectedObjects)
- (summary) 
     Control the pre selection behavior GetObjects.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnablePressEnterWhenDonePrompt(bool enable)
- (summary) 
     By default, when GetObject.GetObjects is called with minimumNumber > 0
     and maximumNumber = 0, the command prompt automatically includes "Press Enter
     when done" after the user has selected at least minimumNumber of objects. If
     you want to prohibit the addition of the "Press Enter when done", then call
     EnablePressEnterWhenDonePrompt = false;
     
- (since) 5.0
- (returns) void This is some return comment
## void EnableSelPrevious(bool enable)
- (summary) 
     By default, any object selected during a command becomes part of the
     "previous selection set" and can be reselected by the SelPrev command.
     If you need to select objects but do not want them to be selected by
     a subsquent call to SelPrev, then call EnableSelPrev = false.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnableUnselectObjectsOnExit(bool enable)
- (summary) 
     By default any objects in the object list are unselected when GetObject.GetObjects()
     exits with any return code besides Object. If you want to leave the objects
     selected when non-object input is returned, then call EnableUnselectObjectsOnExit(false)
     before calling GetObjects().
     
- (since) 5.0
- (returns) void This is some return comment
## GetResult Get()
- (summary) 
     Call to select a single object.
     
- (since) 5.0
- (returns) GetResult This is some return comment
## GetResult GetMultiple(int minimumNumber,int maximumNumber)
- (summary) Call to select objects.
- (since) 5.0
- (returns) GetResult This is some return comment
## ObjRef Object(int index)
- (summary) 
- (since) 5.0
- (returns) ObjRef This is some return comment
## ObjRef[] Objects()
- (summary) 
- (since) 5.0
- (returns) ObjRef[] This is some return comment
## bool PassesGeometryAttributeFilter(RhinoObject rhObject,GeometryBase geometry,ComponentIndex componentIndex)
- (summary) 
     Checks geometry to see if it passes the basic GeometryAttributeFilter.
     
- (since) 5.0
- (returns) bool This is some return comment
## void SetCustomGeometryFilter(GetObjectGeometryFilter filter)
- (summary) 
     Set filter callback function that will be called by the CustomGeometryFilter
     
- (since) 5.0
- (returns) void This is some return comment
## void SetPressEnterWhenDonePrompt(string prompt)
- (summary) 
     The default prompt when EnablePressEnterWhenDonePrompt is enabled is "Press Enter
     when done". Use this function to specify a different string to be appended.
     
- (since) 5.0
- (returns) void This is some return comment
