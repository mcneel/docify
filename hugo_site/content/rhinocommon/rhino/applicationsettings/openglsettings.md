---
title: "OpenGLSettings"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Static methods and properties to control OpenGL settings
```cs
public class OpenGLSettings
```
## Properties

static [AntialiasLevel](/rhinocommon/rhino/antialiaslevel/) AntialiasLevel
: Gets or sets the antialias level used by OpenGL viewports
: since 6.1
## Methods

static [OpenGLSettingsState](/rhinocommon/rhino/applicationsettings/openglsettingsstate/) GetCurrentState()
: Gets the current settings.
: Returns - A new OpenGL state with current settings.
: since 6.1

static [OpenGLSettingsState](/rhinocommon/rhino/applicationsettings/openglsettingsstate/) GetDefaultState()
: Gets the OpenGL factory settings.
: Returns - A new OpenGL state with factory settings.
: since 6.1

static void RestoreDefaults()
: Updates from the default setting state.
: since 6.1

static void UpdateFromState(OpenGLSettingsState state)
: Updates from a particular setting state.
: since 6.1
