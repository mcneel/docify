---
title: "Rhino.Geometry.ComponentStatus"
draft: false
---

## static !=
- (summary) 
     Determines if two ComponentStatus objects differ.
     
- (since) 6.0
## static +
- (summary) 
     Sets flags from both component states and returns a new ComponentStatus.
     
- (since) (unknown)
## static ==
- (summary) 
     Determines if two ComponentStatus objects are equal.
     
- (since) 6.0
# Properties
## static ComponentStatus AllSet
- (summary) 
     All flags are checked.
     
- (since) 6.0
## static ComponentStatus Clear
- (summary) 
     This is the default value and equal to undefined.
     
- (since) 6.0
## static ComponentStatus Damaged
- (summary) 
     The damaged flag is checked.
     
- (since) 6.0
## static ComponentStatus Hidden
- (summary) 
     The hidden flag is checked.
     
- (since) 6.0
## static ComponentStatus Highlighted
- (summary) 
     The highlight selection flag is checked.
     
- (since) 6.0
## static ComponentStatus Locked
- (summary) 
     The locked flag is checked.
     
- (since) 6.0
## static ComponentStatus Selected
- (summary) 
     The selection flag is checked.
     
- (since) 6.0
## static ComponentStatus SelectedPersistent
- (summary) 
     The persistent selection flag is checked.
     
- (since) 6.0
## bool IsClear
- (summary) 
     True if every setting is 0 or false.
     
- (since) 6.0
## bool IsDamaged
- (summary) 
     Returns False if component is not damaged. True otherwise.
     
- (since) 6.0
## bool IsHidden
- (summary) 
     Returns True if hidden. False otherwise.
     
- (since) 6.0
## bool IsHighlighted
- (summary) 
     Returns True if highlighted. False otherwise.
     
- (since) 6.0
## bool IsLocked
- (summary) 
     Returns True if locked. False otherwise.
     
- (since) 6.0
## bool IsSelected
- (summary) 
     Returns True if selected or selected persistent. False otherwise.
     
- (since) 6.0
## bool IsSelectedPersistent
- (summary) 
     Returns True if selected persistent. False otherwise.
     
- (since) 6.0
# Methods
## bool Equals(ComponentStatus other)
- (summary) 
     Determines if another ComponentStatus and this are equal.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines if an object and this are equal.
     
- (since) (unknown)
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Serves as a special hash function. The inner value is used for the purpose.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool HasAllEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
- (summary) 
     For the purposes of this test, Selected and SelectedPersistent are considered equal.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool HasNoEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
- (summary) 
     For the purposes of this test, Selected and SelectedPersistent are considered equal.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool HasSomeEqualStates(ComponentStatus statesFilter,ComponentStatus comparand)
- (summary) 
     For the purposes of this test, Selected and SelectedPersistent are considered equal.
     
- (since) 6.0
- (returns) bool This is some return comment
## string ToString()
- (summary) 
     Provides a string representation of this ComponentStatus.
     
- (since) (unknown)
- (returns) string This is some return comment
## ComponentStatus WithStates(ComponentStatus additionalStatus)
- (summary) 
     Activates any information flag described in any of the two input component statuses
     and returns a new ComponentStatus with those flags checked.
     
- (since) 6.0
- (returns) ComponentStatus This is some return comment
