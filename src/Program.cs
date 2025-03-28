﻿using System;
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

        private const string Usage = @".NET API documents generator

    Usage:
      {name} init [<project_name>] [--target=<out_dir>] [--source=<source_dir>] [--examples=<examples_dir>] [--force]
      {name} build

    Options:
      -h --help                 Show this help
      -V --version              Show version
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

            if (inputs["init"].IsTrue)
            {

                ProgramConfigs.InitConfigs(
                    // grab the optional project name
                    inputs["<project_name>"]?.Value?.ToString(),
                    inputs["--target"]?.Value?.ToString(),
                    inputs["--source"]?.Value?.ToString(),
                    inputs["--examples"]?.Value?.ToString(),
                    inputs["--force"]?.IsTrue ?? false
                    );
            }
            else if (inputs["build"].IsTrue)
            {
                string source = ProgramConfigs.GetProjectSource();
                if (source is null) {
                    Console.Error.WriteLine("Can not determine source directory from configs");
                    Environment.Exit(1);
                }
                var examplesDir = ProgramConfigs.GetExamplesSource();
                var outputDir = ProgramConfigs.GetProjectTarget();
                // write project info
                var configs = ProgramConfigs.GetConfigs();
                ProjectConfigs.WriteProjectInfo(configs, outputDir);
                // build the docs data file
                Console.WriteLine($"Building docs:\n{source} => {outputDir}");
                Docify(source, examplesDir, outputDir);
            }
        }

        static void Docify(string projDir, string examplesDir, string outputDir)
        {
            Dictionary<string, List<ParsedMember>> allMembers = new Dictionary<string, List<ParsedMember>>();
            Dictionary<string, ParsedType> allTypes = new Dictionary<string, ParsedType>();
            List<ParsedMember> allDelegates = new List<ParsedMember>();
            Dictionary<string, ParsedType> allNamespaces = new Dictionary<string, ParsedType>();
            foreach (var sourceFile in AllSourceFiles(projDir))
            {
                //Console.WriteLine($"parse: {sourceFile}");
                if (sourceFile.Contains("rhinosdkapp.cs")){
                    var i = 0;
                }
                string text = System.IO.File.ReadAllText(sourceFile);
                var (containers, parsedItems, namespaceDefinitions, delegates) = SourceFileWalker.ParseSource(text);
                foreach (var container in containers)
                {
                    string containerName = container.FullName;
                    if (container.FullName.Contains("RenderFeature")){
                        var inspecting = container;
                    }
                    if (allTypes.ContainsKey(containerName))
                        allTypes[containerName].Merge(container);
                    else
                        allTypes[container.FullName] = container;
                }
                foreach (var parsedItem in parsedItems)
                {
                    if (parsedItem.Signature(false).Contains("RhinoObject()")){
                        var inspecting = parsedItem;
                    }
                    if (!parsedItem.ParentIsPublic)
                        continue;
                    if (!parsedItem.IsPublic && !parsedItem.IsProtected && !parsedItem.IsInternal) //We'll skip the internal members when we write the json, we need to know if a constructor is internal so we don't write default constructor
                        continue;
                    string className = parsedItem.ClassPath;
                    if (className != null){
                        if (!allMembers.ContainsKey(className))
                            allMembers[className] = new List<ParsedMember>();
                        allMembers[className].Add(parsedItem);
                    }
                }

                foreach (var ns in namespaceDefinitions)
                {
                    string namespaceName = ns.FullName;
                    if (allNamespaces.ContainsKey(namespaceName))
                        allNamespaces[namespaceName].Merge(ns);
                    else
                        allNamespaces[namespaceName] = ns;
                }
                foreach (var del in delegates)
                {
                    if (!del.ParentIsPublic)
                        continue;
                    if (!del.IsPublic && !del.IsProtected)
                        continue;
                    if (del.IsInternal)
                        continue;
                    allDelegates.Add(del);
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
            string outputDataFile = Path.Combine(outputDir, ProgramConfigs.OutputDataFile);
            JsonBuilder.Write(allNamespaces, publicTypesByNamespace, allDelegates, outputDataFile);
            // write the samples if sample base dir is provided
            if (!string.IsNullOrWhiteSpace(examplesDir) && Directory.Exists(examplesDir))
            {
                outputDataFile = Path.Combine(outputDir, ProgramConfigs.OutputExamplesDataFile);
                JsonBuilder.WriteExamples(publicTypesByNamespace, examplesDir, outputDataFile);
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
