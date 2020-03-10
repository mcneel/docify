---
title: "Rhino.Render.RenderContent"
date: 2020-03-10 09:24:55Z
draft: false
---

# Events
## static ContentAdded
- (summary) 
     Used to monitor render content addition to the document.
     
- (since) 5.7
## static ContentChanged
- (summary) 
     Used to monitor render content modifications.
     
- (since) 5.7
## static ContentDeleted
- (summary) 
     Used to monitor render content deletion from the document.
     
- (since) 6.0
## static ContentDeleting
- (summary) 
     Used to monitor render content deletion from the document.
     
- (since) 5.7
## static ContentFieldChanged
- (summary) 
     This event is raised when a field value is modified.
     
- (since) 5.11
## static ContentRenamed
- (summary) 
     Used to monitor render content renaming in the document.
     
- (since) 5.7
## static ContentReplaced
- (summary) 
     Used to monitor render content replacing in the document.
     
- (since) 5.7
## static ContentReplacing
- (summary) 
     Used to monitor render content replacing in the document.
     
- (since) 5.7
## static ContentUpdatePreview
- (summary) 
     Used to monitor render content preview updates.
     
- (since) 5.7
## static CurrentEnvironmentChanged
- (summary) 
     Event fired when changes to current environments have been made.
     This will be one of Background, ReflectionAndRefraction or Skylighting
     Since 6.11
     
- (since) 6.11
# Properties
## bool CanBeEdited
- (summary) 
     Determines if the content can be edited.
     
- (since) 6.0
## String Category
- (summary) 
     Category for this content.
     
- (since) 6.7
## String ChildSlotDisplayName
- (summary) 
     Returns the localized display name of the child slot name
     
- (since) 7.0
## String ChildSlotName
- (summary) 
- (since) 5.1
## IntPtr CppPointer
- (summary) 
- (since) 6.0
## RhinoDoc Document
- (summary) 
     If this content is in a document content list, the document will be returned.  Otherwise null.
     
- (since) 5.10
## RhinoDoc DocumentAssoc
- (summary) 
     If this content is associated by a document in any way, the document will be returned.  This includes copies of
     contents that were initially in the document. Otherwise null.
     
- (since) 6.0
## RhinoDoc DocumentRegistered
- (summary) 
     If this content is used by a document, including not in the content lists (for example, as a decal),
     the document will be returned.  Otherwise null.
     
- (since) 6.0
## FieldDictionary Fields
- (summary) 
     Rhino.Render.Fields FieldDictionary which provides access to setting
     and retrieving field values.
     
- (since) 5.1
## IEnumerable<string> FilesToEmbed
- (summary) 
     A string array of full paths to files used by the content that may be
     embedded in .3dm files and library files (.rmtl, .renv, .rtex). The
     default implementation returns an empty string list. Override this to
     return the file name or file names used by your content. This is
     typically used by textures that reference files containing the texture
     imagery. 
     
- (since) 5.12
## RenderContent FirstChild
- (summary) 
     Return First child of this content or nullptr if none.
     
- (since) 6.0
## bool Hidden
- (summary) 
     Determines if the content has the hidden flag set.
     
- (since) 5.1
## Guid Id
- (summary) 
     Instance identifier for this content.
     
- (since) 5.1
## bool IsDefaultInstance
- (summary) 
     Checks if render content is default instance.
     
- (since) 6.0
## bool IsHiddenByAutoDelete
- (summary) 
     Contents can be created as 'auto-delete' by certain commands such as 'PictureFrame'.
     These contents are automatically hidden from the user when the associated Rhino object
     is deleted. They are later deleted when the document is saved.
     
- (since) 6.15
## bool IsLocked
- (summary) 
     Set this property to True prior to adding content to the document to
     lock the content browser editing UI methods.  Setting this to True will
     keep the browser from allowing things like deleting, renaming or
     changing content.  This is useful for custom child content that you
     want to be editable but persistent.  Setting this after adding content
     to the document will cause an exception to be thrown.
     
- (since) 5.12
## String Name
- (summary) 
     Instance name for this content.
     
