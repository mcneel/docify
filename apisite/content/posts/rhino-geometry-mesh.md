---
title: "Mesh"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a geometry type that is defined by vertices and faces.
   This is often called a face-vertex mesh.
## Constructors
#### Rhino.Geometry.Mesh()
- (summary) Initializes a new empty mesh.
- (since) 5.0
## Properties
#### Collections.MeshVertexStatusList ComponentStates
- (summary) 
     Gets access to the vertex hidden/visibility collection in this mesh.
     This is a runtime property and it is not saved in the 3dm file.
     
- (since) 6.0
#### int DisjointMeshCount
- (summary) 
     Gets the number of disjoint (topologically unconnected) pieces in this mesh.
     
- (since) 5.0
#### Collections.MeshFaceNormalList FaceNormals
- (summary) 
     Gets access to the face normal collection in this mesh.
     
- (since) 5.0
#### Collections.MeshFaceList Faces
- (summary) 
     Gets access to the mesh face list.
     
- (since) 5.0
#### bool HasCachedTextureCoordinates
- (summary) 
     Will return True if SetCachedTextureCoordinates has been called;
     otherwise will return false.
     
- (since) 5.10
#### bool HasPrincipalCurvatures
- (summary) 
     HasPrincipalCurvatures
     
- (since) 7.0
#### bool IsClosed
- (summary) 
     Gets a value indicating whether a mesh is considered to be closed (solid).
     A mesh is considered solid when every mesh edge borders two or more faces.
     
- (since) 5.0
#### Collections.MeshNgonList Ngons
- (summary) 
     Gets access to the mesh ngon list.
     Ngons represent groups of Faces (triangles + quads).Faces are used to tessellate an Ngon internally.When a triangle or quad is referenced in the Ngon list, it is no longer visualized and
     conceived as a single entity, but takes part of the Ngon.If you need to get access to both Ngons and the faces that are not referenced by Ngons,
     that is, all polygons that are visible in the mesh, then use the
      helper method.
- (since) 6.0
#### Collections.MeshVertexNormalList Normals
- (summary) 
     Gets access to the vertex normal collection in this mesh.
     
- (since) 5.0
#### int PartitionCount
- (summary) 
     Number of partition information chunks stored on this mesh based
     on the last call to CreatePartitions
     
- (since) 5.6
#### Collections.MeshTextureCoordinateList TextureCoordinates
- (summary) 
     Gets access to the vertex texture coordinate collection in this mesh.
     
- (since) 5.0
#### Collections.MeshTopologyEdgeList TopologyEdges
- (summary) 
     Gets the  object associated with this mesh.
     This object stores edge connectivity.
- (since) 5.0
#### Collections.MeshTopologyVertexList TopologyVertices
- (summary) 
     Gets the  object associated with this mesh.
     This object stores vertex connectivity and the indices of vertices
     that were unified while computing the edge topology.
- (since) 5.0
#### Collections.MeshVertexColorList VertexColors
- (summary) 
     Gets access to the (optional) vertex color collection in this mesh.
     
- (since) 5.0
#### Collections.MeshVertexList Vertices
- (summary) 
     Gets access to the vertices set of this mesh.
     
- (since) 5.0
## Methods
#### static MeshThicknessMeasurement[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness)
- (summary) 
     Compute thickness metrics for this mesh.
     
- (since) 6.0
- (returns) MeshThicknessMeasurement[] This is some return comment
#### static MeshThicknessMeasurement[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness,CancellationToken cancelToken)
- (summary) 
     Compute thickness metrics for this mesh.
     
- (since) 6.0
- (returns) MeshThicknessMeasurement[] This is some return comment
#### static MeshThicknessMeasurement[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness,double sharpAngle,CancellationToken cancelToken)
- (summary) 
     Compute thickness metrics for this mesh.
     
