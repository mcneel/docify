using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml.Linq;

using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

using Newtonsoft.Json;

namespace Docify.Parse
{
    /// <summary>
    /// Generates authoritative metadata for the .NET Base Class Library (BCL) base
    /// types that RhinoCommon classes derive from (WWW-3489).
    ///
    /// The main generator is purely syntactic, so a class deriving from a BCL type
    /// (e.g. RuntimeDocumentDataTable : Dictionary&lt;object,object&gt;) exposes none
    /// of its inherited API. Rather than hand-curating that, this reflects the real
    /// .NET reference assemblies (with their XML docs) via Roslyn and emits the
    /// members + Microsoft Learn links the web app renders as inherited members.
    ///
    /// The output (bcl_api.json) is keyed by the same normalized base token the web
    /// app computes in getInheritance(): the last dotted segment with generic args
    /// collapsed to "&lt;T&gt;" (e.g. "System.Collections.Generic.Dictionary&lt;object,
    /// object&gt;" -&gt; "Dictionary&lt;T&gt;").
    /// </summary>
    static class BclMetadata
    {
        const string MsLearn = "https://learn.microsoft.com/en-us/dotnet/api/";

        // doc-comment id (e.g. "M:System...ContainsKey(`0)") -> summary text, parsed
        // from the reference assemblies' XML doc files.
        static Dictionary<string, string> _summaries = new(StringComparer.Ordinal);

        static readonly SymbolDisplayFormat ShortType = new SymbolDisplayFormat(
            globalNamespaceStyle: SymbolDisplayGlobalNamespaceStyle.Omitted,
            typeQualificationStyle: SymbolDisplayTypeQualificationStyle.NameOnly,
            genericsOptions: SymbolDisplayGenericsOptions.IncludeTypeParameters,
            miscellaneousOptions: SymbolDisplayMiscellaneousOptions.UseSpecialTypes);

        // ---- public entry points -------------------------------------------------

        /// <summary>
        /// Standalone command: read base types from an existing api_info.json and write
        /// bcl_api.json next to it (or to <paramref name="outputPath"/>). Lets the BCL
        /// data be regenerated from committed data without a full Rhino source build.
        /// </summary>
        public static void RunStandalone(string apiInfoPath, string outputPath)
        {
            if (!GenerateFromApiInfo(apiInfoPath, outputPath))
                Environment.Exit(1);
        }

        /// <summary>
        /// Read base types from an api_info.json and write bcl_api.json. Returns false
        /// on failure (logged) rather than throwing/exiting, so callers in the middle of
        /// a build aren't disrupted. Called both by the standalone command and at the
        /// end of a full build.
        /// </summary>
        public static bool GenerateFromApiInfo(string apiInfoPath, string outputPath)
        {
            if (!File.Exists(apiInfoPath))
            {
                Console.Error.WriteLine($"BCL metadata: api_info not found: {apiInfoPath}");
                return false;
            }
            List<ApiType> types;
            try
            {
                string json = File.ReadAllText(apiInfoPath);
                // The file may be a .js module (var RhinoCommonApi = [ ... ]) or plain JSON.
                int start = json.IndexOf('[');
                int end = json.LastIndexOf(']');
                if (start < 0 || end < start)
                {
                    Console.Error.WriteLine("BCL metadata: could not find JSON array in api_info file");
                    return false;
                }
                types = JsonConvert.DeserializeObject<List<ApiType>>(json.Substring(start, end - start + 1));
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"BCL metadata: failed to read {apiInfoPath}: {ex.Message}");
                return false;
            }

            var known = new HashSet<string>(
                types.Where(t => t.Name != null).Select(t => t.Name), StringComparer.Ordinal);
            var baseTokens = types.Where(t => !string.IsNullOrEmpty(t.Baseclass)).Select(t => t.Baseclass);

            return Write(baseTokens, known, outputPath);
        }

