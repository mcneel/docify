---
title: "Rhino.FileIO.TextLog"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.FileIO.TextLog()
- (summary) 
     Creates a text log that stores all text in memory.  Use ToString on this
     version of the TextLog to get the text that we written
     
- (since) 5.1
## Rhino.FileIO.TextLog(IntPtr ptr)
- (summary) 
- (since) 6.0
## Rhino.FileIO.TextLog(string filename)
- (summary) 
     Creates a text log that writes all text to a file. If no filename is
     provided, then text is written to StdOut
     
- (since) 5.1
# Properties
## int IndentSize
- (summary) 
     0: one tab per indent. >0: number of spaces per indent
     
- (since) 5.1
# Methods
## static TextLog NewCommandLine()
- (summary) 
     Returns a reference to a TextLog that prints to the Rhino command line.
     Each new command line reference holds its own indents.
     
- (since) 7.0
- (returns) TextLog This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.1
- (returns) void This is some return comment
## void PopIndent()
- (summary) 
     Decrease the indentation level
     
- (since) 5.1
- (returns) void This is some return comment
## void Print(string text)
- (summary) 
     Send text to the textlog
     
- (since) 5.1
- (returns) void This is some return comment
## void Print(string format,object arg0)
- (summary) 
     Send formatted text to the textlog
     
- (since) 5.1
- (returns) void This is some return comment
## void Print(string format,object arg0,object arg1)
- (summary) 
     Send formatted text to the textlog
     
- (since) 5.1
- (returns) void This is some return comment
## void PrintWrappedText(string text,int lineLength)
- (summary) 
     Send text wrapped at a set line length
     
- (since) 5.1
- (returns) void This is some return comment
## void PushIndent()
- (summary) 
     Increase the indentation level
     
- (since) 5.1
- (returns) void This is some return comment
## string ToString()
- (summary) 
     If the TextLog was constructed using the empty constructor, then the text
     information is stored in a runtime string.  The contents of this string
     is retrieved using ToString for this case
     
- (since) (unknown)
- (returns) string This is some return comment
