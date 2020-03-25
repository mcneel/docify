var Examples = [
  {
    name: 'Analysismode.vb',
    code: `Imports Rhino.DocObjects
Imports Rhino
Imports Rhino.Geometry


<System.Runtime.InteropServices.Guid("62dd8eec-5cce-42c7-9d80-8b01fc169b81")> _
Public Class AnalysisModeOnCommand
  Inherits Rhino.Commands.Command
  Public Overrides ReadOnly Property EnglishName() As String
    Get
      Return "cs_analysismode_on"
    End Get
  End Property

  Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Rhino.Commands.Result
    ' make sure our custom visual analysis mode is registered
    Dim zmode = Rhino.Display.VisualAnalysisMode.Register(GetType(ZAnalysisMode))

    Const filter As ObjectType = Rhino.DocObjects.ObjectType.Surface Or Rhino.DocObjects.ObjectType.PolysrfFilter Or Rhino.DocObjects.ObjectType.Mesh
    Dim objs As Rhino.DocObjects.ObjRef() = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select objects for Z analysis", False, filter, objs)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim count As Integer = 0
    For i As Integer = 0 To objs.Length - 1
      Dim obj = objs(i).[Object]()

      ' see if this object is alreay in Z analysis mode
      If obj.InVisualAnalysisMode(zmode) Then
        Continue For
      End If

      If obj.EnableVisualAnalysisMode(zmode, True) Then
        count += 1
      End If
    Next
    doc.Views.Redraw()
    RhinoApp.WriteLine("{0} objects were put into Z-Analysis mode.", count)
    Return Rhino.Commands.Result.Success
  End Function
End Class

<System.Runtime.InteropServices.Guid("0A8CE87D-A8CB-4A41-9DE2-5B3957436AEE")> _
Public Class AnalysisModeOffCommand
  Inherits Rhino.Commands.Command
  Public Overrides ReadOnly Property EnglishName() As String
    Get
      Return "cs_analysismode_off"
    End Get
  End Property

  Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Rhino.Commands.Result
    Dim zmode = Rhino.Display.VisualAnalysisMode.Find(GetType(ZAnalysisMode))
    ' If zmode is null, we've never registered the mode so we know it hasn't been used
    If zmode IsNot Nothing Then
      For Each obj As Rhino.DocObjects.RhinoObject In doc.Objects
        obj.EnableVisualAnalysisMode(zmode, False)
      Next
      doc.Views.Redraw()
    End If
    RhinoApp.WriteLine("Z-Analysis is off.")
    Return Rhino.Commands.Result.Success
  End Function
End Class


''' <summary>
''' This simple example provides a false color based on the world z-coordinate.
''' For details, see the implementation of the FalseColor() function.
''' </summary>
Public Class ZAnalysisMode
  Inherits Rhino.Display.VisualAnalysisMode
  Private m_z_range As New Interval(-10, 10)
  Private m_hue_range As New Interval(0, 4 * Math.PI / 3)
  Private Const m_show_isocurves As Boolean = True

  Public Overrides ReadOnly Property Name() As String
    Get
      Return "Z-Analysis"
    End Get
  End Property
  Public Overrides ReadOnly Property Style() As Rhino.Display.VisualAnalysisMode.AnalysisStyle
    Get
      Return AnalysisStyle.FalseColor
    End Get
  End Property

  Public Overrides Function ObjectSupportsAnalysisMode(obj As Rhino.DocObjects.RhinoObject) As Boolean
    If TypeOf obj Is Rhino.DocObjects.MeshObject OrElse TypeOf obj Is Rhino.DocObjects.BrepObject Then
      Return True
    End If
    Return False
  End Function

  Protected Overrides Sub UpdateVertexColors(obj As Rhino.DocObjects.RhinoObject, meshes As Mesh())
    ' A "mapping tag" is used to determine if the colors need to be set
    Dim mt As Rhino.Render.MappingTag = GetMappingTag(obj.RuntimeSerialNumber)

    For mi As Integer = 0 To meshes.Length - 1
      Dim mesh = meshes(mi)
      If mesh.VertexColors.Tag.Id <> Me.Id Then
        ' The mesh's mapping tag is different from ours. Either the mesh has
        ' no false colors, has false colors set by another analysis mode, has
        ' false colors set using different m_z_range[]/m_hue_range[] values, or
        ' the mesh has been moved.  In any case, we need to set the false
        ' colors to the ones we want.
        Dim colors As System.Drawing.Color() = New System.Drawing.Color(mesh.Vertices.Count - 1) {}
        For i As Integer = 0 To mesh.Vertices.Count - 1
          Dim z As Double = mesh.Vertices(i).Z
          colors(i) = FalseColor(z)
        Next
        mesh.VertexColors.SetColors(colors)
        ' set the mesh's color tag 
        mesh.VertexColors.Tag = mt
      End If
    Next
  End Sub

  Public Overrides ReadOnly Property ShowIsoCurves() As Boolean
    Get
      ' Most shaded analysis modes that work on breps have the option of
      ' showing or hiding isocurves.  Run the built-in Rhino ZebraAnalysis
      ' to see how Rhino handles the user interface.  If controlling
      ' iso-curve visability is a feature you want to support, then provide
      ' user interface to set this member variable.
      Return m_show_isocurves
    End Get
  End Property

  ''' <summary>
  ''' Returns a mapping tag that is used to detect when a mesh's colors need to
  ''' be set.
  ''' </summary>
  ''' <returns></returns>
  Private Function GetMappingTag(serialNumber As UInteger) As Rhino.Render.MappingTag
    Dim mt As New Rhino.Render.MappingTag()
    mt.Id = Me.Id

    ' Since the false colors that are shown will change if the mesh is
    ' transformed, we have to initialize the transformation.
    mt.MeshTransform = Transform.Identity

    ' This is a 32 bit CRC or the information used to set the false colors.
    ' For this example, the m_z_range and m_hue_range intervals control the
    ' colors, so we calculate their crc.
    Dim crc As UInteger = RhinoMath.CRC32(serialNumber, m_z_range.T0)
    crc = RhinoMath.CRC32(crc, m_z_range.T1)
    crc = RhinoMath.CRC32(crc, m_hue_range.T0)
    crc = RhinoMath.CRC32(crc, m_hue_range.T1)
    mt.MappingCRC = crc
    Return mt
  End Function

  Private Function FalseColor(z As Double) As System.Drawing.Color
    ' Simple example of one way to change a number into a color.
    Dim s As Double = m_z_range.NormalizedParameterAt(z)
    s = Rhino.RhinoMath.Clamp(s, 0, 1)
    Return System.Drawing.Color.FromArgb(CInt(Math.Truncate(s * 255)), 0, 0)
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoMath', 'static uint CRC32(uint currentRemainder,double value)'],
      ['Rhino.Geometry.Collections.MeshVertexColorList', 'MappingTag Tag'],
      ['Rhino.Geometry.Collections.MeshVertexColorList', 'bool SetColors(Color[] colors)']
    ]
  },
  {
    name: 'Analysismode.cs',
    code: `using System;
using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;


[System.Runtime.InteropServices.Guid("62dd8eec-5cce-42c7-9d80-8b01fc169b81")]
public class AnalysisModeOnCommand : Rhino.Commands.Command
{
  public override string EnglishName { get { return "cs_analysismode_on"; } }

  protected override Rhino.Commands.Result RunCommand(RhinoDoc doc, Rhino.Commands.RunMode mode)
  {
    // make sure our custom visual analysis mode is registered
    var zmode = Rhino.Display.VisualAnalysisMode.Register(typeof(ZAnalysisMode));

    const ObjectType filter = Rhino.DocObjects.ObjectType.Surface | Rhino.DocObjects.ObjectType.PolysrfFilter | Rhino.DocObjects.ObjectType.Mesh;
    Rhino.DocObjects.ObjRef[] objs;
    var rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select objects for Z analysis", false, filter, out objs);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    int count = 0;
    for (int i = 0; i < objs.Length; i++)
    {
      var obj = objs[i].Object();

      // see if this object is alreay in Z analysis mode
      if (obj.InVisualAnalysisMode(zmode))
        continue;

      if (obj.EnableVisualAnalysisMode(zmode, true))
        count++;
    }
    doc.Views.Redraw();
    RhinoApp.WriteLine("{0} objects were put into Z-Analysis mode.", count);
    return Rhino.Commands.Result.Success;
  }
}

[System.Runtime.InteropServices.Guid("0A8CE87D-A8CB-4A41-9DE2-5B3957436AEE")]
public class AnalysisModeOffCommand : Rhino.Commands.Command
{
  public override string EnglishName { get { return "cs_analysismode_off"; } }

  protected override Rhino.Commands.Result RunCommand(RhinoDoc doc, Rhino.Commands.RunMode mode)
  {
    var zmode = Rhino.Display.VisualAnalysisMode.Find(typeof(ZAnalysisMode));
    // If zmode is null, we've never registered the mode so we know it hasn't been used
    if (zmode != null)
    {
      foreach (Rhino.DocObjects.RhinoObject obj in doc.Objects)
      {
        obj.EnableVisualAnalysisMode(zmode, false);
      }
      doc.Views.Redraw();
    }
    RhinoApp.WriteLine("Z-Analysis is off.");
    return Rhino.Commands.Result.Success;
  }
}


/// <summary>
/// This simple example provides a false color based on the world z-coordinate.
/// For details, see the implementation of the FalseColor() function.
/// </summary>
public class ZAnalysisMode : Rhino.Display.VisualAnalysisMode
{
  Interval m_z_range = new Interval(-10,10);
  Interval m_hue_range = new Interval(0,4*Math.PI / 3);
  private const bool m_show_isocurves = true;

  public override string Name { get { return "Z-Analysis"; } }
  public override Rhino.Display.VisualAnalysisMode.AnalysisStyle Style { get { return AnalysisStyle.FalseColor; } }

  public override bool ObjectSupportsAnalysisMode(Rhino.DocObjects.RhinoObject obj)
  {
    if (obj is Rhino.DocObjects.MeshObject || obj is Rhino.DocObjects.BrepObject)
      return true;
    return false;
  }

  protected override void UpdateVertexColors(Rhino.DocObjects.RhinoObject obj, Mesh[] meshes)
  {
    // A "mapping tag" is used to determine if the colors need to be set
    Rhino.Render.MappingTag mt = GetMappingTag(obj.RuntimeSerialNumber);

    for (int mi = 0; mi < meshes.Length; mi++)
    {
      var mesh = meshes[mi];
      if( mesh.VertexColors.Tag.Id != this.Id )
      {
        // The mesh's mapping tag is different from ours. Either the mesh has
        // no false colors, has false colors set by another analysis mode, has
        // false colors set using different m_z_range[]/m_hue_range[] values, or
        // the mesh has been moved.  In any case, we need to set the false
        // colors to the ones we want.
        System.Drawing.Color[] colors = new System.Drawing.Color[mesh.Vertices.Count];
        for (int i = 0; i < mesh.Vertices.Count; i++)
        {
          double z = mesh.Vertices[i].Z;
          colors[i] = FalseColor(z);
        }
        mesh.VertexColors.SetColors(colors);
        // set the mesh's color tag 
        mesh.VertexColors.Tag = mt;
      }
    }
  }

  public override bool ShowIsoCurves
  {
    get
    {
      // Most shaded analysis modes that work on breps have the option of
      // showing or hiding isocurves.  Run the built-in Rhino ZebraAnalysis
      // to see how Rhino handles the user interface.  If controlling
      // iso-curve visability is a feature you want to support, then provide
      // user interface to set this member variable.
      return m_show_isocurves; 
    }
  }

  /// <summary>
  /// Returns a mapping tag that is used to detect when a mesh's colors need to
  /// be set.
  /// </summary>
  /// <returns></returns>
  Rhino.Render.MappingTag GetMappingTag(uint serialNumber)
  {
    Rhino.Render.MappingTag mt = new Rhino.Render.MappingTag();
    mt.Id = this.Id;

    // Since the false colors that are shown will change if the mesh is
    // transformed, we have to initialize the transformation.
    mt.MeshTransform = Transform.Identity;

    // This is a 32 bit CRC or the information used to set the false colors.
    // For this example, the m_z_range and m_hue_range intervals control the
    // colors, so we calculate their crc.
    uint crc = RhinoMath.CRC32(serialNumber, m_z_range.T0);
    crc = RhinoMath.CRC32(crc, m_z_range.T1);
    crc = RhinoMath.CRC32(crc, m_hue_range.T0);
    crc = RhinoMath.CRC32(crc, m_hue_range.T1);
    mt.MappingCRC = crc;
    return mt;
  }

  System.Drawing.Color FalseColor(double z)
  {
    // Simple example of one way to change a number into a color.
    double s = m_z_range.NormalizedParameterAt(z);
    s = Rhino.RhinoMath.Clamp(s, 0, 1);
    return System.Drawing.Color.FromArgb((int)(s * 255), 0, 0);
  }

}`,
    members: [
      ['Rhino.RhinoMath', 'static uint CRC32(uint currentRemainder,double value)'],
      ['Rhino.Geometry.Collections.MeshVertexColorList', 'MappingTag Tag'],
      ['Rhino.Geometry.Collections.MeshVertexColorList', 'bool SetColors(Color[] colors)']
    ]
  },
  {
    name: 'Addlayer.vb',
    code: `Partial Class Examples
  Public Shared Function AddLayer(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Cook up an unused layer name
    Dim unused_name As String = doc.Layers.GetUnusedLayerName(False)

    ' Prompt the user to enter a layer name
    Dim gs As New Rhino.Input.Custom.GetString()
    gs.SetCommandPrompt("Name of layer to add")
    gs.SetDefaultString(unused_name)
    gs.AcceptNothing(True)
    gs.Get()
    If gs.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gs.CommandResult()
    End If

    ' Was a layer named entered?
    Dim layer_name As String = gs.StringResult().Trim()
    If String.IsNullOrEmpty(layer_name) Then
      Rhino.RhinoApp.WriteLine("Layer name cannot be blank.")
      Return Rhino.Commands.Result.Cancel
    End If

    ' Is the layer name valid?
    If Not Rhino.DocObjects.Layer.IsValidName(layer_name) Then
      Rhino.RhinoApp.WriteLine(layer_name & " is not a valid layer name.")
      Return Rhino.Commands.Result.Cancel
    End If

    ' Does a layer with the same name already exist?
    Dim layer_index As Integer = doc.Layers.Find(layer_name, True)
    If layer_index >= 0 Then
      Rhino.RhinoApp.WriteLine("A layer with the name {0} already exists.", layer_name)
      Return Rhino.Commands.Result.Cancel
    End If

    ' Add a new layer to the document
    layer_index = doc.Layers.Add(layer_name, System.Drawing.Color.Black)
    If layer_index < 0 Then
      Rhino.RhinoApp.WriteLine("Unable to add {0} layer.", layer_name)
      Return Rhino.Commands.Result.Failure
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoApp', 'static void WriteLine(string message)'],
      ['Rhino.RhinoApp', 'static void WriteLine(string format,object arg0)'],
      ['Rhino.DocObjects.Layer', 'static bool IsValidName(string name)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void AcceptNothing(bool enable)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetDefaultString(string defaultValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'string StringResult()'],
      ['Rhino.Input.Custom.GetString', 'GetString()'],
      ['Rhino.Input.Custom.GetString', 'GetResult Get()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(string layerName,Color layerColor)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Find(string layerName,bool ignoreDeletedLayers)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer FindName(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName(bool ignoreDeleted)']
    ]
  },
  {
    name: 'Addlayer.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result AddLayer(Rhino.RhinoDoc doc)
  {
    // Cook up an unused layer name
    string unused_name = doc.Layers.GetUnusedLayerName(false);

    // Prompt the user to enter a layer name
    Rhino.Input.Custom.GetString gs = new Rhino.Input.Custom.GetString();
    gs.SetCommandPrompt("Name of layer to add");
    gs.SetDefaultString(unused_name);
    gs.AcceptNothing(true);
    gs.Get();
    if (gs.CommandResult() != Rhino.Commands.Result.Success)
      return gs.CommandResult();

    // Was a layer named entered?
    string layer_name = gs.StringResult().Trim();
    if (string.IsNullOrEmpty(layer_name))
    {
      Rhino.RhinoApp.WriteLine("Layer name cannot be blank.");
      return Rhino.Commands.Result.Cancel;
    }

    // Is the layer name valid?
    if (!Rhino.DocObjects.Layer.IsValidName(layer_name))
    {
      Rhino.RhinoApp.WriteLine(layer_name + " is not a valid layer name.");
      return Rhino.Commands.Result.Cancel;
    }

    // Does a layer with the same name already exist?
    int layer_index = doc.Layers.Find(layer_name, true);
    if (layer_index >= 0)
    {
      Rhino.RhinoApp.WriteLine("A layer with the name {0} already exists.", layer_name);
      return Rhino.Commands.Result.Cancel;
    }

    // Add a new layer to the document
    layer_index = doc.Layers.Add(layer_name, System.Drawing.Color.Black);
    if (layer_index < 0)
    {
      Rhino.RhinoApp.WriteLine("Unable to add {0} layer.", layer_name);
      return Rhino.Commands.Result.Failure;
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.RhinoApp', 'static void WriteLine(string message)'],
      ['Rhino.RhinoApp', 'static void WriteLine(string format,object arg0)'],
      ['Rhino.DocObjects.Layer', 'static bool IsValidName(string name)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void AcceptNothing(bool enable)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetDefaultString(string defaultValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'string StringResult()'],
      ['Rhino.Input.Custom.GetString', 'GetString()'],
      ['Rhino.Input.Custom.GetString', 'GetResult Get()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(string layerName,Color layerColor)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Find(string layerName,bool ignoreDeletedLayers)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer FindName(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName(bool ignoreDeleted)']
    ]
  },
  {
    name: 'Addlayer.py',
    code: `import Rhino
import scriptcontext
import System.Guid, System.Drawing.Color

def AddLayer():
    # Cook up an unused layer name
    unused_name = scriptcontext.doc.Layers.GetUnusedLayerName(False)

    # Prompt the user to enter a layer name
    gs = Rhino.Input.Custom.GetString()
    gs.SetCommandPrompt("Name of layer to add")
    gs.SetDefaultString(unused_name)
    gs.AcceptNothing(True)
    gs.Get()
    if gs.CommandResult()!=Rhino.Commands.Result.Success:
        return gs.CommandResult()

    # Was a layer named entered?
    layer_name = gs.StringResult().Trim()
    if not layer_name:
        print "Layer name cannot be blank."
        return Rhino.Commands.Result.Cancel

    # Is the layer name valid?
    if not Rhino.DocObjects.Layer.IsValidName(layer_name):
        print layer_name, "is not a valid layer name."
        return Rhino.Commands.Result.Cancel

    # Does a layer with the same name already exist?
    layer_index = scriptcontext.doc.Layers.Find(layer_name, True)
    if layer_index>=0:
        print "A layer with the name", layer_name, "already exists."
        return Rhino.Commands.Result.Cancel

    # Add a new layer to the document
    layer_index = scriptcontext.doc.Layers.Add(layer_name, System.Drawing.Color.Black)
    if layer_index<0:
        print "Unable to add", layer_name, "layer."
        return Rhino.Commands.Result.Failure

    return Rhino.Commands.Result.Success


if __name__=="__main__":
    AddLayer()
`,
    members: [
      ['Rhino.RhinoApp', 'static void WriteLine(string message)'],
      ['Rhino.RhinoApp', 'static void WriteLine(string format,object arg0)'],
      ['Rhino.DocObjects.Layer', 'static bool IsValidName(string name)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void AcceptNothing(bool enable)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetDefaultString(string defaultValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'string StringResult()'],
      ['Rhino.Input.Custom.GetString', 'GetString()'],
      ['Rhino.Input.Custom.GetString', 'GetResult Get()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(string layerName,Color layerColor)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Find(string layerName,bool ignoreDeletedLayers)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer FindName(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName()'],
      ['Rhino.DocObjects.Tables.LayerTable', 'string GetUnusedLayerName(bool ignoreDeleted)']
    ]
  },
  {
    name: 'Rhinogettransform.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input.Custom
Imports Rhino.Display

Namespace examples_vb
  Public Class GetTranslation
    Inherits GetTransform
    Public Overrides Function CalculateTransform(viewport As RhinoViewport, point As Point3d) As Transform
      Dim xform = Transform.Identity
      Dim base_point As Point3d
      If TryGetBasePoint(base_point) Then
        Dim v = point - base_point
        If Not v.IsZero Then
          xform = Transform.Translation(v)
          If Not xform.IsValid Then
            xform = Transform.Identity
          End If
        End If
      End If
      Return xform
    End Function
  End Class

  Public Class RhinoGetTransformCommand
    Inherits TransformCommand
    Public Sub New()
      ' simple example of handling the BeforeTransformObjects event
      AddHandler RhinoDoc.BeforeTransformObjects, AddressOf RhinoDocOnBeforeTransformObjects
    End Sub

    Private Sub RhinoDocOnBeforeTransformObjects(sender As Object, ea As RhinoTransformObjectsEventArgs)
      RhinoApp.WriteLine("Transform Objects Count: {0}", ea.ObjectCount)
    End Sub

    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbGetTranslation"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim list = New Rhino.Collections.TransformObjectList()
      Dim rc = SelectObjects("Select objects to move", list)
      If rc <> Rhino.Commands.Result.Success Then
        Return rc
      End If

      Dim gp = New GetPoint()
      gp.SetCommandPrompt("Point to move from")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If


      Dim gt = New GetTranslation()
      gt.SetCommandPrompt("Point to move to")
      gt.SetBasePoint(gp.Point(), True)
      gt.DrawLineFromPoint(gp.Point(), True)
      gt.AddTransformObjects(list)
      gt.GetXform()
      If gt.CommandResult() <> Result.Success Then
        Return gt.CommandResult()
      End If

      Dim xform = gt.CalculateTransform(gt.View().ActiveViewport, gt.Point())
      TransformObjects(list, xform, False, False)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace
`,
    members: [
      ['Rhino.RhinoDoc', 'static BeforeTransformObjects']
    ]
  },
  {
    name: 'Rhinogettransform.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input.Custom;
using Rhino.Display;

namespace examples_cs
{
  public class GetTranslation : GetTransform
  {
    public override Transform CalculateTransform(RhinoViewport viewport, Point3d point)
    {
      var xform = Transform.Identity;
      Point3d base_point;
      if (TryGetBasePoint(out base_point))
      {
        var v = point - base_point;
        if (!v.IsZero)
        {
          xform = Transform.Translation(v);
          if (!xform.IsValid)
            xform = Transform.Identity;
        }
      }
      return xform;
    }
  }

  public class RhinoGetTransformCommand : TransformCommand
  {
    public RhinoGetTransformCommand()
    {
      // simple example of handling the BeforeTransformObjects event
      RhinoDoc.BeforeTransformObjects += RhinoDocOnBeforeTransformObjects;
    }

    private void RhinoDocOnBeforeTransformObjects(object sender, RhinoTransformObjectsEventArgs ea)
    {
      RhinoApp.WriteLine("Transform Objects Count: {0}", ea.ObjectCount);
    }

    public override string EnglishName { get { return "csGetTranslation"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var list = new Rhino.Collections.TransformObjectList();
      var rc = SelectObjects("Select objects to move", list);
      if (rc != Rhino.Commands.Result.Success)
        return rc;

      var gp = new GetPoint();
      gp.SetCommandPrompt("Point to move from");
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();


      var gt = new GetTranslation();
      gt.SetCommandPrompt("Point to move to");
      gt.SetBasePoint(gp.Point(), true);
      gt.DrawLineFromPoint(gp.Point(), true);
      gt.AddTransformObjects(list);
      gt.GetXform();
      if (gt.CommandResult() != Result.Success)
        return gt.CommandResult();

      var xform = gt.CalculateTransform(gt.View().ActiveViewport, gt.Point());
      TransformObjects(list, xform, false, false);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'static BeforeTransformObjects']
    ]
  },
  {
    name: 'Dimstyle.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Geometry

Namespace examples_vb
  Public Class ChangeDimensionStyleCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbChangeDimensionStyle"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      For Each rhino_object As RhinoObject In doc.Objects.GetObjectList(ObjectType.Annotation)
        Dim annotation_object = TryCast(rhino_object, AnnotationObjectBase)
        If annotation_object Is Nothing Then
          Continue For
        End If

        Dim annotation = TryCast(annotation_object.Geometry, AnnotationBase)
        If annotation Is Nothing Then
          Continue For
        End If

        If annotation.Index = doc.DimStyles.CurrentDimensionStyleIndex Then
          Continue For
        End If

        annotation.Index = doc.DimStyles.CurrentDimensionStyleIndex
        annotation_object.CommitChanges()
      Next

      doc.Views.Redraw()

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.RhinoDoc', 'DimStyleTable DimStyles'],
      ['Rhino.DocObjects.Tables.DimStyleTable', 'int CurrentIndex'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(Type typeFilter)']
    ]
  },
  {
    name: 'Dimstyle.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Geometry;

namespace examples_cs
{
  public class ChangeDimensionStyleCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csChangeDimensionStyle"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      foreach (var rhino_object in doc.Objects.GetObjectList(ObjectType.Annotation))
      {
        var annotation_object = rhino_object as AnnotationObjectBase;
        if (annotation_object == null) continue;

        var annotation = annotation_object.Geometry as AnnotationBase;
        if (annotation == null) continue;

        if (annotation.Index == doc.DimStyles.CurrentDimensionStyleIndex) continue;

        annotation.Index = doc.DimStyles.CurrentDimensionStyleIndex;
        annotation_object.CommitChanges();
      }

      doc.Views.Redraw();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.RhinoDoc', 'DimStyleTable DimStyles'],
      ['Rhino.DocObjects.Tables.DimStyleTable', 'int CurrentIndex'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(Type typeFilter)']
    ]
  },
  {
    name: 'Dimstyle.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Geometry import *
from scriptcontext import doc

def RunCommand():
  for annotation_object in doc.Objects.GetObjectList(ObjectType.Annotation):
    if not isinstance (annotation_object, AnnotationObjectBase):
      continue

    annotation = annotation_object.Geometry

    if annotation.Index == doc.DimStyles.CurrentDimensionStyleIndex:
      continue

    annotation.Index = doc.DimStyles.CurrentDimensionStyleIndex
    annotation_object.CommitChanges()

  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.RhinoDoc', 'DimStyleTable DimStyles'],
      ['Rhino.DocObjects.Tables.DimStyleTable', 'int CurrentIndex'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(Type typeFilter)']
    ]
  },
  {
    name: 'Addobjectstogroup.vb',
    code: `Imports System.Collections.Generic

Partial Class Examples
  Public Shared Function AddObjectsToGroup(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim go As New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects to group")
    go.GroupSelect = True
    go.GetMultiple(1, 0)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    Dim ids As New List(Of Guid)()
    For i As Integer = 0 To go.ObjectCount - 1
      ids.Add(go.[Object](i).ObjectId)
    Next
    Dim index As Integer = doc.Groups.Add(ids)
    doc.Views.Redraw()
    If index >= 0 Then
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'GroupTable Groups'],
      ['Rhino.Input.Custom.GetObject', 'GetObject()'],
      ['Rhino.Input.Custom.GetObject', 'GetResult GetMultiple(int minimumNumber,int maximumNumber)'],
      ['Rhino.DocObjects.Tables.GroupTable', 'int Add(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Addobjectstogroup.cs',
    code: `using System;
using System.Collections.Generic;

partial class Examples
{
  public static Rhino.Commands.Result AddObjectsToGroup(Rhino.RhinoDoc doc)
  {
    Rhino.Input.Custom.GetObject go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select objects to group");
    go.GroupSelect = true;
    go.GetMultiple(1, 0);
    if (go.CommandResult() != Rhino.Commands.Result.Success)
      return go.CommandResult();

    List<Guid> ids = new List<Guid>();
    for (int i = 0; i < go.ObjectCount; i++)
    {
      ids.Add(go.Object(i).ObjectId);
    }
    int index = doc.Groups.Add(ids);
    doc.Views.Redraw();
    if (index >= 0)
      return Rhino.Commands.Result.Success;
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'GroupTable Groups'],
      ['Rhino.Input.Custom.GetObject', 'GetObject()'],
      ['Rhino.Input.Custom.GetObject', 'GetResult GetMultiple(int minimumNumber,int maximumNumber)'],
      ['Rhino.DocObjects.Tables.GroupTable', 'int Add(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Addobjectstogroup.py',
    code: `import Rhino
import scriptcontext

def AddObjectsToGroup():
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects to group")
    go.GroupSelect = True
    go.GetMultiple(1, 0)
    if go.CommandResult()!=Rhino.Commands.Result.Success:
        return go.CommandResult()
    
    ids = [go.Object(i).ObjectId for i in range(go.ObjectCount)]
    index = scriptcontext.doc.Groups.Add(ids)
    scriptcontext.doc.Views.Redraw()
    if index>=0: return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__ == "__main__":
    AddObjectsToGroup()
`,
    members: [
      ['Rhino.RhinoDoc', 'GroupTable Groups'],
      ['Rhino.Input.Custom.GetObject', 'GetObject()'],
      ['Rhino.Input.Custom.GetObject', 'GetResult GetMultiple(int minimumNumber,int maximumNumber)'],
      ['Rhino.DocObjects.Tables.GroupTable', 'int Add(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Hatchcurve.vb',
    code: `Partial Class Examples
  Public Shared Function HatchCurve(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim go = New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select closed planar curve")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.[Custom].GeometryAttributeFilter.ClosedCurve
    go.SubObjectSelect = False
    go.Get()
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    Dim curve = go.Object(0).Curve()
    If curve Is Nothing OrElse Not curve.IsClosed OrElse Not curve.IsPlanar() Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim hatch_name As String = doc.HatchPatterns(doc.HatchPatterns.CurrentHatchPatternIndex).Name
    Dim rc = Rhino.Input.RhinoGet.GetString("Hatch pattern", True, hatch_name)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    hatch_name = hatch_name.Trim()
    If String.IsNullOrWhiteSpace(hatch_name) Then
      Return Rhino.Commands.Result.Nothing
    End If
    Dim index As Integer = doc.HatchPatterns.Find(hatch_name, True)
    If index < 0 Then
      Rhino.RhinoApp.WriteLine("Hatch pattern does not exist.")
      Return Rhino.Commands.Result.Nothing
    End If

    Dim hatches = Rhino.Geometry.Hatch.Create(curve, index, 0, 1)
    For i As Integer = 0 To hatches.Length - 1
      doc.Objects.AddHatch(hatches(i))
    Next
    If hatches.Length > 0 Then
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'HatchPatternTable HatchPatterns'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale)'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)'],
      ['Rhino.DocObjects.ModelComponent', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddHatch(Hatch hatch)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int CurrentHatchPatternIndex'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int Find(string name,bool ignoreDeleted)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'HatchPattern FindName(string name)']
    ]
  },
  {
    name: 'Hatchcurve.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result HatchCurve(Rhino.RhinoDoc doc)
  {
    var go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select closed planar curve");
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve;
    go.SubObjectSelect = false;
    go.Get();
    if( go.CommandResult() != Rhino.Commands.Result.Success )
      return go.CommandResult();

    var curve = go.Object(0).Curve();
    if( curve==null || !curve.IsClosed || !curve.IsPlanar() )
      return Rhino.Commands.Result.Failure;

    string hatch_name = doc.HatchPatterns[doc.HatchPatterns.CurrentHatchPatternIndex].Name;
    var rc = Rhino.Input.RhinoGet.GetString("Hatch pattern", true, ref hatch_name);
    if( rc!= Rhino.Commands.Result.Success )
      return rc;
    hatch_name = hatch_name.Trim();
    if( string.IsNullOrWhiteSpace(hatch_name) )
      return Rhino.Commands.Result.Nothing;
    int index = doc.HatchPatterns.Find(hatch_name, true);
    if( index < 0 )
    {
      Rhino.RhinoApp.WriteLine("Hatch pattern does not exist.");
      return Rhino.Commands.Result.Nothing;
    }

    var hatches = Rhino.Geometry.Hatch.Create( curve, index, 0, 1);
    for( int i=0; i<hatches.Length; i++ )
      doc.Objects.AddHatch(hatches[i]);
    if( hatches.Length>0 )
      doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'HatchPatternTable HatchPatterns'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale)'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)'],
      ['Rhino.DocObjects.ModelComponent', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddHatch(Hatch hatch)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int CurrentHatchPatternIndex'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int Find(string name,bool ignoreDeleted)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'HatchPattern FindName(string name)']
    ]
  },
  {
    name: 'Hatchcurve.py',
    code: `import Rhino
import scriptcontext

def HatchCurve():
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select closed planar curve")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve
    go.SubObjectSelect = False
    go.Get()
    if go.CommandResult()!=Rhino.Commands.Result.Success: return

    curve = go.Object(0).Curve()
    if (not curve or not curve.IsClosed or not curve.IsPlanar()): return

    hatch_name = scriptcontext.doc.HatchPatterns[scriptcontext.doc.HatchPatterns.CurrentHatchPatternIndex].Name
    rc, hatch_name = Rhino.Input.RhinoGet.GetString("Hatch pattern", True, hatch_name)
    if rc!=Rhino.Commands.Result.Success or not hatch_name: return

    index = scriptcontext.doc.HatchPatterns.Find(hatch_name, True)
    if index<0:
        print "Hatch pattern does not exist."
        return

    hatches = Rhino.Geometry.Hatch.Create(curve, index, 0, 1)
    for hatch in hatches:
        scriptcontext.doc.Objects.AddHatch(hatch)
    if hatches: scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    HatchCurve()`,
    members: [
      ['Rhino.RhinoDoc', 'HatchPatternTable HatchPatterns'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale)'],
      ['Rhino.Geometry.Hatch', 'static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)'],
      ['Rhino.DocObjects.ModelComponent', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddHatch(Hatch hatch)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int CurrentHatchPatternIndex'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'int Find(string name,bool ignoreDeleted)'],
      ['Rhino.DocObjects.Tables.HatchPatternTable', 'HatchPattern FindName(string name)']
    ]
  },
  {
    name: 'Printinstancedefinitiontree.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.FileIO
Imports Rhino.Commands

Namespace examples_vb
  Public Class InstanceDefinitionTreeCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbInstanceDefinitionTree"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim instanceDefinitions = doc.InstanceDefinitions
      Dim instanceDefinitionCount = instanceDefinitions.Count

      If instanceDefinitionCount = 0 Then
        RhinoApp.WriteLine("Document contains no instance definitions.")
        Return Result.[Nothing]
      End If

      Dim dump = New TextLog()
      dump.IndentSize = 4

      For i As Integer = 0 To instanceDefinitionCount - 1
        DumpInstanceDefinition(instanceDefinitions(i), dump, True)
      Next

      RhinoApp.WriteLine(dump.ToString())

      Return Result.Success
    End Function

    Private Sub DumpInstanceDefinition(instanceDefinition As InstanceDefinition, ByRef dump As TextLog, isRoot As Boolean)
      If instanceDefinition IsNot Nothing AndAlso Not instanceDefinition.IsDeleted Then
        Dim node As String
        If isRoot Then
          node = "─"
        Else
          '"\u2500"; 
          node = "└"
        End If
        '"\u2514"; 
        dump.Print(String.Format("{0} Instance definition {1} = {2}" & vbLf, node, instanceDefinition.Index, instanceDefinition.Name))

        If instanceDefinition.ObjectCount > 0 Then
          dump.PushIndent()
          For i As Integer = 0 To instanceDefinition.ObjectCount - 1
            Dim obj = instanceDefinition.[Object](i)

            If obj Is Nothing Then Continue For

            If TypeOf obj Is InstanceObject Then
              DumpInstanceDefinition(TryCast(obj, InstanceObject).InstanceDefinition, dump, False)
            Else
              ' Recursive...
              dump.Print(String.Format("└ Object {0} = {1}" & vbLf, i, obj.ShortDescription(False)))
            End If
          Next
          dump.PopIndent()
        End If
      End If
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.RhinoDoc', 'InstanceDefinitionTable InstanceDefinitions'],
      ['Rhino.FileIO.TextLog', 'void PopIndent()'],
      ['Rhino.FileIO.TextLog', 'void Print(string text)'],
      ['Rhino.FileIO.TextLog', 'void PushIndent()']
    ]
  },
  {
    name: 'Printinstancedefinitiontree.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.FileIO;
using Rhino.Commands;

namespace examples_cs
{
  public class InstanceDefinitionTreeCommand : Command
  {
    public override string EnglishName { get { return "csInstanceDefinitionTree"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var instance_definitions = doc.InstanceDefinitions;
      var instance_definition_count = instance_definitions.Count;

      if (instance_definition_count == 0)
      {
        RhinoApp.WriteLine("Document contains no instance definitions.");
        return Result.Nothing;
      }

      var dump = new TextLog();
      dump.IndentSize = 4;

      for (int i = 0; i < instance_definition_count; i++)
        DumpInstanceDefinition(instance_definitions[i], ref dump, true);

      RhinoApp.WriteLine(dump.ToString());

      return Result.Success;
    }

    private void DumpInstanceDefinition(InstanceDefinition instanceDefinition, ref TextLog dump, bool isRoot)
    {
      if (instanceDefinition != null && !instanceDefinition.IsDeleted)
      {
        string node = isRoot ? "─" : "└";
        dump.Print(string.Format("{0} Instance definition {1} = {2}\n", node, instanceDefinition.Index, instanceDefinition.Name));

        if (instanceDefinition.ObjectCount  > 0)
        {
          dump.PushIndent();
          for (int i = 0; i < instanceDefinition.ObjectCount ; i++)
          {
            var obj = instanceDefinition.Object(i);
            if (obj == null) continue;
            if (obj is InstanceObject)
              DumpInstanceDefinition((obj as InstanceObject).InstanceDefinition, ref dump, false); // Recursive...
            else
              dump.Print("\u2514 Object {0} = {1}\n", i, obj.ShortDescription(false));
          }
          dump.PopIndent();
        }
      }
    }
  }
}

`,
    members: [
      ['Rhino.RhinoDoc', 'InstanceDefinitionTable InstanceDefinitions'],
      ['Rhino.FileIO.TextLog', 'void PopIndent()'],
      ['Rhino.FileIO.TextLog', 'void Print(string text)'],
      ['Rhino.FileIO.TextLog', 'void PushIndent()']
    ]
  },
  {
    name: 'Printinstancedefinitiontree.py',
    code: `from scriptcontext import doc
import Rhino

def RunCommand():
  instanceDefinitions = doc.InstanceDefinitions
  instanceDefinitionCount = instanceDefinitions.Count

  if instanceDefinitionCount == 0:
    print "Document contains no instance definitions."
    return

  dump = Rhino.FileIO.TextLog()
  dump.IndentSize = 4

  for i in range(0, instanceDefinitionCount):
    DumpInstanceDefinition(instanceDefinitions[i], dump, True)

  print dump.ToString()

def DumpInstanceDefinition(instanceDefinition, dump, isRoot):
  if instanceDefinition != None and not instanceDefinition.IsDeleted:
    if isRoot:
      node = '-'
    else:
      node = '+'
    dump.Print(u"{0} Instance definition {1} = {2}\n".format(node, instanceDefinition.Index, instanceDefinition.Name))

    if instanceDefinition.ObjectCount  > 0:
      dump.PushIndent()
      for i in range(0, instanceDefinition.ObjectCount):
        obj = instanceDefinition.Object(i)
        if obj != None and type(obj) == Rhino.DocObjects.InstanceObject:
          DumpInstanceDefinition(obj.InstanceDefinition, dump, False) # Recursive...
        else:
          dump.Print(u"+ Object {0} = {1}\n".format(i, obj.ShortDescription(False)))
      dump.PopIndent()

if __name__ == "__main__":
  RunCommand()
`,
    members: [
      ['Rhino.RhinoDoc', 'InstanceDefinitionTable InstanceDefinitions'],
      ['Rhino.FileIO.TextLog', 'void PopIndent()'],
      ['Rhino.FileIO.TextLog', 'void Print(string text)'],
      ['Rhino.FileIO.TextLog', 'void PushIndent()']
    ]
  },
  {
    name: 'Displayprecision.vb',
    code: `Imports Rhino
Imports Rhino.Input.Custom
Imports Rhino.Commands

Namespace examples_vb
  Public Class DisplayPrecisionCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDisplayPrecision"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gi = New GetInteger()
      gi.SetCommandPrompt("New display precision")
      gi.SetDefaultInteger(doc.ModelDistanceDisplayPrecision)
      gi.SetLowerLimit(0, False)
      gi.SetUpperLimit(7, False)
      gi.[Get]()
      If gi.CommandResult() <> Result.Success Then
        Return gi.CommandResult()
      End If
      Dim distance_display_precision = gi.Number()

      If distance_display_precision <> doc.ModelDistanceDisplayPrecision Then
        doc.ModelDistanceDisplayPrecision = distance_display_precision
      End If

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.RhinoDoc', 'int ModelDistanceDisplayPrecision']
    ]
  },
  {
    name: 'Displayprecision.cs',
    code: `using Rhino;
using Rhino.Input.Custom;
using Rhino.Commands;

namespace examples_cs
{
  public class DisplayPrecisionCommand : Command
  {
    public override string EnglishName { get { return "csDisplayPrecision"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gi = new GetInteger();
      gi.SetCommandPrompt("New display precision");
      gi.SetDefaultInteger(doc.ModelDistanceDisplayPrecision);
      gi.SetLowerLimit(0, false);
      gi.SetUpperLimit(7, false);
      gi.Get();
      if (gi.CommandResult() != Result.Success)
        return gi.CommandResult();
      var distance_display_precision = gi.Number();

      if (distance_display_precision != doc.ModelDistanceDisplayPrecision)
        doc.ModelDistanceDisplayPrecision = distance_display_precision;

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.RhinoDoc', 'int ModelDistanceDisplayPrecision']
    ]
  },
  {
    name: 'Displayprecision.py',
    code: `from Rhino import *
from Rhino.Input.Custom import *
from Rhino.Commands import *
from scriptcontext import doc
import rhinoscriptsyntax as rs

def RunCommand():
  distance_display_precision = rs.GetInteger("Display precision",
    doc.ModelDistanceDisplayPrecision, 0, 7)
  if distance_display_precision == None: return Result.Nothing

  if distance_display_precision <> doc.ModelDistanceDisplayPrecision:
    doc.ModelDistanceDisplayPrecision = distance_display_precision

  return Result.Success

if __name__ ==  "__main__":
  RunCommand()`,
    members: [
      ['Rhino.RhinoDoc', 'int ModelDistanceDisplayPrecision']
    ]
  },
  {
    name: 'Addnamedview.vb',
    code: `Partial Class Examples
  Public Shared Function AddNamedView(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim view As Rhino.Display.RhinoView = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetView("Select view to adjust", view)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim location As Rhino.Geometry.Point3d
    rc = Rhino.Input.RhinoGet.GetPoint("Camera Location", False, location)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Look At Location")
    gp.DrawLineFromPoint(location, False)
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If
    Dim lookat As Rhino.Geometry.Point3d = gp.Point()

    Dim name As String = view.ActiveViewport.Name
    rc = Rhino.Input.RhinoGet.GetString("Name", True, name)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim vp As Rhino.Display.RhinoViewport = view.ActiveViewport
    ' save the current viewport projection
    vp.PushViewProjection()
    vp.CameraUp = Rhino.Geometry.Vector3d.ZAxis
    vp.SetCameraLocation(location, False)
    vp.SetCameraDirection(lookat - location, True)
    vp.Name = name

    doc.NamedViews.Add(name, vp.Id)
    view.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'NamedViewTable NamedViews'],
      ['Rhino.Display.RhinoViewport', 'Vector3d CameraUp'],
      ['Rhino.Display.RhinoViewport', 'string Name'],
      ['Rhino.Display.RhinoViewport', 'bool PopViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void PushViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraDirection(Vector3d cameraDirection,bool updateTargetLocation)'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraLocation(Point3d cameraLocation,bool updateTargetLocation)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPoint(string prompt,bool acceptNothing,Point3d point)'],
      ['Rhino.Input.RhinoGet', 'static Result GetString(string prompt,bool acceptNothing,string outputString)'],
      ['Rhino.Input.RhinoGet', 'static Result GetView(string commandPrompt,RhinoView view)'],
      ['Rhino.DocObjects.Tables.NamedViewTable', 'int Add(string name,Guid viewportId)']
    ]
  },
  {
    name: 'Addnamedview.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result AddNamedView(Rhino.RhinoDoc doc)
  {
    Rhino.Display.RhinoView view;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetView("Select view to adjust", out view);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    Rhino.Geometry.Point3d location;
    rc = Rhino.Input.RhinoGet.GetPoint("Camera Location", false, out location);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    Rhino.Input.Custom.GetPoint gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Look At Location");
    gp.DrawLineFromPoint(location, false);
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();
    Rhino.Geometry.Point3d lookat = gp.Point();
    
    string name = view.ActiveViewport.Name;
    rc = Rhino.Input.RhinoGet.GetString("Name", true, ref name);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    Rhino.Display.RhinoViewport vp = view.ActiveViewport;
    // save the current viewport projection
    vp.PushViewProjection();
    vp.CameraUp = Rhino.Geometry.Vector3d.ZAxis;
    vp.SetCameraLocation(location, false);
    vp.SetCameraDirection(lookat - location, true);
    vp.Name = name;

    doc.NamedViews.Add(name, vp.Id);
    view.Redraw();
    return Rhino.Commands.Result.Success;
  }
}`,
    members: [
      ['Rhino.RhinoDoc', 'NamedViewTable NamedViews'],
      ['Rhino.Display.RhinoViewport', 'Vector3d CameraUp'],
      ['Rhino.Display.RhinoViewport', 'string Name'],
      ['Rhino.Display.RhinoViewport', 'bool PopViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void PushViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraDirection(Vector3d cameraDirection,bool updateTargetLocation)'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraLocation(Point3d cameraLocation,bool updateTargetLocation)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPoint(string prompt,bool acceptNothing,Point3d point)'],
      ['Rhino.Input.RhinoGet', 'static Result GetString(string prompt,bool acceptNothing,string outputString)'],
      ['Rhino.Input.RhinoGet', 'static Result GetView(string commandPrompt,RhinoView view)'],
      ['Rhino.DocObjects.Tables.NamedViewTable', 'int Add(string name,Guid viewportId)']
    ]
  },
  {
    name: 'Addnamedview.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddNamedView():
    rc, view = Rhino.Input.RhinoGet.GetView("Select view to adjust")
    if rc!=Rhino.Commands.Result.Success: return rc

    rc, location = Rhino.Input.RhinoGet.GetPoint("Camera Location", False)
    if rc!=Rhino.Commands.Result.Success: return rc
    
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Look At Location")
    gp.DrawLineFromPoint(location, False)
    gp.Get()
    if gp.CommandResult()!=Rhino.Commands.Result.Success:
        return gp.CommandResult()
    lookat = gp.Point()

    name = view.ActiveViewport.Name
    rc, name = Rhino.Input.RhinoGet.GetString("Name", True, name)
    if rc!=Rhino.Commands.Result.Success: return rc

    vp = view.ActiveViewport
    # save the current viewport projection
    vp.PushViewProjection()
    vp.CameraUp = Rhino.Geometry.Vector3d.ZAxis
    vp.SetCameraLocation(location, False)
    vp.SetCameraDirection(lookat - location, True)
    vp.Name = name
    
    scriptcontext.doc.NamedViews.Add(name, vp.Id)
    view.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    AddNamedView()
`,
    members: [
      ['Rhino.RhinoDoc', 'NamedViewTable NamedViews'],
      ['Rhino.Display.RhinoViewport', 'Vector3d CameraUp'],
      ['Rhino.Display.RhinoViewport', 'string Name'],
      ['Rhino.Display.RhinoViewport', 'bool PopViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void PushViewProjection()'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraDirection(Vector3d cameraDirection,bool updateTargetLocation)'],
      ['Rhino.Display.RhinoViewport', 'void SetCameraLocation(Point3d cameraLocation,bool updateTargetLocation)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPoint(string prompt,bool acceptNothing,Point3d point)'],
      ['Rhino.Input.RhinoGet', 'static Result GetString(string prompt,bool acceptNothing,string outputString)'],
      ['Rhino.Input.RhinoGet', 'static Result GetView(string commandPrompt,RhinoView view)'],
      ['Rhino.DocObjects.Tables.NamedViewTable', 'int Add(string name,Guid viewportId)']
    ]
  },
  {
    name: 'Addlayout.vb',
    code: `Partial Class Examples
  ''' <summary>
  ''' Generate a layout with a single detail view that zooms to a list of objects
  ''' </summary>
  ''' <param name="doc"></param>
  ''' <returns></returns>
  Public Shared Function AddLayout(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    doc.PageUnitSystem = Rhino.UnitSystem.Millimeters
    Dim page_views = doc.Views.GetPageViews()
    Dim page_number As Integer = If((page_views Is Nothing), 1, page_views.Length + 1)
    Dim pageview = doc.Views.AddPageView(String.Format("A0_{0}", page_number), 1189, 841)
    If pageview IsNot Nothing Then
      Dim top_left As New Rhino.Geometry.Point2d(20, 821)
      Dim bottom_right As New Rhino.Geometry.Point2d(1169, 20)
      Dim detail = pageview.AddDetailView("ModelView", top_left, bottom_right, Rhino.Display.DefinedViewportProjection.Top)
      If detail IsNot Nothing Then
        pageview.SetActiveDetail(detail.Id)
        detail.Viewport.ZoomExtents()
        detail.DetailGeometry.IsProjectionLocked = True
        detail.DetailGeometry.SetScale(1, doc.ModelUnitSystem, 10, doc.PageUnitSystem)
        ' Commit changes tells the document to replace the document's detail object
        ' with the modified one that we just adjusted
        detail.CommitChanges()
      End If
      pageview.SetPageAsActive()
      doc.Views.ActiveView = pageview
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'UnitSystem PageUnitSystem'],
      ['Rhino.Geometry.DetailView', 'bool IsProjectionLocked'],
      ['Rhino.Geometry.DetailView', 'bool SetScale(double modelLength,UnitSystem modelUnits,double pageLength,UnitSystem pageUnits)'],
      ['Rhino.DocObjects.RhinoObject', 'bool CommitChanges()'],
      ['Rhino.Display.RhinoPageView', 'DetailViewObject AddDetailView(string title,Point2d corner0,Point2d corner1,DefinedViewportProjection initialProjection)'],
      ['Rhino.Display.RhinoPageView', 'bool SetActiveDetail(Guid detailId)'],
      ['Rhino.Display.RhinoPageView', 'void SetPageAsActive()'],
      ['Rhino.Display.RhinoViewport', 'bool ZoomExtents()'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView AddPageView(string title,double pageWidth,double pageHeight)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView[] GetPageViews()']
    ]
  },
  {
    name: 'Addlayout.cs',
    code: `partial class Examples
{
  /// <summary>
  /// Generate a layout with a single detail view that zooms to a list of objects
  /// </summary>
  /// <param name="doc"></param>
  /// <returns></returns>
  public static Rhino.Commands.Result AddLayout(Rhino.RhinoDoc doc)
  {
    doc.PageUnitSystem = Rhino.UnitSystem.Millimeters;
    var page_views = doc.Views.GetPageViews();
    int page_number = (page_views==null) ? 1 : page_views.Length + 1;
    var pageview = doc.Views.AddPageView(string.Format("A0_{0}",page_number), 1189, 841);
    if( pageview!=null )
    {
      Rhino.Geometry.Point2d top_left = new Rhino.Geometry.Point2d(20,821);
      Rhino.Geometry.Point2d bottom_right = new Rhino.Geometry.Point2d(1169, 20);
      var detail = pageview.AddDetailView("ModelView", top_left, bottom_right, Rhino.Display.DefinedViewportProjection.Top);
      if (detail != null)
      {
        pageview.SetActiveDetail(detail.Id);
        detail.Viewport.ZoomExtents();
        detail.DetailGeometry.IsProjectionLocked = true;
        detail.DetailGeometry.SetScale(1, doc.ModelUnitSystem, 10, doc.PageUnitSystem);
        // Commit changes tells the document to replace the document's detail object
        // with the modified one that we just adjusted
        detail.CommitChanges();
      }
      pageview.SetPageAsActive();
      doc.Views.ActiveView = pageview;
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'UnitSystem PageUnitSystem'],
      ['Rhino.Geometry.DetailView', 'bool IsProjectionLocked'],
      ['Rhino.Geometry.DetailView', 'bool SetScale(double modelLength,UnitSystem modelUnits,double pageLength,UnitSystem pageUnits)'],
      ['Rhino.DocObjects.RhinoObject', 'bool CommitChanges()'],
      ['Rhino.Display.RhinoPageView', 'DetailViewObject AddDetailView(string title,Point2d corner0,Point2d corner1,DefinedViewportProjection initialProjection)'],
      ['Rhino.Display.RhinoPageView', 'bool SetActiveDetail(Guid detailId)'],
      ['Rhino.Display.RhinoPageView', 'void SetPageAsActive()'],
      ['Rhino.Display.RhinoViewport', 'bool ZoomExtents()'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView AddPageView(string title,double pageWidth,double pageHeight)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView[] GetPageViews()']
    ]
  },
  {
    name: 'Addlayout.py',
    code: `import Rhino
import scriptcontext

# Generate a layout with a single detail view that zooms
# to a list of objects
def AddLayout():
    scriptcontext.doc.PageUnitSystem = Rhino.UnitSystem.Millimeters
    page_views = scriptcontext.doc.Views.GetPageViews()
    page_number = 1
    if page_views: page_number = len(page_views) + 1
    pageview = scriptcontext.doc.Views.AddPageView("A0_{0}".format(page_number), 1189, 841)
    if pageview:
        top_left = Rhino.Geometry.Point2d(20,821)
        bottom_right = Rhino.Geometry.Point2d(1169, 20)
        detail = pageview.AddDetailView("ModelView", top_left, bottom_right, Rhino.Display.DefinedViewportProjection.Top)
        if detail:
            pageview.SetActiveDetail(detail.Id)
            detail.Viewport.ZoomExtents()
            detail.DetailGeometry.IsProjectionLocked = True
            detail.DetailGeometry.SetScale(1, scriptcontext.doc.ModelUnitSystem, 10, scriptcontext.doc.PageUnitSystem)
            # Commit changes tells the document to replace the document's detail object
            # with the modified one that we just adjusted
            detail.CommitChanges()
        pageview.SetPageAsActive()
        scriptcontext.doc.Views.ActiveView = pageview
        scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    AddLayout()`,
    members: [
      ['Rhino.RhinoDoc', 'UnitSystem PageUnitSystem'],
      ['Rhino.Geometry.DetailView', 'bool IsProjectionLocked'],
      ['Rhino.Geometry.DetailView', 'bool SetScale(double modelLength,UnitSystem modelUnits,double pageLength,UnitSystem pageUnits)'],
      ['Rhino.DocObjects.RhinoObject', 'bool CommitChanges()'],
      ['Rhino.Display.RhinoPageView', 'DetailViewObject AddDetailView(string title,Point2d corner0,Point2d corner1,DefinedViewportProjection initialProjection)'],
      ['Rhino.Display.RhinoPageView', 'bool SetActiveDetail(Guid detailId)'],
      ['Rhino.Display.RhinoPageView', 'void SetPageAsActive()'],
      ['Rhino.Display.RhinoViewport', 'bool ZoomExtents()'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView AddPageView(string title,double pageWidth,double pageHeight)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoPageView[] GetPageViews()']
    ]
  },
  {
    name: 'Customundo.vb',
    code: `Imports System.Runtime.InteropServices
Imports Rhino

<Guid("A6924FE1-2B94-4918-94F3-B8935B8DC80C")> _
Public Class ex_customundoCommand
  Inherits Rhino.Commands.Command
  Public Overrides ReadOnly Property EnglishName() As String
    Get
      Return "vb_CustomUndoCommand"
    End Get
  End Property

  Private Property MyFavoriteNumber() As Double
    Get
      Return m_MyFavoriteNumber
    End Get
    Set(value As Double)
      m_MyFavoriteNumber = value
    End Set
  End Property
  Private m_MyFavoriteNumber As Double

  Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Rhino.Commands.Result
    ' Rhino automatically sets up an undo record when a command is run,
    ' but... the undo record is not saved if nothing changes in the
    ' document (objects added/deleted, layers changed,...)
    '
    ' If we have a command that doesn't change things in the document,
    ' but we want to have our own custom undo called then we need to do
    ' a little extra work

    Dim d As Double = MyFavoriteNumber
    If Rhino.Input.RhinoGet.GetNumber("Favorite number", True, d) = Rhino.Commands.Result.Success Then
      Dim current_value As Double = MyFavoriteNumber
      doc.AddCustomUndoEvent("Favorite Number", AddressOf OnUndoFavoriteNumber, current_value)
      MyFavoriteNumber = d
    End If
    Return Rhino.Commands.Result.Success
  End Function

  ' event handler for custom undo
  Private Sub OnUndoFavoriteNumber(sender As Object, e As Rhino.Commands.CustomUndoEventArgs)
    ' !!!!!!!!!!
    ' NEVER change any setting in the Rhino document or application.  Rhino
    ' handles ALL changes to the application and document and you will break
    ' the Undo/Redo commands if you make any changes to the application or
    ' document. This is meant only for your own private plug-in data
    ' !!!!!!!!!!

    ' This function can be called either by undo or redo
    ' In order to get redo to work, add another custom undo event with the
    ' current value.  If you don't want redo to work, just skip adding
    ' a custom undo event here
    Dim current_value As Double = MyFavoriteNumber
    e.Document.AddCustomUndoEvent("Favorite Number", AddressOf OnUndoFavoriteNumber, current_value)

    Dim old_value As Double = CDbl(e.Tag)
    RhinoApp.WriteLine("Going back to your favorite = {0}", old_value)
    MyFavoriteNumber = old_value
  End Sub
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler,object tag)']
    ]
  },
  {
    name: 'Customundo.cs',
    code: `using System;
using System.Runtime.InteropServices;
using Rhino;

[Guid("954B8E21-51F2-4115-BD6B-DE67EE874C74")]
public class ex_customundoCommand : Rhino.Commands.Command
{
  public override string EnglishName { get { return "cs_CustomUndoCommand"; } }

  double MyFavoriteNumber { get; set; }

  protected override Rhino.Commands.Result RunCommand(RhinoDoc doc, Rhino.Commands.RunMode mode)
  {
    // Rhino automatically sets up an undo record when a command is run,
    // but... the undo record is not saved if nothing changes in the
    // document (objects added/deleted, layers changed,...)
    //
    // If we have a command that doesn't change things in the document,
    // but we want to have our own custom undo called then we need to do
    // a little extra work

    double d = MyFavoriteNumber;
    if (Rhino.Input.RhinoGet.GetNumber("Favorite number", true, ref d) == Rhino.Commands.Result.Success)
    {
      double current_value = MyFavoriteNumber;
      doc.AddCustomUndoEvent("Favorite Number", OnUndoFavoriteNumber, current_value);
      MyFavoriteNumber = d;
    }
    return Rhino.Commands.Result.Success;
  }

  // event handler for custom undo
  void OnUndoFavoriteNumber(object sender, Rhino.Commands.CustomUndoEventArgs e)
  {
    // !!!!!!!!!!
    // NEVER change any setting in the Rhino document or application.  Rhino
    // handles ALL changes to the application and document and you will break
    // the Undo/Redo commands if you make any changes to the application or
    // document. This is meant only for your own private plug-in data
    // !!!!!!!!!!

    // This function can be called either by undo or redo
    // In order to get redo to work, add another custom undo event with the
    // current value.  If you don't want redo to work, just skip adding
    // a custom undo event here
    double current_value = MyFavoriteNumber;
    e.Document.AddCustomUndoEvent("Favorite Number", OnUndoFavoriteNumber, current_value);

    double old_value = (double)e.Tag;
    RhinoApp.WriteLine("Going back to your favorite = {0}", old_value);
    MyFavoriteNumber = old_value;
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler,object tag)']
    ]
  },
  {
    name: 'Customundo.py',
    code: `import Rhino
import scriptcontext


def OnUndoFavoriteNumber(sender, e):
    """!!!!!!!!!!
    NEVER change any setting in the Rhino document or application.  Rhino
    handles ALL changes to the application and document and you will break
    the Undo/Redo commands if you make any changes to the application or
    document. This is meant only for your own private plug-in data
    !!!!!!!!!!

    This function can be called either by undo or redo
    In order to get redo to work, add another custom undo event with the
    current value.  If you don't want redo to work, just skip adding
    a custom undo event here
    """
    current_value = scriptcontext.sticky["FavoriteNumber"]
    e.Document.AddCustomUndoEvent("Favorite Number", OnUndoFavoriteNumber, current_value)

    old_value = e.Tag
    print "Going back to your favorite =", old_value
    scriptcontext.sticky["FavoriteNumber"]= old_value;


def TestCustomUndo():
    """Rhino automatically sets up an undo record when a command is run,
       but... the undo record is not saved if nothing changes in the
       document (objects added/deleted, layers changed,...)
    
       If we have a command that doesn't change things in the document,
       but we want to have our own custom undo called then we need to do
       a little extra work
    """
    current_value = 0
    if scriptcontext.sticky.has_key("FavoriteNumber"):
        current_value = scriptcontext.sticky["FavoriteNumber"]
    rc, new_value = Rhino.Input.RhinoGet.GetNumber("Favorite number", True, current_value)
    if rc!=Rhino.Commands.Result.Success: return

    scriptcontext.doc.AddCustomUndoEvent("Favorite Number", OnUndoFavoriteNumber, current_value);
    scriptcontext.sticky["FavoriteNumber"] = new_value

if __name__=="__main__":
    TestCustomUndo()

`,
    members: [
      ['Rhino.RhinoDoc', 'bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler,object tag)']
    ]
  },
  {
    name: 'Objectdecoration.vb',
    code: `Partial Class Examples
  Public Shared Function ObjectDecoration(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Define a line
    Dim line = New Rhino.Geometry.Line(New Rhino.Geometry.Point3d(0, 0, 0), New Rhino.Geometry.Point3d(10, 0, 0))

    ' Make a copy of Rhino's default object attributes
    Dim attribs = doc.CreateDefaultAttributes()

    ' Modify the object decoration style
    attribs.ObjectDecoration = Rhino.DocObjects.ObjectDecoration.BothArrowhead

    ' Create a new curve object with our attributes
    doc.Objects.AddLine(line, attribs)
    doc.Views.Redraw()

    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.RhinoDoc', 'DocObjects.ObjectAttributes CreateDefaultAttributes()']
    ]
  },
  {
    name: 'Objectdecoration.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result ObjectDecoration(Rhino.RhinoDoc doc)
  {
    // Define a line
    var line = new Rhino.Geometry.Line(new Rhino.Geometry.Point3d(0, 0, 0), new Rhino.Geometry.Point3d(10, 0, 0));

    // Make a copy of Rhino's default object attributes
    var attribs = doc.CreateDefaultAttributes();

    // Modify the object decoration style
    attribs.ObjectDecoration = Rhino.DocObjects.ObjectDecoration.BothArrowhead;

    // Create a new curve object with our attributes
    doc.Objects.AddLine(line, attribs);
    doc.Views.Redraw();

    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.RhinoDoc', 'DocObjects.ObjectAttributes CreateDefaultAttributes()']
    ]
  },
  {
    name: 'Objectdecoration.py',
    code: `import Rhino
import scriptcontext

def ObjectDecoration():
    # Define a line
    line = Rhino.Geometry.Line(Rhino.Geometry.Point3d(0, 0, 0), Rhino.Geometry.Point3d(10, 0, 0))

    # Make a copy of Rhino's default object attributes
    attribs = scriptcontext.doc.CreateDefaultAttributes()

    # Modify the object decoration style
    attribs.ObjectDecoration = Rhino.DocObjects.ObjectDecoration.BothArrowhead

    # Create a new curve object with our attributes
    scriptcontext.doc.Objects.AddLine(line, attribs)
    scriptcontext.doc.Views.Redraw()

if __name__ == "__main__":
    ObjectDecoration()`,
    members: [
      ['Rhino.RhinoDoc', 'DocObjects.ObjectAttributes CreateDefaultAttributes()']
    ]
  },
  {
    name: 'Addbrepbox.vb',
    code: `Partial Class Examples
  Public Shared Function AddBrepBox(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim pt0 As New Rhino.Geometry.Point3d(0, 0, 0)
    Dim pt1 As New Rhino.Geometry.Point3d(10, 10, 10)
    Dim box As New Rhino.Geometry.BoundingBox(pt0, pt1)
    Dim brep As Rhino.Geometry.Brep = box.ToBrep()
    Dim rc As Rhino.Commands.Result = Rhino.Commands.Result.Failure
    If doc.Objects.AddBrep(brep) <> System.Guid.Empty Then
      rc = Rhino.Commands.Result.Success
      doc.Views.Redraw()
    End If
    Return rc
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'BoundingBox(Point3d min,Point3d max)'],
      ['Rhino.Geometry.BoundingBox', 'Brep ToBrep()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddBrep(Brep brep)']
    ]
  },
  {
    name: 'Addbrepbox.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result AddBrepBox(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Point3d pt0 = new Rhino.Geometry.Point3d(0, 0, 0);
    Rhino.Geometry.Point3d pt1 = new Rhino.Geometry.Point3d(10, 10, 10);
    Rhino.Geometry.BoundingBox box = new Rhino.Geometry.BoundingBox(pt0, pt1);
    Rhino.Geometry.Brep brep = box.ToBrep();
    Rhino.Commands.Result rc = Rhino.Commands.Result.Failure;
    if( doc.Objects.AddBrep(brep) != System.Guid.Empty )
    {
      rc = Rhino.Commands.Result.Success;
      doc.Views.Redraw();
    }
    return rc;
  }
}
`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'BoundingBox(Point3d min,Point3d max)'],
      ['Rhino.Geometry.BoundingBox', 'Brep ToBrep()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddBrep(Brep brep)']
    ]
  },
  {
    name: 'Addbrepbox.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddBrepBox():
    pt0 = Rhino.Geometry.Point3d(0, 0, 0)
    pt1 = Rhino.Geometry.Point3d(10, 10, 10)
    box = Rhino.Geometry.BoundingBox(pt0, pt1)
    brep = box.ToBrep()
    rc = Rhino.Commands.Result.Failure
    if( scriptcontext.doc.Objects.AddBrep(brep) != System.Guid.Empty ):
        rc = Rhino.Commands.Result.Success
        scriptcontext.doc.Views.Redraw()
    return rc

if( __name__ == "__main__" ):
    AddBrepBox()
`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'BoundingBox(Point3d min,Point3d max)'],
      ['Rhino.Geometry.BoundingBox', 'Brep ToBrep()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddBrep(Brep brep)']
    ]
  },
  {
    name: 'Elevation.vb',
    code: `Imports System.Collections.Generic
Imports System.Linq
Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.Geometry.Intersect
Imports Rhino.Input
Imports Rhino.Input.Custom
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class FurthestZOnSurfaceCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbFurthestZOnSurfaceGivenXY"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      '#Region "user input"
      ' select a surface
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select surface")
      gs.GeometryFilter = ObjectType.Surface
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.[Get]()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If
      ' get the brep
      Dim brep = gs.[Object](0).Brep()
      If brep Is Nothing Then
        Return Result.Failure
      End If

      ' get X and Y
      Dim x As Double = 0.0, y As Double = 0.0
      Dim rc = RhinoGet.GetNumber("value of X coordinate", True, x)
      If rc <> Result.Success Then
        Return rc
      End If
      rc = RhinoGet.GetNumber("value of Y coordinate", True, y)
      If rc <> Result.Success Then
        Return rc
      End If
      '#End Region

      ' an earlier version of this sample used a curve-brep intersection to find Z
      'var maxZ = MaxZIntersectionMethod(brep, x, y, doc.ModelAbsoluteTolerance);

      ' projecting points is another way to find Z
      Dim maxZ = MaxZProjectionMethod(brep, x, y, doc.ModelAbsoluteTolerance)

      If maxZ IsNot Nothing Then
        RhinoApp.WriteLine("Maximum surface Z coordinate at X={0}, Y={1} is {2}", x, y, maxZ)
        doc.Objects.AddPoint(New Point3d(x, y, maxZ.Value))
        doc.Views.Redraw()
      Else
        RhinoApp.WriteLine("no maximum surface Z coordinate at X={0}, Y={1} found.", x, y)
      End If

      Return Result.Success
    End Function

    Private Function MaxZProjectionMethod(brep As Brep, x As Double, y As Double, tolerance As Double) As System.Nullable(Of Double)
      Dim maxZ As System.Nullable(Of Double) = Nothing
      Dim breps = New List(Of Brep)() From { _
        brep _
      }
      Dim points = New List(Of Point3d)() From { _
        New Point3d(x, y, 0) _
      }
      ' grab all the points projected in Z dir.  Aggregate finds furthest Z from XY plane
      Try
        maxZ = (From pt In Intersection.ProjectPointsToBreps(breps, points, New Vector3d(0, 0, 1), tolerance) Select pt.Z).Aggregate(Function(z1, z2) If(Math.Abs(z1) > Math.Abs(z2), z1, z2))
        'Sequence contains no elements
      Catch generatedExceptionName As InvalidOperationException
      End Try
      Return maxZ
    End Function

    Private Function MaxZIntersectionMethod(brep As Brep, x As Double, y As Double, tolerance As Double) As System.Nullable(Of Double)
      Dim maxZ As System.Nullable(Of Double) = Nothing

      Dim bbox = brep.GetBoundingBox(True)
      ' furthest Z from XY plane.  Max() doesn't work because of possible negative Z values
      Dim maxDistFromXY = (From corner In bbox.GetCorners() Select corner.Z).Aggregate(Function(z1, z2) If(Math.Abs(z1) > Math.Abs(z2), z1, z2))
      ' multiply distance by 2 to make sure line intersects completely
      Dim lineCurve = New LineCurve(New Point3d(x, y, 0), New Point3d(x, y, maxDistFromXY * 2))

      Dim overlapCurves As Curve() = Nothing
      Dim interPoints As Point3d() = Nothing
      If Intersection.CurveBrep(lineCurve, brep, tolerance, overlapCurves, interPoints) Then
        If overlapCurves.Length > 0 OrElse interPoints.Length > 0 Then
          ' grab all the points resulting frem the intersection. 
          '    1st set: points from overlapping curves, 
          '    2nd set: points when there was no overlap
          '    .Aggregate: furthest Z from XY plane.
          Dim overlapCrvsZs As IEnumerable(Of Double) = (From c In overlapCurves Select DirectCast(IIf(Math.Abs(c.PointAtEnd.Z) > Math.Abs(c.PointAtStart.Z), c.PointAtEnd.Z, c.PointAtStart.Z), Double))
          Dim intersectPtsZs As IEnumerable(Of Double) = (From p In interPoints Select p.Z)
          Dim allZs = overlapCrvsZs.Union(intersectPtsZs).ToArray()
          maxZ = allZs.Aggregate(Function(runZ, nextZ) DirectCast(IIf(Math.Abs(runZ) > Math.Abs(nextZ), runZ, nextZ), Double))
        End If
      End If
      Return maxZ
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'Point3d[] GetCorners()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)']
    ]
  },
  {
    name: 'Elevation.cs',
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Rhino;
using Rhino.Commands;
using Rhino.Geometry;
using Rhino.Geometry.Intersect;
using Rhino.Input;
using Rhino.Input.Custom;
using Rhino.DocObjects;

namespace examples_cs
{
  public class FurthestZOnSurfaceCommand : Command
  {
    public override string EnglishName { get { return "csFurthestZOnSurfaceGivenXY"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      #region user input
      // select a surface
      var gs = new GetObject();
      gs.SetCommandPrompt("select surface");
      gs.GeometryFilter = ObjectType.Surface;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();
      // get the brep
      var brep = gs.Object(0).Brep();
      if (brep == null)
        return Result.Failure;

      // get X and Y
      double x = 0.0, y = 0.0;
      var rc = RhinoGet.GetNumber("value of X coordinate", true, ref x);
      if (rc != Result.Success)
        return rc;
      rc = RhinoGet.GetNumber("value of Y coordinate", true, ref y);
      if (rc != Result.Success)
        return rc;
      #endregion
      
      // an earlier version of this sample used a curve-brep intersection to find Z
      //var maxZ = maxZIntersectionMethod(brep, x, y, doc.ModelAbsoluteTolerance);

      // projecting points is another way to find Z
      var max_z = MaxZProjectionMethod(brep, x, y, doc.ModelAbsoluteTolerance);

      if (max_z != null)
      {
        RhinoApp.WriteLine("Maximum surface Z coordinate at X={0}, Y={1} is {2}", x, y, max_z);
        doc.Objects.AddPoint(new Point3d(x, y, max_z.Value));
        doc.Views.Redraw();
      }
      else
        RhinoApp.WriteLine("no maximum surface Z coordinate at X={0}, Y={1} found.", x, y);

      return Result.Success;
    }

    private static double? MaxZProjectionMethod(Brep brep, double x, double y, double tolerance)
    {
      double? max_z = null;
      var breps = new List<Brep> {brep};
      var points = new List<Point3d> {new Point3d(x, y, 0)};
      // grab all the points projected in Z dir.  Aggregate finds furthest Z from XY plane
      try {
        max_z = (from pt in Intersection.ProjectPointsToBreps(breps, points, new Vector3d(0, 0, 1), tolerance) select pt.Z)
                // Here you might be tempted to use .Max() to get the largest Z value but that doesn't work because
                // Z might be negative.  This custom aggregate returns the max Z independant of the sign.  If it had a name
                // it could be MaxAbs()
                .Aggregate((z1, z2) => Math.Abs(z1) > Math.Abs(z2) ? z1 : z2);
      } catch (InvalidOperationException) {/*Sequence contains no elements*/}
      return max_z;
    }

    private double? MaxZIntersectionMethod(Brep brep, double x, double y, double tolerance)
    {
      double? max_z = null;

      var bbox = brep.GetBoundingBox(true);
      var max_dist_from_xy = (from corner in bbox.GetCorners() select corner.Z)
                              // furthest Z from XY plane.
                              // Here you might be tempted to use .Max() to get the largest Z value but that doesn't work because
                              // Z might be negative.  This custom aggregate returns the max Z independant of the sign.  If it had a name
                              // it could be MaxAbs()
                              .Aggregate((z1, z2) => Math.Abs(z1) > Math.Abs(z2) ? z1 : z2);
      // multiply distance by 2 to make sure line intersects completely
      var line_curve = new LineCurve(new Point3d(x, y, 0), new Point3d(x, y, max_dist_from_xy*2));

      Curve[] overlap_curves;
      Point3d[] inter_points;
      if (Intersection.CurveBrep(line_curve, brep, tolerance, out overlap_curves, out inter_points))
      {
        if (overlap_curves.Length > 0 || inter_points.Length > 0)
        {
          // grab all the points resulting frem the intersection. 
          //    1st set: points from overlapping curves, 
          //    2nd set: points when there was no overlap
          //    .Aggregate: furthest Z from XY plane.
          max_z = (from c in overlap_curves select Math.Abs(c.PointAtEnd.Z) > Math.Abs(c.PointAtStart.Z) ? c.PointAtEnd.Z : c.PointAtStart.Z)
                  .Union
                  (from p in inter_points select p.Z)
                   // Here you might be tempted to use .Max() to get the largest Z value but that doesn't work because
                   // Z might be negative.  This custom aggregate returns the max Z independant of the sign.  If it had a name
                   // it could be MaxAbs()
                  .Aggregate((z1, z2) => Math.Abs(z1) > Math.Abs(z2) ? z1 : z2);
        }
      }
      return max_z;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'Point3d[] GetCorners()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)']
    ]
  },
  {
    name: 'Elevation.py',
    code: `import rhinoscriptsyntax as rs
from Rhino.Geometry import Intersect, Point3d, Vector3d
from scriptcontext import doc

def RunCommand():
  # select a surface
  srfid = rs.GetObject("select serface", rs.filter.surface | rs.filter.polysurface)
  if not srfid: return
  # get the brep
  brep = rs.coercebrep(srfid)
  if not brep: return

  x = rs.GetReal("value of x", 0)
  y = rs.GetReal("value of y", 0)

  pts = [(abs(point.Z), point.Z) for point in Intersect.Intersection.ProjectPointsToBreps(
           [brep], [Point3d(x, y, 0)], Vector3d(0, 0, 1), doc.ModelAbsoluteTolerance)]
           
  pts.sort(reverse=True)
  
  if pts == []:
    print "no Z for given X, Y"
  else:
    rs.AddPoint(Point3d(x, y, pts[0][1]))

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'Point3d[] GetCorners()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)']
    ]
  },
  {
    name: 'Curvebrepbox.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input

Namespace examples_vb
  Public Class BrepFromCurveBBoxCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbBrepFromCurveBBox"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim objref As DocObjects.ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select Curve", False, DocObjects.ObjectType.Curve, objref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim curve = objref.Curve()

      Dim view = doc.Views.ActiveView
      Dim plane = view.ActiveViewport.ConstructionPlane()
      ' Create a construction plane aligned bounding box
      Dim bbox = curve.GetBoundingBox(plane)

      If bbox.IsDegenerate(doc.ModelAbsoluteTolerance) > 0 Then
        RhinoApp.WriteLine("the curve's bounding box is degenerate (flat) in at least one direction so a box cannot be created.")
        Return Result.Failure
      End If
      Dim brepbox = Brep.CreateFromBox(bbox)
      doc.Objects.AddBrep(brepbox)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'int IsDegenerate(double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep CreateFromBox(BoundingBox box)']
    ]
  },
  {
    name: 'Curvebrepbox.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class BrepFromCurveBBoxCommand : Command
  {
    public override string EnglishName { get { return "csBrepFromCurveBBox"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      Rhino.DocObjects.ObjRef objref;
      var rc = RhinoGet.GetOneObject("Select Curve", false, ObjectType.Curve, out objref);
      if( rc != Result.Success )
        return rc;
      var curve = objref.Curve();

      var view = doc.Views.ActiveView;
      var plane = view.ActiveViewport.ConstructionPlane();
      // Create a construction plane aligned bounding box
      var bbox = curve.GetBoundingBox(plane);

      if (bbox.IsDegenerate(doc.ModelAbsoluteTolerance) > 0) {
        RhinoApp.WriteLine("the curve's bounding box is degenerate (flat) in at least one direction so a box cannot be created.");
        return Result.Failure;
      }
      var brep = Brep.CreateFromBox(bbox);
      doc.Objects.AddBrep(brep);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'int IsDegenerate(double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep CreateFromBox(BoundingBox box)']
    ]
  },
  {
    name: 'Curvebrepbox.py',
    code: `import Rhino
from Rhino.Geometry import *
from Rhino.Commands import Result
from Rhino.Input import RhinoGet
from Rhino.DocObjects import ObjectType
import rhinoscriptsyntax as rs
from scriptcontext import doc

def RunCommand():
  rc, objRef = RhinoGet.GetOneObject("Select curve", False, ObjectType.Curve)
  if rc <> Result.Success:
    return rc
  curve = objRef.Curve()
  if None == curve:
    return Result.Failure

  view = doc.Views.ActiveView
  plane = view.ActiveViewport.ConstructionPlane()
  # Create a construction plane aligned bounding box
  bbox = curve.GetBoundingBox(plane)

  if bbox.IsDegenerate(doc.ModelAbsoluteTolerance) > 0:
    print "the curve's bounding box is degenerate (flat) in at least one direction so a box cannot be created."
    return Result.Failure

  brep = Brep.CreateFromBox(bbox)
  doc.Objects.AddBrep(brep)
  doc.Views.Redraw()

  return Result.Success

if __name__ == "__main__":
  print RunCommand()
`,
    members: [
      ['Rhino.Geometry.BoundingBox', 'int IsDegenerate(double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep CreateFromBox(BoundingBox box)']
    ]
  },
  {
    name: 'Isbrepbox.vb',
    code: `Partial Class Examples
  Public Shared Function IsBrepBox(brep As Rhino.Geometry.Brep) As Boolean
    Const zero_tolerance As Double = 0.000001 ' or whatever
    Dim rc As Boolean = brep.IsSolid
    If rc Then
      rc = brep.Faces.Count = 6
    End If

    Dim N = New Rhino.Geometry.Vector3d(5) {}
    Dim i As Integer = 0
    While rc AndAlso i < 6
      Dim plane As Rhino.Geometry.Plane
      rc = brep.Faces(i).TryGetPlane(plane, zero_tolerance)
      If rc Then
        N(i) = plane.ZAxis
        N(i).Unitize()
      End If
      i += 1
    End While

    i = 0
    While rc AndAlso i < 6
      Dim count As Integer = 0
      Dim j As Integer = 0
      While rc AndAlso j < 6
        Dim dot As Double = Math.Abs(N(i) * N(j))
        If dot <= zero_tolerance Then
          Continue While
        End If
        If Math.Abs(dot - 1.0) <= zero_tolerance Then
          count += 1
        Else
          rc = False
        End If
        j += 1
      End While

      If rc Then
        If 2 <> count Then
          rc = False
        End If
      End If
      i += 1
    End While
    Return rc
  End Function

  Public Shared Function TestBrepBox(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim obj_ref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select Brep", True, Rhino.DocObjects.ObjectType.Brep, obj_ref)
    If rc = Rhino.Commands.Result.Success Then
      Dim brep = obj_ref.Brep()
      If brep IsNot Nothing Then
        If IsBrepBox(brep) Then
          Rhino.RhinoApp.WriteLine("Yes it is a box")
        Else
          Rhino.RhinoApp.WriteLine("No it is not a box")
        End If
      End If
    End If
    Return rc
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Brep', 'bool IsSolid'],
      ['Rhino.Geometry.Surface', 'bool TryGetPlane(Plane plane,double tolerance)']
    ]
  },
  {
    name: 'Isbrepbox.cs',
    code: `using System;

partial class Examples
{
  public static bool IsBrepBox(Rhino.Geometry.Brep brep)
  {
    const double zero_tolerance = 1.0e-6; // or whatever
    bool rc = brep.IsSolid;
    if( rc )
      rc = brep.Faces.Count == 6;

    var N = new Rhino.Geometry.Vector3d[6];
    for (int i = 0; rc && i < 6; i++)
    {
      Rhino.Geometry.Plane plane;
      rc = brep.Faces[i].TryGetPlane(out plane, zero_tolerance);
      if( rc )
      {
        N[i] = plane.ZAxis;
        N[i].Unitize();
      }
    }
 
    for (int i = 0; rc && i < 6; i++)
    {
      int count = 0;
      for (int j = 0; rc && j < 6; j++)
      {
        double dot = Math.Abs(N[i] * N[j]);
        if (dot <= zero_tolerance)
          continue;
        if (Math.Abs(dot - 1.0) <= zero_tolerance) 
          count++;
        else
          rc = false;
      }
 
      if (rc)
      {
        if (2 != count)
          rc = false;
      }
    }
    return rc;
  }

  public static Rhino.Commands.Result TestBrepBox(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef obj_ref;
    var rc = Rhino.Input.RhinoGet.GetOneObject("Select Brep", true, Rhino.DocObjects.ObjectType.Brep, out obj_ref);
    if (rc == Rhino.Commands.Result.Success)
    {
      var brep = obj_ref.Brep();
      if (brep != null)
      {
        Rhino.RhinoApp.WriteLine(IsBrepBox(brep) ? "Yes it is a box" : "No it is not a box");
      }
    }
    return rc;
  }
}
`,
    members: [
      ['Rhino.Geometry.Brep', 'bool IsSolid'],
      ['Rhino.Geometry.Surface', 'bool TryGetPlane(Plane plane,double tolerance)']
    ]
  },
  {
    name: 'Isbrepbox.py',
    code: `import Rhino

def IsBrepBox(brep):
    zero_tolerance = 1.0e-6 #or whatever
    rc = brep.IsSolid
    if rc: rc = brep.Faces.Count == 6

    N = []
    for i in range(6):
        if not rc: break
        rc, plane = brep.Faces[i].TryGetPlane(zero_tolerance)
        if rc:
            v = plane.ZAxis
            v.Unitize()
            N.append(v)
 
    for i in range(6):
        count = 0
        for j in range(6):
            if not rc: break
            dot = abs(N[i] * N[j])
            if dot<=zero_tolerance: continue
            if abs(dot-1.0)<=zero_tolerance:
              count += 1
            else:
              rc = False

    if rc:
        if 2!=count: rc = False
    return rc


if __name__=="__main__":
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select Brep", True, Rhino.DocObjects.ObjectType.Brep)
    if rc==Rhino.Commands.Result.Success:
        brep = objref.Brep()
        if brep:
            if IsBrepBox(brep): print "Yes it is a box"
            else: print "No it is not a box"
`,
    members: [
      ['Rhino.Geometry.Brep', 'bool IsSolid'],
      ['Rhino.Geometry.Surface', 'bool TryGetPlane(Plane plane,double tolerance)']
    ]
  },
  {
    name: 'Booleandifference.vb',
    code: `Imports System.Collections.Generic

Partial Class Examples
  Public Shared Function BooleanDifference(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rc As Rhino.Commands.Result
    Dim objrefs As Rhino.DocObjects.ObjRef() = Nothing
    rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select first set of polysurfaces", False, Rhino.DocObjects.ObjectType.PolysrfFilter, objrefs)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    If objrefs Is Nothing OrElse objrefs.Length < 1 Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim in_breps0 As New List(Of Rhino.Geometry.Brep)()
    For i As Integer = 0 To objrefs.Length - 1
      Dim brep As Rhino.Geometry.Brep = objrefs(i).Brep()
      If brep IsNot Nothing Then
        in_breps0.Add(brep)
      End If
    Next

    doc.Objects.UnselectAll()
    rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select second set of polysurfaces", False, Rhino.DocObjects.ObjectType.PolysrfFilter, objrefs)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    If objrefs Is Nothing OrElse objrefs.Length < 1 Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim in_breps1 As New List(Of Rhino.Geometry.Brep)()
    For i As Integer = 0 To objrefs.Length - 1
      Dim brep As Rhino.Geometry.Brep = objrefs(i).Brep()
      If brep IsNot Nothing Then
        in_breps1.Add(brep)
      End If
    Next

    Dim tolerance As Double = doc.ModelAbsoluteTolerance
    Dim breps As Rhino.Geometry.Brep() = Rhino.Geometry.Brep.CreateBooleanDifference(in_breps0, in_breps1, tolerance)
    If breps.Length < 1 Then
      Return Rhino.Commands.Result.[Nothing]
    End If
    For i As Integer = 0 To breps.Length - 1
      doc.Objects.AddBrep(breps(i))
    Next
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)'],
      ['Rhino.DocObjects.ObjRef', 'Brep Brep()'],
      ['Rhino.Input.RhinoGet', 'static Result GetMultipleObjects(string prompt,bool acceptNothing,ObjectType filter,ObjRef[] rhObjects)']
    ]
  },
  {
    name: 'Booleandifference.cs',
    code: `using System.Collections.Generic;
using Rhino.Commands;

partial class Examples
{
  public static Rhino.Commands.Result BooleanDifference(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef[] objrefs;
    Result rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select first set of polysurfaces",
                                                        false, Rhino.DocObjects.ObjectType.PolysrfFilter, out objrefs);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    if (objrefs == null || objrefs.Length < 1)
      return Rhino.Commands.Result.Failure;

    List<Rhino.Geometry.Brep> in_breps0 = new List<Rhino.Geometry.Brep>();
    for (int i = 0; i < objrefs.Length; i++)
    {
      Rhino.Geometry.Brep brep = objrefs[i].Brep();
      if (brep != null)
        in_breps0.Add(brep);
    }

    doc.Objects.UnselectAll();
    rc = Rhino.Input.RhinoGet.GetMultipleObjects("Select second set of polysurfaces",
      false, Rhino.DocObjects.ObjectType.PolysrfFilter, out objrefs);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    if (objrefs == null || objrefs.Length < 1)
      return Rhino.Commands.Result.Failure;

    List<Rhino.Geometry.Brep> in_breps1 = new List<Rhino.Geometry.Brep>();
    for (int i = 0; i < objrefs.Length; i++)
    {
      Rhino.Geometry.Brep brep = objrefs[i].Brep();
      if (brep != null)
        in_breps1.Add(brep);
    }

    double tolerance = doc.ModelAbsoluteTolerance;
    Rhino.Geometry.Brep[] breps = Rhino.Geometry.Brep.CreateBooleanDifference(in_breps0, in_breps1, tolerance);
    if (breps.Length < 1)
      return Rhino.Commands.Result.Nothing;
    for (int i = 0; i < breps.Length; i++)
      doc.Objects.AddBrep(breps[i]);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)'],
      ['Rhino.DocObjects.ObjRef', 'Brep Brep()'],
      ['Rhino.Input.RhinoGet', 'static Result GetMultipleObjects(string prompt,bool acceptNothing,ObjectType filter,ObjRef[] rhObjects)']
    ]
  },
  {
    name: 'Booleandifference.py',
    code: `import Rhino
import scriptcontext

def BooleanDifference():
    filter = Rhino.DocObjects.ObjectType.PolysrfFilter
    rc, objrefs = Rhino.Input.RhinoGet.GetMultipleObjects("Select first set of polysurfaces", False, filter)
    if rc != Rhino.Commands.Result.Success: return rc
    if not objrefs: return Rhino.Commands.Result.Failure

    in_breps0 = []
    for objref in objrefs:
        brep = objref.Brep()
        if brep: in_breps0.append(brep)

    scriptcontext.doc.Objects.UnselectAll()
    rc, objrefs = Rhino.Input.RhinoGet.GetMultipleObjects("Select second set of polysurfaces", False, filter)
    if rc != Rhino.Commands.Result.Success: return rc
    if not objrefs: return Rhino.Commands.Result.Failure

    in_breps1 = []
    for objref in objrefs:
        brep = objref.Brep()
        if brep: in_breps1.append(brep)

    tolerance = scriptcontext.doc.ModelAbsoluteTolerance
    breps = Rhino.Geometry.Brep.CreateBooleanDifference(in_breps0, in_breps1, tolerance)
    if not breps: return Rhino.Commands.Result.Nothing
    for brep in breps: scriptcontext.doc.Objects.AddBrep(brep)
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    BooleanDifference()`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)'],
      ['Rhino.Geometry.Brep', 'static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)'],
      ['Rhino.DocObjects.ObjRef', 'Brep Brep()'],
      ['Rhino.Input.RhinoGet', 'static Result GetMultipleObjects(string prompt,bool acceptNothing,ObjectType filter,ObjRef[] rhObjects)']
    ]
  },
  {
    name: 'Makerhinocontours.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Input
Imports Rhino.Input.Custom
Imports Rhino.Commands

Namespace examples_vb
  Public Class ContourCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbContour"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim filter = ObjectType.Surface Or ObjectType.PolysrfFilter Or ObjectType.Mesh
      Dim obj_refs As ObjRef() = Nothing
      Dim rc = RhinoGet.GetMultipleObjects("Select objects to contour", False, filter, obj_refs)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim gp = New GetPoint()
      gp.SetCommandPrompt("Contour plane base point")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim base_point = gp.Point()

      gp.DrawLineFromPoint(base_point, True)
      gp.SetCommandPrompt("Direction perpendicular to contour planes")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim end_point = gp.Point()

      If base_point.DistanceTo(end_point) < RhinoMath.ZeroTolerance Then
        Return Result.[Nothing]
      End If

      Dim distance As Double = 1.0
      rc = RhinoGet.GetNumber("Distance between contours", False, distance)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim interval = Math.Abs(distance)

      Dim curves As Curve() = Nothing
      For Each obj_ref As ObjRef In obj_refs
        Dim geometry = obj_ref.Geometry()
        If geometry Is Nothing Then
          Return Result.Failure
        End If

        If TypeOf geometry Is Brep Then
          curves = Brep.CreateContourCurves(TryCast(geometry, Brep), base_point, end_point, interval)
        Else
          curves = Mesh.CreateContourCurves(TryCast(geometry, Mesh), base_point, end_point, interval)
        End If

        For Each curve As Curve In curves
          Dim curve_object_id = doc.Objects.AddCurve(curve)
          doc.Objects.[Select](curve_object_id)
        Next
      Next

      If curves IsNot Nothing Then
        doc.Views.Redraw()
      End If
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Brep', 'static Curve[] CreateContourCurves(Brep brepToContour,Point3d contourStart,Point3d contourEnd,double interval)'],
      ['Rhino.Geometry.Mesh', 'static Curve[] CreateContourCurves(Mesh meshToContour,Point3d contourStart,Point3d contourEnd,double interval)']
    ]
  },
  {
    name: 'Makerhinocontours.cs',
    code: `using System;
using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Input;
using Rhino.Input.Custom;
using Rhino.Commands;

namespace examples_cs
{
  public class ContourCommand : Command
  {
    public override string EnglishName { get { return "csContour"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var filter = ObjectType.Surface | ObjectType.PolysrfFilter | ObjectType.Mesh;
      ObjRef[] obj_refs;
      var rc = RhinoGet.GetMultipleObjects("Select objects to contour", false, filter, out obj_refs);
      if (rc != Result.Success)
        return rc;

      var gp = new GetPoint();
      gp.SetCommandPrompt("Contour plane base point");
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var base_point = gp.Point();

      gp.DrawLineFromPoint(base_point, true);
      gp.SetCommandPrompt("Direction perpendicular to contour planes");
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var end_point = gp.Point();

      if (base_point.DistanceTo(end_point) < RhinoMath.ZeroTolerance)
        return Result.Nothing;

      double distance = 1.0;
      rc = RhinoGet.GetNumber("Distance between contours", false, ref distance);
      if (rc != Result.Success)
        return rc;

      var interval = Math.Abs(distance);

      Curve[] curves = null;
      foreach (var obj_ref in obj_refs)
      {
        var geometry = obj_ref.Geometry();
        if (geometry == null)
          return Result.Failure;

        if (geometry is Brep)
        {
          curves = Brep.CreateContourCurves(geometry as Brep, base_point, end_point, interval);
        }
        else
        {
          curves = Mesh.CreateContourCurves(geometry as Mesh, base_point, end_point, interval);
        }

        foreach (var curve in curves)
        {
          var curve_object_id = doc.Objects.AddCurve(curve);
          doc.Objects.Select(curve_object_id);
        }
      }

      if (curves != null)
        doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Brep', 'static Curve[] CreateContourCurves(Brep brepToContour,Point3d contourStart,Point3d contourEnd,double interval)'],
      ['Rhino.Geometry.Mesh', 'static Curve[] CreateContourCurves(Mesh meshToContour,Point3d contourStart,Point3d contourEnd,double interval)']
    ]
  },
  {
    name: 'Makerhinocontours.py',
    code: `from System import *
from Rhino import *
from Rhino.DocObjects import *
from Rhino.Geometry import *
from Rhino.Input import *
from Rhino.Input.Custom import *
from Rhino.Commands import *
from scriptcontext import doc

def RunCommand():
  filter = ObjectType.Surface | ObjectType.PolysrfFilter | ObjectType.Mesh
  rc, obj_refs = RhinoGet.GetMultipleObjects("Select objects to contour", False, filter)
  if rc <> Result.Success:
    return rc

  gp = GetPoint()
  gp.SetCommandPrompt("Contour plane base point")
  gp.Get()
  if gp.CommandResult() <> Result.Success:
    return gp.CommandResult()
  base_point = gp.Point()

  gp.DrawLineFromPoint(base_point, True)
  gp.SetCommandPrompt("Direction perpendicular to contour planes")
  gp.Get()
  if gp.CommandResult() <> Result.Success:
    return gp.CommandResult()
  end_point = gp.Point()

  if base_point.DistanceTo(end_point) < RhinoMath.ZeroTolerance:
    return Result.Nothing

  distance = 1.0
  rc, distance = RhinoGet.GetNumber("Distance between contours", False, distance)
  if rc <> Result.Success:
    return rc

  interval = Math.Abs(distance)

  for obj_ref in obj_refs:
    geometry = obj_ref.Geometry()
    if geometry == None:
      return Result.Failure

    if type(geometry) == Brep:
      curves = Brep.CreateContourCurves(geometry, base_point, end_point, interval)
    else:
      curves = Mesh.CreateContourCurves(geometry, base_point, end_point, interval)

    for curve in curves:
      curve_object_id = doc.Objects.AddCurve(curve)
      doc.Objects.Select(curve_object_id)

  if curves <> None:
    doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Brep', 'static Curve[] CreateContourCurves(Brep brepToContour,Point3d contourStart,Point3d contourEnd,double interval)'],
      ['Rhino.Geometry.Mesh', 'static Curve[] CreateContourCurves(Mesh meshToContour,Point3d contourStart,Point3d contourEnd,double interval)']
    ]
  },
  {
    name: 'Edgesrf.vb',
    code: `Imports System.Linq
Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class EdgeSrfCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbEdgeSrf"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim go = New GetObject()
      go.SetCommandPrompt("Select 2, 3, or 4 open curves")
      go.GeometryFilter = ObjectType.Curve
      go.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
      go.GetMultiple(2, 4)
      If go.CommandResult() <> Result.Success Then
        Return go.CommandResult()
      End If

      Dim curves = go.Objects().[Select](Function(o) o.Curve())

      Dim brep__1 = Brep.CreateEdgeSurface(curves)

      If brep__1 IsNot Nothing Then
        doc.Objects.AddBrep(brep__1)
        doc.Views.Redraw()
      End If

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateEdgeSurface(IEnumerable<Curve> curves)']
    ]
  },
  {
    name: 'Edgesrf.cs',
    code: `using System.Linq;
using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class EdgeSrfCommand : Command
  {
    public override string EnglishName { get { return "csEdgeSrf"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var go = new GetObject();
      go.SetCommandPrompt("Select 2, 3, or 4 open curves");
      go.GeometryFilter = ObjectType.Curve;
      go.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve;
      go.GetMultiple(2, 4);
      if (go.CommandResult() != Result.Success)
        return go.CommandResult();

      var curves = go.Objects().Select(o => o.Curve());

      var brep = Brep.CreateEdgeSurface(curves);

      if (brep != null)
      {
        doc.Objects.AddBrep(brep);
        doc.Views.Redraw();
      }

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateEdgeSurface(IEnumerable<Curve> curves)']
    ]
  },
  {
    name: 'Edgesrf.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.DocObjects import *
from Rhino.Geometry import *
from Rhino.Input.Custom import *
from scriptcontext import doc

def RunCommand():
  go = GetObject()
  go.SetCommandPrompt("Select 2, 3, or 4 open curves")
  go.GeometryFilter = ObjectType.Curve
  go.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
  go.GetMultiple(2, 4)
  if go.CommandResult() <> Result.Success:
    return go.CommandResult()

  curves = [o.Curve() for o in go.Objects()]

  brep = Brep.CreateEdgeSurface(curves)

  if brep <> None:
    doc.Objects.AddBrep(brep)
    doc.Views.Redraw()

  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateEdgeSurface(IEnumerable<Curve> curves)']
    ]
  },
  {
    name: 'Loft.vb',
    code: `Imports Rhino
Imports Rhino.Input.Custom
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports System.Collections.Generic
Imports Rhino.Geometry

Namespace examples_vb
  Public Class LoftCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbLoft"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Result
      ' select curves to loft
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select curves to loft")
      gs.GeometryFilter = ObjectType.Curve
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.GetMultiple(2, 0)
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If

      Dim curves = New List(Of Curve)()
      For Each obj As ObjRef In gs.Objects()
        curves.Add(obj.Curve())
      Next

      Dim breps = Rhino.Geometry.Brep.CreateFromLoft(curves, Point3d.Unset, Point3d.Unset, LoftType.Tight, False)
      For Each brep As Brep In breps
        doc.Objects.AddBrep(brep)
      Next

      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateFromLoft(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed)']
    ]
  },
  {
    name: 'Loft.cs',
    code: `using System.Linq;
using Rhino;
using Rhino.Input.Custom;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Geometry;

namespace examples_cs
{
  public class LoftCommand : Command
  {
    public override string EnglishName { get { return "csLoft"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // select curves to loft
      var gs = new GetObject();
      gs.SetCommandPrompt("select curves to loft");
      gs.GeometryFilter = ObjectType.Curve;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.GetMultiple(2, 0);
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();

      var curves = gs.Objects().Select(obj => obj.Curve()).ToList();

      var breps = Brep.CreateFromLoft(curves, Point3d.Unset, Point3d.Unset, LoftType.Tight, false);
      foreach (var brep in breps)
        doc.Objects.AddBrep(brep);

      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateFromLoft(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed)']
    ]
  },
  {
    name: 'Loft.py',
    code: `import rhinoscriptsyntax as rs

def RunCommand():
  crvids = rs.GetObjects(message="select curves to loft", filter=rs.filter.curve, minimum_count=2)
  if not crvids: return

  rs.AddLoftSrf(object_ids=crvids, loft_type = 3) #3 = tight

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep[] CreateFromLoft(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed)']
    ]
  },
  {
    name: 'Addtruncatedcone.vb',
    code: `Imports Rhino.Geometry

Partial Class Examples
  Public Shared Function AddTruncatedCone(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim bottom_pt As New Point3d(0, 0, 0)
    Const bottom_radius As Double = 2
    Dim bottom_circle As New Circle(bottom_pt, bottom_radius)

    Dim top_pt As New Point3d(0, 0, 10)
    Const top_radius As Double = 6
    Dim top_circle As New Circle(top_pt, top_radius)

    Dim shapeCurve As New LineCurve(bottom_circle.PointAt(0), top_circle.PointAt(0))
    Dim axis As New Line(bottom_circle.Center, top_circle.Center)
    Dim revsrf As RevSurface = RevSurface.Create(shapeCurve, axis)
    Dim tcone_brep As Brep = Brep.CreateFromRevSurface(revsrf, True, True)
    If doc.Objects.AddBrep(tcone_brep) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateFromRevSurface(RevSurface surface,bool capStart,bool capEnd)'],
      ['Rhino.Geometry.Circle', 'Circle(Point3d center,double radius)'],
      ['Rhino.Geometry.LineCurve', 'LineCurve(Point3d from,Point3d to)'],
      ['Rhino.Geometry.RevSurface', 'static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution)']
    ]
  },
  {
    name: 'Addtruncatedcone.cs',
    code: `using System;
using Rhino.Geometry;

partial class Examples
{
  public static Rhino.Commands.Result AddTruncatedCone(Rhino.RhinoDoc doc)
  {
    Point3d bottom_pt = new Point3d(0,0,0);
    const double bottom_radius = 2;
    Circle bottom_circle = new Circle(bottom_pt, bottom_radius);

    Point3d top_pt = new Point3d(0,0,10);
    const double top_radius = 6;
    Circle top_circle = new Circle(top_pt, top_radius);

    LineCurve shapeCurve = new LineCurve(bottom_circle.PointAt(0), top_circle.PointAt(0));
    Line axis = new Line(bottom_circle.Center, top_circle.Center);
    RevSurface revsrf = RevSurface.Create(shapeCurve, axis);
    Brep tcone_brep = Brep.CreateFromRevSurface(revsrf, true, true);
    if( doc.Objects.AddBrep(tcone_brep) != Guid.Empty )
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateFromRevSurface(RevSurface surface,bool capStart,bool capEnd)'],
      ['Rhino.Geometry.Circle', 'Circle(Point3d center,double radius)'],
      ['Rhino.Geometry.LineCurve', 'LineCurve(Point3d from,Point3d to)'],
      ['Rhino.Geometry.RevSurface', 'static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution)']
    ]
  },
  {
    name: 'Addtruncatedcone.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddTruncatedCone():
    bottom_pt = Rhino.Geometry.Point3d(0,0,0)
    bottom_radius = 2
    bottom_circle = Rhino.Geometry.Circle(bottom_pt, bottom_radius)

    top_pt = Rhino.Geometry.Point3d(0,0,10)
    top_radius = 6
    top_circle = Rhino.Geometry.Circle(top_pt, top_radius)

    shapeCurve = Rhino.Geometry.LineCurve(bottom_circle.PointAt(0), top_circle.PointAt(0))
    axis = Rhino.Geometry.Line(bottom_circle.Center, top_circle.Center)
    revsrf = Rhino.Geometry.RevSurface.Create(shapeCurve, axis)
    tcone_brep = Rhino.Geometry.Brep.CreateFromRevSurface(revsrf, True, True)

    if scriptcontext.doc.Objects.AddBrep(tcone_brep)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__=="__main__":
    AddTruncatedCone()
`,
    members: [
      ['Rhino.Geometry.Brep', 'static Brep CreateFromRevSurface(RevSurface surface,bool capStart,bool capEnd)'],
      ['Rhino.Geometry.Circle', 'Circle(Point3d center,double radius)'],
      ['Rhino.Geometry.LineCurve', 'LineCurve(Point3d from,Point3d to)'],
      ['Rhino.Geometry.RevSurface', 'static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution)']
    ]
  },
  {
    name: 'Dupborder.vb',
    code: `Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function DupBorder(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Const filter As ObjectType = Rhino.DocObjects.ObjectType.Surface Or Rhino.DocObjects.ObjectType.PolysrfFilter
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetOneObject("Select surface or polysurface", False, filter, objref)
    If rc <> Rhino.Commands.Result.Success OrElse objref Is Nothing Then
      Return rc
    End If

    Dim rhobj As Rhino.DocObjects.RhinoObject = objref.[Object]()
    Dim brep As Rhino.Geometry.Brep = objref.Brep()
    If rhobj Is Nothing OrElse brep Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    rhobj.[Select](False)
    Dim curves As Rhino.Geometry.Curve() = brep.DuplicateEdgeCurves(True)
    Dim tol As Double = doc.ModelAbsoluteTolerance * 2.1
    curves = Rhino.Geometry.Curve.JoinCurves(curves, tol)
    For i As Integer = 0 To curves.Length - 1
      Dim id As Guid = doc.Objects.AddCurve(curves(i))
      doc.Objects.[Select](id)
    Next
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Brep', 'Curve[] DuplicateEdgeCurves(bool nakedOnly)']
    ]
  },
  {
    name: 'Dupborder.cs',
    code: `using System;
using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result DupBorder(Rhino.RhinoDoc doc)
  {
    const ObjectType filter = Rhino.DocObjects.ObjectType.Surface | Rhino.DocObjects.ObjectType.PolysrfFilter;
    Rhino.DocObjects.ObjRef objref;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetOneObject("Select surface or polysurface", false, filter, out objref);
    if (rc != Rhino.Commands.Result.Success || objref == null)
      return rc;

    Rhino.DocObjects.RhinoObject rhobj = objref.Object();
    Rhino.Geometry.Brep brep = objref.Brep();
    if (rhobj == null || brep == null)
      return Rhino.Commands.Result.Failure;

    rhobj.Select(false);
    Rhino.Geometry.Curve[] curves = brep.DuplicateEdgeCurves(true);
    double tol = doc.ModelAbsoluteTolerance * 2.1;
    curves = Rhino.Geometry.Curve.JoinCurves(curves, tol);
    for (int i = 0; i < curves.Length; i++)
    {
      Guid id = doc.Objects.AddCurve(curves[i]);
      doc.Objects.Select(id);
    }
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Brep', 'Curve[] DuplicateEdgeCurves(bool nakedOnly)']
    ]
  },
  {
    name: 'Dupborder.py',
    code: `import Rhino
import scriptcontext

def DupBorder():
    filter = Rhino.DocObjects.ObjectType.Surface | Rhino.DocObjects.ObjectType.PolysrfFilter
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select surface or polysurface", False, filter)
    if rc != Rhino.Commands.Result.Success: return rc

    rhobj = objref.Object()
    brep = objref.Brep()
    if not rhobj or not brep: return Rhino.Commands.Result.Failure
    rhobj.Select(False)
    curves = brep.DuplicateEdgeCurves(True)
    tol = scriptcontext.doc.ModelAbsoluteTolerance * 2.1
    curves = Rhino.Geometry.Curve.JoinCurves(curves, tol)
    for curve in curves:
        id = scriptcontext.doc.Objects.AddCurve(curve)
        scriptcontext.doc.Objects.Select(id)
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    DupBorder()`,
    members: [
      ['Rhino.Geometry.Brep', 'Curve[] DuplicateEdgeCurves(bool nakedOnly)']
    ]
  },
  {
    name: 'Evnormal.vb',
    code: `Imports Rhino
Imports Rhino.Input.Custom
Imports Rhino.DocObjects
Imports Rhino.Commands

Namespace examples_vb
  Public Class NormalDirectionOfBrepFaceCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDetermineNormDirectionOfBrepFace"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' select a surface
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select surface")
      gs.GeometryFilter = ObjectType.Surface
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.[Get]()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If
      ' get the selected face
      Dim face = gs.[Object](0).Face()
      If face Is Nothing Then
        Return Result.Failure
      End If

      ' pick a point on the surface.  Constain
      ' picking to the face.
      Dim gp = New GetPoint()
      gp.SetCommandPrompt("select point on surface")
      gp.Constrain(face, False)
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If

      ' get the parameters of the point on the
      ' surface that is clesest to gp.Point()
      Dim u As Double, v As Double
      If face.ClosestPoint(gp.Point(), u, v) Then
        Dim direction = face.NormalAt(u, v)
        If face.OrientationIsReversed Then
          direction.Reverse()
        End If
        RhinoApp.WriteLine(String.Format("Surface normal at uv({0:f},{1:f}) = ({2:f},{3:f},{4:f})", u, v, direction.X, direction.Y, direction.Z))
      End If
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.BrepFace', 'bool OrientationIsReversed'],
      ['Rhino.Geometry.Surface', 'Vector3d NormalAt(double u,double v)']
    ]
  },
  {
    name: 'Evnormal.cs',
    code: `using Rhino;
using Rhino.Input.Custom;
using Rhino.DocObjects;
using Rhino.Commands;

namespace examples_cs
{
  public class NormalDirectionOfBrepFaceCommand : Command
  {
    public override string EnglishName { get { return "csDetermineNormalDirectionOfBrepFace"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // select a surface
      var gs = new GetObject();
      gs.SetCommandPrompt("select surface");
      gs.GeometryFilter = ObjectType.Surface;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();
      // get the selected face
      var face = gs.Object(0).Face();
      if (face == null)
        return Result.Failure;

      // pick a point on the surface.  Constain
      // picking to the face.
      var gp = new GetPoint();
      gp.SetCommandPrompt("select point on surface");
      gp.Constrain(face, false);
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();

      // get the parameters of the point on the
      // surface that is clesest to gp.Point()
      double u, v;
      if (face.ClosestPoint(gp.Point(), out u, out v))
      {
        var direction = face.NormalAt(u, v);
        if (face.OrientationIsReversed)
          direction.Reverse();
        RhinoApp.WriteLine(
          string.Format(
            "Surface normal at uv({0:f},{1:f}) = ({2:f},{3:f},{4:f})", 
            u, v, direction.X, direction.Y, direction.Z));
      }
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.BrepFace', 'bool OrientationIsReversed'],
      ['Rhino.Geometry.Surface', 'Vector3d NormalAt(double u,double v)']
    ]
  },
  {
    name: 'Evnormal.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import *
import Rhino
from Rhino.Commands import Result

def RunCommand():
  # select a surface
  gs = Rhino.Input.Custom.GetObject()
  gs.SetCommandPrompt("select surface")
  gs.GeometryFilter = Rhino.DocObjects.ObjectType.Surface
  gs.DisablePreSelect()
  gs.SubObjectSelect = False
  gs.Get()
  if gs.CommandResult() != Result.Success:
    return gs.CommandResult()

  # get the selected face
  face = gs.Object(0).Face()
  if face == None:
    return

  # pick a point on the surface.  Constain
  # picking to the face.
  gp = Rhino.Input.Custom.GetPoint()
  gp.SetCommandPrompt("select point on surface")
  gp.Constrain(face, False)
  gp.Get()
  if gp.CommandResult() != Result.Success:
    return gp.CommandResult()

  # get the parameters of the point on the
  # surface that is clesest to gp.Point()
  b, u, v = face.ClosestPoint(gp.Point())
  if b:
    dir = face.NormalAt(u, v)
    if face.OrientationIsReversed:
      dir.Reverse()
    print "Surface normal at uv({0:f},{1:f}) = ({2:f},{3:f},{4:f})".format(
        u, v, dir.X, dir.Y, dir.Z)

if __name__ == "__main__":
  RunCommand()
`,
    members: [
      ['Rhino.Geometry.BrepFace', 'bool OrientationIsReversed'],
      ['Rhino.Geometry.Surface', 'Vector3d NormalAt(double u,double v)']
    ]
  },
  {
    name: 'Tightboundingbox.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports System.Linq
Imports Rhino.Geometry
Imports Rhino.Input
Imports Rhino.DocObjects
Imports System.Collections.Generic

Namespace examples_vb
  Public Class TightBoundingBoxCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbTightBoundingBox"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select surface to split", True, ObjectType.Surface, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim surface = obj_ref.Surface()
      If surface Is Nothing Then
        Return Result.Failure
      End If

      obj_ref = Nothing
      rc = RhinoGet.GetOneObject("Select cutting curve", True, ObjectType.Curve, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim curve = obj_ref.Curve()
      If curve Is Nothing Then
        Return Result.Failure
      End If

      Dim brep_face = TryCast(surface, BrepFace)
      If brep_face Is Nothing Then
        Return Result.Failure
      End If

      Dim split_brep = brep_face.Split(New List(Of Curve)() From { _
        curve _
      }, doc.ModelAbsoluteTolerance)
      If split_brep Is Nothing Then
        RhinoApp.WriteLine("Unable to split surface.")
        Return Result.[Nothing]
      End If

      Dim meshes = Mesh.CreateFromBrep(split_brep)

      For Each mesh__1 As Mesh In meshes
        Dim bbox = mesh__1.GetBoundingBox(True)
        Select Case bbox.IsDegenerate(doc.ModelAbsoluteTolerance)
          Case 3, 2
            Return Result.Failure
            Exit Select
          Case 1
            ' rectangle
            ' box with 8 corners flattened to rectangle with 4 corners
            Dim rectangle_corners = bbox.GetCorners().Distinct().ToList()
            ' add 1st point as last to close the loop
            rectangle_corners.Add(rectangle_corners(0))
            doc.Objects.AddPolyline(rectangle_corners)
            doc.Views.Redraw()
            Exit Select
          Case 0
            ' box
            Dim brep_box = New Box(bbox).ToBrep()
            doc.Objects.AddBrep(brep_box)
            doc.Views.Redraw()
            Exit Select
        End Select
      Next

      Return Result.Success
    End Function
  End Class
End Namespace
`,
    members: [
      ['Rhino.Geometry.BrepFace', 'Brep Split(IEnumerable<Curve> curves,double tolerance)'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPolyline(IEnumerable<Point3d> points)']
    ]
  },
  {
    name: 'Tightboundingbox.cs',
    code: `using Rhino;
using Rhino.Commands;
using System.Linq;
using Rhino.Geometry;
using Rhino.Input;
using Rhino.DocObjects;
using System.Collections.Generic;

namespace examples_cs
{
  public class TightBoundingBoxCommand : Command
  {
    public override string EnglishName { get { return "csTightBoundingBox"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject(
        "Select surface to split", true, ObjectType.Surface, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var surface = obj_ref.Surface();
      if (surface == null)
        return Result.Failure;

      obj_ref = null;
      rc = RhinoGet.GetOneObject(
        "Select cutting curve", true, ObjectType.Curve, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var curve = obj_ref.Curve();
      if (curve == null)
        return Result.Failure;

      var brep_face = surface as BrepFace;
      if (brep_face == null)
        return Result.Failure;

      var split_brep = brep_face.Split(
        new List<Curve> {curve}, doc.ModelAbsoluteTolerance);
      if (split_brep == null)
      {
        RhinoApp.WriteLine("Unable to split surface.");
        return Result.Nothing;
      }

      var meshes = Mesh.CreateFromBrep(split_brep);

      foreach (var mesh in meshes)
      {
        var bbox = mesh.GetBoundingBox(true);
        switch (bbox.IsDegenerate(doc.ModelAbsoluteTolerance))
        {
          case 3:
          case 2:
            return Result.Failure;
          case 1:
            // rectangle
            // box with 8 corners flattened to rectangle with 4 corners
            var rectangle_corners = bbox.GetCorners().Distinct().ToList();
            // add 1st point as last to close the loop
            rectangle_corners.Add(rectangle_corners[0]);
            doc.Objects.AddPolyline(rectangle_corners);
            doc.Views.Redraw();
            break;
          case 0: 
            // box
            var brep_box = new Box(bbox).ToBrep();
            doc.Objects.AddBrep(brep_box);
            doc.Views.Redraw();
            break;
        }
      }

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.BrepFace', 'Brep Split(IEnumerable<Curve> curves,double tolerance)'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPolyline(IEnumerable<Point3d> points)']
    ]
  },
  {
    name: 'Tightboundingbox.py',
    code: `from scriptcontext import doc
import rhinoscriptsyntax as rs
from Rhino.Geometry import *
from Rhino.Input import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from System.Collections.Generic import *

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject(
    "Select surface to split", True, ObjectType.Surface)
  if rc != Result.Success:
    return rc
  brep_face = obj_ref.Surface()
  if brep_face == None:
    return Result.Failure

  rc, obj_ref = RhinoGet.GetOneObject(
    "Select cutting curve", True, ObjectType.Curve)
  if rc != Result.Success:
    return rc
  curve = obj_ref.Curve()
  if curve == None:
    return Result.Failure

  curves = List[Curve]([curve])
  split_brep = brep_face.Split(
    curves, doc.ModelAbsoluteTolerance)

  if split_brep == None:
    RhinoApp.WriteLine("Unable to split surface.")
    return Result.Nothing

  meshes = Mesh.CreateFromBrep(split_brep)
  print type(meshes)
  for mesh in meshes:
    bbox = mesh.GetBoundingBox(True)
    bbox_type = bbox.IsDegenerate(doc.ModelAbsoluteTolerance)
    if bbox_type == 1: # rectangle
        # box with 8 corners flattened to rectangle with 4 corners
        box_corners = bbox.GetCorners()
        rectangle_corners = []
        for corner_point in box_corners:
          if corner_point not in rectangle_corners:
              rectangle_corners.append(corner_point)
        # add 1st point as last to close the loop
        rectangle_corners.append(rectangle_corners[0])
        doc.Objects.AddPolyline(rectangle_corners)
        doc.Views.Redraw()
    elif bbox_type == 0: # box
        brep_box = Box(bbox).ToBrep()
        doc.Objects.AddBrep(brep_box)
        doc.Views.Redraw()
    else: # bbox invalid, point, or line
      return Result.Failure

  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.BrepFace', 'Brep Split(IEnumerable<Curve> curves,double tolerance)'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPolyline(IEnumerable<Point3d> points)']
    ]
  },
  {
    name: 'Addcircle.vb',
    code: `Partial Class Examples
  Public Shared Function AddCircle(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim center As New Rhino.Geometry.Point3d(0, 0, 0)
    Const radius As Double = 10.0
    Dim c As New Rhino.Geometry.Circle(center, radius)
    If doc.Objects.AddCircle(c) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Circle', 'Circle(Plane plane,double radius)'],
      ['Rhino.Geometry.Point3d', 'Point3d(double x,double y,double z)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'void Redraw()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCircle(Circle circle)']
    ]
  },
  {
    name: 'Addcircle.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddCircle(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Point3d center = new Rhino.Geometry.Point3d(0, 0, 0);
    const double radius = 10.0;
    Rhino.Geometry.Circle c = new Rhino.Geometry.Circle(center, radius);
    if (doc.Objects.AddCircle(c) != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Circle', 'Circle(Plane plane,double radius)'],
      ['Rhino.Geometry.Point3d', 'Point3d(double x,double y,double z)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'void Redraw()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCircle(Circle circle)']
    ]
  },
  {
    name: 'Addcircle.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddCircle():
    center = Rhino.Geometry.Point3d(0, 0, 0)
    radius = 10.0
    c = Rhino.Geometry.Circle(center, radius)
    if scriptcontext.doc.Objects.AddCircle(c)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    AddCircle()
`,
    members: [
      ['Rhino.Geometry.Circle', 'Circle(Plane plane,double radius)'],
      ['Rhino.Geometry.Point3d', 'Point3d(double x,double y,double z)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'void Redraw()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCircle(Circle circle)']
    ]
  },
  {
    name: 'Filletcurves.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.Input
Imports Rhino.DocObjects
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class FilletCurvesCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbFilletCurves"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gc1 = New GetObject()
      gc1.DisablePreSelect()
      gc1.SetCommandPrompt("Select first curve to fillet (close to the end you want to fillet)")
      gc1.GeometryFilter = ObjectType.Curve
      gc1.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
      gc1.[Get]()
      If gc1.CommandResult() <> Result.Success Then
        Return gc1.CommandResult()
      End If
      Dim curve1_obj_ref = gc1.[Object](0)
      Dim curve1 = curve1_obj_ref.Curve()
      If curve1 Is Nothing Then
        Return Result.Failure
      End If
      Dim curve1_point_near_end = curve1_obj_ref.SelectionPoint()
      If curve1_point_near_end = Point3d.Unset Then
        Return Result.Failure
      End If

      Dim gc2 = New GetObject()
      gc2.DisablePreSelect()
      gc2.SetCommandPrompt("Select second curve to fillet (close to the end you want to fillet)")
      gc2.GeometryFilter = ObjectType.Curve
      gc2.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
      gc2.[Get]()
      If gc2.CommandResult() <> Result.Success Then
        Return gc2.CommandResult()
      End If
      Dim curve2_obj_ref = gc2.[Object](0)
      Dim curve2 = curve2_obj_ref.Curve()
      If curve2 Is Nothing Then
        Return Result.Failure
      End If
      Dim curve2_point_near_end = curve2_obj_ref.SelectionPoint()
      If curve2_point_near_end = Point3d.Unset Then
        Return Result.Failure
      End If

      Dim radius As Double = 0
      Dim rc = RhinoGet.GetNumber("fillet radius", False, radius)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim fillet_curve = Curve.CreateFilletCurves(curve1, curve1_point_near_end, curve2, curve2_point_near_end, radius, True, _
        True, True, doc.ModelAbsoluteTolerance, doc.ModelAngleToleranceDegrees)
      If fillet_curve Is Nothing OrElse fillet_curve.Length <> 1 Then
        Return Result.Failure
      End If

      doc.Objects.AddCurve(fillet_curve(0))
      doc.Views.Redraw()
      Return rc
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] CreateFilletCurves(Curve curve0,Point3d point0,Curve curve1,Point3d point1,double radius,bool join,bool trim,bool arcExtension,double tolerance,double angleTolerance)']
    ]
  },
  {
    name: 'Filletcurves.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Geometry;
using Rhino.Input;
using Rhino.DocObjects;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class FilletCurvesCommand : Command
  {
    public override string EnglishName { get { return "csFilletCurves"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gc1 = new GetObject();
      gc1.DisablePreSelect();
      gc1.SetCommandPrompt("Select first curve to fillet (close to the end you want to fillet)");
      gc1.GeometryFilter = ObjectType.Curve;
      gc1.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve;
      gc1.Get();
      if (gc1.CommandResult() != Result.Success)
        return gc1.CommandResult();
      var curve1_obj_ref = gc1.Object(0);
      var curve1 = curve1_obj_ref.Curve();
      if (curve1 == null) return Result.Failure;
      var curve1_point_near_end = curve1_obj_ref.SelectionPoint();
      if (curve1_point_near_end == Point3d.Unset)
        return Result.Failure;

      var gc2 = new GetObject();
      gc2.DisablePreSelect();
      gc2.SetCommandPrompt("Select second curve to fillet (close to the end you want to fillet)");
      gc2.GeometryFilter = ObjectType.Curve;
      gc2.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve;
      gc2.Get();
      if (gc2.CommandResult() != Result.Success)
        return gc2.CommandResult();
      var curve2_obj_ref = gc2.Object(0);
      var curve2 = curve2_obj_ref.Curve();
      if (curve2 == null) return Result.Failure;
      var curve2_point_near_end = curve2_obj_ref.SelectionPoint();
      if (curve2_point_near_end == Point3d.Unset)
        return Result.Failure;

      double radius = 0;
      var rc = RhinoGet.GetNumber("fillet radius", false, ref radius);
      if (rc != Result.Success) return rc;

      var join = false;
      var trim = true;
      var arc_extension = true;
      var fillet_curves = Curve.CreateFilletCurves(curve1, curve1_point_near_end, curve2, curve2_point_near_end, radius,
        join, trim, arc_extension, doc.ModelAbsoluteTolerance, doc.ModelAngleToleranceDegrees);
      if (fillet_curves == null /*|| fillet_curves.Length != 3*/)
        return Result.Failure;

      foreach(var fillet_curve in fillet_curves)
        doc.Objects.AddCurve(fillet_curve);
      doc.Views.Redraw();
      return rc;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] CreateFilletCurves(Curve curve0,Point3d point0,Curve curve1,Point3d point1,double radius,bool join,bool trim,bool arcExtension,double tolerance,double angleTolerance)']
    ]
  },
  {
    name: 'Filletcurves.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.Geometry import *
from Rhino.Input import *
from Rhino.DocObjects import *
from Rhino.Input.Custom import *
from scriptcontext import doc

def RunCommand():
  gc1 = GetObject()
  gc1.DisablePreSelect()
  gc1.SetCommandPrompt("Select first curve to fillet (close to the end you want to fillet)")
  gc1.GeometryFilter = ObjectType.Curve
  gc1.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
  gc1.Get()
  if gc1.CommandResult() != Result.Success:
    return gc1.CommandResult()
  curve1_obj_ref = gc1.Object(0)
  curve1 = curve1_obj_ref.Curve()
  if curve1 == None: return Result.Failure
  curve1_point_near_end = curve1_obj_ref.SelectionPoint()
  if curve1_point_near_end == Point3d.Unset:
    return Result.Failure

  gc2 = GetObject()
  gc2.DisablePreSelect()
  gc2.SetCommandPrompt("Select second curve to fillet (close to the end you want to fillet)")
  gc2.GeometryFilter = ObjectType.Curve
  gc2.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
  gc2.Get()
  if gc2.CommandResult() != Result.Success:
    return gc2.CommandResult()
  curve2_obj_ref = gc2.Object(0)
  curve2 = curve2_obj_ref.Curve()
  if curve2 == None: return Result.Failure
  curve2_point_near_end = curve2_obj_ref.SelectionPoint()
  if curve2_point_near_end == Point3d.Unset:
    return Result.Failure

  radius = 0.0
  rc, radius = RhinoGet.GetNumber("fillet radius", False, radius)
  if rc != Result.Success: return rc

  fillet_curve = Curve.CreateFilletCurves(curve1, curve1_point_near_end, curve2, curve2_point_near_end, radius,
    True, True, True, doc.ModelAbsoluteTolerance, doc.ModelAngleToleranceDegrees)
  if fillet_curve == None or fillet_curve.Length != 1:
    return Result.Failure

  doc.Objects.AddCurve(fillet_curve[0])
  doc.Views.Redraw()
  return rc

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] CreateFilletCurves(Curve curve0,Point3d point0,Curve curve1,Point3d point1,double radius,bool join,bool trim,bool arcExtension,double tolerance,double angleTolerance)']
    ]
  },
  {
    name: 'Crvdeviation.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports System.Drawing
Imports Rhino.Input

Namespace examples_vb
  Class DeviationConduit
    Inherits Rhino.Display.DisplayConduit
    Private ReadOnly _curveA As Curve
    Private ReadOnly _curveB As Curve
    Private ReadOnly _minDistPointA As Point3d
    Private ReadOnly _minDistPointB As Point3d
    Private ReadOnly _maxDistPointA As Point3d
    Private ReadOnly _maxDistPointB As Point3d

    Public Sub New(curveA As Curve, curveB As Curve, minDistPointA As Point3d, minDistPointB As Point3d, maxDistPointA As Point3d, maxDistPointB As Point3d)
      _curveA = curveA
      _curveB = curveB
      _minDistPointA = minDistPointA
      _minDistPointB = minDistPointB
      _maxDistPointA = maxDistPointA
      _maxDistPointB = maxDistPointB
    End Sub

    Protected Overrides Sub DrawForeground(e As Rhino.Display.DrawEventArgs)
      e.Display.DrawCurve(_curveA, Color.Red)
      e.Display.DrawCurve(_curveB, Color.Red)

      e.Display.DrawPoint(_minDistPointA, Color.LawnGreen)
      e.Display.DrawPoint(_minDistPointB, Color.LawnGreen)
      e.Display.DrawLine(New Line(_minDistPointA, _minDistPointB), Color.LawnGreen)
      e.Display.DrawPoint(_maxDistPointA, Color.Red)
      e.Display.DrawPoint(_maxDistPointB, Color.Red)
      e.Display.DrawLine(New Line(_maxDistPointA, _maxDistPointB), Color.Red)
    End Sub
  End Class


  Public Class CurveDeviationCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCurveDeviation"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      doc.Objects.UnselectAll()

      Dim objRef1 As ObjRef = Nothing
      Dim rc1 = RhinoGet.GetOneObject("first curve", True, ObjectType.Curve, objRef1)
      If rc1 <> Result.Success Then
        Return rc1
      End If
      Dim curveA As Curve = Nothing
      If objRef1 IsNot Nothing Then
        curveA = objRef1.Curve()
      End If
      If curveA Is Nothing Then
        Return Result.Failure
      End If

      ' Since you already selected a curve if you don't unselect it
      ' the next GetOneObject won't stop as it considers that curve 
      ' input, i.e., curveA and curveB will point to the same curve.
      ' Another option would be to use an instance of Rhino.Input.Custom.GetObject
      ' instead of Rhino.Input.RhinoGet as GetObject has a DisablePreSelect() method.
      doc.Objects.UnselectAll()

      Dim objRef2 As ObjRef = Nothing
      Dim rc2 = RhinoGet.GetOneObject("second curve", True, ObjectType.Curve, objRef2)
      If rc2 <> Result.Success Then
        Return rc2
      End If
      Dim curveB As Curve = Nothing
      If objRef2 IsNot Nothing Then
        curveB = objRef2.Curve()
      End If
      If curveB Is Nothing Then
        Return Result.Failure
      End If

      Dim tolerance = doc.ModelAbsoluteTolerance

      Dim maxDistance As Double
      Dim maxDistanceParameterA As Double
      Dim maxDistanceParameterB As Double
      Dim minDistance As Double
      Dim minDistanceParameterA As Double
      Dim minDistanceParameterB As Double

      Dim conduit As DeviationConduit
      If Not Curve.GetDistancesBetweenCurves(curveA, curveB, tolerance, maxDistance, maxDistanceParameterA, maxDistanceParameterB, _
        minDistance, minDistanceParameterA, minDistanceParameterB) Then
        RhinoApp.WriteLine("Unable to find overlap intervals.")
        Return Result.Success
      Else
        If minDistance <= RhinoMath.ZeroTolerance Then
          minDistance = 0.0
        End If
        Dim maxDistPtA = curveA.PointAt(maxDistanceParameterA)
        Dim maxDistPtB = curveB.PointAt(maxDistanceParameterB)
        Dim minDistPtA = curveA.PointAt(minDistanceParameterA)
        Dim minDistPtB = curveB.PointAt(minDistanceParameterB)

        conduit = New DeviationConduit(curveA, curveB, minDistPtA, minDistPtB, maxDistPtA, maxDistPtB)
        conduit.Enabled = True

        doc.Views.Redraw()
        RhinoApp.WriteLine("Minimum deviation= {0}   pointA= {1}, pointB= {2}", minDistance, minDistPtA, minDistPtB)
        RhinoApp.WriteLine("Maximum deviation= {0}   pointA= {1}, pointB= {2}", maxDistance, maxDistPtA, maxDistPtB)
      End If

      Dim str As String = ""
      RhinoGet.GetString("Press Enter when done", True, str)
      conduit.Enabled = False

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'static bool GetDistancesBetweenCurves(Curve curveA,Curve curveB,double tolerance,double maxDistance,double maxDistanceParameterA,double maxDistanceParameterB,double minDistance,double minDistanceParameterA,double minDistanceParameterB)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int UnselectAll()']
    ]
  },
  {
    name: 'Crvdeviation.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;
using Rhino.Geometry;
using System.Drawing;
using Rhino.Input;

namespace examples_cs
{
  class DeviationConduit : Rhino.Display.DisplayConduit
  {
    private readonly Curve m_curve_a;
    private readonly Curve m_curve_b;
    private readonly Point3d m_min_dist_point_a ;
    private readonly Point3d m_min_dist_point_b ;
    private readonly Point3d m_max_dist_point_a ;
    private readonly Point3d m_max_dist_point_b ;

    public DeviationConduit(Curve curveA, Curve curveB, Point3d minDistPointA, Point3d minDistPointB, Point3d maxDistPointA, Point3d maxDistPointB)
    {
      m_curve_a = curveA;
      m_curve_b = curveB;
      m_min_dist_point_a = minDistPointA;
      m_min_dist_point_b = minDistPointB;
      m_max_dist_point_a = maxDistPointA;
      m_max_dist_point_b = maxDistPointB;
    }

    protected override void DrawForeground(Rhino.Display.DrawEventArgs e)
    {
      e.Display.DrawCurve(m_curve_a, Color.Red);
      e.Display.DrawCurve(m_curve_b, Color.Red);

      e.Display.DrawPoint(m_min_dist_point_a, Color.LawnGreen);
      e.Display.DrawPoint(m_min_dist_point_b, Color.LawnGreen);
      e.Display.DrawLine(new Line(m_min_dist_point_a, m_min_dist_point_b), Color.LawnGreen);
      e.Display.DrawPoint(m_max_dist_point_a, Color.Red);
      e.Display.DrawPoint(m_max_dist_point_b, Color.Red);
      e.Display.DrawLine(new Line(m_max_dist_point_a, m_max_dist_point_b), Color.Red);
    }
  }


  public class CurveDeviationCommand : Command
  {
    public override string EnglishName { get { return "csCurveDeviation"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      doc.Objects.UnselectAll();

      ObjRef obj_ref1;
      var rc1 = RhinoGet.GetOneObject("first curve", true, ObjectType.Curve, out obj_ref1);
      if (rc1 != Result.Success)
        return rc1;
      Curve curve_a = null;
      if (obj_ref1 != null)
        curve_a = obj_ref1.Curve();
      if (curve_a == null)
        return Result.Failure;

      // Since you already selected a curve if you don't unselect it
      // the next GetOneObject won't stop as it considers that curve 
      // input, i.e., curveA and curveB will point to the same curve.
      // Another option would be to use an instance of Rhino.Input.Custom.GetObject
      // instead of Rhino.Input.RhinoGet as GetObject has a DisablePreSelect() method.
      doc.Objects.UnselectAll();

      ObjRef obj_ref2;
      var rc2 = RhinoGet.GetOneObject("second curve", true, ObjectType.Curve, out obj_ref2);
      if (rc2 != Result.Success)
        return rc2;
      Curve curve_b = null;
      if (obj_ref2 != null)
        curve_b = obj_ref2.Curve();
      if (curve_b == null)
        return Result.Failure;

      var tolerance = doc.ModelAbsoluteTolerance;

      double max_distance;
      double max_distance_parameter_a;
      double max_distance_parameter_b;
      double min_distance;
      double min_distance_parameter_a;
      double min_distance_parameter_b;

      DeviationConduit conduit;
      if (!Curve.GetDistancesBetweenCurves(curve_a, curve_b, tolerance, out max_distance, 
                out max_distance_parameter_a, out max_distance_parameter_b,
                out min_distance, out min_distance_parameter_a, out min_distance_parameter_b))
      {
        RhinoApp.WriteLine("Unable to find overlap intervals.");
        return Result.Success;
      }
      else
      {
        if (min_distance <= RhinoMath.ZeroTolerance)
          min_distance = 0.0;
        var max_dist_pt_a = curve_a.PointAt(max_distance_parameter_a);
        var max_dist_pt_b = curve_b.PointAt(max_distance_parameter_b);
        var min_dist_pt_a = curve_a.PointAt(min_distance_parameter_a);
        var min_dist_pt_b = curve_b.PointAt(min_distance_parameter_b);

        conduit = new DeviationConduit(curve_a, curve_b, min_dist_pt_a, min_dist_pt_b, max_dist_pt_a, max_dist_pt_b) {Enabled = true};
        doc.Views.Redraw();

        RhinoApp.WriteLine("Minimum deviation = {0}   pointA({1}), pointB({2})", min_distance, min_dist_pt_a, min_dist_pt_b);
        RhinoApp.WriteLine("Maximum deviation = {0}   pointA({1}), pointB({2})", max_distance, max_dist_pt_a, max_dist_pt_b);
      }

      var str = "";
      RhinoGet.GetString("Press Enter when done", true, ref str);
      conduit.Enabled = false;

      return Result.Success;
    }
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'static bool GetDistancesBetweenCurves(Curve curveA,Curve curveB,double tolerance,double maxDistance,double maxDistanceParameterA,double maxDistanceParameterB,double minDistance,double minDistanceParameterA,double minDistanceParameterB)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int UnselectAll()']
    ]
  },
  {
    name: 'Crvdeviation.py',
    code: `import rhinoscriptsyntax as rs
import scriptcontext
import Rhino

def RunCommand():
  crvA = rs.GetCurveObject("first curve")[0]
  crvA = rs.coercecurve(crvA)
  crvB = rs.GetCurveObject("second curve")[0]
  crvB = rs.coercecurve(crvB)
  if crvA == None or crvB == None:
      return Rhino.Commands.Result.Failure
      
  maxa, maxb, maxd, mina, minb, mind = rs.CurveDeviation(crvA, crvB)
  
  if mind <= Rhino.RhinoMath.ZeroTolerance:
      mind = 0.0;
  maxDistPtA = crvA.PointAt(maxa)
  maxDistPtB = crvB.PointAt(maxb)
  minDistPtA = crvA.PointAt(mina)
  minDistPtB = crvB.PointAt(minb)

  print "Minimum deviation = {0}   pointA({1}, {2}, {3}), pointB({4}, {5}, {6})".format(
    mind, minDistPtA.X, minDistPtA.Y, minDistPtA.Z, minDistPtB.X, minDistPtB.Y, minDistPtB.Z)
  print "Maximum deviation = {0}   pointA({1}, {2}, {3}), pointB({4}, {5}, {6})".format(
    maxd, maxDistPtA.X, maxDistPtA.Y, maxDistPtA.Z, maxDistPtB.X, maxDistPtB.Y, maxDistPtB.Z)

if __name__=="__main__":
  RunCommand()
`,
    members: [
      ['Rhino.Geometry.Curve', 'static bool GetDistancesBetweenCurves(Curve curveA,Curve curveB,double tolerance,double maxDistance,double maxDistanceParameterA,double maxDistanceParameterB,double minDistance,double minDistanceParameterA,double minDistanceParameterB)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int UnselectAll()']
    ]
  },
  {
    name: 'Dividebylength.vb',
    code: `Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function DivideByLengthPoints(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Const filter As ObjectType = Rhino.DocObjects.ObjectType.Curve
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetOneObject("Select curve to divide", False, filter, objref)
    If rc <> Rhino.Commands.Result.Success OrElse objref Is Nothing Then
      Return rc
    End If

    Dim crv As Rhino.Geometry.Curve = objref.Curve()
    If crv Is Nothing OrElse crv.IsShort(Rhino.RhinoMath.ZeroTolerance) Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim crv_length As Double = crv.GetLength()
    Dim s As String = String.Format("Curve length is {0:f3}. Segment length", crv_length)

    Dim seg_length As Double = crv_length / 2.0
    rc = Rhino.Input.RhinoGet.GetNumber(s, False, seg_length, 0, crv_length)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim points As Rhino.Geometry.Point3d() = Nothing
    crv.DivideByLength(seg_length, True, points)
    If points Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    For Each point As Rhino.Geometry.Point3d In points
      doc.Objects.AddPoint(point)
    Next

    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'bool IsShort(double tolerance)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.RhinoGet', 'static Result GetOneObject(string prompt,bool acceptNothing,ObjectType filter,ObjRef rhObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3d point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3f point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Select(Guid objectId)']
    ]
  },
  {
    name: 'Dividebylength.cs',
    code: `using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result DivideByLengthPoints(Rhino.RhinoDoc doc)
  {
    const ObjectType filter = Rhino.DocObjects.ObjectType.Curve; 
    Rhino.DocObjects.ObjRef objref;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetOneObject("Select curve to divide", false, filter, out objref);
    if (rc != Rhino.Commands.Result.Success || objref == null)
      return rc;

    Rhino.Geometry.Curve crv = objref.Curve();
    if (crv == null || crv.IsShort(Rhino.RhinoMath.ZeroTolerance))
      return Rhino.Commands.Result.Failure;

    double crv_length = crv.GetLength();
    string s = string.Format("Curve length is {0:f3}. Segment length", crv_length);

    double seg_length = crv_length / 2.0;
    rc = Rhino.Input.RhinoGet.GetNumber(s, false, ref seg_length, 0, crv_length);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    Rhino.Geometry.Point3d[] points;
    crv.DivideByLength(seg_length, true, out points);
    if (points == null)
      return Rhino.Commands.Result.Failure;

    foreach (Rhino.Geometry.Point3d point in points)
      doc.Objects.AddPoint(point);

    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'bool IsShort(double tolerance)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.RhinoGet', 'static Result GetOneObject(string prompt,bool acceptNothing,ObjectType filter,ObjRef rhObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3d point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3f point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Select(Guid objectId)']
    ]
  },
  {
    name: 'Dividebylength.py',
    code: `import Rhino
import scriptcontext

def DivideByLengthPoints():
    filter = Rhino.DocObjects.ObjectType.Curve
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select curve to divide", False, filter)
    if not objref or rc!=Rhino.Commands.Result.Success: return rc
    
    crv = objref.Curve()
    if not crv or crv.IsShort(Rhino.RhinoMath.ZeroTolerance):
        return Rhino.Commands.Result.Failure
    
    crv_length = crv.GetLength()
    s = "Curve length is {0:.3f}. Segment length".format(crv_length)
    seg_length = crv_length / 2.0
    rc, length = Rhino.Input.RhinoGet.GetNumber(s, False, seg_length, 0, crv_length)
    if rc!=Rhino.Commands.Result.Success: return rc
    t_vals = crv.DivideByLength(length, True)
    if not t_vals:
        return Rhino.Commands.Result.Failure
    
    [scriptcontext.doc.Objects.AddPoint(crv.PointAt(t)) for t in t_vals]
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    DivideByLengthPoints()
`,
    members: [
      ['Rhino.Geometry.Curve', 'static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'double[] DivideByLength(double segmentLength,bool includeEnds,Point3d[] points)'],
      ['Rhino.Geometry.Curve', 'bool IsShort(double tolerance)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber)'],
      ['Rhino.Input.RhinoGet', 'static Result GetNumber(string prompt,bool acceptNothing,double outputNumber,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.RhinoGet', 'static Result GetOneObject(string prompt,bool acceptNothing,ObjectType filter,ObjRef rhObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3d point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddPoint(Point3f point)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Select(Guid objectId)']
    ]
  },
  {
    name: 'Addradialdimension.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.Input

Namespace examples_vb
  Public Class AddRadialDimensionCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbAddRadialDimension"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select curve for radius dimension", True, ObjectType.Curve, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim curve_parameter As Double
      Dim curve = obj_ref.CurveParameter(curve_parameter)
      If curve Is Nothing Then
        Return Result.Failure
      End If

      If curve.IsLinear() OrElse curve.IsPolyline() Then
        RhinoApp.WriteLine("Curve must be non-linear.")
        Return Result.[Nothing]
      End If

      ' in this example just deal with planar curves
      If Not curve.IsPlanar() Then
        RhinoApp.WriteLine("Curve must be planar.")
        Return Result.[Nothing]
      End If

      Dim point_on_curve = curve.PointAt(curve_parameter)
      Dim curvature_vector = curve.CurvatureAt(curve_parameter)
      Dim len = curvature_vector.Length
      If len < RhinoMath.SqrtEpsilon Then
        RhinoApp.WriteLine("Curve is almost linear and therefore has no curvature.")
        Return Result.[Nothing]
      End If

      Dim center = point_on_curve + (curvature_vector / (len * len))
      Dim plane As Plane
      curve.TryGetPlane(plane)
      Dim radial_dimension = New RadialDimension(center, point_on_curve, plane.XAxis, plane.Normal, 5.0)
      doc.Objects.AddRadialDimension(radial_dimension)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'Vector3d CurvatureAt(double t)'],
      ['Rhino.Geometry.Curve', 'bool IsLinear()'],
      ['Rhino.Geometry.Curve', 'bool IsPlanar()'],
      ['Rhino.Geometry.Curve', 'bool IsPolyline()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAt(double t)'],
      ['Rhino.DocObjects.ObjRef', 'Curve CurveParameter(double parameter)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddRadialDimension(RadialDimension dimension)']
    ]
  },
  {
    name: 'Addradialdimension.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Geometry;
using Rhino.Input;

namespace examples_cs
{
  public class AddRadialDimensionCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csAddRadialDimension"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select curve for radius dimension", 
        true, ObjectType.Curve, out obj_ref);
      if (rc != Result.Success)
        return rc;
      double curve_parameter;
      var curve = obj_ref.CurveParameter(out curve_parameter);
      if (curve == null)
        return Result.Failure;

      if (curve.IsLinear() || curve.IsPolyline())
      {
        RhinoApp.WriteLine("Curve must be non-linear.");
        return Result.Nothing;
      }

      // in this example just deal with planar curves
      if (!curve.IsPlanar())
      {
        RhinoApp.WriteLine("Curve must be planar.");
        return Result.Nothing;
      }

      var point_on_curve = curve.PointAt(curve_parameter);
      var curvature_vector = curve.CurvatureAt(curve_parameter);
      var len = curvature_vector.Length;
      if (len < RhinoMath.SqrtEpsilon)
      {
        RhinoApp.WriteLine("Curve is almost linear and therefore has no curvature.");
        return Result.Nothing;
      }

      var center = point_on_curve + (curvature_vector/(len*len));
      Plane plane;
      curve.TryGetPlane(out plane);
      var radial_dimension = 
        new RadialDimension(center, point_on_curve, plane.XAxis, plane.Normal, 5.0);
      doc.Objects.AddRadialDimension(radial_dimension);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Curve', 'Vector3d CurvatureAt(double t)'],
      ['Rhino.Geometry.Curve', 'bool IsLinear()'],
      ['Rhino.Geometry.Curve', 'bool IsPlanar()'],
      ['Rhino.Geometry.Curve', 'bool IsPolyline()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAt(double t)'],
      ['Rhino.DocObjects.ObjRef', 'Curve CurveParameter(double parameter)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddRadialDimension(RadialDimension dimension)']
    ]
  },
  {
    name: 'Addradialdimension.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Geometry import *
from Rhino.Input import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("Select curve for radius dimension", 
    True, ObjectType.Curve)
  if rc != Result.Success:
    return rc
  curve, curve_parameter = obj_ref.CurveParameter()
  if curve == None:
    return Result.Failure

  if curve.IsLinear() or curve.IsPolyline():
    print "Curve must be non-linear."
    return Result.Nothing

  # in this example just deal with planar curves
  if not curve.IsPlanar():
    print "Curve must be planar."
    return Result.Nothing

  point_on_curve = curve.PointAt(curve_parameter)
  curvature_vector = curve.CurvatureAt(curve_parameter)
  len = curvature_vector.Length
  if len < RhinoMath.SqrtEpsilon:
    print "Curve is almost linear and therefore has no curvature."
    return Result.Nothing

  center = point_on_curve + (curvature_vector/(len*len))
  _, plane = curve.TryGetPlane()
  radial_dimension = \
    RadialDimension(center, point_on_curve, plane.XAxis, plane.Normal, 5.0)
  doc.Objects.AddRadialDimension(radial_dimension)
  doc.Views.Redraw()
  return Result.Success

if __name__=="__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Curve', 'Vector3d CurvatureAt(double t)'],
      ['Rhino.Geometry.Curve', 'bool IsLinear()'],
      ['Rhino.Geometry.Curve', 'bool IsPlanar()'],
      ['Rhino.Geometry.Curve', 'bool IsPolyline()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAt(double t)'],
      ['Rhino.DocObjects.ObjRef', 'Curve CurveParameter(double parameter)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddRadialDimension(RadialDimension dimension)']
    ]
  },
  {
    name: 'Curvereverse.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class ReverseCurveCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbReverseCurve"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim objRefs As ObjRef() = Nothing
      Dim rc = RhinoGet.GetMultipleObjects("Select curves to reverse", True, ObjectType.Curve, objRefs)
      If rc <> Result.Success Then
        Return rc
      End If

      For Each objRef As ObjRef In objRefs
        Dim curveCopy = objRef.Curve().DuplicateCurve()
        If curveCopy IsNot Nothing Then
          curveCopy.Reverse()
          doc.Objects.Replace(objRef, curveCopy)
        End If
      Next
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve DuplicateCurve()'],
      ['Rhino.Geometry.Curve', 'bool Reverse()']
    ]
  },
  {
    name: 'Curvereverse.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class ReverseCurveCommand : Command
  {
    public override string EnglishName { get { return "csReverseCurve"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef[] obj_refs; 
      var rc = RhinoGet.GetMultipleObjects("Select curves to reverse", true, ObjectType.Curve, out obj_refs);
      if (rc != Result.Success)
        return rc;

      foreach (var obj_ref in obj_refs)
      {
        var curve_copy = obj_ref.Curve().DuplicateCurve();
        if (curve_copy != null)
        {
          curve_copy.Reverse();
          doc.Objects.Replace(obj_ref, curve_copy);
        }
      }
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve DuplicateCurve()'],
      ['Rhino.Geometry.Curve', 'bool Reverse()']
    ]
  },
  {
    name: 'Curvereverse.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import *
import Rhino

def ReverseCurves():
    crvs = rs.GetObjects("Select curves to reverse", rs.filter.curve)
    if not crvs: return
    
    for crvid in crvs:
        crv = rs.coercecurve(crvid)
        if not crv: continue
        dup = crv.DuplicateCurve()
        if dup:
            dup.Reverse()
        doc.Objects.Replace(crvid, dup)

if __name__ == "__main__":
    ReverseCurves()`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve DuplicateCurve()'],
      ['Rhino.Geometry.Curve', 'bool Reverse()']
    ]
  },
  {
    name: 'Extendcurve.vb',
    code: `Imports System.Linq
Imports Rhino
Imports Rhino.Geometry
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class ExtendCurveCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbExtendCurve"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim boundary_obj_refs As ObjRef() = Nothing
      Dim rc = RhinoGet.GetMultipleObjects("Select boundary objects", False, ObjectType.AnyObject, boundary_obj_refs)
      If rc <> Result.Success Then
        Return rc
      End If
      If boundary_obj_refs Is Nothing OrElse boundary_obj_refs.Length = 0 Then
        Return Result.[Nothing]
      End If

      Dim gc = New GetObject()
      gc.SetCommandPrompt("Select curve to extend")
      gc.GeometryFilter = ObjectType.Curve
      gc.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
      gc.[Get]()
      If gc.CommandResult() <> Result.Success Then
        Return gc.CommandResult()
      End If
      Dim curve_obj_ref = gc.[Object](0)

      Dim curve = curve_obj_ref.Curve()
      If curve Is Nothing Then
        Return Result.Failure
      End If
      Dim t As Double
      If Not curve.ClosestPoint(curve_obj_ref.SelectionPoint(), t) Then
        Return Result.Failure
      End If
      Dim curve_end = If(t <= curve.Domain.Mid, CurveEnd.Start, CurveEnd.[End])

      Dim geometry = boundary_obj_refs.[Select](Function(obj) obj.Geometry())
      Dim extended_curve = curve.Extend(curve_end, CurveExtensionStyle.Line, geometry)
      If extended_curve IsNot Nothing AndAlso extended_curve.IsValid Then
        If Not doc.Objects.Replace(curve_obj_ref.ObjectId, extended_curve) Then
          Return Result.Failure
        End If
        doc.Views.Redraw()
      Else
        RhinoApp.WriteLine("No boundary object was intersected so curve not extended")
        Return Result.[Nothing]
      End If

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve Extend(CurveEnd side,CurveExtensionStyle style,IEnumerable<GeometryBase> geometry)'],
      ['Rhino.Geometry.Interval', 'double Mid']
    ]
  },
  {
    name: 'Extendcurve.cs',
    code: `using System.Linq;
using Rhino;
using Rhino.Geometry;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class ExtendCurveCommand : Command
  {
    public override string EnglishName { get { return "csExtendCurve"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef[] boundary_obj_refs;
      var rc = RhinoGet.GetMultipleObjects("Select boundary objects", false, ObjectType.AnyObject, out boundary_obj_refs);
      if (rc != Result.Success)
        return rc;
      if (boundary_obj_refs == null || boundary_obj_refs.Length == 0)
        return Result.Nothing;

      var gc = new GetObject();
      gc.SetCommandPrompt("Select curve to extend");
      gc.GeometryFilter = ObjectType.Curve;
      gc.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve;
      gc.Get();
      if (gc.CommandResult() != Result.Success)
        return gc.CommandResult();
      var curve_obj_ref = gc.Object(0);

      var curve = curve_obj_ref.Curve();
      if (curve == null) return Result.Failure;
      double t;
      if (!curve.ClosestPoint(curve_obj_ref.SelectionPoint(), out t))
        return Result.Failure;
      var curve_end = t <= curve.Domain.Mid ? CurveEnd.Start : CurveEnd.End;

      var geometry = boundary_obj_refs.Select(obj=> obj.Geometry());
      var extended_curve = curve.Extend(curve_end, CurveExtensionStyle.Line, geometry);
      if (extended_curve != null && extended_curve.IsValid)
      {
        if (!doc.Objects.Replace(curve_obj_ref.ObjectId, extended_curve))
          return Result.Failure;
        doc.Views.Redraw();
      }
      else
      {
        RhinoApp.WriteLine("No boundary object was intersected so curve not extended");
        return Result.Nothing;
      }

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve Extend(CurveEnd side,CurveExtensionStyle style,IEnumerable<GeometryBase> geometry)'],
      ['Rhino.Geometry.Interval', 'double Mid']
    ]
  },
  {
    name: 'Extendcurve.py',
    code: `from Rhino import *
from Rhino.Geometry import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.Input.Custom import *
from scriptcontext import doc

def RunCommand():
  
  rc, boundary_obj_refs = RhinoGet.GetMultipleObjects("Select boundary objects", False, ObjectType.AnyObject)
  if rc <> Result.Success:
    return rc
  if boundary_obj_refs == None or boundary_obj_refs.Length == 0:
    return Result.Nothing

  gc = GetObject()
  gc.SetCommandPrompt("Select curve to extend")
  gc.GeometryFilter = ObjectType.Curve
  gc.GeometryAttributeFilter = GeometryAttributeFilter.OpenCurve
  gc.Get()
  if gc.CommandResult() <> Result.Success:
    return gc.CommandResult()
  curve_obj_ref = gc.Object(0)

  curve = curve_obj_ref.Curve()
  if curve == None: return Result.Failure
  b, t = curve.ClosestPoint(curve_obj_ref.SelectionPoint())
  if not b: return Result.Failure
  curve_end = CurveEnd.Start if t <= curve.Domain.Mid else CurveEnd.End

  geometry = [obj.Geometry() for obj in boundary_obj_refs]
  extended_curve = curve.Extend(curve_end, CurveExtensionStyle.Line, geometry)
  if extended_curve <> None and extended_curve.IsValid:
    if not doc.Objects.Replace(curve_obj_ref.ObjectId, extended_curve):
      return Result.Failure
    doc.Views.Redraw()
    return Result.Success
  else:
    RhinoApp.WriteLine("No boundary object was intersected so curve not extended")
    return Result.Nothing

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Curve', 'Curve Extend(CurveEnd side,CurveExtensionStyle style,IEnumerable<GeometryBase> geometry)'],
      ['Rhino.Geometry.Interval', 'double Mid']
    ]
  },
  {
    name: 'Arclengthpoint.vb',
    code: `Partial Class Examples
  Public Shared Function ArcLengthPoint(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetOneObject("Select curve", True, Rhino.DocObjects.ObjectType.Curve, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    Dim crv As Rhino.Geometry.Curve = objref.Curve()
    If crv Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim crv_length As Double = crv.GetLength()
    Dim length As Double = 0
    rc = Rhino.Input.RhinoGet.GetNumber("Length from start", True, length, 0, crv_length)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim pt As Rhino.Geometry.Point3d = crv.PointAtLength(length)
    If pt.IsValid Then
      doc.Objects.AddPoint(pt)
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Curve', 'double GetLength()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAtLength(double length)']
    ]
  },
  {
    name: 'Arclengthpoint.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result ArcLengthPoint(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef objref;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetOneObject("Select curve",
      true, Rhino.DocObjects.ObjectType.Curve,out objref);
    if(rc!= Rhino.Commands.Result.Success)
      return rc;
    Rhino.Geometry.Curve crv = objref.Curve();
    if( crv==null )
      return Rhino.Commands.Result.Failure;
 
    double crv_length = crv.GetLength();
    double length = 0;
    rc = Rhino.Input.RhinoGet.GetNumber("Length from start", true, ref length, 0, crv_length);
    if(rc!= Rhino.Commands.Result.Success)
      return rc;
 
    Rhino.Geometry.Point3d pt = crv.PointAtLength(length);
    if (pt.IsValid)
    {
      doc.Objects.AddPoint(pt);
      doc.Views.Redraw();
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'double GetLength()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAtLength(double length)']
    ]
  },
  {
    name: 'Arclengthpoint.py',
    code: `import Rhino
import scriptcontext

def ArcLengthPoint():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select curve", True, Rhino.DocObjects.ObjectType.Curve)
    if rc!=Rhino.Commands.Result.Success: return rc
    crv = objref.Curve()
    if not crv: return Rhino.Commands.Result.Failure
    crv_length = crv.GetLength()
    length = 0
    rc, length = Rhino.Input.RhinoGet.GetNumber("Length from start", True, length, 0, crv_length)
    if rc!=Rhino.Commands.Result.Success: return rc
    pt = crv.PointAtLength(length)
    if pt.IsValid:
        scriptcontext.doc.Objects.AddPoint(pt)
        scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    ArcLengthPoint()
`,
    members: [
      ['Rhino.Geometry.Curve', 'double GetLength()'],
      ['Rhino.Geometry.Curve', 'Point3d PointAtLength(double length)']
    ]
  },
  {
    name: 'Customgeometryfilter.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input.Custom
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class CustomGeometryFilterCommand
    Inherits Command
    Private _tolerance As Double
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCustomGeometryFilter"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      _tolerance = doc.ModelAbsoluteTolerance

      ' only use a custom geometry filter if no simpler filter does the job

      ' only curves
      Dim gc = New GetObject()
      gc.SetCommandPrompt("select curve")
      gc.GeometryFilter = ObjectType.Curve
      gc.DisablePreSelect()
      gc.SubObjectSelect = False
      gc.[Get]()
      If gc.CommandResult() <> Result.Success Then
        Return gc.CommandResult()
      End If
      If gc.[Object](0).Curve() Is Nothing Then
        Return Result.Failure
      End If
      Rhino.RhinoApp.WriteLine("curve was selected")

      ' only closed curves
      Dim gcc = New GetObject()
      gcc.SetCommandPrompt("select closed curve")
      gcc.GeometryFilter = ObjectType.Curve
      gcc.GeometryAttributeFilter = GeometryAttributeFilter.ClosedCurve
      gcc.DisablePreSelect()
      gcc.SubObjectSelect = False
      gcc.[Get]()
      If gcc.CommandResult() <> Result.Success Then
        Return gcc.CommandResult()
      End If
      If gcc.[Object](0).Curve() Is Nothing Then
        Return Result.Failure
      End If
      Rhino.RhinoApp.WriteLine("closed curve was selected")

      ' only circles with a radius of 10
      Dim gcc10 = New GetObject()
      gcc10.SetCommandPrompt("select circle with radius of 10")
      gc.GeometryFilter = ObjectType.Curve
      gcc10.SetCustomGeometryFilter(AddressOf CircleWithRadiusOf10GeometryFilter)
      ' custom geometry filter
      gcc10.DisablePreSelect()
      gcc10.SubObjectSelect = False
      gcc10.[Get]()
      If gcc10.CommandResult() <> Result.Success Then
        Return gcc10.CommandResult()
      End If
      If gcc10.[Object](0).Curve() Is Nothing Then
        Return Result.Failure
      End If
      Rhino.RhinoApp.WriteLine("circle with radius of 10 was selected")

      Return Result.Success
    End Function

    Private Function CircleWithRadiusOf10GeometryFilter(rhObject As Rhino.DocObjects.RhinoObject, geometry As GeometryBase, componentIndex As ComponentIndex) As Boolean
      Dim isCircleWithRadiusOf10 As Boolean = False
      Dim circle As Circle
      If TypeOf geometry Is Curve AndAlso TryCast(geometry, Curve).TryGetCircle(circle) Then
        isCircleWithRadiusOf10 = circle.Radius <= 10.0 + _tolerance AndAlso circle.Radius >= 10.0 - _tolerance
      End If
      Return isCircleWithRadiusOf10
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle)'],
      ['Rhino.Input.Custom.GetObject', 'void SetCustomGeometryFilter(GetObjectGeometryFilter filter)']
    ]
  },
  {
    name: 'Customgeometryfilter.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input.Custom;
using Rhino.DocObjects;

namespace examples_cs
{
  public class CustomGeometryFilterCommand : Command
  {
    private double m_tolerance;
    public override string EnglishName { get { return "csCustomGeometryFilter"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      m_tolerance = doc.ModelAbsoluteTolerance;
      
      // only use a custom geometry filter if no simpler filter does the job

      // only curves
      var gc = new GetObject();
      gc.SetCommandPrompt("select curve");
      gc.GeometryFilter = ObjectType.Curve;
      gc.DisablePreSelect();
      gc.SubObjectSelect = false;
      gc.Get();
      if (gc.CommandResult() != Result.Success)
        return gc.CommandResult();
      if (null == gc.Object(0).Curve())
        return Result.Failure;
      Rhino.RhinoApp.WriteLine("curve was selected");

      // only closed curves
      var gcc = new GetObject();
      gcc.SetCommandPrompt("select closed curve");
      gcc.GeometryFilter = ObjectType.Curve;
      gcc.GeometryAttributeFilter = GeometryAttributeFilter.ClosedCurve;
      gcc.DisablePreSelect();
      gcc.SubObjectSelect = false;
      gcc.Get();
      if (gcc.CommandResult() != Result.Success)
        return gcc.CommandResult();
      if (null == gcc.Object(0).Curve())
        return Result.Failure;
      Rhino.RhinoApp.WriteLine("closed curve was selected");

      // only circles with a radius of 10
      var gcc10 = new GetObject();
      gcc10.SetCommandPrompt("select circle with radius of 10");
      gc.GeometryFilter = ObjectType.Curve;
      gcc10.SetCustomGeometryFilter(CircleWithRadiusOf10GeometryFilter); // custom geometry filter
      gcc10.DisablePreSelect();
      gcc10.SubObjectSelect = false;
      gcc10.Get();
      if (gcc10.CommandResult() != Result.Success)
        return gcc10.CommandResult();
      if (null == gcc10.Object(0).Curve())
        return Result.Failure;
      RhinoApp.WriteLine("circle with radius of 10 was selected");

      return Result.Success;
    }

    private bool CircleWithRadiusOf10GeometryFilter (Rhino.DocObjects.RhinoObject rhObject, GeometryBase geometry,
      ComponentIndex componentIndex)
    {
      bool is_circle_with_radius_of10 = false;
      Circle circle;
      if (geometry is Curve && (geometry as Curve).TryGetCircle(out circle))
        is_circle_with_radius_of10 = circle.Radius <= 10.0 + m_tolerance && circle.Radius >= 10.0 - m_tolerance;
      return is_circle_with_radius_of10;
    }
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle)'],
      ['Rhino.Input.Custom.GetObject', 'void SetCustomGeometryFilter(GetObjectGeometryFilter filter)']
    ]
  },
  {
    name: 'Customgeometryfilter.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import *
import Rhino

def circleWithRadiusOf10GeometryFilter (rhObject, geometry, componentIndex):
  isCircleWithRadiusOf10 = False
  c = rs.coercecurve(geometry)
  if c:
    b, circle = c.TryGetCircle()
  if b:
    isCircleWithRadiusOf10 = circle.Radius <= 10.0 + Rhino.RhinoMath.ZeroTolerance and circle.Radius >= 10.0 - Rhino.RhinoMath.ZeroTolerance
  return isCircleWithRadiusOf10

def RunCommand():
  # only use a custom geometry filter if no simpler filter does the job

  # for curves - only a simple filter is needed
  if rs.GetObject("select curve", rs.filter.curve): #Rhino.DocObjects.ObjectType.Curve):
    print "curve vas selected"

  # for circles with a radius of 10 - a custom geometry filter is needed
  if rs.GetObject("select circle with radius of 10", rs.filter.curve, False, False, circleWithRadiusOf10GeometryFilter):
      print "circle with radius of 10 was selected"

if __name__=="__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle)'],
      ['Rhino.Input.Custom.GetObject', 'void SetCustomGeometryFilter(GetObjectGeometryFilter filter)']
    ]
  },
  {
    name: 'Circlecenter.vb',
    code: `Partial Class Examples
  Public Shared Function CircleCenter(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim go As New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.[Custom].GeometryAttributeFilter.ClosedCurve
    go.GetMultiple(1, 0)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    Dim objrefs As Rhino.DocObjects.ObjRef() = go.Objects()
    If objrefs Is Nothing Then
      Return Rhino.Commands.Result.[Nothing]
    End If

    Dim tolerance As Double = doc.ModelAbsoluteTolerance
    For i As Integer = 0 To objrefs.Length - 1
      ' get the curve geometry
      Dim curve As Rhino.Geometry.Curve = objrefs(i).Curve()
      If curve Is Nothing Then
        Continue For
      End If
      Dim circle As Rhino.Geometry.Circle
      If curve.TryGetCircle(circle, tolerance) Then
        Rhino.RhinoApp.WriteLine("Circle{0}: center = {1}", i + 1, circle.Center)
      End If
    Next
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle,double tolerance)'],
      ['Rhino.Input.Custom.GetObject', 'GeometryAttributeFilter GeometryAttributeFilter']
    ]
  },
  {
    name: 'Circlecenter.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result CircleCenter(Rhino.RhinoDoc doc)
  {
    Rhino.Input.Custom.GetObject go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select objects");
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve;
    go.GetMultiple(1, 0);
    if( go.CommandResult() != Rhino.Commands.Result.Success )
      return go.CommandResult();

    Rhino.DocObjects.ObjRef[] objrefs = go.Objects();
    if( objrefs==null )
      return Rhino.Commands.Result.Nothing;

    double tolerance = doc.ModelAbsoluteTolerance;
    for( int i=0; i<objrefs.Length; i++ )
    {
      // get the curve geometry
      Rhino.Geometry.Curve curve = objrefs[i].Curve();
      if( curve==null )
        continue;
      Rhino.Geometry.Circle circle;
      if( curve.TryGetCircle(out circle, tolerance) )
      {
        Rhino.RhinoApp.WriteLine("Circle{0}: center = {1}", i+1, circle.Center);
      }
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle,double tolerance)'],
      ['Rhino.Input.Custom.GetObject', 'GeometryAttributeFilter GeometryAttributeFilter']
    ]
  },
  {
    name: 'Circlecenter.py',
    code: `import Rhino
import scriptcontext

def CircleCenter():
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve
    go.GetMultiple(1, 0)
    if go.CommandResult()!=Rhino.Commands.Result.Success:
        return go.CommandResult()

    objrefs = go.Objects()
    if not objrefs: return Rhino.Commands.Result.Nothing

    tolerance = scriptcontext.doc.ModelAbsoluteTolerance
    for i, objref in enumerate(objrefs):
        # get the curve geometry
        curve = objref.Curve()
        if not curve: continue
        rc, circle = curve.TryGetCircle( tolerance )
        if rc:
            print "Circle", i+1, ": center = ", circle.Center
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    CircleCenter()`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetCircle(Circle circle,double tolerance)'],
      ['Rhino.Input.Custom.GetObject', 'GeometryAttributeFilter GeometryAttributeFilter']
    ]
  },
  {
    name: 'Constrainedcopy.vb',
    code: `Partial Class Examples
  Public Shared Function ConstrainedCopy(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Get a single planar closed curve
    Dim go = New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select curve")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve
    go.Get()
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If
    Dim objref = go.Object(0)
    Dim base_curve = objref.Curve()
    Dim first_point = objref.SelectionPoint()
    If base_curve Is Nothing OrElse Not first_point.IsValid Then
      Return Rhino.Commands.Result.Cancel
    End If

    Dim plane As Rhino.Geometry.Plane
    If Not base_curve.TryGetPlane(plane) Then
      Return Rhino.Commands.Result.Cancel
    End If

    ' Get a point constrained to a line passing through the initial selection
    ' point and parallel to the plane's normal
    Dim gp = New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Offset point")
    gp.DrawLineFromPoint(first_point, True)
    Dim line = New Rhino.Geometry.Line(first_point, first_point + plane.Normal)
    gp.Constrain(line)
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If
    Dim second_point = gp.Point()
    Dim vec As Rhino.Geometry.Vector3d = second_point - first_point
    If vec.Length > 0.001 Then
      Dim xf = Rhino.Geometry.Transform.Translation(vec)
      Dim id As Guid = doc.Objects.Transform(objref, xf, False)
      If id <> Guid.Empty Then
        doc.Views.Redraw()
        Return Rhino.Commands.Result.Success
      End If
    End If
    Return Rhino.Commands.Result.Cancel
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetPlane(Plane plane)'],
      ['Rhino.Geometry.Transform', 'static Transform Translation(Vector3d motion)'],
      ['Rhino.DocObjects.ObjRef', 'Point3d SelectionPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Line line)']
    ]
  },
  {
    name: 'Constrainedcopy.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result ConstrainedCopy(Rhino.RhinoDoc doc)
  {
    // Get a single planar closed curve
    var go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select curve");
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve;
    go.Get();
    if( go.CommandResult() != Rhino.Commands.Result.Success )
      return go.CommandResult();
    var objref = go.Object(0);
    var base_curve = objref.Curve();
    var first_point = objref.SelectionPoint();
    if( base_curve==null || !first_point.IsValid )
      return Rhino.Commands.Result.Cancel;

    Rhino.Geometry.Plane plane;
    if( !base_curve.TryGetPlane(out plane) )
      return Rhino.Commands.Result.Cancel;

    // Get a point constrained to a line passing through the initial selection
    // point and parallel to the plane's normal
    var gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Offset point");
    gp.DrawLineFromPoint(first_point, true);
    var line = new Rhino.Geometry.Line(first_point, first_point+plane.Normal);
    gp.Constrain(line);
    gp.Get();
    if( gp.CommandResult() != Rhino.Commands.Result.Success )
      return gp.CommandResult();
    var second_point = gp.Point();
    Rhino.Geometry.Vector3d vec = second_point - first_point;
    if( vec.Length > 0.001 )
    {
      var xf = Rhino.Geometry.Transform.Translation(vec);
      Guid id = doc.Objects.Transform(objref, xf, false);
      if( id!=Guid.Empty )
      {
        doc.Views.Redraw();
        return Rhino.Commands.Result.Success;
      }
    }
    return Rhino.Commands.Result.Cancel;
  }
}
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetPlane(Plane plane)'],
      ['Rhino.Geometry.Transform', 'static Transform Translation(Vector3d motion)'],
      ['Rhino.DocObjects.ObjRef', 'Point3d SelectionPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Line line)']
    ]
  },
  {
    name: 'Constrainedcopy.py',
    code: `import Rhino
import scriptcontext

def constrainedcopy():
    #get a single closed curve
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select curve")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GeometryAttributeFilter = Rhino.Input.Custom.GeometryAttributeFilter.ClosedCurve
    go.Get()
    if go.CommandResult() != Rhino.Commands.Result.Success: return
    objref = go.Object(0)
    base_curve = objref.Curve()
    first_point = objref.SelectionPoint()
    if not base_curve or not first_point.IsValid:
        return
    isplanar, plane = base_curve.TryGetPlane()
    if not isplanar: return
    
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Offset point")
    gp.DrawLineFromPoint(first_point, True)
    line = Rhino.Geometry.Line(first_point, first_point + plane.Normal)
    gp.Constrain(line)
    gp.Get()
    if gp.CommandResult() != Rhino.Commands.Result.Success:
        return
    second_point = gp.Point()
    vec = second_point - first_point
    if vec.Length > 0.001:
        xf = Rhino.Geometry.Transform.Translation(vec)
        id = scriptcontext.doc.Objects.Transform(objref, xf, False)
        scriptcontext.doc.Views.Redraw()
        return id

if __name__=="__main__":
    constrainedcopy()
`,
    members: [
      ['Rhino.Geometry.Curve', 'bool TryGetPlane(Plane plane)'],
      ['Rhino.Geometry.Transform', 'static Transform Translation(Vector3d motion)'],
      ['Rhino.DocObjects.ObjRef', 'Point3d SelectionPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Line line)']
    ]
  },
  {
    name: 'Addcylinder.vb',
    code: `Partial Class Examples
  Public Shared Function AddCylinder(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim center_point As New Rhino.Geometry.Point3d(0, 0, 0)
    Dim height_point As New Rhino.Geometry.Point3d(0, 0, 10)
    Dim zaxis As Rhino.Geometry.Vector3d = height_point - center_point
    Dim plane As New Rhino.Geometry.Plane(center_point, zaxis)
    Const radius As Double = 5
    Dim circle As New Rhino.Geometry.Circle(plane, radius)
    Dim cylinder As New Rhino.Geometry.Cylinder(circle, zaxis.Length)
    Dim brep As Rhino.Geometry.Brep = cylinder.ToBrep(True, True)
    If brep IsNot Nothing Then
      doc.Objects.AddBrep(brep)
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Cylinder', 'Cylinder(Circle baseCircle,double height)'],
      ['Rhino.Geometry.Cylinder', 'Brep ToBrep(bool capBottom,bool capTop)'],
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Vector3d normal)']
    ]
  },
  {
    name: 'Addcylinder.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result AddCylinder(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Point3d center_point = new Rhino.Geometry.Point3d(0, 0, 0);
    Rhino.Geometry.Point3d height_point = new Rhino.Geometry.Point3d(0, 0, 10);
    Rhino.Geometry.Vector3d zaxis = height_point - center_point;
    Rhino.Geometry.Plane plane = new Rhino.Geometry.Plane(center_point, zaxis);
    const double radius = 5;
    Rhino.Geometry.Circle circle = new Rhino.Geometry.Circle(plane, radius);
    Rhino.Geometry.Cylinder cylinder = new Rhino.Geometry.Cylinder(circle, zaxis.Length);
    Rhino.Geometry.Brep brep = cylinder.ToBrep(true, true);
    if (brep != null)
    {
      doc.Objects.AddBrep(brep);
      doc.Views.Redraw();
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Cylinder', 'Cylinder(Circle baseCircle,double height)'],
      ['Rhino.Geometry.Cylinder', 'Brep ToBrep(bool capBottom,bool capTop)'],
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Vector3d normal)']
    ]
  },
  {
    name: 'Addcylinder.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddCylinder():
    center_point = Rhino.Geometry.Point3d(0, 0, 0)
    height_point = Rhino.Geometry.Point3d(0, 0, 10)
    zaxis = height_point-center_point
    plane = Rhino.Geometry.Plane(center_point, zaxis)
    radius = 5
    circle = Rhino.Geometry.Circle(plane, radius)
    cylinder = Rhino.Geometry.Cylinder(circle, zaxis.Length)
    brep = cylinder.ToBrep(True, True)
    if brep:
        if scriptcontext.doc.Objects.AddBrep(brep)!=System.Guid.Empty:
            scriptcontext.doc.Views.Redraw()
            return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    AddCylinder()
`,
    members: [
      ['Rhino.Geometry.Cylinder', 'Cylinder(Circle baseCircle,double height)'],
      ['Rhino.Geometry.Cylinder', 'Brep ToBrep(bool capBottom,bool capTop)'],
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Vector3d normal)']
    ]
  },
  {
    name: 'Addlineardimension2.vb',
    code: `Imports Rhino.Geometry

Partial Class Examples
  Public Shared Function AddLinearDimension2(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim origin As New Point3d(1, 1, 0)
    Dim offset As New Point3d(11, 1, 0)
    Dim pt As New Point3d((offset.X - origin.X) / 2, 3, 0)

    Dim plane__1 As Plane = Plane.WorldXY
    plane__1.Origin = origin

    Dim u As Double, v As Double
    plane__1.ClosestParameter(origin, u, v)
    Dim ext1 As New Point2d(u, v)

    plane__1.ClosestParameter(offset, u, v)
    Dim ext2 As New Point2d(u, v)

    plane__1.ClosestParameter(pt, u, v)
    Dim linePt As New Point2d(u, v)

    Dim dimension As New LinearDimension(plane__1, ext1, ext2, linePt)
    If doc.Objects.AddLinearDimension(dimension) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.LinearDimension', 'LinearDimension(Plane dimensionPlane,Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)'],
      ['Rhino.Geometry.Plane', 'bool ClosestParameter(Point3d testPoint,double s,double t)']
    ]
  },
  {
    name: 'Addlineardimension2.cs',
    code: `using System;
using Rhino.Geometry;

partial class Examples
{
  public static Rhino.Commands.Result AddLinearDimension2(Rhino.RhinoDoc doc)
  {
    Point3d origin = new Point3d(1,1,0);
    Point3d offset = new Point3d(11,1,0);
    Point3d pt = new Point3d((offset.X-origin.X)/2,3,0);

    Plane plane = Plane.WorldXY;
    plane.Origin = origin;

    double u,v;
    plane.ClosestParameter(origin, out u, out v);
    Point2d ext1 = new Point2d(u, v);

    plane.ClosestParameter(offset, out u, out v);
    Point2d ext2 = new Point2d(u, v);

    plane.ClosestParameter(pt, out u, out v);
    Point2d linePt = new Point2d(u, v);

    LinearDimension dimension = new LinearDimension(plane, ext1, ext2, linePt);
    if (doc.Objects.AddLinearDimension(dimension) != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.LinearDimension', 'LinearDimension(Plane dimensionPlane,Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)'],
      ['Rhino.Geometry.Plane', 'bool ClosestParameter(Point3d testPoint,double s,double t)']
    ]
  },
  {
    name: 'Addlineardimension2.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddLinearDimension2():
    origin = Rhino.Geometry.Point3d(1,1,0)
    offset = Rhino.Geometry.Point3d(11,1,0)
    pt = Rhino.Geometry.Point3d((offset.X-origin.X)/2.0,3,0)
    plane = Rhino.Geometry.Plane.WorldXY
    plane.Origin = origin
    
    rc, u, v = plane.ClosestParameter(origin)
    ext1 = Rhino.Geometry.Point2d(u,v)
    rc, u, v = plane.ClosestParameter(offset)
    ext2 = Rhino.Geometry.Point2d(u,v)
    rc, u, v = plane.ClosestParameter(pt)
    linePt = Rhino.Geometry.Point2d(u,v)
    
    dimension = Rhino.Geometry.LinearDimension(plane, ext1, ext2, linePt)
    if scriptcontext.doc.Objects.AddLinearDimension(dimension)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    AddLinearDimension2()
`,
    members: [
      ['Rhino.Geometry.LinearDimension', 'LinearDimension(Plane dimensionPlane,Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)'],
      ['Rhino.Geometry.Plane', 'bool ClosestParameter(Point3d testPoint,double s,double t)']
    ]
  },
  {
    name: 'Intersectcurves.vb',
    code: `Partial Class Examples
  Public Shared Function IntersectCurves(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Select two curves to intersect
    Dim go = New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select two curves")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GetMultiple(2, 2)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    ' Validate input
    Dim curveA = go.[Object](0).Curve()
    Dim curveB = go.[Object](1).Curve()
    If curveA Is Nothing OrElse curveB Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    ' Calculate the intersection
    Const intersection_tolerance As Double = 0.001
    Const overlap_tolerance As Double = 0.0
    Dim events = Rhino.Geometry.Intersect.Intersection.CurveCurve(curveA, curveB, intersection_tolerance, overlap_tolerance)

    ' Process the results
    If events IsNot Nothing Then
      For i As Integer = 0 To events.Count - 1
        Dim ccx_event = events(i)
        doc.Objects.AddPoint(ccx_event.PointA)
        If ccx_event.PointA.DistanceTo(ccx_event.PointB) > Double.Epsilon Then
          doc.Objects.AddPoint(ccx_event.PointB)
          doc.Objects.AddLine(ccx_event.PointA, ccx_event.PointB)
        End If
      Next
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Point3f', 'double DistanceTo(Point3f other)'],
      ['Rhino.Geometry.Point3d', 'double DistanceTo(Point3d other)'],
      ['Rhino.DocObjects.ObjRef', 'Curve Curve()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveCurve(Curve curveA,Curve curveB,double tolerance,double overlapTolerance)']
    ]
  },
  {
    name: 'Intersectcurves.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result IntersectCurves(Rhino.RhinoDoc doc)
  {
    // Select two curves to intersect
    var go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select two curves");
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    go.GetMultiple(2, 2);
    if (go.CommandResult() != Rhino.Commands.Result.Success)
      return go.CommandResult();

    // Validate input
    var curveA = go.Object(0).Curve();
    var curveB = go.Object(1).Curve();
    if (curveA == null || curveB == null)
      return Rhino.Commands.Result.Failure;

    // Calculate the intersection
    const double intersection_tolerance = 0.001;
    const double overlap_tolerance = 0.0;
    var events = Rhino.Geometry.Intersect.Intersection.CurveCurve(curveA, curveB, intersection_tolerance, overlap_tolerance);

    // Process the results
    if (events != null)
    {
      for (int i = 0; i < events.Count; i++)
      {
        var ccx_event = events[i];
        doc.Objects.AddPoint(ccx_event.PointA);
        if (ccx_event.PointA.DistanceTo(ccx_event.PointB) > double.Epsilon)
        {
          doc.Objects.AddPoint(ccx_event.PointB);
          doc.Objects.AddLine(ccx_event.PointA, ccx_event.PointB);
        }
      }
      doc.Views.Redraw();
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Point3f', 'double DistanceTo(Point3f other)'],
      ['Rhino.Geometry.Point3d', 'double DistanceTo(Point3d other)'],
      ['Rhino.DocObjects.ObjRef', 'Curve Curve()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveCurve(Curve curveA,Curve curveB,double tolerance,double overlapTolerance)']
    ]
  },
  {
    name: 'Intersectcurves.py',
    code: `import Rhino
import scriptcontext

def IntersectCurves():
    # Select two curves to intersect
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select two curves")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GetMultiple(2, 2)
    if go.CommandResult()!=Rhino.Commands.Result.Success: return

    # Validate input
    curveA = go.Object(0).Curve()
    curveB = go.Object(1).Curve()
    if not curveA or not curveB: return

    # Calculate the intersection
    intersection_tolerance = 0.001
    overlap_tolerance = 0.0
    events = Rhino.Geometry.Intersect.Intersection.CurveCurve(curveA, curveB, intersection_tolerance, overlap_tolerance)

    # Process the results
    if not events: return
    for ccx_event in events:
        scriptcontext.doc.Objects.AddPoint(ccx_event.PointA)
        if ccx_event.PointA.DistanceTo(ccx_event.PointB) > float.Epsilon:
            scriptcontext.doc.Objects.AddPoint(ccx_event.PointB)
            scriptcontext.doc.Objects.AddLine(ccx_event.PointA, ccx_event.PointB)
    scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    IntersectCurves()`,
    members: [
      ['Rhino.Geometry.Point3f', 'double DistanceTo(Point3f other)'],
      ['Rhino.Geometry.Point3d', 'double DistanceTo(Point3d other)'],
      ['Rhino.DocObjects.ObjRef', 'Curve Curve()'],
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveCurve(Curve curveA,Curve curveB,double tolerance,double overlapTolerance)']
    ]
  },
  {
    name: 'Curveboundingbox.vb',
    code: `Partial Class Examples
  Public Shared Function CurveBoundingBox(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Select a curve object
    Dim rhObject As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select curve", False, Rhino.DocObjects.ObjectType.Curve, rhObject)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    ' Validate selection
    Dim curve = rhObject.Curve()
    If curve Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    ' Get the active view's construction plane
    Dim view = doc.Views.ActiveView
    If view Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If
    Dim plane = view.ActiveViewport.ConstructionPlane()

    ' Compute the tight bounding box of the curve in world coordinates
    Dim bbox = curve.GetBoundingBox(True)
    If Not bbox.IsValid Then
      Return Rhino.Commands.Result.Failure
    End If

    ' Print the min and max box coordinates in world coordinates
    Rhino.RhinoApp.WriteLine("World min: {0}", bbox.Min)
    Rhino.RhinoApp.WriteLine("World max: {0}", bbox.Max)

    ' Compute the tight bounding box of the curve based on the 
    ' active view's construction plane
    bbox = curve.GetBoundingBox(plane)

    ' Print the min and max box coordinates in cplane coordinates
    Rhino.RhinoApp.WriteLine("CPlane min: {0}", bbox.Min)
    Rhino.RhinoApp.WriteLine("CPlane max: {0}", bbox.Max)
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(bool accurate)'],
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(Plane plane)']
    ]
  },
  {
    name: 'Curveboundingbox.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result CurveBoundingBox(Rhino.RhinoDoc doc)
  {
    // Select a curve object
    Rhino.DocObjects.ObjRef rhObject;
    var rc = Rhino.Input.RhinoGet.GetOneObject("Select curve", false, Rhino.DocObjects.ObjectType.Curve, out rhObject);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    // Validate selection
    var curve = rhObject.Curve();
    if (curve == null)
      return Rhino.Commands.Result.Failure;

    // Get the active view's construction plane
    var view = doc.Views.ActiveView;
    if (view == null)
      return Rhino.Commands.Result.Failure;
    var plane = view.ActiveViewport.ConstructionPlane();

    // Compute the tight bounding box of the curve in world coordinates
    var bbox = curve.GetBoundingBox(true);
    if (!bbox.IsValid)
      return Rhino.Commands.Result.Failure;

    // Print the min and max box coordinates in world coordinates
    Rhino.RhinoApp.WriteLine("World min: {0}", bbox.Min);
    Rhino.RhinoApp.WriteLine("World max: {0}", bbox.Max);

    // Compute the tight bounding box of the curve based on the 
    // active view's construction plane
    bbox = curve.GetBoundingBox(plane);

    // Print the min and max box coordinates in cplane coordinates
    Rhino.RhinoApp.WriteLine("CPlane min: {0}", bbox.Min);
    Rhino.RhinoApp.WriteLine("CPlane max: {0}", bbox.Max);
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(bool accurate)'],
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(Plane plane)']
    ]
  },
  {
    name: 'Curveboundingbox.py',
    code: `import Rhino
import scriptcontext

def CurveBoundingBox():
    # Select a curve object
    rc, rhobject = Rhino.Input.RhinoGet.GetOneObject("Select curve", False, Rhino.DocObjects.ObjectType.Curve)
    if rc!=Rhino.Commands.Result.Success: return

    # Validate selection
    curve = rhobject.Curve()
    if not curve: return

    ## Get the active view's construction plane
    view = scriptcontext.doc.Views.ActiveView
    if not view: return
    plane = view.ActiveViewport.ConstructionPlane()

    # Compute the tight bounding box of the curve in world coordinates
    bbox = curve.GetBoundingBox(True)
    if not bbox.IsValid: return

    # Print the min and max box coordinates in world coordinates
    print "World min:", bbox.Min
    print "World max:", bbox.Max

    # Compute the tight bounding box of the curve based on the 
    # active view's construction plane
    bbox = curve.GetBoundingBox(plane)

    # Print the min and max box coordinates in cplane coordinates
    print "CPlane min:", bbox.Min
    print "CPlane max:", bbox.Max

if __name__=="__main__":
    CurveBoundingBox()`,
    members: [
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(bool accurate)'],
      ['Rhino.Geometry.GeometryBase', 'BoundingBox GetBoundingBox(Plane plane)']
    ]
  },
  {
    name: 'Replacehatchpattern.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class ReplaceHatchPatternCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbReplaceHatchPattern"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_refs As ObjRef() = Nothing
      Dim rc = RhinoGet.GetMultipleObjects("Select hatches to replace", False, ObjectType.Hatch, obj_refs)
      If rc <> Result.Success OrElse obj_refs Is Nothing Then
        Return rc
      End If

      Dim gs = New GetString()
      gs.SetCommandPrompt("Name of replacement hatch pattern")
      gs.AcceptNothing(False)
      gs.[Get]()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If
      Dim hatch_name = gs.StringResult()

      Dim pattern_index = doc.HatchPatterns.Find(hatch_name, True)

      If pattern_index < 0 Then
        RhinoApp.WriteLine("The hatch pattern ""{0}"" not found  in the document.", hatch_name)
        Return Result.[Nothing]
      End If

      For Each obj_ref As ObjRef In obj_refs
        Dim hatch_object = TryCast(obj_ref.[Object](), HatchObject)
        If hatch_object.HatchGeometry.PatternIndex <> pattern_index Then
          hatch_object.HatchGeometry.PatternIndex = pattern_index
          hatch_object.CommitChanges()
        End If
      Next
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Hatch', 'int PatternIndex'],
      ['Rhino.DocObjects.HatchObject', 'Hatch HatchGeometry']
    ]
  },
  {
    name: 'Replacehatchpattern.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class ReplaceHatchPatternCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csReplaceHatchPattern"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef[] obj_refs;
      var rc = RhinoGet.GetMultipleObjects("Select hatches to replace", false, ObjectType.Hatch, out obj_refs);
      if (rc != Result.Success || obj_refs == null)
        return rc;

      var gs = new GetString();
      gs.SetCommandPrompt("Name of replacement hatch pattern");
      gs.AcceptNothing(false);
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();
      var hatch_name = gs.StringResult();

      var pattern_index = doc.HatchPatterns.Find(hatch_name, true);

      if (pattern_index < 0)
      {
        RhinoApp.WriteLine("The hatch pattern '{0}' not found  in the document.", hatch_name);
        return Result.Nothing;
      }

      foreach (var obj_ref in obj_refs)
      {
        var hatch_object = obj_ref.Object() as HatchObject;
        if (hatch_object.HatchGeometry.PatternIndex != pattern_index)
        {
          hatch_object.HatchGeometry.PatternIndex = pattern_index;
          hatch_object.CommitChanges();
        }
      }
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}
`,
    members: [
      ['Rhino.Geometry.Hatch', 'int PatternIndex'],
      ['Rhino.DocObjects.HatchObject', 'Hatch HatchGeometry']
    ]
  },
  {
    name: 'Replacehatchpattern.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.Input.Custom import *
from scriptcontext import doc

def RunCommand():
  rc, obj_refs = RhinoGet.GetMultipleObjects("Select hatches to replace", False, ObjectType.Hatch)
  if rc <> Result.Success or obj_refs == None:
    return rc

  gs = GetString()
  gs.SetCommandPrompt("Name of replacement hatch pattern")
  gs.AcceptNothing(False)
  gs.Get()
  if gs.CommandResult() <> Result.Success:
    return gs.CommandResult()
  hatch_name = gs.StringResult()

  pattern_index = doc.HatchPatterns.Find(hatch_name, True)

  if pattern_index < 0:
    RhinoApp.WriteLine("The hatch pattern "{0}" not found  in the document.", hatch_name)
    return Result.Nothing

  for obj_ref in obj_refs:
    hatch_object = obj_ref.Object()
    if hatch_object.HatchGeometry.PatternIndex <> pattern_index:
      hatch_object.HatchGeometry.PatternIndex = pattern_index
      hatch_object.CommitChanges()

  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Hatch', 'int PatternIndex'],
      ['Rhino.DocObjects.HatchObject', 'Hatch HatchGeometry']
    ]
  },
  {
    name: 'Explodehatch.vb',
    code: `Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function ExplodeHatch(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result

    Const filter As ObjectType = Rhino.DocObjects.ObjectType.Hatch
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetOneObject("Select hatch to explode", False, filter, objref)
    If rc <> Rhino.Commands.Result.Success OrElse objref Is Nothing Then
      Return rc
    End If

    Dim hatch As Rhino.Geometry.Hatch = DirectCast(objref.Geometry(), Rhino.Geometry.Hatch)
    If hatch Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim hatch_geom As Rhino.Geometry.GeometryBase() = hatch.Explode()
    If hatch_geom IsNot Nothing Then
      For i As Integer = 0 To hatch_geom.Length - 1
        Dim geom As Rhino.Geometry.GeometryBase = hatch_geom(i)
        If geom IsNot Nothing Then
          Select Case geom.ObjectType
            Case Rhino.DocObjects.ObjectType.Point
              If True Then
                Dim point As Rhino.Geometry.Point = TryCast(geom, Rhino.Geometry.Point)
                If point IsNot Nothing Then
                  doc.Objects.AddPoint(point.Location)
                End If
              End If
              Exit Select
            Case Rhino.DocObjects.ObjectType.Curve
              If True Then
                Dim curve As Rhino.Geometry.Curve = TryCast(geom, Rhino.Geometry.Curve)
                If curve IsNot Nothing Then
                  doc.Objects.AddCurve(curve)
                End If
              End If
              Exit Select
            Case Rhino.DocObjects.ObjectType.Brep
              If True Then
                Dim brep As Rhino.Geometry.Brep = TryCast(geom, Rhino.Geometry.Brep)
                If brep IsNot Nothing Then
                  doc.Objects.AddBrep(brep)
                End If
              End If
              Exit Select
          End Select
        End If
      Next
    End If

    Return Rhino.Commands.Result.Success
  End Function

End Class`,
    members: [
      ['Rhino.Geometry.Hatch', 'GeometryBase[] Explode()']
    ]
  },
  {
    name: 'Explodehatch.cs',
    code: `using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result ExplodeHatch(Rhino.RhinoDoc doc)
  {
    const ObjectType filter = Rhino.DocObjects.ObjectType.Hatch;
    Rhino.DocObjects.ObjRef objref;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetOneObject("Select hatch to explode", false, filter, out objref);
    if (rc != Rhino.Commands.Result.Success || objref == null)
      return rc;

    Rhino.Geometry.Hatch hatch = objref.Geometry() as Rhino.Geometry.Hatch;
    if (null == hatch)
      return Rhino.Commands.Result.Failure;

    Rhino.Geometry.GeometryBase[] hatch_geom = hatch.Explode();
    if (null != hatch_geom)
    {
      for (int i = 0; i < hatch_geom.Length; i++)
      {
        Rhino.Geometry.GeometryBase geom = hatch_geom[i];
        if (null != geom)
        {
          switch (geom.ObjectType)
          {
            case Rhino.DocObjects.ObjectType.Point:
              {
                Rhino.Geometry.Point point = geom as Rhino.Geometry.Point;
                if (null != point)
                  doc.Objects.AddPoint(point.Location);
              }
              break;
            case Rhino.DocObjects.ObjectType.Curve:
              {
                Rhino.Geometry.Curve curve = geom as Rhino.Geometry.Curve;
                if (null != curve)
                  doc.Objects.AddCurve(curve);
              }
              break;
            case Rhino.DocObjects.ObjectType.Brep:
              {
                Rhino.Geometry.Brep brep = geom as Rhino.Geometry.Brep;
                if (null != brep)
                  doc.Objects.AddBrep(brep);
              }
              break;
          }
        }
      }
    }

    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Hatch', 'GeometryBase[] Explode()']
    ]
  },
  {
    name: 'Explodehatch.py',
    code: `import Rhino
import scriptcontext

def ExplodeHatch():
    filter = Rhino.DocObjects.ObjectType.Hatch
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select hatch to explode", False, filter)
    if rc != Rhino.Commands.Result.Success: return

    hatch = objref.Geometry()
    if not hatch: return

    hatch_geom = hatch.Explode()
    if hatch_geom:
      for geom in hatch_geom:
          if geom.ObjectType == Rhino.DocObjects.ObjectType.Point:
              scriptcontext.doc.Objects.AddPoint(geom)
          elif geom.ObjectType == Rhino.DocObjects.ObjectType.Curve:
              scriptcontext.doc.Objects.AddCurve(geom)
          elif geom.ObjectType == Rhino.DocObjects.ObjectType.Brep:
              scriptcontext.doc.Objects.AddBrep(geom)
      scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    ExplodeHatch()
`,
    members: [
      ['Rhino.Geometry.Hatch', 'GeometryBase[] Explode()']
    ]
  },
  {
    name: 'Nestedblock.cs',
    code: `using System;

using Rhino;
using Rhino.Geometry;

partial class Examples
{
  public static Rhino.Commands.Result AddNestedBlock(RhinoDoc doc)
  {
    var circle = new Circle(Point3d.Origin, 5);
    Curve[] curveList = { new ArcCurve(circle) };
    var circleIndex = doc.InstanceDefinitions.Add("Circle", "Circle with radius of 5", Point3d.Origin, curveList);
    var transform = Transform.Identity;
    var irefId = doc.InstanceDefinitions[circleIndex].Id;
    var iref = new InstanceReferenceGeometry(irefId, transform);
    circle.Radius = circle.Radius * 2.0;
    GeometryBase[] blockList = { iref, new ArcCurve(circle) };
    var circle2Index = doc.InstanceDefinitions.Add("TwoCircles", "Nested block test", Point3d.Origin, blockList);
    doc.Objects.AddInstanceObject(circle2Index, transform);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.InstanceReferenceGeometry', 'InstanceReferenceGeometry(Guid instanceDefinitionId,Transform transform)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry)']
    ]
  },
  {
    name: 'Modifylightcolor.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.UI

Namespace examples_vb
  Public Class ChangeLightColorCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbLightColor"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select light to change color", True, ObjectType.Light, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim light = obj_ref.Light()
      If light Is Nothing Then
        Return Result.Failure
      End If

      Dim diffuse_color = light.Diffuse
      If Dialogs.ShowColorDialog(diffuse_color) Then
        light.Diffuse = diffuse_color
      End If

      doc.Lights.Modify(obj_ref.ObjectId, light)
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Light', 'Color Diffuse'],
      ['Rhino.UI.Dialogs', 'static bool ShowColorDialog(Color color)'],
      ['Rhino.DocObjects.Tables.LightTable', 'bool Modify(Guid id,Light light)']
    ]
  },
  {
    name: 'Modifylightcolor.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input;
using Rhino.UI;

namespace examples_cs
{
  public class ChangeLightColorCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csLightColor"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select light to change color", true,
        ObjectType.Light, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var light = obj_ref.Light();
      if (light == null)
        return Result.Failure;

      var diffuse_color = light.Diffuse;
      if (Dialogs.ShowColorDialog(ref diffuse_color))
      {
        light.Diffuse = diffuse_color;
      }

      doc.Lights.Modify(obj_ref.ObjectId, light);
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Light', 'Color Diffuse'],
      ['Rhino.UI.Dialogs', 'static bool ShowColorDialog(Color color)'],
      ['Rhino.DocObjects.Tables.LightTable', 'bool Modify(Guid id,Light light)']
    ]
  },
  {
    name: 'Modifylightcolor.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Input import *
from Rhino.UI import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject(
    "Select light to change color", 
    True,
    ObjectType.Light)
  if rc != Result.Success:
    return rc
  light = obj_ref.Light()
  if light == None:
    return Result.Failure

  b, color = Dialogs.ShowColorDialog(light.Diffuse)
  if b:
    light.Diffuse = color
    
  doc.Lights.Modify(obj_ref.ObjectId, light)
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Light', 'Color Diffuse'],
      ['Rhino.UI.Dialogs', 'static bool ShowColorDialog(Color color)'],
      ['Rhino.DocObjects.Tables.LightTable', 'bool Modify(Guid id,Light light)']
    ]
  },
  {
    name: 'Intersectlines.vb',
    code: `Imports Rhino.Geometry

Partial Class Examples
  Public Shared Function IntersectLines(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim go As New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select lines")
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GetMultiple(2, 2)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If
    If go.ObjectCount <> 2 Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim crv0 As LineCurve = TryCast(go.Object(0).Geometry(), LineCurve)
    Dim crv1 As LineCurve = TryCast(go.Object(1).Geometry(), LineCurve)
    If crv0 Is Nothing OrElse crv1 Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim line0 As Line = crv0.Line
    Dim line1 As Line = crv1.Line
    Dim v0 As Vector3d = line0.Direction
    v0.Unitize()
    Dim v1 As Vector3d = line1.Direction
    v1.Unitize()

    If v0.IsParallelTo(v1) <> 0 Then
      Rhino.RhinoApp.WriteLine("Selected lines are parallel.")
      Return Rhino.Commands.Result.[Nothing]
    End If

    Dim a As Double, b As Double
    If Not Rhino.Geometry.Intersect.Intersection.LineLine(line0, line1, a, b) Then
      Rhino.RhinoApp.WriteLine("No intersection found.")
      Return Rhino.Commands.Result.[Nothing]
    End If

    Dim pt0 As Point3d = line0.PointAt(a)
    Dim pt1 As Point3d = line1.PointAt(b)
    ' pt0 and pt1 should be equal, so we will only add pt0 to the document
    doc.Objects.AddPoint(pt0)
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Line', 'Vector3d Direction'],
      ['Rhino.Geometry.Line', 'Point3d PointAt(double t)'],
      ['Rhino.Geometry.Vector3d', 'int IsParallelTo(Vector3d other)'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool LineLine(Line lineA,Line lineB,double a,double b)']
    ]
  },
  {
    name: 'Intersectlines.cs',
    code: `using Rhino.Geometry;

partial class Examples
{
  public static Rhino.Commands.Result IntersectLines(Rhino.RhinoDoc doc)
  {
    Rhino.Input.Custom.GetObject go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt( "Select lines" );
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    go.GetMultiple( 2, 2);
    if( go.CommandResult() != Rhino.Commands.Result.Success )
      return go.CommandResult();
    if( go.ObjectCount != 2 )
      return Rhino.Commands.Result.Failure;

    LineCurve crv0 = go.Object(0).Geometry() as LineCurve;
    LineCurve crv1 = go.Object(1).Geometry() as LineCurve;
    if( crv0==null || crv1==null )
      return Rhino.Commands.Result.Failure;

    Line line0 = crv0.Line;
    Line line1 = crv1.Line;
    Vector3d v0 = line0.Direction;
    v0.Unitize();
    Vector3d v1 = line1.Direction;
    v1.Unitize();

    if( v0.IsParallelTo(v1) != 0 )
    {
      Rhino.RhinoApp.WriteLine("Selected lines are parallel.");
      return Rhino.Commands.Result.Nothing;
    }

    double a, b;
    if( !Rhino.Geometry.Intersect.Intersection.LineLine(line0, line1, out a, out b))
    {
      Rhino.RhinoApp.WriteLine("No intersection found.");
      return Rhino.Commands.Result.Nothing;
    }

    Point3d pt0 = line0.PointAt(a);
    Point3d pt1 = line1.PointAt(b);
    // pt0 and pt1 should be equal, so we will only add pt0 to the document
    doc.Objects.AddPoint( pt0 );
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Line', 'Vector3d Direction'],
      ['Rhino.Geometry.Line', 'Point3d PointAt(double t)'],
      ['Rhino.Geometry.Vector3d', 'int IsParallelTo(Vector3d other)'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool LineLine(Line lineA,Line lineB,double a,double b)']
    ]
  },
  {
    name: 'Intersectlines.py',
    code: `import Rhino
import scriptcontext

def IntersectLines():
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt( "Select lines" )
    go.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    go.GetMultiple( 2, 2)
    if go.CommandResult()!=Rhino.Commands.Result.Success:
      return go.CommandResult()
    if go.ObjectCount!=2: return Rhino.Commands.Result.Failure

    crv0 = go.Object(0).Geometry()
    crv1 = go.Object(1).Geometry()
    if not crv0 or not crv1: return Rhino.Commands.Result.Failure

    line0 = crv0.Line
    line1 = crv1.Line
    v0 = line0.Direction
    v0.Unitize()
    v1 = line1.Direction
    v1.Unitize()

    if v0.IsParallelTo(v1)!=0:
        print "Selected lines are parallel."
        return Rhino.Commands.Result.Nothing

    rc, a, b = Rhino.Geometry.Intersect.Intersection.LineLine(line0, line1)
    if not rc:
        print "No intersection found."
        return Rhino.Commands.Result.Nothing

    pt0 = line0.PointAt(a)
    pt1 = line1.PointAt(b)
    # pt0 and pt1 should be equal, so we will only add pt0 to the document
    scriptcontext.doc.Objects.AddPoint(pt0)
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    IntersectLines()`,
    members: [
      ['Rhino.Geometry.Line', 'Vector3d Direction'],
      ['Rhino.Geometry.Line', 'Point3d PointAt(double t)'],
      ['Rhino.Geometry.Vector3d', 'int IsParallelTo(Vector3d other)'],
      ['Rhino.Geometry.Intersect.Intersection', 'static bool LineLine(Line lineA,Line lineB,double a,double b)']
    ]
  },
  {
    name: 'Meshvolume.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input.Custom
Imports Rhino.Geometry
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class MeshVolumeCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbMeshVolume"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gm = New GetObject()
      gm.SetCommandPrompt("Select solid meshes for volume calculation")
      gm.GeometryFilter = ObjectType.Mesh
      gm.GeometryAttributeFilter = GeometryAttributeFilter.ClosedMesh
      gm.SubObjectSelect = False
      gm.GroupSelect = True
      gm.GetMultiple(1, 0)
      If gm.CommandResult() <> Result.Success Then
        Return gm.CommandResult()
      End If

      Dim volume As Double = 0.0
      Dim volume_error As Double = 0.0
      For Each obj_ref As ObjRef In gm.Objects()
        If obj_ref.Mesh() IsNot Nothing Then
          Dim mass_properties = VolumeMassProperties.Compute(obj_ref.Mesh())
          If mass_properties IsNot Nothing Then
            volume += mass_properties.Volume
            volume_error += mass_properties.VolumeError
          End If
        End If
      Next

      RhinoApp.WriteLine("Total volume = {0:f} (+/- {1:f})", volume, volume_error)
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.VolumeMassProperties', 'double Volume'],
      ['Rhino.Geometry.VolumeMassProperties', 'double VolumeError']
    ]
  },
  {
    name: 'Meshvolume.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input.Custom;
using Rhino.Geometry;
using Rhino.DocObjects;

namespace examples_cs
{
  public class MeshVolumeCommand : Command
  {
    public override string EnglishName { get { return "csMeshVolume"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gm = new GetObject();
      gm.SetCommandPrompt("Select solid meshes for volume calculation");
      gm.GeometryFilter = ObjectType.Mesh;
      gm.GeometryAttributeFilter = GeometryAttributeFilter.ClosedMesh;
      gm.SubObjectSelect = false;
      gm.GroupSelect = true;
      gm.GetMultiple(1, 0);
      if (gm.CommandResult() != Result.Success)
        return gm.CommandResult();

      double volume = 0.0;
      double volume_error = 0.0;
      foreach (var obj_ref in gm.Objects())
      {
        if (obj_ref.Mesh() != null)
        {
          var mass_properties = VolumeMassProperties.Compute(obj_ref.Mesh());
          if (mass_properties != null)
          {
            volume += mass_properties.Volume;
            volume_error += mass_properties.VolumeError;
          }
        }
      }

      RhinoApp.WriteLine("Total volume = {0:f} (+/- {1:f})", volume, volume_error);
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.VolumeMassProperties', 'double Volume'],
      ['Rhino.Geometry.VolumeMassProperties', 'double VolumeError']
    ]
  },
  {
    name: 'Meshvolume.py',
    code: `from Rhino.Input.Custom import *
from Rhino.DocObjects import ObjectType
from Rhino.Geometry import *
from Rhino.Commands import Result

def RunCommand():
  gm = GetObject()
  gm.SetCommandPrompt("Select solid meshes for volume calculation")
  gm.GeometryFilter = ObjectType.Mesh
  gm.GeometryAttributeFilter = GeometryAttributeFilter.ClosedMesh
  gm.SubObjectSelect = False
  gm.GroupSelect = True
  gm.GetMultiple(1, 0)
  if gm.CommandResult() != Result.Success:
    return gm.CommandResult()

  volume = 0.0
  volume_error = 0.0
  for obj_ref in gm.Objects():
    if obj_ref.Mesh() != None:
      mass_properties = VolumeMassProperties.Compute(obj_ref.Mesh())
      if mass_properties != None:
        volume += mass_properties.Volume
        volume_error += mass_properties.VolumeError

  print "Total volume = {0:f} (+/- {1:f})".format(volume, volume_error)
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.VolumeMassProperties', 'double Volume'],
      ['Rhino.Geometry.VolumeMassProperties', 'double VolumeError']
    ]
  },
  {
    name: 'Createmeshfrombrep.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class CreateMeshFromBrepCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCreateMeshFromBrep"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim objRef As ObjRef = Nothing
      Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select surface or polysurface to mesh", True, ObjectType.Surface Or ObjectType.PolysrfFilter, objRef)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim brep = objRef.Brep()
      If brep Is Nothing Then
        Return Result.Failure
      End If

      ' you could choose any one of these for example
      Dim jaggedAndFaster = MeshingParameters.Coarse
      Dim smoothAndSlower = MeshingParameters.Smooth
      Dim defaultMeshParams = MeshingParameters.Default
      Dim minimal = MeshingParameters.Minimal

      Dim meshes = Mesh.CreateFromBrep(brep, smoothAndSlower)
      If meshes Is Nothing OrElse meshes.Length = 0 Then
        Return Result.Failure
      End If

      Dim brepmesh = New Mesh()
      For Each facemesh As Mesh In meshes
        brepmesh.Append(facemesh)
      Next

      doc.Objects.AddMesh(brepmesh)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Coarse'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Default'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Minimal'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Smooth'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep,MeshingParameters meshingParameters)'],
      ['Rhino.Geometry.Mesh', 'void Append(Mesh other)']
    ]
  },
  {
    name: 'Createmeshfrombrep.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Geometry;
using Rhino.DocObjects;

namespace examples_cs
{
  public class CreateMeshFromBrepCommand : Command
  {
    public override string EnglishName { get { return "csCreateMeshFromBrep"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select surface or polysurface to mesh", true, ObjectType.Surface | ObjectType.PolysrfFilter, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var brep = obj_ref.Brep();
      if (null == brep)
        return Result.Failure;

      // you could choose anyone of these for example
      var jagged_and_faster = MeshingParameters.Coarse;
      var smooth_and_slower = MeshingParameters.Smooth;
      var default_mesh_params = MeshingParameters.Default;
      var minimal = MeshingParameters.Minimal;

      var meshes = Mesh.CreateFromBrep(brep, smooth_and_slower);
      if (meshes == null || meshes.Length == 0)
        return Result.Failure;

      var brep_mesh = new Mesh();
      foreach (var mesh in meshes)
        brep_mesh.Append(mesh);
      doc.Objects.AddMesh(brep_mesh);
      doc.Views.Redraw();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Coarse'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Default'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Minimal'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Smooth'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep,MeshingParameters meshingParameters)'],
      ['Rhino.Geometry.Mesh', 'void Append(Mesh other)']
    ]
  },
  {
    name: 'Createmeshfrombrep.py',
    code: `import Rhino
from Rhino.Geometry import *
from Rhino.Input import RhinoGet
from Rhino.Commands import Result
from Rhino.DocObjects import ObjectType
import rhinoscriptsyntax as rs
from scriptcontext import doc

def RunCommand():
  rc, objRef = RhinoGet.GetOneObject("Select surface or polysurface to mesh", True, 
                                     ObjectType.Surface | ObjectType.PolysrfFilter)
  if rc <> Result.Success:
    return rc
  brep = objRef.Brep()
  if None == brep:
    return Result.Failure

  jaggedAndFaster = MeshingParameters.Coarse
  smoothAndSlower = MeshingParameters.Smooth
  defaultMeshParams = MeshingParameters.Default
  minimal = MeshingParameters.Minimal

  meshes = Mesh.CreateFromBrep(brep, smoothAndSlower)
  if meshes == None or meshes.Length == 0:
    return Result.Failure

  brepMesh = Mesh()
  for mesh in meshes:
    brepMesh.Append(mesh)
  doc.Objects.AddMesh(brepMesh)
  doc.Views.Redraw()

if __name__ == "__main__":
  RunCommand()
`,
    members: [
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Coarse'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Default'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Minimal'],
      ['Rhino.Geometry.MeshingParameters', 'static MeshingParameters Smooth'],
      ['Rhino.Geometry.Mesh', 'static Mesh[] CreateFromBrep(Brep brep,MeshingParameters meshingParameters)'],
      ['Rhino.Geometry.Mesh', 'void Append(Mesh other)']
    ]
  },
  {
    name: 'Addmesh.vb',
    code: `Partial Class Examples
  Public Shared Function AddMesh(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim mesh As New Rhino.Geometry.Mesh()
    mesh.Vertices.Add(0.0, 0.0, 1.0) '0
    mesh.Vertices.Add(1.0, 0.0, 1.0) '1
    mesh.Vertices.Add(2.0, 0.0, 1.0) '2
    mesh.Vertices.Add(3.0, 0.0, 0.0) '3
    mesh.Vertices.Add(0.0, 1.0, 1.0) '4
    mesh.Vertices.Add(1.0, 1.0, 2.0) '5
    mesh.Vertices.Add(2.0, 1.0, 1.0) '6
    mesh.Vertices.Add(3.0, 1.0, 0.0) '7
    mesh.Vertices.Add(0.0, 2.0, 1.0) '8
    mesh.Vertices.Add(1.0, 2.0, 1.0) '9
    mesh.Vertices.Add(2.0, 2.0, 1.0) '10
    mesh.Vertices.Add(3.0, 2.0, 1.0) '11
    mesh.Faces.AddFace(0, 1, 5, 4)
    mesh.Faces.AddFace(1, 2, 6, 5)
    mesh.Faces.AddFace(2, 3, 7, 6)
    mesh.Faces.AddFace(4, 5, 9, 8)
    mesh.Faces.AddFace(5, 6, 10, 9)
    mesh.Faces.AddFace(6, 7, 11, 10)
    mesh.Normals.ComputeNormals()
    mesh.Compact()
    If doc.Objects.AddMesh(mesh) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Mesh', 'Mesh()'],
      ['Rhino.Geometry.Mesh', 'MeshFaceList Faces'],
      ['Rhino.Geometry.Mesh', 'MeshVertexNormalList Normals'],
      ['Rhino.Geometry.Mesh', 'MeshVertexList Vertices'],
      ['Rhino.Geometry.Mesh', 'bool Compact()'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(double x,double y,double z)'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(float x,float y,float z)'],
      ['Rhino.Geometry.Collections.MeshVertexNormalList', 'bool ComputeNormals()'],
      ['Rhino.Geometry.Collections.MeshFaceList', 'int AddFace(int vertex1,int vertex2,int vertex3,int vertex4)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddMesh(Mesh mesh)']
    ]
  },
  {
    name: 'Addmesh.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddMesh(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Mesh mesh = new Rhino.Geometry.Mesh();
    mesh.Vertices.Add(0.0, 0.0, 1.0); //0
    mesh.Vertices.Add(1.0, 0.0, 1.0); //1
    mesh.Vertices.Add(2.0, 0.0, 1.0); //2
    mesh.Vertices.Add(3.0, 0.0, 0.0); //3
    mesh.Vertices.Add(0.0, 1.0, 1.0); //4
    mesh.Vertices.Add(1.0, 1.0, 2.0); //5
    mesh.Vertices.Add(2.0, 1.0, 1.0); //6
    mesh.Vertices.Add(3.0, 1.0, 0.0); //7
    mesh.Vertices.Add(0.0, 2.0, 1.0); //8
    mesh.Vertices.Add(1.0, 2.0, 1.0); //9
    mesh.Vertices.Add(2.0, 2.0, 1.0); //10
    mesh.Vertices.Add(3.0, 2.0, 1.0); //11

    mesh.Faces.AddFace(0, 1, 5, 4);
    mesh.Faces.AddFace(1, 2, 6, 5);
    mesh.Faces.AddFace(2, 3, 7, 6);
    mesh.Faces.AddFace(4, 5, 9, 8);
    mesh.Faces.AddFace(5, 6, 10, 9);
    mesh.Faces.AddFace(6, 7, 11, 10);
    mesh.Normals.ComputeNormals();
    mesh.Compact();
    if (doc.Objects.AddMesh(mesh) != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}`,
    members: [
      ['Rhino.Geometry.Mesh', 'Mesh()'],
      ['Rhino.Geometry.Mesh', 'MeshFaceList Faces'],
      ['Rhino.Geometry.Mesh', 'MeshVertexNormalList Normals'],
      ['Rhino.Geometry.Mesh', 'MeshVertexList Vertices'],
      ['Rhino.Geometry.Mesh', 'bool Compact()'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(double x,double y,double z)'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(float x,float y,float z)'],
      ['Rhino.Geometry.Collections.MeshVertexNormalList', 'bool ComputeNormals()'],
      ['Rhino.Geometry.Collections.MeshFaceList', 'int AddFace(int vertex1,int vertex2,int vertex3,int vertex4)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddMesh(Mesh mesh)']
    ]
  },
  {
    name: 'Addmesh.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddMesh():
    mesh = Rhino.Geometry.Mesh()
    mesh.Vertices.Add(0.0, 0.0, 1.0) #0
    mesh.Vertices.Add(1.0, 0.0, 1.0) #1
    mesh.Vertices.Add(2.0, 0.0, 1.0) #2
    mesh.Vertices.Add(3.0, 0.0, 0.0) #3
    mesh.Vertices.Add(0.0, 1.0, 1.0) #4
    mesh.Vertices.Add(1.0, 1.0, 2.0) #5
    mesh.Vertices.Add(2.0, 1.0, 1.0) #6
    mesh.Vertices.Add(3.0, 1.0, 0.0) #7
    mesh.Vertices.Add(0.0, 2.0, 1.0) #8
    mesh.Vertices.Add(1.0, 2.0, 1.0) #9
    mesh.Vertices.Add(2.0, 2.0, 1.0) #10
    mesh.Vertices.Add(3.0, 2.0, 1.0) #11
    
    mesh.Faces.AddFace(0, 1, 5, 4)
    mesh.Faces.AddFace(1, 2, 6, 5)
    mesh.Faces.AddFace(2, 3, 7, 6)
    mesh.Faces.AddFace(4, 5, 9, 8)
    mesh.Faces.AddFace(5, 6, 10, 9)
    mesh.Faces.AddFace(6, 7, 11, 10)
    mesh.Normals.ComputeNormals()
    mesh.Compact()
    if scriptcontext.doc.Objects.AddMesh(mesh)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__=="__main__":
    AddMesh()
`,
    members: [
      ['Rhino.Geometry.Mesh', 'Mesh()'],
      ['Rhino.Geometry.Mesh', 'MeshFaceList Faces'],
      ['Rhino.Geometry.Mesh', 'MeshVertexNormalList Normals'],
      ['Rhino.Geometry.Mesh', 'MeshVertexList Vertices'],
      ['Rhino.Geometry.Mesh', 'bool Compact()'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(double x,double y,double z)'],
      ['Rhino.Geometry.Collections.MeshVertexList', 'int Add(float x,float y,float z)'],
      ['Rhino.Geometry.Collections.MeshVertexNormalList', 'bool ComputeNormals()'],
      ['Rhino.Geometry.Collections.MeshFaceList', 'int AddFace(int vertex1,int vertex2,int vertex3,int vertex4)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddMesh(Mesh mesh)']
    ]
  },
  {
    name: 'Dupmeshboundary.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input.Custom
Imports Rhino.Geometry
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class DupMeshBoundaryCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDupMeshBoundary"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gm = New GetObject()
      gm.SetCommandPrompt("Select open mesh")
      gm.GeometryFilter = ObjectType.Mesh
      gm.GeometryAttributeFilter = GeometryAttributeFilter.OpenMesh
      gm.[Get]()
      If gm.CommandResult() <> Result.Success Then
        Return gm.CommandResult()
      End If
      Dim mesh = gm.[Object](0).Mesh()
      If mesh Is Nothing Then
        Return Result.Failure
      End If

      Dim polylines = mesh.GetNakedEdges()
      For Each polyline As Polyline In polylines
        doc.Objects.AddPolyline(polyline)
      Next

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Mesh', 'Polyline[] GetNakedEdges()']
    ]
  },
  {
    name: 'Dupmeshboundary.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input.Custom;
using Rhino.DocObjects;

namespace examples_cs
{
  public class DupMeshBoundaryCommand : Command
  {
    public override string EnglishName { get { return "csDupMeshBoundary"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gm = new GetObject();
      gm.SetCommandPrompt("Select open mesh");
      gm.GeometryFilter = ObjectType.Mesh;
      gm.GeometryAttributeFilter = GeometryAttributeFilter.OpenMesh;
      gm.Get();
      if (gm.CommandResult() != Result.Success)
        return gm.CommandResult();
      var mesh = gm.Object(0).Mesh();
      if (mesh == null)
        return Result.Failure;

      var polylines = mesh.GetNakedEdges();
      foreach (var polyline in polylines)
      {
        doc.Objects.AddPolyline(polyline);
      }

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Mesh', 'Polyline[] GetNakedEdges()']
    ]
  },
  {
    name: 'Dupmeshboundary.py',
    code: `from Rhino.Commands import *
from Rhino.Input.Custom import *
from Rhino.DocObjects import *
from scriptcontext import doc

def RunCommand():
  gm = GetObject()
  gm.SetCommandPrompt("Select open mesh")
  gm.GeometryFilter = ObjectType.Mesh
  gm.GeometryAttributeFilter = GeometryAttributeFilter.OpenMesh
  gm.Get()
  if gm.CommandResult() != Result.Success:
    return gm.CommandResult()
  mesh = gm.Object(0).Mesh()
  if mesh == None:
    return Result.Failure

  polylines = mesh.GetNakedEdges()
  for polyline in polylines:
    doc.Objects.AddPolyline(polyline)
  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.Mesh', 'Polyline[] GetNakedEdges()']
    ]
  },
  {
    name: 'Addnurbscircle.vb',
    code: `Partial Class Examples
  Public Shared Function AddNurbsCircle(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' The easy way to get a NURBS curve from a circle is with
    ' the following two lines of code.
    '
    ' Dim c As New Rhino.Geometry.Circle(20)
    ' Dim nc As Rhino.Geometry.NurbsCurve = c.ToNurbsCurve()
    '
    ' This sample demonstrates creating a NURBS curve from scratch.
    Const dimension As Integer = 3
    Const isRational As Boolean = True
    Const order As Integer = 3
    Const cv_count As Integer = 9
    Dim nc As New Rhino.Geometry.NurbsCurve(dimension, isRational, order, cv_count)
    nc.Points.SetPoint(0, 1.0, 0.0, 0.0, 1.0)
    nc.Points.SetPoint(1, 0.707107, 0.707107, 0.0, 0.707107)
    nc.Points.SetPoint(2, 0.0, 1.0, 0.0, 1.0)
    nc.Points.SetPoint(3, -0.707107, 0.707107, 0.0, 0.707107)
    nc.Points.SetPoint(4, -1.0, 0.0, 0.0, 1.0)
    nc.Points.SetPoint(5, -0.707107, -0.707107, 0.0, 0.707107)
    nc.Points.SetPoint(6, 0.0, -1.0, 0.0, 1.0)
    nc.Points.SetPoint(7, 0.707107, -0.707107, 0.0, 0.707107)
    nc.Points.SetPoint(8, 1.0, 0.0, 0.0, 1.0)
    nc.Knots(0) = 0.0
    nc.Knots(1) = 0.0
    nc.Knots(2) = 0.5 * Math.PI
    nc.Knots(3) = 0.5 * Math.PI
    nc.Knots(4) = Math.PI
    nc.Knots(5) = Math.PI
    nc.Knots(6) = 1.5 * Math.PI
    nc.Knots(7) = 1.5 * Math.PI
    nc.Knots(8) = 2.0 * Math.PI
    nc.Knots(9) = 2.0 * Math.PI
    If nc.IsValid Then
      doc.Objects.AddCurve(nc)
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurve(int dimension,bool rational,int order,int pointCount)'],
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurveKnotList Knots'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCurve(Curve curve)']
    ]
  },
  {
    name: 'Addnurbscircle.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddNurbsCircle(Rhino.RhinoDoc doc)
  {
    // The easy way to get a NURBS curve from a circle is with
    // the following two lines of code.
    //
    // Rhino.Geometry.Circle c = new Rhino.Geometry.Circle(20);
    // Rhino.Geometry.NurbsCurve nc = c.ToNurbsCurve();
    //
    // This sample demonstrates creating a NURBS curve from scratch.
    const int dimension = 3;
    const bool isRational = true;
    const int order = 3;
    const int cv_count = 9;
    Rhino.Geometry.NurbsCurve nc = new Rhino.Geometry.NurbsCurve(dimension, isRational, order, cv_count);
    nc.Points.SetPoint(0, 1.0, 0.0, 0.0, 1.0);
    nc.Points.SetPoint(1, 0.707107, 0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(2, 0.0, 1.0, 0.0, 1.0);
    nc.Points.SetPoint(3, -0.707107, 0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(4, -1.0, 0.0, 0.0, 1.0);
    nc.Points.SetPoint(5, -0.707107, -0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(6, 0.0, -1.0, 0.0, 1.0);
    nc.Points.SetPoint(7, 0.707107, -0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(8, 1.0, 0.0, 0.0, 1.0);
    nc.Knots[0] = 0.0;
    nc.Knots[1] = 0.0;
    nc.Knots[2] = 0.5 * Math.PI;
    nc.Knots[3] = 0.5 * Math.PI;
    nc.Knots[4] = Math.PI;
    nc.Knots[5] = Math.PI;
    nc.Knots[6] = 1.5 * Math.PI;
    nc.Knots[7] = 1.5 * Math.PI;
    nc.Knots[8] = 2.0 * Math.PI;
    nc.Knots[9] = 2.0 * Math.PI;
    if (nc.IsValid)
    {
      doc.Objects.AddCurve(nc);
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurve(int dimension,bool rational,int order,int pointCount)'],
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurveKnotList Knots'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCurve(Curve curve)']
    ]
  },
  {
    name: 'Addnurbscircle.py',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddNurbsCircle(Rhino.RhinoDoc doc)
  {
    // The easy way to get a NURBS curve from a circle is with
    // the following two lines of code.
    //
    // Rhino.Geometry.Circle c = new Rhino.Geometry.Circle(20);
    // Rhino.Geometry.NurbsCurve nc = c.ToNurbsCurve();
    //
    // This sample demonstrates creating a NURBS curve from scratch.
    int dimension = 3;
    bool isRational = true;
    int order = 3;
    int cv_count = 9;
    Rhino.Geometry.NurbsCurve nc = new Rhino.Geometry.NurbsCurve(dimension, isRational, order, cv_count);
    nc.Points.SetPoint(0, 1.0, 0.0, 0.0, 1.0);
    nc.Points.SetPoint(1, 0.707107, 0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(2, 0.0, 1.0, 0.0, 1.0);
    nc.Points.SetPoint(3, -0.707107, 0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(4, -1.0, 0.0, 0.0, 1.0);
    nc.Points.SetPoint(5, -0.707107, -0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(6, 0.0, -1.0, 0.0, 1.0);
    nc.Points.SetPoint(7, 0.707107, -0.707107, 0.0, 0.707107);
    nc.Points.SetPoint(8, 1.0, 0.0, 0.0, 1.0);
    nc.Knots[0] = 0.0;
    nc.Knots[1] = 0.0;
    nc.Knots[2] = 0.5 * Math.PI;
    nc.Knots[3] = 0.5 * Math.PI;
    nc.Knots[4] = Math.PI;
    nc.Knots[5] = Math.PI;
    nc.Knots[6] = 1.5 * Math.PI;
    nc.Knots[7] = 1.5 * Math.PI;
    nc.Knots[8] = 2.0 * Math.PI;
    nc.Knots[9] = 2.0 * Math.PI;
    if (nc.IsValid)
    {
      doc.Objects.AddCurve(nc);
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurve(int dimension,bool rational,int order,int pointCount)'],
      ['Rhino.Geometry.NurbsCurve', 'NurbsCurveKnotList Knots'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddCurve(Curve curve)']
    ]
  },
  {
    name: 'Addnurbscurve.vb',
    code: `Partial Class Examples
  Public Shared Function AddNurbsCurve(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim points As New Rhino.Collections.Point3dList(5)
    points.Add(0, 0, 0)
    points.Add(0, 2, 0)
    points.Add(2, 3, 0)
    points.Add(4, 2, 0)
    points.Add(4, 0, 0)
    Dim nc As Rhino.Geometry.NurbsCurve = Rhino.Geometry.NurbsCurve.Create(False, 3, points)
    Dim rc As Rhino.Commands.Result = Rhino.Commands.Result.Failure
    If nc IsNot Nothing AndAlso nc.IsValid Then
      If doc.Objects.AddCurve(nc) <> Guid.Empty Then
        doc.Views.Redraw()
        rc = Rhino.Commands.Result.Success
      End If
    End If
    Return rc
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'static NurbsCurve Create(bool periodic,int degree,IEnumerable<Point3d> points)'],
      ['Rhino.Collections.Point3dList', 'Point3dList(int initialCapacity)'],
      ['Rhino.Collections.Point3dList', 'void Add(double x,double y,double z)']
    ]
  },
  {
    name: 'Addnurbscurve.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddNurbsCurve(Rhino.RhinoDoc doc)
  {
    Rhino.Collections.Point3dList points = new Rhino.Collections.Point3dList(5);
    points.Add(0, 0, 0);
    points.Add(0, 2, 0);
    points.Add(2, 3, 0);
    points.Add(4, 2, 0);
    points.Add(4, 0, 0);
    Rhino.Geometry.NurbsCurve nc = Rhino.Geometry.NurbsCurve.Create(false, 3, points);
    Rhino.Commands.Result rc = Rhino.Commands.Result.Failure;
    if (nc != null && nc.IsValid)
    {
      if (doc.Objects.AddCurve(nc) != Guid.Empty)
      {
        doc.Views.Redraw();
        rc = Rhino.Commands.Result.Success;
      }
    }
    return rc;
  }
}
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'static NurbsCurve Create(bool periodic,int degree,IEnumerable<Point3d> points)'],
      ['Rhino.Collections.Point3dList', 'Point3dList(int initialCapacity)'],
      ['Rhino.Collections.Point3dList', 'void Add(double x,double y,double z)']
    ]
  },
  {
    name: 'Addnurbscurve.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddNurbsCurve():
    points = Rhino.Collections.Point3dList(5)
    points.Add(0, 0, 0)
    points.Add(0, 2, 0)
    points.Add(2, 3, 0)
    points.Add(4, 2, 0)
    points.Add(4, 0, 0)

    nc = Rhino.Geometry.NurbsCurve.Create(False, 3, points)
    rc = Rhino.Commands.Result.Failure
    if nc and nc.IsValid:
        if scriptcontext.doc.Objects.AddCurve(nc)!=System.Guid.Empty:
            scriptcontext.doc.Views.Redraw()
            rc = Rhino.Commands.Result.Success
    return rc

if __name__=="__main__":
    AddNurbsCurve()
`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'static NurbsCurve Create(bool periodic,int degree,IEnumerable<Point3d> points)'],
      ['Rhino.Collections.Point3dList', 'Point3dList(int initialCapacity)'],
      ['Rhino.Collections.Point3dList', 'void Add(double x,double y,double z)']
    ]
  },
  {
    name: 'Nurbscurveincreasedegree.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class NurbsCurveIncreaseDegreeCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbNurbsCrvIncreaseDegree"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef
      Dim rc = RhinoGet.GetOneObject("Select curve", False, ObjectType.Curve, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      If obj_ref Is Nothing Then
        Return Result.Failure
      End If
      Dim curve = obj_ref.Curve()
      If curve Is Nothing Then
        Return Result.Failure
      End If
      Dim nurbs_curve = curve.ToNurbsCurve()

      Dim new_degree As Integer = -1
      rc = RhinoGet.GetInteger(String.Format("New degree <{0}...11>", nurbs_curve.Degree), True, new_degree, nurbs_curve.Degree, 11)
      If rc <> Result.Success Then
        Return rc
      End If

      rc = Result.Failure
      If nurbs_curve.IncreaseDegree(new_degree) Then
        If doc.Objects.Replace(obj_ref.ObjectId, nurbs_curve) Then
          rc = Result.Success
        End If
      End If

      RhinoApp.WriteLine("Result: {0}", rc.ToString())
      doc.Views.Redraw()
      Return rc
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'bool IncreaseDegree(int desiredDegree)']
    ]
  },
  {
    name: 'Nurbscurveincreasedegree.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class NurbsCurveIncreaseDegreeCommand : Command
  {
    public override string EnglishName { get { return "csNurbsCrvIncreaseDegree"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject(
        "Select curve", false, ObjectType.Curve, out obj_ref);
      if (rc != Result.Success) return rc;
      if (obj_ref == null) return Result.Failure;
      var curve = obj_ref.Curve();
      if (curve == null) return Result.Failure;
      var nurbs_curve = curve.ToNurbsCurve();

      int new_degree = -1;
      rc = RhinoGet.GetInteger(string.Format("New degree <{0}...11>", nurbs_curve.Degree), true, ref new_degree,
        nurbs_curve.Degree, 11);
      if (rc != Result.Success) return rc;

      rc = Result.Failure;
      if (nurbs_curve.IncreaseDegree(new_degree))
        if (doc.Objects.Replace(obj_ref.ObjectId, nurbs_curve))
          rc = Result.Success;

      RhinoApp.WriteLine("Result: {0}", rc.ToString());
      doc.Views.Redraw();
      return rc;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'bool IncreaseDegree(int desiredDegree)']
    ]
  },
  {
    name: 'Nurbscurveincreasedegree.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.DocObjects import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("Select curve", False, ObjectType.Curve)
  if rc != Result.Success: return rc
  if obj_ref == None: return Result.Failure
  curve = obj_ref.Curve()
  if curve == None: return Result.Failure
  nurbs_curve = curve.ToNurbsCurve()

  new_degree = -1
  rc, new_degree = RhinoGet.GetInteger(
    "New degree <{0}...11>".format(nurbs_curve.Degree), True, new_degree, nurbs_curve.Degree, 11)
  if rc != Result.Success: return rc

  rc = Result.Failure
  if nurbs_curve.IncreaseDegree(new_degree):
    if doc.Objects.Replace(obj_ref.ObjectId, nurbs_curve):
      rc = Result.Success

  print "Result: {0}".format(rc)
  doc.Views.Redraw()
  return rc

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.NurbsCurve', 'bool IncreaseDegree(int desiredDegree)']
    ]
  },
  {
    name: 'Createsurfaceexample.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry

Namespace examples_vb
  <System.Runtime.InteropServices.Guid("652FCBE5-D8DC-4472-AB94-5A70998A3895")> _
  Public Class CreateSurfaceFromPointsAndKnotsCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCreateSurfaceFromPointsAndKnots"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Const isRational As Boolean = False
      Const numberOfDimensions As Integer = 3
      Const uDegree As Integer = 2
      Const vDegree As Integer = 3
      Const uControlPointCount As Integer = 3
      Const vControlPointCount As Integer = 5

      ' The knot vectors do NOT have the 2 superfluous knots
      ' at the start and end of the knot vector.  If you are
      ' coming from a system that has the 2 superfluous knots,
      ' just ignore them when creating NURBS surfaces.
      Dim uKnots = New Double(uControlPointCount + uDegree - 2) {}
      Dim vKnots = New Double(vControlPointCount + vDegree - 2) {}

      ' make up a quadratic knot vector with no interior knots
      uKnots(0) = InlineAssignHelper(uKnots(1), 0.0)
      uKnots(2) = InlineAssignHelper(uKnots(3), 1.0)

      ' make up a cubic knot vector with one simple interior knot
      vKnots(0) = InlineAssignHelper(vKnots(1), InlineAssignHelper(vKnots(2), 0.0))
      vKnots(3) = 1.5
      vKnots(4) = InlineAssignHelper(vKnots(5), InlineAssignHelper(vKnots(6), 2.0))

      ' Rational control points can be in either homogeneous
      ' or euclidean form. Non-rational control points do not
      ' need to specify a weight.  
      Dim controlPoints = New Point3d(uControlPointCount - 1, vControlPointCount - 1) {}

      For u As Integer = 0 To uControlPointCount - 1
        For v As Integer = 0 To vControlPointCount - 1
          controlPoints(u, v) = New Point3d(u, v, u - v)
        Next
      Next

      ' creates internal uninitialized arrays for 
      ' control points and knots
      Dim nurbsSurface__1 = NurbsSurface.Create(numberOfDimensions, isRational, uDegree + 1, vDegree + 1, uControlPointCount, vControlPointCount)

      ' add the knots
      For u As Integer = 0 To nurbsSurface__1.KnotsU.Count - 1
        nurbsSurface__1.KnotsU(u) = uKnots(u)
      Next
      For v As Integer = 0 To nurbsSurface__1.KnotsV.Count - 1
        nurbsSurface__1.KnotsV(v) = vKnots(v)
      Next

      ' add the control points
      For u As Integer = 0 To nurbsSurface__1.Points.CountU - 1
        For v As Integer = 0 To nurbsSurface__1.Points.CountV - 1
          nurbsSurface__1.Points.SetControlPoint(u, v, controlPoints(u, v))
        Next
      Next

      If nurbsSurface__1.IsValid Then
        doc.Objects.AddSurface(nurbsSurface__1)
        doc.Views.Redraw()
        Return Result.Success
      Else
        Return Result.Failure
      End If
    End Function
    Private Shared Function InlineAssignHelper(Of T)(ByRef target As T, value As T) As T
      target = value
      Return value
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsU'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsV'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfacePointList Points'],
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface Create(int dimension,bool isRational,int order0,int order1,int controlPointCount0,int controlPointCount1)']
    ]
  },
  {
    name: 'Createsurfaceexample.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Geometry;

namespace examples_cs
{
  public class CreateSurfaceFromPointsAndKnotsCommand : Command
  {
    public override string EnglishName { get { return "csCreateSurfaceFromPointsAndKnots"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      const bool is_rational = false;
      const int number_of_dimensions = 3;
      const int u_degree = 2;
      const int v_degree = 3;
      const int u_control_point_count = 3;
      const int v_control_point_count = 5;
     
      // The knot vectors do NOT have the 2 superfluous knots
      // at the start and end of the knot vector.  If you are
      // coming from a system that has the 2 superfluous knots,
      // just ignore them when creating NURBS surfaces.
      var u_knots = new double[u_control_point_count + u_degree - 1];
      var v_knots = new double[v_control_point_count + v_degree - 1];
     
      // make up a quadratic knot vector with no interior knots
      u_knots[0] = u_knots[1] = 0.0;
      u_knots[2] = u_knots[3] = 1.0;
     
      // make up a cubic knot vector with one simple interior knot
      v_knots[0] = v_knots[1] = v_knots[2] = 0.0;
      v_knots[3] = 1.5;
      v_knots[4] = v_knots[5] = v_knots[6] = 2.0;
     
      // Rational control points can be in either homogeneous
      // or euclidean form. Non-rational control points do not
      // need to specify a weight.  
      var control_points = new Point3d[u_control_point_count, v_control_point_count];

      for (int u = 0; u < u_control_point_count; u++)
      {
        for (int v = 0; v < v_control_point_count; v++)
        {
          control_points[u,v] = new Point3d(u, v, u-v);
        }
      }
     
      // creates internal uninitialized arrays for 
      // control points and knots
      var nurbs_surface = NurbsSurface.Create(
        number_of_dimensions,
        is_rational,
        u_degree + 1,
        v_degree + 1,
        u_control_point_count,
        v_control_point_count
        );
     
      // add the knots
      for (int u = 0;  u < nurbs_surface.KnotsU.Count; u++)
        nurbs_surface.KnotsU[u] = u_knots[u];
      for (int v = 0; v < nurbs_surface.KnotsV.Count; v++)
        nurbs_surface.KnotsV[v] = v_knots[v];

      // add the control points
      for (int u = 0; u < nurbs_surface.Points.CountU; u++)
      {
        for (int v = 0; v < nurbs_surface.Points.CountV; v++)
        {
          nurbs_surface.Points.SetControlPoint(u, v, control_points[u, v]);
        }
      }

      if (nurbs_surface.IsValid)
      {
        doc.Objects.AddSurface(nurbs_surface);
        doc.Views.Redraw();
        return Result.Success;
      }
      return Result.Failure;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsU'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsV'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfacePointList Points'],
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface Create(int dimension,bool isRational,int order0,int order1,int controlPointCount0,int controlPointCount1)']
    ]
  },
  {
    name: 'Createsurfaceexample.py',
    code: `from Rhino.Geometry import Point3d, NurbsSurface, ControlPoint
from scriptcontext import doc

def RunCommand():
  bIsRational = False
  dim = 3
  u_degree = 2
  v_degree = 3
  u_cv_count = 3
  v_cv_count = 5
 
  # make up a quadratic knot vector with no interior knots
  u_knot = [0.0, 0.0, 1.0, 1.0] 
 
  # make up a cubic knot vector with one simple interior knot
  v_knot = [0.0, 0.0, 0.0, 1.5, 2.0, 2.0, 2.0]
 
  # Rational control points can be in either homogeneous
  # or euclidean form. Non-rational control points do not
  # need to specify a weight.  
  CV = dict( ((i,j),None) for i in range(2) for j in range(3) )
  for i in range(0, u_cv_count):
    for j in range(0, v_cv_count):
      CV[i,j] = Point3d(i, j, i-j)
 
  # creates internal uninitialized arrays for 
  # control points and knots
  nurbs_surface = NurbsSurface.Create(
    dim,
    bIsRational,
    u_degree + 1,
    v_degree + 1,
    u_cv_count,
    v_cv_count
    )
 
  # add the knots
  for i in range(0, nurbs_surface.KnotsU.Count):
    nurbs_surface.KnotsU[i] = u_knot[i]
  for j in range(0, nurbs_surface.KnotsV.Count):
    nurbs_surface.KnotsV[j] = v_knot[j]

  # add the control points
  for i in range(0, nurbs_surface.Points.CountU):
    for j in range(0, nurbs_surface.Points.CountV):
      nurbs_surface.Points.SetControlPoint(i, j, ControlPoint(CV[i, j]))

  if nurbs_surface.IsValid:
    doc.Objects.AddSurface(nurbs_surface)
    doc.Views.Redraw()

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsU'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfaceKnotList KnotsV'],
      ['Rhino.Geometry.NurbsSurface', 'NurbsSurfacePointList Points'],
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface Create(int dimension,bool isRational,int order0,int order1,int controlPointCount0,int controlPointCount1)']
    ]
  },
  {
    name: 'Srfpt.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands

Namespace examples_vb
  Public Class SurfaceFromCornersCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbSurfaceFromCorners"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim surface = NurbsSurface.CreateFromCorners(
        New Point3d(5, 0, 0),
        New Point3d(5, 5, 5),
        New Point3d(0, 5, 0),
        New Point3d(0, 0, 0))

      doc.Objects.AddSurface(surface)
      doc.Views.Redraw()

      Return Rhino.Commands.Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4)']
    ]
  },
  {
    name: 'Srfpt.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;

namespace examples_cs
{
  public class SurfaceFromCornersCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csSurfaceFromCorners"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var surface = NurbsSurface.CreateFromCorners(
        new Point3d(5, 0, 0),
        new Point3d(5, 5, 5),
        new Point3d(0, 5, 0),
        new Point3d(0, 0, 0));

      doc.Objects.AddSurface(surface);
      doc.Views.Redraw();

      return Rhino.Commands.Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4)']
    ]
  },
  {
    name: 'Srfpt.py',
    code: `from Rhino.Geometry import NurbsSurface, Point3d
from scriptcontext import doc

surface = NurbsSurface.CreateFromCorners(
  Point3d(5, 0, 0),
  Point3d(5, 5, 5),
  Point3d(0, 5, 0),
  Point3d(0, 0, 0));

doc.Objects.AddSurface(surface);
doc.Views.Redraw();`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4)']
    ]
  },
  {
    name: 'Nurbssurfaceincreasedegree.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class NurbsSurfaceIncreaseDegreeCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbNurbsSrfIncreaseDegree"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef
      Dim rc = RhinoGet.GetOneObject("Select surface", False, ObjectType.Surface, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      If obj_ref Is Nothing Then
        Return Result.Failure
      End If
      Dim surface = obj_ref.Surface()
      If surface Is Nothing Then
        Return Result.Failure
      End If
      Dim nurbs_surface = surface.ToNurbsSurface()

      Dim new_u_degree As Integer = -1
      rc = RhinoGet.GetInteger(String.Format("New U degree <{0}...11>", nurbs_surface.Degree(0)), True, new_u_degree, nurbs_surface.Degree(0), 11)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim new_v_degree As Integer = -1
      rc = RhinoGet.GetInteger(String.Format("New V degree <{0}...11>", nurbs_surface.Degree(1)), True, new_v_degree, nurbs_surface.Degree(1), 11)
      If rc <> Result.Success Then
        Return rc
      End If

      rc = Result.Failure
      If nurbs_surface.IncreaseDegreeU(new_u_degree) Then
        If nurbs_surface.IncreaseDegreeV(new_v_degree) Then
          If doc.Objects.Replace(obj_ref.ObjectId, nurbs_surface) Then
            rc = Result.Success
          End If
        End If
      End If

      RhinoApp.WriteLine("Result: {0}", rc.ToString())
      doc.Views.Redraw()
      Return rc
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeU(int desiredDegree)'],
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeV(int desiredDegree)']
    ]
  },
  {
    name: 'Nurbssurfaceincreasedegree.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class NurbsSurfaceIncreaseDegreeCommand : Command
  {
    public override string EnglishName { get { return "csNurbsSrfIncreaseDegree"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject(
        "Select surface", false, ObjectType.Surface, out obj_ref);
      if (rc != Result.Success) return rc;
      if (obj_ref == null) return Result.Failure;
      var surface = obj_ref.Surface();
      if (surface == null) return Result.Failure;
      var nurbs_surface = surface.ToNurbsSurface();

      int new_u_degree = -1;
      rc = RhinoGet.GetInteger(string.Format("New U degree <{0}...11>", nurbs_surface.Degree(0)), true, ref new_u_degree,
        nurbs_surface.Degree(0), 11);
      if (rc != Result.Success) return rc;
      
      int new_v_degree = -1;
      rc = RhinoGet.GetInteger(string.Format("New V degree <{0}...11>", nurbs_surface.Degree(1)), true, ref new_v_degree,
        nurbs_surface.Degree(1), 11);
      if (rc != Result.Success) return rc;

      rc = Result.Failure;
      if (nurbs_surface.IncreaseDegreeU(new_u_degree))
        if (nurbs_surface.IncreaseDegreeV(new_v_degree))
          if (doc.Objects.Replace(obj_ref.ObjectId, nurbs_surface))
            rc = Result.Success;

      RhinoApp.WriteLine("Result: {0}", rc.ToString());
      doc.Views.Redraw();
      return rc;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeU(int desiredDegree)'],
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeV(int desiredDegree)']
    ]
  },
  {
    name: 'Nurbssurfaceincreasedegree.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.DocObjects import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("Select surface", False, ObjectType.Surface)
  if rc != Result.Success: return rc
  if obj_ref == None: return Result.Failure
  surface = obj_ref.Surface()
  if surface == None: return Result.Failure
  nurbs_surface = surface.ToNurbsSurface()

  new_u_degree = -1
  rc, new_u_degree = RhinoGet.GetInteger(
    "New U degree <{0}...11>".format(nurbs_surface.Degree(0)), True, new_u_degree, nurbs_surface.Degree(0), 11)
  if rc != Result.Success: return rc
  
  new_v_degree = -1
  rc, new_v_degree = RhinoGet.GetInteger(
    "New V degree <{0}...11>".format(nurbs_surface.Degree(1)), True, new_v_degree, nurbs_surface.Degree(1), 11)
  if rc != Result.Success: return rc

  rc = Result.Failure
  if nurbs_surface.IncreaseDegreeU(new_u_degree):
    if nurbs_surface.IncreaseDegreeV(new_v_degree):
      if doc.Objects.Replace(obj_ref.ObjectId, nurbs_surface):
        rc = Result.Success

  print "Result: {0}".format(rc)
  doc.Views.Redraw()
  return rc

if __name__=="__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeU(int desiredDegree)'],
      ['Rhino.Geometry.NurbsSurface', 'bool IncreaseDegreeV(int desiredDegree)']
    ]
  },
  {
    name: 'Addclippingplane.vb',
    code: `Partial Class Examples
  Public Shared Function AddClippingPlane(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Define the corners of the clipping plane
    Dim corners As Rhino.Geometry.Point3d() = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetRectangle(corners)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    ' Get the active view
    Dim view As Rhino.Display.RhinoView = doc.Views.ActiveView
    If view Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim p0 As Rhino.Geometry.Point3d = corners(0)
    Dim p1 As Rhino.Geometry.Point3d = corners(1)
    Dim p3 As Rhino.Geometry.Point3d = corners(3)

    ' Create a plane from the corner points
    Dim plane As New Rhino.Geometry.Plane(p0, p1, p3)

    ' Add a clipping plane object to the document
    Dim id As Guid = doc.Objects.AddClippingPlane(plane, p0.DistanceTo(p1), p0.DistanceTo(p3), view.ActiveViewportID)
    If id <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Point3d xPoint,Point3d yPoint)'],
      ['Rhino.FileIO.File3dmObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)'],
      ['Rhino.Input.RhinoGet', 'static Result GetRectangle(Point3d[] corners)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)']
    ]
  },
  {
    name: 'Addclippingplane.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddClippingPlane(Rhino.RhinoDoc doc)
  {
    // Define the corners of the clipping plane
    Rhino.Geometry.Point3d[] corners;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetRectangle(out corners);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    // Get the active view
    Rhino.Display.RhinoView view = doc.Views.ActiveView;
    if (view == null)
      return Rhino.Commands.Result.Failure;

    Rhino.Geometry.Point3d p0 = corners[0];
    Rhino.Geometry.Point3d p1 = corners[1];
    Rhino.Geometry.Point3d p3 = corners[3];

    // Create a plane from the corner points
    Rhino.Geometry.Plane plane = new Rhino.Geometry.Plane(p0, p1, p3);

    // Add a clipping plane object to the document
    Guid id = doc.Objects.AddClippingPlane(plane, p0.DistanceTo(p1), p0.DistanceTo(p3), view.ActiveViewportID);
    if (id != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Point3d xPoint,Point3d yPoint)'],
      ['Rhino.FileIO.File3dmObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)'],
      ['Rhino.Input.RhinoGet', 'static Result GetRectangle(Point3d[] corners)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)']
    ]
  },
  {
    name: 'Addclippingplane.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddClippingPlane():
    # Define the corners of the clipping plane
    rc, corners = Rhino.Input.RhinoGet.GetRectangle()
    if rc!=Rhino.Commands.Result.Success: return rc

    # Get the active view
    view = scriptcontext.doc.Views.ActiveView
    if view is None: return Rhino.Commands.Result.Failure

    p0, p1, p2, p3 = corners
    # Create a plane from the corner points
    plane = Rhino.Geometry.Plane(p0, p1, p3)

    # Add a clipping plane object to the document
    id = scriptcontext.doc.Objects.AddClippingPlane(plane, p0.DistanceTo(p1), p0.DistanceTo(p3), view.ActiveViewportID)
    if id!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    AddClippingPlane()
`,
    members: [
      ['Rhino.Geometry.Plane', 'Plane(Point3d origin,Point3d xPoint,Point3d yPoint)'],
      ['Rhino.FileIO.File3dmObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)'],
      ['Rhino.Input.RhinoGet', 'static Result GetRectangle(Point3d[] corners)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)']
    ]
  },
  {
    name: 'Issurfaceinplane.vb',
    code: `Imports System.Linq
Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input

Namespace examples_vb
  Public Class IsPlanarSurfaceInPlaneCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbIsPlanarSurfaceInPlane"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("select surface", True, ObjectType.Surface, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim surface = obj_ref.Surface()

      Dim corners As Point3d() = Nothing
      rc = RhinoGet.GetRectangle(corners)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim plane = New Plane(corners(0), corners(1), corners(2))

      Dim is_or_isnt = If(IsSurfaceInPlane(surface, plane, doc.ModelAbsoluteTolerance), "", " not ")
      RhinoApp.WriteLine("Surface is{0} in plane.", is_or_isnt)
      Return Result.Success
    End Function

    Private Function IsSurfaceInPlane(surface As Surface, plane As Plane, tolerance As Double) As Boolean
      If Not surface.IsPlanar(tolerance) Then
        Return False
      End If

      Dim bbox = surface.GetBoundingBox(True)
      Return bbox.GetCorners().All(Function(corner) Math.Abs(plane.DistanceTo(corner)) <= tolerance)
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Plane', 'double DistanceTo(Point3d testPoint)'],
      ['Rhino.Geometry.Surface', 'bool IsPlanar()']
    ]
  },
  {
    name: 'Issurfaceinplane.cs',
    code: `using System.Linq;
using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input;

namespace examples_cs
{
  public class IsPlanarSurfaceInPlaneCommand : Command
  {
    public override string EnglishName { get { return "csIsPlanarSurfaceInPlane"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("select surface", true, ObjectType.Surface, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var surface = obj_ref.Surface();

      Point3d[] corners;
      rc = RhinoGet.GetRectangle(out corners);
      if (rc != Result.Success)
        return rc;

      var plane = new Plane(corners[0], corners[1], corners[2]);

      var is_or_isnt = "";
      if (IsSurfaceInPlane(surface, plane, doc.ModelAbsoluteTolerance))
        is_or_isnt = " not ";

      RhinoApp.WriteLine("Surface is{0} in plane.", is_or_isnt);
      return Result.Success;
    }

    private bool IsSurfaceInPlane(Surface surface, Plane plane, double tolerance)
    {
      if (!surface.IsPlanar(tolerance))
        return false;
     
      var bbox = surface.GetBoundingBox(true);
      return bbox.GetCorners().All(
        corner => System.Math.Abs(plane.DistanceTo(corner)) <= tolerance);
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Plane', 'double DistanceTo(Point3d testPoint)'],
      ['Rhino.Geometry.Surface', 'bool IsPlanar()']
    ]
  },
  {
    name: 'Issurfaceinplane.py',
    code: `import Rhino
from Rhino.Geometry import *
import rhinoscriptsyntax as rs
from scriptcontext import doc
import math

def RunCommand():
  surface_id = rs.GetSurfaceObject()[0]
  if surface_id == None:
    return
  surface = rs.coercesurface(surface_id)

  corners = rs.GetRectangle()
  if corners == None:
    return
    
  plane = Plane(corners[0], corners[1], corners[2])

  is_or_isnt = "" if IsSurfaceInPlane(surface, plane, doc.ModelAbsoluteTolerance) else " not "
  print "Surface is{0} in plane.".format(is_or_isnt)

def IsSurfaceInPlane(surface, plane, tolerance):
  if not surface.IsPlanar(tolerance):
    return False
 
  bbox = surface.GetBoundingBox(True)
  rc = True
  for corner in bbox.GetCorners():
      if math.fabs(plane.DistanceTo(corner)) > tolerance:
          rc = False
          break
          
  return rc

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.Plane', 'double DistanceTo(Point3d testPoint)'],
      ['Rhino.Geometry.Surface', 'bool IsPlanar()']
    ]
  },
  {
    name: 'Planesurface.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands

Namespace examples_vb
  Public Class PlaneSurfaceCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbPlaneSurface"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim corners As Point3d() = Nothing
      Dim rc = Input.RhinoGet.GetRectangle(corners)
      If rc <> Result.Success Then
        Return rc
      End If

      Dim plane = New Plane(corners(0), corners(1), corners(2))
      Dim plane_surface = New PlaneSurface(plane, New Interval(0, corners(0).DistanceTo(corners(1))), New Interval(0, corners(1).DistanceTo(corners(2))))
      doc.Objects.Add(plane_surface)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'PlaneSurface(Plane plane,Interval xExtents,Interval yExtents)']
    ]
  },
  {
    name: 'Planesurface.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;

namespace examples_cs
{
  public class PlaneSurfaceCommand : Command
  {
    public override string EnglishName { get { return "csPlaneSurface"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      Point3d[] corners;
      var rc = Rhino.Input.RhinoGet.GetRectangle(out corners);
      if (rc != Result.Success)
        return rc;

      var plane = new Plane(corners[0], corners[1], corners[2]);

      var plane_surface = new PlaneSurface(plane, 
        new Interval(0, corners[0].DistanceTo(corners[1])), 
        new Interval(0, corners[1].DistanceTo(corners[2])));

      doc.Objects.Add(plane_surface);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'PlaneSurface(Plane plane,Interval xExtents,Interval yExtents)']
    ]
  },
  {
    name: 'Planesurface.py',
    code: `import Rhino;
import rhinoscriptsyntax as rs

def RunCommand():
  rc, corners = Rhino.Input.RhinoGet.GetRectangle()
  if rc <> Rhino.Commands.Result.Success:
      return rc

  plane = Rhino.Geometry.Plane(corners[0], corners[1], corners[2])
  u_dir = rs.Distance(corners[0], corners[1])
  v_dir = rs.Distance(corners[1], corners[2])
  rs.AddPlaneSurface(plane, u_dir, v_dir)

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'PlaneSurface(Plane plane,Interval xExtents,Interval yExtents)']
    ]
  },
  {
    name: 'Splitbrepwithplane.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.Geometry

Namespace examples_vb
  Public Class SplitBrepsWithPlaneCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbSplitBrepsWithPlane"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      'First, collect all the breps to split
      Dim obj_refs As ObjRef() = Nothing
      Dim rc = RhinoGet.GetMultipleObjects("Select breps to split", False, ObjectType.Brep, obj_refs)
      If rc <> Result.Success OrElse obj_refs Is Nothing Then
        Return rc
      End If

      ' Get the final plane
      Dim plane As Plane
      rc = RhinoGet.GetPlane(plane)
      If rc <> Result.Success Then
        Return rc
      End If

      'Iterate over all object references
      For Each obj_ref As ObjRef In obj_refs
        Dim brep = obj_ref.Brep()
        Dim bbox = brep.GetBoundingBox(False)

        'Grow the boundingbox in all directions
        'If the boundingbox is flat (zero volume or even zero area) 
        'then the CreateThroughBox method will fail.
        Dim min_point = bbox.Min
        min_point.X -= 1.0
        min_point.Y -= 1.0
        min_point.Z -= 1.0
        bbox.Min = min_point
        Dim max_point = bbox.Max
        max_point.X += 1.0
        max_point.Y += 1.0
        max_point.Z += 1.0
        bbox.Max = max_point

        Dim plane_surface = PlaneSurface.CreateThroughBox(plane, bbox)
        If plane_surface Is Nothing Then
          'This is rare, it will most likely not happen unless either the plane or the boundingbox are invalid
          RhinoApp.WriteLine("Cutting plane could not be constructed.")
        Else
          Dim breps = brep.Split(plane_surface.ToBrep(), doc.ModelAbsoluteTolerance)
          If breps Is Nothing OrElse breps.Length = 0 Then
            RhinoApp.Write("Plane does not intersect brep (id:{0})", obj_ref.ObjectId)
            Continue For
          End If
          For Each brep_piece As Brep In breps
            doc.Objects.AddBrep(brep_piece)
          Next
          doc.Objects.AddSurface(plane_surface)
          doc.Objects.Delete(obj_ref, False)
        End If
      Next

      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'static PlaneSurface CreateThroughBox(Plane plane,BoundingBox box)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPlane(Plane plane)']
    ]
  },
  {
    name: 'Splitbrepwithplane.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Geometry;

namespace examples_cs
{
  public class SplitBrepsWithPlaneCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csSplitBrepsWithPlane"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      //First, collect all the breps to split
      ObjRef[] obj_refs;
      var rc = RhinoGet.GetMultipleObjects("Select breps to split", false, ObjectType.Brep, out obj_refs);
      if (rc != Result.Success || obj_refs == null)
        return rc;

      // Get the final plane
      Plane plane;
      rc = RhinoGet.GetPlane(out plane);
      if (rc != Result.Success)
        return rc;

      //Iterate over all object references
      foreach (var obj_ref in obj_refs)
      {
        var brep = obj_ref.Brep();
        var bbox = brep.GetBoundingBox(false);

        //Grow the boundingbox in all directions
        //If the boundingbox is flat (zero volume or even zero area) 
        //then the CreateThroughBox method will fail.
        var min_point = bbox.Min;
        min_point.X -= 1.0;
        min_point.Y -= 1.0;
        min_point.Z -= 1.0;
        bbox.Min = min_point;
        var max_point = bbox.Max;
        max_point.X += 1.0;
        max_point.Y += 1.0;
        max_point.Z += 1.0;
        bbox.Max = max_point;

        var plane_surface = PlaneSurface.CreateThroughBox(plane, bbox);
        if (plane_surface == null)
        {
          //This is rare, it will most likely not happen unless either the plane or the boundingbox are invalid
          RhinoApp.WriteLine("Cutting plane could not be constructed.");
        }
        else
        {
          var breps = brep.Split(plane_surface.ToBrep(), doc.ModelAbsoluteTolerance);
          if (breps == null || breps.Length == 0)
          {
            RhinoApp.Write("Plane does not intersect brep (id:{0})", obj_ref.ObjectId);
            continue;
          }
          foreach (var brep_piece in breps)
          {
            doc.Objects.AddBrep(brep_piece);
          }
          doc.Objects.AddSurface(plane_surface);
          doc.Objects.Delete(obj_ref, false);
        }
      }

      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'static PlaneSurface CreateThroughBox(Plane plane,BoundingBox box)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPlane(Plane plane)']
    ]
  },
  {
    name: 'Splitbrepwithplane.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.Geometry import *
from scriptcontext import doc

def RunCommand():
  #First, collect all the breps to split
  rc, obj_refs = RhinoGet.GetMultipleObjects("Select breps to split", False, ObjectType.Brep)
  if rc <> Result.Success or obj_refs == None:
    return rc

  # Get the final plane
  rc, plane = RhinoGet.GetPlane()
  if rc <> Result.Success:
    return rc

  #Iterate over all object references
  for obj_ref in obj_refs:
    brep = obj_ref.Brep()
    bbox = brep.GetBoundingBox(False)

    #Grow the boundingbox in all directions
    #If the boundingbox is flat (zero volume or even zero area) 
    #then the CreateThroughBox method will fail.
    min_point = bbox.Min
    min_point.X -= 1.0
    min_point.Y -= 1.0
    min_point.Z -= 1.0
    bbox.Min = min_point
    max_point = bbox.Max
    max_point.X += 1.0
    max_point.Y += 1.0
    max_point.Z += 1.0
    bbox.Max = max_point

    plane_surface = PlaneSurface.CreateThroughBox(plane, bbox)
    if plane_surface == None:
      #This is rare, it will most likely not happen unless either the plane or the boundingbox are invalid
      RhinoApp.WriteLine("Cutting plane could not be constructed.")
    else:
      breps = brep.Split(plane_surface.ToBrep(), doc.ModelAbsoluteTolerance)
      if breps == None or breps.Length == 0:
        RhinoApp.Write("Plane does not intersect brep (id:{0})", obj_ref.ObjectId)
        continue
      for brep_piece in breps:
        doc.Objects.AddBrep(brep_piece)
      doc.Objects.AddSurface(plane_surface)
      doc.Objects.Delete(obj_ref, False)

  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.PlaneSurface', 'static PlaneSurface CreateThroughBox(Plane plane,BoundingBox box)'],
      ['Rhino.Input.RhinoGet', 'static Result GetPlane(Plane plane)']
    ]
  },
  {
    name: 'Leader.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands
Imports System.Collections.Generic
Imports System.Linq

Namespace examples_vb
  Public Class LeaderCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbLeader"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim points = New List(Of Point3d)() From { _
        New Point3d(1, 1, 0), _
        New Point3d(5, 1, 0), _
        New Point3d(5, 5, 0), _
        New Point3d(9, 5, 0) _
      }

      Dim xyPlane = Plane.WorldXY

      Dim points2d = New List(Of Point2d)()
      For Each point3d As Point3d In points
        Dim x As Double, y As Double
        If xyPlane.ClosestParameter(point3d, x, y) Then
          Dim point2d = New Point2d(x, y)
          If points2d.Count < 1 OrElse point2d.DistanceTo(points2d.Last()) > RhinoMath.SqrtEpsilon Then
            points2d.Add(point2d)
          End If
        End If
      Next

      doc.Objects.AddLeader(xyPlane, points2d)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Point2d', 'double DistanceTo(Point2d other)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLeader(Plane plane,IEnumerable<Point2d> points)']
    ]
  },
  {
    name: 'Leader.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;
using System.Collections.Generic;
using System.Linq;

namespace examples_cs
{
  public class LeaderCommand : Command
  {
    public override string EnglishName { get { return "csLeader"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var points = new Point3d[]
      {
        new Point3d(1, 1, 0),
        new Point3d(5, 1, 0),
        new Point3d(5, 5, 0),
        new Point3d(9, 5, 0)
      };

      var xy_plane = Plane.WorldXY;

      var points2d = new List<Point2d>();
      foreach (var point3d in points)
      {
        double x, y;
        if (xy_plane.ClosestParameter(point3d, out x, out y))
        {
          var point2d = new Point2d(x, y);
          if (points2d.Count < 1 || point2d.DistanceTo(points2d.Last<Point2d>()) > RhinoMath.SqrtEpsilon)
            points2d.Add(point2d);
        }
      }

      doc.Objects.AddLeader(xy_plane, points2d);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Point2d', 'double DistanceTo(Point2d other)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLeader(Plane plane,IEnumerable<Point2d> points)']
    ]
  },
  {
    name: 'Leader.py',
    code: `import rhinoscriptsyntax as rs

def RunCommand():
  points = [(1,1,0), (5,1,0), (5,5,0), (9,5,0)]
  rs.AddLeader(points)

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.Point2d', 'double DistanceTo(Point2d other)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLeader(Plane plane,IEnumerable<Point2d> points)']
    ]
  },
  {
    name: 'Pointatcursor.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class PointAtCursorCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbPointAtCursor"
      End Get
    End Property

    <System.Runtime.InteropServices.DllImport("user32.dll")> _
    Public Shared Function GetCursorPos(ByRef point As System.Drawing.Point) As Boolean
    End Function

    <System.Runtime.InteropServices.DllImport("user32.dll")> _
    Public Shared Function ScreenToClient(hWnd As IntPtr, ByRef point As System.Drawing.Point) As Boolean
    End Function

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim result__1 = Result.Failure
      Dim view = doc.Views.ActiveView
      If view Is Nothing Then
        Return result__1
      End If

      Dim windowsDrawingPoint As System.Drawing.Point
      If Not GetCursorPos(windowsDrawingPoint) OrElse Not ScreenToClient(view.Handle, windowsDrawingPoint) Then
        Return result__1
      End If

      Dim xform = view.ActiveViewport.GetTransform(CoordinateSystem.Screen, CoordinateSystem.World)
      Dim point = New Rhino.Geometry.Point3d(windowsDrawingPoint.X, windowsDrawingPoint.Y, 0.0)
      RhinoApp.WriteLine([String].Format("screen point: ({0}, {1}, {2})", point.X, point.Y, point.Z))
      point.Transform(xform)
      RhinoApp.WriteLine([String].Format("world point: ({0}, {1}, {2})", point.X, point.Y, point.Z))
      result__1 = Result.Success
      Return result__1
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Point3d', 'void Transform(Transform xform)'],
      ['Rhino.Display.RhinoViewport', 'Transform GetTransform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)']
    ]
  },
  {
    name: 'Pointatcursor.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;
using System;

namespace examples_cs
{
  public class PointAtCursorCommand : Command
  {
    public override string EnglishName { get { return "csPointAtCursor"; } }

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern bool GetCursorPos(out System.Drawing.Point point);
 
    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern bool ScreenToClient(IntPtr hWnd, ref System.Drawing.Point point);

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var result = Result.Failure;
      var view = doc.Views.ActiveView;
      if (view == null) return result;

      System.Drawing.Point windows_drawing_point;
      if (!GetCursorPos(out windows_drawing_point) || !ScreenToClient(view.Handle, ref windows_drawing_point))
        return result;

      var xform = view.ActiveViewport.GetTransform(CoordinateSystem.Screen, CoordinateSystem.World);
      var point = new Rhino.Geometry.Point3d(windows_drawing_point.X, windows_drawing_point.Y, 0.0);
      RhinoApp.WriteLine("screen point: ({0})", point);
      point.Transform(xform);
      RhinoApp.WriteLine("world point: ({0})", point);
      result = Result.Success;
      return result;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Point3d', 'void Transform(Transform xform)'],
      ['Rhino.Display.RhinoViewport', 'Transform GetTransform(CoordinateSystem sourceSystem,CoordinateSystem destinationSystem)']
    ]
  },
  {
    name: 'Addline.vb',
    code: `Partial Class Examples
  Public Shared Function AddLine(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Start of line")
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If

    Dim pt_start As Rhino.Geometry.Point3d = gp.Point()

    gp.SetCommandPrompt("End of line")
    gp.SetBasePoint(pt_start, False)
    gp.DrawLineFromPoint(pt_start, True)
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If

    Dim pt_end As Rhino.Geometry.Point3d = gp.Point()
    Dim v As Rhino.Geometry.Vector3d = pt_end - pt_start
    If v.IsTiny(Rhino.RhinoMath.ZeroTolerance) Then
      Return Rhino.Commands.Result.[Nothing]
    End If

    If doc.Objects.AddLine(pt_start, pt_end) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Vector2d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Geometry.Vector3d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Input.Custom.GetBaseClass', 'Point3d Point()'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetCommandPrompt(string prompt)'],
      ['Rhino.Input.Custom.GetPoint', 'GetPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'void DrawLineFromPoint(Point3d startPoint,bool showDistanceInStatusBar)'],
      ['Rhino.Input.Custom.GetPoint', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetPoint', 'void SetBasePoint(Point3d basePoint,bool showDistanceInStatusBar)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLine(Point3d from,Point3d to)']
    ]
  },
  {
    name: 'Addline.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddLine(Rhino.RhinoDoc doc)
  {
    Rhino.Input.Custom.GetPoint gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Start of line");
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();

    Rhino.Geometry.Point3d pt_start = gp.Point();

    gp.SetCommandPrompt("End of line");
    gp.SetBasePoint(pt_start, false);
    gp.DrawLineFromPoint(pt_start, true);
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();

    Rhino.Geometry.Point3d pt_end = gp.Point();
    Rhino.Geometry.Vector3d v = pt_end - pt_start;
    if (v.IsTiny(Rhino.RhinoMath.ZeroTolerance))
      return Rhino.Commands.Result.Nothing;

    if (doc.Objects.AddLine(pt_start, pt_end) != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Vector2d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Geometry.Vector3d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Input.Custom.GetBaseClass', 'Point3d Point()'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetCommandPrompt(string prompt)'],
      ['Rhino.Input.Custom.GetPoint', 'GetPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'void DrawLineFromPoint(Point3d startPoint,bool showDistanceInStatusBar)'],
      ['Rhino.Input.Custom.GetPoint', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetPoint', 'void SetBasePoint(Point3d basePoint,bool showDistanceInStatusBar)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLine(Point3d from,Point3d to)']
    ]
  },
  {
    name: 'Addline.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddLine():
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Start of line")
    gp.Get()
    if gp.CommandResult()!=Rhino.Commands.Result.Success:
        return gp.CommandResult()
    pt_start = gp.Point()

    gp.SetCommandPrompt("End of line")
    gp.SetBasePoint(pt_start, False)
    gp.DrawLineFromPoint(pt_start, True)
    gp.Get()
    if gp.CommandResult() != Rhino.Commands.Result.Success:
        return gp.CommandResult()
    pt_end = gp.Point()
    v = pt_end - pt_start
    if v.IsTiny(Rhino.RhinoMath.ZeroTolerance):
        return Rhino.Commands.Result.Nothing
    
    id = scriptcontext.doc.Objects.AddLine(pt_start, pt_end)
    if id!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    AddLine()
`,
    members: [
      ['Rhino.Geometry.Vector2d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Geometry.Vector3d', 'bool IsTiny(double tolerance)'],
      ['Rhino.Input.Custom.GetBaseClass', 'Point3d Point()'],
      ['Rhino.Input.Custom.GetBaseClass', 'void SetCommandPrompt(string prompt)'],
      ['Rhino.Input.Custom.GetPoint', 'GetPoint()'],
      ['Rhino.Input.Custom.GetPoint', 'void DrawLineFromPoint(Point3d startPoint,bool showDistanceInStatusBar)'],
      ['Rhino.Input.Custom.GetPoint', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetPoint', 'void SetBasePoint(Point3d basePoint,bool showDistanceInStatusBar)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLine(Point3d from,Point3d to)']
    ]
  },
  {
    name: 'Closestpoint.vb',
    code: `Imports Rhino
Imports Rhino.Geometry

Namespace examples_vb
  <System.Runtime.InteropServices.Guid("B89D4A42-A712-4FA4-9ABF-6BE1FB962D24")> _
  Public Class RTreeClosestPoint
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vb_RtreeClosestPoint"
      End Get
    End Property

    Private Sub SearchCallback(sender As Object, e As RTreeEventArgs)
      Dim data As SearchData = TryCast(e.Tag, SearchData)
      data.HitCount = data.HitCount + 1
      Dim vertex As Point3f = data.Mesh.Vertices(e.Id)
      Dim distance As Double = data.Point.DistanceTo(vertex)
      If data.Index = -1 OrElse data.Distance > distance Then
        ' shrink the sphere to help improve the test
        e.SearchSphere = New Sphere(data.Point, distance)
        data.Index = e.Id
        data.Distance = distance
      End If
    End Sub

    Private Class SearchData
      Public Sub New(mesh__1 As Mesh, point__2 As Point3d)
        Point = point__2
        Mesh = mesh__1
        HitCount = 0
        Index = -1
        Distance = 0
      End Sub

      Public Property HitCount As Integer
      Public Property Point As Point3d
      Public Property Mesh As Mesh
      Public Property Index As Integer
      Public Property Distance As Double
    End Class

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Rhino.Commands.Result
      Dim objref As Rhino.DocObjects.ObjRef = Nothing
      Dim rc = Rhino.Input.RhinoGet.GetOneObject("select mesh", False, Rhino.DocObjects.ObjectType.Mesh, objref)
      If rc <> Rhino.Commands.Result.Success Then
        Return rc
      End If

      Dim mesh As Mesh = objref.Mesh()
      objref.Object().Select(False)
      doc.Views.Redraw()

      Using tree As New RTree()
        For i As Integer = 0 To mesh.Vertices.Count - 1
          ' we can make a C++ function that just builds an rtree from the
          ' vertices in one quick shot, but for now...
          tree.Insert(mesh.Vertices(i), i)
        Next

        Dim point As Point3d
        While True
          rc = Rhino.Input.RhinoGet.GetPoint("test point", False, point)
          If rc <> Rhino.Commands.Result.Success Then
            Exit While
          End If

          Dim data As New SearchData(mesh, point)
          ' Use the first vertex in the mesh to define a start sphere
          Dim distance As Double = point.DistanceTo(mesh.Vertices(0))
          Dim sphere As New Sphere(point, distance * 1.1)
          If tree.Search(sphere, AddressOf SearchCallback, data) Then
            doc.Objects.AddPoint(mesh.Vertices(data.Index))
            doc.Views.Redraw()
            RhinoApp.WriteLine("Found point in {0} tests", data.HitCount)
          End If
        End While
      End Using
      Return Rhino.Commands.Result.Success
    End Function
  End Class
End Namespace
`,
    members: [
      ['Rhino.Geometry.RTree', 'RTree()'],
      ['Rhino.Geometry.RTree', 'bool Insert(Point3d point,int elementId)'],
      ['Rhino.Geometry.RTree', 'bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback,object tag)']
    ]
  },
  {
    name: 'Closestpoint.cs',
    code: `using Rhino;
using Rhino.Geometry;

namespace examples_cs
{
  [System.Runtime.InteropServices.Guid("0E82E6DA-5335-453A-AC94-2499BBBCBE55")]
  public class RTreeClosestPoint : Rhino.Commands.Command
  {
    public override string EnglishName { get { return "cs_RtreeClosestPoint"; } }

    void SearchCallback(object sender, RTreeEventArgs e)
    {
      SearchData data = e.Tag as SearchData;
      if (data == null)
        return;
      data.HitCount = data.HitCount + 1;
      Point3f vertex = data.Mesh.Vertices[e.Id];
      double distance = data.Point.DistanceTo(vertex);
      if (data.Index == -1 || data.Distance > distance)
      {
        // shrink the sphere to help improve the test
        e.SearchSphere = new Sphere(data.Point, distance);
        data.Index = e.Id;
        data.Distance = distance;
      }
    }

    class SearchData
    {
      public SearchData(Mesh mesh, Point3d point)
      {
        Point = point;
        Mesh = mesh;
        HitCount = 0;
        Index = -1;
        Distance = 0;
      }

      public int HitCount { get; set; }
      public Point3d Point { get; private set; }
      public Mesh Mesh { get; private set; }
      public int Index { get; set; }
      public double Distance { get; set; }
    }

    protected override Rhino.Commands.Result RunCommand(RhinoDoc doc, Rhino.Commands.RunMode mode)
    {
      Rhino.DocObjects.ObjRef objref;
      var rc = Rhino.Input.RhinoGet.GetOneObject("select mesh", false, Rhino.DocObjects.ObjectType.Mesh, out objref);
      if (rc != Rhino.Commands.Result.Success)
        return rc;

      Mesh mesh = objref.Mesh();
      objref.Object().Select(false);
      doc.Views.Redraw();

      using (RTree tree = new RTree())
      {
        for (int i = 0; i < mesh.Vertices.Count; i++)
        {
          // we can make a C++ function that just builds an rtree from the
          // vertices in one quick shot, but for now...
          tree.Insert(mesh.Vertices[i], i);
        }

        while (true)
        {
          Point3d point;
          rc = Rhino.Input.RhinoGet.GetPoint("test point", false, out point);
          if (rc != Rhino.Commands.Result.Success)
            break;

          SearchData data = new SearchData(mesh, point);
          // Use the first vertex in the mesh to define a start sphere
          double distance = point.DistanceTo(mesh.Vertices[0]);
          Sphere sphere = new Sphere(point, distance * 1.1);
          if (tree.Search(sphere, SearchCallback, data))
          {
            doc.Objects.AddPoint(mesh.Vertices[data.Index]);
            doc.Views.Redraw();
            RhinoApp.WriteLine("Found point in {0} tests", data.HitCount);
          }
        }
      }
      return Rhino.Commands.Result.Success;
    }
  }
}

`,
    members: [
      ['Rhino.Geometry.RTree', 'RTree()'],
      ['Rhino.Geometry.RTree', 'bool Insert(Point3d point,int elementId)'],
      ['Rhino.Geometry.RTree', 'bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback,object tag)']
    ]
  },
  {
    name: 'Closestpoint.py',
    code: `import Rhino
import rhinoscriptsyntax as rs

# data passed to the RTree's SearchCallback function that
# we can use for recording what is going on
class SearchData:
    def __init__(self, mesh, point):
        self.HitCount = 0
        self.Mesh = mesh
        self.Point = point
        self.Index = -1
        self.Distance = 0
        

def SearchCallback(sender, e):
    data = e.Tag
    data.HitCount += 1
    vertex = data.Mesh.Vertices[e.Id]
    distance = data.Point.DistanceTo(vertex)
    if data.Index == -1 or data.Distance > distance:
        # shrink the sphere to help improve the test
        e.SearchSphere = Rhino.Geometry.Sphere(data.Point, distance)
        data.Index = e.Id
        data.Distance = distance

def RunSearch():
    id = rs.GetObject("select mesh", rs.filter.mesh)
    mesh = rs.coercemesh(id)
    if mesh:
        rs.UnselectObject(id)
        tree = Rhino.Geometry.RTree()
        # I can add a RhinoCommon function that just builds an rtree from the
        # vertices in one quick shot, but for now...
        for i,vertex in enumerate(mesh.Vertices): tree.Insert(vertex, i)
        
        while(True):
            point = rs.GetPoint("test point")
            if not point: break
            
            data = SearchData(mesh, point)
            # Use the first vertex in the mesh to define a start sphere
            distance = point.DistanceTo(mesh.Vertices[0])
            sphere = Rhino.Geometry.Sphere(point, distance * 1.1)
            if tree.Search(sphere, SearchCallback, data):
                rs.AddPoint(mesh.Vertices[data.Index])
                print "Found point in {0} tests".format(data.HitCount)

if __name__=="__main__":
    RunSearch()
`,
    members: [
      ['Rhino.Geometry.RTree', 'RTree()'],
      ['Rhino.Geometry.RTree', 'bool Insert(Point3d point,int elementId)'],
      ['Rhino.Geometry.RTree', 'bool Search(Sphere sphere,EventHandler<RTreeEventArgs> callback,object tag)']
    ]
  },
  {
    name: 'Addsphere.vb',
    code: `Partial Class Examples
  Public Shared Function AddSphere(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim center As New Rhino.Geometry.Point3d(0, 0, 0)
    Const radius As Double = 5.0
    Dim sphere As New Rhino.Geometry.Sphere(center, radius)
    If doc.Objects.AddSphere(sphere) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Sphere', 'Sphere(Point3d center,double radius)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSphere(Sphere sphere)']
    ]
  },
  {
    name: 'Addsphere.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddSphere(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Point3d center = new Rhino.Geometry.Point3d(0, 0, 0);
    const double radius = 5.0;
    Rhino.Geometry.Sphere sphere = new Rhino.Geometry.Sphere(center, radius);
    if( doc.Objects.AddSphere(sphere) != Guid.Empty )
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Sphere', 'Sphere(Point3d center,double radius)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSphere(Sphere sphere)']
    ]
  },
  {
    name: 'Addsphere.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddSphere():
    center = Rhino.Geometry.Point3d(0, 0, 0)
    radius = 5.0
    sphere = Rhino.Geometry.Sphere(center, radius)
    if scriptcontext.doc.Objects.AddSphere(sphere)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__ == "__main__":
    AddSphere()
`,
    members: [
      ['Rhino.Geometry.Sphere', 'Sphere(Point3d center,double radius)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSphere(Sphere sphere)']
    ]
  },
  {
    name: 'Principalcurvature.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Input
Imports Rhino.Commands

Namespace examples_vb
  Public Class PrincipalCurvatureCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbPrincipalCurvature"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select surface for curvature measurement", True,
                                     ObjectType.Surface, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim surface = obj_ref.Surface()

      Dim gp = New Rhino.Input.Custom.GetPoint()
      gp.SetCommandPrompt("Select point on surface for curvature measurement")
      gp.Constrain(surface, False)
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim point_on_surface = gp.Point()

      Dim u As Double, v As Double
      If Not surface.ClosestPoint(point_on_surface, u, v) Then
        Return Result.Failure
      End If

      Dim surface_curvature = surface.CurvatureAt(u, v)
      If surface_curvature Is Nothing Then
        Return Result.Failure
      End If

      RhinoApp.WriteLine("Surface curvature evaluation at parameter: ({0}, {1})", u, v)

      RhinoApp.WriteLine("  3-D Point: {0}", surface_curvature.Point)
      RhinoApp.WriteLine("  3-D Normal: {0}", surface_curvature.Normal)
      RhinoApp.WriteLine("  Maximum principal curvature: {0} ({1})", surface_curvature.Kappa(0), surface_curvature.Direction(0))
      RhinoApp.WriteLine("  Minimum principal curvature: {0} ({1})", surface_curvature.Kappa(1), surface_curvature.Direction(1))
      RhinoApp.WriteLine("  Gaussian curvature: {0}", surface_curvature.Gaussian)
      RhinoApp.WriteLine("  Mean curvature: {0}", surface_curvature.Mean)
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.SurfaceCurvature', 'double Gaussian'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Mean'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Normal'],
      ['Rhino.Geometry.SurfaceCurvature', 'Point3d Point'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Direction(int direction)'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Kappa(int direction)'],
      ['Rhino.Geometry.Surface', 'SurfaceCurvature CurvatureAt(double u,double v)']
    ]
  },
  {
    name: 'Principalcurvature.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Input;
using Rhino.Commands;

namespace examples_cs
{
  public class PrincipalCurvatureCommand : Command
  {
    public override string EnglishName { get { return "csPrincipalCurvature"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select surface for curvature measurement", true, 
        ObjectType.Surface, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var surface = obj_ref.Surface();

      var gp = new Rhino.Input.Custom.GetPoint();
      gp.SetCommandPrompt("Select point on surface for curvature measurement");
      gp.Constrain(surface, false);
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var point_on_surface = gp.Point();

      double u, v;
      if (!surface.ClosestPoint(point_on_surface, out u, out v))
        return Result.Failure;

      var surface_curvature = surface.CurvatureAt(u, v);
      if (surface_curvature == null)
        return Result.Failure;

      RhinoApp.WriteLine("Surface curvature evaluation at parameter: ({0}, {1})", u, v);

      RhinoApp.WriteLine("  3-D Point: ({0}, {1}, {2})",
        surface_curvature.Point.X,
        surface_curvature.Point.Y,
        surface_curvature.Point.Z);

      RhinoApp.WriteLine("  3-D Normal: ({0}, {1}, {2})",
        surface_curvature.Normal.X,
        surface_curvature.Normal.Y,
        surface_curvature.Normal.Z);

      RhinoApp.WriteLine(string.Format("  Maximum principal curvature: {0} ({1}, {2}, {3})", 
        surface_curvature.Kappa(0), 
        surface_curvature.Direction(0).X, 
        surface_curvature.Direction(0).Y, 
        surface_curvature.Direction(0).Z));

      RhinoApp.WriteLine(string.Format("  Minimum principal curvature: {0} ({1}, {2}, {3})", 
        surface_curvature.Kappa(1), 
        surface_curvature.Direction(1).X, 
        surface_curvature.Direction(1).Y, 
        surface_curvature.Direction(1).Z));

      RhinoApp.WriteLine("  Gaussian curvature: {0}", surface_curvature.Gaussian);
      RhinoApp.WriteLine("  Mean curvature: {0}", surface_curvature.Mean);

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.SurfaceCurvature', 'double Gaussian'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Mean'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Normal'],
      ['Rhino.Geometry.SurfaceCurvature', 'Point3d Point'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Direction(int direction)'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Kappa(int direction)'],
      ['Rhino.Geometry.Surface', 'SurfaceCurvature CurvatureAt(double u,double v)']
    ]
  },
  {
    name: 'Principalcurvature.py',
    code: `import rhinoscriptsyntax as rs

surface_id,_,_,_,_,_ = rs.GetSurfaceObject("Select surface for curvature measurement")
point = rs.GetPointOnSurface(surface_id, 
    "Select point on surface for curvature measurement")
u,v = rs.SurfaceClosestPoint(surface_id, point)

#point, normal, kappa_u, direction_u, kappa_v, direction_v, gaussian, mean =
surface_curvature = rs.SurfaceCurvature(surface_id, (u,v))
    
point, normal, kappa_u, direction_u, kappa_v, direction_v, gaussian, mean = surface_curvature

print "Surface curvature evaluation at parameter: ({0}, {1})".format(u,v)

print "  3-D Point: ({0}, {1}, {2})".format(point.X, point.Y, point.Z)

print "  3-D Normal: ({0}, {1}, {2})".format(normal.X, normal.Y, normal.Z)

print "  Maximum principal curvature: {0} ({1}, {2}, {3})".format(
  kappa_u, direction_u.X, direction_u.Y, direction_u.Z)

print "  Minimum principal curvature: {0} ({1}, {2}, {3})".format(
  kappa_v, direction_v.X, direction_v.Y, direction_v.Z)

print "  Gaussian curvature: {0}".format(gaussian)
print "  Mean curvature: {0}".format(mean)`,
    members: [
      ['Rhino.Geometry.SurfaceCurvature', 'double Gaussian'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Mean'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Normal'],
      ['Rhino.Geometry.SurfaceCurvature', 'Point3d Point'],
      ['Rhino.Geometry.SurfaceCurvature', 'Vector3d Direction(int direction)'],
      ['Rhino.Geometry.SurfaceCurvature', 'double Kappa(int direction)'],
      ['Rhino.Geometry.Surface', 'SurfaceCurvature CurvatureAt(double u,double v)']
    ]
  },
  {
    name: 'Orientonsrf.vb',
    code: `Partial Class Examples
  Public Shared Function OrientOnSrf(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Select objects to orient
    Dim go As New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects to orient")
    go.SubObjectSelect = False
    go.GroupSelect = True
    go.GetMultiple(1, 0)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    ' Point to orient from
    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Point to orient from")
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If

    ' Define source plane
    Dim view As Rhino.Display.RhinoView = gp.View()
    If view Is Nothing Then
      view = doc.Views.ActiveView
      If view Is Nothing Then
        Return Rhino.Commands.Result.Failure
      End If
    End If
    Dim source_plane As Rhino.Geometry.Plane = view.ActiveViewport.ConstructionPlane()
    source_plane.Origin = gp.Point()

    ' Surface to orient on
    Dim gs As New Rhino.Input.Custom.GetObject()
    gs.SetCommandPrompt("Surface to orient on")
    gs.GeometryFilter = Rhino.DocObjects.ObjectType.Surface
    gs.SubObjectSelect = True
    gs.DeselectAllBeforePostSelect = False
    gs.OneByOnePostSelect = True
    gs.Get()
    If gs.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gs.CommandResult()
    End If

    Dim objref As Rhino.DocObjects.ObjRef = gs.[Object](0)
    ' get selected surface object
    Dim obj As Rhino.DocObjects.RhinoObject = objref.[Object]()
    If obj Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If
    ' get selected surface (face)
    Dim surface As Rhino.Geometry.Surface = objref.Surface()
    If surface Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If
    ' Unselect surface
    obj.[Select](False)

    ' Point on surface to orient to
    gp.SetCommandPrompt("Point on surface to orient to")
    gp.Constrain(surface, False)
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If

    ' Do transformation
    Dim rc As Rhino.Commands.Result = Rhino.Commands.Result.Failure
    Dim u As Double, v As Double
    If surface.ClosestPoint(gp.Point(), u, v) Then
      Dim target_plane As Rhino.Geometry.Plane
      If surface.FrameAt(u, v, target_plane) Then
        ' Build transformation
        Dim xform As Rhino.Geometry.Transform = Rhino.Geometry.Transform.PlaneToPlane(source_plane, target_plane)

        ' Do the transformation. In this example, we will copy the original objects
        Const delete_original As Boolean = False
        For i As Integer = 0 To go.ObjectCount - 1
          doc.Objects.Transform(go.[Object](i), xform, delete_original)
        Next

        doc.Views.Redraw()
        rc = Rhino.Commands.Result.Success
      End If
    End If
    Return rc
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Surface', 'bool ClosestPoint(Point3d testPoint,double u,double v)'],
      ['Rhino.Geometry.Surface', 'bool FrameAt(double u,double v,Plane frame)'],
      ['Rhino.DocObjects.RhinoObject', 'int Select(bool on)'],
      ['Rhino.DocObjects.ObjRef', 'RhinoObject Object()'],
      ['Rhino.DocObjects.ObjRef', 'Surface Surface()'],
      ['Rhino.Input.Custom.GetObject', 'bool DeselectAllBeforePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjectType GeometryFilter'],
      ['Rhino.Input.Custom.GetObject', 'bool GroupSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool OneByOnePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool SubObjectSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjRef Object(int index)'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Surface surface,bool allowPickingPointOffObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid Transform(ObjRef objref,Transform xform,bool deleteOriginal)']
    ]
  },
  {
    name: 'Orientonsrf.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result OrientOnSrf(Rhino.RhinoDoc doc)
  {
    // Select objects to orient
    Rhino.Input.Custom.GetObject go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt("Select objects to orient");
    go.SubObjectSelect = false;
    go.GroupSelect = true;
    go.GetMultiple(1, 0);
    if (go.CommandResult() != Rhino.Commands.Result.Success)
      return go.CommandResult();

    // Point to orient from
    Rhino.Input.Custom.GetPoint gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Point to orient from");
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();

    // Define source plane
    Rhino.Display.RhinoView view = gp.View();
    if (view == null)
    {
      view = doc.Views.ActiveView;
      if (view == null)
        return Rhino.Commands.Result.Failure;
    }
    Rhino.Geometry.Plane source_plane = view.ActiveViewport.ConstructionPlane();
    source_plane.Origin = gp.Point();

    // Surface to orient on
    Rhino.Input.Custom.GetObject gs = new Rhino.Input.Custom.GetObject();
    gs.SetCommandPrompt("Surface to orient on");
    gs.GeometryFilter = Rhino.DocObjects.ObjectType.Surface;
    gs.SubObjectSelect = true;
    gs.DeselectAllBeforePostSelect = false;
    gs.OneByOnePostSelect = true;
    gs.Get();
    if (gs.CommandResult() != Rhino.Commands.Result.Success)
      return gs.CommandResult();

    Rhino.DocObjects.ObjRef objref = gs.Object(0);
    // get selected surface object
    Rhino.DocObjects.RhinoObject obj = objref.Object();
    if (obj == null)
      return Rhino.Commands.Result.Failure;
    // get selected surface (face)
    Rhino.Geometry.Surface surface = objref.Surface();
    if (surface == null)
      return Rhino.Commands.Result.Failure;
    // Unselect surface
    obj.Select(false);

    // Point on surface to orient to
    gp.SetCommandPrompt("Point on surface to orient to");
    gp.Constrain(surface, false);
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();

    // Do transformation
    Rhino.Commands.Result rc = Rhino.Commands.Result.Failure;
    double u, v;
    if (surface.ClosestPoint(gp.Point(), out u, out v))
    {
      Rhino.Geometry.Plane target_plane;
      if (surface.FrameAt(u, v, out target_plane))
      {
        // Build transformation
        Rhino.Geometry.Transform xform = Rhino.Geometry.Transform.PlaneToPlane(source_plane, target_plane);

        // Do the transformation. In this example, we will copy the original objects
        const bool delete_original = false;
        for (int i = 0; i < go.ObjectCount; i++)
          doc.Objects.Transform(go.Object(i), xform, delete_original);

        doc.Views.Redraw();
        rc = Rhino.Commands.Result.Success;
      }
    }
    return rc;
  }
}
`,
    members: [
      ['Rhino.Geometry.Surface', 'bool ClosestPoint(Point3d testPoint,double u,double v)'],
      ['Rhino.Geometry.Surface', 'bool FrameAt(double u,double v,Plane frame)'],
      ['Rhino.DocObjects.RhinoObject', 'int Select(bool on)'],
      ['Rhino.DocObjects.ObjRef', 'RhinoObject Object()'],
      ['Rhino.DocObjects.ObjRef', 'Surface Surface()'],
      ['Rhino.Input.Custom.GetObject', 'bool DeselectAllBeforePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjectType GeometryFilter'],
      ['Rhino.Input.Custom.GetObject', 'bool GroupSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool OneByOnePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool SubObjectSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjRef Object(int index)'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Surface surface,bool allowPickingPointOffObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid Transform(ObjRef objref,Transform xform,bool deleteOriginal)']
    ]
  },
  {
    name: 'Orientonsrf.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def OrientOnSrf():
    # Select objects to orient
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects to orient")
    go.SubObjectSelect = False
    go.GroupSelect = True
    go.GetMultiple(1, 0)
    if go.CommandResult()!=Rhino.Commands.Result.Success:
        return go.CommandResult()

    # Point to orient from
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Point to orient from")
    gp.Get()
    if gp.CommandResult()!=Rhino.Commands.Result.Success:
        return gp.CommandResult()
    
    # Define source plane
    view = gp.View()
    if not view:
        view = doc.Views.ActiveView
        if not view: return Rhino.Commands.Result.Failure

    source_plane = view.ActiveViewport.ConstructionPlane()
    source_plane.Origin = gp.Point()

    # Surface to orient on
    gs = Rhino.Input.Custom.GetObject()
    gs.SetCommandPrompt("Surface to orient on")
    gs.GeometryFilter = Rhino.DocObjects.ObjectType.Surface
    gs.SubObjectSelect = True
    gs.DeselectAllBeforePostSelect = False
    gs.OneByOnePostSelect = True
    gs.Get()
    if gs.CommandResult()!=Rhino.Commands.Result.Success:
        return gs.CommandResult()

    objref = gs.Object(0)
    # get selected surface object
    obj = objref.Object()
    if not obj: return Rhino.Commands.Result.Failure
    # get selected surface (face)
    surface = objref.Surface()
    if not surface: return Rhino.Commands.Result.Failure
    # Unselect surface
    obj.Select(False)

    # Point on surface to orient to
    gp.SetCommandPrompt("Point on surface to orient to")
    gp.Constrain(surface, False)
    gp.Get()
    if gp.CommandResult()!=Rhino.Commands.Result.Success:
        return gp.CommandResult()

    # Do transformation
    rc = Rhino.Commands.Result.Failure
    getrc, u, v = surface.ClosestPoint(gp.Point())
    if getrc:
        getrc, target_plane = surface.FrameAt(u,v)
        if getrc:
            # Build transformation
            xform = Rhino.Geometry.Transform.PlaneToPlane(source_plane, target_plane)
            # Do the transformation. In this example, we will copy the original objects
            delete_original = False
            for i in range(go.ObjectCount):
                rhobj = go.Object(i)
                scriptcontext.doc.Objects.Transform(rhobj, xform, delete_original)
            scriptcontext.doc.Views.Redraw()
            rc = Rhino.Commands.Result.Success
    return rc


if __name__=="__main__":
    OrientOnSrf()
`,
    members: [
      ['Rhino.Geometry.Surface', 'bool ClosestPoint(Point3d testPoint,double u,double v)'],
      ['Rhino.Geometry.Surface', 'bool FrameAt(double u,double v,Plane frame)'],
      ['Rhino.DocObjects.RhinoObject', 'int Select(bool on)'],
      ['Rhino.DocObjects.ObjRef', 'RhinoObject Object()'],
      ['Rhino.DocObjects.ObjRef', 'Surface Surface()'],
      ['Rhino.Input.Custom.GetObject', 'bool DeselectAllBeforePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjectType GeometryFilter'],
      ['Rhino.Input.Custom.GetObject', 'bool GroupSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool OneByOnePostSelect'],
      ['Rhino.Input.Custom.GetObject', 'bool SubObjectSelect'],
      ['Rhino.Input.Custom.GetObject', 'ObjRef Object(int index)'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Surface surface,bool allowPickingPointOffObject)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid Transform(ObjRef objref,Transform xform,bool deleteOriginal)']
    ]
  },
  {
    name: 'Extractisocurve.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.Input.Custom
Imports Rhino.Geometry

Namespace examples_vb
  Public Class ExtractIsocurveCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbExtractIsocurve"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select surface", False, ObjectType.Surface, obj_ref)
      If rc <> Result.Success OrElse obj_ref Is Nothing Then
        Return rc
      End If
      Dim surface = obj_ref.Surface()

      Dim gp = New GetPoint()
      gp.SetCommandPrompt("Point on surface")
      gp.Constrain(surface, False)
      'gp.GeometryFilter = ObjectType.Point;
      Dim option_toggle = New OptionToggle(False, "U", "V")
      gp.AddOptionToggle("Direction", option_toggle)
      Dim point As Point3d = Point3d.Unset
      While True
        Dim grc = gp.[Get]()
        If grc = GetResult.[Option] Then
          Continue While
        ElseIf grc = GetResult.Point Then
          point = gp.Point()
          Exit While
        Else
          Return Result.[Nothing]
        End If
      End While
      If point = Point3d.Unset Then
        Return Result.[Nothing]
      End If

      Dim direction As Integer = If(option_toggle.CurrentValue, 1, 0)
      ' V : U
      Dim u_parameter As Double, v_parameter As Double
      If Not surface.ClosestPoint(point, u_parameter, v_parameter) Then
        Return Result.Failure
      End If

      Dim iso_curve = surface.IsoCurve(direction, If(direction = 1, u_parameter, v_parameter))
      If iso_curve Is Nothing Then
        Return Result.Failure
      End If

      doc.Objects.AddCurve(iso_curve)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Surface', 'Curve IsoCurve(int direction,double constantParameter)']
    ]
  },
  {
    name: 'Extractisocurve.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Input.Custom;
using Rhino.Geometry;

namespace examples_cs
{
  public class ExtractIsocurveCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csExtractIsocurve"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select surface", false, ObjectType.Surface, out obj_ref);
      if (rc != Result.Success || obj_ref == null)
        return rc;
      var surface = obj_ref.Surface();

      var gp = new GetPoint();
      gp.SetCommandPrompt("Point on surface");
      gp.Constrain(surface, false);
      var option_toggle = new OptionToggle(false, "U", "V");
      gp.AddOptionToggle("Direction", ref option_toggle);
      Point3d point = Point3d.Unset;
      while (true)
      {
        var grc = gp.Get();
        if (grc == GetResult.Option)
          continue;
        else if (grc == GetResult.Point)
        {
          point = gp.Point();
          break;
        }
        else
          return Result.Nothing;
      }
      if (point == Point3d.Unset)
        return Result.Nothing;

      int direction = option_toggle.CurrentValue ? 1 : 0; // V : U
      double u_parameter, v_parameter;
      if (!surface.ClosestPoint(point, out u_parameter, out v_parameter)) return Result.Failure;

      var iso_curve = surface.IsoCurve(direction, direction == 1 ? u_parameter : v_parameter);
      if (iso_curve == null) return Result.Failure;

      doc.Objects.AddCurve(iso_curve);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Surface', 'Curve IsoCurve(int direction,double constantParameter)']
    ]
  },
  {
    name: 'Extractisocurve.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Input import *
from Rhino.Input.Custom import *
from Rhino.Geometry import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("Select surface", False, ObjectType.Surface)
  if rc <> Result.Success or obj_ref == None:
    return rc
  surface = obj_ref.Surface()

  gp = GetPoint()
  gp.SetCommandPrompt("Point on surface")
  gp.Constrain(surface, False)
  option_toggle = OptionToggle(False, "U", "V")
  gp.AddOptionToggle("Direction", option_toggle)
  point = Point3d.Unset

  while True:
    grc = gp.Get()
    if grc == GetResult.Option:
      continue
    elif grc == GetResult.Point:
      point = gp.Point()
      break
    else:
      return Result.Nothing

  if point == Point3d.Unset:
    return Result.Nothing

  direction = 1 if option_toggle.CurrentValue else 0
  b, u_parameter, v_parameter = surface.ClosestPoint(point)
  if not b: return Result.Failure

  iso_curve = surface.IsoCurve(direction, u_parameter if direction == 1 else v_parameter)
  if iso_curve == None: 
    return Result.Failure

  doc.Objects.AddCurve(iso_curve)
  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Surface', 'Curve IsoCurve(int direction,double constantParameter)']
    ]
  },
  {
    name: 'Textjustify.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry

Namespace examples_vb
  Public Class TextJustifyCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbTextJustify"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim text_entity = New TextEntity()
      text_entity.Plane = Plane.WorldXY
      text_entity.Text = "Hello Rhino!"
      text_entity.Justification = TextJustification.MiddleCenter
      text_entity.FontIndex = doc.Fonts.FindOrCreate("Arial", False, False)

      doc.Objects.AddText(text_entity)
      doc.Views.Redraw()

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.TextEntity', 'TextEntity()'],
      ['Rhino.Geometry.TextEntity', 'TextJustification Justification'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(Text3d text3d)'],
      ['Rhino.DocObjects.Tables.FontTable', 'int FindOrCreate(string face,bool bold,bool italic)']
    ]
  },
  {
    name: 'Textjustify.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Geometry;

namespace examples_cs
{
  public class TextJustifyCommand : Command
  {
    public override string EnglishName { get { return "csTextJustify"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var text_entity = new TextEntity
      {
        Plane = Plane.WorldXY,
        Text = "Hello Rhino!",
        Justification = TextJustification.MiddleCenter,
        FontIndex = doc.Fonts.FindOrCreate("Arial", false, false)
      };

      doc.Objects.AddText(text_entity);
      doc.Views.Redraw();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.TextEntity', 'TextEntity()'],
      ['Rhino.Geometry.TextEntity', 'TextJustification Justification'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(Text3d text3d)'],
      ['Rhino.DocObjects.Tables.FontTable', 'int FindOrCreate(string face,bool bold,bool italic)']
    ]
  },
  {
    name: 'Textjustify.py',
    code: `from scriptcontext import doc
from Rhino.Geometry import *

text_entity = TextEntity()
text_entity.Plane = Plane.WorldXY
text_entity.Text = "Hello Rhino!"
text_entity.Justification = TextJustification.MiddleCenter
text_entity.FontIndex = doc.Fonts.FindOrCreate("Arial", False, False)

doc.Objects.AddText(text_entity)
doc.Views.Redraw()`,
    members: [
      ['Rhino.Geometry.TextEntity', 'TextEntity()'],
      ['Rhino.Geometry.TextEntity', 'TextJustification Justification'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(Text3d text3d)'],
      ['Rhino.DocObjects.Tables.FontTable', 'int FindOrCreate(string face,bool bold,bool italic)']
    ]
  },
  {
    name: 'Addtorus.vb',
    code: `Partial Class Examples
  Public Shared Function AddTorus(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Const major_radius As Double = 4.0
    Const minor_radius As Double = 2.0

    Dim plane As Rhino.Geometry.Plane = Rhino.Geometry.Plane.WorldXY
    Dim torus As New Rhino.Geometry.Torus(plane, major_radius, minor_radius)
    Dim revsrf As Rhino.Geometry.RevSurface = torus.ToRevSurface()
    If doc.Objects.AddSurface(revsrf) <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Torus', 'Torus(Plane basePlane,double majorRadius,double minorRadius)'],
      ['Rhino.Geometry.Torus', 'RevSurface ToRevSurface()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSurface(Surface surface)']
    ]
  },
  {
    name: 'Addtorus.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddTorus(Rhino.RhinoDoc doc)
  {
    const double major_radius = 4.0;
    const double minor_radius = 2.0;

    Rhino.Geometry.Plane plane = Rhino.Geometry.Plane.WorldXY;
    Rhino.Geometry.Torus torus = new Rhino.Geometry.Torus(plane, major_radius, minor_radius);
    Rhino.Geometry.RevSurface revsrf = torus.ToRevSurface();
    if (doc.Objects.AddSurface(revsrf) != Guid.Empty)
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Geometry.Torus', 'Torus(Plane basePlane,double majorRadius,double minorRadius)'],
      ['Rhino.Geometry.Torus', 'RevSurface ToRevSurface()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSurface(Surface surface)']
    ]
  },
  {
    name: 'Addtorus.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddTorus():
    major_radius = 4.0
    minor_radius = 2.0

    plane = Rhino.Geometry.Plane.WorldXY
    torus = Rhino.Geometry.Torus(plane, major_radius, minor_radius)
    revsrf = torus.ToRevSurface()

    if scriptcontext.doc.Objects.AddSurface(revsrf)!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__=="__main__":
    AddTorus()
`,
    members: [
      ['Rhino.Geometry.Torus', 'Torus(Plane basePlane,double majorRadius,double minorRadius)'],
      ['Rhino.Geometry.Torus', 'RevSurface ToRevSurface()'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddSurface(Surface surface)']
    ]
  },
  {
    name: 'Transformbrep.vb',
    code: `Imports Rhino.Input

Partial Class Examples
  Public Shared Function TransformBrep(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rhobj As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = RhinoGet.GetOneObject("Select brep", True, Rhino.DocObjects.ObjectType.Brep, rhobj)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    ' Simple translation transformation
    Dim xform = Rhino.Geometry.Transform.Translation(18, -18, 25)
    doc.Objects.Transform(rhobj, xform, True)
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.Transform', 'static Transform Translation(double dx,double dy,double dz)']
    ]
  },
  {
    name: 'Transformbrep.cs',
    code: `using Rhino.Input;

partial class Examples
{
  public static Rhino.Commands.Result TransformBrep(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef rhobj;
    var rc = RhinoGet.GetOneObject("Select brep", true, Rhino.DocObjects.ObjectType.Brep, out rhobj);
    if(rc!= Rhino.Commands.Result.Success)
      return rc;

    // Simple translation transformation
    var xform = Rhino.Geometry.Transform.Translation(18,-18,25);
    doc.Objects.Transform(rhobj, xform, true);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.Transform', 'static Transform Translation(double dx,double dy,double dz)']
    ]
  },
  {
    name: 'Transformbrep.py',
    code: `import Rhino
import scriptcontext

def TransformBrep():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select brep", True, Rhino.DocObjects.ObjectType.Brep)
    if rc!=Rhino.Commands.Result.Success: return
    
    # Simple translation transformation
    xform = Rhino.Geometry.Transform.Translation(18,-18,25)
    scriptcontext.doc.Objects.Transform(objref, xform, True)
    scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    TransformBrep()`,
    members: [
      ['Rhino.Geometry.Transform', 'static Transform Translation(double dx,double dy,double dz)']
    ]
  },
  {
    name: 'Sweep1.vb',
    code: `Imports Rhino.Input
Imports System.Collections.Generic

Partial Class Examples
  Public Shared Function Sweep1(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rail_ref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = RhinoGet.GetOneObject("Select rail curve", False, Rhino.DocObjects.ObjectType.Curve, rail_ref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim rail_crv = rail_ref.Curve()
    If rail_crv Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim gx = New Rhino.Input.Custom.GetObject()
    gx.SetCommandPrompt("Select cross section curves")
    gx.GeometryFilter = Rhino.DocObjects.ObjectType.Curve
    gx.EnablePreSelect(False, True)
    gx.GetMultiple(1, 0)
    If gx.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gx.CommandResult()
    End If

    Dim cross_sections = New List(Of Rhino.Geometry.Curve)()
    For i As Integer = 0 To gx.ObjectCount - 1
      Dim crv = gx.Object(i).Curve()
      If crv IsNot Nothing Then
        cross_sections.Add(crv)
      End If
    Next
    If cross_sections.Count < 1 Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim sweep = New Rhino.Geometry.SweepOneRail()
    sweep.AngleToleranceRadians = doc.ModelAngleToleranceRadians
    sweep.ClosedSweep = False
    sweep.SweepTolerance = doc.ModelAbsoluteTolerance
    sweep.SetToRoadlikeTop()
    Dim breps = sweep.PerformSweep(rail_crv, cross_sections)
    For i As Integer = 0 To breps.Length - 1
      doc.Objects.AddBrep(breps(i))
    Next
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Geometry.SweepOneRail', 'SweepOneRail()'],
      ['Rhino.Geometry.SweepOneRail', 'Brep[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections)']
    ]
  },
  {
    name: 'Sweep1.cs',
    code: `using Rhino.Input;
using System.Collections.Generic;

partial class Examples
{
  public static Rhino.Commands.Result Sweep1(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef rail_ref;
    var rc = RhinoGet.GetOneObject("Select rail curve", false, Rhino.DocObjects.ObjectType.Curve, out rail_ref);
    if(rc!=Rhino.Commands.Result.Success)
      return rc;

    var rail_crv = rail_ref.Curve();
    if( rail_crv==null )
      return Rhino.Commands.Result.Failure;

    var gx = new Rhino.Input.Custom.GetObject();
    gx.SetCommandPrompt("Select cross section curves");
    gx.GeometryFilter = Rhino.DocObjects.ObjectType.Curve;
    gx.EnablePreSelect(false, true);
    gx.GetMultiple(1,0);
    if( gx.CommandResult() != Rhino.Commands.Result.Success )
      return gx.CommandResult();
    
    var cross_sections = new List<Rhino.Geometry.Curve>();
    for( int i=0; i<gx.ObjectCount; i++ )
    {
      var crv = gx.Object(i).Curve();
      if( crv!= null)
        cross_sections.Add(crv);
    }
    if( cross_sections.Count<1 )
      return Rhino.Commands.Result.Failure;

    var sweep = new Rhino.Geometry.SweepOneRail();
    sweep.AngleToleranceRadians = doc.ModelAngleToleranceRadians;
    sweep.ClosedSweep = false;
    sweep.SweepTolerance = doc.ModelAbsoluteTolerance;
    sweep.SetToRoadlikeTop();
    var breps = sweep.PerformSweep(rail_crv, cross_sections);
    for( int i=0; i<breps.Length; i++ )
      doc.Objects.AddBrep(breps[i]);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Geometry.SweepOneRail', 'SweepOneRail()'],
      ['Rhino.Geometry.SweepOneRail', 'Brep[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections)']
    ]
  },
  {
    name: 'Sweep1.py',
    code: `import rhinoscriptsyntax as rs
import Rhino
import scriptcontext

def Sweep1():
    rail = rs.GetObject("Select rail curve", rs.filter.curve)
    rail_crv = rs.coercecurve(rail)
    if not rail_crv: return

    cross_sections = rs.GetObjects("Select cross section curves", rs.filter.curve)
    if not cross_sections: return
    cross_sections = [rs.coercecurve(crv) for crv in cross_sections]

    sweep = Rhino.Geometry.SweepOneRail()
    sweep.AngleToleranceRadians = scriptcontext.doc.ModelAngleToleranceRadians
    sweep.ClosedSweep = False
    sweep.SweepTolerance = scriptcontext.doc.ModelAbsoluteTolerance
    sweep.SetToRoadlikeTop()
    breps = sweep.PerformSweep(rail_crv, cross_sections)
    for brep in breps: scriptcontext.doc.Objects.AddBrep(brep)
    scriptcontext.doc.Views.Redraw()

if __name__ == "__main__":
    Sweep1()
`,
    members: [
      ['Rhino.Geometry.SweepOneRail', 'SweepOneRail()'],
      ['Rhino.Geometry.SweepOneRail', 'Brep[] PerformSweep(Curve rail,IEnumerable<Curve> crossSections)']
    ]
  },
  {
    name: 'Gettext.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Commands
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class ReadDimensionTextCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbReadDimensionText"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim go = New GetObject()
      go.SetCommandPrompt("Select annotation")
      go.GeometryFilter = ObjectType.Annotation
      go.[Get]()
      If go.CommandResult() <> Result.Success Then
        Return Result.Failure
      End If
      Dim annotation = TryCast(go.[Object](0).[Object](), AnnotationObjectBase)
      If annotation Is Nothing Then
        Return Result.Failure
      End If

      RhinoApp.WriteLine("Annotation text = {0}", annotation.DisplayText)

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.AnnotationObjectBase', 'string DisplayText']
    ]
  },
  {
    name: 'Gettext.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Commands;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class ReadDimensionTextCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csReadDimensionText"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var go = new GetObject();
      go.SetCommandPrompt("Select annotation");
      go.GeometryFilter = ObjectType.Annotation;
      go.Get();
      if (go.CommandResult() != Result.Success) 
        return Result.Failure;
      var annotation = go.Object(0).Object() as AnnotationObjectBase;
      if (annotation == null)
        return Result.Failure;

      RhinoApp.WriteLine("Annotation text = {0}", annotation.DisplayText);

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.AnnotationObjectBase', 'string DisplayText']
    ]
  },
  {
    name: 'Gettext.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from Rhino.Input.Custom import *
import rhinoscriptsyntax as rs

def RunCommand():
  go = GetObject()
  go.SetCommandPrompt("Select annotation")
  go.GeometryFilter = ObjectType.Annotation
  go.Get()
  if go.CommandResult() <> Result.Success:
    return Result.Failure
  annotation = go.Object(0).Object()
  if annotation == None or not isinstance(annotation, AnnotationObjectBase):
    return Result.Failure

  print "Annotation text = {0}".format(annotation.DisplayText)

  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.AnnotationObjectBase', 'string DisplayText']
    ]
  },
  {
    name: 'Findobjectsbyname.vb',
    code: `Partial Class Examples
  Public Shared Function FindObjectsByName(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Const name As String = "abc"
    Dim settings As New Rhino.DocObjects.ObjectEnumeratorSettings()
    settings.NameFilter = name
    Dim ids As New System.Collections.Generic.List(Of Guid)()
    For Each rhObj As Rhino.DocObjects.RhinoObject In doc.Objects.GetObjectList(settings)
      ids.Add(rhObj.Id)
    Next

    If ids.Count = 0 Then
      Rhino.RhinoApp.WriteLine("No objects with the name " & name)
      Return Rhino.Commands.Result.Failure
    Else
      Rhino.RhinoApp.WriteLine("Found {0} objects", ids.Count)
      For i As Integer = 0 To ids.Count - 1
        Rhino.RhinoApp.WriteLine("  {0}", ids(i))
      Next
    End If

    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'ObjectEnumeratorSettings()'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'string NameFilter'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(ObjectEnumeratorSettings settings)']
    ]
  },
  {
    name: 'Findobjectsbyname.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result FindObjectsByName(Rhino.RhinoDoc doc)
  {
    const string name = "abc";
    Rhino.DocObjects.ObjectEnumeratorSettings settings = new Rhino.DocObjects.ObjectEnumeratorSettings();
    settings.NameFilter = name;
    System.Collections.Generic.List<Guid> ids = new System.Collections.Generic.List<Guid>();
    foreach (Rhino.DocObjects.RhinoObject rhObj in doc.Objects.GetObjectList(settings))
      ids.Add(rhObj.Id);

    if (ids.Count == 0)
    {
      Rhino.RhinoApp.WriteLine("No objects with the name " + name);
      return Rhino.Commands.Result.Failure;
    }

    Rhino.RhinoApp.WriteLine("Found {0} objects", ids.Count);
    foreach (Guid id in ids)
      Rhino.RhinoApp.WriteLine("  {0}", id);

    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'ObjectEnumeratorSettings()'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'string NameFilter'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(ObjectEnumeratorSettings settings)']
    ]
  },
  {
    name: 'Findobjectsbyname.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def FindObjectsByName():
    name = "abc"
    settings = Rhino.DocObjects.ObjectEnumeratorSettings()
    settings.NameFilter = name
    ids = [rhobj.Id for rhobj in scriptcontext.doc.Objects.GetObjectList(settings)]
    if not ids:
        print "No objects with the name", name
        return Rhino.Commands.Result.Failure
    else:
        print "Found", len(ids), "objects"
        for id in ids: print "  ", id
    return Rhino.Commands.Result.Success

if __name__ == "__main__":
    FindObjectsByName()
`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'ObjectEnumeratorSettings()'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'string NameFilter'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'IEnumerable<RhinoObject> GetObjectList(ObjectEnumeratorSettings settings)']
    ]
  },
  {
    name: 'Objectiterator.vb',
    code: `
Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class ObjectEnumeratorCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbObjectEnumerator"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim object_enumerator_settings = New ObjectEnumeratorSettings()
      object_enumerator_settings.IncludeLights = True
      object_enumerator_settings.IncludeGrips = False
      Dim rhino_objects = doc.Objects.GetObjectList(object_enumerator_settings)

      Dim count As Integer = 0
      For Each rhino_object As RhinoObject In rhino_objects
        If rhino_object.IsSelectable() AndAlso rhino_object.IsSelected(False) = 0 Then
          rhino_object.[Select](True)
          count += 1
        End If
      Next
      If count > 0 Then
        doc.Views.Redraw()
        RhinoApp.WriteLine("{0} object{1} selected", count, If(count = 1, "", "s"))
      End If
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeGrips'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeLights']
    ]
  },
  {
    name: 'Objectiterator.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;

namespace examples_cs
{
  public class ObjectEnumeratorCommand : Command
  {
    public override string EnglishName
    {
      get { return "csObjectEnumerator"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var object_enumerator_settings = new ObjectEnumeratorSettings();
      object_enumerator_settings.IncludeLights = true;
      object_enumerator_settings.IncludeGrips = false;
      var rhino_objects = doc.Objects.GetObjectList(object_enumerator_settings);

      int count = 0;
      foreach (var rhino_object in rhino_objects)
      {
        if (rhino_object.IsSelectable() && rhino_object.IsSelected(false) == 0)
        {
          rhino_object.Select(true);
          count++;
        }
      }
      if (count > 0)
      {
        doc.Views.Redraw();
        RhinoApp.WriteLine("{0} object{1} selected", count,
          count == 1 ? "" : "s");
      }
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeGrips'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeLights']
    ]
  },
  {
    name: 'Objectiterator.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Commands import *
from scriptcontext import doc

def RunCommand():
  object_enumerator_settings = ObjectEnumeratorSettings()
  object_enumerator_settings.IncludeLights = True
  object_enumerator_settings.IncludeGrips = False
  rhino_objects = doc.Objects.GetObjectList(object_enumerator_settings)

  count = 0
  for rhino_object in rhino_objects:
    if rhino_object.IsSelectable() and rhino_object.IsSelected(False) == 0:
      rhino_object.Select(True)
      count += 1;

  if count > 0:
    doc.Views.Redraw()
    RhinoApp.WriteLine("{0} object{1} selected", count,
      "" if count == 1 else "s")

  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeGrips'],
      ['Rhino.DocObjects.ObjectEnumeratorSettings', 'bool IncludeLights']
    ]
  },
  {
    name: 'Blockinsertionpoint.vb',
    code: `Partial Class Examples
  Public Shared Function BlockInsertionPoint(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rc As Rhino.Commands.Result
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    rc = Rhino.Input.RhinoGet.GetOneObject("Select instance", True, Rhino.DocObjects.ObjectType.InstanceReference, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    Dim instance As Rhino.DocObjects.InstanceObject = TryCast(objref.[Object](), Rhino.DocObjects.InstanceObject)
    If instance IsNot Nothing Then
      Dim pt As Rhino.Geometry.Point3d = instance.InsertionPoint
      doc.Objects.AddPoint(pt)
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'Point3d InsertionPoint']
    ]
  },
  {
    name: 'Blockinsertionpoint.cs',
    code: `using Rhino.Commands;

partial class Examples
{
  public static Rhino.Commands.Result BlockInsertionPoint(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef objref;
    Result rc = Rhino.Input.RhinoGet.GetOneObject("Select instance", true, Rhino.DocObjects.ObjectType.InstanceReference, out objref);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    Rhino.DocObjects.InstanceObject instance = objref.Object() as Rhino.DocObjects.InstanceObject;
    if (instance != null)
    {
      Rhino.Geometry.Point3d pt = instance.InsertionPoint;
      doc.Objects.AddPoint(pt);
      doc.Views.Redraw();
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'Point3d InsertionPoint']
    ]
  },
  {
    name: 'Blockinsertionpoint.py',
    code: `import Rhino
import scriptcontext

def BlockInsertionPoint():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select instance", True, Rhino.DocObjects.ObjectType.InstanceReference)
    if rc!=Rhino.Commands.Result.Success: return rc;
    instance = objref.Object()
    if instance:
        pt = instance.InsertionPoint
        scriptcontext.doc.Objects.AddPoint(pt)
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure

if __name__=="__main__":
    BlockInsertionPoint()
`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'Point3d InsertionPoint']
    ]
  },
  {
    name: 'Instancedefinitionobjects.vb',
    code: `Partial Class Examples
  Public Shared Function InstanceDefinitionObjects(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select instance", False, Rhino.DocObjects.ObjectType.InstanceReference, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim iref = TryCast(objref.Object(), Rhino.DocObjects.InstanceObject)
    If iref IsNot Nothing Then
      Dim idef = iref.InstanceDefinition
      If idef IsNot Nothing Then
        Dim rhino_objects = idef.GetObjects()
        For i As Integer = 0 To rhino_objects.Length - 1
          Rhino.RhinoApp.WriteLine("Object {0} = {1}", i, rhino_objects(i).Id)
        Next
      End If
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'InstanceDefinition InstanceDefinition'],
      ['Rhino.DocObjects.InstanceDefinition', 'RhinoObject[] GetObjects()']
    ]
  },
  {
    name: 'Instancedefinitionobjects.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result InstanceDefinitionObjects(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef objref;
    var rc = Rhino.Input.RhinoGet.GetOneObject("Select instance", false, Rhino.DocObjects.ObjectType.InstanceReference, out objref);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    var iref = objref.Object() as Rhino.DocObjects.InstanceObject;
    if (iref != null)
    {
      var idef = iref.InstanceDefinition;
      if (idef != null)
      {
        var rhino_objects = idef.GetObjects();
        for (int i = 0; i < rhino_objects.Length; i++)
          Rhino.RhinoApp.WriteLine("Object {0} = {1}", i, rhino_objects[i].Id);
      }
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'InstanceDefinition InstanceDefinition'],
      ['Rhino.DocObjects.InstanceDefinition', 'RhinoObject[] GetObjects()']
    ]
  },
  {
    name: 'Instancedefinitionobjects.py',
    code: `import Rhino
import scriptcontext

def InstanceDefinitionObjects():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select instance", False, Rhino.DocObjects.ObjectType.InstanceReference)
    if rc != Rhino.Commands.Result.Success: return

    iref = objref.Object()
    if iref:
        idef = iref.InstanceDefinition
        if idef:
            rhino_objects = idef.GetObjects()
            for i, rhobj in enumerate(rhino_objects):
                print "Object", i, "=", rhobj.Id

if __name__=="__main__":
    InstanceDefinitionObjects()`,
    members: [
      ['Rhino.DocObjects.InstanceObject', 'InstanceDefinition InstanceDefinition'],
      ['Rhino.DocObjects.InstanceDefinition', 'RhinoObject[] GetObjects()']
    ]
  },
  {
    name: 'Renameblock.vb',
    code: `Imports Rhino
Imports Rhino.Commands

Namespace examples_vb
  Public Class RenameBlockCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbRenameInstanceDefinition"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' Get the name of the insance definition to rename
      Dim instanceDefinitionName As String = ""
      Dim rc = Rhino.Input.RhinoGet.GetString("Name of block to rename", True, instanceDefinitionName)
      If rc <> Result.Success Then
        Return rc
      End If
      If [String].IsNullOrWhiteSpace(instanceDefinitionName) Then
        Return Result.[Nothing]
      End If

      ' Verify instance definition exists
      Dim instanceDefinition = doc.InstanceDefinitions.Find(instanceDefinitionName, True)
      If instanceDefinition Is Nothing Then
        RhinoApp.WriteLine([String].Format("Block ""{0}"" not found.", instanceDefinitionName))
        Return Result.[Nothing]
      End If

      ' Verify instance definition is rename-able
      If instanceDefinition.IsDeleted OrElse instanceDefinition.IsReference Then
        RhinoApp.WriteLine([String].Format("Unable to rename block ""{0}"".", instanceDefinitionName))
        Return Result.[Nothing]
      End If

      ' Get the new instance definition name
      Dim instanceDefinitionNewName As String = ""
      rc = Rhino.Input.RhinoGet.GetString("Name of block to rename", True, instanceDefinitionNewName)
      If rc <> Result.Success Then
        Return rc
      End If
      If [String].IsNullOrWhiteSpace(instanceDefinitionNewName) Then
        Return Result.[Nothing]
      End If

      ' Verify the new instance definition name is not already in use
      Dim existingInstanceDefinition = doc.InstanceDefinitions.Find(instanceDefinitionNewName, True)
      If existingInstanceDefinition IsNot Nothing AndAlso Not existingInstanceDefinition.IsDeleted Then
        RhinoApp.WriteLine([String].Format("Block ""{0}"" already exists.", existingInstanceDefinition))
        Return Result.[Nothing]
      End If

      ' change the block name
      If Not doc.InstanceDefinitions.Modify(instanceDefinition.Index, instanceDefinitionNewName, instanceDefinition.Description, True) Then
        RhinoApp.WriteLine([String].Format("Could not rename {0} to {1}", instanceDefinition.Name, instanceDefinitionNewName))
        Return Result.Failure
      End If

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsDeleted'],
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsReference'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'bool Modify(int idefIndex,string newName,string newDescription,bool quiet)']
    ]
  },
  {
    name: 'Renameblock.cs',
    code: `using Rhino;
using Rhino.Input;
using Rhino.Commands;

namespace examples_cs
{
  public class RenameBlockCommand : Command
  {
    public override string EnglishName { get { return "csRenameBlock"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // Get the name of the insance definition to rename
      var instance_definition_name = "";
      var rc = RhinoGet.GetString("Name of block to rename", true, ref instance_definition_name);
      if (rc != Result.Success)
        return rc;
      if (string.IsNullOrWhiteSpace(instance_definition_name))
        return Result.Nothing;
     
      // Verify instance definition exists
      var instance_definition = doc.InstanceDefinitions.Find(instance_definition_name, true);
      if (instance_definition == null) {
        RhinoApp.WriteLine("Block '{0}' not found.", instance_definition_name);
        return Result.Nothing;
      }

      // Verify instance definition is rename-able
      if (instance_definition.IsDeleted || instance_definition.IsReference) {
        RhinoApp.WriteLine("Unable to rename block '{0}'.", instance_definition_name);
        return Result.Nothing;
      }
     
      // Get the new instance definition name
      string instance_definition_new_name = "";
      rc = RhinoGet.GetString("Name of block to rename", true, ref instance_definition_new_name);
      if (rc != Result.Success)
        return rc;
      if (string.IsNullOrWhiteSpace(instance_definition_new_name))
        return Result.Nothing;

      // Verify the new instance definition name is not already in use
      var existing_instance_definition = doc.InstanceDefinitions.Find(instance_definition_new_name, true);
      if (existing_instance_definition != null && !existing_instance_definition.IsDeleted) {
        RhinoApp.WriteLine("Block '{0}' already exists.", existing_instance_definition);
        return Result.Nothing;
      }
     
      // change the block name
      if (!doc.InstanceDefinitions.Modify(instance_definition.Index, instance_definition_new_name, instance_definition.Description, true)) {
        RhinoApp.WriteLine("Could not rename {0} to {1}", instance_definition.Name, instance_definition_new_name);
        return Result.Failure;
      }

      return Result.Success;
    }
  }
}
`,
    members: [
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsDeleted'],
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsReference'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'bool Modify(int idefIndex,string newName,string newDescription,bool quiet)']
    ]
  },
  {
    name: 'Renameblock.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import doc

def Rename():
    blockName = rs.GetString("block to rename")
    instanceDefinition = doc.InstanceDefinitions.Find(blockName, True)
    if not instanceDefinition: 
        print "{0} block does not exist".format(blockName)
        return
    
    newName = rs.GetString("new name")
    instanceDefinition = doc.InstanceDefinitions.Find(newName, True)
    if instanceDefinition: 
        print "the name '{0}' is already taken by another block".format(newName)
        return

    rs.RenameBlock(blockName, newName)
    
if __name__ == "__main__":
    Rename()`,
    members: [
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsDeleted'],
      ['Rhino.DocObjects.InstanceDefinition', 'bool IsReference'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'bool Modify(int idefIndex,string newName,string newDescription,bool quiet)']
    ]
  },
  {
    name: 'Locklayer.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports System.Linq

Namespace examples_vb
  Public Class LockLayerCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbLockLayer"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim layerName As String = ""
      Dim rc = Rhino.Input.RhinoGet.GetString("Name of layer to lock", True, layerName)
      If rc <> Result.Success Then
        Return rc
      End If
      If [String].IsNullOrWhiteSpace(layerName) Then
        Return Result.[Nothing]
      End If

      ' because of sublayers it's possible that mone than one layer has the same name
      ' so simply calling doc.Layers.Find(layerName) isn't good enough.  If "layerName" returns
      ' more than one layer then present them to the user and let him decide.
      Dim matchingLayers = (From layer In doc.Layers Where layer.Name = layerName Select layer).ToList()

      Dim layerToLock As Rhino.DocObjects.Layer = Nothing
      If matchingLayers.Count = 0 Then
        RhinoApp.WriteLine([String].Format("Layer ""{0}"" does not exist.", layerName))
        Return Result.[Nothing]
      ElseIf matchingLayers.Count = 1 Then
        layerToLock = matchingLayers(0)
      ElseIf matchingLayers.Count > 1 Then
        For i As Integer = 0 To matchingLayers.Count - 1
          RhinoApp.WriteLine([String].Format("({0}) {1}", i + 1, matchingLayers(i).FullPath.Replace("::", "->")))
        Next
        Dim selectedLayer As Integer = -1
        rc = Rhino.Input.RhinoGet.GetInteger("which layer?", True, selectedLayer)
        If rc <> Result.Success Then
          Return rc
        End If
        If selectedLayer > 0 AndAlso selectedLayer <= matchingLayers.Count Then
          layerToLock = matchingLayers(selectedLayer - 1)
        Else
          Return Result.[Nothing]
        End If
      End If

      If layerToLock Is Nothing Then
        Return Result.Nothing
      End If

      If Not layerToLock.IsLocked Then
        layerToLock.IsLocked = True
        layerToLock.CommitChanges()
        Return Result.Success
      Else
        RhinoApp.WriteLine([String].Format("layer {0} is already locked.", layerToLock.FullPath))
        Return Result.[Nothing]
      End If
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.Layer', 'string FullPath'],
      ['Rhino.DocObjects.Layer', 'bool IsLocked'],
      ['Rhino.DocObjects.Layer', 'bool CommitChanges()']
    ]
  },
  {
    name: 'Locklayer.cs',
    code: `using Rhino;
using Rhino.Input;
using Rhino.Commands;
using System;
using System.Linq;

namespace examples_cs
{
  public class LockLayerCommand : Command
  {
    public override string EnglishName { get { return "csLockLayer"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      string layer_name = "";
      var rc = RhinoGet.GetString("Name of layer to lock", true, ref layer_name);
      if (rc != Result.Success)
        return rc;
      if (String.IsNullOrWhiteSpace(layer_name))
        return Result.Nothing;
     
      // because of sublayers it's possible that mone than one layer has the same name
      // so simply calling doc.Layers.Find(layerName) isn't good enough.  If "layerName" returns
      // more than one layer then present them to the user and let him decide.
      var matching_layers = (from layer in doc.Layers
                             where layer.Name == layer_name
                             select layer).ToList<Rhino.DocObjects.Layer>();

      Rhino.DocObjects.Layer layer_to_lock = null;
      if (matching_layers.Count == 0)
      {
        RhinoApp.WriteLine("Layer '{0}' does not exist.", layer_name);
        return Result.Nothing;
      }
      else if (matching_layers.Count == 1)
      {
        layer_to_lock = matching_layers[0];
      }
      else if (matching_layers.Count > 1)
      {
        for (int i = 0; i < matching_layers.Count; i++)
        {
          RhinoApp.WriteLine("({0}) {1}", i+1, matching_layers[i].FullPath.Replace("::", "->"));
        }
        int selected_layer = -1;
        rc = RhinoGet.GetInteger("which layer?", true, ref selected_layer);
        if (rc != Result.Success)
          return rc;
        if (selected_layer > 0 && selected_layer <= matching_layers.Count)
          layer_to_lock = matching_layers[selected_layer - 1];
        else return Result.Nothing;
      }

      if (layer_to_lock == null)
        return Result.Nothing;

      if (!layer_to_lock.IsLocked)
      {
        layer_to_lock.IsLocked = true;
        layer_to_lock.CommitChanges();
        return Result.Success;
      }
      else
      {
        RhinoApp.WriteLine("layer {0} is already locked.", layer_to_lock.FullPath);
        return Result.Nothing;
      } 
    }
  }
}
`,
    members: [
      ['Rhino.DocObjects.Layer', 'string FullPath'],
      ['Rhino.DocObjects.Layer', 'bool IsLocked'],
      ['Rhino.DocObjects.Layer', 'bool CommitChanges()']
    ]
  },
  {
    name: 'Locklayer.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import doc

def lock():
    layerName = rs.GetString("Name of layer to lock")
    
    matchingLayers = [layer for layer in doc.Layers if layer.Name == layerName]
    
    layerToLock = None
    if len(matchingLayers) == 0:
        print "Layer "{0}" does not exist.".format(layerName)
    elif len(matchingLayers) == 1:
        layerToLock = matchingLayers[0]
    elif len(matchingLayers) > 1:
        i = 0;
        for layer in matchingLayers:
            print "({0}) {1}".format(i+1, matchingLayers[i].FullPath.replace("::", "->"))
            i += 1
            
        selectedLayer = rs.GetInteger("which layer?", -1, 1, len(matchingLayers))
        if selectedLayer == None:
            return
        layerToLock = matchingLayers[selectedLayer - 1]
        
    if layerToLock.IsLocked:
        print "layer {0} is already locked.".format(layerToLock.FullPath)
    else:
        layerToLock.IsLocked = True
        layerToLock.CommitChanges()
          
if __name__ == "__main__":
    lock()
        `,
    members: [
      ['Rhino.DocObjects.Layer', 'string FullPath'],
      ['Rhino.DocObjects.Layer', 'bool IsLocked'],
      ['Rhino.DocObjects.Layer', 'bool CommitChanges()']
    ]
  },
  {
    name: 'Sellayer.vb',
    code: `Partial Class Examples
  Public Shared Function SelLayer(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rc As Rhino.Commands.Result
    ' Prompt for a layer name
    Dim layername As String = doc.Layers.CurrentLayer.Name
    rc = Rhino.Input.RhinoGet.GetString("Name of layer to select objects", True, layername)
    If rc <> Rhino.Commands.Result.Success Then Return rc

    ' Get all of the objects on the layer. If layername is bogus, you will
    ' just get an empty list back
    Dim rhobjs As Rhino.DocObjects.RhinoObject() = doc.Objects.FindByLayer(layername)
    If rhobjs Is Nothing OrElse rhobjs.Length < 1 Then
      Return Rhino.Commands.Result.Cancel
    End If

    For i As Integer = 0 To rhobjs.Length - 1
      rhobjs(i).Select(True)
    Next
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.Layer', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'RhinoObject[] FindByLayer(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer CurrentLayer']
    ]
  },
  {
    name: 'Sellayer.cs',
    code: `using Rhino.Commands;

partial class Examples
{
  public static Rhino.Commands.Result SelLayer(Rhino.RhinoDoc doc)
  {
    // Prompt for a layer name
    string layername = doc.Layers.CurrentLayer.Name;
    Result rc = Rhino.Input.RhinoGet.GetString("Name of layer to select objects", true, ref layername);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    // Get all of the objects on the layer. If layername is bogus, you will
    // just get an empty list back
    Rhino.DocObjects.RhinoObject[] rhobjs = doc.Objects.FindByLayer(layername);
    if (rhobjs == null || rhobjs.Length < 1)
      return Rhino.Commands.Result.Cancel;

    for (int i = 0; i < rhobjs.Length; i++)
      rhobjs[i].Select(true);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.Layer', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'RhinoObject[] FindByLayer(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer CurrentLayer']
    ]
  },
  {
    name: 'Sellayer.py',
    code: `import Rhino
import scriptcontext
import System.Guid, System.Drawing.Color

def SelLayer():
    # Prompt for a layer name
    layername = scriptcontext.doc.Layers.CurrentLayer.Name
    rc, layername = Rhino.Input.RhinoGet.GetString("Name of layer to select objects", True, layername)
    if rc!=Rhino.Commands.Result.Success: return rc
    
    # Get all of the objects on the layer. If layername is bogus, you will
    # just get an empty list back
    rhobjs = scriptcontext.doc.Objects.FindByLayer(layername)
    if not rhobjs: Rhino.Commands.Result.Cancel
    
    for obj in rhobjs: obj.Select(True)
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    SelLayer()
`,
    members: [
      ['Rhino.DocObjects.Layer', 'string Name'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'RhinoObject[] FindByLayer(string layerName)'],
      ['Rhino.DocObjects.Tables.LayerTable', 'Layer CurrentLayer']
    ]
  },
  {
    name: 'Addchildlayer.vb',
    code: `Partial Class Examples
  Public Shared Function AddChildLayer(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Get an existing layer
    Dim default_name As String = doc.Layers.CurrentLayer.Name

    ' Prompt the user to enter a layer name
    Dim gs As New Rhino.Input.Custom.GetString()
    gs.SetCommandPrompt("Name of existing layer")
    gs.SetDefaultString(default_name)
    gs.AcceptNothing(True)
    gs.[Get]()
    If gs.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gs.CommandResult()
    End If

    ' Was a layer named entered?
    Dim layer_name As String = gs.StringResult().Trim()
    Dim index As Integer = doc.Layers.Find(layer_name, True)
    If index < 0 Then
      Return Rhino.Commands.Result.Cancel
    End If

    Dim parent_layer As Rhino.DocObjects.Layer = doc.Layers(index)

    ' Create a child layer
    Dim child_name As String = parent_layer.Name + "_child"
    Dim childlayer As New Rhino.DocObjects.Layer()
    childlayer.ParentLayerId = parent_layer.Id
    childlayer.Name = child_name
    childlayer.Color = System.Drawing.Color.Red

    index = doc.Layers.Add(childlayer)
    If index < 0 Then
      Rhino.RhinoApp.WriteLine("Unable to add {0} layer.", child_name)
      Return Rhino.Commands.Result.Failure
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class`,
    members: [
      ['Rhino.DocObjects.Layer', 'Guid ParentLayerId'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(Layer layer)']
    ]
  },
  {
    name: 'Addchildlayer.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result AddChildLayer(Rhino.RhinoDoc doc)
  {
    // Get an existing layer
    string default_name = doc.Layers.CurrentLayer.Name;

    // Prompt the user to enter a layer name
    Rhino.Input.Custom.GetString gs = new Rhino.Input.Custom.GetString();
    gs.SetCommandPrompt("Name of existing layer");
    gs.SetDefaultString(default_name);
    gs.AcceptNothing(true);
    gs.Get();
    if (gs.CommandResult() != Rhino.Commands.Result.Success)
      return gs.CommandResult();

    // Was a layer named entered?
    string layer_name = gs.StringResult().Trim();
    int index = doc.Layers.Find(layer_name, true);
    if (index<0)
      return Rhino.Commands.Result.Cancel;

    Rhino.DocObjects.Layer parent_layer = doc.Layers[index];

    // Create a child layer
    string child_name = parent_layer.Name + "_child";
    Rhino.DocObjects.Layer childlayer = new Rhino.DocObjects.Layer();
    childlayer.ParentLayerId = parent_layer.Id;
    childlayer.Name = child_name;
    childlayer.Color = System.Drawing.Color.Red;

    index = doc.Layers.Add(childlayer);
    if (index < 0)
    {
      Rhino.RhinoApp.WriteLine("Unable to add {0} layer.", child_name);
      return Rhino.Commands.Result.Failure;
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.Layer', 'Guid ParentLayerId'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(Layer layer)']
    ]
  },
  {
    name: 'Addchildlayer.py',
    code: `import Rhino
import scriptcontext
import System.Drawing.Color

def AddChildLayer():
    # Get an existing layer
    default_name = scriptcontext.doc.Layers.CurrentLayer.Name
    # Prompt the user to enter a layer name
    gs = Rhino.Input.Custom.GetString()
    gs.SetCommandPrompt("Name of existing layer")
    gs.SetDefaultString(default_name)
    gs.AcceptNothing(True)
    gs.Get()
    if gs.CommandResult()!=Rhino.Commands.Result.Success:
        return gs.CommandResult()

    # Was a layer named entered?
    layer_name = gs.StringResult().Trim()
    index = scriptcontext.doc.Layers.Find(layer_name, True)
    if index<0: return Rhino.Commands.Result.Cancel

    parent_layer = scriptcontext.doc.Layers[index]

    # Create a child layer
    child_name = parent_layer.Name + "_child"
    childlayer = Rhino.DocObjects.Layer()
    childlayer.ParentLayerId = parent_layer.Id
    childlayer.Name = child_name
    childlayer.Color = System.Drawing.Color.Red

    index = scriptcontext.doc.Layers.Add(childlayer)
    if index<0:
      print "Unable to add", child_name, "layer."
      return Rhino.Commands.Result.Failure
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    AddChildLayer()`,
    members: [
      ['Rhino.DocObjects.Layer', 'Guid ParentLayerId'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int Add(Layer layer)']
    ]
  },
  {
    name: 'Duplicateobject.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects
Imports Rhino.Input

Namespace examples_vb
  Public Class DuplicateObjectCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDuplicateObject"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing

      Dim rc = RhinoGet.GetOneObject("Select object to duplicate", False, ObjectType.AnyObject, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim rhino_object = obj_ref.[Object]()

      Dim geometry_base = rhino_object.DuplicateGeometry()
      If geometry_base IsNot Nothing Then
        If doc.Objects.Add(geometry_base) <> Guid.Empty Then
          doc.Views.Redraw()
        End If
      End If

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.RhinoObject', 'GeometryBase DuplicateGeometry()']
    ]
  },
  {
    name: 'Duplicateobject.cs',
    code: `using System;
using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;
using Rhino.Input;

namespace examples_cs
{
  public class DuplicateObjectCommand : Command
  {
    public override string EnglishName { get { return "csDuplicateObject"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select object to duplicate", false, ObjectType.AnyObject, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var rhino_object = obj_ref.Object();

      var geometry_base = rhino_object.DuplicateGeometry();
      if (geometry_base != null)
        if (doc.Objects.Add(geometry_base) != Guid.Empty)
          doc.Views.Redraw();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.RhinoObject', 'GeometryBase DuplicateGeometry()']
    ]
  },
  {
    name: 'Duplicateobject.py',
    code: `from System import *
from Rhino import *
from Rhino.Commands import *
from Rhino.DocObjects import *
from Rhino.Input import *
from scriptcontext import doc

def RunCommand():
  
  rc, obj_ref = RhinoGet.GetOneObject("Select object to duplicate", False, ObjectType.AnyObject)
  if rc <> Result.Success:
    return rc
  rhino_object = obj_ref.Object()

  geometry_base = rhino_object.DuplicateGeometry()
  if geometry_base <> None:
    if doc.Objects.Add(geometry_base) <> Guid.Empty:
      doc.Views.Redraw()

  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.RhinoObject', 'GeometryBase DuplicateGeometry()']
    ]
  },
  {
    name: 'Modifyobjectcolor.vb',
    code: `Imports System.Drawing
Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Input
Imports Rhino.Commands

Namespace examples_vb
  Public Class ModifyObjectColorCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbModifyObjectColor"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject("Select object", False, ObjectType.AnyObject, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim rhino_object = obj_ref.[Object]()
      Dim color__1 = rhino_object.Attributes.ObjectColor
      Dim b As Boolean = Rhino.UI.Dialogs.ShowColorDialog(color__1)
      If Not b Then
        Return Result.Cancel
      End If

      rhino_object.Attributes.ObjectColor = color__1
      rhino_object.Attributes.ColorSource = ObjectColorSource.ColorFromObject
      rhino_object.CommitChanges()

      ' an object's color attributes can also be specified
      ' when the object is added to Rhino
      Dim sphere = New Sphere(Point3d.Origin, 5.0)
      Dim attributes = New ObjectAttributes()
      attributes.ObjectColor = Color.CadetBlue
      attributes.ColorSource = ObjectColorSource.ColorFromObject
      doc.Objects.AddSphere(sphere, attributes)

      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'ObjectColorSource ColorSource'],
      ['Rhino.DocObjects.ObjectAttributes', 'Color ObjectColor']
    ]
  },
  {
    name: 'Modifyobjectcolor.cs',
    code: `using System.Drawing;
using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Input;
using Rhino.Commands;

namespace examples_cs
{
  public class ModifyObjectColorCommand : Command
  {
    public override string EnglishName { get { return "csModifyObjectColor"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("Select object", false, ObjectType.AnyObject, out obj_ref);
      if (rc != Result.Success)
        return rc;
      var rhino_object = obj_ref.Object();
      var color = rhino_object.Attributes.ObjectColor;
      bool b = Rhino.UI.Dialogs.ShowColorDialog(ref color);
      if (!b) return Result.Cancel;

      rhino_object.Attributes.ObjectColor = color;
      rhino_object.Attributes.ColorSource = ObjectColorSource.ColorFromObject;
      rhino_object.CommitChanges();

      // an object's color attributes can also be specified
      // when the object is added to Rhino
      var sphere = new Sphere(Point3d.Origin, 5.0);
      var attributes = new ObjectAttributes();
      attributes.ObjectColor = Color.CadetBlue;
      attributes.ColorSource = ObjectColorSource.ColorFromObject;
      doc.Objects.AddSphere(sphere, attributes);

      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'ObjectColorSource ColorSource'],
      ['Rhino.DocObjects.ObjectAttributes', 'Color ObjectColor']
    ]
  },
  {
    name: 'Modifyobjectcolor.py',
    code: `from System.Drawing import *
from Rhino import *
from Rhino.DocObjects import *
from Rhino.Geometry import *
from Rhino.Input import *
from Rhino.Commands import *
from Rhino.UI.Dialogs import ShowColorDialog
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("Select object", False, ObjectType.AnyObject)
  if rc <> Result.Success:
    return rc
  rhino_object = obj_ref.Object()
  color = rhino_object.Attributes.ObjectColor
  b, color = ShowColorDialog(color)
  if not b: return Result.Cancel

  rhino_object.Attributes.ObjectColor = color
  rhino_object.Attributes.ColorSource = ObjectColorSource.ColorFromObject
  rhino_object.CommitChanges()

  # an object's color attributes can also be specified
  # when the object is added to Rhino
  sphere = Sphere(Point3d.Origin, 5.0)
  attributes = ObjectAttributes()
  attributes.ObjectColor = Color.CadetBlue
  attributes.ColorSource = ObjectColorSource.ColorFromObject
  doc.Objects.AddSphere(sphere, attributes)

  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'ObjectColorSource ColorSource'],
      ['Rhino.DocObjects.ObjectAttributes', 'Color ObjectColor']
    ]
  },
  {
    name: 'Displayorder.vb',
    code: `Imports System.Collections.Generic
Imports System.Drawing
Imports System.Linq
Imports Rhino
Imports Rhino.Commands
Imports Rhino.Display
Imports Rhino.Geometry
Imports Rhino.Input
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class DisplayOrderCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDisplayOrder"
      End Get
    End Property

    Private m_line_objects As New List(Of RhinoObject)()

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' make lines thick so draw order can be easily seen
      Dim dm = DisplayModeDescription.GetDisplayModes().[Single](Function(x) x.EnglishName = "Wireframe")
      Dim original_thikcness = dm.DisplayAttributes.CurveThickness
      dm.DisplayAttributes.CurveThickness = 10
      DisplayModeDescription.UpdateDisplayMode(dm)

      AddLine(Point3d.Origin, New Point3d(10, 10, 0), Color.Red, doc)
      AddLine(New Point3d(10, 0, 0), New Point3d(0, 10, 0), Color.Blue, doc)
      AddLine(New Point3d(8, 0, 0), New Point3d(8, 10, 0), Color.Green, doc)
      AddLine(New Point3d(0, 3, 0), New Point3d(10, 3, 0), Color.Yellow, doc)
      doc.Views.Redraw()
      Pause("draw order: 1st line drawn in front, last line drawn in the back.  Any key to continue ...")

      'all objects have a DisplayOrder of 0 by default so changing it to 1 moves it to the front.  Here we move the 2nd line (blue) to the front
      m_line_objects(1).Attributes.DisplayOrder = 1
      m_line_objects(1).CommitChanges()
      doc.Views.Redraw()
      Pause("Second (blue) line now in front.  Any key to continue ...")

      For i As Integer = 0 To m_line_objects.Count - 1
        m_line_objects(i).Attributes.DisplayOrder = i
        m_line_objects(i).CommitChanges()
      Next
      doc.Views.Redraw()
      Pause("Reverse order of original lines, i.e., Yellow 1st and Red last.  Any key to continue ...")

      ' restore original line thickness
      dm.DisplayAttributes.CurveThickness = original_thikcness
      DisplayModeDescription.UpdateDisplayMode(dm)

      doc.Views.Redraw()
      Return Result.Success
    End Function

    Private Sub Pause(msg As String)
      Dim obj_ref As ObjRef = Nothing
      Dim rc = RhinoGet.GetOneObject(msg, True, ObjectType.AnyObject, obj_ref)
    End Sub

    Private Sub AddLine(from As Point3d, [to] As Point3d, color As Color, doc As RhinoDoc)
      Dim guid = doc.Objects.AddLine(from, [to])
      Dim obj = doc.Objects.Find(guid)
      m_line_objects.Add(obj)
      obj.Attributes.ObjectColor = color
      obj.Attributes.ColorSource = ObjectColorSource.ColorFromObject
      obj.CommitChanges()
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int DisplayOrder']
    ]
  },
  {
    name: 'Displayorder.cs',
    code: `using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using Rhino;
using Rhino.Commands;
using Rhino.Display;
using Rhino.Geometry;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class DisplayOrderCommand : Command
  {
    public override string EnglishName { get { return "csDisplayOrder"; } }

    private List<RhinoObject> m_line_objects = new List<RhinoObject>(); 

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // make lines thick so draw order can be easily seen
      var dm = DisplayModeDescription.GetDisplayModes().Single(x => x.EnglishName == "Wireframe");
      var original_thikcness = dm.DisplayAttributes.CurveThickness;
      dm.DisplayAttributes.CurveThickness = 10;
      DisplayModeDescription.UpdateDisplayMode(dm);

      AddLine(Point3d.Origin, new Point3d(10,10,0), Color.Red, doc);
      AddLine(new Point3d(10,0,0), new Point3d(0,10,0), Color.Blue, doc);
      AddLine(new Point3d(8,0,0), new Point3d(8,10,0), Color.Green, doc);
      AddLine(new Point3d(0,3,0), new Point3d(10,3,0), Color.Yellow, doc);
      doc.Views.Redraw();
      Pause("draw order: 1st line drawn in front, last line drawn in the back.  Any key to continue ...");

      //all objects have a DisplayOrder of 0 by default so changing it to 1 moves it to the front.  Here we move the 2nd line (blue) to the front
      m_line_objects[1].Attributes.DisplayOrder = 1;
      m_line_objects[1].CommitChanges();
      doc.Views.Redraw();
      Pause("Second (blue) line now in front.  Any key to continue ...");

      for (int i = 0; i < m_line_objects.Count; i++)
      {
        m_line_objects[i].Attributes.DisplayOrder = i;
        m_line_objects[i].CommitChanges();
      }
      doc.Views.Redraw();
      Pause("Reverse order of original lines, i.e., Yellow 1st and Red last.  Any key to continue ...");

      // restore original line thickness
      dm.DisplayAttributes.CurveThickness = original_thikcness;
      DisplayModeDescription.UpdateDisplayMode(dm);

      doc.Views.Redraw();
      return Result.Success;
    }

    private void Pause(string msg)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject(msg, true, ObjectType.AnyObject, out obj_ref);
    }

    private void AddLine(Point3d from, Point3d to, Color color, RhinoDoc doc)
    {
      var guid = doc.Objects.AddLine(from, to);
      var obj = doc.Objects.Find(guid);
      m_line_objects.Add(obj);
      obj.Attributes.ObjectColor = color;
      obj.Attributes.ColorSource = ObjectColorSource.ColorFromObject;
      obj.CommitChanges();
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int DisplayOrder']
    ]
  },
  {
    name: 'Displayorder.py',
    code: `from System.Collections.Generic import *
from System.Drawing import *
from Rhino import *
from Rhino.Commands import *
from Rhino.Display import *
from Rhino.Geometry import *
from Rhino.Input import *
from Rhino.DocObjects import *
from scriptcontext import doc

m_line_objects = []

def RunCommand():
  # make lines thick so draw order can be easily seen
  wfdm = [dm for dm in DisplayModeDescription.GetDisplayModes() if dm.EnglishName == "Wireframe"][0]
  original_thikcness = wfdm.DisplayAttributes.CurveThickness
  wfdm.DisplayAttributes.CurveThickness = 10
  DisplayModeDescription.UpdateDisplayMode(wfdm)

  AddLine(Point3d.Origin, Point3d(10,10,0), Color.Red, doc)
  AddLine(Point3d(10,0,0), Point3d(0,10,0), Color.Blue, doc)
  AddLine(Point3d(8,0,0), Point3d(8,10,0), Color.Green, doc)
  AddLine(Point3d(0,3,0), Point3d(10,3,0), Color.Yellow, doc)
  doc.Views.Redraw()
  Pause("draw order: 1st line drawn in front, last line drawn in the back.  Any key to continue ...")

  #all objects have a DisplayOrder of 0 by default so changing it to 1 moves it to the front.  Here we move the 2nd line (blue) to the front
  m_line_objects[1].Attributes.DisplayOrder = 1
  m_line_objects[1].CommitChanges()
  doc.Views.Redraw()
  Pause("Second (blue) line now in front.  Any key to continue ...")

  for i in range(0, m_line_objects.Count - 1):
    m_line_objects[i].Attributes.DisplayOrder = i
    m_line_objects[i].CommitChanges()

  doc.Views.Redraw()
  Pause("Reverse order of original lines, i.e., Yellow 1st and Red last.  Any key to continue ...")

  # restore original line thickness
  wfdm.DisplayAttributes.CurveThickness = original_thikcness
  DisplayModeDescription.UpdateDisplayMode(wfdm)

  doc.Views.Redraw()
  return Result.Success

def Pause(msg):
  rc, obj_ref = RhinoGet.GetOneObject(msg, True, ObjectType.AnyObject)

def AddLine(from_pt, to_pt, color, doc):
  guid = doc.Objects.AddLine(from_pt, to_pt)
  obj = doc.Objects.Find(guid)
  m_line_objects.Add(obj)
  obj.Attributes.ObjectColor = color
  obj.Attributes.ColorSource = ObjectColorSource.ColorFromObject
  obj.CommitChanges()

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int DisplayOrder']
    ]
  },
  {
    name: 'Moveobjectstocurrentlayer.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class MoveSelectedObjectsToCurrentLayerCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbMoveSelectedObjectsToCurrentLayer"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' all non-light objects that are selected
      Dim object_enumerator_settings = New ObjectEnumeratorSettings()
      object_enumerator_settings.IncludeLights = False
      object_enumerator_settings.IncludeGrips = True
      object_enumerator_settings.NormalObjects = True
      object_enumerator_settings.LockedObjects = True
      object_enumerator_settings.HiddenObjects = True
      object_enumerator_settings.ReferenceObjects = True
      object_enumerator_settings.SelectedObjectsFilter = True
      Dim selected_objects = doc.Objects.GetObjectList(object_enumerator_settings)

      Dim current_layer_index = doc.Layers.CurrentLayerIndex
      For Each selected_object As RhinoObject In selected_objects
        selected_object.Attributes.LayerIndex = current_layer_index
        selected_object.CommitChanges()
      Next
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int LayerIndex'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int CurrentLayerIndex']
    ]
  },
  {
    name: 'Moveobjectstocurrentlayer.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;

namespace examples_cs
{
  public class MoveSelectedObjectsToCurrentLayerCommand : Command
  {
    public override string EnglishName
    {
      get { return "csMoveSelectedObjectsToCurrentLayer"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // all non-light objects that are selected
      var object_enumerator_settings = new ObjectEnumeratorSettings();
      object_enumerator_settings.IncludeLights = false;
      object_enumerator_settings.IncludeGrips = true;
      object_enumerator_settings.NormalObjects = true;
      object_enumerator_settings.LockedObjects = true;
      object_enumerator_settings.HiddenObjects = true;
      object_enumerator_settings.ReferenceObjects = true;
      object_enumerator_settings.SelectedObjectsFilter = true;
      var selected_objects = doc.Objects.GetObjectList(object_enumerator_settings);

      var current_layer_index = doc.Layers.CurrentLayerIndex;
      foreach (var selected_object in selected_objects)
      {
        selected_object.Attributes.LayerIndex = current_layer_index;
        selected_object.CommitChanges();
      }
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int LayerIndex'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int CurrentLayerIndex']
    ]
  },
  {
    name: 'Moveobjectstocurrentlayer.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.DocObjects import *
from scriptcontext import doc

def RunCommand():
  # all non-light objects that are selected
  object_enumerator_settings = ObjectEnumeratorSettings()
  object_enumerator_settings.IncludeLights = False
  object_enumerator_settings.IncludeGrips = True
  object_enumerator_settings.NormalObjects = True
  object_enumerator_settings.LockedObjects = True
  object_enumerator_settings.HiddenObjects = True
  object_enumerator_settings.ReferenceObjects = True
  object_enumerator_settings.SelectedObjectsFilter = True
  selected_objects = doc.Objects.GetObjectList(object_enumerator_settings)

  current_layer_index = doc.Layers.CurrentLayerIndex
  for selected_object in selected_objects:
    selected_object.Attributes.LayerIndex = current_layer_index
    selected_object.CommitChanges()

  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int LayerIndex'],
      ['Rhino.DocObjects.Tables.LayerTable', 'int CurrentLayerIndex']
    ]
  },
  {
    name: 'Isocurvedensity.vb',
    code: `Partial Class Examples
  Public Shared Function IsocurveDensity(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select surface", False, Rhino.DocObjects.ObjectType.Surface, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim brep_obj = TryCast(objref.Object(), Rhino.DocObjects.BrepObject)
    If brep_obj IsNot Nothing Then
      brep_obj.Attributes.WireDensity = 3
      brep_obj.CommitChanges()
      doc.Views.Redraw()
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int WireDensity']
    ]
  },
  {
    name: 'Isocurvedensity.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result IsocurveDensity(Rhino.RhinoDoc doc)
  {
    Rhino.DocObjects.ObjRef objref;
    var rc = Rhino.Input.RhinoGet.GetOneObject("Select surface", false, Rhino.DocObjects.ObjectType.Surface, out objref);
    if( rc!= Rhino.Commands.Result.Success )
      return rc;

    var brep_obj = objref.Object() as Rhino.DocObjects.BrepObject;
    if( brep_obj!=null )
    {
      brep_obj.Attributes.WireDensity = 3;
      brep_obj.CommitChanges();
      doc.Views.Redraw();
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int WireDensity']
    ]
  },
  {
    name: 'Isocurvedensity.py',
    code: `import Rhino
import scriptcontext

def IsocurveDensity():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select surface", False, Rhino.DocObjects.ObjectType.Surface)
    if rc!= Rhino.Commands.Result.Success: return

    brep_obj = objref.Object()
    if brep_obj:
        brep_obj.Attributes.WireDensity = 3
        brep_obj.CommitChanges()
        scriptcontext.doc.Views.Redraw()

if __name__=="__main__":
    IsocurveDensity()`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'int WireDensity']
    ]
  },
  {
    name: 'Objectdisplaymode.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function ObjectDisplayMode(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rc As Rhino.Commands.Result
    Const filter As ObjectType = ObjectType.Mesh Or ObjectType.Brep
    Dim objref As ObjRef = Nothing
    rc = Rhino.Input.RhinoGet.GetOneObject("Select mesh or surface", True, filter, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    Dim viewportId As Guid = doc.Views.ActiveView.ActiveViewportID

    Dim attr As ObjectAttributes = objref.[Object]().Attributes
    If attr.HasDisplayModeOverride(viewportId) Then
      RhinoApp.WriteLine("Removing display mode override from object")
      attr.RemoveDisplayModeOverride(viewportId)
    Else
      Dim modes As Rhino.Display.DisplayModeDescription() = Rhino.Display.DisplayModeDescription.GetDisplayModes()
      Dim mode As Rhino.Display.DisplayModeDescription = Nothing
      If modes.Length = 1 Then
        mode = modes(0)
      Else
        Dim go As New Rhino.Input.Custom.GetOption()
        go.SetCommandPrompt("Select display mode")
        Dim str_modes As String() = New String(modes.Length - 1) {}
        For i As Integer = 0 To modes.Length - 1
          str_modes(i) = modes(i).EnglishName.Replace(" ", "").Replace("-", "")
        Next
        go.AddOptionList("DisplayMode", str_modes, 0)
        If go.[Get]() = Rhino.Input.GetResult.[Option] Then
          mode = modes(go.[Option]().CurrentListOptionIndex)
        End If
      End If
      If mode Is Nothing Then
        Return Rhino.Commands.Result.Cancel
      End If
      attr.SetDisplayModeOverride(mode, viewportId)
    End If
    doc.Objects.ModifyAttributes(objref, attr, False)
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'bool HasDisplayModeOverride(Guid viewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'void RemoveDisplayModeOverride(Guid rhinoViewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'bool SetDisplayModeOverride(DisplayModeDescription mode,Guid rhinoViewportId)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(LocalizeStringPair optionName,IEnumerable<LocalizeStringPair> listValues,int listCurrentIndex)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(string englishOptionName,IEnumerable<string> listValues,int listCurrentIndex)']
    ]
  },
  {
    name: 'Objectdisplaymode.cs',
    code: `using System;
using Rhino;
using Rhino.Commands;
using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result ObjectDisplayMode(Rhino.RhinoDoc doc)
  {
    const ObjectType filter = ObjectType.Mesh | ObjectType.Brep;
    ObjRef objref;
    Result rc = Rhino.Input.RhinoGet.GetOneObject("Select mesh or surface", true, filter, out objref);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    Guid viewportId = doc.Views.ActiveView.ActiveViewportID;

    ObjectAttributes attr = objref.Object().Attributes;
    if (attr.HasDisplayModeOverride(viewportId))
    {
      RhinoApp.WriteLine("Removing display mode override from object");
      attr.RemoveDisplayModeOverride(viewportId);
    }
    else
    {
      Rhino.Display.DisplayModeDescription[] modes = Rhino.Display.DisplayModeDescription.GetDisplayModes();
      Rhino.Display.DisplayModeDescription mode = null;
      if (modes.Length == 1)
        mode = modes[0];
      else
      {
        Rhino.Input.Custom.GetOption go = new Rhino.Input.Custom.GetOption();
        go.SetCommandPrompt("Select display mode");
        string[] str_modes = new string[modes.Length];
        for (int i = 0; i < modes.Length; i++)
          str_modes[i] = modes[i].EnglishName.Replace(" ", "").Replace("-", "");
        go.AddOptionList("DisplayMode", str_modes, 0);
        if (go.Get() == Rhino.Input.GetResult.Option)
          mode = modes[go.Option().CurrentListOptionIndex];
      }
      if (mode == null)
        return Rhino.Commands.Result.Cancel;
      attr.SetDisplayModeOverride(mode, viewportId);
    }
    doc.Objects.ModifyAttributes(objref, attr, false);
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'bool HasDisplayModeOverride(Guid viewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'void RemoveDisplayModeOverride(Guid rhinoViewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'bool SetDisplayModeOverride(DisplayModeDescription mode,Guid rhinoViewportId)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(LocalizeStringPair optionName,IEnumerable<LocalizeStringPair> listValues,int listCurrentIndex)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(string englishOptionName,IEnumerable<string> listValues,int listCurrentIndex)']
    ]
  },
  {
    name: 'Objectdisplaymode.py',
    code: `import Rhino
import scriptcontext

def ObjectDisplayMode():
    filter = Rhino.DocObjects.ObjectType.Brep | Rhino.DocObjects.ObjectType.Mesh
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select mesh or surface", True, filter)
    if rc != Rhino.Commands.Result.Success: return rc;
    viewportId = scriptcontext.doc.Views.ActiveView.ActiveViewportID

    attr = objref.Object().Attributes
    if attr.HasDisplayModeOverride(viewportId):
        print "Removing display mode override from object"
        attr.RemoveDisplayModeOverride(viewportId)
    else:
        modes = Rhino.Display.DisplayModeDescription.GetDisplayModes()
        mode = None
        if len(modes) == 1:
            mode = modes[0]
        else:
            go = Rhino.Input.Custom.GetOption()
            go.SetCommandPrompt("Select display mode")
            str_modes = []
            for m in modes:
                s = m.EnglishName.replace(" ","").replace("-","")
                str_modes.append(s)
            go.AddOptionList("DisplayMode", str_modes, 0)
            if go.Get()==Rhino.Input.GetResult.Option:
                mode = modes[go.Option().CurrentListOptionIndex]
        if not mode: return Rhino.Commands.Result.Cancel
        attr.SetDisplayModeOverride(mode, viewportId)
    scriptcontext.doc.Objects.ModifyAttributes(objref, attr, False)
    scriptcontext.doc.Views.Redraw()


if __name__=="__main__":
    ObjectDisplayMode()`,
    members: [
      ['Rhino.DocObjects.ObjectAttributes', 'bool HasDisplayModeOverride(Guid viewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'void RemoveDisplayModeOverride(Guid rhinoViewportId)'],
      ['Rhino.DocObjects.ObjectAttributes', 'bool SetDisplayModeOverride(DisplayModeDescription mode,Guid rhinoViewportId)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(LocalizeStringPair optionName,IEnumerable<LocalizeStringPair> listValues,int listCurrentIndex)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionList(string englishOptionName,IEnumerable<string> listValues,int listCurrentIndex)']
    ]
  },
  {
    name: 'Extractthumbnail.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input
Imports Rhino.Input.Custom
Imports System.Windows
Imports System.Windows.Controls

Namespace examples_vb
  Public Class ExtractThumbnailCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbExtractThumbnail"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gf = RhinoGet.GetFileName(GetFileNameMode.OpenImage, "*.3dm", "select file", Nothing)
      If gf = String.Empty OrElse Not System.IO.File.Exists(gf) Then
        Return Result.Cancel
      End If

      Dim bitmap = Rhino.FileIO.File3dm.ReadPreviewImage(gf)
      ' convert System.Drawing.Bitmap to BitmapSource
      Dim imageSource = System.Windows.Interop.Imaging.CreateBitmapSourceFromHBitmap(bitmap.GetHbitmap(), IntPtr.Zero, Int32Rect.Empty, System.Windows.Media.Imaging.BitmapSizeOptions.FromEmptyOptions())

      ' show in WPF window
      Dim window = New Window()
      Dim image = New Image()
      image.Source = imageSource

      window.Content = image
      window.Show()

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.FileIO.File3dm', 'static System.Drawing.Bitmap ReadPreviewImage(string path)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent,BitmapFileTypes fileTypes)']
    ]
  },
  {
    name: 'Extractthumbnail.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Input.Custom;
using System;
using System.Windows;
using System.Windows.Controls;

namespace examples_cs
{
  public class ExtractThumbnailCommand : Command
  {
    public override string EnglishName { get { return "csExtractThumbnail"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gf = RhinoGet.GetFileName(GetFileNameMode.OpenImage, "*.3dm", "select file", null);
      if (gf == string.Empty || !System.IO.File.Exists(gf))
        return Result.Cancel;

      var bitmap = Rhino.FileIO.File3dm.ReadPreviewImage(gf);
      // convert System.Drawing.Bitmap to BitmapSource
      var image_source = System.Windows.Interop.Imaging.CreateBitmapSourceFromHBitmap(bitmap.GetHbitmap(), IntPtr.Zero,
        Int32Rect.Empty, System.Windows.Media.Imaging.BitmapSizeOptions.FromEmptyOptions());

      // show in WPF window
      var window = new Window();
      var image = new Image {Source = image_source};
      window.Content = image;
      window.Show();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.FileIO.File3dm', 'static System.Drawing.Bitmap ReadPreviewImage(string path)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent,BitmapFileTypes fileTypes)']
    ]
  },
  {
    name: 'Extractthumbnail.py',
    code: `import Rhino
import rhinoscriptsyntax as rs
from scriptcontext import doc

import clr
clr.AddReference("System.Windows.Forms")
import System.Windows.Forms

def RunCommand():

  fn = rs.OpenFileName(title="select file", filter="Rhino files|*.3dm||")
  if fn == None:
    return

  bitmap = doc.ExtractPreviewImage(fn)

  f = System.Windows.Forms.Form()
  f.Height = bitmap.Height
  f.Width = bitmap.Width
  pb = System.Windows.Forms.PictureBox()
  pb.Image = bitmap
  pb.Height = bitmap.Height  #SizeMode = System.Windows.Forms.PictueBoxSizeMode.AutoSize
  pb.Width = bitmap.Width
  f.Controls.Add(pb);
  f.Show();

if __name__ == "__main__":
  RunCommand()
`,
    members: [
      ['Rhino.FileIO.File3dm', 'static System.Drawing.Bitmap ReadPreviewImage(string path)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent)'],
      ['Rhino.Input.RhinoGet', 'static string GetFileName(GetFileNameMode mode,string defaultName,string title,object parent,BitmapFileTypes fileTypes)']
    ]
  },
  {
    name: 'Advanceddisplay.vb',
    code: `Imports System.Collections.Generic
Imports Rhino.Display

Partial Class Examples
  ' The following example demonstrates how to modify advanced display settings using
  ' RhinoCommon. In this example, a display mode's mesh wireframe thickness (in pixels)
  ' will be modified.
  Public Shared Function AdvancedDisplay(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Use the display attributes manager to build a list of display modes.
    ' Note, these are copies of the originals...
    Dim display_modes As DisplayModeDescription() = DisplayModeDescription.GetDisplayModes()
    If display_modes Is Nothing OrElse display_modes.Length < 1 Then
      Return Rhino.Commands.Result.Failure
    End If

    ' Construct an options picker so the user can pick which
    ' display mode they want modified
    Dim go As New Rhino.Input.Custom.GetOption()
    go.SetCommandPrompt("Display mode to modify mesh thickness")
    Dim opt_list As New List(Of Integer)()

    For i As Integer = 0 To display_modes.Length - 1
      Dim english_name As String = display_modes(i).EnglishName
      english_name = english_name.Replace("_", "")
      english_name = english_name.Replace(" ", "")
      english_name = english_name.Replace("-", "")
      english_name = english_name.Replace(",", "")
      english_name = english_name.Replace(".", "")
      Dim index As Integer = go.AddOption(english_name)
      opt_list.Add(index)
    Next

    ' Get the command option
    go.[Get]()
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    Dim selected_index As Integer = go.[Option]().Index
    Dim selected_description As DisplayModeDescription = Nothing
    For i As Integer = 0 To opt_list.Count - 1
      If opt_list(i) = selected_index Then
        selected_description = display_modes(i)
        Exit For
      End If
    Next

    ' Validate...
    If selected_description Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    ' Modify the desired display mode. In this case, we
    ' will just set the mesh wireframe thickness to zero.
    selected_description.DisplayAttributes.MeshSpecificAttributes.MeshWireThickness = 0
    ' Use the display attributes manager to update the display mode.
    DisplayModeDescription.UpdateDisplayMode(selected_description)

    ' Force the document to regenerate.
    doc.Views.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Display.DisplayModeDescription', 'DisplayPipelineAttributes DisplayAttributes'],
      ['Rhino.Display.DisplayModeDescription', 'static DisplayModeDescription[] GetDisplayModes()'],
      ['Rhino.Display.DisplayModeDescription', 'static bool UpdateDisplayMode(DisplayModeDescription displayMode)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOption(string englishOption)']
    ]
  },
  {
    name: 'Advanceddisplay.cs',
    code: `using System.Collections.Generic;
using Rhino.Display;

partial class Examples
{
  // The following example code demonstrates how to modify advanced display settings using
  // the Rhino SDK. In this example, a display mode's mesh wireframe thickness (in pixels)
  // will be modified.
  public static Rhino.Commands.Result AdvancedDisplay(Rhino.RhinoDoc doc)
  {
    // Use the display attributes manager to build a list of display modes.
    // Note, these are copies of the originals...
    DisplayModeDescription[] display_modes = DisplayModeDescription.GetDisplayModes();
    if( display_modes==null || display_modes.Length<1 )
      return Rhino.Commands.Result.Failure;

    // Construct an options picker so the user can pick which
    // display mode they want modified
    Rhino.Input.Custom.GetOption go = new Rhino.Input.Custom.GetOption();
    go.SetCommandPrompt("Display mode to modify mesh thickness");
    List<int> opt_list = new List<int>();

    for( int i=0; i<display_modes.Length; i++ )
    {
      string english_name = display_modes[i].EnglishName;
      english_name = english_name.Replace("_", "");
      english_name = english_name.Replace(" ", "");
      english_name = english_name.Replace("-", "");
      english_name = english_name.Replace(",", "");
      english_name = english_name.Replace(".", "");
      int index = go.AddOption(english_name);
      opt_list.Add(index);
    }
    
    // Get the command option
    go.Get();
    if( go.CommandResult() != Rhino.Commands.Result.Success )
      return go.CommandResult();

    int selected_index = go.Option().Index;
    DisplayModeDescription selected_description = null;
    for( int i=0; i<opt_list.Count; i++ )
    {
      if( opt_list[i]==selected_index )
      {
        selected_description = display_modes[i];
        break;
      }
    }
 
    // Validate...
    if( selected_description==null )
      return Rhino.Commands.Result.Failure;

    // Modify the desired display mode. In this case, we
    // will just set the mesh wireframe thickness to zero.
    selected_description.DisplayAttributes.MeshSpecificAttributes.MeshWireThickness = 0;
    // Use the display attributes manager to update the display mode.
    DisplayModeDescription.UpdateDisplayMode(selected_description);

    // Force the document to regenerate.
    doc.Views.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Display.DisplayModeDescription', 'DisplayPipelineAttributes DisplayAttributes'],
      ['Rhino.Display.DisplayModeDescription', 'static DisplayModeDescription[] GetDisplayModes()'],
      ['Rhino.Display.DisplayModeDescription', 'static bool UpdateDisplayMode(DisplayModeDescription displayMode)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOption(string englishOption)']
    ]
  },
  {
    name: 'Advanceddisplay.py',
    code: `import Rhino
import scriptcontext

# The following example demonstrates how to modify advanced display settings
# using RhinoCommon. In this example, a display mode's mesh wireframe thickness
# (in pixels) will be modified.
def AdvancedDisplay():
    # Use the display attributes manager to build a list of display modes.
    # Note, these are copies of the originals...
    display_modes = Rhino.Display.DisplayModeDescription.GetDisplayModes()
    if not display_modes: return Rhino.Commands.Result.Failure
    
    # Construct an options picker so the user can pick which
    # display mode they want modified
    go = Rhino.Input.Custom.GetOption()
    go.SetCommandPrompt("Display mode to modify mesh thickness")
    opt_list = []
    for i, mode in enumerate(display_modes):
        english_name = mode.EnglishName
        english_name = english_name.translate(None, "_ -,.")
        opt_list.append( go.AddOption(english_name) )
    
    # Get the command option
    go.Get()
    if go.CommandResult()!=Rhino.Commands.Result.Success:
      return go.CommandResult();

    selected_index = go.Option().Index
    selected_description = None
    for i,option in enumerate(opt_list):
        if option==selected_index:
            selected_description = display_modes[i]
            break
    # Validate...
    if not selected_description: return Rhino.Commands.Result.Failure
    
    # Modify the desired display mode. In this case, we
    # will just set the mesh wireframe thickness to zero.
    selected_description.DisplayAttributes.MeshSpecificAttributes.MeshWireThickness = 0
    # Use the display attributes manager to update the display mode.
    Rhino.Display.DisplayModeDescription.UpdateDisplayMode(selected_description)
    # Force the document to regenerate.
    scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    AdvancedDisplay()
`,
    members: [
      ['Rhino.Display.DisplayModeDescription', 'DisplayPipelineAttributes DisplayAttributes'],
      ['Rhino.Display.DisplayModeDescription', 'static DisplayModeDescription[] GetDisplayModes()'],
      ['Rhino.Display.DisplayModeDescription', 'static bool UpdateDisplayMode(DisplayModeDescription displayMode)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOption(string englishOption)']
    ]
  },
  {
    name: 'Drawstring.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class DrawStringCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDrawString"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gp = New GetDrawStringPoint()
      gp.SetCommandPrompt("Point")
      gp.[Get]()
      Return gp.CommandResult()
    End Function
  End Class

  Public Class GetDrawStringPoint
    Inherits GetPoint
    Protected Overrides Sub OnDynamicDraw(e As GetPointDrawEventArgs)
      MyBase.OnDynamicDraw(e)
      Dim xform = e.Viewport.GetTransform(CoordinateSystem.World, CoordinateSystem.Screen)
      Dim current_point = e.CurrentPoint
      current_point.Transform(xform)
      Dim screen_point = New Point2d(current_point.X, current_point.Y)
      Dim msg = String.Format("screen {0:F}, {1:F}", current_point.X, current_point.Y)
      e.Display.Draw2dText(msg, System.Drawing.Color.Blue, screen_point, False)
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified)']
    ]
  },
  {
    name: 'Drawstring.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class DrawStringCommand : Command
  {
    public override string EnglishName { get { return "csDrawString"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gp = new GetDrawStringPoint();
      gp.SetCommandPrompt("Point");
      gp.Get();
      return gp.CommandResult();
    }
  }

  public class GetDrawStringPoint : GetPoint
  {
    protected override void OnDynamicDraw(GetPointDrawEventArgs e)
    {
      base.OnDynamicDraw(e);
      var xform = e.Viewport.GetTransform(CoordinateSystem.World, CoordinateSystem.Screen);
      var current_point = e.CurrentPoint;
      current_point.Transform(xform);
      var screen_point = new Point2d(current_point.X, current_point.Y);
      var msg = string.Format("screen {0:F}, {1:F}", current_point.X, current_point.Y);
      e.Display.Draw2dText(msg, System.Drawing.Color.Blue, screen_point, false);
    }
  }
}`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified)']
    ]
  },
  {
    name: 'Drawstring.py',
    code: `from Rhino import *
from Rhino.DocObjects import *
from Rhino.Geometry import *
from Rhino.Commands import *
from Rhino.Input.Custom import *
from System.Drawing import Color

def RunCommand():
  gp = GetDrawStringPoint()
  gp.SetCommandPrompt("Point")
  gp.Get()
  return gp.CommandResult()

class GetDrawStringPoint(GetPoint):
  def OnDynamicDraw(self, e):
    xform = e.Viewport.GetTransform(
      CoordinateSystem.World, CoordinateSystem.Screen)    

    current_point = e.CurrentPoint
    current_point.Transform(xform)
    screen_point = Point2d(current_point.X, current_point.Y)

    msg = "screen {0}, {1}".format(screen_point.X, screen_point.Y)
    e.Display.Draw2dText(msg, Color.Blue, screen_point, False)

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void Draw2dText(string text,Color color,Point2d screenCoordinate,bool middleJustified)']
    ]
  },
  {
    name: 'Conduitarrowheads.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports System.Collections.Generic
Imports Rhino.Input.Custom

Namespace examples_vb
  Class DrawArrowHeadsConduit
    Inherits Rhino.Display.DisplayConduit
    Private _line As Line
    Private _screenSize As Integer
    Private _worldSize As Double

    Public Sub New(line As Line, screenSize As Integer, worldSize As Double)
      _line = line
      _screenSize = screenSize
      _worldSize = worldSize
    End Sub

    Protected Overrides Sub DrawForeground(e As Rhino.Display.DrawEventArgs)
      e.Display.DrawArrow(_line, System.Drawing.Color.Black, _screenSize, _worldSize)
    End Sub
  End Class

  Public Class DrawArrowheadsCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDrawArrowHeads"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' get arrow head size
      Dim go = New Rhino.Input.Custom.GetOption()
      go.SetCommandPrompt("ArrowHead length in screen size (pixles) or world size (percentage of arrow lenght)?")
      go.AddOption("screen")
      go.AddOption("world")
      go.[Get]()
      If go.CommandResult() <> Result.Success Then
        Return go.CommandResult()
      End If

      Dim screenSize As Integer = 0
      Dim worldSize As Double = 0.0
      If go.[Option]().EnglishName = "screen" Then
        Dim gi = New Rhino.Input.Custom.GetInteger()
        gi.SetLowerLimit(0, True)
        gi.SetCommandPrompt("Length of arrow head in pixels")
        gi.[Get]()
        If gi.CommandResult() <> Result.Success Then
          Return gi.CommandResult()
        End If
        screenSize = gi.Number()
      Else
        Dim gi = New Rhino.Input.Custom.GetInteger()
        gi.SetLowerLimit(0, True)
        gi.SetUpperLimit(100, False)
        gi.SetCommandPrompt("Lenght of arrow head in percentage of total arrow lenght")
        gi.[Get]()
        If gi.CommandResult() <> Result.Success Then
          Return gi.CommandResult()
        End If
        worldSize = gi.Number() / 100.0
      End If


      ' get arrow start and end points
      Dim gp = New Rhino.Input.Custom.GetPoint()
      gp.SetCommandPrompt("Start of line")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim startPoint = gp.Point()

      gp.SetCommandPrompt("End of line")
      gp.SetBasePoint(startPoint, False)
      gp.DrawLineFromPoint(startPoint, True)
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim endPoint = gp.Point()

      Dim v = endPoint - startPoint
      If v.IsTiny(Rhino.RhinoMath.ZeroTolerance) Then
        Return Result.[Nothing]
      End If

      Dim line = New Line(startPoint, endPoint)

      Dim conduit = New DrawArrowHeadsConduit(line, screenSize, worldSize)
      ' toggle conduit on/off
      conduit.Enabled = Not conduit.Enabled
      RhinoApp.WriteLine("draw arrowheads conduit enabled = {0}", conduit.Enabled)

      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawArrow(Line line,Color color,double screenSize,double relativeSize)']
    ]
  },
  {
    name: 'Conduitarrowheads.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Geometry;
using Rhino.Input.Custom;

namespace examples_cs
{
  class DrawArrowHeadsConduit : Rhino.Display.DisplayConduit
  {
    private readonly Line m_line;
    private readonly int m_screen_size;
    private readonly double m_world_size;

    public DrawArrowHeadsConduit(Line line, int screenSize, double worldSize)
    {
      m_line = line;
      m_screen_size = screenSize;
      m_world_size = worldSize;
    }

    protected override void DrawForeground(Rhino.Display.DrawEventArgs e)
    {
      e.Display.DrawArrow(m_line, System.Drawing.Color.Black, m_screen_size, m_world_size);
    }
  }


  public class DrawArrowheadsCommand : Command
  {
    public override string EnglishName { get { return "csDrawArrowHeads"; } }

    DrawArrowHeadsConduit m_draw_conduit;

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      if (m_draw_conduit != null)
      {
        RhinoApp.WriteLine("Turn off existing arrowhead conduit");
        m_draw_conduit.Enabled = false;
        m_draw_conduit = null;
      }
      else
      {
        // get arrow head size
        var go = new GetOption();
        go.SetCommandPrompt("ArrowHead length in screen size (pixels) or world size (percentage of arrow length)?");
        go.AddOption("screen");
        go.AddOption("world");
        go.Get();
        if (go.CommandResult() != Result.Success)
          return go.CommandResult();

        int screen_size = 0;
        double world_size = 0.0;
        if (go.Option().EnglishName == "screen")
        {
          var gi = new GetInteger();
          gi.SetLowerLimit(0, true);
          gi.SetCommandPrompt("Length of arrow head in pixels");
          gi.Get();
          if (gi.CommandResult() != Result.Success)
            return gi.CommandResult();
          screen_size = gi.Number();
        }
        else
        {
          var gi = new GetInteger();
          gi.SetLowerLimit(0, true);
          gi.SetUpperLimit(100, false);
          gi.SetCommandPrompt("Length of arrow head in percentage of total arrow length");
          gi.Get();
          if (gi.CommandResult() != Result.Success)
            return gi.CommandResult();
          world_size = gi.Number() / 100.0;
        }


        // get arrow start and end points
        var gp = new GetPoint();
        gp.SetCommandPrompt("Start of line");
        gp.Get();
        if (gp.CommandResult() != Result.Success)
          return gp.CommandResult();
        var start_point = gp.Point();

        gp.SetCommandPrompt("End of line");
        gp.SetBasePoint(start_point, false);
        gp.DrawLineFromPoint(start_point, true);
        gp.Get();
        if (gp.CommandResult() != Result.Success)
          return gp.CommandResult();
        var end_point = gp.Point();

        var v = end_point - start_point;
        if (v.IsTiny(Rhino.RhinoMath.ZeroTolerance))
          return Result.Nothing;

        var line = new Line(start_point, end_point);

        m_draw_conduit = new DrawArrowHeadsConduit(line, screen_size, world_size);
        // toggle conduit on/off
        m_draw_conduit.Enabled = true;
        RhinoApp.WriteLine("Draw arrowheads conduit enabled.");
      }
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}

`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawArrow(Line line,Color color,double screenSize,double relativeSize)']
    ]
  },
  {
    name: 'Conduitarrowheads.py',
    code: `import Rhino
import System.Drawing
import scriptcontext
import rhinoscriptsyntax as rs

class DrawArrowHeadsConduit(Rhino.Display.DisplayConduit):
  def __init__(self, line, screenSize, worldSize):
    self.line = line
    self.screenSize = screenSize
    self.worldSize = worldSize

  def DrawForeground(self, e):
    e.Display.DrawArrow(self.line, System.Drawing.Color.Black, self.screenSize, self.worldSize)

def RunCommand():
  # get arrow head size
  go = Rhino.Input.Custom.GetOption()
  go.SetCommandPrompt("ArrowHead length in screen size (pixles) or world size (percentage of arrow lenght)?")
  go.AddOption("screen")
  go.AddOption("world")
  go.Get()
  if (go.CommandResult() != Rhino.Commands.Result.Success):
    return go.CommandResult()

  screenSize = 0
  worldSize = 0.0
  if (go.Option().EnglishName == "screen"):
    gi = Rhino.Input.Custom.GetInteger()
    gi.SetLowerLimit(0,True)
    gi.SetCommandPrompt("Length of arrow head in pixels")
    gi.Get()
    if (gi.CommandResult() != Rhino.Commands.Result.Success):
      return gi.CommandResult()
    screenSize = gi.Number()
  else:
    gi = Rhino.Input.Custom.GetInteger()
    gi.SetLowerLimit(0, True)
    gi.SetUpperLimit(100, False)
    gi.SetCommandPrompt("Lenght of arrow head in percentage of total arrow lenght")
    gi.Get()
    if (gi.CommandResult() != Rhino.Commands.Result.Success):
      return gi.CommandResult()
    worldSize = gi.Number()/100.0


  # get arrow start and end points
  gp = Rhino.Input.Custom.GetPoint()
  gp.SetCommandPrompt("Start of line")
  gp.Get()
  if (gp.CommandResult() != Rhino.Commands.Result.Success):
    return gp.CommandResult()
  ptStart = gp.Point()

  gp.SetCommandPrompt("End of line")
  gp.SetBasePoint(ptStart, False)
  gp.DrawLineFromPoint(ptStart, True)
  gp.Get()
  if (gp.CommandResult() != Rhino.Commands.Result.Success):
    return gp.CommandResult()
  ptEnd = gp.Point()


  v = ptEnd - ptStart
  if (v.IsTiny(Rhino.RhinoMath.ZeroTolerance)):
    return Rhino.Commands.Result.Nothing

  line = Rhino.Geometry.Line(ptStart, ptEnd)

  conduit = DrawArrowHeadsConduit(line, screenSize, worldSize)
  conduit.Enabled = True
  scriptcontext.doc.Views.Redraw()
  rs.GetString("Pausing for user input")
  conduit.Enabled = False
  scriptcontext.doc.Views.Redraw()

  return Rhino.Commands.Result.Success

if __name__=="__main__":
  RunCommand()
`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawArrow(Line line,Color color,double screenSize,double relativeSize)']
    ]
  },
  {
    name: 'Conduitbitmap.vb',
    code: `Imports System.Drawing
Imports Rhino
Imports Rhino.Commands
Imports Rhino.Display

Namespace examples_vb
  Public Class DrawBitmapConduit
    Inherits Rhino.Display.DisplayConduit
    Private ReadOnly m_display_bitmap As DisplayBitmap

    Public Sub New()
      Dim flag = New System.Drawing.Bitmap(100, 100)
      For x As Integer = 0 To flag.Height - 1
        For y As Integer = 0 To flag.Width - 1
          flag.SetPixel(x, y, Color.White)
        Next
      Next

      Dim g = Graphics.FromImage(flag)
      g.FillEllipse(Brushes.Blue, 25, 25, 50, 50)
      m_display_bitmap = New DisplayBitmap(flag)
    End Sub

    Protected Overrides Sub DrawForeground(e As Rhino.Display.DrawEventArgs)
      e.Display.DrawBitmap(m_display_bitmap, 50, 50, Color.White)
    End Sub
  End Class

  Public Class DrawBitmapCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDrawBitmap"
      End Get
    End Property

    ReadOnly m_conduit As New DrawBitmapConduit()

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      ' toggle conduit on/off
      m_conduit.Enabled = Not m_conduit.Enabled

      RhinoApp.WriteLine("Custom conduit enabled = {0}", m_conduit.Enabled)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawBitmap(DisplayBitmap bitmap,int left,int top)']
    ]
  },
  {
    name: 'Conduitbitmap.cs',
    code: `using System.Drawing;
using Rhino;
using Rhino.Commands;
using Rhino.Display;

namespace examples_cs
{
  public class DrawBitmapConduit : Rhino.Display.DisplayConduit
  {
    private readonly DisplayBitmap m_display_bitmap;

    public DrawBitmapConduit()
    {
      var flag = new System.Drawing.Bitmap(100, 100);
      for( int x = 0; x <  flag.Height; ++x )
          for( int y = 0; y < flag.Width; ++y )
              flag.SetPixel(x, y, Color.White);

      var g = Graphics.FromImage(flag);
      g.FillEllipse(Brushes.Blue, 25, 25, 50, 50);
      m_display_bitmap = new DisplayBitmap(flag);
    }

    protected override void DrawForeground(Rhino.Display.DrawEventArgs e)
    {
      e.Display.DrawBitmap(m_display_bitmap, 50, 50, Color.White);
    }
  }

  public class DrawBitmapCommand : Command
  {
    public override string EnglishName { get { return "csDrawBitmap"; } }

    readonly DrawBitmapConduit m_conduit = new DrawBitmapConduit();

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      // toggle conduit on/off
      m_conduit.Enabled = !m_conduit.Enabled;
      
      RhinoApp.WriteLine("Custom conduit enabled = {0}", m_conduit.Enabled);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawBitmap(DisplayBitmap bitmap,int left,int top)']
    ]
  },
  {
    name: 'Conduitbitmap.py',
    code: `import Rhino
from Rhino.Geometry import *
import System.Drawing
import Rhino.Display
import scriptcontext
import rhinoscriptsyntax as rs

class CustomConduit(Rhino.Display.DisplayConduit):
    def __init__(self):
      flag = System.Drawing.Bitmap(100,100)
      for x in range(0,100):
        for y in range(0,100):
          flag.SetPixel(x, y, System.Drawing.Color.Red)
      g = System.Drawing.Graphics.FromImage(flag)
      g.FillEllipse(System.Drawing.Brushes.Blue, 25, 25, 50, 50)
      self.display_bitmap = Rhino.Display.DisplayBitmap(flag)

    def DrawForeground(self, e):
      e.Display.DrawBitmap(self.display_bitmap, 50, 50, System.Drawing.Color.Red)

if __name__== "__main__":
    conduit = CustomConduit()
    conduit.Enabled = True
    scriptcontext.doc.Views.Redraw()
    rs.GetString("Pausing for user input")
    conduit.Enabled = False
    scriptcontext.doc.Views.Redraw()`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawBitmap(DisplayBitmap bitmap,int left,int top)']
    ]
  },
  {
    name: 'Getpointdynamicdraw.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Commands
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class GetPointDynamicDrawCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbGetPointDynamicDraw"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gp = New GetPoint()
      gp.SetCommandPrompt("Center point")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim center_point = gp.Point()
      If center_point = Point3d.Unset Then
        Return Result.Failure
      End If

      Dim gcp = New GetCircleRadiusPoint(center_point)
      gcp.SetCommandPrompt("Radius")
      gcp.ConstrainToConstructionPlane(False)
      gcp.SetBasePoint(center_point, True)
      gcp.DrawLineFromPoint(center_point, True)
      gcp.[Get]()
      If gcp.CommandResult() <> Result.Success Then
        Return gcp.CommandResult()
      End If

      Dim radius = center_point.DistanceTo(gcp.Point())
      Dim cplane = doc.Views.ActiveView.ActiveViewport.ConstructionPlane()
      doc.Objects.AddCircle(New Circle(cplane, center_point, radius))
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class

  Public Class GetCircleRadiusPoint
    Inherits GetPoint
    Private m_center_point As Point3d

    Public Sub New(centerPoint As Point3d)
      m_center_point = centerPoint
    End Sub

    Protected Overrides Sub OnDynamicDraw(e As GetPointDrawEventArgs)
      MyBase.OnDynamicDraw(e)
      Dim cplane = e.RhinoDoc.Views.ActiveView.ActiveViewport.ConstructionPlane()
      Dim radius = m_center_point.DistanceTo(e.CurrentPoint)
      Dim circle = New Circle(cplane, m_center_point, radius)
      e.Display.DrawCircle(circle, System.Drawing.Color.Black)
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawCircle(Circle circle,Color color)']
    ]
  },
  {
    name: 'Getpointdynamicdraw.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Commands;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class GetPointDynamicDrawCommand : Command
  {
    public override string EnglishName { get { return "csGetPointDynamicDraw"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gp = new GetPoint();
      gp.SetCommandPrompt("Center point");
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var center_point = gp.Point();
      if (center_point == Point3d.Unset)
        return Result.Failure;

      var gcp = new GetCircleRadiusPoint(center_point);
      gcp.SetCommandPrompt("Radius");
      gcp.ConstrainToConstructionPlane(false);
      gcp.SetBasePoint(center_point, true);
      gcp.DrawLineFromPoint(center_point, true);
      gcp.Get();
      if (gcp.CommandResult() != Result.Success)
        return gcp.CommandResult();

      var radius = center_point.DistanceTo(gcp.Point());
      var cplane = doc.Views.ActiveView.ActiveViewport.ConstructionPlane();
      doc.Objects.AddCircle(new Circle(cplane, center_point, radius));
      doc.Views.Redraw();
      return Result.Success;
    }
  }

  public class GetCircleRadiusPoint : GetPoint
  {
    private Point3d m_center_point;
 
    public GetCircleRadiusPoint(Point3d centerPoint)
    {
      m_center_point = centerPoint;
    }

    protected override void OnDynamicDraw(GetPointDrawEventArgs e)
    {
      base.OnDynamicDraw(e);
      var cplane = e.RhinoDoc.Views.ActiveView.ActiveViewport.ConstructionPlane();
      var radius = m_center_point.DistanceTo(e.CurrentPoint);
      var circle = new Circle(cplane, m_center_point, radius);
      e.Display.DrawCircle(circle, System.Drawing.Color.Black);
    }
  }
}`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawCircle(Circle circle,Color color)']
    ]
  },
  {
    name: 'Getpointdynamicdraw.py',
    code: `from Rhino import *
from Rhino.Geometry import *
from Rhino.Commands import *
from Rhino.Input.Custom import *
from scriptcontext import doc
from System.Drawing import *

def RunCommand():
  gp = GetPoint()
  gp.SetCommandPrompt("Center point")
  gp.Get()
  if gp.CommandResult() <> Result.Success:
    return gp.CommandResult()
  center_point = gp.Point()
  if center_point == Point3d.Unset:
    return Result.Failure

  gcp = GetCircleRadiusPoint(center_point)
  gcp.SetCommandPrompt("Radius")
  gcp.ConstrainToConstructionPlane(False)
  gcp.SetBasePoint(center_point, True)
  gcp.DrawLineFromPoint(center_point, True)
  gcp.Get()
  if gcp.CommandResult() <> Result.Success:
    return gcp.CommandResult()

  radius = center_point.DistanceTo(gcp.Point())
  cplane = doc.Views.ActiveView.ActiveViewport.ConstructionPlane()
  doc.Objects.AddCircle(Circle(cplane, center_point, radius))
  doc.Views.Redraw()
  return Result.Success

class GetCircleRadiusPoint (GetPoint):
  def __init__(self, centerPoint):
    self.m_center_point = centerPoint
  
  def OnDynamicDraw(self, e):
    cplane = e.RhinoDoc.Views.ActiveView.ActiveViewport.ConstructionPlane()
    radius = self.m_center_point.DistanceTo(e.CurrentPoint)
    circle = Circle(cplane, self.m_center_point, radius)
    e.Display.DrawCircle(circle, Color.Black)

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawCircle(Circle circle,Color color)']
    ]
  },
  {
    name: 'Meshdrawing.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Display
Imports Rhino.Geometry
Imports Rhino.Input.Custom
Imports Rhino.DocObjects
Imports System.Drawing

Namespace examples_vb
  Public Class MeshDrawingCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbDrawMesh"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select sphere")
      gs.GeometryFilter = ObjectType.Surface
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.[Get]()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If

      Dim sphere As Sphere
      gs.[Object](0).Surface().TryGetSphere(sphere)
      If sphere.IsValid Then
        Dim mesh__1 = Mesh.CreateFromSphere(sphere, 10, 10)
        If mesh__1 Is Nothing Then
          Return Result.Failure
        End If
        Dim conduit = New DrawBlueMeshConduit(mesh__1)
        conduit.Enabled = True

        doc.Views.Redraw()

        Dim inStr As String = ""
        Rhino.Input.RhinoGet.GetString("press <Enter> to continue", True, inStr)

        conduit.Enabled = False
        doc.Views.Redraw()
        Return Result.Success
      Else
        Return Result.Failure
      End If
    End Function
  End Class

  Class DrawBlueMeshConduit
    Inherits DisplayConduit
    Private _mesh As Mesh = Nothing
    Private _color As Color
    Private _material As DisplayMaterial = Nothing
    Private _bbox As BoundingBox

    Public Sub New(mesh As Mesh)
      ' set up as much data as possible so we do the minimum amount of work possible inside
      ' the actual display code
      _mesh = mesh
      _color = System.Drawing.Color.Blue
      _material = New DisplayMaterial()
      _material.Diffuse = _color
      If _mesh IsNot Nothing AndAlso _mesh.IsValid Then
        _bbox = _mesh.GetBoundingBox(True)
      End If
    End Sub

    ' this is called every frame inside the drawing code so try to do as little as possible
    ' in order to not degrade display speed. Don't create new objects if you don't have to as this
    ' will incur an overhead on the heap and garbage collection.
    Protected Overrides Sub CalculateBoundingBox(e As CalculateBoundingBoxEventArgs)
      MyBase.CalculateBoundingBox(e)
      ' Since we are dynamically drawing geometry, we needed to override
      ' CalculateBoundingBox. Otherwise, there is a good chance that our
      ' dynamically drawing geometry would get clipped.

      ' Union the mesh's bbox with the scene's bounding box
      e.IncludeBoundingBox(_bbox)
    End Sub

    Protected Overrides Sub PreDrawObjects(e As DrawEventArgs)
      MyBase.PreDrawObjects(e)
      Dim vp = e.Display.Viewport
      If vp.DisplayMode.EnglishName.ToLower() = "wireframe" Then
        e.Display.DrawMeshWires(_mesh, _color)
      Else
        e.Display.DrawMeshShaded(_mesh, _material)
      End If
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshShaded(Mesh mesh,DisplayMaterial material)'],
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshWires(Mesh mesh,Color color)']
    ]
  },
  {
    name: 'Meshdrawing.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Display;
using Rhino.Geometry;
using Rhino.Input.Custom;
using Rhino.DocObjects;
using System.Drawing;

namespace examples_cs
{
  public class MeshDrawingCommand : Command
  {
    public override string EnglishName { get { return "csDrawMesh"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gs = new GetObject();
      gs.SetCommandPrompt("select sphere");
      gs.GeometryFilter = ObjectType.Surface;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();

      Sphere sphere;
      gs.Object(0).Surface().TryGetSphere(out sphere);
      if (sphere.IsValid)
      {
        var mesh = Mesh.CreateFromSphere(sphere, 10, 10);
        if (mesh == null)
          return Result.Failure;

        var conduit = new DrawBlueMeshConduit(mesh) {Enabled = true};
        doc.Views.Redraw();

        var in_str = "";
        Rhino.Input.RhinoGet.GetString("press <Enter> to continue", true, ref in_str);

        conduit.Enabled = false;
        doc.Views.Redraw();
        return Result.Success;
      }
      else
        return Result.Failure;
    }
  }

  class DrawBlueMeshConduit : DisplayConduit
  {
    readonly Mesh m_mesh;
    readonly Color m_color;
    readonly DisplayMaterial m_material;
    readonly BoundingBox m_bbox;

    public DrawBlueMeshConduit(Mesh mesh)
    {
      // set up as much data as possible so we do the minimum amount of work possible inside
      // the actual display code
      m_mesh = mesh;
      m_color = System.Drawing.Color.Blue;
      m_material = new DisplayMaterial();
      m_material.Diffuse = m_color;
      if (m_mesh != null && m_mesh.IsValid)
        m_bbox = m_mesh.GetBoundingBox(true);
    }

    // this is called every frame inside the drawing code so try to do as little as possible
    // in order to not degrade display speed. Don't create new objects if you don't have to as this
    // will incur an overhead on the heap and garbage collection.
    protected override void CalculateBoundingBox(CalculateBoundingBoxEventArgs e)
    {
      base.CalculateBoundingBox(e);
      // Since we are dynamically drawing geometry, we needed to override
      // CalculateBoundingBox. Otherwise, there is a good chance that our
      // dynamically drawing geometry would get clipped.
 
      // Union the mesh's bbox with the scene's bounding box
      e.IncludeBoundingBox(m_bbox);
    }

    protected override void PreDrawObjects(DrawEventArgs e)
    {
      base.PreDrawObjects(e);
      var vp = e.Display.Viewport;
      if (vp.DisplayMode.EnglishName.ToLower() == "wireframe")
        e.Display.DrawMeshWires(m_mesh, m_color);
      else
        e.Display.DrawMeshShaded(m_mesh, m_material);
    }
  }
}`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshShaded(Mesh mesh,DisplayMaterial material)'],
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshWires(Mesh mesh,Color color)']
    ]
  },
  {
    name: 'Meshdrawing.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import doc
import Rhino
import System
import System.Drawing

def RunCommand():
  gs = Rhino.Input.Custom.GetObject()
  gs.SetCommandPrompt("select sphere")
  gs.GeometryFilter = Rhino.DocObjects.ObjectType.Surface
  gs.DisablePreSelect()
  gs.SubObjectSelect = False
  gs.Get()
  if gs.CommandResult() != Rhino.Commands.Result.Success:
    return gs.CommandResult()

  b, sphere = gs.Object(0).Surface().TryGetSphere()
  if sphere.IsValid:
    mesh = Rhino.Geometry.Mesh.CreateFromSphere(sphere, 10, 10)
    if mesh == None:
      return Rhino.Commands.Result.Failure

    conduit = DrawBlueMeshConduit(mesh)
    conduit.Enabled = True
    doc.Views.Redraw()

    inStr = rs.GetString("press <Enter> to continue")

    conduit.Enabled = False
    doc.Views.Redraw()
    return Rhino.Commands.Result.Success
  else:
    return Rhino.Commands.Result.Failure

class DrawBlueMeshConduit(Rhino.Display.DisplayConduit):
  def __init__(self, mesh):
    self.mesh = mesh
    self.color = System.Drawing.Color.Blue
    self.material = Rhino.Display.DisplayMaterial()
    self.material.Diffuse = self.color
    if mesh != None and mesh.IsValid:
      self.bbox = mesh.GetBoundingBox(True)

  def CalculateBoundingBox(self, calculateBoundingBoxEventArgs):
    #super.CalculateBoundingBox(calculateBoundingBoxEventArgs)
    calculateBoundingBoxEventArgs.IncludeBoundingBox(self.bbox)

  def PreDrawObjects(self, drawEventArgs):
    #base.PreDrawObjects(rawEventArgs)
    gvp = drawEventArgs.Display.Viewport
    if gvp.DisplayMode.EnglishName.ToLower() == "wireframe":
      drawEventArgs.Display.DrawMeshWires(self.mesh, self.color)
    else:
      drawEventArgs.Display.DrawMeshShaded(self.mesh, self.material)

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshShaded(Mesh mesh,DisplayMaterial material)'],
      ['Rhino.Display.DisplayPipeline', 'void DrawMeshWires(Mesh mesh,Color color)']
    ]
  },
  {
    name: 'Arraybydistance.vb',
    code: `Imports Rhino

<System.Runtime.InteropServices.Guid("03249FBF-75C9-4878-83CC-20C197E5A758")> _
Public Class ArrayByDistanceCommand
  Inherits Rhino.Commands.Command
  Public Overrides ReadOnly Property EnglishName() As String
    Get
      Return "vb_ArrayByDistance"
    End Get
  End Property

  Private m_distance As Double = 1
  Private m_point_start As Rhino.Geometry.Point3d
  Protected Overrides Function RunCommand(doc As RhinoDoc, mode As Rhino.Commands.RunMode) As Rhino.Commands.Result
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    Dim rc = Rhino.Input.RhinoGet.GetOneObject("Select object", True, Rhino.DocObjects.ObjectType.AnyObject, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    rc = Rhino.Input.RhinoGet.GetPoint("Start point", False, m_point_start)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    Dim obj = objref.Object()
    If obj Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    ' create an instance of a GetPoint class and add a delegate
    ' for the DynamicDraw event
    Dim gp = New Rhino.Input.Custom.GetPoint()
    gp.DrawLineFromPoint(m_point_start, True)
    Dim optdouble = New Rhino.Input.Custom.OptionDouble(m_distance)
    Dim constrain As Boolean = False
    Dim optconstrain = New Rhino.Input.Custom.OptionToggle(constrain, "Off", "On")
    gp.AddOptionDouble("Distance", optdouble)
    gp.AddOptionToggle("Constrain", optconstrain)
    AddHandler gp.DynamicDraw, AddressOf ArrayByDistanceDraw
    gp.Tag = obj
    While gp.Get() = Rhino.Input.GetResult.Option
      m_distance = optdouble.CurrentValue
      If constrain <> optconstrain.CurrentValue Then
        constrain = optconstrain.CurrentValue
        If constrain Then
          Dim gp2 = New Rhino.Input.Custom.GetPoint()
          gp2.DrawLineFromPoint(m_point_start, True)
          gp2.SetCommandPrompt("Second point on constraint line")
          If gp2.Get() = Rhino.Input.GetResult.Point Then
            gp.Constrain(m_point_start, gp2.Point())
          Else
            gp.ClearCommandOptions()
            optconstrain.CurrentValue = False
            constrain = False
            gp.AddOptionDouble("Distance", optdouble)
            gp.AddOptionToggle("Constrain", optconstrain)
          End If
        Else
          gp.ClearConstraints()
        End If
      End If
    End While

    If gp.CommandResult() = Rhino.Commands.Result.Success Then
      m_distance = optdouble.CurrentValue
      Dim pt = gp.Point()
      Dim vec = pt - m_point_start
      Dim length As Double = vec.Length
      vec.Unitize()
      Dim count As Integer = CInt(Math.Truncate(length / m_distance))
      For i As Integer = 1 To count - 1
        Dim translate = vec * (i * m_distance)
        Dim xf = Rhino.Geometry.Transform.Translation(translate)
        doc.Objects.Transform(obj, xf, False)
      Next
      doc.Views.Redraw()
    End If

    Return gp.CommandResult()
  End Function

  ' this function is called whenever the GetPoint's DynamicDraw
  ' event occurs
  Private Sub ArrayByDistanceDraw(sender As Object, e As Rhino.Input.Custom.GetPointDrawEventArgs)
    Dim rhobj As Rhino.DocObjects.RhinoObject = TryCast(e.Source.Tag, Rhino.DocObjects.RhinoObject)
    If rhobj Is Nothing Then
      Return
    End If
    Dim vec = e.CurrentPoint - m_point_start
    Dim length As Double = vec.Length
    vec.Unitize()
    Dim count As Integer = CInt(Math.Truncate(length / m_distance))
    For i As Integer = 1 To count - 1
      Dim translate = vec * (i * m_distance)
      Dim xf = Rhino.Geometry.Transform.Translation(translate)
      e.Display.DrawObject(rhobj, xf)
    Next
  End Sub
End Class
`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawObject(RhinoObject rhinoObject,Transform xform)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void ClearCommandOptions()'],
      ['Rhino.Input.Custom.GetPoint', 'object Tag'],
      ['Rhino.Input.Custom.GetPoint', 'void ClearConstraints()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Point3d from,Point3d to)'],
      ['Rhino.Input.Custom.GetPointDrawEventArgs', 'GetPoint Source']
    ]
  },
  {
    name: 'Arraybydistance.cs',
    code: `using Rhino;

[System.Runtime.InteropServices.Guid("3CDCBB20-B4E4-4AB6-B870-C911C7435BD7")]
public class ArrayByDistanceCommand : Rhino.Commands.Command
{
  public override string EnglishName
  {
    get { return "cs_ArrayByDistance"; }
  }
  
  double m_distance = 1;
  Rhino.Geometry.Point3d m_point_start;
  protected override Rhino.Commands.Result RunCommand(RhinoDoc doc, Rhino.Commands.RunMode mode)
  {
    Rhino.DocObjects.ObjRef objref;
    var rc = Rhino.Input.RhinoGet.GetOneObject("Select object", true, Rhino.DocObjects.ObjectType.AnyObject, out objref);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    rc = Rhino.Input.RhinoGet.GetPoint("Start point", false, out m_point_start);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    var obj = objref.Object();
    if (obj == null)
      return Rhino.Commands.Result.Failure;

    // create an instance of a GetPoint class and add a delegate
    // for the DynamicDraw event
    var gp = new Rhino.Input.Custom.GetPoint();
    gp.DrawLineFromPoint(m_point_start, true);
    var optdouble = new Rhino.Input.Custom.OptionDouble(m_distance);
    bool constrain = false;
    var optconstrain = new Rhino.Input.Custom.OptionToggle(constrain, "Off", "On");
    gp.AddOptionDouble("Distance", ref optdouble);
    gp.AddOptionToggle("Constrain", ref optconstrain);
    gp.DynamicDraw += ArrayByDistanceDraw;
    gp.Tag = obj;
    while (gp.Get() == Rhino.Input.GetResult.Option)
    {
      m_distance = optdouble.CurrentValue;
      if (constrain != optconstrain.CurrentValue)
      {
        constrain = optconstrain.CurrentValue;
        if (constrain)
        {
          var gp2 = new Rhino.Input.Custom.GetPoint();
          gp2.DrawLineFromPoint(m_point_start, true);
          gp2.SetCommandPrompt("Second point on constraint line");
          if (gp2.Get() == Rhino.Input.GetResult.Point)
            gp.Constrain(m_point_start, gp2.Point());
          else
          {
            gp.ClearCommandOptions();
            optconstrain.CurrentValue = false;
            constrain = false;
            gp.AddOptionDouble("Distance", ref optdouble);
            gp.AddOptionToggle("Constrain", ref optconstrain);
          }
        }
        else
        {
          gp.ClearConstraints();
        }
      }
    }

    if (gp.CommandResult() == Rhino.Commands.Result.Success)
    {
      m_distance = optdouble.CurrentValue;
      var pt = gp.Point();
      var vec = pt - m_point_start;
      double length = vec.Length;
      vec.Unitize();
      int count = (int)(length / m_distance);
      for (int i = 1; i < count; i++)
      {
        var translate = vec * (i * m_distance);
        var xf = Rhino.Geometry.Transform.Translation(translate);
        doc.Objects.Transform(obj, xf, false);
      }
      doc.Views.Redraw();
    }

    return gp.CommandResult();
  }

  // this function is called whenever the GetPoint's DynamicDraw
  // event occurs
  void ArrayByDistanceDraw(object sender, Rhino.Input.Custom.GetPointDrawEventArgs e)
  {
    Rhino.DocObjects.RhinoObject rhobj = e.Source.Tag as Rhino.DocObjects.RhinoObject;
    if (rhobj == null)
      return;
    var vec = e.CurrentPoint - m_point_start;
    double length = vec.Length;
    vec.Unitize();
    int count = (int)(length / m_distance);
    for (int i = 1; i < count; i++)
    {
      var translate = vec * (i * m_distance);
      var xf = Rhino.Geometry.Transform.Translation(translate);
      e.Display.DrawObject(rhobj, xf);
    }
  }
}
`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawObject(RhinoObject rhinoObject,Transform xform)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void ClearCommandOptions()'],
      ['Rhino.Input.Custom.GetPoint', 'object Tag'],
      ['Rhino.Input.Custom.GetPoint', 'void ClearConstraints()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Point3d from,Point3d to)'],
      ['Rhino.Input.Custom.GetPointDrawEventArgs', 'GetPoint Source']
    ]
  },
  {
    name: 'Arraybydistance.py',
    code: `import Rhino
import scriptcontext

def dynamic_array():
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select object", True, Rhino.DocObjects.ObjectType.AnyObject)
    if rc!=Rhino.Commands.Result.Success: return
    
    rc, pt_start = Rhino.Input.RhinoGet.GetPoint("Start point", False)
    if rc!=Rhino.Commands.Result.Success: return
    
    obj = objref.Object()
    if not obj: return
    
    dist = 1
    if scriptcontext.sticky.has_key("dynamic_array_distance"):
        dist = scriptcontext.sticky["dynamic_array_distance"]
    # This is a function that is called whenever the GetPoint's
    # DynamicDraw event occurs
    def ArrayByDistanceDraw( sender, args ):
        rhobj = args.Source.Tag
        if not rhobj: return
        vec = args.CurrentPoint - pt_start
        length = vec.Length
        vec.Unitize()
        count = int(length / dist)
        for i in range(1,count):
            translate = vec * (i*dist)
            xf = Rhino.Geometry.Transform.Translation(translate)
            args.Display.DrawObject(rhobj, xf)

    # Create an instance of a GetPoint class and add a delegate
    # for the DynamicDraw event
    gp = Rhino.Input.Custom.GetPoint()
    gp.DrawLineFromPoint(pt_start, True)
    optdouble = Rhino.Input.Custom.OptionDouble(dist)
    constrain = False
    optconstrain = Rhino.Input.Custom.OptionToggle(constrain,"Off", "On")
    gp.AddOptionDouble("Distance", optdouble)
    gp.AddOptionToggle("Constrain", optconstrain)
    gp.DynamicDraw += ArrayByDistanceDraw
    gp.Tag = obj
    while gp.Get()==Rhino.Input.GetResult.Option:
        dist = optdouble.CurrentValue
        if constrain!=optconstrain.CurrentValue:
            constrain = optconstrain.CurrentValue
            if constrain:
                gp2 = Rhino.Input.Custom.GetPoint()
                gp2.DrawLineFromPoint(pt_start, True)
                gp2.SetCommandPrompt("Second point on constraint line")
                if gp2.Get()==Rhino.Input.GetResult.Point:
                    gp.Constrain(pt_start, gp2.Point())
                else:
                    gp.ClearCommandOptions()
                    optconstrain.CurrentValue = False
                    constrain = False
                    gp.AddOptionDouble("Distance", optdouble)
                    gp.AddOptionToggle("Constrain", optconstrain)
            else:
                gp.ClearConstraints()
        continue
    if gp.CommandResult()==Rhino.Commands.Result.Success:
        scriptcontext.sticky["dynamic_array_distance"] = dist
        pt = gp.Point()
        vec = pt - pt_start
        length = vec.Length
        vec.Unitize()
        count = int(length / dist)
        for i in range(1, count):
            translate = vec * (i*dist)
            xf = Rhino.Geometry.Transform.Translation(translate)
            scriptcontext.doc.Objects.Transform(obj,xf,False)
        scriptcontext.doc.Views.Redraw()


if( __name__ == "__main__" ):
    dynamic_array()`,
    members: [
      ['Rhino.Display.DisplayPipeline', 'void DrawObject(RhinoObject rhinoObject,Transform xform)'],
      ['Rhino.Input.Custom.GetBaseClass', 'void ClearCommandOptions()'],
      ['Rhino.Input.Custom.GetPoint', 'object Tag'],
      ['Rhino.Input.Custom.GetPoint', 'void ClearConstraints()'],
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Point3d from,Point3d to)'],
      ['Rhino.Input.Custom.GetPointDrawEventArgs', 'GetPoint Source']
    ]
  },
  {
    name: 'Rhinopageviewwidthheight.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Input

Namespace examples_vb
  Public Class RhinoPageViewWidthHeightCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbSetRhinoPageViewWidthAndHeight"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim width = 1189
      Dim height = 841
      Dim page_views = doc.Views.GetPageViews()
      Dim page_number As Integer = If((page_views Is Nothing), 1, page_views.Length + 1)
      Dim pageview = doc.Views.AddPageView(String.Format("A0_{0}", page_number), width, height)

      Dim new_width As Integer = width
      Dim rc = RhinoGet.GetInteger("new width", False, new_width)
      If rc <> Result.Success OrElse new_width <= 0 Then
        Return rc
      End If

      Dim new_height As Integer = height
      rc = RhinoGet.GetInteger("new height", False, new_height)
      If rc <> Result.Success OrElse new_height <= 0 Then
        Return rc
      End If

      pageview.PageWidth = new_width
      pageview.PageHeight = new_height
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.RhinoPageView', 'double PageHeight'],
      ['Rhino.Display.RhinoPageView', 'double PageWidth']
    ]
  },
  {
    name: 'Rhinopageviewwidthheight.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;

namespace examples_cs
{
  public class RhinoPageViewWidthHeightCommand : Command
  {
    public override string EnglishName { get { return "csSetRhinoPageViewWidthAndHeight"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var width = 1189;
      var height = 841;
      var page_views = doc.Views.GetPageViews();
      int page_number = (page_views==null) ? 1 : page_views.Length + 1;
      var pageview = doc.Views.AddPageView(string.Format("A0_{0}",page_number), width, height);

      int new_width = width;
      var rc = RhinoGet.GetInteger("new width", false, ref new_width);
      if (rc != Result.Success || new_width <= 0) return rc;

      int new_height = height;
      rc = RhinoGet.GetInteger("new height", false, ref new_height);
      if (rc != Result.Success || new_height <= 0) return rc;

      pageview.PageWidth = new_width;
      pageview.PageHeight = new_height;
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Display.RhinoPageView', 'double PageHeight'],
      ['Rhino.Display.RhinoPageView', 'double PageWidth']
    ]
  },
  {
    name: 'Rhinopageviewwidthheight.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.Input import *
from scriptcontext import doc

def RunCommand():
  width = 1189
  height = 841
  page_views = doc.Views.GetPageViews()
  page_number = 1 if page_views==None else page_views.Length + 1
  pageview = doc.Views.AddPageView("A0_{0}".format(page_number), width, height)

  new_width = width
  rc, new_width = RhinoGet.GetInteger("new width", False, new_width)
  if rc != Result.Success or new_width <= 0: return rc

  new_height = height
  rc, new_height = RhinoGet.GetInteger("new height", False, new_height)
  if rc != Result.Success or new_height <= 0: return rc

  pageview.PageWidth = new_width
  pageview.PageHeight = new_height
  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Display.RhinoPageView', 'double PageHeight'],
      ['Rhino.Display.RhinoPageView', 'double PageWidth']
    ]
  },
  {
    name: 'Activeviewport.vb',
    code: `Partial Class Examples
  Public Shared Function ActiveViewport(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim view As Rhino.Display.RhinoView = doc.Views.ActiveView
    If view Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim pageview As Rhino.Display.RhinoPageView = TryCast(view, Rhino.Display.RhinoPageView)
    If pageview IsNot Nothing Then
      Dim layout_name As String = pageview.PageName
      If pageview.PageIsActive Then
        Rhino.RhinoApp.WriteLine("The layout {0} is active", layout_name)
      Else
        Dim detail_name As String = pageview.ActiveViewport.Name
        Rhino.RhinoApp.WriteLine("The detail {0} on layout {1} is active", detail_name, layout_name)
      End If
    Else
      Dim viewport_name As String = view.MainViewport.Name
      Rhino.RhinoApp.WriteLine("The viewport {0} is active", viewport_name)
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Display.RhinoPageView', 'bool PageIsActive'],
      ['Rhino.Display.RhinoPageView', 'string PageName']
    ]
  },
  {
    name: 'Activeviewport.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result ActiveViewport(Rhino.RhinoDoc doc)
  {
    Rhino.Display.RhinoView view = doc.Views.ActiveView;
    if (view == null)
      return Rhino.Commands.Result.Failure;

    Rhino.Display.RhinoPageView pageview = view as Rhino.Display.RhinoPageView;
    if (pageview != null)
    {
      string layout_name = pageview.PageName;
      if (pageview.PageIsActive)
      {
        Rhino.RhinoApp.WriteLine("The layout {0} is active", layout_name);
      }
      else
      {
        string detail_name = pageview.ActiveViewport.Name;
        Rhino.RhinoApp.WriteLine("The detail {0} on layout {1} is active", detail_name, layout_name);
      }
    }
    else
    {
      string viewport_name = view.MainViewport.Name;
      Rhino.RhinoApp.WriteLine("The viewport {0} is active", viewport_name);
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Display.RhinoPageView', 'bool PageIsActive'],
      ['Rhino.Display.RhinoPageView', 'string PageName']
    ]
  },
  {
    name: 'Activeviewport.py',
    code: `import Rhino
import scriptcontext

def ActiveViewport():
    view = scriptcontext.doc.Views.ActiveView
    if view is None: return
    if isinstance(view, Rhino.Display.RhinoPageView):
        if view.PageIsActive:
            print "The layout", view.PageName, "is active"
        else:
            detail_name = view.ActiveViewport.Name
            print "The detail", detail_name, "on layout", view.PageName, "is active"
    else:
        print "The viewport", view.MainViewport.Name, "is active"


if __name__ == "__main__":
    ActiveViewport()
`,
    members: [
      ['Rhino.Display.RhinoPageView', 'bool PageIsActive'],
      ['Rhino.Display.RhinoPageView', 'string PageName']
    ]
  },
  {
    name: 'Addbackgroundbitmap.vb',
    code: `Partial Class Examples
  Public Shared Function AddBackgroundBitmap(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Allow the user to select a bitmap file
    Dim fd As New Rhino.UI.OpenFileDialog()
    fd.Filter = "Image Files (*.bmp;*.png;*.jpg)|*.bmp;*.png;*.jpg"
    If fd.ShowDialog() <> System.Windows.Forms.DialogResult.OK Then
      Return Rhino.Commands.Result.Cancel
    End If

    ' Verify the file that was selected
    Dim image As System.Drawing.Image
    Try
      image = System.Drawing.Image.FromFile(fd.FileName)
    Catch generatedExceptionName As Exception
      Return Rhino.Commands.Result.Failure
    End Try

    ' Allow the user to pick the bitmap origin
    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Bitmap Origin")
    gp.ConstrainToConstructionPlane(True)
    gp.Get()
    If gp.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gp.CommandResult()
    End If

    ' Get the view that the point was picked in.
    ' This will be the view that the bitmap appears in.
    Dim view As Rhino.Display.RhinoView = gp.View()
    If view Is Nothing Then
      view = doc.Views.ActiveView
      If view Is Nothing Then
        Return Rhino.Commands.Result.Failure
      End If
    End If

    ' Allow the user to specify the bitmap with in model units
    Dim gn As New Rhino.Input.Custom.GetNumber()
    gn.SetCommandPrompt("Bitmap width")
    gn.SetLowerLimit(1.0, False)
    gn.Get()
    If gn.CommandResult() <> Rhino.Commands.Result.Success Then
      Return gn.CommandResult()
    End If

    ' Cook up some scale factors
    Dim w As Double = gn.Number()
    Dim image_width As Double = CDbl(image.Width)
    Dim image_height As Double = CDbl(image.Height)
    Dim h As Double = w * (image_height / image_width)

    Dim plane As Rhino.Geometry.Plane = view.ActiveViewport.ConstructionPlane()
    plane.Origin = gp.Point()
    view.ActiveViewport.SetTraceImage(fd.FileName, plane, w, h, False, False)
    view.Redraw()
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Display.RhinoView', 'RhinoViewport ActiveViewport'],
      ['Rhino.Display.RhinoView', 'void Redraw()'],
      ['Rhino.Display.RhinoViewport', 'Plane ConstructionPlane()'],
      ['Rhino.Display.RhinoViewport', 'bool SetTraceImage(string bitmapFileName,Plane plane,double width,double height,bool grayscale,bool filtered)'],
      ['Rhino.UI.OpenFileDialog', 'OpenFileDialog()'],
      ['Rhino.UI.OpenFileDialog', 'string FileName'],
      ['Rhino.UI.OpenFileDialog', 'string Filter'],
      ['Rhino.UI.OpenFileDialog', 'bool ShowOpenDialog()'],
      ['Rhino.Input.Custom.GetBaseClass', 'Result CommandResult()'],
      ['Rhino.Input.Custom.GetBaseClass', 'double Number()'],
      ['Rhino.Input.Custom.GetBaseClass', 'RhinoView View()'],
      ['Rhino.Input.Custom.GetPoint', 'bool ConstrainToConstructionPlane(bool throughBasePoint)'],
      ['Rhino.Input.Custom.GetNumber', 'GetNumber()'],
      ['Rhino.Input.Custom.GetNumber', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetNumber', 'void SetLowerLimit(double lowerLimit,bool strictlyGreaterThan)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoView ActiveView']
    ]
  },
  {
    name: 'Addbackgroundbitmap.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddBackgroundBitmap(Rhino.RhinoDoc doc)
  {
    // Allow the user to select a bitmap file
    var fd = new Rhino.UI.OpenFileDialog { Filter = "Image Files (*.bmp;*.png;*.jpg)|*.bmp;*.png;*.jpg" };
    if (!fd.ShowOpenDialog())
      return Rhino.Commands.Result.Cancel;

    // Verify the file that was selected
    System.Drawing.Image image;
    try
    {
      image = System.Drawing.Image.FromFile(fd.FileName);
    }
    catch (Exception)
    {
      return Rhino.Commands.Result.Failure;
    }

    // Allow the user to pick the bitmap origin
    var gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Bitmap Origin");
    gp.ConstrainToConstructionPlane(true);
    gp.Get();
    if (gp.CommandResult() != Rhino.Commands.Result.Success)
      return gp.CommandResult();

    // Get the view that the point was picked in.
    // This will be the view that the bitmap appears in.
    var view = gp.View();
    if (view == null)
    {
      view = doc.Views.ActiveView;
      if (view == null)
        return Rhino.Commands.Result.Failure;
    }

    // Allow the user to specify the bitmap width in model units
    var gn = new Rhino.Input.Custom.GetNumber();
    gn.SetCommandPrompt("Bitmap width");
    gn.SetLowerLimit(1.0, false);
    gn.Get();
    if (gn.CommandResult() != Rhino.Commands.Result.Success)
      return gn.CommandResult();

    // Cook up some scale factors
    var w = gn.Number();
    var image_width = image.Width;
    var image_height = image.Height;
    var h = w * (image_height / image_width);

    var plane = view.ActiveViewport.ConstructionPlane();
    plane.Origin = gp.Point();
    view.ActiveViewport.SetTraceImage(fd.FileName, plane, w, h, false, false);
    view.Redraw();
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Display.RhinoView', 'RhinoViewport ActiveViewport'],
      ['Rhino.Display.RhinoView', 'void Redraw()'],
      ['Rhino.Display.RhinoViewport', 'Plane ConstructionPlane()'],
      ['Rhino.Display.RhinoViewport', 'bool SetTraceImage(string bitmapFileName,Plane plane,double width,double height,bool grayscale,bool filtered)'],
      ['Rhino.UI.OpenFileDialog', 'OpenFileDialog()'],
      ['Rhino.UI.OpenFileDialog', 'string FileName'],
      ['Rhino.UI.OpenFileDialog', 'string Filter'],
      ['Rhino.UI.OpenFileDialog', 'bool ShowOpenDialog()'],
      ['Rhino.Input.Custom.GetBaseClass', 'Result CommandResult()'],
      ['Rhino.Input.Custom.GetBaseClass', 'double Number()'],
      ['Rhino.Input.Custom.GetBaseClass', 'RhinoView View()'],
      ['Rhino.Input.Custom.GetPoint', 'bool ConstrainToConstructionPlane(bool throughBasePoint)'],
      ['Rhino.Input.Custom.GetNumber', 'GetNumber()'],
      ['Rhino.Input.Custom.GetNumber', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetNumber', 'void SetLowerLimit(double lowerLimit,bool strictlyGreaterThan)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoView ActiveView']
    ]
  },
  {
    name: 'Addbackgroundbitmap.py',
    code: `import Rhino
import scriptcontext
import System.Windows.Forms.DialogResult
import System.Drawing.Image

def AddBackgroundBitmap():
    # Allow the user to select a bitmap file
    fd = Rhino.UI.OpenFileDialog()
    fd.Filter = "Image Files (*.bmp;*.png;*.jpg)|*.bmp;*.png;*.jpg"
    if fd.ShowDialog()!=System.Windows.Forms.DialogResult.OK:
        return Rhino.Commands.Result.Cancel

    # Verify the file that was selected
    image = None
    try:
        image = System.Drawing.Image.FromFile(fd.FileName)
    except:
        return Rhino.Commands.Result.Failure

    # Allow the user to pick the bitmap origin
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Bitmap Origin")
    gp.ConstrainToConstructionPlane(True)
    gp.Get()
    if gp.CommandResult()!=Rhino.Commands.Result.Success:
        return gp.CommandResult()

    # Get the view that the point was picked in.
    # This will be the view that the bitmap appears in.
    view = gp.View()
    if view is None:
        view = scriptcontext.doc.Views.ActiveView
        if view is None: return Rhino.Commands.Result.Failure

    # Allow the user to specify the bitmap with in model units
    gn = Rhino.Input.Custom.GetNumber()
    gn.SetCommandPrompt("Bitmap width")
    gn.SetLowerLimit(1.0, False)
    gn.Get()
    if gn.CommandResult()!=Rhino.Commands.Result.Success:
        return gn.CommandResult()

    # Cook up some scale factors
    w = gn.Number()
    h = w * (image.Width / image.Height)

    plane = view.ActiveViewport.ConstructionPlane()
    plane.Origin = gp.Point()
    view.ActiveViewport.SetTraceImage(fd.FileName, plane, w, h, False, False)
    view.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    AddBackgroundBitmap()
`,
    members: [
      ['Rhino.Display.RhinoView', 'RhinoViewport ActiveViewport'],
      ['Rhino.Display.RhinoView', 'void Redraw()'],
      ['Rhino.Display.RhinoViewport', 'Plane ConstructionPlane()'],
      ['Rhino.Display.RhinoViewport', 'bool SetTraceImage(string bitmapFileName,Plane plane,double width,double height,bool grayscale,bool filtered)'],
      ['Rhino.UI.OpenFileDialog', 'OpenFileDialog()'],
      ['Rhino.UI.OpenFileDialog', 'string FileName'],
      ['Rhino.UI.OpenFileDialog', 'string Filter'],
      ['Rhino.UI.OpenFileDialog', 'bool ShowOpenDialog()'],
      ['Rhino.Input.Custom.GetBaseClass', 'Result CommandResult()'],
      ['Rhino.Input.Custom.GetBaseClass', 'double Number()'],
      ['Rhino.Input.Custom.GetBaseClass', 'RhinoView View()'],
      ['Rhino.Input.Custom.GetPoint', 'bool ConstrainToConstructionPlane(bool throughBasePoint)'],
      ['Rhino.Input.Custom.GetNumber', 'GetNumber()'],
      ['Rhino.Input.Custom.GetNumber', 'GetResult Get()'],
      ['Rhino.Input.Custom.GetNumber', 'void SetLowerLimit(double lowerLimit,bool strictlyGreaterThan)'],
      ['Rhino.DocObjects.Tables.ViewTable', 'RhinoView ActiveView']
    ]
  },
  {
    name: 'Screencaptureview.vb',
    code: `Imports System.Windows.Forms
Imports Rhino
Imports Rhino.Commands

Namespace examples_vb
  Public Class CaptureViewToBitmapCommand
    Inherits Rhino.Commands.Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCaptureViewToBitmap"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim file_name = ""

      Dim bitmap = doc.Views.ActiveView.CaptureToBitmap(True, True, True)

      ' copy bitmap to clipboard
      Clipboard.SetImage(bitmap)

      ' save bitmap to file
      Dim save_file_dialog = New Rhino.UI.SaveFileDialog()
      save_file_dialog.Filter = "*.bmp"
      save_file_dialog.InitialDirectory =
        Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)

      If save_file_dialog.ShowDialog() = DialogResult.OK Then
        file_name = save_file_dialog.FileName
      End If

      If file_name <> "" Then
        bitmap.Save(file_name)
      End If

      Return Rhino.Commands.Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.RhinoView', 'System.Drawing.Bitmap CaptureToBitmap(bool grid,bool worldAxes,bool cplaneAxes)'],
      ['Rhino.UI.SaveFileDialog', 'SaveFileDialog()'],
      ['Rhino.UI.SaveFileDialog', 'string FileName'],
      ['Rhino.UI.SaveFileDialog', 'string Filter'],
      ['Rhino.UI.SaveFileDialog', 'string InitialDirectory'],
      ['Rhino.UI.SaveFileDialog', 'bool ShowSaveDialog()']
    ]
  },
  {
    name: 'Screencaptureview.cs',
    code: `using System;
using System.Windows.Forms;
using Rhino;
using Rhino.Commands;

namespace examples_cs
{
  public class CaptureViewToBitmapCommand : Rhino.Commands.Command
  {
    public override string EnglishName
    {
      get { return "csCaptureViewToBitmap"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var file_name = "";

      var bitmap = doc.Views.ActiveView.CaptureToBitmap(true, true, true);
      bitmap.MakeTransparent();

      // copy bitmap to clipboard
      Clipboard.SetImage(bitmap);

      // save bitmap to file
      var save_file_dialog = new Rhino.UI.SaveFileDialog
      {
        Filter = "*.bmp",
        InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)
      };
      if (save_file_dialog.ShowDialog() == DialogResult.OK)
      {
        file_name = save_file_dialog.FileName;
      }

      if (file_name != "")
        bitmap.Save(file_name);

      return Rhino.Commands.Result.Success;
    }
  }
}
`,
    members: [
      ['Rhino.Display.RhinoView', 'System.Drawing.Bitmap CaptureToBitmap(bool grid,bool worldAxes,bool cplaneAxes)'],
      ['Rhino.UI.SaveFileDialog', 'SaveFileDialog()'],
      ['Rhino.UI.SaveFileDialog', 'string FileName'],
      ['Rhino.UI.SaveFileDialog', 'string Filter'],
      ['Rhino.UI.SaveFileDialog', 'string InitialDirectory'],
      ['Rhino.UI.SaveFileDialog', 'bool ShowSaveDialog()']
    ]
  },
  {
    name: 'Screencaptureview.py',
    code: `from scriptcontext import doc
from System.Windows.Forms import *
import Rhino.UI
from System import Environment

def RunCommand():
  file_name = "";

  bitmap = doc.Views.ActiveView.CaptureToBitmap(True, True, True)

  # copy bitmap to clipboard
  Clipboard.SetImage(bitmap)


  # save bitmap to file
  save_file_dialog = Rhino.UI.SaveFileDialog()
  save_file_dialog.Filter = "*.bmp"
  save_file_dialog.InitialDirectory = \
    Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)

  if save_file_dialog.ShowDialog() == DialogResult.OK:
    file_name = save_file_dialog.FileName

  if file_name != "":
    bitmap.Save(file_name)

  return Rhino.Commands.Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Display.RhinoView', 'System.Drawing.Bitmap CaptureToBitmap(bool grid,bool worldAxes,bool cplaneAxes)'],
      ['Rhino.UI.SaveFileDialog', 'SaveFileDialog()'],
      ['Rhino.UI.SaveFileDialog', 'string FileName'],
      ['Rhino.UI.SaveFileDialog', 'string Filter'],
      ['Rhino.UI.SaveFileDialog', 'string InitialDirectory'],
      ['Rhino.UI.SaveFileDialog', 'bool ShowSaveDialog()']
    ]
  },
  {
    name: 'Viewportresolution.vb',
    code: `Imports Rhino
Imports Rhino.Commands

Namespace examples_vb
  Public Class ViewportResolutionCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbViewportResolution"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim activeViewport = doc.Views.ActiveView.ActiveViewport
      RhinoApp.WriteLine([String].Format("Name = {0}: Width = {1}, Height = {2}", activeViewport.Name, activeViewport.Size.Width, activeViewport.Size.Height))
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Display.RhinoViewport', 'Size Size']
    ]
  },
  {
    name: 'Viewportresolution.cs',
    code: `using Rhino;
using Rhino.Commands;

namespace examples_cs
{
  public class ViewportResolutionCommand : Command
  {
    public override string EnglishName { get { return "csViewportResolution"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var active_viewport = doc.Views.ActiveView.ActiveViewport;
      RhinoApp.WriteLine("Name = {0}: Width = {1}, Height = {2}", 
        active_viewport.Name, active_viewport.Size.Width, active_viewport.Size.Height);
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Display.RhinoViewport', 'Size Size']
    ]
  },
  {
    name: 'Viewportresolution.py',
    code: `from scriptcontext import doc

activeViewport = doc.Views.ActiveView.ActiveViewport
print "Name = {0}: Width = {1}, Height = {2}".format(
    activeViewport.Name, activeViewport.Size.Width, activeViewport.Size.Height)
`,
    members: [
      ['Rhino.Display.RhinoViewport', 'Size Size']
    ]
  },
  {
    name: 'Replacecolordialog.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.UI
Imports System.Windows.Forms

Namespace examples_vb
  Public Class ReplaceColorDialogCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbReplaceColorDialog"
      End Get
    End Property

    Private m_dlg As ColorDialog = Nothing

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dialogs.SetCustomColorDialog(AddressOf OnSetCustomColorDialog)
      Return Result.Success
    End Function

    Private Sub OnSetCustomColorDialog(sender As Object, e As GetColorEventArgs)

      m_dlg = New ColorDialog()
      If m_dlg.ShowDialog(Nothing) = DialogResult.OK Then
        Dim c = m_dlg.Color
        e.SelectedColor = c
      End If
    End Sub
  End Class
End Namespace`,
    members: [
      ['Rhino.UI.Dialogs', 'static void SetCustomColorDialog(EventHandler<GetColorEventArgs> handler)']
    ]
  },
  {
    name: 'Replacecolordialog.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.UI;
using System.Windows.Forms;

namespace examples_cs
{
  public class ReplaceColorDialogCommand : Command
  {
    public override string EnglishName { get { return "csReplaceColorDialog"; } }

    private ColorDialog m_dlg = null;

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      Dialogs.SetCustomColorDialog(OnSetCustomColorDialog);
      return Result.Success;
    }

    void OnSetCustomColorDialog(object sender, GetColorEventArgs e)
    {
      m_dlg = new ColorDialog();
      if (m_dlg.ShowDialog(null) == DialogResult.OK)
      {
        var c = m_dlg.Color;
        e.SelectedColor = c;
      }
    }
  }
}`,
    members: [
      ['Rhino.UI.Dialogs', 'static void SetCustomColorDialog(EventHandler<GetColorEventArgs> handler)']
    ]
  },
  {
    name: 'Replacecolordialog.py',
    code: `from Rhino import *
from Rhino.Commands import *
from Rhino.UI import *
from System.Windows.Forms import *

m_dlg = None

def RunCommand():
  Dialogs.SetCustomColorDialog(OnSetCustomColorDialog)
  return Result.Success

def OnSetCustomColorDialog(sender, e):
  m_dlg = ColorDialog()
  if m_dlg.ShowDialog(None) == DialogResult.OK:
    c = m_dlg.Color
    e.SelectedColor = c

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.UI.Dialogs', 'static void SetCustomColorDialog(EventHandler<GetColorEventArgs> handler)']
    ]
  },
  {
    name: 'Ortho.vb',
    code: `Imports Rhino
Imports Rhino.ApplicationSettings
Imports Rhino.Commands
Imports Rhino.Input.Custom

Namespace examples_vb
  Public Class OrthoCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbOrtho"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gp = New GetPoint()
      gp.SetCommandPrompt("Start of line")
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim start_point = gp.Point()

      Dim original_ortho = ModelAidSettings.Ortho
      If Not original_ortho Then
        ModelAidSettings.Ortho = True
      End If

      gp.SetCommandPrompt("End of line")
      gp.SetBasePoint(start_point, False)
      gp.DrawLineFromPoint(start_point, True)
      gp.[Get]()
      If gp.CommandResult() <> Result.Success Then
        Return gp.CommandResult()
      End If
      Dim end_point = gp.Point()

      If ModelAidSettings.Ortho <> original_ortho Then
        ModelAidSettings.Ortho = original_ortho
      End If

      doc.Objects.AddLine(start_point, end_point)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.ApplicationSettings.ModelAidSettings', 'static bool Ortho']
    ]
  },
  {
    name: 'Ortho.cs',
    code: `using Rhino;
using Rhino.ApplicationSettings;
using Rhino.Commands;
using Rhino.Input.Custom;

namespace examples_cs
{
  public class OrthoCommand : Command
  {
    public override string EnglishName
    {
      get { return "csOrtho"; }
    }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gp = new GetPoint();
      gp.SetCommandPrompt("Start of line");
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var start_point = gp.Point();
  
      var original_ortho = ModelAidSettings.Ortho;
      if (!original_ortho)
        ModelAidSettings.Ortho = true;

      gp.SetCommandPrompt("End of line");
      gp.SetBasePoint(start_point, false);
      gp.DrawLineFromPoint(start_point, true);
      gp.Get();
      if (gp.CommandResult() != Result.Success)
        return gp.CommandResult();
      var end_point = gp.Point();

      if (ModelAidSettings.Ortho != original_ortho)
        ModelAidSettings.Ortho = original_ortho;

      doc.Objects.AddLine(start_point, end_point);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.ApplicationSettings.ModelAidSettings', 'static bool Ortho']
    ]
  },
  {
    name: 'Ortho.py',
    code: `from Rhino import *
from Rhino.ApplicationSettings import *
from Rhino.Commands import *
from Rhino.Input.Custom import *
from scriptcontext import doc

def RunCommand():
  gp = GetPoint()
  gp.SetCommandPrompt("Start of line")
  gp.Get()
  if gp.CommandResult() != Result.Success:
    return gp.CommandResult()
  start_point = gp.Point()

  original_ortho = ModelAidSettings.Ortho
  if not original_ortho:
    ModelAidSettings.Ortho = True

  gp.SetCommandPrompt("End of line")
  gp.SetBasePoint(start_point, False)
  gp.DrawLineFromPoint(start_point, True)
  gp.Get()
  if gp.CommandResult() != Result.Success:
    return gp.CommandResult()
  end_point = gp.Point()

  if ModelAidSettings.Ortho != original_ortho:
    ModelAidSettings.Ortho = original_ortho

  doc.Objects.AddLine(start_point, end_point)
  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.ApplicationSettings.ModelAidSettings', 'static bool Ortho']
    ]
  },
  {
    name: 'Commandlineoptions.vb',
    code: `Partial Class Examples
  Public Shared Function CommandLineOptions(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' For this example we will use a GetPoint class, but all of the custom
    ' "Get" classes support command line options.
    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("GetPoint with options")

    ' set up the options
    Dim intOption As New Rhino.Input.Custom.OptionInteger(1, 1, 99)
    Dim dblOption As New Rhino.Input.Custom.OptionDouble(2.2, 0, 99.9)
    Dim boolOption As New Rhino.Input.Custom.OptionToggle(True, "Off", "On")
    Dim listValues As String() = New String() {"Item0", "Item1", "Item2", "Item3", "Item4"}

    gp.AddOptionInteger("Integer", intOption)
    gp.AddOptionDouble("Double", dblOption)
    gp.AddOptionToggle("Boolean", boolOption)
    Dim listIndex As Integer = 3
    Dim opList As Integer = gp.AddOptionList("List", listValues, listIndex)

    While True
      ' perform the get operation. This will prompt the user to input a point, but also
      ' allow for command line options defined above
      Dim get_rc As Rhino.Input.GetResult = gp.[Get]()
      If gp.CommandResult() <> Rhino.Commands.Result.Success Then
        Return gp.CommandResult()
      End If

      If get_rc = Rhino.Input.GetResult.Point Then
        doc.Objects.AddPoint(gp.Point())
        doc.Views.Redraw()
        Rhino.RhinoApp.WriteLine("Command line option values are")
        Rhino.RhinoApp.WriteLine(" Integer = {0}", intOption.CurrentValue)
        Rhino.RhinoApp.WriteLine(" Double = {0}", dblOption.CurrentValue)
        Rhino.RhinoApp.WriteLine(" Boolean = {0}", boolOption.CurrentValue)
        Rhino.RhinoApp.WriteLine(" List = {0}", listValues(listIndex))
      ElseIf get_rc = Rhino.Input.GetResult.[Option] Then
        If gp.OptionIndex() = opList Then
          listIndex = gp.[Option]().CurrentListOptionIndex
        End If
        Continue While
      End If
      Exit While
    End While
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(string englishName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(string englishName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(LocalizeStringPair optionName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(string englishName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.CommandLineOption', 'int CurrentListOptionIndex'],
      ['Rhino.Input.Custom.OptionToggle', 'OptionToggle(bool initialValue,string offValue,string onValue)'],
      ['Rhino.Input.Custom.OptionToggle', 'bool CurrentValue'],
      ['Rhino.Input.Custom.OptionDouble', 'OptionDouble(double initialValue,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.Custom.OptionDouble', 'double CurrentValue'],
      ['Rhino.Input.Custom.OptionInteger', 'OptionInteger(int initialValue,int lowerLimit,int upperLimit)'],
      ['Rhino.Input.Custom.OptionInteger', 'int CurrentValue']
    ]
  },
  {
    name: 'Commandlineoptions.cs',
    code: `partial class Examples
{
  public static Rhino.Commands.Result CommandLineOptions(Rhino.RhinoDoc doc)
  {
    // For this example we will use a GetPoint class, but all of the custom
    // "Get" classes support command line options.
    Rhino.Input.Custom.GetPoint gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("GetPoint with options");

    // set up the options
    Rhino.Input.Custom.OptionInteger intOption = new Rhino.Input.Custom.OptionInteger(1, 1, 99);
    Rhino.Input.Custom.OptionDouble dblOption = new Rhino.Input.Custom.OptionDouble(2.2, 0, 99.9);
    Rhino.Input.Custom.OptionToggle boolOption = new Rhino.Input.Custom.OptionToggle(true, "Off", "On");
    string[] listValues = new string[] { "Item0", "Item1", "Item2", "Item3", "Item4" };

    gp.AddOptionInteger("Integer", ref intOption);
    gp.AddOptionDouble("Double", ref dblOption);
    gp.AddOptionToggle("Boolean", ref boolOption);
    int listIndex = 3;
    int opList = gp.AddOptionList("List", listValues, listIndex);

    while (true)
    {
      // perform the get operation. This will prompt the user to input a point, but also
      // allow for command line options defined above
      Rhino.Input.GetResult get_rc = gp.Get();
      if (gp.CommandResult() != Rhino.Commands.Result.Success)
        return gp.CommandResult();

      if (get_rc == Rhino.Input.GetResult.Point)
      {
        doc.Objects.AddPoint(gp.Point());
        doc.Views.Redraw();
        Rhino.RhinoApp.WriteLine("Command line option values are");
        Rhino.RhinoApp.WriteLine(" Integer = {0}", intOption.CurrentValue);
        Rhino.RhinoApp.WriteLine(" Double = {0}", dblOption.CurrentValue);
        Rhino.RhinoApp.WriteLine(" Boolean = {0}", boolOption.CurrentValue);
        Rhino.RhinoApp.WriteLine(" List = {0}", listValues[listIndex]);
      }
      else if (get_rc == Rhino.Input.GetResult.Option)
      {
        if (gp.OptionIndex() == opList)
          listIndex = gp.Option().CurrentListOptionIndex;
        continue;
      }
      break;
    }
    return Rhino.Commands.Result.Success;
  }
}
`,
    members: [
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(string englishName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(string englishName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(LocalizeStringPair optionName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(string englishName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.CommandLineOption', 'int CurrentListOptionIndex'],
      ['Rhino.Input.Custom.OptionToggle', 'OptionToggle(bool initialValue,string offValue,string onValue)'],
      ['Rhino.Input.Custom.OptionToggle', 'bool CurrentValue'],
      ['Rhino.Input.Custom.OptionDouble', 'OptionDouble(double initialValue,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.Custom.OptionDouble', 'double CurrentValue'],
      ['Rhino.Input.Custom.OptionInteger', 'OptionInteger(int initialValue,int lowerLimit,int upperLimit)'],
      ['Rhino.Input.Custom.OptionInteger', 'int CurrentValue']
    ]
  },
  {
    name: 'Commandlineoptions.py',
    code: `import Rhino
import scriptcontext

def CommandLineOptions():
    # For this example we will use a GetPoint class, but all of the custom
    # "Get" classes support command line options.
    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("GetPoint with options")
    
    # set up the options
    intOption = Rhino.Input.Custom.OptionInteger(1, 1, 99)
    dblOption = Rhino.Input.Custom.OptionDouble(2.2, 0, 99.9)
    boolOption = Rhino.Input.Custom.OptionToggle(True, "Off", "On")
    listValues = "Item0", "Item1", "Item2", "Item3", "Item4"
    
    gp.AddOptionInteger("Integer", intOption)
    gp.AddOptionDouble("Double", dblOption)
    gp.AddOptionToggle("Boolean", boolOption)
    listIndex = 3
    opList = gp.AddOptionList("List", listValues, listIndex)
    while True:
        # perform the get operation. This will prompt the user to
        # input a point, but also allow for command line options
        # defined above
        get_rc = gp.Get()
        if gp.CommandResult()!=Rhino.Commands.Result.Success:
            return gp.CommandResult()
        if get_rc==Rhino.Input.GetResult.Point:
            point = gp.Point()
            scriptcontext.doc.Objects.AddPoint(point)
            scriptcontext.doc.Views.Redraw()
            print "Command line option values are"
            print " Integer =", intOption.CurrentValue
            print " Double =", dblOption.CurrentValue
            print " Boolean =", boolOption.CurrentValue
            print " List =", listValues[listIndex]
        elif get_rc==Rhino.Input.GetResult.Option:
            if gp.OptionIndex()==opList:
              listIndex = gp.Option().CurrentListOptionIndex
            continue
        break
    return Rhino.Commands.Result.Success


if __name__ == "__main__":
    CommandLineOptions()

`,
    members: [
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(LocalizeStringPair optionName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionDouble(string englishName,OptionDouble numberValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(LocalizeStringPair optionName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionInteger(string englishName,OptionInteger intValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(LocalizeStringPair optionName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.GetBaseClass', 'int AddOptionToggle(string englishName,OptionToggle toggleValue)'],
      ['Rhino.Input.Custom.CommandLineOption', 'int CurrentListOptionIndex'],
      ['Rhino.Input.Custom.OptionToggle', 'OptionToggle(bool initialValue,string offValue,string onValue)'],
      ['Rhino.Input.Custom.OptionToggle', 'bool CurrentValue'],
      ['Rhino.Input.Custom.OptionDouble', 'OptionDouble(double initialValue,double lowerLimit,double upperLimit)'],
      ['Rhino.Input.Custom.OptionDouble', 'double CurrentValue'],
      ['Rhino.Input.Custom.OptionInteger', 'OptionInteger(int initialValue,int lowerLimit,int upperLimit)'],
      ['Rhino.Input.Custom.OptionInteger', 'int CurrentValue']
    ]
  },
  {
    name: 'Createblock.vb',
    code: `Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function CreateBlock(doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    ' Select objects to define block
    Dim go = New Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt("Select objects to define block")
    go.ReferenceObjectSelect = False
    go.SubObjectSelect = False
    go.GroupSelect = True

    ' Phantoms, grips, lights, etc., cannot be in blocks.
    Const forbidden_geometry_filter As ObjectType = Rhino.DocObjects.ObjectType.Light Or Rhino.DocObjects.ObjectType.Grip Or Rhino.DocObjects.ObjectType.Phantom
    Const geometry_filter As ObjectType = forbidden_geometry_filter Xor Rhino.DocObjects.ObjectType.AnyObject
    go.GeometryFilter = geometry_filter
    go.GetMultiple(1, 0)
    If go.CommandResult() <> Rhino.Commands.Result.Success Then
      Return go.CommandResult()
    End If

    ' Block base point
    Dim base_point As Rhino.Geometry.Point3d
    Dim rc = Rhino.Input.RhinoGet.GetPoint("Block base point", False, base_point)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If

    ' Block definition name
    Dim idef_name As String = ""
    rc = Rhino.Input.RhinoGet.GetString("Block definition name", False, idef_name)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    ' Validate block name
    idef_name = idef_name.Trim()
    If String.IsNullOrEmpty(idef_name) Then
      Return Rhino.Commands.Result.[Nothing]
    End If

    ' See if block name already exists
    Dim existing_idef As Rhino.DocObjects.InstanceDefinition = doc.InstanceDefinitions.Find(idef_name, True)
    If existing_idef IsNot Nothing Then
      Rhino.RhinoApp.WriteLine("Block definition {0} already exists", idef_name)
      Return Rhino.Commands.Result.[Nothing]
    End If

    ' Gather all of the selected objects
    Dim geometry = New System.Collections.Generic.List(Of Rhino.Geometry.GeometryBase)()
    Dim attributes = New System.Collections.Generic.List(Of Rhino.DocObjects.ObjectAttributes)()
    For i As Integer = 0 To go.ObjectCount - 1
      Dim rhinoObject = go.Object(i).[Object]()
      If rhinoObject IsNot Nothing Then
        geometry.Add(rhinoObject.Geometry)
        attributes.Add(rhinoObject.Attributes)
      End If
    Next

    ' Gather all of the selected objects
    Dim idef_index As Integer = doc.InstanceDefinitions.Add(idef_name, String.Empty, base_point, geometry, attributes)

    If idef_index < 0 Then
      Rhino.RhinoApp.WriteLine("Unable to create block definition", idef_name)
      Return Rhino.Commands.Result.Failure
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.Input.Custom.GetObject', 'bool ReferenceObjectSelect'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName,bool ignoreDeletedInstanceDefinitions)']
    ]
  },
  {
    name: 'Createblock.cs',
    code: `using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result CreateBlock(Rhino.RhinoDoc doc)
  {
    // Select objects to define block
    var go = new Rhino.Input.Custom.GetObject();
    go.SetCommandPrompt( "Select objects to define block" );
    go.ReferenceObjectSelect = false;
    go.SubObjectSelect = false;
    go.GroupSelect = true;

    // Phantoms, grips, lights, etc., cannot be in blocks.
    const ObjectType forbidden_geometry_filter = Rhino.DocObjects.ObjectType.Light |
                                                 Rhino.DocObjects.ObjectType.Grip | Rhino.DocObjects.ObjectType.Phantom;
    const ObjectType geometry_filter = forbidden_geometry_filter ^ Rhino.DocObjects.ObjectType.AnyObject;
    go.GeometryFilter = geometry_filter;
    go.GetMultiple(1, 0);
    if (go.CommandResult() != Rhino.Commands.Result.Success)
      return go.CommandResult();

    // Block base point
    Rhino.Geometry.Point3d base_point;
    var rc = Rhino.Input.RhinoGet.GetPoint("Block base point", false, out base_point);
    if (rc != Rhino.Commands.Result.Success)
      return rc;

    // Block definition name
    string idef_name = "";
    rc = Rhino.Input.RhinoGet.GetString("Block definition name", false, ref idef_name);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    // Validate block name
    idef_name = idef_name.Trim();
    if (string.IsNullOrEmpty(idef_name))
      return Rhino.Commands.Result.Nothing;

    // See if block name already exists
    Rhino.DocObjects.InstanceDefinition existing_idef = doc.InstanceDefinitions.Find(idef_name, true);
    if (existing_idef != null)
    {
      Rhino.RhinoApp.WriteLine("Block definition {0} already exists", idef_name);
      return Rhino.Commands.Result.Nothing;
    }

    // Gather all of the selected objects
    var geometry = new System.Collections.Generic.List<Rhino.Geometry.GeometryBase>();
    var attributes = new System.Collections.Generic.List<Rhino.DocObjects.ObjectAttributes>();
    for (int i = 0; i < go.ObjectCount; i++)
    {
      var rhinoObject = go.Object(i).Object();
      if (rhinoObject != null)
      {
        geometry.Add(rhinoObject.Geometry);
        attributes.Add(rhinoObject.Attributes);
      }
    }

    // Gather all of the selected objects
    int idef_index = doc.InstanceDefinitions.Add(idef_name, string.Empty, base_point, geometry, attributes);

    if( idef_index < 0 )
    {
      Rhino.RhinoApp.WriteLine("Unable to create block definition", idef_name);
      return Rhino.Commands.Result.Failure;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.Input.Custom.GetObject', 'bool ReferenceObjectSelect'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName,bool ignoreDeletedInstanceDefinitions)']
    ]
  },
  {
    name: 'Createblock.py',
    code: `import Rhino
import scriptcontext

def CreateBlock():
    # Select objects to define block
    go = Rhino.Input.Custom.GetObject()
    go.SetCommandPrompt( "Select objects to define block" )
    go.ReferenceObjectSelect = False
    go.SubObjectSelect = False
    go.GroupSelect = True

    # Phantoms, grips, lights, etc., cannot be in blocks.
    forbidden_geometry_filter = Rhino.DocObjects.ObjectType.Light | Rhino.DocObjects.ObjectType.Grip | Rhino.DocObjects.ObjectType.Phantom
    geometry_filter = forbidden_geometry_filter ^ Rhino.DocObjects.ObjectType.AnyObject
    go.GeometryFilter = geometry_filter
    go.GetMultiple(1, 0)
    if go.CommandResult() != Rhino.Commands.Result.Success:
        return go.CommandResult()

    # Block base point
    rc, base_point = Rhino.Input.RhinoGet.GetPoint("Block base point", False)
    if rc != Rhino.Commands.Result.Success: return rc

    # Block definition name
    rc, idef_name = Rhino.Input.RhinoGet.GetString("Block definition name", False, "")
    if rc != Rhino.Commands.Result.Success: return rc
    # Validate block name
    idef_name = idef_name.strip()
    if not idef_name: return Rhino.Commands.Result.Nothing

    # See if block name already exists
    existing_idef = scriptcontext.doc.InstanceDefinitions.Find(idef_name, True)
    if existing_idef:
        print "Block definition", idef_name, "already exists"
        return Rhino.Commands.Result.Nothing

    # Gather all of the selected objects
    objrefs = go.Objects()
    geometry = [item.Object().Geometry for item in objrefs]
    attributes = [item.Object().Attributes for item in objrefs]

    # Add the instance definition
    idef_index = scriptcontext.doc.InstanceDefinitions.Add(idef_name, "", base_point, geometry, attributes)

    if idef_index<0:
        print "Unable to create block definition", idef_name
        return Rhino.Commands.Result.Failure
    return Rhino.Commands.Result.Failure


if __name__=="__main__":
    CreateBlock()
`,
    members: [
      ['Rhino.Input.Custom.GetObject', 'bool ReferenceObjectSelect'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName)'],
      ['Rhino.DocObjects.Tables.InstanceDefinitionTable', 'InstanceDefinition Find(string instanceDefinitionName,bool ignoreDeletedInstanceDefinitions)']
    ]
  },
  {
    name: 'Insertknot.vb',
    code: `Imports Rhino.DocObjects

Partial Class Examples
  Public Shared Function InsertKnot(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim rc As Rhino.Commands.Result
    Const filter As ObjectType = Rhino.DocObjects.ObjectType.Curve
    Dim objref As Rhino.DocObjects.ObjRef = Nothing
    rc = Rhino.Input.RhinoGet.GetOneObject("Select curve for knot insertion", False, filter, objref)
    If rc <> Rhino.Commands.Result.Success Then
      Return rc
    End If
    Dim curve As Rhino.Geometry.Curve = objref.Curve()
    If curve Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If
    Dim nurb As Rhino.Geometry.NurbsCurve = curve.ToNurbsCurve()
    If nurb Is Nothing Then
      Return Rhino.Commands.Result.Failure
    End If

    Dim gp As New Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Point on curve to add knot")
    gp.Constrain(nurb, False)
    gp.[Get]()
    If gp.CommandResult() = Rhino.Commands.Result.Success Then
      Dim t As Double
      Dim crv As Rhino.Geometry.Curve = gp.PointOnCurve(t)
      If crv IsNot Nothing AndAlso nurb.Knots.InsertKnot(t) Then
        doc.Objects.Replace(objref, nurb)
        doc.Views.Redraw()
      End If
    End If
    Return Rhino.Commands.Result.Success
  End Function
End Class
`,
    members: [
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Curve curve,bool allowPickingPointOffObject)'],
      ['Rhino.Input.Custom.GetPoint', 'Curve PointOnCurve(double t)'],
      ['Rhino.Geometry.Collections.NurbsCurveKnotList', 'bool InsertKnot(double value)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Replace(ObjRef objref,Curve curve)']
    ]
  },
  {
    name: 'Insertknot.cs',
    code: `using Rhino.Commands;
using Rhino.DocObjects;

partial class Examples
{
  public static Rhino.Commands.Result InsertKnot(Rhino.RhinoDoc doc)
  {
    const ObjectType filter = Rhino.DocObjects.ObjectType.Curve;
    Rhino.DocObjects.ObjRef objref;
    Result rc = Rhino.Input.RhinoGet.GetOneObject("Select curve for knot insertion", false, filter, out objref);
    if (rc != Rhino.Commands.Result.Success)
      return rc;
    Rhino.Geometry.Curve curve = objref.Curve();
    if (null == curve)
      return Rhino.Commands.Result.Failure;
    Rhino.Geometry.NurbsCurve nurb = curve.ToNurbsCurve();
    if (null == nurb)
      return Rhino.Commands.Result.Failure;

    Rhino.Input.Custom.GetPoint gp = new Rhino.Input.Custom.GetPoint();
    gp.SetCommandPrompt("Point on curve to add knot");
    gp.Constrain(nurb, false);
    gp.Get();
    if (gp.CommandResult() == Rhino.Commands.Result.Success)
    {
      double t;
      Rhino.Geometry.Curve crv = gp.PointOnCurve(out t);
      if( crv!=null && nurb.Knots.InsertKnot(t) )
      {
        doc.Objects.Replace(objref, nurb);
        doc.Views.Redraw();
      }
    }
    return Rhino.Commands.Result.Success;  
  }
}
`,
    members: [
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Curve curve,bool allowPickingPointOffObject)'],
      ['Rhino.Input.Custom.GetPoint', 'Curve PointOnCurve(double t)'],
      ['Rhino.Geometry.Collections.NurbsCurveKnotList', 'bool InsertKnot(double value)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Replace(ObjRef objref,Curve curve)']
    ]
  },
  {
    name: 'Insertknot.py',
    code: `import Rhino
import scriptcontext

def InsertKnot():
    filter = Rhino.DocObjects.ObjectType.Curve
    rc, objref = Rhino.Input.RhinoGet.GetOneObject("Select curve for knot insertion", False, filter)
    if rc != Rhino.Commands.Result.Success: return rc
    
    curve = objref.Curve()
    if not curve: return Rhino.Commands.Result.Failure
    nurb = curve.ToNurbsCurve()
    if not nurb: return Rhino.Commands.Result.Failure

    gp = Rhino.Input.Custom.GetPoint()
    gp.SetCommandPrompt("Point on curve to add knot")
    gp.Constrain(nurb, False)
    gp.Get()
    if gp.CommandResult() == Rhino.Commands.Result.Success:
        crv, t = gp.PointOnCurve()
        if crv and nurb.Knots.InsertKnot(t):
            scriptcontext.doc.Objects.Replace(objref, nurb)
            scriptcontext.doc.Views.Redraw()
    return Rhino.Commands.Result.Success

if __name__=="__main__":
    InsertKnot()`,
    members: [
      ['Rhino.Input.Custom.GetPoint', 'bool Constrain(Curve curve,bool allowPickingPointOffObject)'],
      ['Rhino.Input.Custom.GetPoint', 'Curve PointOnCurve(double t)'],
      ['Rhino.Geometry.Collections.NurbsCurveKnotList', 'bool InsertKnot(double value)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'bool Replace(ObjRef objref,Curve curve)']
    ]
  },
  {
    name: 'Curvesurfaceintersect.vb',
    code: `Imports Rhino
Imports Rhino.Geometry
Imports Rhino.Geometry.Intersect
Imports Rhino.Input.Custom
Imports Rhino.DocObjects
Imports Rhino.Commands

Namespace examples_vb
  Public Class CurveSurfaceIntersectCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbCurveSurfaceIntersect"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select brep")
      gs.GeometryFilter = ObjectType.Brep
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.Get()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If
      Dim brep = gs.[Object](0).Brep()

      Dim gc = New GetObject()
      gc.SetCommandPrompt("select curve")
      gc.GeometryFilter = ObjectType.Curve
      gc.DisablePreSelect()
      gc.SubObjectSelect = False
      gc.Get()
      If gc.CommandResult() <> Result.Success Then
        Return gc.CommandResult()
      End If
      Dim curve = gc.Object(0).Curve()

      If brep Is Nothing OrElse curve Is Nothing Then
        Return Result.Failure
      End If

      Dim tolerance = doc.ModelAbsoluteTolerance

      Dim intersectionPoints As Point3d() = Nothing
      Dim overlapCurves As Curve() = Nothing
      If Not Intersection.CurveBrep(curve, brep, tolerance, overlapCurves, intersectionPoints) Then
        RhinoApp.WriteLine("curve brep intersection failed")
        Return Result.Nothing
      End If

      For Each overlapCurve As Curve In overlapCurves
        doc.Objects.AddCurve(overlapCurve)
      Next
      For Each intersectionPoint As Point3d In intersectionPoints
        doc.Objects.AddPoint(intersectionPoint)
      Next

      RhinoApp.WriteLine("{0} overlap curves, and {1} intersection points", overlapCurves.Length, intersectionPoints.Length)
      doc.Views.Redraw()

      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveSurface(Curve curve,Surface surface,double tolerance,double overlapTolerance)'],
      ['Rhino.Geometry.Intersect.IntersectionEvent', 'bool IsOverlap'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int Select(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Curvesurfaceintersect.cs',
    code: `using Rhino;
using Rhino.Geometry;
using Rhino.Geometry.Intersect;
using Rhino.Input.Custom;
using Rhino.DocObjects;
using Rhino.Commands;

namespace examples_cs
{
  public class CurveSurfaceIntersectCommand : Command
  {
    public override string EnglishName { get { return "csCurveSurfaceIntersect"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gs = new GetObject();
      gs.SetCommandPrompt("select brep");
      gs.GeometryFilter = ObjectType.Brep;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();
      var brep = gs.Object(0).Brep();

      var gc = new GetObject();
      gc.SetCommandPrompt("select curve");
      gc.GeometryFilter = ObjectType.Curve;
      gc.DisablePreSelect();
      gc.SubObjectSelect = false;
      gc.Get();
      if (gc.CommandResult() != Result.Success)
        return gc.CommandResult();
      var curve = gc.Object(0).Curve();

      if (brep == null || curve == null)
        return Result.Failure;

      var tolerance = doc.ModelAbsoluteTolerance;

      Point3d[] intersection_points;
      Curve[] overlap_curves;
      if (!Intersection.CurveBrep(curve, brep, tolerance, out overlap_curves, out intersection_points))
      {
        RhinoApp.WriteLine("curve brep intersection failed");
        return Result.Nothing;
      }

      foreach (var overlap_curve in overlap_curves)
        doc.Objects.AddCurve(overlap_curve);
      foreach (var intersection_point in intersection_points)
        doc.Objects.AddPoint(intersection_point);

      RhinoApp.WriteLine("{0} overlap curves, and {1} intersection points", overlap_curves.Length, intersection_points.Length);
      doc.Views.Redraw();

      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveSurface(Curve curve,Surface surface,double tolerance,double overlapTolerance)'],
      ['Rhino.Geometry.Intersect.IntersectionEvent', 'bool IsOverlap'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int Select(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Curvesurfaceintersect.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import *
import Rhino
import System.Collections.Generic as scg
import System as s

def RunCommand():
  srfid = rs.GetObject("select surface", rs.filter.surface | rs.filter.polysurface)
  if not srfid: return
 
  crvid = rs.GetObject("select curve", rs.filter.curve)
  if not crvid: return

  result = rs.CurveBrepIntersect(crvid, srfid)
  if result == None:
    print "no intersection"
    return
  
  curves, points = result
  for curve in curves:
    doc.Objects.AddCurve(rs.coercecurve(curve))
  for point in points:
    rs.AddPoint(point)

  doc.Views.Redraw()

if __name__ == "__main__":
  RunCommand()
`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static CurveIntersections CurveSurface(Curve curve,Surface surface,double tolerance,double overlapTolerance)'],
      ['Rhino.Geometry.Intersect.IntersectionEvent', 'bool IsOverlap'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'int Select(IEnumerable<Guid> objectIds)']
    ]
  },
  {
    name: 'Intersectlinecircle.vb',
    code: `Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.Geometry.Intersect

Namespace examples_vb
  Public Class IntersectLineCircleCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbIntersectLineCircle"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim circle As Circle
      Dim rc = Rhino.Input.RhinoGet.GetCircle(circle)
      If rc <> Result.Success Then
        Return rc
      End If
      doc.Objects.AddCircle(circle)
      doc.Views.Redraw()

      Dim line As Line
      rc = Rhino.Input.RhinoGet.GetLine(line)
      If rc <> Result.Success Then
        Return rc
      End If
      doc.Objects.AddLine(line)
      doc.Views.Redraw()

      Dim t1 As Double, t2 As Double
      Dim point1 As Point3d, point2 As Point3d
      Dim lineCircleIntersect = Intersection.LineCircle(line, circle, t1, point1, t2, point2)
      Dim msg As String = ""
      Select Case lineCircleIntersect
        Case LineCircleIntersection.None
          msg = "line does not intersect circle"
          Exit Select
        Case LineCircleIntersection.[Single]
          msg = [String].Format("line intersects circle at point ({0},{1},{2})", point1.X, point1.Y, point1.Z)
          doc.Objects.AddPoint(point1)
          Exit Select
        Case LineCircleIntersection.Multiple
          msg = [String].Format("line intersects circle at points ({0},{1},{2}) and ({3},{4},{5})", point1.X, point1.Y, point1.Z, point2.X, point2.Y, _
            point2.Z)
          doc.Objects.AddPoint(point1)
          doc.Objects.AddPoint(point2)
          Exit Select
      End Select
      RhinoApp.WriteLine(msg)
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static LineCircleIntersection LineCircle(Line line,Circle circle,double t1,Point3d point1,double t2,Point3d point2)']
    ]
  },
  {
    name: 'Intersectlinecircle.cs',
    code: `using Rhino;
using Rhino.Commands;
using Rhino.Input;
using Rhino.Geometry;
using Rhino.Geometry.Intersect;

namespace examples_cs
{
  public class IntersectLineCircleCommand : Command
  {
    public override string EnglishName { get { return "csIntersectLineCircle"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      Circle circle;
      var rc = RhinoGet.GetCircle(out circle);
      if (rc != Result.Success)
        return rc;
      doc.Objects.AddCircle(circle);
      doc.Views.Redraw();

      Line line;
      rc = RhinoGet.GetLine(out line);
      if (rc != Result.Success)
        return rc;
      doc.Objects.AddLine(line);
      doc.Views.Redraw();

      double t1, t2;
      Point3d point1, point2;
      var line_circle_intersect = Intersection.LineCircle(line, circle, out t1, out point1, out t2, out point2);
      string msg = "";
      switch (line_circle_intersect) {
        case LineCircleIntersection.None:
          msg = "line does not intersect circle";
          break;
        case LineCircleIntersection.Single:
          msg = string.Format("line intersects circle at point ({0})", point1);
          doc.Objects.AddPoint(point1);
          break;
        case LineCircleIntersection.Multiple:
          msg = string.Format("line intersects circle at points ({0}) and ({1})",
            point1, point2);
          doc.Objects.AddPoint(point1);
          doc.Objects.AddPoint(point2);
          break;
      }
      RhinoApp.WriteLine(msg);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static LineCircleIntersection LineCircle(Line line,Circle circle,double t1,Point3d point1,double t2,Point3d point2)']
    ]
  },
  {
    name: 'Intersectlinecircle.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import doc
import Rhino
from Rhino.Geometry.Intersect import Intersection, LineCircleIntersection

def RunCommand():
  rc, circle = Rhino.Input.RhinoGet.GetCircle()
  if rc != Rhino.Commands.Result.Success:
    return rc
  doc.Objects.AddCircle(circle)
  doc.Views.Redraw()

  rc, line = Rhino.Input.RhinoGet.GetLine()
  if rc != Rhino.Commands.Result.Success:
    return rc
  doc.Objects.AddLine(line)
  doc.Views.Redraw()

  lineCircleIntersect, t1, point1, t2, point2 = Intersection.LineCircle(line, circle)
  message = ""
  if lineCircleIntersect == LineCircleIntersection.None:
    message = "line does not intersect circle"
  elif lineCircleIntersect == LineCircleIntersection.Single:
    message = "line intersects circle at point ({0},{1},{2})".format(point1.X, point1.Y, point1.Z)
    doc.Objects.AddPoint(point1)
  elif lineCircleIntersect == LineCircleIntersection.Multiple:
    message = "line intersects circle at points ({0},{1},{2}) and ({3},{4},{5})".format(
      point1.X, point1.Y, point1.Z, point2.X, point2.Y, point2.Z)
    doc.Objects.AddPoint(point1)
    doc.Objects.AddPoint(point2)
    
  print message
  doc.Views.Redraw()

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static LineCircleIntersection LineCircle(Line line,Circle circle,double t1,Point3d point1,double t2,Point3d point2)']
    ]
  },
  {
    name: 'Projectpointstobreps.vb',
    code: `Imports Rhino
Imports Rhino.DocObjects
Imports Rhino.Input.Custom
Imports Rhino.Commands
Imports System.Collections.Generic
Imports Rhino.Geometry
Imports Rhino.Geometry.Intersect

Namespace examples_vb
  Public Class ProjectPointsToBrepsCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbProjectPtointsToBreps"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim gs = New GetObject()
      gs.SetCommandPrompt("select surface")
      gs.GeometryFilter = ObjectType.Surface Or ObjectType.PolysrfFilter
      gs.DisablePreSelect()
      gs.SubObjectSelect = False
      gs.[Get]()
      If gs.CommandResult() <> Result.Success Then
        Return gs.CommandResult()
      End If
      Dim brep = gs.[Object](0).Brep()
      If brep Is Nothing Then
        Return Result.Failure
      End If

      ' brep on which to project
      ' some random points to project
      ' project on Y axis
      Dim points = Intersection.ProjectPointsToBreps(New List(Of Brep)() From { _
        brep _
      }, New List(Of Point3d)() From { _
        New Point3d(0, 0, 0), _
        New Point3d(3, 0, 3), _
        New Point3d(-2, 0, -2) _
      }, New Vector3d(0, 1, 0), doc.ModelAbsoluteTolerance)

      If points IsNot Nothing AndAlso points.Length > 0 Then
        For Each point As Point3d In points
          doc.Objects.AddPoint(point)
        Next
      End If
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToBreps(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance)']
    ]
  },
  {
    name: 'Projectpointstobreps.cs',
    code: `using Rhino;
using Rhino.DocObjects;
using Rhino.Input.Custom;
using Rhino.Commands;
using System.Collections.Generic;
using Rhino.Geometry;
using Rhino.Geometry.Intersect;

namespace examples_cs
{
  public class ProjectPointsToBrepsCommand : Command
  {
    public override string EnglishName { get { return "csProjectPtointsToBreps"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      var gs = new GetObject();
      gs.SetCommandPrompt("select surface");
      gs.GeometryFilter = ObjectType.Surface | ObjectType.PolysrfFilter;
      gs.DisablePreSelect();
      gs.SubObjectSelect = false;
      gs.Get();
      if (gs.CommandResult() != Result.Success)
        return gs.CommandResult();
      var brep = gs.Object(0).Brep();
      if (brep == null)
        return Result.Failure;

      var points = Intersection.ProjectPointsToBreps(
                   new List<Brep> {brep}, // brep on which to project
                   new List<Point3d> {new Point3d(0, 0, 0), new Point3d(3,0,3), new Point3d(-2,0,-2)}, // some random points to project
                   new Vector3d(0, 1, 0), // project on Y axis
                   doc.ModelAbsoluteTolerance);

      if (points != null && points.Length > 0)
      {
        foreach (var point in points)
        {
          doc.Objects.AddPoint(point);
        }
      }
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToBreps(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance)']
    ]
  },
  {
    name: 'Projectpointstobreps.py',
    code: `import rhinoscriptsyntax as rs
from scriptcontext import *
from Rhino.Geometry import *

def RunCommand():
  srfid = rs.GetObject("select surface", rs.filter.surface | rs.filter.polysurface)
  if not srfid: return
  brep = rs.coercebrep(srfid)
  if not brep: return
  
  pts = Intersect.Intersection.ProjectPointsToBreps(
      [brep], # brep on which to project
      [Point3d(0, 0, 0), Point3d(3,0,3), Point3d(-2,0,-2)], # points to project
      Vector3d(0, 1, 0), # project on Y axis
      doc.ModelAbsoluteTolerance)

  if pts != None and pts.Length > 0:
    for pt in pts:
      doc.Objects.AddPoint(pt)

  doc.Views.Redraw()

if __name__ == "__main__":
    RunCommand()`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToBreps(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance)']
    ]
  },
  {
    name: 'Projectpointstomeshesex.vb',
    code: `Imports System.Collections.Generic
Imports Rhino
Imports Rhino.Commands
Imports Rhino.Geometry
Imports Rhino.Geometry.Intersect
Imports Rhino.Input
Imports Rhino.DocObjects

Namespace examples_vb
  Public Class ProjectPointsToMeshesExCommand
    Inherits Command
    Public Overrides ReadOnly Property EnglishName() As String
      Get
        Return "vbProjectPointsToMeshesEx"
      End Get
    End Property

    Protected Overrides Function RunCommand(doc As RhinoDoc, mode As RunMode) As Result
      Dim obj_ref As ObjRef
      Dim rc = RhinoGet.GetOneObject("mesh", False, ObjectType.Mesh, obj_ref)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim mesh = obj_ref.Mesh()

      Dim obj_ref_pts As ObjRef()
      rc = RhinoGet.GetMultipleObjects("points", False, ObjectType.Point, obj_ref_pts)
      If rc <> Result.Success Then
        Return rc
      End If
      Dim points As New List(Of Point3d)()
      For Each obj_ref_pt As ObjRef In obj_ref_pts
        Dim pt = obj_ref_pt.Point().Location
        points.Add(pt)
      Next

      Dim indices As Integer()
      Dim prj_points = Intersection.ProjectPointsToMeshesEx(New Mesh() {mesh}, points, New Vector3d(0, 1, 0), 0, indices)
      For Each prj_pt As Point3d In prj_points
        doc.Objects.AddPoint(prj_pt)
      Next
      doc.Views.Redraw()
      Return Result.Success
    End Function
  End Class
End Namespace

`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToMeshesEx(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)']
    ]
  },
  {
    name: 'Projectpointstomeshesex.cs',
    code: `using System.Collections.Generic;
using Rhino;
using Rhino.Commands;
using Rhino.Geometry;
using Rhino.Geometry.Intersect;
using Rhino.Input;
using Rhino.DocObjects;

namespace examples_cs
{
  public class ProjectPointsToMeshesExCommand : Command
  {
    public override string EnglishName { get { return "csProjectPointsToMeshesEx"; } }

    protected override Result RunCommand(RhinoDoc doc, RunMode mode)
    {
      ObjRef obj_ref;
      var rc = RhinoGet.GetOneObject("mesh", false, ObjectType.Mesh, out obj_ref);
      if (rc != Result.Success) return rc;
      var mesh = obj_ref.Mesh();

      ObjRef[] obj_ref_pts;
      rc = RhinoGet.GetMultipleObjects("points", false, ObjectType.Point, out obj_ref_pts);
      if (rc != Result.Success) return rc;
      var points = new List<Point3d>();
      foreach (var obj_ref_pt in obj_ref_pts)
      {
        var pt = obj_ref_pt.Point().Location;
        points.Add(pt);
      }

      int[] indices;
      var prj_points = Intersection.ProjectPointsToMeshesEx(new[] {mesh}, points, new Vector3d(0, 1, 0), 0, out indices);
      foreach (var prj_pt in prj_points) doc.Objects.AddPoint(prj_pt);
      doc.Views.Redraw();
      return Result.Success;
    }
  }
}`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToMeshesEx(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)']
    ]
  },
  {
    name: 'Projectpointstomeshesex.py',
    code: `from System.Collections.Generic import *
from Rhino import *
from Rhino.Commands import *
from Rhino.Geometry import *
from Rhino.Geometry.Intersect import *
from Rhino.Input import *
from Rhino.DocObjects import *
from scriptcontext import doc

def RunCommand():
  rc, obj_ref = RhinoGet.GetOneObject("mesh", False, ObjectType.Mesh)
  if rc != Result.Success: return rc
  mesh = obj_ref.Mesh()

  rc, obj_ref_pts = RhinoGet.GetMultipleObjects("points", False, ObjectType.Point)
  if rc != Result.Success: return rc
  points = []
  for obj_ref_pt in obj_ref_pts:
    pt = obj_ref_pt.Point().Location
    points.append(pt)

  prj_points, indices = Intersection.ProjectPointsToMeshesEx({mesh}, points, Vector3d(0, 1, 0), 0)
  for prj_pt in prj_points: 
    doc.Objects.AddPoint(prj_pt)
  doc.Views.Redraw()
  return Result.Success

if __name__ == "__main__":
  RunCommand()`,
    members: [
      ['Rhino.Geometry.Intersect.Intersection', 'static Point3d[] ProjectPointsToMeshesEx(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)']
    ]
  },
  {
    name: 'Addlineardimension.vb',
    code: `Partial Class Examples
  Public Shared Function AddLinearDimension(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim dimension As Rhino.Geometry.LinearDimension = Nothing
    Dim rc As Rhino.Commands.Result = Rhino.Input.RhinoGet.GetLinearDimension(dimension)
    If rc = Rhino.Commands.Result.Success AndAlso dimension IsNot Nothing Then
      If doc.Objects.AddLinearDimension(dimension) = Guid.Empty Then
        rc = Rhino.Commands.Result.Failure
      Else
        doc.Views.Redraw()
      End If
    End If
    Return rc
  End Function
End Class
`,
    members: [
      ['Rhino.Input.RhinoGet', 'static Result GetLinearDimension(LinearDimension dimension)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLinearDimension(LinearDimension dimension)']
    ]
  },
  {
    name: 'Addlineardimension.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddLinearDimension(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.LinearDimension dimension;
    Rhino.Commands.Result rc = Rhino.Input.RhinoGet.GetLinearDimension(out dimension);
    if (rc == Rhino.Commands.Result.Success && dimension != null)
    {
      if (doc.Objects.AddLinearDimension(dimension) == Guid.Empty)
        rc = Rhino.Commands.Result.Failure;
      else
        doc.Views.Redraw();
    }
    return rc;
  }
}
`,
    members: [
      ['Rhino.Input.RhinoGet', 'static Result GetLinearDimension(LinearDimension dimension)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLinearDimension(LinearDimension dimension)']
    ]
  },
  {
    name: 'Addlineardimension.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddLinearDimension():
    rc, dimension = Rhino.Input.RhinoGet.GetLinearDimension()
    if rc==Rhino.Commands.Result.Success:
        if scriptcontext.doc.Objects.AddLinearDimension(dimension)==System.Guid.Empty:
            rc = Rhino.Commands.Result.Failure
        else:
            scriptcontext.doc.Views.Redraw()
    return rc


if __name__=="__main__":
    AddLinearDimension()
`,
    members: [
      ['Rhino.Input.RhinoGet', 'static Result GetLinearDimension(LinearDimension dimension)'],
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddLinearDimension(LinearDimension dimension)']
    ]
  },
  {
    name: 'Addtext.vb',
    code: `Partial Class Examples
  Public Shared Function AddAnnotationText(ByVal doc As Rhino.RhinoDoc) As Rhino.Commands.Result
    Dim pt As New Rhino.Geometry.Point3d(10, 0, 0)
    Const text As String = "Hello RhinoCommon"
    Const height As Double = 2.0
    Const font As String = "Arial"
    Dim plane As Rhino.Geometry.Plane = doc.Views.ActiveView.ActiveViewport.ConstructionPlane()
    plane.Origin = pt
    Dim id As Guid = doc.Objects.AddText(text, plane, height, font, False, False)
    If id <> Guid.Empty Then
      doc.Views.Redraw()
      Return Rhino.Commands.Result.Success
    End If
    Return Rhino.Commands.Result.Failure
  End Function
End Class
`,
    members: [
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)']
    ]
  },
  {
    name: 'Addtext.cs',
    code: `using System;

partial class Examples
{
  public static Rhino.Commands.Result AddAnnotationText(Rhino.RhinoDoc doc)
  {
    Rhino.Geometry.Point3d pt = new Rhino.Geometry.Point3d(10, 0, 0);
    const string text = "Hello RhinoCommon";
    const double height = 2.0;
    const string font = "Arial";
    Rhino.Geometry.Plane plane = doc.Views.ActiveView.ActiveViewport.ConstructionPlane();
    plane.Origin = pt;
    Guid id = doc.Objects.AddText(text, plane, height, font, false, false);
    if( id != Guid.Empty )
    {
      doc.Views.Redraw();
      return Rhino.Commands.Result.Success;
    }
    return Rhino.Commands.Result.Failure;
  }
}
`,
    members: [
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)']
    ]
  },
  {
    name: 'Addtext.py',
    code: `import Rhino
import scriptcontext
import System.Guid

def AddAnnotationText():
    pt = Rhino.Geometry.Point3d(10, 0, 0)
    text = "Hello RhinoCommon"
    height = 2.0
    font = "Arial"
    plane = scriptcontext.doc.Views.ActiveView.ActiveViewport.ConstructionPlane()
    plane.Origin = pt
    id = scriptcontext.doc.Objects.AddText(text, plane, height, font, False, False)
    if id!=System.Guid.Empty:
        scriptcontext.doc.Views.Redraw()
        return Rhino.Commands.Result.Success
    return Rhino.Commands.Result.Failure


if __name__=="__main__":
    AddAnnotationText()
`,
    members: [
      ['Rhino.DocObjects.Tables.ObjectTable', 'Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)']
    ]
  }
]

export { Examples }
