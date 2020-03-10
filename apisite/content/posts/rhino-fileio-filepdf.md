---
title: "Rhino.FileIO.FilePdf"
draft: false
---

## static PreWrite
- (summary) 
     Fired immediately before a Pdf is written
     
- (since) 6.0
# Methods
## static FilePdf Create()
- (summary)  Create a new instance of a FilePdf class
- (since) 6.0
- (returns) FilePdf This is some return comment
## int AddPage(int widthInDots,int heightInDots,int dotsPerInch)
- (summary) 
     Add a blank page to this document
     
- (since) 6.5
- (returns) int This is some return comment
## int AddPage(ViewCaptureSettings settings)
- (summary) 
     Add a new page to this document and draw a viewport into it based on
     provided ViewCaptureSettings
     
- (since) 6.0
- (returns) int This is some return comment
## void DrawBitmap(int pageNumber,Bitmap bitmap,float left,float top,float width,float height,float rotationInDegrees)
- (summary) 
     Draw a bitmap
     
- (since) 6.5
- (returns) void This is some return comment
## void DrawLine(int pageNumber,PointF from,PointF to,Color strokeColor,float strokeWidth)
- (summary) 
     Draw a line
     
- (since) 6.5
- (returns) void This is some return comment
## void DrawPolyline(int pageNumber,PointF[] polyline,Color fillColor,Color strokeColor,float strokeWidth)
- (summary) 
     Draw a polyline path
     
- (since) 6.5
- (returns) void This is some return comment
## void DrawText(int pageNumber,string text,double x,double y,float heightPoints,Font onfont,Color fillColor,Color strokeColor,float strokeWidth,float angleDegrees,TextHorizontalAlignment horizontalAlignment,TextVerticalAlignment verticalAlignment)
- (summary) 
     Draw text on a page
     
- (since) 6.5
- (returns) void This is some return comment
## object PdfDocumentImplementation()
- (summary) 
     Get actual implementation of PdfDocument class
     
- (since) 6.0
- (returns) object This is some return comment
## void Write(Stream stream)
- (summary)  Write pdf to a stream 
- (since) 6.0
- (returns) void This is some return comment
## void Write(string filename)
- (summary)  Write pdf to a file 
- (since) 6.0
- (returns) void This is some return comment
