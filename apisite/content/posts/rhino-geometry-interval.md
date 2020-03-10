---
title: "Interval"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents an interval in one-dimensional space,
   that is defined as two extrema or bounds.
   
#### static -
- (summary) 
     Shifts an interval by a specific amount (subtraction).
     
- (since) 5.0
#### static -
- (summary) 
     Shifts an interval by a specific amount (subtraction).
     
- (since) 5.0
#### static !=
- (summary) 
     Determines whether the two Intervals have different values.
     
- (since) 5.0
#### static +
- (summary) 
     Shifts a  by a specific amount (addition).
     
- (since) (unknown)
#### static +
- (summary) 
     Shifts an interval by a specific amount (addition).
     
- (since) (unknown)
#### static <
- (summary) 
     Determines whether the first specified  comes before
     (has inferior sorting value than) the second Interval.
     The lower bound has first evaluation priority.
- (since) 5.0
#### static <=
- (summary) 
     Determines whether the first specified  comes before
     (has inferior sorting value than) the second Interval, or is equal to it.
     The lower bound has first evaluation priority.
- (since) 5.0
#### static ==
- (summary) 
     Determines whether the two Intervals have equal values.
     
- (since) 5.0
#### static >
- (summary) 
     Determines whether the first specified  comes after
     (has superior sorting value than) the second Interval.
     The lower bound has first evaluation priority.
- (since) 5.0
#### static >=
- (summary) 
     Determines whether the first specified  comes after
     (has superior sorting value than) the second Interval, or is equal to it.
     The lower bound has first evaluation priority.
- (since) 5.0
## Constructors
#### Rhino.Geometry.Interval(double t0,double t1)
- (summary) 
     Initializes a new instance of the Rhino.Geometry.Interval class.
     
- (since) 5.0
#### Rhino.Geometry.Interval(Interval other)
- (summary) 
     Initializes a new instance copying the other instance values.
     
- (since) 5.0
## Properties
#### static Interval Unset
- (summary) 
     Gets an Interval whose limits are RhinoMath.UnsetValue.
     
- (since) 5.0
#### bool IsDecreasing
- (summary)  
     Returns True if T[0] > T[1].
     
- (since) 5.0
#### bool IsIncreasing
- (summary) 
     Returns True if T0 < T1.
     
- (since) 5.0
#### bool IsSingleton
- (summary) 
     Returns True if T0 == T1 != ON.UnsetValue.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value indicating whether or not this Interval is valid. 
     Valid intervals must contain valid numbers.
     
- (since) 5.0
#### double Length
- (summary) 
     Gets the signed length of the numeric range. 
     If the interval is decreasing, a negative length will be returned.
     
- (since) 5.0
#### double Max
- (summary) 
     Gets the larger of T0 and T1.
     
- (since) 5.0
#### double Mid
- (summary) 
     Gets the average of T0 and T1.
     
- (since) 5.0
#### double Min
- (summary) 
     Gets the smaller of T0 and T1.
     
- (since) 5.0
#### double T0
- (summary) 
     Gets or sets the lower bound of the Interval.
     
- (since) 5.0
#### double T1
- (summary) 
     Gets or sets the upper bound of the Interval.
     
- (since) 5.0
## Methods
#### static Interval FromIntersection(Interval a,Interval b)
- (summary) 
     Returns a new Interval that is the Intersection of the two input Intervals.
     
- (since) 5.0
- (returns) Interval This is some return comment
#### static Interval FromUnion(Interval a,Interval b)
- (summary) 
     Returns a new Interval which contains both inputs.
     
- (since) 5.0
- (returns) Interval This is some return comment
#### int CompareTo(Interval other)
- (summary) 
     Compares this  with another interval.
     The lower bound has first evaluation priority.
- (since) 5.0
- (returns) int This is some return comment
#### bool EpsilonEquals(Interval other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(Interval other)
- (summary) 
     Determines whether the specified  is equal to the current ,
     comparing by value.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether the specified  is equal to the current ,
     comparing by value.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Computes the hash code for this  object.
     
- (since) (unknown)
- (returns) int This is some return comment
#### void Grow(double value)
- (summary) 
     Grows the  to include the given number.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool IncludesInterval(Interval interval)
- (summary) 
     Tests another interval for Interval inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IncludesInterval(Interval interval,bool strict)
- (summary) 
     Tests another interval for Interval inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IncludesParameter(double t)
- (summary) 
     Tests a parameter for Interval inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IncludesParameter(double t,bool strict)
- (summary) 
     Tests a parameter for Interval inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void MakeIncreasing()
- (summary) 
     Ensures this  is either singleton or increasing.
     
- (since) 5.0
- (returns) void This is some return comment
#### Interval NormalizedIntervalAt(Interval intervalParameter)
- (summary) Converts interval value, or pair of values, to normalized parameter.
- (since) 5.0
- (returns) Interval This is some return comment
#### double NormalizedParameterAt(double intervalParameter)
- (summary) Converts interval value, or pair of values, to normalized parameter.
- (since) 5.0
- (returns) double This is some return comment
#### double ParameterAt(double normalizedParameter)
- (summary) Converts normalized parameter to interval value, or pair of values.
- (since) 5.0
- (returns) double This is some return comment
#### Interval ParameterIntervalAt(Interval normalizedInterval)
- (summary) Converts normalized parameter to interval value, or pair of values.
- (since) 5.0
- (returns) Interval This is some return comment
#### void Reverse()
- (summary) 
     Changes interval to [-T1, -T0].
     
- (since) 5.0
- (returns) void This is some return comment
#### void Swap()
- (summary) 
     Exchanges T0 and T1.
     
- (since) 5.0
- (returns) void This is some return comment
#### string ToString()
- (summary) 
     Returns a string representation of this .
     
- (since) (unknown)
- (returns) string This is some return comment