- (since) 5.1
## RenderContent NextSibling
- (summary) 
     Return First sibling of this content or nullptr if none.
     
- (since) 6.0
## String Notes
- (summary) 
     Notes for this content.
     
- (since) 5.1
## RenderContent Parent
- (summary) 
     Returns the top content in this parent/child chain.
     
- (since) 5.11
## ProxyTypes ProxyType
- (summary) 
     Gets the proxy type of the render content
     
- (since) 6.0
## uint RenderHash
- (summary) 
     Render hash for the content hierarchy. It iterates children and includes
     a caching mechanism which means the hash value can be retrieved quickly
     if it hasn't changed. The cache is invalidated when Changed() is called.
     
     You can override the  method to provide
     a custom hash value.
     
- (since) 6.0
## String Tags
- (summary) 
     Tags for this content.
     
- (since) 6.4
## bool TopLevel
- (summary) 
     Returns True if this content has no parent, False if it is the child of another content.
     
- (since) 5.1
## RenderContent TopLevelParent
- (summary) 
     Returns the top content in this parent/child chain.
     
- (since) 5.1
## String TypeDescription
- (summary) 
     Description for your content type.  ie.  "Procedural checker pattern"
     
- (since) 5.1
## Guid TypeId
- (summary) 
     Type identifier for this content
     
- (since) 6.0
## String TypeName
- (summary) 
     Name for your content type.  ie. "My .net Texture"
     
- (since) 5.1
## String Xml
- (summary) 
- (since) 6.0
# Methods
## static bool AddPersistentRenderContent(RenderContent renderContent)
- (summary) 
     Add a material, environment or texture to the internal RDK document lists as
     top level content.  The content must have been returned from
     RenderContent::MakeCopy, NewContentFromType or a similar function that returns
     a non-document content.
     
- (since) 5.1
- (returns) bool This is some return comment
## static bool AddPersistentRenderContent(RhinoDoc document,RenderContent renderContent)
- (summary) 
     Add a material, environment or texture to the internal RDK document lists as
     top level content.  The content must have been returned from
     RenderContent::MakeCopy, NewContentFromType or a similar function that returns
     a non-document content.
     
- (since) 6.0
- (returns) bool This is some return comment
## static RenderContent Create(Guid type,RenderContent parent,String childSlotName,ShowContentChooserFlags flags,RhinoDoc doc)
- (summary) 
     Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
     
- (since) 5.1
- (returns) RenderContent This is some return comment
## static RenderContent Create(Guid type,ShowContentChooserFlags flags,RhinoDoc doc)
- (summary) 
     Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
     
- (since) 5.1
- (returns) RenderContent This is some return comment
## static RenderContent Create(Type type,RenderContent parent,String childSlotName,ShowContentChooserFlags flags,RhinoDoc doc)
- (summary) 
     Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
     
- (since) 5.1
- (returns) RenderContent This is some return comment
## static RenderContent Create(Type type,ShowContentChooserFlags flags,RhinoDoc doc)
- (summary) 
     Constructs a new content of the specified type and add it to the persistent content list.
     This function cannot be used to create temporary content that you delete after use.
     Content created by this function is owned by RDK and appears in the content editor.
     To create a temporary content which is owned by you, call RenderContentType.NewContentFromType().
     
- (since) 5.1
- (returns) RenderContent This is some return comment
## static RenderContent FromId(RhinoDoc document,Guid id)
- (summary) 
     Search for a content object based on its Id
     
- (since) 5.7
- (returns) RenderContent This is some return comment
## static RenderContent FromXml(String xml)
- (summary) 
- (since) 6.0
- (returns) RenderContent This is some return comment
## static RenderContent FromXml(String xml,RhinoDoc doc)
- (summary) 
- (since) 6.4
- (returns) RenderContent This is some return comment
## static RenderContent LoadFromFile(String filename)
- (summary) 
     Loads content from a library file.  Does not add the content to the persistent content list.
     Use AddPersistantContent to add it to the list.
     