        /// <summary>
        /// Resolve every needed BCL base token to a reference-assembly symbol and write
        /// the metadata map to <paramref name="outputPath"/>. Never throws out to the
        /// caller — a failure here must not break the main documentation build.
        /// </summary>
        public static bool Write(IEnumerable<string> baseTokens, ISet<string> knownRhinoTypeNames, string outputPath)
        {
            try
            {
                // Keep only bases the web app can't already resolve within RhinoCommon,
                // keyed by the web app's normalized token so we emit one entry per base.
                var tokensByKey = new Dictionary<string, string>(StringComparer.Ordinal);
                foreach (var raw in baseTokens)
                {
                    string key = NormalizeKey(raw);
                    string simple = SimpleName(raw);
                    if (key == "EventArgs" || knownRhinoTypeNames.Contains(key) || knownRhinoTypeNames.Contains(simple))
                        continue;
                    if (!tokensByKey.ContainsKey(key))
                        tokensByKey[key] = raw;
                }
                if (tokensByKey.Count == 0)
                {
                    Console.WriteLine("BCL metadata: no external base types found");
                    return true;
                }

                var index = BuildTypeIndex(out string refDir);
                if (index == null)
                {
                    Console.Error.WriteLine("BCL metadata: could not locate .NET reference assemblies; skipping");
                    return false;
                }
                Console.WriteLine($"BCL metadata: using reference assemblies at {refDir}");

                var result = new SortedDictionary<string, object>(StringComparer.Ordinal);
                foreach (var kv in tokensByKey.OrderBy(k => k.Key, StringComparer.Ordinal))
                {
                    var symbol = Resolve(index, kv.Value);
                    if (symbol == null)
                    {
                        Console.WriteLine($"BCL metadata: unresolved base '{kv.Value}' (key {kv.Key})");
                        continue;
                    }
                    result[kv.Key] = BuildType(symbol);
                    Console.WriteLine($"BCL metadata: {kv.Key} -> {symbol.ToDisplayString()}");
                }

                var settings = new JsonSerializerSettings { Formatting = Formatting.Indented };
                File.WriteAllText(outputPath, JsonConvert.SerializeObject(result, settings));
                Console.WriteLine($"BCL metadata: wrote {result.Count} type(s) to {outputPath}");
                return true;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"BCL metadata generation failed (non-fatal): {ex.Message}");
                return false;
            }
        }

        // ---- token normalization (mirrors the web app's getInheritance) ----------

        // Last dotted segment with generic args collapsed to "<T>".
        static string NormalizeKey(string baseToken)
        {
            string b = SimpleName(baseToken);
            if (baseToken.IndexOf('<') > 0) b += "<T>";
            return b;
        }

        // Last dotted segment, generic args stripped (e.g. "System.IO.IOException" -> "IOException").
        static string SimpleName(string baseToken)
        {
            int lt = baseToken.IndexOf('<');
            string head = lt > 0 ? baseToken.Substring(0, lt) : baseToken;
            int dot = head.LastIndexOf('.');
            return dot >= 0 ? head.Substring(dot + 1) : head;
        }

        static int Arity(string baseToken)
        {
            int lt = baseToken.IndexOf('<');
            if (lt < 0) return 0;
            int depth = 0, count = 1;
            for (int i = lt; i < baseToken.Length; i++)
            {
                char c = baseToken[i];
                if (c == '<') depth++;
                else if (c == '>') { depth--; if (depth == 0) break; }
                else if (c == ',' && depth == 1) count++;
            }
            return count;
        }

        // ---- reference-assembly resolution ---------------------------------------

        // Index of top-level public reference types, by full metadata name and by
        // simple metadata name (System-namespace preferred on collisions).
        class TypeIndex
        {
            public Dictionary<string, INamedTypeSymbol> ByFull = new(StringComparer.Ordinal);
            public Dictionary<string, INamedTypeSymbol> BySimple = new(StringComparer.Ordinal);
        }

        static TypeIndex BuildTypeIndex(out string refDir)
        {
            refDir = FindReferenceAssemblyDir();
            if (refDir == null) return null;

            var references = new List<MetadataReference>();
            foreach (var dll in Directory.GetFiles(refDir, "*.dll"))
            {
                references.Add(MetadataReference.CreateFromFile(dll));
                LoadSummaries(Path.ChangeExtension(dll, ".xml"));
            }

            var compilation = CSharpCompilation.Create("bcl", references: references);
            var index = new TypeIndex();
            foreach (var type in AllTopLevelTypes(compilation.GlobalNamespace))
            {
                if (type.DeclaredAccessibility != Accessibility.Public) continue;
                string ns = type.ContainingNamespace?.ToDisplayString() ?? "";
                string full = string.IsNullOrEmpty(ns) ? type.MetadataName : ns + "." + type.MetadataName;
                if (!index.ByFull.ContainsKey(full)) index.ByFull[full] = type;
                if (!index.BySimple.TryGetValue(type.MetadataName, out var existing) || Prefer(type, existing))
                    index.BySimple[type.MetadataName] = type;
            }
            return index;
        }

        // Prefer System-rooted, then shorter namespaces, then ordinal — enough to pick
        // the canonical type when a simple name collides across assemblies.
        static bool Prefer(INamedTypeSymbol candidate, INamedTypeSymbol current)
        {
            string a = candidate.ContainingNamespace?.ToDisplayString() ?? "";
            string b = current.ContainingNamespace?.ToDisplayString() ?? "";
            bool aSys = a == "System" || a.StartsWith("System.");
            bool bSys = b == "System" || b.StartsWith("System.");
            if (aSys != bSys) return aSys;
            int da = a.Count(c => c == '.'), db = b.Count(c => c == '.');
            if (da != db) return da < db;
            return string.CompareOrdinal(a, b) < 0;
        }

        static INamedTypeSymbol Resolve(TypeIndex index, string baseToken)
        {
            int arity = Arity(baseToken);
            string simple = SimpleName(baseToken) + (arity > 0 ? "`" + arity : "");

            int lt = baseToken.IndexOf('<');
            string head = lt > 0 ? baseToken.Substring(0, lt) : baseToken;
            if (head.Contains('.'))
            {
                string full = head + (arity > 0 ? "`" + arity : "");
                if (index.ByFull.TryGetValue(full, out var byFull)) return byFull;
            }
            return index.BySimple.TryGetValue(simple, out var bySimple) ? bySimple : null;
        }

        static IEnumerable<INamedTypeSymbol> AllTopLevelTypes(INamespaceSymbol ns)
        {
            foreach (var t in ns.GetTypeMembers()) yield return t;
            foreach (var child in ns.GetNamespaceMembers())
                foreach (var t in AllTopLevelTypes(child))
                    yield return t;
        }

        static string FindReferenceAssemblyDir()
        {
            // dotnet root: env override, else derived from the running runtime dir.
            var roots = new List<string>();
            string envRoot = Environment.GetEnvironmentVariable("DOTNET_ROOT");
            if (!string.IsNullOrEmpty(envRoot)) roots.Add(envRoot);
            string runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location);
            // runtimeDir ~ {root}/shared/Microsoft.NETCore.App/{ver}; go up 3.
            if (!string.IsNullOrEmpty(runtimeDir))
            {
                var up = Directory.GetParent(runtimeDir)?.Parent?.Parent?.FullName;
                if (up != null) roots.Add(up);
            }
            roots.Add("/usr/local/share/dotnet");
            roots.Add(@"C:\Program Files\dotnet");

            var major = Environment.Version.Major; // 8 for net8.0
            foreach (var root in roots.Where(r => !string.IsNullOrEmpty(r) && Directory.Exists(r)))
            {
                string packRoot = Path.Combine(root, "packs", "Microsoft.NETCore.App.Ref");
                if (!Directory.Exists(packRoot)) continue;
                var best = Directory.GetDirectories(packRoot)
                    .Select(d => new { dir = d, ver = ParseVersion(Path.GetFileName(d)) })
                    .Where(x => x.ver != null && x.ver.Major == major)
                    .OrderByDescending(x => x.ver)
                    .FirstOrDefault();
                if (best == null) continue;
                var tfmDir = Directory.GetDirectories(Path.Combine(best.dir, "ref"))
                    .OrderByDescending(d => d)
                    .FirstOrDefault();
                if (tfmDir != null) return tfmDir;
            }
            return null;
        }

        static Version ParseVersion(string s)
        {
            int dash = s.IndexOf('-'); // strip pre-release suffix
            if (dash > 0) s = s.Substring(0, dash);
            return Version.TryParse(s, out var v) ? v : null;
        }

        // ---- member extraction ---------------------------------------------------

        static object BuildType(INamedTypeSymbol symbol)
        {
            var properties = new List<object>();
            var methods = new List<object>();
            var fields = new List<object>();
            var events = new List<object>();
            var seen = new HashSet<string>(StringComparer.Ordinal);

            // Walk the type and its bases (stop before System.Object, whose members
            // — ToString/Equals/GetHashCode/GetType — are noise on every type).
            for (var t = symbol; t != null && t.SpecialType != SpecialType.System_Object; t = t.BaseType)
            {
                foreach (var m in t.GetMembers())
                {
                    if (m.DeclaredAccessibility != Accessibility.Public &&
                        m.DeclaredAccessibility != Accessibility.Protected)
                        continue;
                    // Static members aren't inherited in the documentation sense (they're
                    // accessed via the declaring type) and are mostly noise here.
                    if (m.IsStatic || m.IsImplicitlyDeclared || IsObsolete(m)) continue;

                    switch (m)
                    {
                        case IPropertySymbol p:
                            AddUnique(seen, "P", MemberSignature(p), () => properties.Add(PropertyJson(p)));
                            break;
                        case IMethodSymbol me when me.MethodKind == MethodKind.Ordinary:
                            AddUnique(seen, "M", MemberSignature(me), () => methods.Add(MethodJson(me)));
                            break;
                        case IFieldSymbol f when !f.IsConst:
                            AddUnique(seen, "F", MemberSignature(f), () => fields.Add(FieldJson(f)));
                            break;
                        case IEventSymbol e:
                            AddUnique(seen, "E", MemberSignature(e), () => events.Add(EventJson(e)));
                            break;
                    }
                }
            }

            var node = new Dictionary<string, object>
            {
                ["namespace"] = symbol.ContainingNamespace?.ToDisplayString() ?? "",
                ["name"] = symbol.ToDisplayString(ShortType),
                ["dataType"] = "class",
                ["docsUrl"] = DocUrl(symbol),
            };
            if (properties.Count > 0) node["properties"] = Sorted(properties);
            if (methods.Count > 0) node["methods"] = Sorted(methods);
            if (fields.Count > 0) node["fields"] = Sorted(fields);
            if (events.Count > 0) node["events"] = Sorted(events);
            return node;
        }

        static List<object> Sorted(List<object> members) =>
            members.OrderBy(m => (string)((Dictionary<string, object>)m)["signature"], StringComparer.Ordinal).ToList();

        static void AddUnique(HashSet<string> seen, string kind, string sig, Action add)
        {
            if (seen.Add(kind + ":" + sig)) add();
        }

        static Dictionary<string, object> PropertyJson(IPropertySymbol p)
        {
            var d = BaseMember(p, MemberSignature(p));
            if (!p.IsIndexer)
            {
                var access = new List<string>();
                if (p.GetMethod != null && p.GetMethod.DeclaredAccessibility == Accessibility.Public) access.Add("get");
                if (p.SetMethod != null && p.SetMethod.DeclaredAccessibility == Accessibility.Public) access.Add("set");
                if (access.Count > 0) d["property"] = access;
            }
            return d;
        }

        static Dictionary<string, object> MethodJson(IMethodSymbol m) => BaseMember(m, MemberSignature(m));
        static Dictionary<string, object> FieldJson(IFieldSymbol f) => BaseMember(f, MemberSignature(f));
        static Dictionary<string, object> EventJson(IEventSymbol e) => BaseMember(e, MemberSignature(e));

        static Dictionary<string, object> BaseMember(ISymbol s, string signature)
        {
            var modifiers = new List<string> { s.DeclaredAccessibility == Accessibility.Protected ? "protected" : "public" };
            if (s.IsStatic) modifiers.Add("static");
            var d = new Dictionary<string, object>
            {
                ["signature"] = signature,
                ["modifiers"] = modifiers,
                ["protected"] = s.DeclaredAccessibility == Accessibility.Protected,
                ["virtual"] = s.IsVirtual || s.IsOverride || s.IsAbstract,
                ["docsUrl"] = DocUrl(s),
            };
            string summary = DocSummary(s.GetDocumentationCommentId());
            if (!string.IsNullOrWhiteSpace(summary)) d["summary"] = summary;
            return d;
        }

        static string MemberSignature(ISymbol s)
        {
            switch (s)
            {
                case IPropertySymbol p when p.IsIndexer:
                    return $"{p.Type.ToDisplayString(ShortType)} this[{Parameters(p.Parameters)}]";
                case IPropertySymbol p:
                    return $"{p.Type.ToDisplayString(ShortType)} {p.Name}";
                case IMethodSymbol m:
                    return $"{m.ReturnType.ToDisplayString(ShortType)} {m.Name}({Parameters(m.Parameters)})";
                case IFieldSymbol f:
                    return $"{f.Type.ToDisplayString(ShortType)} {f.Name}";
                case IEventSymbol e:
                    return $"{e.Type.ToDisplayString(ShortType)} {e.Name}";
                default:
                    return s.Name;
            }
        }

        static string Parameters(IEnumerable<IParameterSymbol> ps)
        {
            return string.Join(", ", ps.Select(p =>
            {
                string prefix = p.RefKind switch
                {
                    RefKind.Out => "out ",
                    RefKind.Ref => "ref ",
                    RefKind.In => "in ",
                    _ => ""
                };
                if (p.IsParams) prefix = "params ";
                return $"{prefix}{p.Type.ToDisplayString(ShortType)} {p.Name}";
            }));
        }

        static bool IsObsolete(ISymbol s) =>
            s.GetAttributes().Any(a => a.AttributeClass?.Name == "ObsoleteAttribute");

        // ---- Microsoft Learn URL + XML summary -----------------------------------

        // Doc-comment id (e.g. "M:System...Dictionary`2.ContainsKey(`0)") -> MS Learn slug.
        static string DocUrl(ISymbol s)
        {
            string id = s.GetDocumentationCommentId();
            if (string.IsNullOrEmpty(id)) return MsLearn;
            int colon = id.IndexOf(':');
            if (colon >= 0) id = id.Substring(colon + 1);
            int paren = id.IndexOf('(');
            if (paren >= 0) id = id.Substring(0, paren);
            id = Regex.Replace(id, "``\\d+", "");        // method type-parameter count
            id = Regex.Replace(id, "`(\\d+)", "-$1");    // type arity -> -N
            return MsLearn + id.ToLowerInvariant();
        }

        static string DocSummary(string id)
        {
            if (string.IsNullOrEmpty(id)) return null;
            return _summaries.TryGetValue(id, out var s) ? s : null;
        }

        // Parse a reference assembly's XML doc file into the doc-id -> summary map.
        static void LoadSummaries(string xmlPath)
        {
            if (!File.Exists(xmlPath)) return;
            try
            {
                var doc = XDocument.Load(xmlPath);
                foreach (var member in doc.Descendants("member"))
                {
                    string name = member.Attribute("name")?.Value;
                    var summary = member.Element("summary");
                    if (name == null || summary == null || _summaries.ContainsKey(name)) continue;
                    var sb = new StringBuilder();
                    RenderXml(summary, sb);
                    string text = Regex.Replace(sb.ToString(), "\\s+", " ").Trim();
                    if (text.Length > 0) _summaries[name] = text;
                }
            }
            catch
            {
                // ignore malformed doc files
            }
        }

        static void RenderXml(XElement el, StringBuilder sb)
        {
            foreach (var node in el.Nodes())
            {
                if (node is XText text)
                {
                    sb.Append(text.Value);
                }
                else if (node is XElement child)
                {
                    string cref = child.Attribute("cref")?.Value;
                    string langword = child.Attribute("langword")?.Value;
                    string name = child.Attribute("name")?.Value;
                    if (cref != null)
                    {
                        int paren = cref.IndexOf('(');
                        if (paren >= 0) cref = cref.Substring(0, paren); // drop method params
                        int dot = cref.LastIndexOf('.');
                        string seg = dot >= 0 ? cref.Substring(dot + 1) : cref;
                        sb.Append(Regex.Replace(seg, "`+\\d+", "")); // drop generic arity backticks
                    }
                    else if (langword != null) sb.Append(langword);
                    else if (name != null) sb.Append(name);
                    else RenderXml(child, sb);
                }
            }
        }

        // Minimal shape for reading api_info.json in the standalone path.
        class ApiType
        {
            [JsonProperty("name")] public string Name { get; set; }
            [JsonProperty("baseclass")] public string Baseclass { get; set; }
        }
    }
}
