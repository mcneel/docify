---
title: "Command"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Commands](../)*

Defines a base class for all commands. This class is abstract.
```cs
public class Command
```
## Events

static BeginCommand
: Called just before command.RunCommand().

static EndCommand
: Called immediately after command.RunCommand().

static UndoRedo
: Used to monitor Rhino's built in undo/redo support.
## Properties

static Guid LastCommandId
: Gets the ID of the last commands.

static [Result](/rhinocommon/rhino/commands/result/) LastCommandResult
: Gets the result code of the last command.

string EnglishName
: Gets the name of the command.
     This method is abstract.

Guid Id
: Gets the  unique ID of this command. It is best to use a Guid
     attribute for each custom derived command class since this will
     keep the id consistent between sessions of Rhino
     GuidAttribute

string LocalName
: Gets the local name of the command.

[PlugIn](/rhinocommon/rhino/plugins/plugin/) PlugIn
: Gets the plug-in where this commands is placed.

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) Settings
: Gets the settings of the command.
## Methods

static void DisplayHelp(Guid commandId)
: Displays help for a command.

static string[] GetCommandNames(bool english,bool loaded)
: Gets list of command names in Rhino. This list does not include Test, Alpha, or System commands.
: Returns - An array instance with command names. This array could be empty, but not null.

static Guid[] GetCommandStack()
: Determines if Rhino is currently running a command. Because Rhino allow for transparent commands
     (commands that can be run from inside of other commands), this method returns the total ids of
     active commands.
: Returns - Ids of running commands or None if no commands are currently running. 
     The "active" command is at the end of this list.

static [MostRecentCommandDescription](/rhinocommon/rhino/commands/mostrecentcommanddescription/)[] GetMostRecentCommands()
: Gets an array of most recent command descriptions.
: Returns - An array of command descriptions.

static bool InCommand()
: Determines if Rhino is currently running a command.
: Returns - True if a command is currently running, False if no commands are currently running.

static bool InScriptRunnerCommand()
: This is a low level tool to determine if Rhino is currently running
     a script running command like "ReadCommandFile" or the RhinoScript
     plug-in's "RunScript".
: Returns - True if a script running command is active.

static bool IsCommand(string name)
: Determines is a string is a command.
: Returns - True if the string is a command.

static bool IsValidCommandName(string name)
: Determines if a string is a valid command name.
: Returns - True if the string is a valid command name.

static Guid LookupCommandId(string name,bool searchForEnglishName)
: Returns the ID of a command.
: Returns - An of the command, or  on error.

static string LookupCommandName(Guid commandId,bool englishName)
: Returns the command name given a command ID.
: Returns - The command name, or None on error.

static void RunProxyCommand(RunCommandDelegate commandCallback,RhinoDoc doc,object data)
: Execute some code as if it were running in a command
: since 6.13
