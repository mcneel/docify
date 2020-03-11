---
title: "RenderContent"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderContent : IDisposable
```
## Events

static ContentAdded
: Used to monitor render content addition to the document.
: since 5.7

static ContentChanged
: Used to monitor render content modifications.
: since 5.7

static ContentDeleted
: Used to monitor render content deletion from the document.
: since 6.0

static ContentDeleting
: Used to monitor render content deletion from the document.
: since 5.7

static ContentFieldChanged
: This event is raised when a field value is modified.
: since 5.11

static ContentRenamed
: Used to monitor render content renaming in the document.
: since 5.7

static ContentReplaced
: Used to monitor render content replacing in the document.
: since 5.7

static ContentReplacing
: Used to monitor render content replacing in the document.
: since 5.7

static ContentUpdatePreview
: Used to monitor render content preview updates.
: since 5.7

static CurrentEnvironmentChanged
: Event fired when changes to current environments have been made.
     This will be one of Background, ReflectionAndRefraction or Skylighting
     Since 6.11
: since 6.11
## Properties

bool CanBeEdited
: Determines if the content can be edited.
: since 6.0

String Category
: Category for this content.
: since 6.7

String ChildSlotDisplayName
: Returns the localized display name of the child slot name
: since 7.0

String ChildSlotName
: 
: since 5.1

IntPtr CppPointer
: 
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: If this content is in a document content list, the document will be returned.  Otherwise null.
: since 5.10

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) DocumentAssoc
: If this content is associated by a document in any way, the document will be returned.  This includes copies of
     contents that were initially in the document. Otherwise null.
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) DocumentRegistered
: If this content is used by a document, including not in the content lists (for example, as a decal),
     the document will be returned.  Otherwise null.
: since 6.0

[FieldDictionary](/rhinocommon/rhino/render/fields/fielddictionary/) Fields
: Rhino.Render.Fields FieldDictionary which provides access to setting
     and retrieving field values.
: since 5.1

IEnumerable<string> FilesToEmbed
: A string array of full paths to files used by the content that may be
     embedded in .3dm files and library files (.rmtl, .renv, .rtex). The
     default implementation returns an empty string list. Override this to
     return the file name or file names used by your content. This is
     typically used by textures that reference files containing the texture
     imagery.
: since 5.12

RenderContent FirstChild
: Return First child of this content or nullptr if none.
: since 6.0

bool Hidden
: Determines if the content has the hidden flag set.
: since 5.1

Guid Id
: Instance identifier for this content.
: since 5.1

bool IsDefaultInstance
: Checks if render content is default instance.
: since 6.0

bool IsHiddenByAutoDelete
: Contents can be created as 'auto-delete' by certain commands such as 'PictureFrame'.
     These contents are automatically hidden from the user when the associated Rhino object
     is deleted. They are later deleted when the document is saved.
: since 6.15

bool IsLocked
: Set this property to True prior to adding content to the document to
     lock the content browser editing UI methods.  Setting this to True will
     keep the browser from allowing things like deleting, renaming or
     changing content.  This is useful for custom child content that you
     want to be editable but persistent.  Setting this after adding content
     to the document will cause an exception to be thrown.
: since 5.12

String Name
: Instance name for this content.
: since 5.1

RenderContent NextSibling
: Return First sibling of this content or nullptr if none.
: since 6.0

String Notes
: Notes for this content.
: since 5.1

RenderContent Parent
: Returns the top content in this parent/child chain.
: since 5.11

[ProxyTypes](/rhinocommon/rhino/render/proxytypes/) ProxyType
: Gets the proxy type of the render content
: since 6.0

uint RenderHash
: Render hash for the content hierarchy. It iterates children and includes
     a caching mechanism which means the hash value can be retrieved quickly
     if it hasn't changed. The cache is invalidated when Changed() is called.
     
     You can override the  method to provide
     a custom hash value.
: since 6.0

String Tags
: Tags for this content.
: since 6.4

bool TopLevel
: Returns True if this content has no parent, False if it is the child of another content.
: since 5.1

RenderContent TopLevelParent
: Returns the top content in this parent/child chain.
: since 5.1

String TypeDescription
: Description for your content type.  ie.  "Procedural checker pattern"
: since 5.1

Guid TypeId
: Type identifier for this content
: since 6.0

String TypeName
: Name for your content type.  ie. "My .net Texture"
: since 5.1

String Xml
: 
: since 6.0
## Methods

static bool AddPersistentRenderContent(RenderContent renderContent)
: Add a material, environment or texture to the internal RDK document lists as
     top level content.  The content must have been returned from
     RenderContent::MakeCopy, NewContentFromType or a similar function that returns
     a non-document content.
: Returns - True on success.
: since 5.1

static bool AddPersistentRenderContent(RhinoDoc document,RenderContent renderContent)
: Add a material, environment or texture to the internal RDK document lists as
     top level content.  The content must have been returned from
     RenderContent::MakeCopy, NewContentFromType or a similar function that returns
     a non-document content.
: Returns - True on success.
: since 6.0

static RenderContent Create(Guid type,RenderContent parent,String childSlotName,ShowContentChooserFlags flags,RhinoDoc doc)
: Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
: Returns - A new persistent render content.
: since 5.1

static RenderContent Create(Guid type,ShowContentChooserFlags flags,RhinoDoc doc)
: Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
: Returns - A new persistent render content.
: since 5.1

static RenderContent Create(Type type,RenderContent parent,String childSlotName,ShowContentChooserFlags flags,RhinoDoc doc)
: Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
: Returns - A new persistent render content.
: since 5.1

static RenderContent Create(Type type,ShowContentChooserFlags flags,RhinoDoc doc)
: Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
: Returns - A new persistent render content.
: since 5.1

static RenderContent FromId(RhinoDoc document,Guid id)
: Search for a content object based on its Id
: Returns - Returns the content object with the specified Id if it is found
     otherwise it returns null.
: since 5.7

static RenderContent FromXml(String xml)
: 
: since 6.0

static RenderContent FromXml(String xml,RhinoDoc doc)
: 
: since 6.4

static RenderContent LoadFromFile(String filename)
: Loads content from a library file.  Does not add the content to the persistent content list.
     Use AddPersistantContent to add it to the list.
: Returns - The loaded content or None if an error occurred.
: since 5.1

static Type[] RegisterContent(Assembly assembly,Guid pluginId)
: Call RegisterContent in your plug-in's OnLoad function in order to register all of the
     custom RenderContent classes in your assembly.
: Returns - array of render content types registered on success. None on error.
: since 5.1

static Type[] RegisterContent(PlugIn plugin)
: Call RegisterContent in your plug-in's OnLoad function in order to register all of the
     custom RenderContent classes in your assembly.
: Returns - array of render content types registered on success. None on error.
: since 5.1

bool AddAutomaticUserInterfaceSection(string caption,int id)
: Add a new automatic user interface section, Field values which include
     prompts will be automatically added to this section.
: Returns - Returns True if the automatic tab section was added otherwise; returns
     False on error.
: since 5.1

bool AddChild(RenderContent renderContent)
: 
: since 5.6

bool AddChild(RenderContent renderContent,String childSlotName)
: 
: since 6.0

bool AddUserInterfaceSection(ICollapsibleSection section)
: 
: since 6.0

UI.UserInterfaceSection AddUserInterfaceSection(Type classType,string caption,bool createExpanded,bool createVisible)
: Add a new .NET control to an content expandable tab section, the height
     of the createExpanded tabs client area will be the initial height of the
     specified control.
: Returns - Returns the UserInterfaceSection object used to manage the new 
     user control object.
: since 5.1

void BeginChange(ChangeContexts changeContext)
: Begins a change or batch of changes. This returns a reference to the
     content which you should use to make your changes. It may also make a
     copy of the content state allowing  to send an
     event with the old and new contents. Calls to this method are counted;
     you must call EndChange() once for every call to BeginChange().
     Note:
       If Changed() was called between the calls to BeginChange() and
       EndChange(), the last call to EndChange() may cause the ContentChanged
       event to be sent.
: since 6.0

void BindParameterToField(string parameterName,Field field,ChangeContexts setEvent)
: Use bindings to automatically wire parameters to fields
: since 5.7

void BindParameterToField(string parameterName,string childSlotName,Field field,ChangeContexts setEvent)
: Use bindings to automatically wire parameters to fields
: since 5.7

bool ChangeChild(RenderContent oldContent,RenderContent newContent)
: 
: since 5.6

double ChildSlotAmount(String childSlotName)
: Gets the amount property for the texture in the specified child slot.  Values are typically from 0.0 - 100.0
: since 5.7

string ChildSlotNameFromParamName(String paramName)
: A "child slot" is the specific "slot" that a child (usually a texture) occupies.
     This is generally the "use" of the child - in other words, the thing the child
     operates on.  Some examples are "color", "transparency".
: Returns - The default behavior for these functions is to return the input string.
     Sub-classes may (in the future) override these functions to provide different mappings.
: since 5.1

bool ChildSlotOn(String childSlotName)
: Gets the on-ness property for the texture in the specified child slot.
: since 5.7

void DeleteAllChildren(ChangeContexts changeContexts)
: 
: since 5.10

bool DeleteChild(string childSlotName,ChangeContexts changeContexts)
: 
: since 5.10

void Dispose()
: 
: since 5.1

bool DynamicIcon(Size size,Bitmap bitmap,DynamicIconUsage usage)
: 
: since 6.0

RenderContent Edit()
: Call this method to open the content in the a modal version of the editor.
     The content must be in the document or the call will fail.
: Returns - Returns the edited content on succees or None on error.
: since 6.13

void EndChange()
: Ends a change or batch of changes. Calls to this method are counted;
     you must call this method once for every call to .
     Note:
       If  was called with ChangeContexts.UI,
       ChangeContexts.Program, ChangeContexts.Drop or ChangeContexts.UI.Tree
       and Changed() was called between the calls to  and
       EndChange(), the last call to EndChange() will raise the
        event.
: since 6.0

DataSources.ContentFactory Factory()
: 
: since 6.10

RenderContent FindChild(String childSlotName)
: 
: since 5.1

RenderContent ForDisplay()
: **** This method is for proxies and will be marked obsolete in V7 ****
    
     The only place a single proxy can be displayed is in the
     New Content Control main thumbnail. All other attempts to
     use a single proxy in a UI require it to be replaced with
     the corresponding multi proxy. Single proxies override this
     to find the corresponding multi proxy.
: Returns - The cotnent.
: since 6.9

object GetChildSlotParameter(String parameterName,String childSlotName)
: Extra requirements are a way of specifying extra functionality on parameters in the automatic UI.
     Implement this function to specify additional functionality for automatic UI sections or the texture summary.
     See IAutoUIExtraRequirements.h in the C++ RDK for string definitions for the parameter names.
: Returns - Call the base class if you do not support the extra requirement parameter.
     Current supported return values are (int, bool, float, double, string, Guid, Color, Vector3d, Point3d, DateTime)
: since 5.7

string[] GetEmbeddedFilesList()
: 
: since 6.0

object GetParameter(String parameterName)
: Query the content instance for the value of a given named parameter.
     If you do not support this parameter, call the base class.
: Returns - IConvertible. Note that you can't directly cast from object, instead you have to use the Convert mechanism.
: since 5.7

bool GetUnderlyingInstances(RenderContentCollection collection)
: 
: since 7.0

bool Icon(Size size,Bitmap bitmap)
: 
: since 6.0

bool Initialize()
: 
: since 6.1

bool IsCompatible(Guid renderEngineId)
: 
: since 6.0

bool IsContentTypeAcceptableAsChild(Guid type,String childSlotName)
: 
: since 6.0

bool IsFactoryProductAcceptableAsChild(ContentFactory factory,String childSlotName)
: 
: since 6.1

bool IsFactoryProductAcceptableAsChild(Guid kindId,string factoryKind,string childSlotName)
: Override this method to restrict the type of acceptable child content.
     The default implementation of this method just returns true.
: Returns - Return True only if content with the specified kindId can be  accepted
     as a child in the specified child slot.
: since 5.11

bool IsReference()
: Query whether or not the content or any of its ancestors is a reference content.
: Returns - True if the content is a reference, else false
: since 6.9

bool IsRenderHashCached()
: This method is deprecated and no longer called. For more information
     see
: Returns - bool
: since 6.0

RenderContent MakeCopy()
: Create a copy of the render content. All content is the same, except for the
     instance Id.
: Returns - The new RenderContent
: since 6.0

[MatchDataResult](/rhinocommon/rhino/render/rendercontent/matchdataresult/) MatchData(RenderContent oldContent)
: Implement to transfer data from another content to this content during creation.
: Returns - Information about how much data was matched.
: since 6.0

[PreviewSceneServer](/rhinocommon/rhino/render/previewsceneserver/) NewPreviewSceneServer(SceneServerData ssd)
: Gets the PreviewSceneServer of the content
: since 6.0

bool OpenInEditor()
: Call this method to open the content in the relevant thumbnail editor
     and select it for editing by the user. The content must be in the
     document or the call will fail.
: Returns - Returns True on success or False on error.
: since 5.7

bool OpenInModalEditor()
: Call this method to open the content in the a modal version of the editor.
     The content must be in the document or the call will fail.
: Returns - Returns True on success or False on error.
: since 5.7

string ParamNameFromChildSlotName(String childSlotName)
: A "child slot" is the specific "slot" that a child (usually a texture) occupies.
     This is generally the "use" of the child - in other words, the thing the child
     operates on.  Some examples are "color", "transparency".
: Returns - The default behavior for these functions is to return the input string.  Sub-classes may (in the future) override these functions to provide different mappings.
: since 5.1

uint RenderHashExclude(CrcRenderHashFlags flags,string excludeParameterNames)
: As RenderHash, but ignore parameter names given.
: Returns - Render hash
: since 6.2

uint RenderHashExclude(TextureRenderHashFlags flags,string excludeParameterNames)
: As RenderHash, but ignore parameter names given.
: Returns - Render hash
: since 6.0

bool Replace(RenderContent newcontent)
: 
: since 6.13

bool SetChild(RenderContent renderContent,String childSlotName)
: Set another content as a child of this content. This content may or may
     not be attached to a document.  If this content already has a child
     with the specified child slot name, that child will be deleted.  If
     this content is not attached to a document, the child will be added
     without sending any events.  If this content is attached to a document,
     the necessary events will be sent to update the UI.
     Note:
       Do not call this method to add children in your constructor. If you
       want to add default children, you should override Initialize() and add
       them there.
: Returns - Returns True if the content was added or the child slot with this name
     was modified otherwise; returns false.
: since 6.0

bool SetChild(RenderContent renderContent,String childSlotName,ChangeContexts changeContexts)
: Set another content as a child of this content. This content may or may
     not be attached to a document.  If this content already has a child
     with the specified child slot name, that child will be deleted.  If
     this content is not attached to a document, the child will be added
     without sending any events.  If this content is attached to a document,
     the necessary events will be sent to update the UI.
     Note:
       Do not call this method to add children in your constructor. If you
       want to add default children, you should override Initialize() and add
       them there.
: Returns - Returns True if the content was added or the child slot with this name
     was modified otherwise; returns false.
: since 5.10

void SetChildSlotAmount(String childSlotName,double amount,ChangeContexts cc)
: Sets the amount property for the texture in the specified child slot.  Values are typically from 0.0 - 100.0
: since 5.7

void SetChildSlotOn(String childSlotName,bool bOn,ChangeContexts cc)
: Sets the on-ness property for the texture in the specified child slot.
: since 5.7

bool SetChildSlotParameter(String parameterName,String childSlotName,object value,ExtraRequirementsSetContexts sc)
: Extra requirements are a way of specifying extra functionality on parameters in the automatic UI.
     Implement this function to support values being set from automatic UI sections or the texture summary.
     See IAutoUIExtraRequirements.h in the C++ RDK for string definitions for the parameter names.
: Returns - Null variant if not supported.  Call the base class if you do not support the extra requirement paramter.
: since 5.7

void SetName(string name,bool bRenameEvents,bool bEnsureNameUnique)
: Set instance name for this content
: since 7.0

bool SetParameter(String parameterName,object value)
: Set the named parameter value for this content instance.
     If you do not support this parameter, call the base class.
: since 6.0

bool SetParameter(String parameterName,object value,ChangeContexts changeContext)
: Set the named parameter value for this content instance.
     If you do not support this parameter, call the base class.
: since 5.7

void SetRenderHash(uint hash)
: This method is deprecated and no longer called. For more information
     see
: since 6.0

void Uninitialize()
: 
: since 6.1

int UseCount()
: UseCount returns how many times the content is used
: since 6.9

bool VirtualIcon(Size size,Bitmap bitmap)
: Icon to display in the content browser, this bitmap needs to be valid for
     the life of this content object, the content object that returns the bitmap
     is responsible for disposing of the bitmap.
: Returns - Return Icon to display in the content browser.
: since 6.0
