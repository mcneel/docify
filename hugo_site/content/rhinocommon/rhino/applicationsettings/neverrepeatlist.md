---
title: "NeverRepeatList"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties relating to the list of commands that are never repeated.
```cs
public class NeverRepeatList
```
## Properties

static bool UseNeverRepeatList
: Only use the list if somebody modifies it via CRhinoAppSettings::SetDontRepeatCommands().
     Return value of True means CRhinoCommand don't repeat flags will be ignored and the m_dont_repeat_list
     will be used instead.  False means the individual CRhinoCommands will determine if they are repeatable.
## Methods

static string[] CommandNames()
: The list of commands to not repeat.

static int SetList(string[] commandNames)
: Puts the command name tokens in m_dont_repeat_list.
: Returns - Number of items added to m_dont_repeat_list.
