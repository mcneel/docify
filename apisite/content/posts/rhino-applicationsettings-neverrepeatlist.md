---
title: "Rhino.ApplicationSettings.NeverRepeatList"
draft: false
---

# Properties
## static bool UseNeverRepeatList
- (summary) 
     Only use the list if somebody modifies it via CRhinoAppSettings::SetDontRepeatCommands().
     Return value of True means CRhinoCommand don't repeat flags will be ignored and the m_dont_repeat_list
     will be used instead.  False means the individual CRhinoCommands will determine if they are repeatable.
    
- (since) 5.0
# Methods
## static string[] CommandNames()
- (summary) The list of commands to not repeat.
- (since) 5.0
- (returns) string[] This is some return comment
## static int SetList(string[] commandNames)
- (summary) Puts the command name tokens in m_dont_repeat_list.
- (since) 5.0
- (returns) int This is some return comment
