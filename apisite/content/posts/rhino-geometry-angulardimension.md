---
title: "Rhino.Geometry.AngularDimension"
draft: false
---

# Constructors
## Rhino.Geometry.AngularDimension()
- (summary) 
- (since) 6.0
## Rhino.Geometry.AngularDimension(Arc arc,double offset)
- (summary) 
     Create an angular dimension from a given arc
     
- (since) 5.0
# Properties
## DimensionStyle.AngleDisplayFormat AngleFormat
- (summary) 
- (since) 6.0
## int AngleResolution
- (summary) 
- (since) 6.0
## double AngleRoundoff
- (summary) 
- (since) 6.0
## DimensionStyle.ZeroSuppression AngleZeroSuppression
- (summary) 
- (since) 6.0
## Point2d ArrowPoint1
- (summary) 
- (since) 6.0
## Point2d ArrowPoint2
- (summary) 
- (since) 6.0
## Point2d CenterPoint
- (summary) 
- (since) 6.0
## Point2d DefPoint1
- (summary) 
- (since) 6.0
## Point2d DefPoint2
- (summary) 
- (since) 6.0
## Point2d DimlinePoint
- (summary) 
- (since) 6.0
# Methods
## static AngularDimension Create(DimensionStyle dimStyle,Plane plane,Vector3d horizontal,Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint)
- (summary) 
     Initialize Dimension parameters
     
- (since) 6.0
- (returns) AngularDimension This is some return comment
## static AngularDimension Create(Guid styleId,Plane plane,Point3d extpoint1,Point3d extpoint2,Point3d dirpoint1,Point3d dirpoint2,Point3d dimlinepoint)
- (summary) 
     Initialize Dimension parameters
     
- (since) 6.0
- (returns) AngularDimension This is some return comment
## bool AdjustFromPoints(Plane plane,Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint)
- (summary) 
     Update Dimension geometry from point locations
     
- (since) 6.0
- (returns) bool This is some return comment
## bool AdjustFromPoints(Plane plane,Point3d extpoint1,Point3d extpoint2,Point3d dirpoint1,Point3d dirpoint2,Point3d dimlinepoint)
- (summary) 
     Update Dimension geometry from point locations
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Get3dPoints(Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d arrowpoint1,Point3d arrowpoint2,Point3d dimlinepoint,Point3d textpoint)
- (summary) 
     Get locations of dimension's 3d points
     
- (since) 6.0
- (returns) bool This is some return comment
## string GetAngleDisplayText(DimensionStyle style)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## bool GetDisplayLines(DimensionStyle style,double scale,Line[] lines,Arc[] arcs)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool GetTextRectangle(Point3d[] corners)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