- (since) 6.0
- (returns) MeshThicknessMeasurement[] This is some return comment
#### static Mesh[] CreateBooleanDifference(IEnumerable<Mesh> firstSet,IEnumerable<Mesh> secondSet)
- (summary) 
     Computes the solid difference of two sets of Meshes.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Mesh[] CreateBooleanIntersection(IEnumerable<Mesh> firstSet,IEnumerable<Mesh> secondSet)
- (summary) 
     Computes the solid intersection of two sets of meshes.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Mesh[] CreateBooleanSplit(IEnumerable<Mesh> meshesToSplit,IEnumerable<Mesh> meshSplitters)
- (summary) 
     Splits a set of meshes with another set.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Mesh[] CreateBooleanUnion(IEnumerable<Mesh> meshes)
- (summary) 
     Computes the solid union of a set of meshes.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Curve[] CreateContourCurves(Mesh meshToContour,Plane sectionPlane)
- (summary) 
     Constructs contour curves for a mesh, sectioned at a plane.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
#### static Curve[] CreateContourCurves(Mesh meshToContour,Point3d contourStart,Point3d contourEnd,double interval)
- (summary) 
     Constructs contour curves for a mesh, sectioned along a linear axis.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
#### static Mesh CreateFromBox(BoundingBox box,int xCount,int yCount,int zCount)
- (summary) 
     Constructs new mesh that matches a bounding box.
     
- (since) 5.6
- (returns) Mesh This is some return comment
#### static Mesh CreateFromBox(Box box,int xCount,int yCount,int zCount)
- (summary) 
      Constructs new mesh that matches an aligned box.
     
- (since) 5.3
- (returns) Mesh This is some return comment
#### static Mesh CreateFromBox(IEnumerable<Point3d> corners,int xCount,int yCount,int zCount)
- (summary) 
     Constructs new mesh from 8 corner points.
     
- (since) 5.3
- (returns) Mesh This is some return comment
#### static Mesh[] CreateFromBrep(Brep brep)
- (summary) 
     Constructs a mesh from a brep.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Mesh[] CreateFromBrep(Brep brep,MeshingParameters meshingParameters)
- (summary) 
     Constructs a mesh from a brep.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### static Mesh CreateFromClosedPolyline(Polyline polyline)
- (summary) 
     Attempts to create a Mesh that is a triangulation of a simple closed polyline that projects onto a plane.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCone(Cone cone,int vertical,int around)
- (summary) Constructs a solid mesh cone.
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCone(Cone cone,int vertical,int around,bool solid)
- (summary) Constructs a mesh cone.
- (since) 6.8
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCone(Cone cone,int vertical,int around,bool solid,bool quadCaps)
- (summary) Constructs a mesh cone.
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCurveExtrusion(Curve curve,Vector3d direction,MeshingParameters parameters,BoundingBox boundingBox)
- (summary) 
     Constructs a new extrusion from a curve.
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCurvePipe(Curve curve,double radius,int segments,int accuracy,MeshPipeCapStyle capType,bool faceted,IEnumerable<Interval> intervals)
- (summary) 
     Constructs a new mesh pipe from a curve.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around)
- (summary) Constructs a capped mesh cylinder.
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around,bool capBottom,bool capTop)
- (summary) Constructs a mesh cylinder.
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around,bool capBottom,bool capTop,bool quadCaps)
- (summary) Constructs a mesh cylinder.
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh[] CreateFromIterativeCleanup(IEnumerable<Mesh> meshes,double tolerance)
- (summary) Repairs meshes with vertices that are too near, using a tolerance value.
- (since) 7.0
- (returns) Mesh[] This is some return comment
#### static Mesh CreateFromLines(Curve[] lines,int maxFaceValence,double tolerance)
- (summary) 
     Creates a mesh by analizing the edge structure. Input lines could be from the extraction
     of edges from an original mesh.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromPlanarBoundary(Curve boundary,MeshingParameters parameters)
- (summary) 
     Do not use this overload. Use version that takes a tolerance parameter instead.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromPlanarBoundary(Curve boundary,MeshingParameters parameters,double tolerance)
