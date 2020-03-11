---
title: "LOC"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Used a placeholded which is used by LocalizationProcessor application to create contextId
   mapped localized strings.
```cs
public class LOC
```
## Methods

static string COMMANDNAME(string english)
: Command names that need to be localized should call this function. The COMMANDNAME function doesn't actually
     do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COMMANDNAME and builds a record for each command
     name for the translators that can be used by developers in a commands overridden Rhino.Commands.Command.LocalName
     which should call Rhino.UI.Localization.LocalizeCommandName(EnglishName)

static [LocalizeStringPair](/rhinocommon/rhino/ui/localizestringpair/) CON(string english)
: Command option name strings that need to be localized should call this function. The CON function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.CON. The function is then replaced with a
     call to Localization.LocalizeCommandOptionName using a unique context ID.
: Returns - Returns localized string pair with both the English and local names set to the English value.

static [LocalizeStringPair](/rhinocommon/rhino/ui/localizestringpair/) CON(string english,object assemblyFromObject)
: Command option name strings that need to be localized should call this function. The CON function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.CON. The function is then replaced with a
     call to Localization.LocalizeCommandOptionName using a unique context ID.
: Returns - Returns localized string pair with both the English and local names set to the English value.

static [LocalizeStringPair](/rhinocommon/rhino/ui/localizestringpair/) COV(string english)
: Command option name strings that need to be localized should call this function. The COV function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COV. The function is then replaced with a
     call to Localization.LocalizeCommandOptionValue using a unique context ID.
: Returns - Returns localized string pair with both the English and local names set to the English value.

static [LocalizeStringPair](/rhinocommon/rhino/ui/localizestringpair/) COV(string english,object assemblyFromObject)
: Command option name strings that need to be localized should call this function. The COV function
     doesn't actually do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.COV. The function is then replaced with a
     call to Localization.LocalizeCommandOptionValue using a unique context ID.
: Returns - Returns localized string pair with both the English and local names set to the English value.

static string STR(string english)
: Strings that need to be localized should call this function. The STR function doesn't actually
     do anything but return the original string. The LocalizationProcessor application walks
     through the source code of a project and looks for LOC.STR. The function is then replaced with a
     call to Localization.LocalizeString using a unique context ID.

static string STR(string english,object assemblyOrObject)
: Similar to  function.
: Returns - English name.
