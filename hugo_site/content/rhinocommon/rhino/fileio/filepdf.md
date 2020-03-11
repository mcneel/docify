---
title: "FilePdf"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Support for PDF file format
```cs
public class FilePdf
```

static PreWrite
: Fired immediately before a Pdf is written
: since 6.0
## Methods

static FilePdf Create()
: Create a new instance of a FilePdf class
: since 6.0

int AddPage(int widthInDots,int heightInDots,int dotsPerInch)
: Add a blank page to this document
: Returns - page number on success
: since 6.5

int AddPage(ViewCaptureSettings settings)
: Add a new page to this document and draw a viewport into it based on
     provided ViewCaptureSettings
: Returns - page number on success
: since 6.0

void DrawBitmap(int pageNumber,Bitmap bitmap,float left,float top,float width,float height,float rotationInDegrees)
: Draw a bitmap
: since 6.5

void DrawLine(int pageNumber,PointF from,PointF to,Color strokeColor,float strokeWidth)
: Draw a line
: since 6.5

void DrawPolyline(int pageNumber,PointF[] polyline,Color fillColor,Color strokeColor,float strokeWidth)
: Draw a polyline path
: since 6.5

void DrawText(int pageNumber,string text,double x,double y,float heightPoints,Font onfont,Color fillColor,Color strokeColor,float strokeWidth,float angleDegrees,TextHorizontalAlignment horizontalAlignment,TextVerticalAlignment verticalAlignment)
: Draw text on a page
: since 6.5

object PdfDocumentImplementation()
: Get actual implementation of PdfDocument class
: since 6.0

void Write(Stream stream)
: Write pdf to a stream
: since 6.0

void Write(string filename)
: Write pdf to a file
: since 6.0
