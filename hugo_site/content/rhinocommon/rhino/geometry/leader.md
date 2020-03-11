---
title: "Leader"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Leader geometry class
```cs
[Serializable]
public class Leader : AnnotationBase
```
## Constructors

Leader()
: Constructor
: since 6.0
## Properties

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) Curve
: Gets the curve used by this leader
: since 6.0

Guid LeaderArrowBlockId
: Id of the block used as the arrow for the leader when the arrow type is 'User arrow'
: since 6.0

double LeaderArrowSize
: The size of the leader arrow
: since 6.0

ArrowType LeaderArrowType
: The arrowhead type for the leader
: since 6.0

LeaderContentAngleStyle LeaderContentAngleStyle
: Angle for text of leader text
: since 6.0

LeaderCurveStyle LeaderCurveStyle
: The style of the leader curve: polyline or spline
: since 6.0

bool LeaderHasLanding
: Returns True if the leader has a landing line
: since 6.0

double LeaderLandingLength
: Gets or sets the length of the landing line
: since 6.0

TextHorizontalAlignment LeaderTextHorizontalAlignment
: Gets or sets the horizontal alignment of the leader's text
: since 6.0

TextVerticalAlignment LeaderTextVerticalAlignment
: Gets or sets the vertical alignment of the leader's text
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/)[] Points2D
: Get or set the 2d points defining the curve used by this leader
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] Points3D
: Get or set the 3d points defining the curve used by this leader
: since 6.0
## Methods

static Leader Create(string text,Plane plane,DimensionStyle dimstyle,Point3d[] points)
: Creates a Leader geometry object
: since 6.0

static Leader CreateWithRichText(string richText,Plane plane,DimensionStyle dimstyle,Point3d[] points)
: Creates a Leader geometry object
: since 6.0
