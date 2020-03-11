---
title: "RhinoMath"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino](../)*

Provides constants and static methods that are additional to
   .
```cs
public class RhinoMath
```
## Methods

static double Clamp(double value,double bound1,double bound2)
: Restricts a  to be specified within an interval of two numbers.
: Returns - The clamped value.

static int Clamp(int value,int bound1,int bound2)
: Restricts a  to be specified within an interval of two integers.
: Returns - The clamped value.

static uint CRC32(uint currentRemainder,byte[] buffer)
: Advances the cyclic redundancy check value remainder given a byte array.
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
: Returns - The new current remainder.

static uint CRC32(uint currentRemainder,double value)
: Advances the cyclic redundancy check value remainder given a .
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
: Returns - The new current remainder.

static uint CRC32(uint currentRemainder,int value)
: Advances the cyclic redundancy check value remainder given a .
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
: Returns - The new current remainder.

static bool EpsilonEquals(double x,double y,double epsilon)
: Compare two doubles for equality within some "epsilon" range
: since 5.4

static bool EpsilonEquals(float x,float y,float epsilon)
: Compare to floats for equality within some "epsilon" range
: since 5.4

static bool EvaluateNormal(int limitDirection,Vector3d ds,Vector3d dt,Vector3d dss,Vector3d dst,Vector3d dtt,Vector3d n)
: Expert tool to evaluate surface unit normal.
: Returns - True if successful, False otherwise.
: since 7.0

static bool EvaluateNormalPartials(Vector3d ds,Vector3d dt,Vector3d dss,Vector3d dst,Vector3d dtt,Vector3d ns,Vector3d nt)
: Expert tool to evaluate partial derivatives of surface unit normal.
: Returns - True if Jacobian is non-degenerate, False if Jacobian is degenerate.
: since 7.0

static string IntIndexToString(int index)
: Portrays an  index in text.
: Returns - The text representation of the int index.
: since 6.0

static bool IsValidDouble(double x)
: Determines whether a  value is valid within the RhinoCommon context.
     Rhino does not use Double.NaN by convention, so this test evaluates to True if:x is not equal to RhinoMath.UnsetValueSystem.Double.IsNaN(x) evaluates to falseSystem.Double.IsInfinity(x) evaluates to false
: Returns - True if the number if valid, False if the number is NaN, Infinity or Unset.

static bool IsValidSingle(float x)
: Determines whether a  value is valid within the RhinoCommon context.
     Rhino does not use Single.NaN by convention, so this test evaluates to True if:x is not equal to RhinoMath.UnsetValue,System.Single.IsNaN(x) evaluates to falseSystem.Single.IsInfinity(x) evaluates to false
: Returns - True if the number if valid, False if the number is NaN, Infinity or Unset.

static double ParseNumber(string expression)
: Evaluates command line math expression.
: Returns - result
: since 6.0

static double ToDegrees(double radians)
: Convert an angle from radians to degrees.

static double ToRadians(double degrees)
: Convert an angle from degrees to radians.

static bool TryParseNumber(string expression,double result)
: Evaluates command line math expression.
: Returns - True if successfull otherwise false
: since 6.0

static double UnitScale(UnitSystem from,UnitSystem to)
: Computes the scale factor for changing the measurements unit systems.
: Returns - A scale multiplier.
