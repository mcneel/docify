---
title: "Matrix"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an arbitrarily sized matrix of double-precision
   floating point numbers. If you are working with a 4x4 matrix, then you may want
   to use the  class instead.
```cs
public class Matrix : IDisposable
```

static *
: Multiplies two matrices and returns a new product matrix.
: Returns - The product matrix.

static +
: Adds two matrices and returns a new sum matrix.
: Returns - The sum matrix.
: since (unknown)
## Constructors

Matrix(int rowCount,int columnCount)
: Initializes a new instance of the matrix.

Matrix(Transform xform)
: Initializes a new instance of the matrix based on a 4x4 matrix .
## Properties

int ColumnCount
: Gets the amount of columns.

bool IsColumnOrthogonal
: Gets a value indicating whether the matrix is column orthogonal.

bool IsColumnOrthoNormal
: Gets a value indicating whether the matrix is column orthonormal.

bool IsRowOrthogonal
: Gets a value indicating whether the matrix is row orthogonal.

bool IsRowOrthoNormal
: Gets a value indicating whether the matrix is row orthonormal.

bool IsSquare
: Gets a value indicating whether this matrix has the same number of rows
     and columns. 0x0 matrices are not considered square.

bool IsValid
: Gets a value indicating whether this matrix is valid.

int RowCount
: Gets the amount of rows.
## Methods

double[] BackSolve(double zeroTolerance,double[] b)
: Solves M*x=b where M is upper triangular with a unit diagonal and
     b is a column of values.
: Returns - Array of length ColumnCount on success. None on error.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] BackSolvePoints(double zeroTolerance,Point3d[] b)
: Solves M*x=b where M is upper triangular with a unit diagonal and
     b is a column of 3d points.
: Returns - Array of length ColumnCount on success. None on error.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

Matrix Duplicate()
: Create a duplicate of this matrix.
: Returns - An exact duplicate of this matrix.
: since 5.1

int GetHashCode()
: Gets the hash code for this matrix. The hash code will change 
     when the matrix changes so you cannot change matrices while they are stored in 
     hash tables.
: Returns - Hash code.
: since (unknown)

bool Invert(double zeroTolerance)
: Modifies this matrix to become its own inverse.
     Matrix might be non-invertible (singular) and the return value will be false.
: Returns - True if operation succeeded; otherwise false.

int RowReduce(double zeroTolerance,double determinant,double pivot)
: Row reduces a matrix to calculate rank and determinant.
: Returns - Rank of the matrix.

int RowReduce(double zeroTolerance,double[] b,double pivot)
: Row reduces a matrix as the first step in solving M*X=b where
     b is a column of values.
: Returns - Rank of the matrix.

int RowReduce(double zeroTolerance,Point3d[] b,double pivot)
: Row reduces a matrix as the first step in solving M*X=b where
     b is a column of 3d points.
: Returns - Rank of the matrix.

void Scale(double s)
: Modifies the current matrix by multiplying its values by a number.

void SetDiagonal(double d)
: Sets diagonal value and zeros off all non-diagonal values.

bool SwapColumns(int columnA,int columnB)
: Exchanges two columns.
: Returns - True if operation succeeded; otherwise false.

bool SwapRows(int rowA,int rowB)
: Exchanges two rows.
: Returns - True if operation succeeded; otherwise false.

bool Transpose()
: Modifies this matrix to be its transpose.
     This is like swapping rows with columns.http://en.wikipedia.org/wiki/Transpose
: Returns - True if operation succeeded; otherwise false.

void Zero()
: Sets all values inside the matrix to zero.
