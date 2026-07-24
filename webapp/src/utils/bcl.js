// Loader for generated .NET Base Class Library (BCL) base-type metadata (WWW-3489).
//
// The generator (api_docify) is purely syntactic: it records a class's base type as
// a raw string (e.g. "Dictionary<object, object>") but has no member data for types
// outside the parsed RhinoCommon source. So a RhinoCommon class deriving from a BCL
// type used to show none of its inherited API — RuntimeDocumentDataTable looked like
// it had 3 members instead of ~20, hiding the fact that it IS a Dictionary.
//
// bcl_api.json is produced by the C# generator (src/Parse/BclMetadata.cs) reflecting
// the real .NET reference assemblies + their XML docs via Roslyn — it is NOT hand-
// written, so signatures/summaries stay authoritative and never drift. It is keyed by
// the same normalized base token getInheritance() computes (last dotted segment with
// generic args collapsed to "<T>", e.g. "Dictionary<T>", "IOException"). Each entry is
// shaped like a parsed type (namespace/name/docsUrl + member arrays) with a per-member
// docsUrl pointing at Microsoft Learn.
//
// Regenerate after a data refresh with:
//   dotnet run --project src -- bcl webapp/src/api_info.json webapp/src/bcl_api.json
import bclData from '@/bcl_api.json'

// Resolve a normalized base token to a synthetic BCL type node, or null.
export function lookupBcl(normalizedBase) {
  return Object.prototype.hasOwnProperty.call(bclData, normalizedBase)
    ? bclData[normalizedBase]
    : null
}
