---
title: "BitmapTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Stores the list of bitmaps in a Rhino document.
```cs
public class BitmapTable :
    RhinoDocCommonTable<BitmapEntry>,
    ICollection<BitmapEntry>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

int AddBitmap(string bitmapFilename,bool replaceExisting)
: Adds a new bitmap with specified name to the bitmap table.
: Returns - index of new bitmap in table on success. -1 on error.

bool Delete(BitmapEntry item)
: Removes the bitmap from the table.
: Returns - True if the item could be deleted; otherwise, false.
: since 6.0

bool DeleteBitmap(string bitmapFilename)
: Deletes a bitmap.
: Returns - True if successful. False if the bitmap cannot be deleted because it
     is the current bitmap or because it bitmap contains active geometry.

bool ExportToFile(int index,string path)
: Writes a bitmap to a file.
: Returns - True if successful.

int ExportToFiles(string directoryPath,int overwrite)
: Exports all the bitmaps in the table to files.
: Returns - Number of bitmaps written.

[BitmapEntry](/rhinocommon/rhino/docobjects/bitmapentry/) Find(string name,bool createFile,string fileName)
: This function first attempts to find the file with "name" on the disk.
     If it does find it, "fileName" is set to the full path of the file and
     the BitmapEntry returned will be null, even if there was a BitmapEntry
     with "name" in the bitmap table.
     If the function cannot find the file on the disk, it searches the bitmap
     table.  If it finds it, the returned BitmapEntry entry will be the entry
     in the table with that name.
     Additionally, if "createFile" is true, and an entry is found, the file
     will be written to the disk and it's full path will be contained in "fileName".
: Returns - Returns None if "name" was found on the disk.  If name was not found on the disk,
     returns the BitmapEntry with the specified name if it is found in the bitmap table
     and None if it was not found in the bitmap table.
: since 5.1

[BitmapEntry](/rhinocommon/rhino/docobjects/bitmapentry/) FindIndex(int index)
: Retrieves a BitmapEntry object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A BitmapEntry object, or None if none was found.
: since 6.0