- (summary) 
     Attempts to construct a mesh from a closed planar curve.RhinoMakePlanarMeshes
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromPlane(Plane plane,Interval xInterval,Interval yInterval,int xCount,int yCount)
- (summary) 
     Constructs a planar mesh grid.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromSphere(Sphere sphere,int xCount,int yCount)
- (summary) 
     Constructs a mesh sphere.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromSubD(SubD subd,int displayDensity)
- (summary) 
     Create a mesh from a SubD limit surface
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromSubDControlNet(SubD subd)
- (summary) 
     Create a mesh from a SubD control net
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateFromSurface(Surface surface)
- (summary) 
     Constructs a mesh from a surface
     
- (since) 6.5
- (returns) Mesh This is some return comment
#### static Mesh CreateFromSurface(Surface surface,MeshingParameters meshingParameters)
- (summary) 
     Constructs a mesh from a surface
     
- (since) 6.5
- (returns) Mesh This is some return comment
#### static Mesh CreateFromTessellation(IEnumerable<Point3d> points,IEnumerable<IEnumerable<Point3d>> edges,Plane plane,bool allowNewVertices)
- (summary) 
     Attempts to create a mesh that is a triangulation of a list of points, projected on a plane,
     including its holes and fixed edges.
     
- (since) (unknown)
- (returns) Mesh This is some return comment
#### static Mesh CreateFromTorus(Torus torus,int vertical,int around)
- (summary) 
     Constructs a mesh torus.
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh CreateIcoSphere(Sphere sphere,int subdivisions)
- (summary) 
     Constructs a icospherical mesh. A mesh icosphere differs from a standard
     UV mesh sphere in that it's vertices are evenly distributed. A mesh icosphere
     starts from an icosahedron (a regular polyhedron with 20 equilateral triangles).
     It is then refined by splitting each triangle into 4 smaller triangles.
     This splitting can be done several times.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreatePatch(Polyline outerBoundary,double angleToleranceRadians,Surface pullbackSurface,IEnumerable<Curve> innerBoundaryCurves,IEnumerable<Curve> innerBothSideCurves,IEnumerable<Point3d> innerPoints,bool trimback,int divisions)
- (summary) 
     Construct a mesh patch from a variety of input geometry.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateQuadSphere(Sphere sphere,int subdivisions)
- (summary) 
     Constructs a quad mesh sphere. A quad mesh sphere differs from a standard
     UV mesh sphere in that it's vertices are evenly distributed. A quad mesh sphere
     starts from a cube (a regular polyhedron with 6 square sides).
     It is then refined by splitting each quad into 4 smaller quads.
     This splitting can be done several times.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateRefinedCatmullClarkMesh(Mesh mesh,RefinementSettings settings)
- (summary) 
     Instantiates a new mesh that represents a Catmull-Clark subdivision of the mesh.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh CreateRefinedLoopMesh(Mesh mesh,LoopFormula formula,RefinementSettings settings)
- (summary) 
     Instantiates a new mesh that represents a Loop subdivision of the mesh.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### static Mesh QuadRemeshBrep(Brep brep,QuadRemeshParameters parameters)
- (summary) 
     Create QuadRemesh from a Brep
     Set Brep Face Mode by setting QuadRemeshParameters.PreserveMeshArrayEdgesMode
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Mesh QuadRemeshBrep(Brep brep,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves)
- (summary) 
     Create Quad Remesh from a Brep
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### static Task<Mesh> QuadRemeshBrepAsync(Brep brep,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
- (summary) 
     Quad remesh this brep async
     
- (since) 7.0
- (returns) Task<Mesh> This is some return comment
#### static Task<Mesh> QuadRemeshBrepAsync(Brep brep,QuadRemeshParameters parameters,IProgress<int> progress,CancellationToken cancelToken)
- (summary) 
     Quad remesh this brep async
     
