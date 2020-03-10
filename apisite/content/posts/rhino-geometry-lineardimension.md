---
title: "Rhino.Geometry.LinearDimension"
draft: false
---

# Constructors
## Rhino.Geometry.LinearDimension()
- (summary) 
- (since) 5.0
## Rhino.Geometry.LinearDimension(Plane dimensionPlane,Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)
- (summary) 
- (since) 5.0
# Properties
## bool Aligned
- (summary) 
     Gets or sets a value indicating whether this annotation is aligned.
     
- (since) 5.0
## AnnotationType AnnotationType
- (summary) 
- (since) 6.0
## Point2d Arrowhead1End
- (summary) 
     Gets the arrow head end of the first extension line.
     
- (since) 5.0
## Point2d Arrowhead2End
- (summary) 
     Gets the arrow head end of the second extension line.
     
- (since) 5.0
## Point2d DimensionLinePoint
- (summary) 
     Point on annotation plane where dimension line starts
     
- (since) 6.0
## double DistanceBetweenArrowTips
- (summary) 
     Gets the distance between arrow tips.
     
- (since) 5.0
## Point2d ExtensionLine1End
- (summary) 
     End of the first extension line.
     
- (since) 5.0
## Point2d ExtensionLine2End
- (summary) 
     End of the second extension line.
     
- (since) 5.0
# Methods
## static LinearDimension Create(AnnotationType dimtype,DimensionStyle dimStyle,Plane plane,Vector3d horizontal,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint,double rotationInPlane)
- (summary) 
     Initialize Dimension parameters
     
- (since) 6.0
- (returns) LinearDimension This is some return comment
## static LinearDimension FromPoints(Point3d extensionLine1End,Point3d extensionLine2End,Point3d pointOnDimensionLine)
- (summary) 
     Initializes a new instance of the  class, based on three points.
     
- (since) 5.0
- (returns) LinearDimension This is some return comment
## bool Get3dPoints(Point3d extensionLine1End,Point3d extensionLine2End,Point3d arrowhead1End,Point3d arrowhead2End,Point3d dimlinepoint,Point3d textpoint)
- (summary)  Get locations of dimension's 3d points 
- (since) 6.0
- (returns) bool This is some return comment
## bool GetDisplayLines(DimensionStyle style,double scale,IEnumerable<Line> lines)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
## string GetDistanceDisplayText(UnitSystem unitsystem,DimensionStyle style)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## bool GetTextRectangle(Point3d[] corners)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## void SetLocations(Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)
- (summary) 
     Sets the three locations of the point, using two-dimensional points
     that refer to the plane of the annotation.
     
- (since) 5.0
- (returns) void This is some return comment
