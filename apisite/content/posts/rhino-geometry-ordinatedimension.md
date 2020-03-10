---
title: "OrdinateDimension"
draft: false
---

*Namespace: Rhino.Geometry*
 Represents an ordinate dimension 
## Constructors
#### Rhino.Geometry.OrdinateDimension()
- (summary) 
- (since) 6.0
## Properties
#### Point2d DefPoint
- (summary) 
- (since) 6.0
#### double KinkOffset1
- (summary) 
- (since) 6.0
#### double KinkOffset2
- (summary) 
- (since) 6.0
#### Point2d KinkPoint1
- (summary) 
- (since) 6.0
#### Point2d KinkPoint2
- (summary) 
- (since) 6.0
#### Point2d LeaderPoint
- (summary) 
- (since) 6.0
## Methods
#### static OrdinateDimension Create(DimensionStyle dimStyle,Plane plane,MeasuredDirection direction,Point3d basepoint,Point3d defpoint,Point3d leaderpoint,double kinkoffset1,double kinkoffset2)
- (summary) 
     Initialize Dimension parameters
     
- (since) 6.0
- (returns) OrdinateDimension This is some return comment
#### bool AdjustFromPoints(Plane plane,MeasuredDirection direction,Point3d basepoint,Point3d defpoint,Point3d leaderpoint,double kinkoffset1,double kinkoffset2)
- (summary) 
     Update Dimension geometry from point locations
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Get3dPoints(Point3d basepoint,Point3d defpoint,Point3d leaderpoint,Point3d kinkpoint1,Point3d kinkpoint2)
- (summary) 
     Get locations of dimension's 3d points
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool GetDisplayLines(DimensionStyle style,double scale,IEnumerable<Line> lines)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
#### string GetDistanceDisplayText(UnitSystem unitsystem,DimensionStyle style)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
#### bool GetTextRectangle(Point3d[] corners)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
