---
title: "Rhino.DocObjects.Tables.BitmapTable"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
# Methods
## int AddBitmap(string bitmapFilename,bool replaceExisting)
- (summary) Adds a new bitmap with specified name to the bitmap table.
- (since) 5.0
- (returns) int This is some return comment
## bool Delete(BitmapEntry item)
- (summary) 
     Removes the bitmap from the table.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool DeleteBitmap(string bitmapFilename)
- (summary) Deletes a bitmap.
- (since) 5.0
- (returns) bool This is some return comment
## bool ExportToFile(int index,string path)
- (summary) Writes a bitmap to a file.
- (since) 5.0
- (returns) bool This is some return comment
## int ExportToFiles(string directoryPath,int overwrite)
- (summary) Exports all the bitmaps in the table to files.
- (since) 5.0
- (returns) int This is some return comment
## BitmapEntry Find(string name,bool createFile,string fileName)
- (summary) 
     This function first attempts to find the file with "name" on the disk.
     If it does find it, "fileName" is set to the full path of the file and
     the BitmapEntry returned will be null, even if there was a BitmapEntry
     with "name" in the bitmap table.
     If the function cannot find the file on the disk, it searches the bitmap
     table.  If it finds it, the returned BitmapEntry entry will be the entry
     in the table with that name.
     Additionally, if "createFile" is true, and an entry is found, the file
     will be written to the disk and it's full path will be contained in "fileName".
     
- (since) 5.1
- (returns) BitmapEntry This is some return comment
## BitmapEntry FindIndex(int index)
- (summary) 
     Retrieves a BitmapEntry object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) BitmapEntry This is some return comment
