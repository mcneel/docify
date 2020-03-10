---
title: "Rhino.Geometry.ComponentIndex"
draft: false
---

# Constructors
## Rhino.Geometry.ComponentIndex(ComponentIndexType type,int index)
- (summary) 
     Construct component index with a specific type/index combination
     
- (since) 5.0
# Properties
## static ComponentIndex Unset
- (summary) 
     The unset value of component index.
     
- (since) 5.0
## ComponentIndexType ComponentIndexType
- (summary) 
     The interpretation of Index depends on the Type value.
     Type             m_index interpretation (0 based indices)
     no_type            used when context makes it clear what array is being index
     brep_vertex        Brep.m_V[] array index
     brep_edge          Brep.m_E[] array index
     brep_face          Brep.m_F[] array index
     brep_trim          Brep.m_T[] array index
     brep_loop          Brep.m_L[] array index
     mesh_vertex        Mesh.m_V[] array index
     meshtop_vertex     MeshTopology.m_topv[] array index
     meshtop_edge       MeshTopology.m_tope[] array index
     mesh_face          Mesh.m_F[] array index
     idef_part          InstanceDefinition.m_object_uuid[] array index
     polycurve_segment  PolyCurve::m_segment[] array index
     dim_linear_point   LinearDimension2::POINT_INDEX
     dim_radial_point   RadialDimension2::POINT_INDEX
     dim_angular_point  AngularDimension2::POINT_INDEX
     dim_ordinate_point OrdinateDimension2::POINT_INDEX
     dim_text_point     TextEntity2 origin point.
     
- (since) 5.0
## int Index
- (summary) 
     The interpretation of m_index depends on the m_type value.
     m_type             m_index interpretation (0 based indices)
     no_type            used when context makes it clear what array is being index
     brep_vertex        Brep.m_V[] array index
     brep_edge          Brep.m_E[] array index
     brep_face          Brep.m_F[] array index
     brep_trim          Brep.m_T[] array index
     brep_loop          Brep.m_L[] array index
     mesh_vertex        Mesh.m_V[] array index
     meshtop_vertex     MeshTopology.m_topv[] array index
     meshtop_edge       MeshTopology.m_tope[] array index
     mesh_face          Mesh.m_F[] array index
     idef_part          InstanceDefinition.m_object_uuid[] array index
     polycurve_segment  PolyCurve::m_segment[] array index
     dim_linear_point   LinearDimension2::POINT_INDEX
     dim_radial_point   RadialDimension2::POINT_INDEX
     dim_angular_point  AngularDimension2::POINT_INDEX
     dim_ordinate_point OrdinateDimension2::POINT_INDEX
     dim_text_point     TextEntity2 origin point.
     
- (since) 5.0
# Methods
## bool IsUnset()
- (summary) 
     Return True is this component index is the same as the Unset component index
     
- (since) 7.0
- (returns) bool This is some return comment
