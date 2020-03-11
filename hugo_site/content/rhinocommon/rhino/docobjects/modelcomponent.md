---
title: "ModelComponent"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Base class for all components in a model (document) and manages the
   index, id and other information common to this type of objects.
   This class parallels the C++ ON_ModelComponent.
```cs
public class ModelComponent : CommonObject
```
## Properties

[ComponentStatus](/rhinocommon/rhino/geometry/componentstatus/) ComponentStatus
: Gets or sets the component status of the model component.
: since 6.0

ModelComponentType ComponentType
: Gets the  for this object.
     Useful in switch statements.
: since 6.0

string DeletedName
: Gets the name of a component that is deleted.
: since 6.2

bool HasId
: Returns a value indicating whether the component has an ID.
: since 6.0

bool HasIndex
: Returns a value indicating whether the component has an Index.
: since 6.0

bool HasName
: Returns a value indicating whether the component has a Name.
: since 6.0

Guid Id
: Gets or sets the ID of the current instance.
: since 6.0

bool IdIsLocked
: Returns a value indicating whether the component ID is already locked.
: since 6.0

int Index
: Gets or sets the model component index attribute.
: since 6.0

bool IndexIsLocked
: Returns a value indicating whether the component Index is already locked.
: since 6.0

uint InstanceDefinitionModelSerialNumber
: When a component is in a model as part of the information required for a linked instance definition,
     this value identifies the the linked instance definition reference model.
: since 6.12

bool IsComponentStatusLocked
: The component status itself can be locked. This returns an indication.
: since 6.0

bool IsSystemComponent
: True if this model component is a system constant.
     An incomplete list of system constant model components is below:ON_ModelComponent::Unset
     ON_InstanceDefinition::Empty
     ON_Linetype::UnsetON_Linetype::ContinuousON_Linetype::ByLayerON_Linetype::ByParent
     ON_Layer::UnsetON_Layer::Default
     ON_TextStyle::UnsetON_TextStyle::DefaultON_TextStyle::ByLayerON_TextStyle::ByParent
     ON_DimStyle::UnsetON_DimStyle::DefaultON_DimStyle::DefaultInchDecimalON_DimStyle::DefaultInchFractionalON_DimStyle::DefaultFootInchArchitectureON_DimStyle::DefaultMillimeterSmallON_DimStyle::DefaultMillimeterLargeON_DimStyle::DefaultMillimeterArchitecture
: since 6.0

uint ModelSerialNumber
: A value identifing the model that manages this component.
: since 6.12

string Name
: Gets or sets the name
: since 6.0

bool NameIsLocked
: Returns a value indicating whether the component Name is already locked.
: since 6.0

uint ReferenceModelSerialNumber
: When a component is in a model for reference, this value identifies the reference model.
: since 6.12
## Methods

static bool IsValidComponentName(string name)
: Tests for a valid model component name.
: Returns - True if the string is a valid model component name, False otherwise.
: since 6.15

static bool ModelComponentTypeIgnoresCase(ModelComponentType type)
: Informs the developer if a particular model component type will require case-ignoring searching within a document.
     This is currently True with groups; False otherwise.
: since 6.0

static bool ModelComponentTypeIncludesParent(ModelComponentType type)
: Informs the developer if a particular model component type will include the hash of the parent.
: since 6.0

static bool ModelComponentTypeRequiresUniqueName(ModelComponentType type)
: Informs the developer if a particular model component type will require uniqueness within a document.
     This is currently True with render materials and model geometry; False otherwise.
: Returns - True with render materials and model geometry; False otherwise.
: since 6.0

void ClearId()
: Resets the HasId property of the model component to false, if possible.
: since 6.0

void ClearIndex()
: Resets the HasIndex property of the model component to false, if possible.
: since 6.0

void ClearName()
: Resets the HasName property of the model component to false, if possible.
: since 6.0

uint DataCRC(uint currentRemainder)
: Increments the Cyclic Redundancy Check value by this instance.
: Returns - The updated remainder value.
: since 6.0

void LockId()
: Locks the component Id property.
: since 6.0

void LockIndex()
: Locks the component Index property.
: since 6.0

void LockName()
: Locks the component Name property.
: since 6.0

string ToString()
: Returns the name of the model component type, and then its name and index.
: since (unknown)
