---
title: "Mesh"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a geometry type that is defined by vertices and faces.
   This is often called a face-vertex mesh.
```cs
[Serializable]
public class Mesh : GeometryBase
```
## Constructors

Mesh()
: Initializes a new empty mesh.
## Properties

[MeshVertexStatusList](/rhinocommon/rhino/geometry/collections/meshvertexstatuslist/) ComponentStates
: Gets access to the vertex hidden/visibility collection in this mesh.
     This is a runtime property and it is not saved in the 3dm file.
: since 6.0

int DisjointMeshCount
: Gets the number of disjoint (topologically unconnected) pieces in this mesh.

[MeshFaceNormalList](/rhinocommon/rhino/geometry/collections/meshfacenormallist/) FaceNormals
: Gets access to the face normal collection in this mesh.

[MeshFaceList](/rhinocommon/rhino/geometry/collections/meshfacelist/) Faces
: Gets access to the mesh face list.

bool HasCachedTextureCoordinates
: Will return True if SetCachedTextureCoordinates has been called;
     otherwise will return false.
: since 5.10

bool HasPrincipalCurvatures
: HasPrincipalCurvatures
: since 7.0

bool IsClosed
: Gets a value indicating whether a mesh is considered to be closed (solid).
     A mesh is considered solid when every mesh edge borders two or more faces.
: Returns - True if the mesh is closed, False if it is not.

[MeshNgonList](/rhinocommon/rhino/geometry/collections/meshngonlist/) Ngons
: Gets access to the mesh ngon list.
     Ngons represent groups of Faces (triangles + quads).Faces are used to tessellate an Ngon internally.When a triangle or quad is referenced in the Ngon list, it is no longer visualized and
     conceived as a single entity, but takes part of the Ngon.If you need to get access to both Ngons and the faces that are not referenced by Ngons,
     that is, all polygons that are visible in the mesh, then use the
      helper method.
: since 6.0

[MeshVertexNormalList](/rhinocommon/rhino/geometry/collections/meshvertexnormallist/) Normals
: Gets access to the vertex normal collection in this mesh.

int PartitionCount
: Number of partition information chunks stored on this mesh based
     on the last call to CreatePartitions
: since 5.6

[MeshTextureCoordinateList](/rhinocommon/rhino/geometry/collections/meshtexturecoordinatelist/) TextureCoordinates
: Gets access to the vertex texture coordinate collection in this mesh.

[MeshTopologyEdgeList](/rhinocommon/rhino/geometry/collections/meshtopologyedgelist/) TopologyEdges
: Gets the  object associated with this mesh.
     This object stores edge connectivity.

[MeshTopologyVertexList](/rhinocommon/rhino/geometry/collections/meshtopologyvertexlist/) TopologyVertices
: Gets the  object associated with this mesh.
     This object stores vertex connectivity and the indices of vertices
     that were unified while computing the edge topology.

[MeshVertexColorList](/rhinocommon/rhino/geometry/collections/meshvertexcolorlist/) VertexColors
: Gets access to the (optional) vertex color collection in this mesh.

[MeshVertexList](/rhinocommon/rhino/geometry/collections/meshvertexlist/) Vertices
: Gets access to the vertices set of this mesh.
## Methods

static [MeshThicknessMeasurement](/rhinocommon/rhino/geometry/meshthicknessmeasurement/)[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness)
: Compute thickness metrics for this mesh.
: Returns - Array of thickness measurements.
: since 6.0

static [MeshThicknessMeasurement](/rhinocommon/rhino/geometry/meshthicknessmeasurement/)[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness,CancellationToken cancelToken)
: Compute thickness metrics for this mesh.
: Returns - Array of thickness measurements.
: since 6.0

static [MeshThicknessMeasurement](/rhinocommon/rhino/geometry/meshthicknessmeasurement/)[] ComputeThickness(IEnumerable<Mesh> meshes,double maximumThickness,double sharpAngle,CancellationToken cancelToken)
: Compute thickness metrics for this mesh.
: Returns - Array of thickness measurements.
: since 6.0

static Mesh[] CreateBooleanDifference(IEnumerable<Mesh> firstSet,IEnumerable<Mesh> secondSet)
: Computes the solid difference of two sets of Meshes.
: Returns - An array of Mesh results or None on failure.

