---
title: "DevelopableSrf"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Helpers for developable surface functions
```cs
public class DevelopableSrf
```
## Methods

static int GetLocalDevopableRuling(NurbsCurve rail0,double t0,Interval dom0,NurbsCurve rail1,double t1,Interval dom1,double t0_out,double t1_out)
: Finds minimum twist ruling between 2 curves at local domains
: Returns - -1: Error
      0: Exact non-twisting ruling found between t0_out and t1_out
      1: Ruling found between t0_out and t1_out that has less twist 
           the ruling between t0 and t1
: since 6.0

static bool RulingMinTwist(NurbsCurve rail0,double t0,Interval dom0,NurbsCurve rail1,double t1,Interval dom1,double t0_out,double t1_out,double cos_twist_out)
: Find a ruling from rail0(t0_out) to rail1(t1_out) that has the least twist
     across the ruling with t0_out in domain0 and t1_out in domain1.
     max_cos_twist is cos(twist) for the returned ruling
: since 6.0

static bool RulingMinTwist(NurbsCurve rail0,double t0,NurbsCurve rail1,double t1,Interval dom1,double t1_out,double cos_twist_out)
: Find a ruling from rail0(t0) to rail1(t1_out) that has the least twist
     across the ruling with t1_out in domain1.
     max_cos_twist is cos(twist) for the returned ruling
: since 6.0

static bool UntwistRulings(NurbsCurve rail0,NurbsCurve rail1,IEnumerable<Point2d> rulings)
: 
: since (unknown)
