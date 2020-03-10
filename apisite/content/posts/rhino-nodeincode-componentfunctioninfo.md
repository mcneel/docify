---
title: "Rhino.NodeInCode.ComponentFunctionInfo"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Guid ComponentGuid
- (summary) 
     The unique identifier of the Grasshopper component.
     It is the original developer's responsibility to ensure that this ID is unique.
     
- (since) 6.0
## Delegate Delegate
- (summary) 
     Returns a delegate that can be directly invoked using a list of arguments.
     This flattens trees.
     
- (since) 6.0
## Delegate DelegateNoWarnings
- (summary) 
     Returns a delegate that can be directly invoked using a list of arguments.
     This flattens trees.
     
- (since) 6.0
## Delegate DelegateTree
- (summary) 
     Returns a delegate that can be directly invoked using a list of arguments.
     This considers trees and simplifies single-output components.
     
- (since) 6.0
## Delegate DelegateTreeNoWarnings
- (summary) 
     Returns a delegate that can be directly invoked using a list of arguments.
     This considers trees and simplifies single-output components.
     
- (since) 6.0
## string Description
- (summary) 
     The function description.
     
- (since) 6.0
## string FullName
- (summary) 
     Returns the name of the component prefixed by, if existing, the namespace.
     
- (since) 6.0
## string FullScriptingName
- (summary) 
     Shows the full name of the component, including optional periods.
     Removes spaces and common operator signs.
     
- (since) 6.0
## IReadOnlyList<string> InputDescriptions
- (summary) 
     The function input parameter descriptions.
     
- (since) 6.0
## IReadOnlyList<string> InputNames
- (summary) 
     The function input parameter names.
     
- (since) 6.0
## IReadOnlyList<bool> InputsOptional
- (summary) 
     Indications for each function input parameter whether it is optional.
     
- (since) 6.0
## IReadOnlyList<string> InputTypeNames
- (summary) 
     The function input type names.
     
- (since) 6.0
## bool IsDefault
- (summary) 
     Determines if the component is a default one.
     
- (since) 6.0
## string Name
- (summary) 
     The function name.
     
- (since) 6.0
## string Namespace
- (summary) 
     The function namespace.
     
- (since) 6.0
## IReadOnlyList<string> OutputDescriptions
- (summary) 
     Grasshopper returns several items in general. This property returns the output descriptions.
     
- (since) 6.0
## IReadOnlyList<string> OutputNames
- (summary) 
     Grasshopper returns several items in general. This property returns the output names.
     
- (since) 6.0
## IReadOnlyList<string> OutputTypeNames
- (summary) 
     Grasshopper returns several items in general. This property returns the output type names.
     
- (since) 6.0
# Methods
## object[] Evaluate(IEnumerable args,bool keepTree,string[] warnings)
- (summary) 
     Evaluates the component with a set of arguments.
     There needs to be an argument for each input param, and each output param gives an entry in the output array.
     
- (since) 6.0
- (returns) object[] This is some return comment
## object[] Invoke(object[] args)
- (summary) 
     Runs  with keepTree equal to false,
     and raises an exception on the first warning.
     
- (since) 7.0
- (returns) object[] This is some return comment
## object[] InvokeKeepTree(object[] args)
- (summary) 
     Runs  with keepTree equal to True and raises an exception on the first warning.
     
- (since) 7.0
- (returns) object[] This is some return comment
## object[] InvokeKeepTreeSilenceWarnings(object[] args)
- (summary) 
     Runs  with keepTree equal to true,
     and discards warnings (this is a dangerous operation!).
     
- (since) 7.0
- (returns) object[] This is some return comment
## object[] InvokeSilenceWarnings(object[] args)
- (summary) 
     Runs  with keepTree equal to false,
     then simplifies output with  and discards warnings (this is a dangerous operation!).
     
- (since) 7.0
- (returns) object[] This is some return comment
## string ToString()
- (summary) 
     Returns a string representing this function.
     
- (since) (unknown)
- (returns) string This is some return comment
