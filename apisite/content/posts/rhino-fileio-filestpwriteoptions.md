---
title: "FileStpWriteOptions"
draft: false
---

*Namespace: Rhino.FileIO*
 Options used when writing a stp file 
## Properties
#### bool Export2dCurves
- (summary) 
     Some (not most, and not Rhino) importing applications can make use of
     the 2-D trimming curves to get a more accurate and faster import. The
     size of the step file will be larger
     
- (since) 7.0
#### bool ExportBlack
- (summary) 
     Let importing application set color for black objects. If a Rhino
     object has color black, no color is assigned to the object in the step
     file.This will cause the importing application to give the object its
     default color.This is desirable because black objects look like
     ink blots in some applications.This option is grayed out if the schema
     option is AP203ControConfigDesign since that schema does not include
     color entities.
     
- (since) 7.0
#### bool SplitClosedSurfaces
- (summary) 
     Splits closed surfaces, for example, the interior surfaces of drilled
     holes.
     
- (since) 7.0
