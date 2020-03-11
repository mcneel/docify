---
title: "ComponentStatus"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Provides information about selection, highlighting, visibility, editability and integrity states of a component.
   This structure is immutable.

static !=
: Determines if two ComponentStatus objects differ.
: Returns - True if they are in any way different. False otherwise.
: since 6.0

static +
: Sets flags from both component states and returns a new ComponentStatus.
: Returns - A new ComponentStatus.
: since (unknown)

static ==
: Determines if two ComponentStatus objects are equal.
: Returns - True if they are exactly equal. False otherwise.
: since 6.0
## Properties

static ComponentStatus AllSet
: All flags are checked.
: since 6.0

static ComponentStatus Clear
: This is the default value and equal to undefined.
: since 6.0

static ComponentStatus Damaged
: The damaged flag is checked.
: since 6.0

static ComponentStatus Hidden
: The hidden flag is checked.
: since 6.0

static ComponentStatus Highlighted
: The highlight selection flag is checked.
: since 6.0

static ComponentStatus Locked
: The locked flag is checked.
: since 6.0

static ComponentStatus Selected
: The selection flag is checked.
: since 6.0

static ComponentStatus SelectedPersistent
: The persistent selection flag is checked.
: since 6.0

bool IsClear
: True if every setting is 0 or false.
: Returns - True if the component status is undefined or clear.
: since 6.0

bool IsDamaged
: Returns False if component is not damaged. True otherwise.
: Returns - The component status for damaged.
: since 6.0

bool IsHidden
: Returns True if hidden. False otherwise.
: Returns - The component status for hidden.
: since 6.0

bool IsHighlighted
: Returns True if highlighted. False otherwise.
: Returns - The component status for highlighted.
: since 6.0

bool IsLocked
: Returns True if locked. False otherwise.
: Returns - The component status for locked.
: since 6.0

bool IsSelected
: Returns True if selected or selected persistent. False otherwise.
: Returns - The component status for selected.
: since 6.0

bool IsSelectedPersistent
: Returns True if selected persistent. False otherwise.
: Returns - The component status for selected.
: since 6.0
## Methods

bool Equals(ComponentStatus other)
: Determines if another ComponentStatus and this are equal.
: Returns - True if equal in value. False otherwise
: since 6.0

bool Equals(object obj)
: Determines if an object and this are equal.
: Returns - True if equal in value. False otherwise
: since (unknown)

int GetHashCode()
: Serves as a special hash function. The inner value is used for the purpose.
: Returns - An integer deriving from a bit mask.
: since (unknown)

bool HasAllEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
: For the purposes of this test, Selected and SelectedPersistent are considered equal.
: Returns - True if at all tested states in "this" and comparand are identical.
: since 6.0

bool HasNoEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
: For the purposes of this test, Selected and SelectedPersistent are considered equal.
: Returns - True if at all tested states in "this" and comparand are identical.
: since 6.0

bool HasSomeEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
: For the purposes of this test, Selected and SelectedPersistent are considered equal.
: Returns - True if at least one tested state in "this" and comparand are identical.
: since 6.0

string ToString()
: Provides a string representation of this ComponentStatus.
: Returns - The representation in English.
: since (unknown)

ComponentStatus WithStates(ComponentStatus additionalStatus)
: Activates any information flag described in any of the two input component statuses
     and returns a new ComponentStatus with those flags checked.
: since 6.0
