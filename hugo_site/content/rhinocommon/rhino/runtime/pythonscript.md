---
title: "PythonScript"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Represents a Python script.
```cs
public class PythonScript
```
## Properties

int ContextId
: Gets or sets a context unique identified.

Action<string> Output
: Gets or sets the Python script "print()" target.
     By default string output goes to the Rhino.RhinoApp.Write function.
     Set Output if you want to redirect the output from python to a different function
     while this script executes.

[Command](/rhinocommon/rhino/commands/command/) ScriptContextCommand
: Command associated with this script. Used for localiation
: since 6.0

object ScriptContextDoc
: object set to variable held in scriptcontext.doc.
## Methods

static void AddRuntimeAssembly(Assembly assembly)
: Add assembly to list of assemblies used by python
: since 7.0

static PythonScript Create()
: Constructs a new Python script context.
: Returns - A new Python script, or None if none could be created. Rhino 4 always returns null.

static System.Reflection.Assembly[] RuntimeAssemblies()
: Get list of assemblies used by python for library browser and
     inclusion into the runtime
: since 7.0

[PythonCompiledCode](/rhinocommon/rhino/runtime/pythoncompiledcode/) Compile(string script)
: Compiles a class in a quick-to-execute proxy.
: Returns - A Python compiled code instance.

bool ContainsVariable(string name)
: Determines if the main scripting context has a variable with a name.
: Returns - True if the variable is present.

object CreateTextEditorControl(string script,Action<string> helpcallback)
: Creates a control where the user is able to type Python code.
: Returns - A Windows Forms control.

object EvaluateExpression(string statements,string expression)
: Evaluates statements and an expression in the main scripting context.
: Returns - The expression result.

bool ExecuteFile(string path)
: Executes a Python file. The file is executed in a new, __main__ scope.
: Returns - True if the file executed. This method can throw scripting-runtime based exceptions.

bool ExecuteFileInScope(string path)
: Executes a Python file in the calling script scope. All old variables are kept.
: Returns - True if the file executed. This method can throw scripting-runtime based exceptions.
: since 7.0

bool ExecuteScript(string script)
: Executes a Python string.
: Returns - True if the file executed. This method can throw scripting-runtime based exceptions.

string GetStackTraceFromException(Exception ex)
: Retrieves a meaningful representation of the call stack.
: Returns - A string that represents the Python exception.

object GetVariable(string name)
: Gets the object associated with a variable name in the main scripting context.
: Returns - The variable object.

System.Collections.Generic.IEnumerable<string> GetVariableNames()
: Retrieves all variable names in the script.
: Returns - An enumerable set with all names of the variables.

void RemoveVariable(string name)
: Removes a defined variable from the main scripting context.

void SetIntellisenseVariable(string name,object value)
: Sets a variable for runtime introspection.

void SetupScriptContext(object doc)
: Setups the script context. Use a RhinoDoc instance unless unsure.
: since 6.0

void SetVariable(string name,object value)
: Sets a variable with a name and an object. Object can be None (Nothing in Visual Basic).
