---
title: "Transform"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the values in a 4x4 transform matrix.
   This is parallel to C++ ON_Xform.

static !=
: Determines if two transformations are different in value.
: Returns - True if transforms are different; otherwise false.

static *
: Multiplies (combines) two transformations.
: Returns - A transformation matrix that combines the effect of both input transformations. 
     The resulting Transform gives the same result as though you'd first apply A then B.

static *
: Multiplies a transformation by a point and gets a new point.
: Returns - The tranformed point.

static *
: Multiplies a transformation by a vector and gets a new vector.
: Returns - The tranformed vector.

static ==
: Determines if two transformations are equal in value.
: Returns - True if transforms are equal; otherwise false.
## Constructors

Transform(double diagonalValue)
: Initializes a new transform matrix with a specified value along the diagonal.

Transform(Transform value)
: Initializes a new transform matrix with a specified value.
: since 6.0
## Properties

static Transform Identity
: Gets a new identity transform matrix. An identity matrix defines no transformation.

static Transform Unset
: Gets an XForm filled with RhinoMath.UnsetValue.

static Transform ZeroTransformation
: ZeroTransformation diagonal = (0,0,0,1)
: since 6.1

double Determinant
: The determinant of this 4x4 matrix.

bool IsAffine
: Tests for an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
: since 6.12

bool IsIdentity
: Return True if this Transform is the identity transform
: since 6.0

bool IsLinear
: Tests for a linear transformation.
     An affine transformation can be broken into a linear transformation and a translation.
: since 6.12

bool IsRotation
: Returns True if this is a proper rotation.
: since 6.12

bool IsValid
: Gets a value indicating whether or not this Transform is a valid matrix. 
     A valid transform matrix is not allowed to have any invalid numbers.

bool IsZero
: True if matrix is Zero4x4, ZeroTransformation, or some other type of
     zero.The value xform[3][3] can be anything.
: since 6.1

bool IsZero4x4
: True if all values are 0
: since 6.1

bool IsZeroTransformation
: True if all values are 0 and M33 is 1
: since 6.1

double M00
: Gets or sets this[0,0].

double M01
: Gets or sets this[0,1].

double M02
: Gets or sets this[0,2].

double M03
: Gets or sets this[0,3].

double M10
: Gets or sets this[1,0].

double M11
: Gets or sets this[1,1].

double M12
: Gets or sets this[1,2].

double M13
: Gets or sets this[1,3].

double M20
: Gets or sets this[2,0].

double M21
: Gets or sets this[2,1].

double M22
: Gets or sets this[2,2].

double M23
: Gets or sets this[2,3].

double M30
: Gets or sets this[3,0].

double M31
: Gets or sets this[3,1].

double M32
: Gets or sets this[3,2].

double M33
: Gets or sets this[3,3].

[TransformRigidType](/rhinocommon/rhino/geometry/transformrigidtype/) RigidType
: Gets a value indicating whether or not the Transform is rigid. 
     A rigid transformation can be broken into  a proper rotation and a translation,
     while an isometry transformation could also include a reflection.
: since 6.12

[TransformSimilarityType](/rhinocommon/rhino/geometry/transformsimilaritytype/) SimilarityType
: Gets a value indicating whether or not the Transform maintains similarity. 
     The easiest way to think of Similarity is that any circle, when transformed, 
     remains a circle. Whereas a non-similarity Transform deforms circles into ellipses.
## Methods

static Transform ChangeBasis(Plane plane0,Plane plane1)
: Computes a change of basis transformation. A basis change is essentially a remapping 
     of geometry from one coordinate system to another.
: Returns - A transformation matrix which orients geometry from one coordinate system to another on success.
     Transform.Unset on failure.

static Transform ChangeBasis(Vector3d initialBasisX,Vector3d initialBasisY,Vector3d initialBasisZ,Vector3d finalBasisX,Vector3d finalBasisY,Vector3d finalBasisZ)
: Computes a change of basis transformation. A basis change is essentially a remapping 
     of geometry from one coordinate system to another.
: Returns - A transformation matrix which orients geometry from one coordinate system to another on success.
     Transform.Unset on failure.

static Transform Diagonal(double d0,double d1,double d2)
: Constructs a new transformation with diagonal (d0,d1,d2,1.0).
: Returns - A transformation with diagonal (d0,d1,d2,1.0).
: since 6.12

static Transform Diagonal(Vector3d diagonal)
: Constructs a new transformation with diagonal (d0,d1,d2,1.0).
: Returns - A transformation with diagonal (d0,d1,d2,1.0).
: since 6.12

static Transform Mirror(Plane mirrorPlane)
: Constructs a new Mirror transformation.
: Returns - A transformation matrix which mirrors geometry in a specified plane.

