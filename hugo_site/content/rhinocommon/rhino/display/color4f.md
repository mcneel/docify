---
title: "Color4f"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Color defined by 4 floating point values.

static !=
: 

static ==
: 
## Constructors

Color4f(Color color)
: 

Color4f(Color4f color)
: 

Color4f(float red,float green,float blue,float alpha)
: 

Color4f(int argb)
: 
: since 7.0
## Properties

static Color4f Black
: 

static Color4f Empty
: 

static Color4f White
: 

float A
: 

float B
: 

float G
: 

float L
: 
: since 6.3

float R
: 
## Methods

static Color4f ApplyGamma(Color4f col,float gamma)
: 
: since 6.0

static Color4f FromArgb(float a,Color4f color)
: 
: since 5.11

static Color4f FromArgb(float a,float r,float g,float b)
: 
: since 5.11

System.Drawing.Color AsSystemColor()
: 

Color4f BlendTo(float t,Color4f col)
: 

bool Equals(object obj)
: 
: since (unknown)

int GetHashCode()
: 
: since (unknown)
