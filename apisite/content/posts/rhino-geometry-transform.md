---
title: "Rhino.Geometry.Transform"
draft: false
---

## static !=
- (summary) 
     Determines if two transformations are different in value.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies (combines) two transformations.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a transformation by a point and gets a new point.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a transformation by a vector and gets a new vector.
     
- (since) 5.0
## static ==
- (summary) 
     Determines if two transformations are equal in value.
     
- (since) 5.0
# Constructors
## Rhino.Geometry.Transform(double diagonalValue)
- (summary) 
     Initializes a new transform matrix with a specified value along the diagonal.
     
- (since) 5.0
## Rhino.Geometry.Transform(Transform value)
- (summary) 
     Initializes a new transform matrix with a specified value.
     
- (since) 6.0
# Properties
## static Transform Identity
- (summary) 
     Gets a new identity transform matrix. An identity matrix defines no transformation.
     
- (since) 5.0
## static Transform Unset
- (summary) 
     Gets an XForm filled with RhinoMath.UnsetValue.
     
- (since) 5.0
## static Transform ZeroTransformation
- (summary) 
     ZeroTransformation diagonal = (0,0,0,1)
     
- (since) 6.1
## double Determinant
- (summary) 
     The determinant of this 4x4 matrix.
     
- (since) 5.0
## bool IsAffine
- (summary) 
     Tests for an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     
- (since) 6.12
## bool IsIdentity
- (summary) Return True if this Transform is the identity transform
- (since) 6.0
## bool IsLinear
- (summary) 
     Tests for a linear transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     
- (since) 6.12
## bool IsRotation
- (summary) 
     Returns True if this is a proper rotation. 
     
- (since) 6.12
## bool IsValid
- (summary) 
     Gets a value indicating whether or not this Transform is a valid matrix. 
     A valid transform matrix is not allowed to have any invalid numbers.
     
- (since) 5.0
## bool IsZero
- (summary) 
     True if matrix is Zero4x4, ZeroTransformation, or some other type of
     zero.The value xform[3][3] can be anything.
     
- (since) 6.1
## bool IsZero4x4
- (summary) 
     True if all values are 0
     
- (since) 6.1
## bool IsZeroTransformation
- (summary) 
     True if all values are 0 and M33 is 1
     
- (since) 6.1
## double M00
- (summary) Gets or sets this[0,0].
- (since) 5.0
## double M01
- (summary) Gets or sets this[0,1].
- (since) 5.0
## double M02
- (summary) Gets or sets this[0,2].
- (since) 5.0
## double M03
- (summary) Gets or sets this[0,3].
- (since) 5.0
## double M10
- (summary) Gets or sets this[1,0].
- (since) 5.0
## double M11
- (summary) Gets or sets this[1,1].
- (since) 5.0
## double M12
- (summary) Gets or sets this[1,2].
- (since) 5.0
## double M13
- (summary) Gets or sets this[1,3].
- (since) 5.0
## double M20
- (summary) Gets or sets this[2,0].
- (since) 5.0
## double M21
- (summary) Gets or sets this[2,1].
- (since) 5.0
## double M22
- (summary) Gets or sets this[2,2].
- (since) 5.0
## double M23
- (summary) Gets or sets this[2,3].
- (since) 5.0
## double M30
- (summary) Gets or sets this[3,0].
- (since) 5.0
## double M31
- (summary) Gets or sets this[3,1].
- (since) 5.0
## double M32
- (summary) Gets or sets this[3,2].
- (since) 5.0
## double M33
- (summary) Gets or sets this[3,3].
- (since) 5.0
## TransformRigidType RigidType
- (summary) 
     Gets a value indicating whether or not the Transform is rigid. 
     A rigid transformation can be broken into  a proper rotation and a translation,
     while an isometry transformation could also include a reflection.
     
- (since) 6.12
## TransformSimilarityType SimilarityType
- (summary) 
     Gets a value indicating whether or not the Transform maintains similarity. 
     The easiest way to think of Similarity is that any circle, when transformed, 
     remains a circle. Whereas a non-similarity Transform deforms circles into ellipses.
     
- (since) 5.0
# Methods
## static Transform ChangeBasis(Plane plane0,Plane plane1)
- (summary) 
     Computes a change of basis transformation. A basis change is essentially a remapping 
     of geometry from one coordinate system to another.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform ChangeBasis(Vector3d initialBasisX,Vector3d initialBasisY,Vector3d initialBasisZ,Vector3d finalBasisX,Vector3d finalBasisY,Vector3d finalBasisZ)
