---
title: "Rhino.DocObjects.Tables.DimStyleTable"
draft: false
---

# Properties
## DimensionStyle[] BuiltInStyles
- (summary) 
     Creates an array of default AnnotationStyle objects
     
- (since) 6.0
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## DimensionStyle Current
- (summary) 
     Returns an instance of the current .
     
- (since) 6.0
## DimensionStyle CurrentDimensionStyle
- (summary) 
     Do not use. Use the  property.
     
- (since) 5.0
## Guid CurrentId
- (summary) 
- (since) 6.0
## int CurrentIndex
- (summary) 
- (since) 6.0
# Methods
## int Add(DimensionStyle dimstyle,bool reference)
- (summary) 
     Adds a new DimensionStyle to the document.
     
- (since) 6.0
- (returns) int This is some return comment
## int Add(string name)
- (summary) 
     Adds a new AnnotationStyle to the document. The new AnnotationStyle will be initialized
     with the current default AnnotationStyle properties.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(string name,bool reference)
- (summary) 
     Adds a new AnnotationStyle to the document. The new AnnotationStyle will be initialized
     with the current default AnnotationStyle properties.
     
- (since) 5.0
- (returns) int This is some return comment
## bool Delete(DimensionStyle item)
- (summary) 
     Removes an annotation style.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(int index,bool quiet)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## DimensionStyle Find(Guid styleId,bool ignoreDeleted)
- (summary) 
- (since) 6.0
- (returns) DimensionStyle This is some return comment
## DimensionStyle Find(string name,bool ignoreDeleted)
- (summary) 
- (since) 5.0
- (returns) DimensionStyle This is some return comment
## DimensionStyle FindIndex(int index)
- (summary) 
     Retrieves a DimensionStyle object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) DimensionStyle This is some return comment
## DimensionStyle FindName(string name)
- (summary) 
     Finds the DimensionStyle with a given name and retuns it. None is returned if no DimensionStyle is found.
     
- (since) 6.0
- (returns) DimensionStyle This is some return comment
## DimensionStyle FindRoot(Guid styleId,bool ignoreDeleted)
- (summary) 
- (since) 6.0
- (returns) DimensionStyle This is some return comment
## IEnumerator<DimensionStyle> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<DimensionStyle> This is some return comment
## string GetUnusedStyleName()
- (summary) 
     Get a unique name for a style that does not already exist in the DimStyle table
     
- (since) 6.0
- (returns) string This is some return comment
## string GetUnusedStyleName(string rootName)
- (summary) 
     Get a unique name for a dimension style that does not already exist in the DimStyle table
     
- (since) 6.0
- (returns) string This is some return comment
## ModifyType Modify(DimensionStyle dimstyle,AnnotationBase annotation)
- (summary) 
- (since) 6.0
- (returns) ModifyType This is some return comment
## bool Modify(DimensionStyle newSettings,Guid dimstyleId,bool quiet)
- (summary) Modifies dimension style settings.
- (since) 6.0
- (returns) bool This is some return comment
## bool Modify(DimensionStyle newSettings,int dimstyleIndex,bool quiet)
- (summary) Modifies dimension style settings.
- (since) 6.0
- (returns) bool This is some return comment
## bool SetCurrent(int index,bool quiet)
- (summary) 
     Sets the  property.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetCurrentDimensionStyleIndex(int index,bool quiet)
- (summary) 
     Do not use. Use the  method.
     
- (since) 5.0
- (returns) bool This is some return comment
