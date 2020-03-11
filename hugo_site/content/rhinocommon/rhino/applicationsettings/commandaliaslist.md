---
title: "CommandAliasList"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.ApplicationSettings](../)*

Contains static methods and properties to access command aliases.
```cs
public class CommandAliasList
```
## Properties

static int Count
: Returns the number of command alias in Rhino.
## Methods

static bool Add(string alias,string macro)
: Adds a new command alias to Rhino.
: Returns - True if successful.

static void Clear()
: Removes all aliases from the list.

static bool Delete(string alias)
: Deletes an existing command alias from Rhino.
: Returns - True if successful.

static System.Collections.Generic.Dictionary<string, string> GetDefaults()
: Constructs a dictionary containing as keys the default names and as value the default macro.
     The returned dicionary contains a copy of the settings.
: Returns - A new dictionary with the default name/macro combinantions.

static string GetMacro(string alias)
: Returns the macro of a command alias.

static string[] GetNames()
: Returns a list of command alias names.
: Returns - An array of strings. This can be empty.

static bool IsAlias(string alias)
: Verifies that a command alias exists in Rhino.
: Returns - True if the alias exists.

static bool IsDefault()
: Computes a value indicating if the current alias list is the same as the default alias list.
: Returns - True if the current alias list is exactly equal to the default alias list; False otherwise.

static bool SetMacro(string alias,string macro)
: Modifies the macro of a command alias.
: Returns - True if successful.

static System.Collections.Generic.Dictionary<string,string> ToDictionary()
: Constructs a new dictionary that contains: as keys all names and as values all macros.
     Modifications to this dictionary do not affect any Rhino command alias.
: Returns - The new dictionary.
