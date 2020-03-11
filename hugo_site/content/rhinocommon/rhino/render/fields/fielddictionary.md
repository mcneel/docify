---
title: "FieldDictionary"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.Fields](../)*

Dictionary containing RenderContent data fields, add fields to this
   dictionary in your derived RenderContent classes constructor.  Get field
   values using the TryGet[data type]() methods and set them using the Set()
   method.
```cs
public class FieldDictionary : IEnumerable
```
## Methods

[BoolField](/rhinocommon/rhino/render/fields/boolfield/) Add(string key,bool value)
: Add a new BoolField to the dictionary. This will be a data only field
     and not show up in the content browsers.
: since 5.1

[BoolField](/rhinocommon/rhino/render/fields/boolfield/) Add(string key,bool value,string prompt)
: Add a new BoolField to the dictionary.
: since 5.1

[ByteArrayField](/rhinocommon/rhino/render/fields/bytearrayfield/) Add(string key,byte[] value)
: AddField a new ByteArrayField to the dictionary. This will be a data
     only field and not show up in the content browsers.
: since 5.1

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) Add(string key,Color value)
: Add a new Color4fField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) Add(string key,Color value,string prompt)
: Add a new Color4fField to the dictionary.
: since 5.1

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) Add(string key,Color4f value)
: Add a new Color4fField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) Add(string key,Color4f value,string prompt)
: Add a new Color4fField to the dictionary.
: since 5.1

[DateTimeField](/rhinocommon/rhino/render/fields/datetimefield/) Add(string key,DateTime value)
: Add a new DateTimeField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[DateTimeField](/rhinocommon/rhino/render/fields/datetimefield/) Add(string key,DateTime value,string prompt)
: Add a new DateTimeField to the dictionary.
: since 5.1

[DoubleField](/rhinocommon/rhino/render/fields/doublefield/) Add(string key,double value)
: AddField a new DoubleField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[DoubleField](/rhinocommon/rhino/render/fields/doublefield/) Add(string key,double value,string prompt)
: Add a new DoubleField to the dictionary.
: since 5.1

[FloatField](/rhinocommon/rhino/render/fields/floatfield/) Add(string key,float value)
: Add a new FloatField to the dictionary. This will be a data only field
     and not show up in the content browsers.
: since 5.1

[FloatField](/rhinocommon/rhino/render/fields/floatfield/) Add(string key,float value,string prompt)
: AddField a new FloatField to the dictionary.
: since 5.1

[GuidField](/rhinocommon/rhino/render/fields/guidfield/) Add(string key,Guid value)
: Add a new GuidField to the dictionary. This will be a data only field
     and not show up in the content browsers.
: since 5.1

[GuidField](/rhinocommon/rhino/render/fields/guidfield/) Add(string key,Guid value,string prompt)
: Add a new GuidField to the dictionary.
: since 5.1

[IntField](/rhinocommon/rhino/render/fields/intfield/) Add(string key,int value)
: Add a new IntField to the dictionary. This will be a data only field
     and not show up in the content browsers.
: since 5.1

[IntField](/rhinocommon/rhino/render/fields/intfield/) Add(string key,int value,string prompt)
: Add a new IntField to the dictionary.
: since 5.1

[Point2dField](/rhinocommon/rhino/render/fields/point2dfield/) Add(string key,Point2d value)
: Add a new Point2dField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Point2dField](/rhinocommon/rhino/render/fields/point2dfield/) Add(string key,Point2d value,string prompt)
: Add a new Point2dField to the dictionary.
: since 5.1

[Point3dField](/rhinocommon/rhino/render/fields/point3dfield/) Add(string key,Point3d value)
: Add a new Point3dField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Point3dField](/rhinocommon/rhino/render/fields/point3dfield/) Add(string key,Point3d value,string prompt)
: Add a new Point3dField to the dictionary.
: since 5.1

[Point4dField](/rhinocommon/rhino/render/fields/point4dfield/) Add(string key,Point4d value)
: Add a new Point4dField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Point4dField](/rhinocommon/rhino/render/fields/point4dfield/) Add(string key,Point4d value,string prompt)
: Add a new Point4dField to the dictionary.
: since 5.1

[StringField](/rhinocommon/rhino/render/fields/stringfield/) Add(string key,string value)
: Add a new StringField to the dictionary.  This will be a data only
     field and not show up in the content browsers.
