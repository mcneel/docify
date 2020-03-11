---
title: "Interop"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Contains static methods to marshal objects between RhinoCommon and legacy Rhino_DotNet or C++.
```cs
public class Interop
```
## Methods

static Geometry.GeometryBase CreateFromNativePointer(IntPtr pGeometry)
: Constructs a RhinoCommon Geometry class from a given ON_Geomety*. The ON_Geometry*
     must be declared on the heap and its lifetime becomes controlled by RhinoCommon.
: Returns - The appropriate geometry class in RhinoCommon on success.

static IntPtr FileReadOptionsConstPointer(FileReadOptions options)
: Returns the underlying const CRhinoFileReadOptions* for a Rhino.FileIO.FileReadOptions object.
     You should only be interested in using this function if you are writing C++ code.
: Returns - A pointer to the Rhino const object.
: since 6.0

static IntPtr FileWriteOptionsConstPointer(FileWriteOptions options)
: Returns the underlying const CRhinoFileWriteOptions* for a Rhino.FileIO.FileWriteOptions object. 
     You should only be interested in using this function if you are writing C++ code.
: Returns - A pointer to the Rhino const object.
: since 6.0

static DocObjects.Font FontFromPointer(IntPtr ptrManagedFont)
: Create managed Font from native ON_Font*
: since 6.0

static Geometry.Brep FromOnBrep(object source)
: Copies a Rhino_DotNet brep to a RhinoCommon brep class.
: Returns - RhinoCommon object on success. This will be an independent copy.

static Geometry.Curve FromOnCurve(object source)
: Copies a Rhino_DotNet curve to a RhinoCommon curve class.
: Returns - RhinoCommon object on success. This will be an independent copy.

static Geometry.Mesh FromOnMesh(object source)
: Copies a Rhino_DotNet mesh to a RhinoCommon mesh class.
: Returns - RhinoCommon object on success. This will be an independent copy.

static Geometry.Surface FromOnSurface(object source)
: Copies a Rhino_DotNet surface to a RhinoCommon Surface class.
: Returns - RhinoCommon object on success. This will be an independent copy.

static IntPtr NativeGeometryConstPointer(GeometryBase geometry)
: Returns the underlying const ON_Geometry* for a RhinoCommon class. You should only
     be interested in using this function if you are writing C++ code.
: Returns - A pointer to the const geometry.

static IntPtr NativeGeometryNonConstPointer(GeometryBase geometry)
: Returns the underlying non-const ON_Geometry* for a RhinoCommon class. You should
     only be interested in using this function if you are writing C++ code.
: Returns - A pointer to the non-const geometry.

static IntPtr NativeNonConstPointer(DisplayPipeline pipeline)
: Get CRhinoDisplayPipeline* for a DisplayPipeline instance
: since 6.0

static IntPtr NativeNonConstPointer(GetPoint getPoint)
: Get CRhinoGetPoint* from a GetPoint instance
: since 6.0

static IntPtr NativeNonConstPointer(RhinoViewport viewport)
: Get CRhinoViewport* from a RhinoViewport instance
: since 6.0

static IntPtr NativeNonConstPointer(ViewCaptureSettings settings)
: Get a CRhinoPrintInfo* for a given ViewCaptureSettings class
: since 6.0

static IntPtr NativeNonConstPointer(ViewportInfo viewport)
: Get ON_Viewport* from a ViewportInfo instance
: since 5.1

static IntPtr NativeRhinoDocPointer(RhinoDoc doc)
: Gets the C++ CRhinoDoc* for a given RhinoCommon RhinoDoc class.
: Returns - A pointer value.

static IntPtr NSFontFromFont(Font font)
: Get native NSFont* from a Rhino Font. Only works on Mac
: Returns - NSFont* on success. IntPtr.Zero on failure
: since 6.9

static IntPtr NSFontFromFont(Font font,double pointSize)
: Get native NSFont* from a Rhino Font. Only works on Mac
: Returns - NSFont* on success. IntPtr.Zero on failure
: since 6.9

static IntPtr PlugInPointer(PlugIn plugin)
: Gets a C++ plug-in pointer for a given RhinoCommon plug-in.
     This is a Rhino SDK function.
: Returns - A pointer.

static IntPtr RhinoObjectConstPointer(RhinoObject rhinoObject)
: Returns the underlying const CRhinoObject* for a RhinoCommon class. You should only
     be interested in using this function if you are writing C++ code.
: Returns - A pointer to the Rhino const object.

static DocObjects.RhinoObject RhinoObjectFromPointer(IntPtr pRhinoObject)
: Constructs a RhinoCommon Rhino object from an unmanaged C++ RhinoObject pointer.
: Returns - A new Rhino object, or None if the pointer was invalid or .

static object ToIRhinoViewport(RhinoViewport source)
: Convert a Rhino.Display.Viewport to an RMA.Rhino.IRhinoViewport.
: Returns - Rhino_DotNet IRhinoViewport object on success. This will be an independent copy.

static object ToOnBrep(Brep source)
: Constructs a Rhino_DotNet OnBrep that is a copy of a given brep.
: Returns - Rhino_DotNet object on success. This will be an independent copy.

static object ToOnCurve(Curve source)
: Constructs a Rhino_DotNet OnCurve that is a copy of a given curve.
: Returns - Rhino_DotNet object on success. This will be an independent copy.

static object ToOnMesh(Mesh source)
: Constructs a Rhino_DotNet OnMesh that is a copy of a given mesh.
: Returns - Rhino_DotNet object on success. This will be an independent copy.

static object ToOnSurface(Surface source)
: Constructs a Rhino_DotNet OnSurface that is a copy of a given curve.
: Returns - Rhino_DotNet object on success. This will be an independent copy.

static object ToOnXform(Transform source)
: Constructs a Rhino_DotNet OnXform from a given RhinoCommon Transform.
: Returns - Rhino_DotNet object on success. This will be an independent copy.

static bool TryCopyFromOnArc(object source,Arc destination)
: Attempts to copy the contents of a RMA.OpenNURBS.OnArc to a Rhino.Geometry.Arc.
: Returns - True if the operation succeeded; False otherwise.

static bool TryCopyToOnArc(Arc source,object destination)
: Attempts to copy the contents of a Rhino.Geometry.Arc to a RMA.OpenNURBS.OnArc.
: Returns - True if the operation succeeded; False otherwise.

static Display.ViewCaptureSettings ViewCaptureFromPointer(IntPtr ptrViewCapture)
: Create a ViewCaptureSettings class from a native const CRhinoPrintInfo*
     The pointer values are copied
: since 6.0