- (since) 7.0
- (returns) Task<Mesh> This is some return comment
#### static bool RequireIterativeCleanup(IEnumerable<Mesh> meshes,double tolerance)
- (summary) 
     Analyzes some meshes, and determines if a pass of CreateFromIterativeCleanup would change the array.
     All available cleanup steps are used. Currently available cleanup steps are:- mending of single precision coincidence even though double precision vertices differ.- union of nearly identical vertices, irrespectively of their origin.- removal of t-joints along edges.
- (since) 7.0
- (returns) bool This is some return comment
#### void Append(IEnumerable<Mesh> meshes)
- (summary) 
     Append a list of meshes. This function is much more efficient than making
     repeated calls to Mesh.Append(Mesh) when lots of meshes are being joined
     into a single large mesh.
     
- (since) 6.8
- (returns) void This is some return comment
#### void Append(Mesh other)
- (summary) 
     Appends a copy of another mesh to this one and updates indices of appended mesh parts.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool Check(TextLog textLog,MeshCheckParameters parameters)
- (summary) 
     Examines the mesh and logs a description of what it finds right or wrong.
     The various properties the function checks for are described in MeshCheckParameters.
     
- (since) 7.0
- (returns) bool This is some return comment
#### void ClearSurfaceData()
- (summary) 
     Removes surface parameters, curvature parameters and surface statistics from the mesh.
     
- (since) 6.0
- (returns) void This is some return comment
#### void ClearTextureData()
- (summary) 
     Removes all texture coordinate information from this mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### MeshPoint ClosestMeshPoint(Point3d testPoint,double maximumDistance)
- (summary) 
     Gets the point on the mesh that is closest to a given test point. Similar to the 
     ClosestPoint function except this returns a MeshPoint class which includes
     extra information beyond just the location of the closest point.
     
- (since) 5.0
- (returns) MeshPoint This is some return comment
#### Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Gets the point on the mesh that is closest to a given test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### int ClosestPoint(Point3d testPoint,Point3d pointOnMesh,double maximumDistance)
- (summary) 
     Gets the point on the mesh that is closest to a given test point.
     
- (since) 5.0
- (returns) int This is some return comment
#### int ClosestPoint(Point3d testPoint,Point3d pointOnMesh,Vector3d normalAtPoint,double maximumDistance)
- (summary) 
     Gets the point on the mesh that is closest to a given test point.
     
- (since) 5.0
- (returns) int This is some return comment
#### int CollapseFacesByArea(double lessThanArea,double greaterThanArea)
- (summary) 
     Collapses multiple mesh faces, with areas less than LessThanArea and greater than GreaterThanArea, 
     based on the principles found in Stan Melax's mesh reduction PDF, 
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
     
- (since) 6.0
- (returns) int This is some return comment
#### int CollapseFacesByByAspectRatio(double aspectRatio)
- (summary) 
     Collapses a multiple mesh faces, determined by face aspect ratio, based on criteria found in Stan Melax's polygon reduction,
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
     
- (since) 6.0
- (returns) int This is some return comment
#### int CollapseFacesByEdgeLength(bool bGreaterThan,double edgeLength)
- (summary) 
     Collapses multiple mesh faces, with greater/less than edge length, based on the principles 
     found in Stan Melax's mesh reduction PDF, 
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
     
- (since) 6.0
- (returns) int This is some return comment
#### Color ColorAt(int faceIndex,double t0,double t1,double t2,double t3)
- (summary) 
     Evaluate a mesh normal at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
     
- (since) 5.0
- (returns) Color This is some return comment
#### Color ColorAt(MeshPoint meshPoint)
- (summary) 
     Evaluate a mesh color at a set of barycentric coordinates.
     
- (since) 5.0
- (returns) Color This is some return comment
#### bool Compact()
- (summary) 
     Removes any unreferenced objects from arrays, reindexes as needed 
     and shrinks arrays to minimum required size.
     