: since 5.1

[StringField](/rhinocommon/rhino/render/fields/stringfield/) Add(string key,string value,string prompt)
: Add a new StringField to the dictionary.
: since 5.1

[TransformField](/rhinocommon/rhino/render/fields/transformfield/) Add(string key,Transform value)
: Add a new TransformField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[TransformField](/rhinocommon/rhino/render/fields/transformfield/) Add(string key,Transform value,string prompt)
: Add a new TransformField to the dictionary.
: since 5.1

[Vector2dField](/rhinocommon/rhino/render/fields/vector2dfield/) Add(string key,Vector2d value)
: Add a new Vector2dField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Vector2dField](/rhinocommon/rhino/render/fields/vector2dfield/) Add(string key,Vector2d value,string prompt)
: Add a new Vector2dField to the dictionary.
: since 5.1

[Vector3dField](/rhinocommon/rhino/render/fields/vector3dfield/) Add(string key,Vector3d value)
: Add a new Vector3dField to the dictionary. This will be a data only
     field and not show up in the content browsers.
: since 5.1

[Vector3dField](/rhinocommon/rhino/render/fields/vector3dfield/) Add(string key,Vector3d value,string prompt)
: Add a new Vector3dField to the dictionary.
: since 5.1

[BoolField](/rhinocommon/rhino/render/fields/boolfield/) AddTextured(string key,bool value,string prompt)
: 
: since 5.7

[BoolField](/rhinocommon/rhino/render/fields/boolfield/) AddTextured(string key,bool value,string prompt,bool treatAsLinear)
: Add a new BoolField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) AddTextured(string key,Color value,string prompt)
: 
: since 5.7

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) AddTextured(string key,Color value,string prompt,bool treatAsLinear)
: Add a new Color4fField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) AddTextured(string key,Color4f value,string prompt)
: 
: since 5.7

[Color4fField](/rhinocommon/rhino/render/fields/color4ffield/) AddTextured(string key,Color4f value,string prompt,bool treatAsLinear)
: Add a new Color4fField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[DateTimeField](/rhinocommon/rhino/render/fields/datetimefield/) AddTextured(string key,DateTime value,string prompt)
: 
: since 5.7

[DateTimeField](/rhinocommon/rhino/render/fields/datetimefield/) AddTextured(string key,DateTime value,string prompt,bool treatAsLinear)
: Add a new DateTimeField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[DoubleField](/rhinocommon/rhino/render/fields/doublefield/) AddTextured(string key,double value,string prompt)
: 
: since 5.7

[DoubleField](/rhinocommon/rhino/render/fields/doublefield/) AddTextured(string key,double value,string prompt,bool treatAsLinear)
: Add a new DoubleField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[FloatField](/rhinocommon/rhino/render/fields/floatfield/) AddTextured(string key,float value,string prompt)
: 
: since 5.7

[FloatField](/rhinocommon/rhino/render/fields/floatfield/) AddTextured(string key,float value,string prompt,bool treatAsLinear)
: Add a new FloatField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[GuidField](/rhinocommon/rhino/render/fields/guidfield/) AddTextured(string key,Guid value,string prompt)
: 
: since 5.7

[GuidField](/rhinocommon/rhino/render/fields/guidfield/) AddTextured(string key,Guid value,string prompt,bool treatAsLinear)
: Add a new GuidField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[IntField](/rhinocommon/rhino/render/fields/intfield/) AddTextured(string key,int value,string prompt)
: 
: since 5.7

[IntField](/rhinocommon/rhino/render/fields/intfield/) AddTextured(string key,int value,string prompt,bool treatAsLinear)
: Add a new IntField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Point2dField](/rhinocommon/rhino/render/fields/point2dfield/) AddTextured(string key,Point2d value,string prompt)
: 
: since 5.7

[Point2dField](/rhinocommon/rhino/render/fields/point2dfield/) AddTextured(string key,Point2d value,string prompt,bool treatAsLinear)
: Add a new Point2dField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Point3dField](/rhinocommon/rhino/render/fields/point3dfield/) AddTextured(string key,Point3d value,string prompt)
: 
: since 5.7

[Point3dField](/rhinocommon/rhino/render/fields/point3dfield/) AddTextured(string key,Point3d value,string prompt,bool treatAsLinear)
: Add a new Point3dField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Point4dField](/rhinocommon/rhino/render/fields/point4dfield/) AddTextured(string key,Point4d value,string prompt)
: 
: since 5.7

