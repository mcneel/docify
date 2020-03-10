---
title: "Rhino.UI.LOC"
date: 2020-03-10 09:24:56Z
draft: false
---

# Methods
## static string COMMANDNAME(string english)
- (summary) 
     Command names that need to be localized should call this function. The COMMANDNAME function doesn't actually
     do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COMMANDNAME and builds a record for each command
     name for the translators that can be used by developers in a commands overridden Rhino.Commands.Command.LocalName
     which should call Rhino.UI.Localization.LocalizeCommandName(EnglishName)
    
- (since) 5.0
- (returns) string This is some return comment
## static LocalizeStringPair CON(string english)
- (summary) 
     Command option name strings that need to be localized should call this function. The CON function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.CON. The function is then replaced with a
     call to Localization.LocalizeCommandOptionName using a unique context ID.
    
- (since) 5.0
- (returns) LocalizeStringPair This is some return comment
## static LocalizeStringPair CON(string english,object assemblyFromObject)
- (summary) 
     Command option name strings that need to be localized should call this function. The CON function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.CON. The function is then replaced with a
     call to Localization.LocalizeCommandOptionName using a unique context ID.
    
- (since) 5.0
- (returns) LocalizeStringPair This is some return comment
## static LocalizeStringPair COV(string english)
- (summary) 
     Command option name strings that need to be localized should call this function. The COV function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COV. The function is then replaced with a
     call to Localization.LocalizeCommandOptionValue using a unique context ID.
    
- (since) 5.0
- (returns) LocalizeStringPair This is some return comment
## static LocalizeStringPair COV(string english,object assemblyFromObject)
- (summary) 
     Command option name strings that need to be localized should call this function. The COV function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COV. The function is then replaced with a
     call to Localization.LocalizeCommandOptionValue using a unique context ID.
    
- (since) 5.0
- (returns) LocalizeStringPair This is some return comment
## static string STR(string english)
- (summary) 
     Strings that need to be localized should call this function. The STR function doesn't actually
     do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.STR. The function is then replaced with a
     call to Localization.LocalizeString using a unique context ID.
    
- (since) 5.0
- (returns) string This is some return comment
## static string STR(string english,object assemblyOrObject)
- (summary) 
     Similar to  function.
     
- (since) 5.0
- (returns) string This is some return comment