- (since) 5.0
- (returns) bool This is some return comment
#### byte[] ComputeAutoCreaseInformation()
- (summary) 
     Do not use this method.
     Length: top.Mesh.Vertices.Count
     
- (since) 6.0
- (returns) byte[] This is some return comment
#### void CopyFrom(Mesh other)
- (summary) 
     Copies mesh values into this mesh from another mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool CreatePartitions(int maximumVertexCount,int maximumTriangleCount)
- (summary) 
     In ancient times (or modern smartphone times), some rendering engines
     were only able to process small batches of triangles and the
     CreatePartitions() function was provided to partition the mesh into
     subsets of vertices and faces that those rendering engines could handle.
     
- (since) 5.6
- (returns) bool This is some return comment
#### void DestroyPartition()
- (summary) 
     Destroys mesh partition.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DestroyTopology()
- (summary) 
     Removes topology data, forcing all topology information to be recomputed.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DestroyTree()
- (summary) 
     Destroys the mesh vertex access tree.
     
- (since) 6.0
- (returns) void This is some return comment
#### GeometryBase Duplicate()
- (summary) 
     Constructs a copy of this mesh.
     This is the same as .
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
#### Mesh DuplicateMesh()
- (summary) Constructs a copy of this mesh.
     This is the same as .
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### bool EvaluateMeshGeometry(Surface surface)
- (summary) 
     If the mesh has SurfaceParameters, the surface is evaluated at
     these parameters and the mesh geometry is updated.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Mesh[] ExplodeAtUnweldedEdges()
- (summary) 
     Explode the mesh into submeshes where a submesh is a collection of faces that are contained
     within a closed loop of "unwelded" edges. Unwelded edges are edges where the faces that share
     the edge have unique mesh vertexes (not mesh topology vertexes) at both ends of the edge.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### int[] ExtendSelectionByEdgeRidge(int[] preselectedEdges,int newEdge,bool iterative)
- (summary) 
     Suggests an extension of a selection set by using information related with topology and alignment.
     
- (since) 6.0
- (returns) int[] This is some return comment
#### int[] ExtendSelectionByFaceLoop(int[] preselectedFaces,int newFace,bool iterative)
- (summary) 
     Suggests an extension of a face selection set by using information related with topology and alignment.
     
- (since) 6.0
- (returns) int[] This is some return comment
#### Mesh ExtractNonManifoldEdges(bool selective)
- (summary) 
     Extracts, or removes, non-manifold mesh edges. 
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### bool FileHole(int topologyEdgeIndex)
- (summary) 
     Given a starting "naked" edge index, this function attempts to determine a "hole"
     by chaining additional naked edges together until if returns to the start index.
     Then it triangulates the closed polygon and either adds the faces to the mesh.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool FillHoles()
- (summary) 
     Attempts to determine "holes" in the mesh by chaining naked edges together. 
     Then it triangulates the closed polygons adds the faces to the mesh.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void Flip(bool vertexNormals,bool faceNormals,bool faceOrientation)
- (summary) Reverses the direction of the mesh.
- (since) 5.0
- (returns) void This is some return comment
#### void Flip(bool vertexNormals,bool faceNormals,bool faceOrientation,bool ngonsBoundaryDirection)
- (summary) Reverses the direction of the mesh.
- (since) 7.0
- (returns) void This is some return comment
#### CachedTextureCoordinates GetCachedTextureCoordinates(Guid textureMappingId)
- (summary) 
     Call this method to get cached texture coordinates for a texture
     mapping with the specified Id.
     
- (since) 5.10
- (returns) CachedTextureCoordinates This is some return comment
#### bool[] GetNakedEdgePointStatus()
- (summary) 
     Returns an array of bool values equal in length to the number of vertices in this
     mesh. Each value corresponds to a mesh vertex and is set to True if the vertex is
     not completely surrounded by faces.
     
