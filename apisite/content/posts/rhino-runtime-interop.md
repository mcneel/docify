---
title: "Rhino.Runtime.Interop"
draft: false
---

# Methods
## static Geometry.GeometryBase CreateFromNativePointer(IntPtr pGeometry)
- (summary) 
     Constructs a RhinoCommon Geometry class from a given ON_Geomety*. The ON_Geometry*
     must be declared on the heap and its lifetime becomes controlled by RhinoCommon.
     
- (since) 5.0
- (returns) Geometry.GeometryBase This is some return comment
## static IntPtr FileReadOptionsConstPointer(FileReadOptions options)
- (summary) 
     Returns the underlying const CRhinoFileReadOptions* for a Rhino.FileIO.FileReadOptions object.
     You should only be interested in using this function if you are writing C++ code.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static IntPtr FileWriteOptionsConstPointer(FileWriteOptions options)
- (summary) 
     Returns the underlying const CRhinoFileWriteOptions* for a Rhino.FileIO.FileWriteOptions object. 
     You should only be interested in using this function if you are writing C++ code.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static DocObjects.Font FontFromPointer(IntPtr ptrManagedFont)
- (summary) 
     Create managed Font from native ON_Font*
     
- (since) 6.0
- (returns) DocObjects.Font This is some return comment
## static Geometry.Brep FromOnBrep(object source)
- (summary) 
     Copies a Rhino_DotNet brep to a RhinoCommon brep class.
     
- (since) 5.0
- (returns) Geometry.Brep This is some return comment
## static Geometry.Curve FromOnCurve(object source)
- (summary) 
     Copies a Rhino_DotNet curve to a RhinoCommon curve class.
     
- (since) 5.0
- (returns) Geometry.Curve This is some return comment
## static Geometry.Mesh FromOnMesh(object source)
- (summary) 
     Copies a Rhino_DotNet mesh to a RhinoCommon mesh class.
     
- (since) 5.0
- (returns) Geometry.Mesh This is some return comment
## static Geometry.Surface FromOnSurface(object source)
- (summary) 
     Copies a Rhino_DotNet surface to a RhinoCommon Surface class.
     
- (since) 5.0
- (returns) Geometry.Surface This is some return comment
## static IntPtr NativeGeometryConstPointer(GeometryBase geometry)
- (summary) 
     Returns the underlying const ON_Geometry* for a RhinoCommon class. You should only
     be interested in using this function if you are writing C++ code.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeGeometryNonConstPointer(GeometryBase geometry)
- (summary) 
     Returns the underlying non-const ON_Geometry* for a RhinoCommon class. You should
     only be interested in using this function if you are writing C++ code.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeNonConstPointer(DisplayPipeline pipeline)
- (summary) 
     Get CRhinoDisplayPipeline* for a DisplayPipeline instance
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeNonConstPointer(GetPoint getPoint)
- (summary) 
     Get CRhinoGetPoint* from a GetPoint instance
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeNonConstPointer(RhinoViewport viewport)
- (summary) 
     Get CRhinoViewport* from a RhinoViewport instance
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeNonConstPointer(ViewCaptureSettings settings)
- (summary) 
     Get a CRhinoPrintInfo* for a given ViewCaptureSettings class
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## static IntPtr NativeNonConstPointer(ViewportInfo viewport)
- (summary) 
     Get ON_Viewport* from a ViewportInfo instance
     
- (since) 5.1
- (returns) IntPtr This is some return comment
## static IntPtr NativeRhinoDocPointer(RhinoDoc doc)
- (summary) 
     Gets the C++ CRhinoDoc* for a given RhinoCommon RhinoDoc class.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## static IntPtr NSFontFromFont(Font font)
- (summary) 
     Get native NSFont* from a Rhino Font. Only works on Mac
     
- (since) 6.9
- (returns) IntPtr This is some return comment
## static IntPtr NSFontFromFont(Font font,double pointSize)
- (summary) 
     Get native NSFont* from a Rhino Font. Only works on Mac
     
- (since) 6.9
- (returns) IntPtr This is some return comment
## static IntPtr PlugInPointer(PlugIn plugin)
- (summary) 
     Gets a C++ plug-in pointer for a given RhinoCommon plug-in.
     This is a Rhino SDK function.
- (since) 5.0
- (returns) IntPtr This is some return comment
## static IntPtr RhinoObjectConstPointer(RhinoObject rhinoObject)
- (summary) 
     Returns the underlying const CRhinoObject* for a RhinoCommon class. You should only
     be interested in using this function if you are writing C++ code.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## static DocObjects.RhinoObject RhinoObjectFromPointer(IntPtr pRhinoObject)
- (summary) 
     Constructs a RhinoCommon Rhino object from an unmanaged C++ RhinoObject pointer.
     
- (since) 5.0
- (returns) DocObjects.RhinoObject This is some return comment
## static object ToIRhinoViewport(RhinoViewport source)
- (summary) 
     Convert a Rhino.Display.Viewport to an RMA.Rhino.IRhinoViewport.
     
- (since) 5.0
- (returns) object This is some return comment
## static object ToOnBrep(Brep source)
- (summary) 
     Constructs a Rhino_DotNet OnBrep that is a copy of a given brep.
     
- (since) 5.0
- (returns) object This is some return comment
## static object ToOnCurve(Curve source)
- (summary) 
     Constructs a Rhino_DotNet OnCurve that is a copy of a given curve.
     
- (since) 5.0
- (returns) object This is some return comment
## static object ToOnMesh(Mesh source)
- (summary) 
     Constructs a Rhino_DotNet OnMesh that is a copy of a given mesh.
     
- (since) 5.0
- (returns) object This is some return comment
## static object ToOnSurface(Surface source)
- (summary) 
     Constructs a Rhino_DotNet OnSurface that is a copy of a given curve.
     
- (since) 5.0
- (returns) object This is some return comment
## static object ToOnXform(Transform source)
- (summary) 
     Constructs a Rhino_DotNet OnXform from a given RhinoCommon Transform.
     
- (since) 5.0
- (returns) object This is some return comment
## static bool TryCopyFromOnArc(object source,Arc destination)
- (summary) 
     Attempts to copy the contents of a RMA.OpenNURBS.OnArc to a Rhino.Geometry.Arc.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool TryCopyToOnArc(Arc source,object destination)
- (summary) 
     Attempts to copy the contents of a Rhino.Geometry.Arc to a RMA.OpenNURBS.OnArc.
     
- (since) 5.0
- (returns) bool This is some return comment
## static Display.ViewCaptureSettings ViewCaptureFromPointer(IntPtr ptrViewCapture)
- (summary) 
     Create a ViewCaptureSettings class from a native const CRhinoPrintInfo*
     The pointer values are copied
     
- (since) 6.0
- (returns) Display.ViewCaptureSettings This is some return comment