- (since) 5.1
- (returns) RenderContent This is some return comment
## static Type[] RegisterContent(Assembly assembly,Guid pluginId)
- (summary) 
     Call RegisterContent in your plug-in's OnLoad function in order to register all of the
     custom RenderContent classes in your assembly.
     
- (since) 5.1
- (returns) Type[] This is some return comment
## static Type[] RegisterContent(PlugIn plugin)
- (summary) 
     Call RegisterContent in your plug-in's OnLoad function in order to register all of the
     custom RenderContent classes in your assembly.
     
- (since) 5.1
- (returns) Type[] This is some return comment
## bool AddAutomaticUserInterfaceSection(string caption,int id)
- (summary) 
     Add a new automatic user interface section, Field values which include
     prompts will be automatically added to this section.
     
- (since) 5.1
- (returns) bool This is some return comment
## bool AddChild(RenderContent renderContent)
- (summary) 
- (since) 5.6
- (returns) bool This is some return comment
## bool AddChild(RenderContent renderContent,String childSlotName)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool AddUserInterfaceSection(ICollapsibleSection section)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## UI.UserInterfaceSection AddUserInterfaceSection(Type classType,string caption,bool createExpanded,bool createVisible)
- (summary) 
     Add a new .NET control to an content expandable tab section, the height
     of the createExpanded tabs client area will be the initial height of the
     specified control.
     
- (since) 5.1
- (returns) UI.UserInterfaceSection This is some return comment
## void BeginChange(ChangeContexts changeContext)
- (summary) 
     Begins a change or batch of changes. This returns a reference to the
     content which you should use to make your changes. It may also make a
     copy of the content state allowing  to send an
     event with the old and new contents. Calls to this method are counted;
     you must call EndChange() once for every call to BeginChange().
     Note:
       If Changed() was called between the calls to BeginChange() and
       EndChange(), the last call to EndChange() may cause the ContentChanged
       event to be sent.
     
- (since) 6.0
- (returns) void This is some return comment
## void BindParameterToField(string parameterName,Field field,ChangeContexts setEvent)
- (summary) 
     Use bindings to automatically wire parameters to fields
     
- (since) 5.7
- (returns) void This is some return comment
## void BindParameterToField(string parameterName,string childSlotName,Field field,ChangeContexts setEvent)
- (summary) 
     Use bindings to automatically wire parameters to fields
     
- (since) 5.7
- (returns) void This is some return comment
## bool ChangeChild(RenderContent oldContent,RenderContent newContent)
- (summary) 
- (since) 5.6
- (returns) bool This is some return comment
## double ChildSlotAmount(String childSlotName)
- (summary) 
     Gets the amount property for the texture in the specified child slot.  Values are typically from 0.0 - 100.0
     
- (since) 5.7
- (returns) double This is some return comment
## string ChildSlotNameFromParamName(String paramName)
- (summary) 
     A "child slot" is the specific "slot" that a child (usually a texture) occupies.
     This is generally the "use" of the child - in other words, the thing the child
     operates on.  Some examples are "color", "transparency".
     
- (since) 5.1
- (returns) string This is some return comment
## bool ChildSlotOn(String childSlotName)
- (summary) 
     Gets the on-ness property for the texture in the specified child slot.
     
- (since) 5.7
- (returns) bool This is some return comment
## void DeleteAllChildren(ChangeContexts changeContexts)
- (summary) 
- (since) 5.10
- (returns) void This is some return comment
## bool DeleteChild(string childSlotName,ChangeContexts changeContexts)
- (summary) 
- (since) 5.10
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
- (since) 5.1
- (returns) void This is some return comment
## bool DynamicIcon(Size size,Bitmap bitmap,DynamicIconUsage usage)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## RenderContent Edit()
- (summary) 
     Call this method to open the content in the a modal version of the editor.
     The content must be in the document or the call will fail.
     
- (since) 6.13
- (returns) RenderContent This is some return comment
## void EndChange()
- (summary) 
     Ends a change or batch of changes. Calls to this method are counted;
     you must call this method once for every call to .
     Note:
       If  was called with ChangeContexts.UI,
       ChangeContexts.Program, ChangeContexts.Drop or ChangeContexts.UI.Tree
       and Changed() was called between the calls to  and
       EndChange(), the last call to EndChange() will raise the
        event.
     
