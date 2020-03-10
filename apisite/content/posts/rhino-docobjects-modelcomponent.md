---
title: "Rhino.DocObjects.ModelComponent"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## ComponentStatus ComponentStatus
- (summary) 
     Gets or sets the component status of the model component.
     
- (since) 6.0
## ModelComponentType ComponentType
- (summary) 
     Gets the  for this object.
     Useful in switch statements.
     
- (since) 6.0
## string DeletedName
- (summary) 
     Gets the name of a component that is deleted.
     
- (since) 6.2
## bool HasId
- (summary) 
     Returns a value indicating whether the component has an ID.
     
- (since) 6.0
## bool HasIndex
- (summary) 
     Returns a value indicating whether the component has an Index.
     
- (since) 6.0
## bool HasName
- (summary) 
     Returns a value indicating whether the component has a Name.
     
- (since) 6.0
## Guid Id
- (summary) 
     Gets or sets the ID of the current instance.
     
- (since) 6.0
## bool IdIsLocked
- (summary) 
     Returns a value indicating whether the component ID is already locked.
     
- (since) 6.0
## int Index
- (summary) 
     Gets or sets the model component index attribute.
     
- (since) 6.0
## bool IndexIsLocked
- (summary) 
     Returns a value indicating whether the component Index is already locked.
     
- (since) 6.0
## uint InstanceDefinitionModelSerialNumber
- (summary) 
     When a component is in a model as part of the information required for a linked instance definition,
     this value identifies the the linked instance definition reference model.
     
- (since) 6.12
## bool IsComponentStatusLocked
- (summary) 
     The component status itself can be locked. This returns an indication.
     
- (since) 6.0
## bool IsSystemComponent
- (summary) 
     True if this model component is a system constant.
     An incomplete list of system constant model components is below:ON_ModelComponent::Unset
     ON_InstanceDefinition::Empty
     ON_Linetype::UnsetON_Linetype::ContinuousON_Linetype::ByLayerON_Linetype::ByParent
     ON_Layer::UnsetON_Layer::Default
     ON_TextStyle::UnsetON_TextStyle::DefaultON_TextStyle::ByLayerON_TextStyle::ByParent
     ON_DimStyle::UnsetON_DimStyle::DefaultON_DimStyle::DefaultInchDecimalON_DimStyle::DefaultInchFractionalON_DimStyle::DefaultFootInchArchitectureON_DimStyle::DefaultMillimeterSmallON_DimStyle::DefaultMillimeterLargeON_DimStyle::DefaultMillimeterArchitecture
- (since) 6.0
## uint ModelSerialNumber
- (summary) 
     A value identifing the model that manages this component.
     
- (since) 6.12
## string Name
- (summary) 
     Gets or sets the name
     
- (since) 6.0
## bool NameIsLocked
- (summary) 
     Returns a value indicating whether the component Name is already locked.
     
- (since) 6.0
## uint ReferenceModelSerialNumber
- (summary) 
     When a component is in a model for reference, this value identifies the reference model.
     
- (since) 6.12
# Methods
## static bool IsValidComponentName(string name)
- (summary) 
     Tests for a valid model component name.
     
- (since) 6.15
- (returns) bool This is some return comment
## static bool ModelComponentTypeIgnoresCase(ModelComponentType type)
- (summary) 
     Informs the developer if a particular model component type will require case-ignoring searching within a document.
     This is currently True with groups; False otherwise.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool ModelComponentTypeIncludesParent(ModelComponentType type)
- (summary) 
     Informs the developer if a particular model component type will include the hash of the parent.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool ModelComponentTypeRequiresUniqueName(ModelComponentType type)
- (summary) 
     Informs the developer if a particular model component type will require uniqueness within a document.
     This is currently True with render materials and model geometry; False otherwise.
     
- (since) 6.0
- (returns) bool This is some return comment
## void ClearId()
- (summary) 
     Resets the HasId property of the model component to false, if possible.
     
- (since) 6.0
- (returns) void This is some return comment
## void ClearIndex()
- (summary) 
     Resets the HasIndex property of the model component to false, if possible.
     
- (since) 6.0
- (returns) void This is some return comment
## void ClearName()
- (summary) 
     Resets the HasName property of the model component to false, if possible.
     
- (since) 6.0
- (returns) void This is some return comment
## uint DataCRC(uint currentRemainder)
- (summary) 
     Increments the Cyclic Redundancy Check value by this instance.
     
- (since) 6.0
- (returns) uint This is some return comment
## void LockId()
- (summary) 
     Locks the component Id property.
     
- (since) 6.0
- (returns) void This is some return comment
## void LockIndex()
- (summary) 
     Locks the component Index property.
     
- (since) 6.0
- (returns) void This is some return comment
## void LockName()
- (summary) 
     Locks the component Name property.
     
- (since) 6.0
- (returns) void This is some return comment
## string ToString()
- (summary) 
     Returns the name of the model component type, and then its name and index.
     
- (since) (unknown)
- (returns) string This is some return comment
