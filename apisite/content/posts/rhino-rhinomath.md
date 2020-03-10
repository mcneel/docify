---
title: "Rhino.RhinoMath"
date: 2020-03-10 09:24:55Z
draft: false
---

# Methods
## static double Clamp(double value,double bound1,double bound2)
- (summary) 
     Restricts a  to be specified within an interval of two numbers.
     
- (since) 5.0
- (returns) double This is some return comment
## static int Clamp(int value,int bound1,int bound2)
- (summary) 
     Restricts a  to be specified within an interval of two integers.
     
- (since) 5.0
- (returns) int This is some return comment
## static uint CRC32(uint currentRemainder,byte[] buffer)
- (summary) 
     Advances the cyclic redundancy check value remainder given a byte array.
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
     
- (since) 5.0
- (returns) uint This is some return comment
## static uint CRC32(uint currentRemainder,double value)
- (summary) 
     Advances the cyclic redundancy check value remainder given a .
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
     
- (since) 5.0
- (returns) uint This is some return comment
## static uint CRC32(uint currentRemainder,int value)
- (summary) 
     Advances the cyclic redundancy check value remainder given a .
     http://en.wikipedia.org/wiki/Cyclic_redundancy_check.
     
- (since) 5.0
- (returns) uint This is some return comment
## static bool EpsilonEquals(double x,double y,double epsilon)
- (summary) 
     Compare two doubles for equality within some "epsilon" range
     
- (since) 5.4
- (returns) bool This is some return comment
## static bool EpsilonEquals(float x,float y,float epsilon)
- (summary) 
     Compare to floats for equality within some "epsilon" range
     
- (since) 5.4
- (returns) bool This is some return comment
## static bool EvaluateNormal(int limitDirection,Vector3d ds,Vector3d dt,Vector3d dss,Vector3d dst,Vector3d dtt,Vector3d n)
- (summary) 
     Expert tool to evaluate surface unit normal.
     
- (since) 7.0
- (returns) bool This is some return comment
## static bool EvaluateNormalPartials(Vector3d ds,Vector3d dt,Vector3d dss,Vector3d dst,Vector3d dtt,Vector3d ns,Vector3d nt)
- (summary) 
     Expert tool to evaluate partial derivatives of surface unit normal.
     
- (since) 7.0
- (returns) bool This is some return comment
## static string IntIndexToString(int index)
- (summary) 
     Portrays an  index in text.
     
- (since) 6.0
- (returns) string This is some return comment
## static bool IsValidDouble(double x)
- (summary) 
     Determines whether a  value is valid within the RhinoCommon context.
     Rhino does not use Double.NaN by convention, so this test evaluates to True if:x is not equal to RhinoMath.UnsetValueSystem.Double.IsNaN(x) evaluates to falseSystem.Double.IsInfinity(x) evaluates to false
- (since) 5.0
- (returns) bool This is some return comment
## static bool IsValidSingle(float x)
- (summary) 
     Determines whether a  value is valid within the RhinoCommon context.
     Rhino does not use Single.NaN by convention, so this test evaluates to True if:x is not equal to RhinoMath.UnsetValue,System.Single.IsNaN(x) evaluates to falseSystem.Single.IsInfinity(x) evaluates to false
- (since) 5.0
- (returns) bool This is some return comment
## static double ParseNumber(string expression)
- (summary) 
     Evaluates command line math expression.  
     
- (since) 6.0
- (returns) double This is some return comment
## static double ToDegrees(double radians)
- (summary) 
     Convert an angle from radians to degrees.
     
- (since) 5.0
- (returns) double This is some return comment
## static double ToRadians(double degrees)
- (summary) 
     Convert an angle from degrees to radians.
     
- (since) 5.0
- (returns) double This is some return comment
## static bool TryParseNumber(string expression,double result)
- (summary) 
     Evaluates command line math expression.  
     
- (since) 6.0
- (returns) bool This is some return comment
## static double UnitScale(UnitSystem from,UnitSystem to)
- (summary) Computes the scale factor for changing the measurements unit systems.
- (since) 5.0
- (returns) double This is some return comment
