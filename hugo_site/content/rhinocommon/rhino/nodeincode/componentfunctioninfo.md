---
title: "ComponentFunctionInfo"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.NodeInCode](../)*

Defines the base class for a function representing a component.
   This class is abstract.
```cs
public class ComponentFunctionInfo
```
## Properties

Guid ComponentGuid
: The unique identifier of the Grasshopper component.
     It is the original developer's responsibility to ensure that this ID is unique.
: since 6.0

Delegate Delegate
: Returns a delegate that can be directly invoked using a list of arguments.
     This flattens trees.
: since 6.0

Delegate DelegateNoWarnings
: Returns a delegate that can be directly invoked using a list of arguments.
     This flattens trees.
: since 6.0

Delegate DelegateTree
: Returns a delegate that can be directly invoked using a list of arguments.
     This considers trees and simplifies single-output components.
: since 6.0

Delegate DelegateTreeNoWarnings
: Returns a delegate that can be directly invoked using a list of arguments.
     This considers trees and simplifies single-output components.
: since 6.0

string Description
: The function description.
: since 6.0

string FullName
: Returns the name of the component prefixed by, if existing, the namespace.
: since 6.0

string FullScriptingName
: Shows the full name of the component, including optional periods.
     Removes spaces and common operator signs.
: since 6.0

IReadOnlyList<string> InputDescriptions
: The function input parameter descriptions.
: since 6.0

IReadOnlyList<string> InputNames
: The function input parameter names.
: since 6.0

IReadOnlyList<bool> InputsOptional
: Indications for each function input parameter whether it is optional.
: since 6.0

IReadOnlyList<string> InputTypeNames
: The function input type names.
: since 6.0

bool IsDefault
: Determines if the component is a default one.
: since 6.0

string Name
: The function name.
: since 6.0

string Namespace
: The function namespace.
: since 6.0

IReadOnlyList<string> OutputDescriptions
: Grasshopper returns several items in general. This property returns the output descriptions.
: since 6.0

IReadOnlyList<string> OutputNames
: Grasshopper returns several items in general. This property returns the output names.
: since 6.0

IReadOnlyList<string> OutputTypeNames
: Grasshopper returns several items in general. This property returns the output type names.
: since 6.0
## Methods

object[] Evaluate(IEnumerable args,bool keepTree,string[] warnings)
: Evaluates the component with a set of arguments.
     There needs to be an argument for each input param, and each output param gives an entry in the output array.
: Returns - An array of objects, each representing an output result.
: since 6.0

object[] Invoke(object[] args)
: Runs  with keepTree equal to false,
     and raises an exception on the first warning.
: Returns - Items.
: since 7.0

object[] InvokeKeepTree(object[] args)
: Runs  with keepTree equal to True and raises an exception on the first warning.
: Returns - Items.
: since 7.0

object[] InvokeKeepTreeSilenceWarnings(object[] args)
: Runs  with keepTree equal to true,
     and discards warnings (this is a dangerous operation!).
: Returns - Array of items.
: since 7.0

object[] InvokeSilenceWarnings(object[] args)
: Runs  with keepTree equal to false,
     then simplifies output with  and discards warnings (this is a dangerous operation!).
: Returns - Items.
: since 7.0

string ToString()
: Returns a string representing this function.
: Returns - The namespace and the name.
: since (unknown)