static Mesh[] CreateBooleanIntersection(IEnumerable<Mesh> firstSet,IEnumerable<Mesh> secondSet)
: Computes the solid intersection of two sets of meshes.
: Returns - An array of Mesh results or None on failure.

static Mesh[] CreateBooleanSplit(IEnumerable<Mesh> meshesToSplit,IEnumerable<Mesh> meshSplitters)
: Splits a set of meshes with another set.
: Returns - A new mesh array, or None on error.

static Mesh[] CreateBooleanUnion(IEnumerable<Mesh> meshes)
: Computes the solid union of a set of meshes.
: Returns - An array of Mesh results or None on failure.

static [Curve](/rhinocommon/rhino/geometry/curve/)[] CreateContourCurves(Mesh meshToContour,Plane sectionPlane)
: Constructs contour curves for a mesh, sectioned at a plane.
: Returns - An array of curves. This array can be empty.

static [Curve](/rhinocommon/rhino/geometry/curve/)[] CreateContourCurves(Mesh meshToContour,Point3d contourStart,Point3d contourEnd,double interval)
: Constructs contour curves for a mesh, sectioned along a linear axis.
: Returns - An array of curves. This array can be empty.

static Mesh CreateFromBox(BoundingBox box,int xCount,int yCount,int zCount)
: Constructs new mesh that matches a bounding box.
: Returns - A new brep, or None on failure.
: since 5.6

static Mesh CreateFromBox(Box box,int xCount,int yCount,int zCount)
: Constructs new mesh that matches an aligned box.
: since 5.3

static Mesh CreateFromBox(IEnumerable<Point3d> corners,int xCount,int yCount,int zCount)
: Constructs new mesh from 8 corner points.
: Returns - A new brep, or None on failure.
: since 5.3

static Mesh[] CreateFromBrep(Brep brep)
: Constructs a mesh from a brep.
: Returns - An array of meshes.

static Mesh[] CreateFromBrep(Brep brep,MeshingParameters meshingParameters)
: Constructs a mesh from a brep.
: Returns - An array of meshes.

static Mesh CreateFromClosedPolyline(Polyline polyline)
: Attempts to create a Mesh that is a triangulation of a simple closed polyline that projects onto a plane.
: Returns - New mesh on success or None on failure.

static Mesh CreateFromCone(Cone cone,int vertical,int around)
: Constructs a solid mesh cone.
: Returns - A valid mesh if successful.

static Mesh CreateFromCone(Cone cone,int vertical,int around,bool solid)
: Constructs a mesh cone.
: Returns - A valid mesh if successful.
: since 6.8

static Mesh CreateFromCone(Cone cone,int vertical,int around,bool solid,bool quadCaps)
: Constructs a mesh cone.
: Returns - A valid mesh if successful.
: since 7.0

static Mesh CreateFromCurveExtrusion(Curve curve,Vector3d direction,MeshingParameters parameters,BoundingBox boundingBox)
: Constructs a new extrusion from a curve.
: Returns - A new mesh, or None on failure.
: since 7.0

static Mesh CreateFromCurvePipe(Curve curve,double radius,int segments,int accuracy,MeshPipeCapStyle capType,bool faceted,IEnumerable<Interval> intervals)
: Constructs a new mesh pipe from a curve.
: Returns - A new mesh, or None on failure.
: since 6.0

static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around)
: Constructs a capped mesh cylinder.
: Returns - Returns a mesh cylinder if successful, None otherwise.

static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around,bool capBottom,bool capTop)
: Constructs a mesh cylinder.
: Returns - Returns a mesh cylinder if successful, None otherwise.
: since 7.0

static Mesh CreateFromCylinder(Cylinder cylinder,int vertical,int around,bool capBottom,bool capTop,bool quadCaps)
: Constructs a mesh cylinder.
: Returns - Returns a mesh cylinder if successful, None otherwise.
: since 7.0

static Mesh[] CreateFromIterativeCleanup(IEnumerable<Mesh> meshes,double tolerance)
: Repairs meshes with vertices that are too near, using a tolerance value.
: Returns - A valid meshes array if successful. If no change was required, some meshes can be null. Otherwise, null, when no changes were done.
: since 7.0

