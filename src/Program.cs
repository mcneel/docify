using System;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Reflection;

using DocoptNet;
using Docify.Parse;

namespace Docify
{
    class Program
    {
        public static string Name = $"{Assembly.GetExecutingAssembly().GetName().Name}";
        public static string Version => $"v{Assembly.GetExecutingAssembly().GetName().Version.ToString(2)}";
        private const string Usage = @"dotnet API docs generator

    Usage:
      {name} --name=<proj_name> <proj_path> <output_js_dir>
      {name} --name=<proj_name> <proj_path> <output_js_dir> <examples_path>

    Options:
      -h --help                 Show this help
      -V --version              Show version
      --name=<proj_name>        Project name
      <proj_path>               Project directory containing C# source files
      <output_js_dir>           Output directory for generated javascript files
      <examples_path>           Examples directory containing example source files
    ";

        static void Main(string[] args)
        {
            // ask docopt to parse input args
            var inputs = new Docopt().Apply(
                Usage.Replace("{name}", Name),
                args,
                version: $"{Name} {Version}",
                exit: true          // exit if input args does not match pattern
                );

            Docify(
                projName: inputs["--name"].Value.ToString(),
                projDir: inputs["<proj_path>"].Value.ToString(),
                outputDir: inputs["<output_js_dir>"].Value.ToString(),
                projExamplesDir: inputs["<examples_path>"] is null ? string.Empty : inputs["<examples_path>"].Value.ToString()
                );
        }

        static void Docify(string projName, string projDir, string outputDir, string projExamplesDir = null)
        {
            Dictionary<string, List<ParsedMember>> allMembers = new Dictionary<string, List<ParsedMember>>();
            Dictionary<string, ParsedType> allTypes = new Dictionary<string, ParsedType>();
            Dictionary<string, ParsedType> allNamespaces = new Dictionary<string, ParsedType>();
            foreach (var sourceFile in AllSourceFiles(projDir))
            {
                //Console.WriteLine($"parse: {sourceFile}");
                string text = System.IO.File.ReadAllText(sourceFile);
                var (containers, parsedItems, namespaceDefinitions) = SourceFileWalker.ParseSource(text);
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

                foreach (var ns in namespaceDefinitions)
                {
                    string namespaceName = ns.FullName;
                    if (allNamespaces.ContainsKey(namespaceName))
                        allNamespaces[namespaceName].Merge(ns);
                    else
                        allNamespaces[namespaceName] = ns;
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

            foreach (var kv in allTypes)
            {
                var item = kv.Value;
                if( item.Name.Equals("NamespaceDoc"))
                {
                    string ns = item.Namespace;
                    allNamespaces[ns].Merge(item);
                }
            }

            var publicTypesByNamespace = new Dictionary<string, List<ParsedType>>();
            foreach (var kv in allTypes)
            {
                var basetype = kv.Value;
                if (!basetype.IsPublic)
                    continue;
                string ns = basetype.Namespace;
                if (!publicTypesByNamespace.ContainsKey(ns))
                    publicTypesByNamespace[ns] = new List<ParsedType>();
                publicTypesByNamespace[ns].Add(basetype);
            }

            //const string markdownOutput = "../../../hugo_site/content/rhinocommon/";
            //MarkdownBuilder.WriteNamespaces(namespaces, markdownOutput);
            //MarkdownBuilder.WriteTypes(allTypes, markdownOutput);
            string outputJsFile = Path.Combine(outputDir, $"{projName}Api.json");
            JsonBuilder.Write(allNamespaces, publicTypesByNamespace, outputJsFile);
            // write the samples if sample base dir is provided
            if (projExamplesDir != null && string.Empty != projExamplesDir)
            {
                outputJsFile = Path.Combine(outputDir, $"{projName}Examples.js");
                JsonBuilder.WriteExamples(publicTypesByNamespace, projExamplesDir, outputJsFile);
            }
        }

        static IEnumerable<string> AllSourceFiles(string sourcePath)
        {
            foreach (string file in System.IO.Directory.EnumerateFiles(sourcePath, "*.cs", System.IO.SearchOption.AllDirectories))
            {
                string filename = System.IO.Path.GetFileName(file);
                if (filename.Equals(".cs") || filename.StartsWith("AutoNativeMethods"))
                    continue;
                if (file.Contains("\\obj\\"))
                    continue;
                if (file.ToLower().Contains("rhinomobile"))
                    continue;
                yield return file;
            }
        }
    }
}
