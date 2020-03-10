---
title: "Leader"
draft: false
---

*Namespace: Rhino.Geometry*
 Leader geometry class 
## Constructors
#### Rhino.Geometry.Leader()
- (summary)  Constructor 
- (since) 6.0
## Properties
#### NurbsCurve Curve
- (summary)  Gets the curve used by this leader 
- (since) 6.0
#### Guid LeaderArrowBlockId
- (summary) 
     Id of the block used as the arrow for the leader when the arrow type is 'User arrow'
     
- (since) 6.0
#### double LeaderArrowSize
- (summary) 
     The size of the leader arrow
     
- (since) 6.0
#### DimensionStyle.ArrowType LeaderArrowType
- (summary) 
     The arrowhead type for the leader
     
- (since) 6.0
#### DimensionStyle.LeaderContentAngleStyle LeaderContentAngleStyle
- (summary) 
     Angle for text of leader text
     
- (since) 6.0
#### DimensionStyle.LeaderCurveStyle LeaderCurveStyle
- (summary) 
     The style of the leader curve: polyline or spline
     
- (since) 6.0
#### bool LeaderHasLanding
- (summary) 
     Returns True if the leader has a landing line
     
- (since) 6.0
#### double LeaderLandingLength
- (summary) 
     Gets or sets the length of the landing line
     
- (since) 6.0
#### TextHorizontalAlignment LeaderTextHorizontalAlignment
- (summary) 
     Gets or sets the horizontal alignment of the leader's text
     
- (since) 6.0
#### TextVerticalAlignment LeaderTextVerticalAlignment
- (summary) 
     Gets or sets the vertical alignment of the leader's text
     
- (since) 6.0
#### Point2d[] Points2D
- (summary) 
     Get or set the 2d points defining the curve used by this leader
     
- (since) 6.0
#### Point3d[] Points3D
- (summary) 
     Get or set the 3d points defining the curve used by this leader
     
- (since) 6.0
## Methods
#### static Leader Create(string text,Plane plane,DimensionStyle dimstyle,Point3d[] points)
- (summary) 
      Creates a Leader geometry object
     
- (since) 6.0
- (returns) Leader This is some return comment
#### static Leader CreateWithRichText(string richText,Plane plane,DimensionStyle dimstyle,Point3d[] points)
- (summary) 
      Creates a Leader geometry object
     
- (since) 6.0
- (returns) Leader This is some return comment
