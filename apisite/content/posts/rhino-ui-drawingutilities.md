---
title: "Rhino.UI.DrawingUtilities"
date: 2020-03-10 09:24:56Z
draft: false
---

# Methods
## static Bitmap BitmapFromIconResource(string resourceName,Assembly assembly)
- (summary) 
     Load a Icon from an embedded resource and convert it to a bitmap of the
     specified size.  Will look for a icon image that is greater than or
     equal to the requested size, if all images are less than the requested
     size the largest image will be used.
     
- (since) 6.12
- (returns) Bitmap This is some return comment
## static Bitmap BitmapFromIconResource(string resourceName,Size bitmapSize,Assembly assembly)
- (summary) 
     Load a Icon from an embedded resource and convert it to a bitmap of the
     specified size.  Will look for a icon image that is greater than or
     equal to the requested size, if all images are less than the requested
     size the largest image will be used.
     
- (since) 6.0
- (returns) Bitmap This is some return comment
## static Bitmap CreateMeshPreviewImage(IEnumerable<Mesh> meshes,IEnumerable<Color> colors,Size size)
- (summary) 
     Creates a preview image of one or more meshs.
     
- (since) 6.0
- (returns) Bitmap This is some return comment
## static Bitmap CreateMeshPreviewImage(Mesh mesh,Color color,Size size)
- (summary) 
     Creates a preview image of a mesh.
     
- (since) 6.0
- (returns) Bitmap This is some return comment
## static Icon IconFromResource(string resourceName,Assembly assembly)
- (summary) 
     Load a Icon from an embedded resource.
     
- (since) 6.0
- (returns) Icon This is some return comment
## static Icon IconFromResource(string resourceName,Size size,Assembly assembly)
- (summary) 
     Load a Icon from an embedded resource.
     
- (since) 6.0
- (returns) Icon This is some return comment
## static Image ImageFromResource(string resourceName,Assembly assembly)
- (summary) 
     Load a Image from an embedded resource.
     
- (since) 6.0
- (returns) Image This is some return comment
## static Bitmap LoadBitmapWithScaleDown(string iconName,int sizeDesired,Assembly assembly)
- (summary) 
     Loads an icon from an embedded resource and converts it to a bitmap.
     If the icon is not a standard size, this function scales down a larger
     image.
     
- (since) 6.0
- (returns) Bitmap This is some return comment
## static Icon LoadIconWithScaleDown(string iconName,int sizeDesired,Assembly assembly)
- (summary) 
     Loads an icon from an embedded resource.
     If the icon is not a standard size, this function scales down a larger
     image.
     
- (since) 6.0
- (returns) Icon This is some return comment