static Transform Mirror(Point3d pointOnMirrorPlane,Vector3d normalToMirrorPlane)
: Create mirror transformation matrix
     The mirror transform maps a point Q to 
     Q - (2*(Q-P)oN)*N, where
     P = pointOnMirrorPlane and N = normalToMirrorPlane.
: Returns - A transformation matrix which mirrors geometry in a specified plane.

static Transform Multiply(Transform a,Transform b)
: Multiplies (combines) two transformations.
     This is the same as the * operator between two transformations.
: Returns - A transformation matrix that combines the effect of both input transformations. 
     The resulting Transform gives the same result as though you'd first apply B then A.

static Transform PlanarProjection(Plane plane)
: Constructs a projection transformation.
: Returns - A transformation matrix which projects geometry onto a specified plane.

static Transform PlaneToPlane(Plane plane0,Plane plane1)
: Create a rotation transformation that orients plane0 to plane1. If you want to orient objects from
     one plane to another, use this form of transformation.
: Returns - The translation transformation if successful, Transform.Unset on failure.

static Transform ProjectAlong(Plane plane,Vector3d direction)
: Construct a projection onto a plane along a specific direction.
: Returns - Projection transformation or identity transformation if projection could not be calculated.
: since 6.0

static Transform Rotation(double sinAngle,double cosAngle,Vector3d rotationAxis,Point3d rotationCenter)
: Constructs a new rotation transformation with specified angle, rotation center and rotation axis.
: Returns - A transformation matrix which rotates geometry around an anchor point.

static Transform Rotation(double angleRadians,Point3d rotationCenter)
: Constructs a new rotation transformation with specified angle and rotation center.
: Returns - A transformation matrix which rotates geometry around an anchor point.

