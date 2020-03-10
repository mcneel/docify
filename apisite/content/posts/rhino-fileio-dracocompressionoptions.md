---
title: "Rhino.FileIO.DracoCompressionOptions"
draft: false
---

# Constructors
## Rhino.FileIO.DracoCompressionOptions()
- (summary) 
      Initializes to default options
     
- (since) 7.0
# Properties
## int CompressionLevel
- (summary) 
     Compression level. 0 if fastest, but least compression. 10 is slowest, but best compression
     
- (since) 7.0
## int NormalQuantizationBits
- (summary) 
     Sets the quantization compression options for normal values. The
     values will be quantized in a box defined by the maximum extent
     of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
     
- (since) 7.0
## int PositionQuantizationBits
- (summary) 
     Sets the quantization compression options for position values. The
     values will be quantized in a box defined by the maximum extent
     of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
     
- (since) 7.0
## int TextureCoordintateQuantizationBits
- (summary) 
     Sets the quantization compression options for texture coordinate
     values. The values will be quantized in a box defined by the maximum
     extent of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
     
- (since) 7.0