static Mesh CreateFromLines(Curve[] lines,int maxFaceValence,double tolerance)
: Creates a mesh by analizing the edge structure. Input lines could be from the extraction
     of edges from an original mesh.
: Returns - A new mesh, or None if no mesh is constructed.
: since 6.0

static Mesh CreateFromPlanarBoundary(Curve boundary,MeshingParameters parameters)
: Do not use this overload. Use version that takes a tolerance parameter instead.
: Returns - Do not use.

static Mesh CreateFromPlanarBoundary(Curve boundary,MeshingParameters parameters,double tolerance)
: Attempts to construct a mesh from a closed planar curve.RhinoMakePlanarMeshes
: Returns - New mesh on success or None on failure.
: since 6.0

static Mesh CreateFromPlane(Plane plane,Interval xInterval,Interval yInterval,int xCount,int yCount)
: Constructs a planar mesh grid.

static Mesh CreateFromSphere(Sphere sphere,int xCount,int yCount)
: Constructs a mesh sphere.

static Mesh CreateFromSubD(SubD subd,int displayDensity)
: Create a mesh from a SubD limit surface
: since 7.0

static Mesh CreateFromSubDControlNet(SubD subd)
: Create a mesh from a SubD control net
: since 7.0

static Mesh CreateFromSurface(Surface surface)
: Constructs a mesh from a surface
: Returns - New mesh representing the surface
: since 6.5

static Mesh CreateFromSurface(Surface surface,MeshingParameters meshingParameters)
: Constructs a mesh from a surface
: Returns - New mesh representing the surface
: since 6.5

static Mesh CreateFromTessellation(IEnumerable<Point3d> points,IEnumerable<IEnumerable<Point3d>> edges,Plane plane,bool allowNewVertices)
: Attempts to create a mesh that is a triangulation of a list of points, projected on a plane,
     including its holes and fixed edges.
: Returns - A new mesh, or None if not successful.
: since (unknown)

static Mesh CreateFromTorus(Torus torus,int vertical,int around)
: Constructs a mesh torus.
: Returns - Returns a mesh torus if successful, None otherwise.
: since 7.0

static Mesh CreateIcoSphere(Sphere sphere,int subdivisions)
: Constructs a icospherical mesh. A mesh icosphere differs from a standard
     UV mesh sphere in that it's vertices are evenly distributed. A mesh icosphere
     starts from an icosahedron (a regular polyhedron with 20 equilateral triangles).
     It is then refined by splitting each triangle into 4 smaller triangles.
     This splitting can be done several times.
: Returns - A welded mesh icosphere if successful, or None on failure.
: since 6.0

static Mesh CreatePatch(Polyline outerBoundary,double angleToleranceRadians,Surface pullbackSurface,IEnumerable<Curve> innerBoundaryCurves,IEnumerable<Curve> innerBothSideCurves,IEnumerable<Point3d> innerPoints,bool trimback,int divisions)
: Construct a mesh patch from a variety of input geometry.
: Returns - mesh on success; None on failure
: since 6.0

static Mesh CreateQuadSphere(Sphere sphere,int subdivisions)
: Constructs a quad mesh sphere. A quad mesh sphere differs from a standard
     UV mesh sphere in that it's vertices are evenly distributed. A quad mesh sphere
     starts from a cube (a regular polyhedron with 6 square sides).
     It is then refined by splitting each quad into 4 smaller quads.
     This splitting can be done several times.
: Returns - A welded quad mesh sphere if successful, or None on failure.
: since 6.0

static Mesh CreateRefinedCatmullClarkMesh(Mesh mesh,RefinementSettings settings)
: Instantiates a new mesh that represents a Catmull-Clark subdivision of the mesh.
: Returns - A new mesh. None is never returned.
: since 6.0

static Mesh CreateRefinedLoopMesh(Mesh mesh,LoopFormula formula,RefinementSettings settings)
: Instantiates a new mesh that represents a Loop subdivision of the mesh.
: Returns - A new mesh. None is never returned.
: since 6.0

