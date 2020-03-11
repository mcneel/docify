---
title: "TextLog"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Used for collecting text data
```cs
public class TextLog : IDisposable
```
## Constructors

TextLog()
: Creates a text log that stores all text in memory.  Use ToString on this
     version of the TextLog to get the text that we written
: since 5.1

TextLog(IntPtr ptr)
: 
: since 6.0

TextLog(string filename)
: Creates a text log that writes all text to a file. If no filename is
     provided, then text is written to StdOut
: since 5.1
## Properties

int IndentSize
: 0: one tab per indent. >0: number of spaces per indent
: since 5.1
## Methods

static TextLog NewCommandLine()
: Returns a reference to a TextLog that prints to the Rhino command line.
     Each new command line reference holds its own indents.
: since 7.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.1

void PopIndent()
: Decrease the indentation level
: since 5.1

void Print(string text)
: Send text to the textlog
: since 5.1

void Print(string format,object arg0)
: Send formatted text to the textlog
: since 5.1

void Print(string format,object arg0,object arg1)
: Send formatted text to the textlog
: since 5.1

void PrintWrappedText(string text,int lineLength)
: Send text wrapped at a set line length
: since 5.1

void PushIndent()
: Increase the indentation level
: since 5.1

string ToString()
: If the TextLog was constructed using the empty constructor, then the text
     information is stored in a runtime string.  The contents of this string
     is retrieved using ToString for this case
: since (unknown)
