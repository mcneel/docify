---
title: "RenderMaterial"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderMaterial : RenderContent
```
## Properties

static Guid GemMaterialGuid
: 
: since 6.0

static Guid GlassMaterialGuid
: 
: since 6.0

static Guid MetalMaterialGuid
: 
: since 6.0

static Guid PaintMaterialGuid
: 
: since 6.0

static Guid PictureMaterialGuid
: 
: since 6.0

static Guid PlasterMaterialGuid
: 
: since 6.0

static Guid PlasticMaterialGuid
: 
: since 6.0

[PreviewBackgroundType](/rhinocommon/rhino/render/rendermaterial/previewbackgroundtype/) DefaultPreviewBackgroundType
: Set or get the default scene background for the image that appears in
     preview panes
: since 5.11

[PreviewGeometryType](/rhinocommon/rhino/render/rendermaterial/previewgeometrytype/) DefaultPreviewGeometryType
: Set or get the default geometry that appears in preview panes
: since 5.11

double DefaultPreviewSize
: The default preview geometry size
: since 5.11

bool SmellsLikeGem
: 
: since 6.0

bool SmellsLikeGlass
: 
: since 6.0

bool SmellsLikeMetal
: 
: since 6.0

bool SmellsLikePaint
: 
: since 6.0

bool SmellsLikePlaster
: 
: since 6.0

bool SmellsLikePlastic
: 
: since 6.0

bool SmellsLikeTexturedGem
: 
: since 6.0

bool SmellsLikeTexturedGlass
: 
: since 6.0

bool SmellsLikeTexturedMetal
: 
: since 6.0

bool SmellsLikeTexturedPaint
: 
: since 6.0

bool SmellsLikeTexturedPlaster
: 
: since 6.0

bool SmellsLikeTexturedPlastic
: 
: since 6.0
## Methods

static RenderMaterial CreateBasicMaterial(Material material)
: Constructs a new basic material from a Material.
: Returns - A new basic material.
: since 5.1

static RenderMaterial CreateBasicMaterial(Material material,RhinoDoc doc)
: 
: since 6.4

static RenderMaterial CreateImportedMaterial(Material material,RhinoDoc doc,bool bReference)
: 
: since 7.0

double GetTextureAmountFromUsage(StandardChildSlots which)
: 
: since 6.0

[RenderTexture](/rhinocommon/rhino/render/rendertexture/) GetTextureFromUsage(StandardChildSlots which)
: 
: since 6.0

bool GetTextureOnFromUsage(StandardChildSlots which)
: 
: since 6.0

bool HandleTexturedValue(string slotname,TexturedValue<T> tc)
: Handle a textured content field. Values will be read into an
     instance of TexturedColor
: Returns - True if reading the base value succeeded
: since 6.12

DocObjects.Material SimulatedMaterial(bool isForDataOnly)
: 
: since 7.0

DocObjects.Material SimulatedMaterial(TextureGeneration tg)
: 
: since 7.0

Rhino.Render.PhysicallyBasedMaterial SimulatedPhysicallyBasedMaterial(TextureGeneration tg)
: 
: since 7.0

DocObjects.Material SimulateMaterial(bool isForDataOnly)
: Call this function to receive the simulation for a RenderMaterial used by the display and other rendering engines.
: Returns - The simulation of the render material
: since 6.0

void SimulateMaterial(Material simulation,bool isForDataOnly)
: Override this function to provide a Rhino.DocObjects.Material definition for this material
     to be used by other rendering engines including the display.
: since 5.1

void SimulateMaterial(Material simulation,TextureGeneration tg)
: Override this function to provide a Rhino.DocObjects.Material definition for this material
     to be used by other rendering engines including the display.
: since 7.0

string TextureChildSlotName(StandardChildSlots slot)
: Override this function to provide information about which texture is used for
     the standard (ie - defined in ON_Texture) texture channels.
: Returns - The texture used for the channel.
: since 5.1