- (since) 6.0
- (returns) void This is some return comment
## DataSources.ContentFactory Factory()
- (summary) 
- (since) 6.10
- (returns) DataSources.ContentFactory This is some return comment
## RenderContent FindChild(String childSlotName)
- (summary) 
- (since) 5.1
- (returns) RenderContent This is some return comment
## RenderContent ForDisplay()
- (summary) 
     **** This method is for proxies and will be marked obsolete in V7 ****
    
     The only place a single proxy can be displayed is in the
     New Content Control main thumbnail. All other attempts to
     use a single proxy in a UI require it to be replaced with
     the corresponding multi proxy. Single proxies override this
     to find the corresponding multi proxy.
     
- (since) 6.9
- (returns) RenderContent This is some return comment
## object GetChildSlotParameter(String parameterName,String childSlotName)
- (summary) 
     Extra requirements are a way of specifying extra functionality on parameters in the automatic UI.
     Implement this function to specify additional functionality for automatic UI sections or the texture summary.
     See IAutoUIExtraRequirements.h in the C++ RDK for string definitions for the parameter names.
     
- (since) 5.7
- (returns) object This is some return comment
## string[] GetEmbeddedFilesList()
- (summary) 
- (since) 6.0
- (returns) string[] This is some return comment
## object GetParameter(String parameterName)
- (summary) 
     Query the content instance for the value of a given named parameter.
     If you do not support this parameter, call the base class.
     
- (since) 5.7
- (returns) object This is some return comment
## bool GetUnderlyingInstances(RenderContentCollection collection)
- (summary) 
- (since) 7.0
- (returns) bool This is some return comment
## bool Icon(Size size,Bitmap bitmap)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool Initialize()
- (summary) 
- (since) 6.1
- (returns) bool This is some return comment
## bool IsCompatible(Guid renderEngineId)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool IsContentTypeAcceptableAsChild(Guid type,String childSlotName)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool IsFactoryProductAcceptableAsChild(ContentFactory factory,String childSlotName)
- (summary) 
- (since) 6.1
- (returns) bool This is some return comment
## bool IsFactoryProductAcceptableAsChild(Guid kindId,string factoryKind,string childSlotName)
- (summary) 
     Override this method to restrict the type of acceptable child content.
     The default implementation of this method just returns true.
     
- (since) 5.11
- (returns) bool This is some return comment
## bool IsReference()
- (summary) 
      Query whether or not the content or any of its ancestors is a reference content.
     
- (since) 6.9
- (returns) bool This is some return comment
## bool IsRenderHashCached()
- (summary) 
     This method is deprecated and no longer called. For more information
     see 
- (since) 6.0
- (returns) bool This is some return comment
## RenderContent MakeCopy()
- (summary) 
     Create a copy of the render content. All content is the same, except for the
     instance Id.
     
- (since) 6.0
- (returns) RenderContent This is some return comment
## MatchDataResult MatchData(RenderContent oldContent)
- (summary) 
     Implement to transfer data from another content to this content during creation.
     
- (since) 6.0
- (returns) MatchDataResult This is some return comment
## PreviewSceneServer NewPreviewSceneServer(SceneServerData ssd)
- (summary) 
     Gets the PreviewSceneServer of the content
     
- (since) 6.0
- (returns) PreviewSceneServer This is some return comment
## bool OpenInEditor()
- (summary) 
     Call this method to open the content in the relevant thumbnail editor
     and select it for editing by the user. The content must be in the
     document or the call will fail.
     
- (since) 5.7
- (returns) bool This is some return comment
## bool OpenInModalEditor()
- (summary) 
     Call this method to open the content in the a modal version of the editor.
     The content must be in the document or the call will fail.
     