static Transform Rotation(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
: Constructs a new rotation transformation with specified angle, rotation center and rotation axis.
: Returns - A transformation matrix which rotates geometry around an anchor point.

static Transform Rotation(Vector3d startDirection,Vector3d endDirection,Point3d rotationCenter)
: Constructs a new rotation transformation with start and end directions and rotation center.
: Returns - A transformation matrix which rotates geometry around an anchor point.

static Transform Rotation(Vector3d x0,Vector3d y0,Vector3d z0,Vector3d x1,Vector3d y1,Vector3d z1)
: Constructs a transformation that maps X0 to X1, Y0 to Y1, Z0 to Z1.
: Returns - A rotation transformation value.

static Transform RotationZYX(double yaw,double pitch,double roll)
: Create rotation transformation From Tait-Byran angles (also loosely known as Euler angles).
: Returns - A transform matrix from Tait-Byran angles.
: since 6.11

static Transform RotationZYZ(double alpha,double beta,double gamma)
: Create rotation transformation From Euler angles.
: Returns - A transform matrix from Euler angles.
: since 6.11

static Transform Scale(Plane plane,double xScaleFactor,double yScaleFactor,double zScaleFactor)
: Constructs a new non-uniform scaling transformation with a specified scaling anchor point.
: Returns - A transformation matrix which scales geometry non-uniformly.

static Transform Scale(Point3d anchor,double scaleFactor)
: Constructs a new uniform scaling transformation with a specified scaling anchor point.
: Returns - A transform matrix which scales geometry uniformly around the anchor point.

static Transform Shear(Plane plane,Vector3d x,Vector3d y,Vector3d z)
: Constructs a Shear transformation.
: Returns - A transformation matrix which shear geometry.

static Transform Translation(double dx,double dy,double dz)
: Constructs a new translation (move) tranformation. 
     Right column is (dx, dy, dz, 1.0).
: Returns - A transform matrix which moves geometry with the specified distances.

static Transform Translation(Vector3d motion)
: Constructs a new translation (move) transformation.
: Returns - A transform matrix which moves geometry along the motion vector.

void Affineize()
: Replaces the last row with (0 0 0 1), discarding any perspecive part of this transform
: since 6.12

Transform Clone()
: Returns a deep copy of the transform. For languages that treat structures as value types, this can 
     be accomplished by a simple assignment.
: Returns - A deep copy of this data structure.
: since 6.0

int CompareTo(Transform other)
: Compares this transform with another transform.
     M33 has highest value, then M32, etc..
: Returns - -1 if this < other; 0 if both are equal; 1 otherwise.

bool DecomposeAffine(Transform linear,Vector3d translation)
: Decomposes an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     Note, a perspective transformation is not affine.
: Returns - True if successful decomposition.
: since 6.12

bool DecomposeAffine(Vector3d translation,Transform linear)
: Decomposes an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     Note, a perspective transformation is not affine.
: Returns - True if successful decomposition.
: since 6.12

bool DecomposeAffine(Vector3d translation,Transform rotation,Transform orthogonal,Vector3d diagonal)
: An affine transformation can be decomposed into a Symmetric, Rotation and Translation.
     Then the Symmetric component may be further decomposed as non-uniform scale in an orthonormal
     coordinate system.
: Returns - True if successful decomposition.
: since 6.12

[TransformRigidType](/rhinocommon/rhino/geometry/transformrigidtype/) DecomposeRigid(Vector3d translation,Transform rotation,double tolerance)
: Decomposes a rigid transformation. The transfomration must be affine.
: Returns - The rigid type.
: since 6.12

[TransformSimilarityType](/rhinocommon/rhino/geometry/transformsimilaritytype/) DecomposeSimilarity(Vector3d translation,double dilation,Transform rotation,double tolerance)
: Decomposes a similarity transformation. The transformation must be affine.
     A similarity transformation can be broken into a sequence of a dialation, translation, rotation, and a reflection.
: Returns - The similarity type.
: since 6.12

bool DecomposeSymmetric(Transform matrix,Vector3d diagonal)
: A Symmetric linear transformation can be decomposed A = Q * Diag * Q ^ T, where Diag is a diagonal
     transformation. Diag[i][i] is an eigenvalue of A and the i-th coulmn of Q is a corresponding
     unit length eigenvector. Note, this transformation must be Linear and Symmetric.
: Returns - True if successful, False otherwise.
: since 6.12

bool Equals(object obj)
: Determines if another object is a transform and its value equals this transform value.
: Returns - True if obj is a transform and has the same value as this transform; otherwise, false.
: since (unknown)

bool Equals(Transform other)
: Determines if another transform equals this transform value.
: Returns - True if other has the same value as this transform; otherwise, false.

bool GetEulerZYZ(double alpha,double beta,double gamma)
: Find the Euler angles for a rotation transformation.
: Returns - If true, then RotationZYZ(alpha, beta, gamma) = R_z(alpha) * R_y(beta) * R_z(gamma)
     where R_*(angle) is rotation of angle radians about the corresponding *-world coordinate axis.
     If false, then this is not a rotation.
: since 6.11

int GetHashCode()
: Gets a non-unique hashing code for this transform.
: Returns - A number that can be used to hash this transform in a dictionary.
: since (unknown)

bool GetYawPitchRoll(double yaw,double pitch,double roll)
: Find the Tait-Byran angles (also loosely called Euler angles) for a rotation transformation.
: Returns - If true, then RotationZYX(yaw, pitch, roll) = R_z(yaw) * R_y(pitch) * R_x(roll) 
     where R_*(angle) is rotation of angle radians about the corresponding world coordinate axis.
     If false, then this is not a rotation.
: since 6.11

[TransformRigidType](/rhinocommon/rhino/geometry/transformrigidtype/) IsRigid(double tolerance)
: Gets a value indicating whether or not the Transform is rigid. 
     A rigid transformation can be broken into  a proper rotation and a translation,
     while an isometry transformation could also include a reflection.
: Returns - The rigid type.
: since 6.12

[TransformSimilarityType](/rhinocommon/rhino/geometry/transformsimilaritytype/) IsSimilarity(double tolerance)
: Gets a value indicating whether or not the Transform maintains similarity. 
     A similarity transformation can be broken into a sequence of a dialation, translation, rotation, and a reflection.
: Returns - The similarity type.
: since 6.12

bool IsZeroTransformaton(double zeroTolerance)
: True if all values are 0 and M33 is 1 within tolerance.
: Returns - Returns True if all values are 0 and M33 is 1 within tolerance.
: since 6.12

void Linearize()
: Affineize() and replaces the last column with (0 0 0 1)^T, discarding any translation part of this transform.
: since 6.12

bool Orthogonalize(double tolerance)
: Force the linear part of this transformation to be a rotation (or a rotation with reflection).
     Use DecomposeRigid(T,R) to find the nearest rotation.
: Returns - True if successful, False otherwise.
: since 6.12

float[] ToFloatArray(bool rowDominant)
: Return the matrix as a linear array of 16 float values
: since 5.9

string ToString()
: Returns a string representation of this transform.
: Returns - A textual representation.
: since (unknown)

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) TransformBoundingBox(BoundingBox bbox)
: Computes a new boundingbox that is the smallest axis aligned
     boundingbox that contains the transformed result of its 8 original corner
     points.
: Returns - A new bounding box.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] TransformList(IEnumerable<Point3d> points)
: Given a list, an array or any enumerable set of points, computes a new array of tranformed points.
: Returns - A new array.

Transform Transpose()
: Flip row/column values
: since 5.9

bool TryGetInverse(Transform inverseTransform)
: Attempts to get the inverse transform of this transform.
: Returns - True on success. 
     If False is returned and this Transform is Invalid, inserveTransform will be set to this Transform. 
     If False is returned and this Transform is Valid, inverseTransform will be set to a pseudo inverse.
