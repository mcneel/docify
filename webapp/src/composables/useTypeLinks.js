import { unref } from 'vue'
import { useApiStore } from '@/stores/api.js'
import { itemPath } from '@/utils/paths.js'
import { resolveToken } from '@/utils/typemap.js'

// External docs links for well-known BCL/C# types (ported from MemberSignature).
const STANDARD_CSHARP_TYPES = {
  int: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  string:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type',
  bool: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool',
  double:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types',
  float:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types',
  decimal:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types',
  char: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/char',
  byte: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  void: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void',
  object:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type',
  DateTime: 'https://learn.microsoft.com/en-us/dotnet/api/system.datetime',
  uint: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  sbyte:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  short:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  ushort:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  long: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  ulong:
    'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types',
  Version: 'https://learn.microsoft.com/en-us/dotnet/api/system.version',
  'System.Collections.Specialized.NameValueCollection':
    'https://learn.microsoft.com/en-us/dotnet/api/system.collections.specialized.namevaluecollection',
  Color: 'https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color',
  'System.Int32[]': 'https://learn.microsoft.com/en-us/dotnet/api/system.int32',
}

// Resolves C# type tokens to internal routes (or MS Learn URLs). `getDatatypeName`
// is a ref/getter for the current type's name (needed for the enum WWW-2098 fallback).
export function useTypeLinks(getDatatypeName, baseUrl = '/') {
  const apiStore = useApiStore()
  const name = () =>
    typeof getDatatypeName === 'function' ? getDatatypeName() : unref(getDatatypeName)

  function typeFromToken(token) {
    return resolveToken(token, apiStore.typeMap, name())
  }
  function tokenPath(token) {
    const type = typeFromToken(token)
    return type ? itemPath(type) : null
  }
  function typeUrl(token) {
    const tp = tokenPath(token)
    let link = tp ? baseUrl + tp : null
    if (!link && STANDARD_CSHARP_TYPES[token]) link = STANDARD_CSHARP_TYPES[token]
    return link
  }

  return { typeFromToken, tokenPath, typeUrl }
}