- (summary) 
     Computes a change of basis transformation. A basis change is essentially a remapping 
     of geometry from one coordinate system to another.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Diagonal(double d0,double d1,double d2)
- (summary) 
     Constructs a new transformation with diagonal (d0,d1,d2,1.0).
     
- (since) 6.12
- (returns) Transform This is some return comment
## static Transform Diagonal(Vector3d diagonal)
- (summary) 
     Constructs a new transformation with diagonal (d0,d1,d2,1.0).
     
- (since) 6.12
- (returns) Transform This is some return comment
## static Transform Mirror(Plane mirrorPlane)
- (summary) 
     Constructs a new Mirror transformation.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Mirror(Point3d pointOnMirrorPlane,Vector3d normalToMirrorPlane)
- (summary) 
     Create mirror transformation matrix
     The mirror transform maps a point Q to 
     Q - (2*(Q-P)oN)*N, where
     P = pointOnMirrorPlane and N = normalToMirrorPlane.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Multiply(Transform a,Transform b)
- (summary) 
     Multiplies (combines) two transformations.
     This is the same as the * operator between two transformations.
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform PlanarProjection(Plane plane)
- (summary) 
     Constructs a projection transformation.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform PlaneToPlane(Plane plane0,Plane plane1)
- (summary) 
     Create a rotation transformation that orients plane0 to plane1. If you want to orient objects from
     one plane to another, use this form of transformation.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform ProjectAlong(Plane plane,Vector3d direction)
- (summary) 
     Construct a projection onto a plane along a specific direction.
     
- (since) 6.0
- (returns) Transform This is some return comment
## static Transform Rotation(double sinAngle,double cosAngle,Vector3d rotationAxis,Point3d rotationCenter)
- (summary) 
     Constructs a new rotation transformation with specified angle, rotation center and rotation axis.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Rotation(double angleRadians,Point3d rotationCenter)
- (summary) 
     Constructs a new rotation transformation with specified angle and rotation center.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Rotation(double angleRadians,Vector3d rotationAxis,Point3d rotationCenter)
- (summary) 
     Constructs a new rotation transformation with specified angle, rotation center and rotation axis.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Rotation(Vector3d startDirection,Vector3d endDirection,Point3d rotationCenter)
- (summary) 
     Constructs a new rotation transformation with start and end directions and rotation center.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Rotation(Vector3d x0,Vector3d y0,Vector3d z0,Vector3d x1,Vector3d y1,Vector3d z1)
- (summary) 
     Constructs a transformation that maps X0 to X1, Y0 to Y1, Z0 to Z1.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform RotationZYX(double yaw,double pitch,double roll)
- (summary) 
     Create rotation transformation From Tait-Byran angles (also loosely known as Euler angles).
     
- (since) 6.11
- (returns) Transform This is some return comment
## static Transform RotationZYZ(double alpha,double beta,double gamma)
- (summary) 
     Create rotation transformation From Euler angles.
     
- (since) 6.11
- (returns) Transform This is some return comment
## static Transform Scale(Plane plane,double xScaleFactor,double yScaleFactor,double zScaleFactor)
- (summary) 
     Constructs a new non-uniform scaling transformation with a specified scaling anchor point.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Scale(Point3d anchor,double scaleFactor)
- (summary) 
     Constructs a new uniform scaling transformation with a specified scaling anchor point.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Shear(Plane plane,Vector3d x,Vector3d y,Vector3d z)
- (summary) 
     Constructs a Shear transformation.
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Translation(double dx,double dy,double dz)
- (summary) 
     Constructs a new translation (move) tranformation. 
     Right column is (dx, dy, dz, 1.0).
     
- (since) 5.0
- (returns) Transform This is some return comment
## static Transform Translation(Vector3d motion)
- (summary) 
     Constructs a new translation (move) transformation. 
     
- (since) 5.0
- (returns) Transform This is some return comment
## void Affineize()
- (summary) 
     Replaces the last row with (0 0 0 1), discarding any perspecive part of this transform
     
- (since) 6.12
- (returns) void This is some return comment
## Transform Clone()
- (summary) 
     Returns a deep copy of the transform. For languages that treat structures as value types, this can 
     be accomplished by a simple assignment.
     
- (since) 6.0
- (returns) Transform This is some return comment
## int CompareTo(Transform other)
- (summary) 
     Compares this transform with another transform.
     M33 has highest value, then M32, etc..
- (since) 5.0
- (returns) int This is some return comment
## bool DecomposeAffine(Transform linear,Vector3d translation)
- (summary) 
     Decomposes an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     Note, a perspective transformation is not affine.
     
