using System;
using System.Text;
using System.Collections.Generic;

namespace api_docify
{
    class Program
    {
        static void Main(string[] args)
        {
            const string rhinocommonDirectory = "../../../../rhino/src4/DotNetSDK/rhinocommon/dotnet/";

            Dictionary<string, List<ParsedMember>> allMembers = new Dictionary<string, List<ParsedMember>>();
            Dictionary<string, ParsedType> allTypes = new Dictionary<string, ParsedType>();
            foreach (var sourceFile in AllSourceFiles(rhinocommonDirectory))
            {
                //Console.WriteLine($"parse: {sourceFile}");
                string text = System.IO.File.ReadAllText(sourceFile);
                var (containers, parsedItems) = SourceFileWalker.ParseSource(text);
                foreach (var container in containers)
                {
                    string containerName = container.FullName;
                    if (allTypes.ContainsKey(containerName))
                        allTypes[containerName].Merge(container);
                    else
                        allTypes[container.FullName] = container;
                }
                foreach (var parsedItem in parsedItems)
                {
                    if (!parsedItem.ParentIsPublic || !parsedItem.IsPublic)
                        continue;
                    string className = parsedItem.ClassPath;
                    if (!allMembers.ContainsKey(className))
                        allMembers[className] = new List<ParsedMember>();
                    allMembers[className].Add(parsedItem);
                }
            }

            foreach (var kv in allMembers)
            {
                var items = kv.Value;
                items.Sort((a, b) =>
                {
                    int aType = (int)a.MemberType;
                    int bType = (int)b.MemberType;
                    if (aType < bType)
                        return -1;
                    if (bType < aType)
                        return 1;
                    if (a.IsStatic && !b.IsStatic)
                        return -1;
                    if (b.IsStatic && !a.IsStatic)
                        return 1;
                    return string.Compare(a.Signature(true), b.Signature(true));
                });
                ParsedType type = allTypes[kv.Key];
                type.Members = items;
                System.Threading.Tasks.Parallel.ForEach(items, (item) => { item.ParentType = type; });
            }

            Dictionary<string, List<ParsedType>> namespaces = new Dictionary<string, List<ParsedType>>();
            foreach (var kv in allTypes)
            {
                var basetype = kv.Value;
                if (!basetype.IsPublic)
                    continue;
                string ns = basetype.Namespace;
                if (!namespaces.ContainsKey(ns))
                    namespaces[ns] = new List<ParsedType>();
                namespaces[ns].Add(basetype);
            }

            const string markdownOutput = "../../../hugo_site/content/rhinocommon/";
            MarkdownBuilder.WriteNamespaces(namespaces, markdownOutput);
            MarkdownBuilder.WriteTypes(allTypes, markdownOutput);

        }

        static IEnumerable<string> AllSourceFiles(string sourcePath)
        {
            foreach (string file in System.IO.Directory.EnumerateFiles(sourcePath, "*.cs", System.IO.SearchOption.AllDirectories))
            {
                string filename = System.IO.Path.GetFileName(file);
                if (filename.Equals(".cs") || filename.StartsWith("AutoNative"))
                    continue;
                if (file.Contains("\\obj\\"))
                    continue;
                yield return file;
            }
        }
    }
}
