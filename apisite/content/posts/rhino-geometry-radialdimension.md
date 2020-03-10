---
title: "RadialDimension"
draft: false
---

*Namespace: Rhino.Geometry*
 
   Represents a dimension of a circular entity that can be measured with radius or diameter.
   
## Constructors
#### Rhino.Geometry.RadialDimension()
- (summary) 
- (since) 6.0
## Properties
#### AnnotationType AnnotationType
- (summary) 
- (since) 6.0
#### Point2d CenterPoint
- (summary) 
- (since) 6.0
#### Point2d DimlinePoint
- (summary) 
- (since) 6.0
#### bool IsDiameterDimension
- (summary) 
     Gets a value indicating whether the value refers to the diameter, rather than the radius.
     
- (since) 5.0
#### Point2d KneePoint
- (summary) 
- (since) 6.0
#### Guid LeaderArrowBlockId
- (summary) 
- (since) 6.0
#### double LeaderArrowSize
- (summary) 
- (since) 6.0
#### DimensionStyle.ArrowType LeaderArrowType
- (summary) 
- (since) 6.0
#### DimensionStyle.LeaderCurveStyle LeaderCurveStyle
- (summary) 
- (since) 6.0
#### TextHorizontalAlignment LeaderTextHorizontalAlignment
- (summary) 
     Gets or sets the horizontal alignment of the radial dimension's text
     
- (since) 6.9
#### Point2d RadiusPoint
- (summary) 
- (since) 6.0
#### DimensionStyle.LeaderContentAngleStyle TextAngleType
- (summary) 
- (since) 6.0
#### DimensionStyle.TextLocation TextLocation
- (summary) 
- (since) 6.0
#### TextOrientation TextOrientation
- (summary) 
- (since) 6.0
## Methods
#### static RadialDimension Create(DimensionStyle dimStyle,AnnotationType dimtype,Plane plane,Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint)
- (summary) 
     Initialize Dimension parameters
     
- (since) 6.0
- (returns) RadialDimension This is some return comment
#### bool AdjustFromPoints(Plane plane,Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint,double rotationInPlane)
- (summary) 
     Update Dimension geometry from point locations
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Get3dPoints(Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint,Point3d kneepoint)
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