- (since) 5.0
- (returns) bool[] This is some return comment
#### Polyline[] GetNakedEdges()
- (summary) 
     Returns all edges of a mesh that are considered "naked" in the
     sense that the edge only has one face.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### int GetNgonAndFacesCount()
- (summary) 
     Retrieves the count of items that  will provide.
     
- (since) 6.0
- (returns) int This is some return comment
#### IEnumerable<MeshNgon> GetNgonAndFacesEnumerable()
- (summary) 
     Retrieves a complete enumerable, i.e., one that provides an iterator over every face that is present,
     no matter if defined as a triangle, a quad, or a strictly over-four-sided ngon.
     
- (since) 6.0
- (returns) IEnumerable<MeshNgon> This is some return comment
#### Polyline[] GetOutlines(Plane plane)
- (summary) 
     Constructs the outlines of a mesh projected against a plane.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### Polyline[] GetOutlines(RhinoViewport viewport)
- (summary) 
     Constructs the outlines of a mesh. The projection information in the
     viewport is used to determine how the outlines are projected.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### Polyline[] GetOutlines(ViewportInfo viewportInfo,Plane plane)
- (summary) 
     Constructs the outlines of a mesh.
     
- (since) 6.0
- (returns) Polyline[] This is some return comment
#### MeshPart GetPartition(int which)
- (summary) 
     Retrieves a partition. See  for details.
     
- (since) 5.6
- (returns) MeshPart This is some return comment
#### bool GetSelfIntersections(double tolerance,Polyline[] intersections,bool overlapsPolylines,Polyline[] overlapsPolylinesResult,bool overlapsMesh,Mesh overlapsMeshResult,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
- (summary) 
     Gets the self intersections of this mesh.
     
- (since) 7.0
- (returns) bool This is some return comment
#### MeshUnsafeLock GetUnsafeLock(bool writable)
- (summary) 
     Allows to obtain unsafe pointers to the underlying unmanaged data structures of the mesh.
     
- (since) 6.0
- (returns) MeshUnsafeLock This is some return comment
#### bool HealNakedEdges(double distance)
- (summary) 
     Attempts to "heal" naked edges in a mesh based on a given distance.  
     First attempts to move vertexes to neighboring vertexes that are within that
     distance away. Then it finds edges that have a closest point to the vertex within
     the distance and splits the edge. When it finds one it splits the edge and
     makes two new edges using that point.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsManifold(bool topologicalTest,bool isOriented,bool hasBoundary)
- (summary) 
     Gets a value indicating whether or not the mesh is manifold. 
     A manifold mesh does not have any edge that borders more than two faces.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsPointInside(Point3d point,double tolerance,bool strictlyIn)
- (summary) 
     Determines if a point is inside a solid mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Vector3d NormalAt(int faceIndex,double t0,double t1,double t2,double t3)
- (summary) 
     Evaluate a mesh normal at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Vector3d NormalAt(MeshPoint meshPoint)
- (summary) 
     Evaluate a mesh normal at a set of barycentric coordinates.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Mesh Offset(double distance)
- (summary) 
     Makes a new mesh with vertices offset a distance in the opposite direction of the existing vertex normals.
     Same as Mesh.Offset(distance, false)
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### Mesh Offset(double distance,bool solidify)
- (summary) 
     Makes a new mesh with vertices offset a distance in the opposite direction of the existing vertex normals.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### Mesh Offset(double distance,bool solidify,Vector3d direction)
- (summary) 
     Makes a new mesh with vertices offset a distance along the direction parameter.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function.
     
- (since) 6.2
- (returns) Mesh This is some return comment
#### Mesh Offset(double distance,bool solidify,Vector3d direction,List<int> wallFacesOut)
- (summary) 
     Makes a new mesh with vertices offset a distance along the direction parameter.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function. Returns list of wall faces, i.e. the
     faces that connect original and offset mesh when solidified.
     
- (since) (unknown)
- (returns) Mesh This is some return comment
#### Point3d PointAt(int faceIndex,double t0,double t1,double t2,double t3)
- (summary) 
     Evaluates a mesh at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### Point3d PointAt(MeshPoint meshPoint)
