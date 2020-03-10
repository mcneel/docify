---
title: "Rhino.Geometry.Hatch"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Point3d BasePoint
- (summary) 
     Gets or sets the hatchpattern basepoint
     
- (since) 6.11
## int PatternIndex
- (summary) 
     Gets or sets the index of the pattern in the document hatch pattern table.
     
- (since) 5.0
## double PatternRotation
- (summary) 
     Gets or sets the relative rotation of the pattern.
     
- (since) 5.0
## double PatternScale
- (summary) 
     Gets or sets the scaling factor of the pattern.
     
- (since) 5.0
## Plane Plane
- (summary) 
     Gets or sets the hatch plane
     
- (since) 6.11
# Methods
## static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale)
- (summary) 
     Constructs an array of hatches from one curve.
     
- (since) 5.0
- (returns) Hatch[] This is some return comment
## static Hatch[] Create(Curve curve,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)
- (summary) 
     Constructs an array of hatches from one curve.
     
- (since) 6.0
- (returns) Hatch[] This is some return comment
## static Hatch[] Create(IEnumerable<Curve> curves,int hatchPatternIndex,double rotationRadians,double scale)
- (summary) 
     Constructs an array of hatches from a set of curves.
     
- (since) 5.0
- (returns) Hatch[] This is some return comment
## static Hatch[] Create(IEnumerable<Curve> curves,int hatchPatternIndex,double rotationRadians,double scale,double tolerance)
- (summary) 
     Constructs an array of hatches from a set of curves.
     
- (since) 6.0
- (returns) Hatch[] This is some return comment
## void CreateDisplayGeometry(HatchPattern pattern,double patternScale,Curve[] bounds,Line[] lines,Brep solidBrep)
- (summary) 
     Generate geometry that would be used to draw the hatch with a given hatch pattern
     
- (since) 5.6
- (returns) void This is some return comment
## GeometryBase[] Explode()
- (summary) 
     Decomposes the hatch pattern into an array of geometry.
     
- (since) 5.0
- (returns) GeometryBase[] This is some return comment
## Curve[] Get3dCurves(bool outer)
- (summary) 
     Gets 3d curves that define the boundaries of the hatch
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Rhino.Display.ColorGradient GetGradientFill()
- (summary) 
     Get gradient fill information for this hatch. If the "GradientType" for
     the fill is None, then this hatch doesn't have any gradient fill.
     
- (since) 7.0
- (returns) Rhino.Display.ColorGradient This is some return comment
## void ScalePattern(Transform xform)
- (summary) 
     Scale the hatch's pattern
     
- (since) 6.11
- (returns) void This is some return comment
## void SetGradientFill(ColorGradient fill)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
