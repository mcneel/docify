using System;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Reflection;

using DocoptNet;

namespace api_docify
{
    class Program
    {
        private const string name = "api_docify";
        private static string version => $"v{Assembly.GetExecutingAssembly().GetName().Version.ToString(2)}";
        private const string usage = @"dotnet API docs generator

    Usage:
      {name} --name=<proj_name> <proj_path> <proj_output_js>
      {name} --name=<proj_name> <proj_path> <proj_output_js> <examples_path> <examples_output_js>

    Options:
      -h --help                 Show this help
      -V --version              Show version
      --name=<proj_name>        Project name
      <proj_path>               Project directory containing C# source files
      <proj_output_js>          Output javascript file
      <examples_path>           Examples directory containing example source files
      <examples_output_js>      Output javascript file for examples
    ";

        static void Main(string[] args)
        {
            // ask docopt to parse input args
            var inputs = new Docopt().Apply(
                usage.Replace("{name}", name),
                args,
                version: $"{name} {version}",
                exit: true          // exit if input args does not match pattern
                );

            Docify(
                projName: inputs["--name"].Value.ToString(),
                projDir: inputs["<proj_path>"].Value.ToString(),
                outputFile: inputs["<proj_output_js>"].Value.ToString(),
                projExamplesDir: inputs["<examples_path>"] is null ? string.Empty : inputs["<examples_path>"].Value.ToString(),
                projExamplesOutputfile: inputs["<examples_output_js>"] is null ? string.Empty : inputs["<examples_output_js>"].Value.ToString()
                );
        }

        static void Docify(string projName, string projDir, string outputFile, string projExamplesDir = null, string projExamplesOutputfile = null)
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
            JsonBuilder.Write(allNamespaces, publicTypesByNamespace, outputFile);
            // write the samples if sample base dir is provided
            if (projExamplesDir != null && string.Empty != projExamplesDir)
                JsonBuilder.WriteExamples(publicTypesByNamespace, projExamplesDir, projExamplesOutputfile);
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