static Mesh QuadRemeshBrep(Brep brep,QuadRemeshParameters parameters)
: Create QuadRemesh from a Brep
     Set Brep Face Mode by setting QuadRemeshParameters.PreserveMeshArrayEdgesMode
: since 7.0

static Mesh QuadRemeshBrep(Brep brep,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves)
: Create Quad Remesh from a Brep
: since 7.0

static Task<Mesh> QuadRemeshBrepAsync(Brep brep,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
: Quad remesh this brep async
: since 7.0

static Task<Mesh> QuadRemeshBrepAsync(Brep brep,QuadRemeshParameters parameters,IProgress<int> progress,CancellationToken cancelToken)
: Quad remesh this brep async
: since 7.0

static bool RequireIterativeCleanup(IEnumerable<Mesh> meshes,double tolerance)
: Analyzes some meshes, and determines if a pass of CreateFromIterativeCleanup would change the array.
     All available cleanup steps are used. Currently available cleanup steps are:- mending of single precision coincidence even though double precision vertices differ.- union of nearly identical vertices, irrespectively of their origin.- removal of t-joints along edges.
: Returns - True if meshes would be changed, otherwise false.
: since 7.0

void Append(IEnumerable<Mesh> meshes)
: Append a list of meshes. This function is much more efficient than making
     repeated calls to Mesh.Append(Mesh) when lots of meshes are being joined
     into a single large mesh.
: since 6.8

void Append(Mesh other)
: Appends a copy of another mesh to this one and updates indices of appended mesh parts.

bool Check(TextLog textLog,MeshCheckParameters parameters)
: Examines the mesh and logs a description of what it finds right or wrong.
     The various properties the function checks for are described in MeshCheckParameters.
: Returns - Returns True if the mesh is valid, False otherwise.
: since 7.0

void ClearSurfaceData()
: Removes surface parameters, curvature parameters and surface statistics from the mesh.
: since 6.0

void ClearTextureData()
: Removes all texture coordinate information from this mesh.

[MeshPoint](/rhinocommon/rhino/geometry/meshpoint/) ClosestMeshPoint(Point3d testPoint,double maximumDistance)
: Gets the point on the mesh that is closest to a given test point. Similar to the 
     ClosestPoint function except this returns a MeshPoint class which includes
     extra information beyond just the location of the closest point.
: Returns - closest point information on success. None on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Gets the point on the mesh that is closest to a given test point.
: Returns - The point on the mesh closest to testPoint, or Point3d.Unset on failure.

int ClosestPoint(Point3d testPoint,Point3d pointOnMesh,double maximumDistance)
: Gets the point on the mesh that is closest to a given test point.
: Returns - Index of face that the closest point lies on if successful. 
     -1 if not successful; the value of pointOnMesh is undefined.

int ClosestPoint(Point3d testPoint,Point3d pointOnMesh,Vector3d normalAtPoint,double maximumDistance)
: Gets the point on the mesh that is closest to a given test point.
: Returns - Index of face that the closest point lies on if successful. 
     -1 if not successful; the value of pointOnMesh is undefined.

int CollapseFacesByArea(double lessThanArea,double greaterThanArea)
: Collapses multiple mesh faces, with areas less than LessThanArea and greater than GreaterThanArea, 
     based on the principles found in Stan Melax's mesh reduction PDF, 
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
: Returns - Number of faces that were collapsed in the process.
: since 6.0

int CollapseFacesByByAspectRatio(double aspectRatio)
: Collapses a multiple mesh faces, determined by face aspect ratio, based on criteria found in Stan Melax's polygon reduction,
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
: Returns - Number of faces that were collapsed in the process.
: since 6.0

int CollapseFacesByEdgeLength(bool bGreaterThan,double edgeLength)
: Collapses multiple mesh faces, with greater/less than edge length, based on the principles 
     found in Stan Melax's mesh reduction PDF, 
     see http://pomax.nihongoresources.com/downloads/PolygonReduction.pdf
: Returns - Number of edges (faces) that were collapsed.
: since 6.0

Color ColorAt(int faceIndex,double t0,double t1,double t2,double t3)
: Evaluate a mesh normal at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
: Returns - The interpolated vertex color on the mesh or Color.Transparent if the faceIndex is not valid, 
     if the barycentric coordinates could not be evaluated, or if there are no colors defined on the mesh.

Color ColorAt(MeshPoint meshPoint)
: Evaluate a mesh color at a set of barycentric coordinates.
: Returns - The interpolated vertex color on the mesh or Color.Transparent if the faceIndex is not valid, 
     if the barycentric coordinates could not be evaluated, or if there are no colors defined on the mesh.

bool Compact()
: Removes any unreferenced objects from arrays, reindexes as needed 
     and shrinks arrays to minimum required size.
: Returns - True on success, False on failure.

byte[] ComputeAutoCreaseInformation()
: Do not use this method.
     Length: top.Mesh.Vertices.Count
: Returns - An array that is bound to change.
: since 6.0

void CopyFrom(Mesh other)
: Copies mesh values into this mesh from another mesh.

bool CreatePartitions(int maximumVertexCount,int maximumTriangleCount)
: In ancient times (or modern smartphone times), some rendering engines
     were only able to process small batches of triangles and the
     CreatePartitions() function was provided to partition the mesh into
     subsets of vertices and faces that those rendering engines could handle.
: Returns - True on success
: since 5.6

void DestroyPartition()
: Destroys mesh partition.
: since 6.0

void DestroyTopology()
: Removes topology data, forcing all topology information to be recomputed.
: since 6.0

void DestroyTree()
: Destroys the mesh vertex access tree.
: since 6.0

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Duplicate()
: Constructs a copy of this mesh.
     This is the same as .
: Returns - A mesh.

Mesh DuplicateMesh()
: Constructs a copy of this mesh.
     This is the same as .

bool EvaluateMeshGeometry(Surface surface)
: If the mesh has SurfaceParameters, the surface is evaluated at
     these parameters and the mesh geometry is updated.
: Returns - True if the operation succceeded; False otherwise.

Mesh[] ExplodeAtUnweldedEdges()
: Explode the mesh into submeshes where a submesh is a collection of faces that are contained
     within a closed loop of "unwelded" edges. Unwelded edges are edges where the faces that share
     the edge have unique mesh vertexes (not mesh topology vertexes) at both ends of the edge.
: Returns - Array of submeshes on success; None on error. If the count in the returned array is 1, then
     nothing happened and the ouput is essentially a copy of the input.

int[] ExtendSelectionByEdgeRidge(int[] preselectedEdges,int newEdge,bool iterative)
: Suggests an extension of a selection set by using information related with topology and alignment.
: Returns - An array of edges that are in a visual relationship with newEdge.
: since 6.0

int[] ExtendSelectionByFaceLoop(int[] preselectedFaces,int newFace,bool iterative)
: Suggests an extension of a face selection set by using information related with topology and alignment.
: Returns - An array of faces that are in a visual relationship with newFace.
: since 6.0

Mesh ExtractNonManifoldEdges(bool selective)
: Extracts, or removes, non-manifold mesh edges.
: Returns - A mesh containing the extracted non-manifold parts if successful, None otherwise.
: since 6.0

bool FileHole(int topologyEdgeIndex)
: Given a starting "naked" edge index, this function attempts to determine a "hole"
     by chaining additional naked edges together until if returns to the start index.
     Then it triangulates the closed polygon and either adds the faces to the mesh.
: Returns - True if successful, False otherwise.
: since 6.0

bool FillHoles()
: Attempts to determine "holes" in the mesh by chaining naked edges together. 
     Then it triangulates the closed polygons adds the faces to the mesh.
: Returns - True if successful, False otherwise.
: since 6.0

void Flip(bool vertexNormals,bool faceNormals,bool faceOrientation)
: Reverses the direction of the mesh.

void Flip(bool vertexNormals,bool faceNormals,bool faceOrientation,bool ngonsBoundaryDirection)
: Reverses the direction of the mesh.
: since 7.0

[CachedTextureCoordinates](/rhinocommon/rhino/render/cachedtexturecoordinates/) GetCachedTextureCoordinates(Guid textureMappingId)
: Call this method to get cached texture coordinates for a texture
     mapping with the specified Id.
: Returns - Object which allows access to coordinates and other props.
: since 5.10

bool[] GetNakedEdgePointStatus()
: Returns an array of bool values equal in length to the number of vertices in this
     mesh. Each value corresponds to a mesh vertex and is set to True if the vertex is
     not completely surrounded by faces.
: Returns - An array of true/False flags that, at each index, reveals if the corresponding
     vertex is completely surrounded by faces.

[Polyline](/rhinocommon/rhino/geometry/polyline/)[] GetNakedEdges()
: Returns all edges of a mesh that are considered "naked" in the
     sense that the edge only has one face.
: Returns - An array of polylines, or None on error.

int GetNgonAndFacesCount()
: Retrieves the count of items that  will provide.
: Returns - The amount of faces that are not part of an ngon + the amount of ngons.
: since 6.0

IEnumerable<MeshNgon> GetNgonAndFacesEnumerable()
: Retrieves a complete enumerable, i.e., one that provides an iterator over every face that is present,
     no matter if defined as a triangle, a quad, or a strictly over-four-sided ngon.
: Returns - The enumerator capable of enumerating through Mesh.Ngons> Mesh.Ngons and Faces
: since 6.0

[Polyline](/rhinocommon/rhino/geometry/polyline/)[] GetOutlines(Plane plane)
: Constructs the outlines of a mesh projected against a plane.
: Returns - An array of polylines, or None on error.

[Polyline](/rhinocommon/rhino/geometry/polyline/)[] GetOutlines(RhinoViewport viewport)
: Constructs the outlines of a mesh. The projection information in the
     viewport is used to determine how the outlines are projected.
: Returns - An array of polylines, or None on error.

[Polyline](/rhinocommon/rhino/geometry/polyline/)[] GetOutlines(ViewportInfo viewportInfo,Plane plane)
: Constructs the outlines of a mesh.
: Returns - An array of polylines, or None on error.
: since 6.0

[MeshPart](/rhinocommon/rhino/geometry/meshpart/) GetPartition(int which)
: Retrieves a partition. See  for details.
: since 5.6

bool GetSelfIntersections(double tolerance,Polyline[] intersections,bool overlapsPolylines,Polyline[] overlapsPolylinesResult,bool overlapsMesh,Mesh overlapsMeshResult,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
: Gets the self intersections of this mesh.
: since 7.0

[MeshUnsafeLock](/rhinocommon/rhino/geometry/meshunsafelock/) GetUnsafeLock(bool writable)
: Allows to obtain unsafe pointers to the underlying unmanaged data structures of the mesh.
: Returns - A lock that needs to be released.
: since 6.0

bool HealNakedEdges(double distance)
: Attempts to "heal" naked edges in a mesh based on a given distance.  
     First attempts to move vertexes to neighboring vertexes that are within that
     distance away. Then it finds edges that have a closest point to the vertex within
     the distance and splits the edge. When it finds one it splits the edge and
     makes two new edges using that point.
: Returns - True if successful, False otherwise.
: since 6.0

bool IsManifold(bool topologicalTest,bool isOriented,bool hasBoundary)
: Gets a value indicating whether or not the mesh is manifold. 
     A manifold mesh does not have any edge that borders more than two faces.
: Returns - True if every mesh "edge" has at most two adjacent faces.

bool IsPointInside(Point3d point,double tolerance,bool strictlyIn)
: Determines if a point is inside a solid mesh.
: Returns - True if point is inside the solid mesh, False if not.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) NormalAt(int faceIndex,double t0,double t1,double t2,double t3)
: Evaluate a mesh normal at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
: Returns - A Normal vector to the mesh or Vector3d.Unset if the faceIndex is not valid or if the barycentric coordinates could not be evaluated.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) NormalAt(MeshPoint meshPoint)
: Evaluate a mesh normal at a set of barycentric coordinates.
: Returns - A Normal vector to the mesh or Vector3d.Unset if the faceIndex is not valid or if the barycentric coordinates could not be evaluated.

