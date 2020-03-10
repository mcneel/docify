---
title: "Rhino.Runtime.PythonScript"
date: 2020-03-10 09:24:54Z
draft: false
---

# Properties
## int ContextId
- (summary) 
     Gets or sets a context unique identified.
     
- (since) 5.0
## Action<string> Output
- (summary) 
     Gets or sets the Python script "print()" target.
     By default string output goes to the Rhino.RhinoApp.Write function.
     Set Output if you want to redirect the output from python to a different function
     while this script executes.
- (since) 5.0
## Commands.Command ScriptContextCommand
- (summary) 
     Command associated with this script. Used for localiation
     
- (since) 6.0
## object ScriptContextDoc
- (summary) 
     object set to variable held in scriptcontext.doc.
     
- (since) 5.0
# Methods
## static void AddRuntimeAssembly(Assembly assembly)
- (summary) 
     Add assembly to list of assemblies used by python
     
- (since) 7.0
- (returns) void This is some return comment
## static PythonScript Create()
- (summary) 
     Constructs a new Python script context.
     
- (since) 5.0
- (returns) PythonScript This is some return comment
## static System.Reflection.Assembly[] RuntimeAssemblies()
- (summary) 
     Get list of assemblies used by python for library browser and
     inclusion into the runtime
     
- (since) 7.0
- (returns) System.Reflection.Assembly[] This is some return comment
## PythonCompiledCode Compile(string script)
- (summary) 
     Compiles a class in a quick-to-execute proxy.
     
- (since) 5.0
- (returns) PythonCompiledCode This is some return comment
## bool ContainsVariable(string name)
- (summary) 
     Determines if the main scripting context has a variable with a name.
     
- (since) 5.0
- (returns) bool This is some return comment
## object CreateTextEditorControl(string script,Action<string> helpcallback)
- (summary) 
     Creates a control where the user is able to type Python code.
     
- (since) 5.0
- (returns) object This is some return comment
## object EvaluateExpression(string statements,string expression)
- (summary) 
     Evaluates statements and an expression in the main scripting context.
     
- (since) 5.0
- (returns) object This is some return comment
## bool ExecuteFile(string path)
- (summary) 
     Executes a Python file. The file is executed in a new, __main__ scope.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExecuteFileInScope(string path)
- (summary) 
     Executes a Python file in the calling script scope. All old variables are kept.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool ExecuteScript(string script)
- (summary) 
     Executes a Python string.
     
- (since) 5.0
- (returns) bool This is some return comment
## string GetStackTraceFromException(Exception ex)
- (summary) 
     Retrieves a meaningful representation of the call stack.
     
- (since) 5.0
- (returns) string This is some return comment
## object GetVariable(string name)
- (summary) 
     Gets the object associated with a variable name in the main scripting context.
     
- (since) 5.0
- (returns) object This is some return comment
## System.Collections.Generic.IEnumerable<string> GetVariableNames()
- (summary) 
     Retrieves all variable names in the script.
     
- (since) 5.0
- (returns) System.Collections.Generic.IEnumerable<string> This is some return comment
## void RemoveVariable(string name)
- (summary) 
     Removes a defined variable from the main scripting context.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetIntellisenseVariable(string name,object value)
- (summary) 
     Sets a variable for runtime introspection.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetupScriptContext(object doc)
- (summary) 
     Setups the script context. Use a RhinoDoc instance unless unsure.
     
- (since) 6.0
- (returns) void This is some return comment
## void SetVariable(string name,object value)
- (summary) 
     Sets a variable with a name and an object. Object can be None (Nothing in Visual Basic).
     
- (since) 5.0
- (returns) void This is some return comment