- (summary) 
     Evaluate a mesh at a set of barycentric coordinates.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### PolylineCurve PullCurve(Curve curve,double tolerance)
- (summary) 
     Gets a polyline approximation of the input curve and then moves its control points to the closest point on the mesh.
     Then it "connects the points" over edges so that a polyline on the mesh is formed.
     
- (since) 7.0
- (returns) PolylineCurve This is some return comment
#### Point3d[] PullPointsToMesh(IEnumerable<Point3d> points)
- (summary) 
     Pulls a collection of points to a mesh.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### Mesh QuadRemesh(QuadRemeshParameters parameters)
- (summary) 
     Quad remesh this mesh
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### Mesh QuadRemesh(QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves)
- (summary) 
     Quad remesh this mesh
     
- (since) 7.0
- (returns) Mesh This is some return comment
#### Task<Mesh> QuadRemeshAsync(IEnumerable<int> faceBlocks,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
- (summary) 
     Quad remesh this mesh async
     
- (since) 7.0
- (returns) Task<Mesh> This is some return comment
#### Task<Mesh> QuadRemeshAsync(QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
- (summary) 
     Quad remesh this mesh async
     
- (since) 7.0
- (returns) Task<Mesh> This is some return comment
#### Task<Mesh> QuadRemeshAsync(QuadRemeshParameters parameters,IProgress<int> progress,CancellationToken cancelToken)
- (summary) 
     Quad remesh this mesh async
     
- (since) 7.0
- (returns) Task<Mesh> This is some return comment
#### void RebuildNormals()
- (summary) 
     Removes mesh normals and reconstructs the face and vertex normals based
     on the orientation of the faces.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize)
- (summary) 
     Reduce polygon count
     
- (since) 5.10
- (returns) bool This is some return comment
#### bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,bool threaded)
- (summary) 
     Reduce polygon count
     
- (since) 6.15
- (returns) bool This is some return comment
#### bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,CancellationToken cancelToken,IProgress<double> progress,string problemDescription)
- (summary) Reduce polygon count
- (since) 6.0
- (returns) bool This is some return comment
#### bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,CancellationToken cancelToken,IProgress<double> progress,string problemDescription,bool threaded)
- (summary) Reduce polygon count
- (since) 6.15
- (returns) bool This is some return comment
#### bool Reduce(ReduceMeshParameters parameters)
- (summary) Reduce polygon count
- (since) 6.0
- (returns) bool This is some return comment
#### bool Reduce(ReduceMeshParameters parameters,bool threaded)
- (summary) Reduce polygon count
- (since) 6.15
- (returns) bool This is some return comment
#### void ReleaseUnsafeLock(MeshUnsafeLock meshData)
- (summary) 
     Updates the Mesh data with the information that was stored via the .
     
- (since) (unknown)
- (returns) void This is some return comment
#### void SetCachedTextureCoordinates(TextureMapping tm,Transform xf)
- (summary) 
     Set cached texture coordinates using the specified mapping.
     
- (since) 5.10
- (returns) void This is some return comment
#### void SetTextureCoordinates(TextureMapping tm,Transform xf,bool lazy)
- (summary) 
     Set texture coordinates using given mapping and applying given transform.
     
     Set lazy to False to generate texture coordinates right away.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
- (summary) 
     Smooths a mesh by averaging the positions of mesh vertices in a specified region.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
