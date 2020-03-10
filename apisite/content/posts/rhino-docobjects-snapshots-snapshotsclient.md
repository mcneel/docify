---
title: "Rhino.DocObjects.SnapShots.SnapShotsClient"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.DocObjects.SnapShots.SnapShotsClient()
- (summary) 
     SnapShotsClient constructor
     
- (since) 6.0
# Properties
## IntPtr CppPointer
- (summary) 
- (since) 6.0
## int SerialNumber
- (summary) 
- (since) 6.0
# Methods
## static string ApplicationCategory()
- (summary) 
     Predefined application category
     
- (since) 6.0
- (returns) string This is some return comment
## static string DocumentCategory()
- (summary) 
     Predefined document category
     
- (since) 6.0
- (returns) string This is some return comment
## static string LayersCategory()
- (summary) 
     Predefined layers category
     
- (since) 6.0
- (returns) string This is some return comment
## static string LightsCategory()
- (summary) 
     Predefined lights category
     
- (since) 6.0
- (returns) string This is some return comment
## static string ObjectsCategory()
- (summary) 
     Predefined objects category
     
- (since) 6.0
- (returns) string This is some return comment
## static bool RegisterSnapShotClient(SnapShotsClient client)
- (summary) 
     Function used to register snapshots client
     
- (since) 6.0
- (returns) bool This is some return comment
## static string RenderingCategory()
- (summary) 
     Predefined rendering category
     
- (since) 6.0
- (returns) string This is some return comment
## static string ViewsCategory()
- (summary) 
     Predefined views category
     
- (since) 6.0
- (returns) string This is some return comment
## bool AnimateDocument(RhinoDoc doc,double dPos,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
- (summary) 
     Called for each frame. Starting at 0.0.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool AnimateObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,double dPos,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
- (summary) 
     Called for each frame. Starting at 0.0.
     
- (since) 6.0
- (returns) bool This is some return comment
## void AnimationStart(RhinoDoc doc,int iFrames)
- (summary) 
     Called once at the start of an animation.
     
- (since) 6.0
- (returns) void This is some return comment
## bool AnimationStop(RhinoDoc doc)
- (summary) 
     Called once at the end of an animation.
     
- (since) 6.0
- (returns) bool This is some return comment
## string Category()
- (summary) 
     The category of this client. Usually one of the above predefined categories like e.g
     object, rendering or application category
     
- (since) 6.0
- (returns) string This is some return comment
## Guid ClientId()
- (summary) 
     The unique id of this client.
     
- (since) 6.0
- (returns) Guid This is some return comment
## void Dispose()
- (summary) 
     SnapShotsClient Dispose
     
- (since) 6.0
- (returns) void This is some return comment
## void ExtendBoundingBoxForDocumentAnimation(RhinoDoc doc,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop,BoundingBox bbox)
- (summary) 
     Called once at the start of an animation. This can be used to extend the scene bounding box to avoid clipping.
     
- (since) 6.0
- (returns) void This is some return comment
## void ExtendBoundingBoxForObjectAnimation(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop,BoundingBox bbox)
- (summary) 
     Called once at the start of an animation. This can be used to extend the scene bounding box to avoid clipping.
     
- (since) 6.0
- (returns) void This is some return comment
## bool IsCurrentModelStateInAnySnapshot(RhinoDoc doc,BinaryArchiveReader archive,SimpleArrayBinaryArchiveReader archive_array,TextLog text_log)
- (summary) 
     Called before restoring a snapshot. Warns the user if the current model state is not already saved.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool IsCurrentModelStateInAnySnapshot(RhinoDoc doc,RhinoObject doc_object,BinaryArchiveReader archive,SimpleArrayBinaryArchiveReader archive_array,TextLog text_log)
- (summary) 
     Called before restoring a snapshot. Warns the user if the current model state is not already saved.
     
- (since) 6.0
- (returns) bool This is some return comment
## string Name()
- (summary) 
     The client's name.
     
- (since) 6.0
- (returns) string This is some return comment
## bool ObjectTransformNotification(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive)
- (summary) 
     Called for every object that is associated with a snapshot and gets transformed in Rhino. This is getting called for each stored snapshot and gives the client the possibility to update the stored data.
     
- (since) 6.0
- (returns) bool This is some return comment
## Guid PlugInId()
- (summary) 
     The plug-in id that registers this client.
     
- (since) 6.0
- (returns) Guid This is some return comment
## bool PrepareForDocumentAnimation(RhinoDoc doc,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
- (summary) 
     Called once at the start of an animation.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool PrepareForObjectAnimation(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive_start,BinaryArchiveReader archive_stop)
- (summary) 
     Called once at the start of an animation.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool RestoreDocument(RhinoDoc doc,BinaryArchiveReader archive)
- (summary) 
     Called when the user restores a snapshot and SupportDocument() returns true.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool RestoreObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveReader archive)
- (summary) 
     Called when the user restores a snapshot and SupportsObjects() and SupportsObject(Rhino.DocObjects.RhinoObject doc_object) returns true.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SaveDocument(RhinoDoc doc,BinaryArchiveWriter archive)
- (summary) 
     Called when the user saves a snapshot and SupportDocument() returns true.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SaveObject(RhinoDoc doc,RhinoObject doc_object,Transform transform,BinaryArchiveWriter archive)
- (summary) 
     Called when the user saves a snapshot and SupportsObjects() and SupportsObject(Rhino.DocObjects.RhinoObject doc_object) returns true.
     
- (since) 6.0
- (returns) bool This is some return comment
## void SnapshotRestored(RhinoDoc doc)
- (summary) 
     Called after all clients restored their data.
     
- (since) 6.0
- (returns) void This is some return comment
## bool SupportsAnimation()
- (summary) 
     Returns True if the client allows animation.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SupportsDocument()
- (summary) 
     Defines if the client supports document user data or not
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SupportsObject(RhinoObject doc_object)
- (summary) 
      Returns True if the client saves/restores object user data for the given object.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SupportsObjects()
- (summary) 
     Returns True if the client saves/restores object user data.
     
- (since) 6.0
- (returns) bool This is some return comment