Mesh Offset(double distance)
: Makes a new mesh with vertices offset a distance in the opposite direction of the existing vertex normals.
     Same as Mesh.Offset(distance, false)
: Returns - A new mesh on success, or None on failure.

Mesh Offset(double distance,bool solidify)
: Makes a new mesh with vertices offset a distance in the opposite direction of the existing vertex normals.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function.
: Returns - A new mesh on success, or None on failure.

Mesh Offset(double distance,bool solidify,Vector3d direction)
: Makes a new mesh with vertices offset a distance along the direction parameter.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function.
: Returns - A new mesh on success, or None on failure.
: since 6.2

Mesh Offset(double distance,bool solidify,Vector3d direction,List<int> wallFacesOut)
: Makes a new mesh with vertices offset a distance along the direction parameter.
     Optionally, based on the value of solidify, adds the input mesh and a ribbon of faces along any naked edges.
     If solidify is False it acts exactly as the Offset(distance) function. Returns list of wall faces, i.e. the
     faces that connect original and offset mesh when solidified.
: Returns - A new mesh on success, or None on failure.
: since (unknown)

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(int faceIndex,double t0,double t1,double t2,double t3)
: Evaluates a mesh at a set of barycentric coordinates. Barycentric coordinates must 
     be assigned in accordance with the rules as defined by MeshPoint.T.
