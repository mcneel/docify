---
title: "PlugInInfo"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.PlugIns](../)*

Contains detailed information about a Rhino plug-in.
```cs
public class PlugInInfo
```
## Properties

string Address
: Returns the address of the organization or company that created the plug-in.
: since 6.0

string[] CommandNames
: Returns a plug-in's English command names.
: since 6.0

string Country
: Returns the country of the organization or company that created the plug-in.
: since 6.0

string Description
: Returns the plug-in's description.
: since 6.0

string Email
: Returns the email address of the organization or company that created the plug-in.
: since 6.0

string Fax
: Returns the fax number of the organization or company that created the plug-in.
: since 6.0

string FileName
: Returns the plug-in's file name.
: since 6.0

string[] FileTypeDescriptions
: Returns the description of supported file types for file import and file export plug-in.
: since 6.0

string[] FileTypeExtensions
: Returns the file types extensions supported for file import and file export plug-in.
: since 7.0

Guid Id
: Returns the plug-in's Id.
: since 6.0

bool IsDotNet
: Returns True if the plug-in is based on .NET, False otherwise.
: since 6.0

bool IsLoaded
: Returns True if the plug-in is loaded, False otherwise.
: since 6.0

string Name
: Returns the plug-in's name.
: since 6.0

string Organization
: Returns the organization or company that created the plug-in.
: since 6.0

string Phone
: Returns the phone number of the organization or company that created the plug-in.
: since 6.0

[PlugInLoadTime](/rhinocommon/rhino/plugins/pluginloadtime/) PlugInLoadTime
: Returns the plug-in's load time.
: since 6.0

[PlugInType](/rhinocommon/rhino/plugins/plugintype/) PlugInType
: Returns the plug-in type.
: since 6.0

string RegistryPath
: Returns the plug-in's Windows Registry path.
: since 6.0

bool ShipsWithRhino
: Returns True if the plug-in ships with Rhino, False otherwise.
: since 6.0

string UpdateUrl
: Returns the web site, or url, were an updated version of the plug-in can be found.
: since 6.0

string Version
: Returns the plug-in's version.
: since 6.0

string WebSite
: Returns the web site, or url, of the organization or company that created the plug-in.
: since 6.0
## Methods

System.Drawing.Bitmap Icon(Size size)
: Returns the plug-in's icon in bitmap form.
: since 6.0

bool IsLoadProtected(bool loadSilently)
: Returns the load protection state for a plug-in
: Returns - True if the plug-in is load protected, False otherwise.
: since 6.0
