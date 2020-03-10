---
title: "CommandAliasList"
draft: false
---

*Namespace: Rhino.ApplicationSettings*

   Contains static methods and properties to access command aliases.
   
## Properties
#### static int Count
- (summary) Returns the number of command alias in Rhino.
- (since) 5.0
## Methods
#### static bool Add(string alias,string macro)
- (summary) Adds a new command alias to Rhino.
- (since) 5.0
- (returns) bool This is some return comment
#### static void Clear()
- (summary) Removes all aliases from the list.
- (since) 5.0
- (returns) void This is some return comment
#### static bool Delete(string alias)
- (summary) Deletes an existing command alias from Rhino.
- (since) 5.0
- (returns) bool This is some return comment
#### static System.Collections.Generic.Dictionary<string, string> GetDefaults()
- (summary) 
     Constructs a dictionary containing as keys the default names and as value the default macro.
     The returned dicionary contains a copy of the settings.
- (since) 5.0
- (returns) System.Collections.Generic.Dictionary<string, string> This is some return comment
#### static string GetMacro(string alias)
- (summary) Returns the macro of a command alias.
- (since) 5.0
- (returns) string This is some return comment
#### static string[] GetNames()
- (summary) Returns a list of command alias names.
- (since) 5.0
- (returns) string[] This is some return comment
#### static bool IsAlias(string alias)
- (summary) Verifies that a command alias exists in Rhino.
- (since) 5.0
- (returns) bool This is some return comment
#### static bool IsDefault()
- (summary) 
     Computes a value indicating if the current alias list is the same as the default alias list.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool SetMacro(string alias,string macro)
- (summary) Modifies the macro of a command alias.
- (since) 5.0
- (returns) bool This is some return comment
#### static System.Collections.Generic.Dictionary<string,string> ToDictionary()
- (summary) 
     Constructs a new dictionary that contains: as keys all names and as values all macros.
     Modifications to this dictionary do not affect any Rhino command alias.
- (since) 5.0
- (returns) System.Collections.Generic.Dictionary<string,string> This is some return comment
