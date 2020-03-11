---
title: "Interval"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an interval in one-dimensional space,
   that is defined as two extrema or bounds.

static -
: Shifts an interval by a specific amount (subtraction).
: Returns - A new interval with [T0-number, T1-number].

static -
: Shifts an interval by a specific amount (subtraction).
: Returns - A new interval with [number-T0, number-T1].

static !=
: Determines whether the two Intervals have different values.
: Returns - True if the two intervals are different in any value; False if they are equal.

static +
: Shifts a  by a specific amount (addition).
: Returns - A new interval where T0 and T1 are summed with number.
: since (unknown)

static +
: Shifts an interval by a specific amount (addition).
: Returns - A new interval where T0 and T1 are summed with number.
: since (unknown)

static <
: Determines whether the first specified  comes before
     (has inferior sorting value than) the second Interval.
     The lower bound has first evaluation priority.
: Returns - True if a[0] is smaller than b[0], or a[0] == b[0] and a[1] is smaller than b[1]; otherwise, false.

static <=
: Determines whether the first specified  comes before
     (has inferior sorting value than) the second Interval, or is equal to it.
     The lower bound has first evaluation priority.
: Returns - True if a[0] is smaller than b[0], or a[0] == b[0] and a[1] is smaller than or equal to b[1]; otherwise, false.

static ==
: Determines whether the two Intervals have equal values.
: Returns - True if the components of the two intervals are exactly equal; otherwise false.

static >
: Determines whether the first specified  comes after
     (has superior sorting value than) the second Interval.
     The lower bound has first evaluation priority.
: Returns - True if a[0] is larger than b[0], or a[0] == b[0] and a[1] is larger than b[1]; otherwise, false.

static >=
: Determines whether the first specified  comes after
     (has superior sorting value than) the second Interval, or is equal to it.
     The lower bound has first evaluation priority.
: Returns - True if a[0] is larger than b[0], or a[0] == b[0] and a[1] is larger than or equal to b[1]; otherwise, false.
## Constructors

Interval(double t0,double t1)
: Initializes a new instance of the Rhino.Geometry.Interval class.

Interval(Interval other)
: Initializes a new instance copying the other instance values.
## Properties

static Interval Unset
: Gets an Interval whose limits are RhinoMath.UnsetValue.

bool IsDecreasing
: Returns True if T[0] > T[1].

bool IsIncreasing
: Returns True if T0 < T1.

bool IsSingleton
: Returns True if T0 == T1 != ON.UnsetValue.

bool IsValid
: Gets a value indicating whether or not this Interval is valid. 
     Valid intervals must contain valid numbers.

double Length
: Gets the signed length of the numeric range. 
     If the interval is decreasing, a negative length will be returned.

double Max
: Gets the larger of T0 and T1.

double Mid
: Gets the average of T0 and T1.

double Min
: Gets the smaller of T0 and T1.

double T0
: Gets or sets the lower bound of the Interval.

double T1
: Gets or sets the upper bound of the Interval.
## Methods

static Interval FromIntersection(Interval a,Interval b)
: Returns a new Interval that is the Intersection of the two input Intervals.
: Returns - If the intersection is not empty, then 
     intersection = [max(a.Min(),b.Min()), min(a.Max(),b.Max())]
     The interval [ON.UnsetValue,ON.UnsetValue] is considered to be
     the empty set interval.  The result of any intersection involving an
     empty set interval or disjoint intervals is the empty set interval.

static Interval FromUnion(Interval a,Interval b)
: Returns a new Interval which contains both inputs.
: Returns - The union of an empty set and an increasing interval is the increasing interval.
     The union of two empty sets is empty.The union of an empty set an a non-empty interval is the non-empty interval.The union of two non-empty intervals is [min(a.Min(),b.Min()), max(a.Max(),b.Max())]

int CompareTo(Interval other)
: Compares this  with another interval.
     The lower bound has first evaluation priority.
: Returns - 0: if this is identical to other-1: if this[0] < other[0]+1: if this[0] > other[0]-1: if this[0] == other[0] and this[1] < other[1]+1: if this[0] == other[0] and this[1] > other[1].

bool EpsilonEquals(Interval other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(Interval other)
: Determines whether the specified  is equal to the current ,
     comparing by value.
: Returns - True if obj is an  and has the same bounds; False otherwise.

bool Equals(object obj)
: Determines whether the specified  is equal to the current ,
     comparing by value.
: Returns - True if obj is an  and has the same bounds; False otherwise.
: since (unknown)

int GetHashCode()
: Computes the hash code for this  object.
: Returns - A hash value that might be equal for two different  values.
: since (unknown)

void Grow(double value)
: Grows the  to include the given number.

bool IncludesInterval(Interval interval)
: Tests another interval for Interval inclusion.
: Returns - True if the other interval is contained within or is coincident with the limits of this Interval; otherwise false.

bool IncludesInterval(Interval interval,bool strict)
: Tests another interval for Interval inclusion.
: Returns - True if the other interval is contained within the limits of this Interval; otherwise false.

bool IncludesParameter(double t)
: Tests a parameter for Interval inclusion.
: Returns - True if t is contained within or is coincident with the limits of this Interval.

bool IncludesParameter(double t,bool strict)
: Tests a parameter for Interval inclusion.
: Returns - True if t is contained within the limits of this Interval.

void MakeIncreasing()
: Ensures this  is either singleton or increasing.

Interval NormalizedIntervalAt(Interval intervalParameter)
: Converts interval value, or pair of values, to normalized parameter.
: Returns - Normalized parameter x so that min*(1.0-x) + max*x = intervalParameter.

double NormalizedParameterAt(double intervalParameter)
: Converts interval value, or pair of values, to normalized parameter.
: Returns - Normalized parameter x so that min*(1.0-x) + max*x = intervalParameter.

double ParameterAt(double normalizedParameter)
: Converts normalized parameter to interval value, or pair of values.
: Returns - Interval parameter min*(1.0-normalizedParameter) + max*normalizedParameter.

Interval ParameterIntervalAt(Interval normalizedInterval)
: Converts normalized parameter to interval value, or pair of values.
: Returns - Interval parameter min*(1.0-normalizedParameter) + max*normalized_paramete.

void Reverse()
: Changes interval to [-T1, -T0].

void Swap()
: Exchanges T0 and T1.

string ToString()
: Returns a string representation of this .
: Returns - A string with T0,T1.
: since (unknown)
