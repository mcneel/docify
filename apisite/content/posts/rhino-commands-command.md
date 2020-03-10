---
title: "Rhino.Commands.Command"
draft: false
---

# Events
## static BeginCommand
- (summary) 
     Called just before command.RunCommand().
     
- (since) 5.0
## static EndCommand
- (summary) 
     Called immediately after command.RunCommand().
     
- (since) 5.0
## static UndoRedo
- (summary) 
     Used to monitor Rhino's built in undo/redo support.
     
- (since) 5.0
# Properties
## static Guid LastCommandId
- (summary) 
     Gets the ID of the last commands.
     
- (since) 5.0
## static Result LastCommandResult
- (summary) 
     Gets the result code of the last command.
     
- (since) 5.0
## string EnglishName
- (summary) 
     Gets the name of the command.
     This method is abstract.
     
- (since) 5.0
## Guid Id
- (summary) 
     Gets the  unique ID of this command. It is best to use a Guid
     attribute for each custom derived command class since this will
     keep the id consistent between sessions of Rhino
     GuidAttribute
- (since) 5.0
## string LocalName
- (summary) 
     Gets the local name of the command.
     
- (since) 5.0
## PlugIns.PlugIn PlugIn
- (summary) 
     Gets the plug-in where this commands is placed.
     
- (since) 5.0
## PersistentSettings Settings
- (summary) 
     Gets the settings of the command.
     
- (since) 5.0
# Methods
## static void DisplayHelp(Guid commandId)
- (summary) 
     Displays help for a command.
     
- (since) 5.0
- (returns) void This is some return comment
## static string[] GetCommandNames(bool english,bool loaded)
- (summary) 
     Gets list of command names in Rhino. This list does not include Test, Alpha, or System commands.
     
- (since) 5.0
- (returns) string[] This is some return comment
## static Guid[] GetCommandStack()
- (summary) 
     Determines if Rhino is currently running a command. Because Rhino allow for transparent commands
     (commands that can be run from inside of other commands), this method returns the total ids of
     active commands.
     
- (since) 5.0
- (returns) Guid[] This is some return comment
## static MostRecentCommandDescription[] GetMostRecentCommands()
- (summary) 
     Gets an array of most recent command descriptions.
     
- (since) 5.0
- (returns) MostRecentCommandDescription[] This is some return comment
## static bool InCommand()
- (summary) 
     Determines if Rhino is currently running a command.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool InScriptRunnerCommand()
- (summary) 
     This is a low level tool to determine if Rhino is currently running
     a script running command like "ReadCommandFile" or the RhinoScript
     plug-in's "RunScript".
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool IsCommand(string name)
- (summary) 
     Determines is a string is a command.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool IsValidCommandName(string name)
- (summary) 
     Determines if a string is a valid command name.
     
- (since) 5.0
- (returns) bool This is some return comment
## static Guid LookupCommandId(string name,bool searchForEnglishName)
- (summary) 
     Returns the ID of a command.
     
- (since) 5.0
- (returns) Guid This is some return comment
## static string LookupCommandName(Guid commandId,bool englishName)
- (summary) 
     Returns the command name given a command ID.
     
- (since) 5.0
- (returns) string This is some return comment
## static void RunProxyCommand(RunCommandDelegate commandCallback,RhinoDoc doc,object data)
- (summary) 
     Execute some code as if it were running in a command
     
- (since) 6.13
- (returns) void This is some return comment