: Returns - A Point on the mesh or Point3d.Unset if the faceIndex is not valid or if the barycentric coordinates could not be evaluated.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(MeshPoint meshPoint)
: Evaluate a mesh at a set of barycentric coordinates.
: Returns - A Point on the mesh or Point3d.Unset if the faceIndex is not valid or if the barycentric coordinates could not be evaluated.

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) PullCurve(Curve curve,double tolerance)
: Gets a polyline approximation of the input curve and then moves its control points to the closest point on the mesh.
     Then it "connects the points" over edges so that a polyline on the mesh is formed.
: Returns - A polyline curve, or None if none could be constructed.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] PullPointsToMesh(IEnumerable<Point3d> points)
: Pulls a collection of points to a mesh.
: Returns - An array of points. This can be empty.

Mesh QuadRemesh(QuadRemeshParameters parameters)
: Quad remesh this mesh
: since 7.0

Mesh QuadRemesh(QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves)
: Quad remesh this mesh
: since 7.0

Task<Mesh> QuadRemeshAsync(IEnumerable<int> faceBlocks,QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
: Quad remesh this mesh async
: since 7.0

Task<Mesh> QuadRemeshAsync(QuadRemeshParameters parameters,IEnumerable<Curve> guideCurves,IProgress<int> progress,CancellationToken cancelToken)
: Quad remesh this mesh async
: since 7.0

Task<Mesh> QuadRemeshAsync(QuadRemeshParameters parameters,IProgress<int> progress,CancellationToken cancelToken)
: Quad remesh this mesh async
: since 7.0

void RebuildNormals()
: Removes mesh normals and reconstructs the face and vertex normals based
     on the orientation of the faces.
: since 6.0

bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 5.10

bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,bool threaded)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 6.15

bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,CancellationToken cancelToken,IProgress<double> progress,string problemDescription)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 6.0

bool Reduce(int desiredPolygonCount,bool allowDistortion,int accuracy,bool normalizeSize,CancellationToken cancelToken,IProgress<double> progress,string problemDescription,bool threaded)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 6.15

bool Reduce(ReduceMeshParameters parameters)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 6.0

bool Reduce(ReduceMeshParameters parameters,bool threaded)
: Reduce polygon count
: Returns - True if mesh is successfully reduced and False if mesh could not be reduced for some reason.
: since 6.15

void ReleaseUnsafeLock(MeshUnsafeLock meshData)
: Updates the Mesh data with the information that was stored via the .
: since (unknown)

void SetCachedTextureCoordinates(TextureMapping tm,Transform xf)
: Set cached texture coordinates using the specified mapping.
: since 5.10

void SetTextureCoordinates(TextureMapping tm,Transform xf,bool lazy)
: Set texture coordinates using given mapping and applying given transform.
     
     Set lazy to False to generate texture coordinates right away.
: since 6.0

bool Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
: Smooths a mesh by averaging the positions of mesh vertices in a specified region.
: Returns - True if successful, False otherwise.
: since 6.0

bool Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
: Smooths a mesh by averaging the positions of mesh vertices in a specified region.
: Returns - True if successful, False otherwise.
: since 6.0

