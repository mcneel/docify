---
title: "RenderMaterial"
draft: false
---

*Namespace: Rhino.Render*
## Properties
#### static Guid GemMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid GlassMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid MetalMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid PaintMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid PictureMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid PlasterMaterialGuid
- (summary) 
- (since) 6.0
#### static Guid PlasticMaterialGuid
- (summary) 
- (since) 6.0
#### PreviewBackgroundType DefaultPreviewBackgroundType
- (summary) 
     Set or get the default scene background for the image that appears in
     preview panes
     
- (since) 5.11
#### PreviewGeometryType DefaultPreviewGeometryType
- (summary) 
     Set or get the default geometry that appears in preview panes
     
- (since) 5.11
#### double DefaultPreviewSize
- (summary) 
     The default preview geometry size
     
- (since) 5.11
#### bool SmellsLikeGem
- (summary) 
- (since) 6.0
#### bool SmellsLikeGlass
- (summary) 
- (since) 6.0
#### bool SmellsLikeMetal
- (summary) 
- (since) 6.0
#### bool SmellsLikePaint
- (summary) 
- (since) 6.0
#### bool SmellsLikePlaster
- (summary) 
- (since) 6.0
#### bool SmellsLikePlastic
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedGem
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedGlass
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedMetal
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedPaint
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedPlaster
- (summary) 
- (since) 6.0
#### bool SmellsLikeTexturedPlastic
- (summary) 
- (since) 6.0
## Methods
#### static RenderMaterial CreateBasicMaterial(Material material)
- (summary) 
     Constructs a new basic material from a Material.
     
- (since) 5.1
- (returns) RenderMaterial This is some return comment
#### static RenderMaterial CreateBasicMaterial(Material material,RhinoDoc doc)
- (summary) 
- (since) 6.4
- (returns) RenderMaterial This is some return comment
#### static RenderMaterial CreateImportedMaterial(Material material,RhinoDoc doc,bool bReference)
- (summary) 
- (since) 7.0
- (returns) RenderMaterial This is some return comment
#### double GetTextureAmountFromUsage(StandardChildSlots which)
- (summary) 
- (since) 6.0
- (returns) double This is some return comment
#### RenderTexture GetTextureFromUsage(StandardChildSlots which)
- (summary) 
- (since) 6.0
- (returns) RenderTexture This is some return comment
#### bool GetTextureOnFromUsage(StandardChildSlots which)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool HandleTexturedValue(string slotname,TexturedValue<T> tc)
- (summary) 
     Handle a textured content field. Values will be read into an
     instance of TexturedColor
     
- (since) 6.12
- (returns) bool This is some return comment
#### DocObjects.Material SimulatedMaterial(bool isForDataOnly)
- (summary) 
- (since) 7.0
- (returns) DocObjects.Material This is some return comment
#### DocObjects.Material SimulatedMaterial(TextureGeneration tg)
- (summary) 
- (since) 7.0
- (returns) DocObjects.Material This is some return comment
#### Rhino.Render.PhysicallyBasedMaterial SimulatedPhysicallyBasedMaterial(TextureGeneration tg)
- (summary) 
- (since) 7.0
- (returns) Rhino.Render.PhysicallyBasedMaterial This is some return comment
#### DocObjects.Material SimulateMaterial(bool isForDataOnly)
- (summary) 
     Call this function to receive the simulation for a RenderMaterial used by the display and other rendering engines.
     
- (since) 6.0
- (returns) DocObjects.Material This is some return comment
#### void SimulateMaterial(Material simulation,bool isForDataOnly)
- (summary) 
     Override this function to provide a Rhino.DocObjects.Material definition for this material
     to be used by other rendering engines including the display.
     
- (since) 5.1
- (returns) void This is some return comment
#### void SimulateMaterial(Material simulation,TextureGeneration tg)
- (summary) 
     Override this function to provide a Rhino.DocObjects.Material definition for this material
     to be used by other rendering engines including the display.
     
- (since) 7.0
- (returns) void This is some return comment
#### string TextureChildSlotName(StandardChildSlots slot)
- (summary) 
     Override this function to provide information about which texture is used for
     the standard (ie - defined in ON_Texture) texture channels.
     
- (since) 5.1
- (returns) string This is some return comment
