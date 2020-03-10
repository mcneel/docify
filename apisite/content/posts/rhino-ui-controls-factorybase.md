---
title: "Rhino.UI.Controls.FactoryBase"
date: 2020-03-10 09:24:55Z
draft: false
---

# Methods
## static Type[] Register()
- (summary) 
         Call this function during startup of current assembly to load classes with factory creation support
         are registed
         
- (since) 6.0
- (returns) Type[] This is some return comment
## static Type[] Register(PlugIn plugin)
- (summary) 
         Call this function during the startup of your plug-in to ensure that all classes that support factory creation
         are registed
         
- (since) 6.0
- (returns) Type[] This is some return comment
## IntPtr Get(Guid id)
- (summary) 
         Override this method to return a new instance of your class for the given ID
         
- (since) 6.0
- (returns) IntPtr This is some return comment
