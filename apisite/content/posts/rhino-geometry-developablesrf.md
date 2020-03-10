---
title: "Rhino.Geometry.DevelopableSrf"
draft: false
---

# Methods
## static int GetLocalDevopableRuling(NurbsCurve rail0,double t0,Interval dom0,NurbsCurve rail1,double t1,Interval dom1,double t0_out,double t1_out)
- (summary) 
     Finds minimum twist ruling between 2 curves at local domains
     
- (since) 6.0
- (returns) int This is some return comment
## static bool RulingMinTwist(NurbsCurve rail0,double t0,Interval dom0,NurbsCurve rail1,double t1,Interval dom1,double t0_out,double t1_out,double cos_twist_out)
- (summary) 
     Find a ruling from rail0(t0_out) to rail1(t1_out) that has the least twist
     across the ruling with t0_out in domain0 and t1_out in domain1.
     max_cos_twist is cos(twist) for the returned ruling
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool RulingMinTwist(NurbsCurve rail0,double t0,NurbsCurve rail1,double t1,Interval dom1,double t1_out,double cos_twist_out)
- (summary) 
     Find a ruling from rail0(t0) to rail1(t1_out) that has the least twist
     across the ruling with t1_out in domain1.
     max_cos_twist is cos(twist) for the returned ruling
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool UntwistRulings(NurbsCurve rail0,NurbsCurve rail1,IEnumerable<Point2d> rulings)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
