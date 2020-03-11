---
title: "DracoCompressionOptions"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Options for applying drac compression
```cs
public class DracoCompressionOptions
```
## Constructors

DracoCompressionOptions()
: Initializes to default options
: since 7.0
## Properties

int CompressionLevel
: Compression level. 0 if fastest, but least compression. 10 is slowest, but best compression
: since 7.0

int NormalQuantizationBits
: Sets the quantization compression options for normal values. The
     values will be quantized in a box defined by the maximum extent
     of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
: since 7.0

int PositionQuantizationBits
: Sets the quantization compression options for position values. The
     values will be quantized in a box defined by the maximum extent
     of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
: since 7.0

int TextureCoordintateQuantizationBits
: Sets the quantization compression options for texture coordinate
     values. The values will be quantized in a box defined by the maximum
     extent of the values. I.e., the actual precision of this option depends
     on the scale of the attribute values.
: since 7.0
