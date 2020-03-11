---
title: "CommandLineTextWriter"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino](../)*

Provides a text writer that writes to the command line.
```cs
public class CommandLineTextWriter : System.IO.TextWriter
```
## Properties

Encoding Encoding
: Returns Encoding Unicode.
: since 6.0
## Methods

void Write(char value)
: Writes a char to the command line.
: since 6.0

void Write(char[] buffer,int index,int count)
: Writes a char buffer to the command line.
: since 6.0

void write(string str)
: Provided to give a simple way to IronPython to call this class.
: since 6.0

void Write(string value)
: Writes a string to the command line.
: since 6.0