[Point4dField](/rhinocommon/rhino/render/fields/point4dfield/) AddTextured(string key,Point4d value,string prompt,bool treatAsLinear)
: Add a new Point4dField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[StringField](/rhinocommon/rhino/render/fields/stringfield/) AddTextured(string key,string value,string prompt)
: 
: since 5.7

[StringField](/rhinocommon/rhino/render/fields/stringfield/) AddTextured(string key,string value,string prompt,bool treatAsLinear)
: Add a new StringField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[TransformField](/rhinocommon/rhino/render/fields/transformfield/) AddTextured(string key,Transform value,string prompt)
: 
: since 5.7

[TransformField](/rhinocommon/rhino/render/fields/transformfield/) AddTextured(string key,Transform value,string prompt,bool treatAsLinear)
: Add a new TransformField to the dictionary. This overload will cause
     the field to be tagged as "textured" so that the texturing UI will
     appear in automatic UIs.
: since 7.0

[Vector2dField](/rhinocommon/rhino/render/fields/vector2dfield/) AddTextured(string key,Vector2d value,string prompt)
: 
: since 5.7

[Vector2dField](/rhinocommon/rhino/render/fields/vector2dfield/) AddTextured(string key,Vector2d value,string prompt,bool treatAsLinear)
: Add a new Vector2dField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

[Vector3dField](/rhinocommon/rhino/render/fields/vector3dfield/) AddTextured(string key,Vector3d value,string prompt)
: 
: since 5.7

[Vector3dField](/rhinocommon/rhino/render/fields/vector3dfield/) AddTextured(string key,Vector3d value,string prompt,bool treatAsLinear)
: Add a new Vector3dField to the dictionary. This overload will cause the
     field to be tagged as "textured" so that the texturing UI will appear
     in automatic UIs.
: since 7.0

bool ContainsField(string fieldName)
: Call this method to determine if a this FieldsList contains a field
     with the specified field name.
: Returns - Returns True if a field with that matches fieldName is found or false
     if it is not found.
: since 5.1

IEnumerator<Field> GetEnumerator()
: 
: since 6.0

[Field](/rhinocommon/rhino/render/fields/field/) GetField(string fieldName)
: Call this method to get the field with the matching name.
: Returns - If the field exists in the Fields dictionary then the field is returned
     otherwise; None is returned.
: since 5.3

void RemoveField(string fieldName)
: 
: since 6.0

void Set(string key,bool value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,bool value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,byte[] value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,byte[] value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Color value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Color value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Color4f value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Color4f value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,DateTime value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,DateTime value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,double value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,double value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,float value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,float value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Guid value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Guid value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,int value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,int value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point2d value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point2d value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point3d value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point3d value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point4d value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Point4d value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,string value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,string value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Transform value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Transform value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Vector2d value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Vector2d value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Vector3d value)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

void Set(string key,Vector3d value,ChangeContexts changeContext)
: Set the field value and send the appropriate change notification to the
     render SDK.  Will throw a InvalidOperationException exception if the key
     name is not valid.
: since 5.1

bool SetTag(string key,object tag)
: Sets an object that contains data to associate with the field.  THIS IS NOW OBSOLETE - if you were using this, please email andy@mcneel.com and let me know why.
: Returns - True if the field is found and the tag was set otherwise False is returned.
: since 5.1

bool TryGetTag(string key,object tag)
: Gets object that contains data associate with a field. THIS IS NOW OBSOLETE - if you were using this, please email andy@mcneel.com and let me know why.
: Returns - Returns True if the field is found and its tag was retrieved otherwise;
     returns false.
: since 5.1

bool TryGetValue(string key,bool value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,byte[] value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Color value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Color4f value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,DateTime value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,double value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,float value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Guid value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,int value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Point2d value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Point3d value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Point4d value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,string value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,T value)
: Parametrized version of TryGetValue.
: Returns - True if field was found. If False out parameter value will be set to default(T).
: since 6.12

bool TryGetValue(string key,Transform value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Vector2d value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1

bool TryGetValue(string key,Vector3d value)
: Find a field with the specified key and get its value if found.
: Returns - Returns True if the key is found and the value parameter is set to the
     field value.  Returns False if the field was not found.
: since 5.1
