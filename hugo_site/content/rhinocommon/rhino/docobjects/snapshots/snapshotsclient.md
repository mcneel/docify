---
title: "SnapShotsClient"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.SnapShots](../)*

This is the abstract interface class for for all Snapshot clients.
```cs
public class SnapShotsClient : IDisposable
```
## Constructors

SnapShotsClient()
: SnapShotsClient constructor
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0

int SerialNumber
: 
: since 6.0
## Methods

static string ApplicationCategory()
: Predefined application category
: since 6.0

static string DocumentCategory()
: Predefined document category
: since 6.0

static string LayersCategory()
: Predefined layers category
: since 6.0

static string LightsCategory()
: Predefined lights category
: since 6.0

static string ObjectsCategory()
: Predefined objects category
: since 6.0

static bool RegisterSnapShotClient(SnapShotsClient client)
: Function used to register snapshots client
: since 6.0

static string RenderingCategory()
: Predefined rendering category
: since 6.0

static string ViewsCategory()
: Predefined views category
: since 6.0

bool AnimateDocument(RhinoDoc doc,double dPos,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
: Called for each frame. Starting at 0.0.
: Returns - True if successful, otherwise false.
: since 6.0

bool AnimateObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,double dPos,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
: Called for each frame. Starting at 0.0.
: since 6.0

void AnimationStart(RhinoDoc doc,int iFrames)
: Called once at the start of an animation.
: since 6.0

bool AnimationStop(RhinoDoc doc)
: Called once at the end of an animation.
: since 6.0

string Category()
: The category of this client. Usually one of the above predefined categories like e.g
     object, rendering or application category
: since 6.0

Guid ClientId()
: The unique id of this client.
: Returns - The unique id of this client.
: since 6.0

void Dispose()
: SnapShotsClient Dispose
: since 6.0

void ExtendBoundingBoxForDocumentAnimation(RhinoDoc doc,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop,BoundingBox bbox)
: Called once at the start of an animation. This can be used to extend the scene bounding box to avoid clipping.
: since 6.0

void ExtendBoundingBoxForObjectAnimation(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop,BoundingBox bbox)
: Called once at the start of an animation. This can be used to extend the scene bounding box to avoid clipping.
: since 6.0

bool IsCurrentModelStateInAnySnapshot(RhinoDoc doc,BinaryArchiveReader archive,SimpleArrayBinaryArchiveReader archive_array,TextLog text_log)
: Called before restoring a snapshot. Warns the user if the current model state is not already saved.
: Returns - return True if successful, otherwise false.
: since 6.0

bool IsCurrentModelStateInAnySnapshot(RhinoDoc doc,RhinoObject doc_object,BinaryArchiveReader archive,SimpleArrayBinaryArchiveReader archive_array,TextLog text_log)
: Called before restoring a snapshot. Warns the user if the current model state is not already saved.
: Returns - return True if successful, otherwise false.
: since 6.0

string Name()
: The client's name.
: Returns - The client's name.
: since 6.0

bool ObjectTransformNotification(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive)
: Called for every object that is associated with a snapshot and gets transformed in Rhino. This is getting called for each stored snapshot and gives the client the possibility to update the stored data.
: Returns - True if successful, otherwise false.
: since 6.0

Guid PlugInId()
: The plug-in id that registers this client.
: Returns - The plug-in id that registers this client.
: since 6.0

bool PrepareForDocumentAnimation(RhinoDoc doc,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
: Called once at the start of an animation.
: Returns - True if successful, otherwise
: since 6.0

bool PrepareForObjectAnimation(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
: Called once at the start of an animation.
: Returns - True if successful, otherwise false.
: since 6.0

bool RestoreDocument(RhinoDoc doc,BinaryArchiveReader archive)
: Called when the user restores a snapshot and SupportDocument() returns true.
: Returns - True if successful, otherwise false
: since 6.0

bool RestoreObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive)
: Called when the user restores a snapshot and SupportsObjects() and SupportsObject(Rhino.DocObjects.RhinoObject doc_object) returns true.
: Returns - True if successful, otherwise false.
: since 6.0

bool SaveDocument(RhinoDoc doc,BinaryArchiveWriter archive)
: Called when the user saves a snapshot and SupportDocument() returns true.
: Returns - True if successful, otherwise false
: since 6.0

bool SaveObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveWriter archive)
: Called when the user saves a snapshot and SupportsObjects() and SupportsObject(Rhino.DocObjects.RhinoObject doc_object) returns true.
: Returns - True if successful, otherwise false.
: since 6.0

void SnapshotRestored(RhinoDoc doc)
: Called after all clients restored their data.
: since 6.0

bool SupportsAnimation()
: Returns True if the client allows animation.
: Returns - True if the client allows animation.
: since 6.0

bool SupportsDocument()
: Defines if the client supports document user data or not
: Returns - True if the client saves/restores document user data.
: since 6.0

bool SupportsObject(RhinoObject doc_object)
: Returns True if the client saves/restores object user data for the given object.
: Returns - True if the client saves/restores object user data for the given object.
: since 6.0

bool SupportsObjects()
: Returns True if the client saves/restores object user data.
: Returns - True if the client saves/restores object user data.
: since 6.0