- (since) 5.7
- (returns) bool This is some return comment
## string ParamNameFromChildSlotName(String childSlotName)
- (summary) 
     A "child slot" is the specific "slot" that a child (usually a texture) occupies.
     This is generally the "use" of the child - in other words, the thing the child
     operates on.  Some examples are "color", "transparency".
     
- (since) 5.1
- (returns) string This is some return comment
## uint RenderHashExclude(CrcRenderHashFlags flags,string excludeParameterNames)
- (summary) 
     As RenderHash, but ignore parameter names given.
     
- (since) 6.2
- (returns) uint This is some return comment
## uint RenderHashExclude(TextureRenderHashFlags flags,string excludeParameterNames)
- (summary) 
     As RenderHash, but ignore parameter names given.
     
- (since) 6.0
- (returns) uint This is some return comment
## bool Replace(RenderContent newcontent)
- (summary) 
- (since) 6.13
- (returns) bool This is some return comment
## bool SetChild(RenderContent renderContent,String childSlotName)
- (summary) 
     Set another content as a child of this content. This content may or may
     not be attached to a document.  If this content already has a child
     with the specified child slot name, that child will be deleted.  If
     this content is not attached to a document, the child will be added
     without sending any events.  If this content is attached to a document,
     the necessary events will be sent to update the UI.
     Note:
       Do not call this method to add children in your constructor. If you
       want to add default children, you should override Initialize() and add
       them there.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetChild(RenderContent renderContent,String childSlotName,ChangeContexts changeContexts)
- (summary) 
     Set another content as a child of this content. This content may or may
     not be attached to a document.  If this content already has a child
     with the specified child slot name, that child will be deleted.  If
     this content is not attached to a document, the child will be added
     without sending any events.  If this content is attached to a document,
     the necessary events will be sent to update the UI.
     Note:
       Do not call this method to add children in your constructor. If you
       want to add default children, you should override Initialize() and add
       them there.
     
- (since) 5.10
- (returns) bool This is some return comment
## void SetChildSlotAmount(String childSlotName,double amount,ChangeContexts cc)
- (summary) 
     Sets the amount property for the texture in the specified child slot.  Values are typically from 0.0 - 100.0
     
- (since) 5.7
- (returns) void This is some return comment
## void SetChildSlotOn(String childSlotName,bool bOn,ChangeContexts cc)
- (summary) 
     Sets the on-ness property for the texture in the specified child slot.
     
- (since) 5.7
- (returns) void This is some return comment
## bool SetChildSlotParameter(String parameterName,String childSlotName,object value,ExtraRequirementsSetContexts sc)
- (summary) 
     Extra requirements are a way of specifying extra functionality on parameters in the automatic UI.
     Implement this function to support values being set from automatic UI sections or the texture summary.
     See IAutoUIExtraRequirements.h in the C++ RDK for string definitions for the parameter names.
     
- (since) 5.7
- (returns) bool This is some return comment
## void SetName(string name,bool bRenameEvents,bool bEnsureNameUnique)
- (summary) 
     Set instance name for this content
     
- (since) 7.0
- (returns) void This is some return comment
## bool SetParameter(String parameterName,object value)
- (summary) 
     Set the named parameter value for this content instance.
     If you do not support this parameter, call the base class.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetParameter(String parameterName,object value,ChangeContexts changeContext)
- (summary) 
     Set the named parameter value for this content instance.
     If you do not support this parameter, call the base class.
     
- (since) 5.7
- (returns) bool This is some return comment
## void SetRenderHash(uint hash)
- (summary) 
     This method is deprecated and no longer called. For more information
     see 
- (since) 6.0
- (returns) void This is some return comment
## void Uninitialize()
- (summary) 
- (since) 6.1
- (returns) void This is some return comment
## int UseCount()
- (summary) 
      UseCount returns how many times the content is used
     
- (since) 6.9
- (returns) int This is some return comment
## bool VirtualIcon(Size size,Bitmap bitmap)
- (summary) 
     Icon to display in the content browser, this bitmap needs to be valid for
     the life of this content object, the content object that returns the bitmap
     is responsible for disposing of the bitmap.
     
- (since) 6.0
- (returns) bool This is some return comment
