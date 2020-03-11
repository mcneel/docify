---
title: "CommandStyleAttribute"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Commands](../)*

Decorates commands to provide styles.
```cs
[AttributeUsage(AttributeTargets.Class)]
public class CommandStyleAttribute : Attribute
```
## Constructors

CommandStyleAttribute(Style styles)
: Initializes a new command style attribute class.
## Properties

[Style](/rhinocommon/rhino/commands/style/) Styles
: Gets the associated style.
