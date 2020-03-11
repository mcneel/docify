---
title: "DrawingUtilities"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

RhinoCommon Drawing Utilities
```cs
public class DrawingUtilities
```
## Methods

static Bitmap BitmapFromIconResource(string resourceName,Assembly assembly)
: Load a Icon from an embedded resource and convert it to a bitmap of the
     specified size.  Will look for a icon image that is greater than or
     equal to the requested size, if all images are less than the requested
     size the largest image will be used.
: since 6.12

static Bitmap BitmapFromIconResource(string resourceName,Size bitmapSize,Assembly assembly)
: Load a Icon from an embedded resource and convert it to a bitmap of the
     specified size.  Will look for a icon image that is greater than or
     equal to the requested size, if all images are less than the requested
     size the largest image will be used.
: since 6.0

static Bitmap CreateMeshPreviewImage(IEnumerable<Mesh> meshes,IEnumerable<Color> colors,Size size)
: Creates a preview image of one or more meshs.
: Returns - A bitmap if successful, None othewise.
: since 6.0

static Bitmap CreateMeshPreviewImage(Mesh mesh,Color color,Size size)
: Creates a preview image of a mesh.
: Returns - A bitmap if successful, None othewise.
: since 6.0

static Icon IconFromResource(string resourceName,Assembly assembly)
: Load a Icon from an embedded resource.
: Returns - The Icon resource if found and loaded otherwise null.
: since 6.0

static Icon IconFromResource(string resourceName,Size size,Assembly assembly)
: Load a Icon from an embedded resource.
: Returns - The Icon resource if found and loaded otherwise null.
: since 6.0

static Image ImageFromResource(string resourceName,Assembly assembly)
: Load a Image from an embedded resource.
: Returns - The Image resource if found and loaded otherwise null.
: since 6.0

static Bitmap LoadBitmapWithScaleDown(string iconName,int sizeDesired,Assembly assembly)
: Loads an icon from an embedded resource and converts it to a bitmap.
     If the icon is not a standard size, this function scales down a larger
     image.
: Returns - The icon converted to a bitmap if successful, None otherwise.
: since 6.0

static Icon LoadIconWithScaleDown(string iconName,int sizeDesired,Assembly assembly)
: Loads an icon from an embedded resource.
     If the icon is not a standard size, this function scales down a larger
     image.
: Returns - The icon if successful, None otherwise.
: since 6.0
