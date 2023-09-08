using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Docify.Parse
{
    class MarkdownBuilder
    {
        public static void WriteNamespaces(Dictionary<string, List<ParsedType>> namespaces, string outputDirectory)
        {
            Parallel.ForEach(namespaces, (keyvalue) =>
            {
                StringBuilder content = new StringBuilder();
                content.AppendLine("---");
                content.AppendLine($"title: \"{keyvalue.Key}\"");
                content.AppendLine($"date: {DateTime.Now.ToString("u")}");
                content.AppendLine("draft: false");
                content.AppendLine("---");
                content.AppendLine();

                var items = keyvalue.Value;
                items.Sort((a, b) =>
                {
                    string aName = a.FullName;
                    string bName = b.FullName;
                    return aName.CompareTo(bName);
                });
                foreach (var item in items)
                {
                    content.AppendLine($"- [{item.Name}]({item.Name.ToLower()}/)");
                }

                string directory = OutputDirectoryFromNamespace(outputDirectory, keyvalue.Key);
                if (!System.IO.Directory.Exists(directory))
                    System.IO.Directory.CreateDirectory(directory);

                string path = System.IO.Path.Combine(directory, "_index.md");
                WriteContent(content, path, true);
            });
        }

        static string ParsedTypePath(string baseUrl, ParsedType type)
        {
            string name = type.FullName;
            if (!baseUrl.StartsWith("/"))
                baseUrl = "/" + baseUrl;
            if (!baseUrl.EndsWith("/"))
                baseUrl += "/";
            name = baseUrl + name.Replace(".", "/") + "/";
            return name.ToLower();
        }

        public static void WriteTypes(Dictionary<string, ParsedType> types, string outputDirectory)
        {
            var di = new System.IO.DirectoryInfo(outputDirectory);
            string apibase = di.Name;

            var parallelOptions = new ParallelOptions { MaxDegreeOfParallelism = 100 };
            Parallel.ForEach(types, parallelOptions, (keyValue) =>
            {
                ParsedType basetype = keyValue.Value;
                if (!basetype.IsPublic)
                    return;

                var content = new StringBuilder();
                content.AppendLine("---");
                content.AppendLine($"title: \"{basetype.Name}\"");
                content.AppendLine($"date: {DateTime.Now.ToString("u")}");
                content.AppendLine("draft: false");
                content.AppendLine("---");
                content.AppendLine();

                content.AppendLine($"*Namespace: [{basetype.Namespace}](../)*");
                content.AppendLine();
                string baseTypeSummary = basetype.Summary();
                if (!string.IsNullOrEmpty(baseTypeSummary))
                    content.AppendLine(baseTypeSummary);

                if (basetype.IsClass)
                {
                    content.AppendLine("```cs");
                    string[] attributes = basetype.GetAttributes();
                    for (int i = 0; i < attributes.Length; i++)
                        content.AppendLine(attributes[i]);

                    content.Append($"public class {basetype.Name}");
                    string[] baseList = basetype.GetBaseList(null);
                    if (baseList != null)
                    {
                        for (int i = 0; i < baseList.Length; i++)
                        {
                            if (i == 0)
                                content.Append($": {baseList[i]}");
                            else
                                content.Append($", {baseList[i]}");
                        }
                    }
                    content.AppendLine();
                    content.AppendLine("```");
                }

                if (basetype.Members == null)
                    return; // TODO: Figure out this case

                ParsedMemberType state = ParsedMemberType.None;
                foreach (var item in basetype.Members)
                {
                    if (item.IsEvent && state != ParsedMemberType.Event)
                    {
                        content.AppendLine("## Events");
                        state = ParsedMemberType.Event;
                    }
                    if (item.IsProperty && state != ParsedMemberType.Property)
                    {
                        content.AppendLine("## Properties");
                        state = ParsedMemberType.Property;
                    }
                    if (item.IsMethod && state != ParsedMemberType.Method)
                    {
                        content.AppendLine("## Methods");
                        state = ParsedMemberType.Method;
                    }
                    if (item.IsConstructor && state != ParsedMemberType.Constructor)
                    {
                        content.AppendLine("## Constructors");
                        state = ParsedMemberType.Constructor;
                    }
                    if (item.IsIndexer && state != ParsedMemberType.Indexer)
                    {
                        content.AppendLine("## Indexers");
                        state = ParsedMemberType.Indexer;
                    }
                    content.AppendLine();
                    string signature = item.Signature(false);
                    var returntype = item.ReturnType(types.Values);
                    if (returntype != null && returntype != item.ParentType)
                    {
                        string rn = returntype.Name;
                        int index = signature.IndexOf(rn);
                        string link = ParsedTypePath(apibase, returntype);
                        string s = "";
                        if (index > 0)
                            s = signature.Substring(0, index);
                        s += $"[{signature.Substring(index, rn.Length)}]({link}){signature.Substring(index + rn.Length)}";
                        signature = s;
                    }
                    content.AppendLine(signature);
                    content.AppendLine($": {item.Summary()}");
                    string returnString = item.ReturnDocString();
                    if (!string.IsNullOrWhiteSpace(returnString))
                        content.AppendLine($": Returns - {returnString}");
                    if (!item.Since.Equals("5.0")) // no need to add since tags initial items
                        content.AppendLine($": since {item.Since}");
                }

                string name = basetype.Name;
                string directory = OutputDirectoryFromNamespace(outputDirectory, basetype.Namespace);
                string path = System.IO.Path.Combine(directory, name.ToLower() + ".md");
                if (WriteContent(content, path, true))
                    Console.WriteLine($"(write) {name}");
                else
                    Console.WriteLine($"(no change) {name}");
            });

        }

        static bool WriteContent(StringBuilder content, string path, bool checkExisting)
        {
            string directory = System.IO.Path.GetDirectoryName(path);
            if (!System.IO.Directory.Exists(directory))
                System.IO.Directory.CreateDirectory(directory);
            if (checkExisting && System.IO.File.Exists(path))
            {
                string oldContent = System.IO.File.ReadAllText(path);
                if (oldContent.Equals(content.ToString()))
                    return false; // no need to write
            }
            System.IO.File.WriteAllText(path, content.ToString());
            return true;
        }

        static string OutputDirectoryFromNamespace(string baseDirectory, string ns)
        {
            List<string> dir = new List<string>();
            dir.Add(baseDirectory);
            dir.AddRange(ns.ToLower().Split(new char[] { '.' }));
            string directory = System.IO.Path.Combine(dir.ToArray());
            return directory;
        }
    }
}