bool Smooth(IEnumerable<int> vertexIndices,double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
: Smooths part of a mesh by averaging the positions of mesh vertices in a specified region.
: Returns - True if successful, False otherwise.
: since 6.8

int SolidOrientation()
: Determines orientation of a "solid" mesh.
: Returns - +1 = mesh is solid with outward facing normals.-1 = mesh is solid with inward facing normals.0 = mesh is not solid.

Mesh[] Split(IEnumerable<Mesh> meshes)
: Split a mesh with a collection of meshes.
     Does not split at coplanar intersections.
: Returns - An array of mesh segments representing the split result.

Mesh[] Split(IEnumerable<Mesh> meshes,double tolerance,bool splitAtCoplanar,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
: Split a mesh with a collection of meshes.
: Returns - An array of mesh parts representing the split result, or null: when no mesh intersected, or if a cancel stopped the computation.
: since 7.0

Mesh[] Split(Mesh mesh)
: Split a mesh with another mesh.
: Returns - An array of mesh segments representing the split result.

Mesh[] Split(Plane plane)
: Split a mesh by an infinite plane.
: Returns - A new mesh array with the split result. This can be None if no result was found.

Mesh[] SplitDisjointPieces()
: Splits up the mesh into its unconnected pieces.
: Returns - An array containing all the disjoint pieces that make up this Mesh.

Mesh[] SplitWithProjectedPolylines(IEnumerable<PolylineCurve> curves,double tolerance)
: Splits a mesh by adding edges in correspondance with input polylines, and divides the mesh at partitioned areas.
     Polyline segments that are measured not to be on the mesh will be ignored.
: Returns - An array of meshes, or None if no change would happen.
: since 7.0

Mesh[] SplitWithProjectedPolylines(IEnumerable<PolylineCurve> curves,double tolerance,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
: Splits a mesh by adding edges in correspondance with input polylines, and divides the mesh at partitioned areas.
     Polyline segments that are measured not to be on the mesh will be ignored.
: Returns - An array of meshes, or None if no change would happen.
: since 7.0

int UnifyNormals()
: Attempts to fix inconsistencies in the directions of mesh faces in a mesh. This function
     does not modify mesh vertex normals, it rearranges the mesh face winding and face
     normals to make them all consistent. Note, you may want to call Mesh.Normals.ComputeNormals()
     to recompute vertex normals after calling this functions.
: Returns - number of faces that were modified.

int UnifyNormals(bool countOnly)
: Attempts to fix inconsistencies in the directions of mesh faces in a mesh. This function
     does not modify mesh vertex normals, it rearranges the mesh face winding and face
     normals to make them all consistent. Note, you may want to call Mesh.Normals.ComputeNormals()
     to recompute vertex normals after calling this functions.
: Returns - If countOnly=false, the number of faces that were modified. If countOnly=true, the number of faces that would be modified.
: since 6.0

void Unweld(double angleToleranceRadians,bool modifyNormals)
: Makes sure that faces sharing an edge and having a difference of normal greater
     than or equal to angleToleranceRadians have unique vertexes along that edge,
     adding vertices if necessary.

bool UnweldEdge(IEnumerable<int> edgeIndices,bool modifyNormals)
: Adds creases to a smooth mesh by creating coincident vertices along selected edges.
: Returns - True if successful, False otherwise.
: since 6.3

double Volume()
: Compute volume of the mesh.
: Returns - Volume of the mesh.
: since 6.0

void Weld(double angleToleranceRadians)
: Makes sure that faces sharing an edge and having a difference of normal greater
     than or equal to angleToleranceRadians share vertexes along that edge, vertex normals
     are averaged.

Mesh WithDisplacement(MeshDisplacementInfo displacement)
: Constructs new mesh from the current one, with displacement applied to it.
: Returns - A new mesh with shutlining.
: since 6.0

Mesh WithEdgeSoftening(double softeningRadius,bool chamfer,bool faceted,bool force,double angleThreshold)
: Constructs new mesh from the current one, with edge softening applied to it.
: Returns - A new mesh with soft edges.
: since 6.0

Mesh WithShutLining(bool faceted,double tolerance,IEnumerable<ShutLiningCurveInfo> curves)
: Constructs new mesh from the current one, with shut lining applied to it.
: Returns - A new mesh with shutlining. Null on failure.
: since 6.0