- (since) 6.12
- (returns) bool This is some return comment
## bool DecomposeAffine(Vector3d translation,Transform linear)
- (summary) 
     Decomposes an affine transformation.
     An affine transformation can be broken into a linear transformation and a translation.
     Note, a perspective transformation is not affine.
     
- (since) 6.12
- (returns) bool This is some return comment
## bool DecomposeAffine(Vector3d translation,Transform rotation,Transform orthogonal,Vector3d diagonal)
- (summary) 
   An affine transformation can be decomposed into a Symmetric, Rotation and Translation.
     Then the Symmetric component may be further decomposed as non-uniform scale in an orthonormal
     coordinate system.
     
- (since) 6.12
- (returns) bool This is some return comment
## TransformRigidType DecomposeRigid(Vector3d translation,Transform rotation,double tolerance)
- (summary) 
     Decomposes a rigid transformation. The transfomration must be affine.
     
- (since) 6.12
- (returns) TransformRigidType This is some return comment
## TransformSimilarityType DecomposeSimilarity(Vector3d translation,double dilation,Transform rotation,double tolerance)
- (summary) 
     Decomposes a similarity transformation. The transformation must be affine.
     A similarity transformation can be broken into a sequence of a dialation, translation, rotation, and a reflection.
     
- (since) 6.12
- (returns) TransformSimilarityType This is some return comment
## bool DecomposeSymmetric(Transform matrix,Vector3d diagonal)
- (summary) 
   A Symmetric linear transformation can be decomposed A = Q * Diag * Q ^ T, where Diag is a diagonal
     transformation. Diag[i][i] is an eigenvalue of A and the i-th coulmn of Q is a corresponding
     unit length eigenvector. Note, this transformation must be Linear and Symmetric.
     
- (since) 6.12
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines if another object is a transform and its value equals this transform value.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Transform other)
- (summary) 
     Determines if another transform equals this transform value.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetEulerZYZ(double alpha,double beta,double gamma)
- (summary) 
     Find the Euler angles for a rotation transformation.
     
- (since) 6.11
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Gets a non-unique hashing code for this transform.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool GetYawPitchRoll(double yaw,double pitch,double roll)
- (summary) 
     Find the Tait-Byran angles (also loosely called Euler angles) for a rotation transformation.
     
- (since) 6.11
- (returns) bool This is some return comment
## TransformRigidType IsRigid(double tolerance)
- (summary) 
     Gets a value indicating whether or not the Transform is rigid. 
     A rigid transformation can be broken into  a proper rotation and a translation,
     while an isometry transformation could also include a reflection.
     
- (since) 6.12
- (returns) TransformRigidType This is some return comment
## TransformSimilarityType IsSimilarity(double tolerance)
- (summary) 
     Gets a value indicating whether or not the Transform maintains similarity. 
     A similarity transformation can be broken into a sequence of a dialation, translation, rotation, and a reflection.
     
- (since) 6.12
- (returns) TransformSimilarityType This is some return comment
## bool IsZeroTransformaton(double zeroTolerance)
- (summary) 
     True if all values are 0 and M33 is 1 within tolerance.
     
- (since) 6.12
- (returns) bool This is some return comment
## void Linearize()
- (summary) 
     Affineize() and replaces the last column with (0 0 0 1)^T, discarding any translation part of this transform.
     
- (since) 6.12
- (returns) void This is some return comment
## bool Orthogonalize(double tolerance)
- (summary) 
     Force the linear part of this transformation to be a rotation (or a rotation with reflection).
     Use DecomposeRigid(T,R) to find the nearest rotation.
     
- (since) 6.12
- (returns) bool This is some return comment
## float[] ToFloatArray(bool rowDominant)
- (summary) 
     Return the matrix as a linear array of 16 float values
     
- (since) 5.9
- (returns) float[] This is some return comment
## string ToString()
- (summary) 
     Returns a string representation of this transform.
     
- (since) (unknown)
- (returns) string This is some return comment
## BoundingBox TransformBoundingBox(BoundingBox bbox)
- (summary) 
     Computes a new boundingbox that is the smallest axis aligned
     boundingbox that contains the transformed result of its 8 original corner
     points.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## Point3d[] TransformList(IEnumerable<Point3d> points)
- (summary) 
     Given a list, an array or any enumerable set of points, computes a new array of tranformed points.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## Transform Transpose()
- (summary) 
     Flip row/column values
     
- (since) 5.9
- (returns) Transform This is some return comment
## bool TryGetInverse(Transform inverseTransform)
- (summary) 
     Attempts to get the inverse transform of this transform.
     
- (since) 5.0
- (returns) bool This is some return comment
