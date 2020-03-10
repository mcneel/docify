---
title: "Rhino.Geometry.Matrix"
date: 2020-03-10 09:24:55Z
draft: false
---

## static *
- (summary) 
     Multiplies two matrices and returns a new product matrix.
     
- (since) 5.0
## static +
- (summary) 
     Adds two matrices and returns a new sum matrix.
     
- (since) (unknown)
# Constructors
## Rhino.Geometry.Matrix(int rowCount,int columnCount)
- (summary) 
     Initializes a new instance of the matrix.
     
- (since) 5.0
## Rhino.Geometry.Matrix(Transform xform)
- (summary) 
     Initializes a new instance of the matrix based on a 4x4 matrix .
     
- (since) 5.0
# Properties
## int ColumnCount
- (summary) 
     Gets the amount of columns.
     
- (since) 5.0
## bool IsColumnOrthogonal
- (summary) 
     Gets a value indicating whether the matrix is column orthogonal.
     
- (since) 5.0
## bool IsColumnOrthoNormal
- (summary) 
     Gets a value indicating whether the matrix is column orthonormal.
     
- (since) 5.0
## bool IsRowOrthogonal
- (summary) 
     Gets a value indicating whether the matrix is row orthogonal.
     
- (since) 5.0
## bool IsRowOrthoNormal
- (summary) 
     Gets a value indicating whether the matrix is row orthonormal.
     
- (since) 5.0
## bool IsSquare
- (summary) 
     Gets a value indicating whether this matrix has the same number of rows
     and columns. 0x0 matrices are not considered square.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value indicating whether this matrix is valid.
     
- (since) 5.0
## int RowCount
- (summary) 
     Gets the amount of rows.
     
- (since) 5.0
# Methods
## double[] BackSolve(double zeroTolerance,double[] b)
- (summary) 
     Solves M*x=b where M is upper triangular with a unit diagonal and
     b is a column of values.
     
- (since) 5.0
- (returns) double[] This is some return comment
## Point3d[] BackSolvePoints(double zeroTolerance,Point3d[] b)
- (summary) 
     Solves M*x=b where M is upper triangular with a unit diagonal and
     b is a column of 3d points.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## Matrix Duplicate()
- (summary) 
     Create a duplicate of this matrix.
     
- (since) 5.1
- (returns) Matrix This is some return comment
## int GetHashCode()
- (summary) 
     Gets the hash code for this matrix. The hash code will change 
     when the matrix changes so you cannot change matrices while they are stored in 
     hash tables.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool Invert(double zeroTolerance)
- (summary) 
     Modifies this matrix to become its own inverse.
     Matrix might be non-invertible (singular) and the return value will be false.
- (since) 5.0
- (returns) bool This is some return comment
## int RowReduce(double zeroTolerance,double determinant,double pivot)
- (summary) Row reduces a matrix to calculate rank and determinant.
- (since) 5.0
- (returns) int This is some return comment
## int RowReduce(double zeroTolerance,double[] b,double pivot)
- (summary) 
     Row reduces a matrix as the first step in solving M*X=b where
     b is a column of values.
     
- (since) 5.0
- (returns) int This is some return comment
## int RowReduce(double zeroTolerance,Point3d[] b,double pivot)
- (summary) 
     Row reduces a matrix as the first step in solving M*X=b where
     b is a column of 3d points.
     
- (since) 5.0
- (returns) int This is some return comment
## void Scale(double s)
- (summary) 
     Modifies the current matrix by multiplying its values by a number.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetDiagonal(double d)
- (summary) 
     Sets diagonal value and zeros off all non-diagonal values.
     
- (since) 5.0
- (returns) void This is some return comment
## bool SwapColumns(int columnA,int columnB)
- (summary) 
     Exchanges two columns.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SwapRows(int rowA,int rowB)
- (summary) 
     Exchanges two rows.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Transpose()
- (summary) 
     Modifies this matrix to be its transpose.
     This is like swapping rows with columns.http://en.wikipedia.org/wiki/Transpose
- (since) 5.0
- (returns) bool This is some return comment
## void Zero()
- (summary) 
     Sets all values inside the matrix to zero.
     
- (since) 5.0
- (returns) void This is some return comment