- (summary) 
     Smooths a mesh by averaging the positions of mesh vertices in a specified region.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Smooth(IEnumerable<int> vertexIndices,double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
- (summary) 
     Smooths part of a mesh by averaging the positions of mesh vertices in a specified region.
     
- (since) 6.8
- (returns) bool This is some return comment
#### int SolidOrientation()
- (summary) 
     Determines orientation of a "solid" mesh.
     
- (since) 5.0
- (returns) int This is some return comment
#### Mesh[] Split(IEnumerable<Mesh> meshes)
- (summary) 
     Split a mesh with a collection of meshes.
     Does not split at coplanar intersections.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### Mesh[] Split(IEnumerable<Mesh> meshes,double tolerance,bool splitAtCoplanar,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
- (summary) 
     Split a mesh with a collection of meshes.
     
- (since) 7.0
- (returns) Mesh[] This is some return comment
#### Mesh[] Split(Mesh mesh)
- (summary) 
     Split a mesh with another mesh.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### Mesh[] Split(Plane plane)
- (summary) 
     Split a mesh by an infinite plane.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### Mesh[] SplitDisjointPieces()
- (summary) 
     Splits up the mesh into its unconnected pieces.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
#### Mesh[] SplitWithProjectedPolylines(IEnumerable<PolylineCurve> curves,double tolerance)
- (summary) 
     Splits a mesh by adding edges in correspondance with input polylines, and divides the mesh at partitioned areas.
     Polyline segments that are measured not to be on the mesh will be ignored.
     
- (since) 7.0
- (returns) Mesh[] This is some return comment
#### Mesh[] SplitWithProjectedPolylines(IEnumerable<PolylineCurve> curves,double tolerance,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
- (summary) 
     Splits a mesh by adding edges in correspondance with input polylines, and divides the mesh at partitioned areas.
     Polyline segments that are measured not to be on the mesh will be ignored.
     
- (since) 7.0
- (returns) Mesh[] This is some return comment
#### int UnifyNormals()
- (summary) 
     Attempts to fix inconsistencies in the directions of mesh faces in a mesh. This function
     does not modify mesh vertex normals, it rearranges the mesh face winding and face
     normals to make them all consistent. Note, you may want to call Mesh.Normals.ComputeNormals()
     to recompute vertex normals after calling this functions.
     
- (since) 5.0
- (returns) int This is some return comment
#### int UnifyNormals(bool countOnly)
- (summary) 
     Attempts to fix inconsistencies in the directions of mesh faces in a mesh. This function
     does not modify mesh vertex normals, it rearranges the mesh face winding and face
     normals to make them all consistent. Note, you may want to call Mesh.Normals.ComputeNormals()
     to recompute vertex normals after calling this functions.
     
- (since) 6.0
- (returns) int This is some return comment
#### void Unweld(double angleToleranceRadians,bool modifyNormals)
- (summary) 
     Makes sure that faces sharing an edge and having a difference of normal greater
     than or equal to angleToleranceRadians have unique vertexes along that edge,
     adding vertices if necessary.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool UnweldEdge(IEnumerable<int> edgeIndices,bool modifyNormals)
- (summary) 
     Adds creases to a smooth mesh by creating coincident vertices along selected edges.
     
- (since) 6.3
- (returns) bool This is some return comment
#### double Volume()
- (summary) 
     Compute volume of the mesh. 
     
- (since) 6.0
- (returns) double This is some return comment
#### void Weld(double angleToleranceRadians)
- (summary) 
     Makes sure that faces sharing an edge and having a difference of normal greater
     than or equal to angleToleranceRadians share vertexes along that edge, vertex normals
     are averaged.
     
- (since) 5.0
- (returns) void This is some return comment
#### Mesh WithDisplacement(MeshDisplacementInfo displacement)
- (summary) 
     Constructs new mesh from the current one, with displacement applied to it.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### Mesh WithEdgeSoftening(double softeningRadius,bool chamfer,bool faceted,bool force,double angleThreshold)
- (summary) 
     Constructs new mesh from the current one, with edge softening applied to it.
     
- (since) 6.0
- (returns) Mesh This is some return comment
#### Mesh WithShutLining(bool faceted,double tolerance,IEnumerable<ShutLiningCurveInfo> curves)
- (summary) 
     Constructs new mesh from the current one, with shut lining applied to it.
     
- (since) 6.0
- (returns) Mesh This is some return comment
