using System;
using System.Text;
using System.Collections.Generic;

namespace api_docify
{
  class Program
  {
    static void Main(string[] args)
    {
      const string rhinocommonDirectory = @"..\..\..\..\rhino\src4\DotNetSDK\rhinocommon\dotnet\";
      const string outputDirectory = @"..\..\..\apisite\content\posts\";

      Dictionary<string, List<ParsedMember>> allClasses = new Dictionary<string, List<ParsedMember>>();
      foreach (var sourceFile in AllSourceFiles(rhinocommonDirectory))
      {
        //Console.WriteLine($"parse: {sourceFile}");
        string text = System.IO.File.ReadAllText(sourceFile);
        var parsedItems = SourceFileWalker.ParseSource(text);
        foreach (var parsedItem in parsedItems)
        {
          if (!parsedItem.ParentIsPublic || !parsedItem.IsPublic)
            continue;
          string className = parsedItem.ClassPath;
          if (!allClasses.ContainsKey(className))
            allClasses[className] = new List<ParsedMember>();
          allClasses[className].Add(parsedItem);
        }
      }

      foreach (var kv in allClasses)
      {
        var items = kv.Value;
        items.Sort((a, b) => {
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
      }

      System.Threading.Tasks.Parallel.ForEach(allClasses, (kv) =>
      {
        var content = new StringBuilder();
        content.AppendLine("---");
        content.AppendLine($"title: \"{kv.Key}\"");
        content.AppendLine($"date: {DateTime.Now.ToString("u")}");
        content.AppendLine("draft: false");
        content.AppendLine("---");
        content.AppendLine();

        var items = kv.Value;
        ParsedMemberType state = ParsedMemberType.None;
        foreach (var item in items)
        {
          if (item.IsEvent && state != ParsedMemberType.Event)
          {
            content.AppendLine("# Events");
            state = ParsedMemberType.Event;
          }
          if (item.IsProperty && state != ParsedMemberType.Property)
          {
            content.AppendLine("# Properties");
            state = ParsedMemberType.Property;
          }
          if (item.IsMethod && state != ParsedMemberType.Method)
          {
            content.AppendLine("# Methods");
            state = ParsedMemberType.Method;
          }
          if (item.IsConstructor && state != ParsedMemberType.Constructor)
          {
            content.AppendLine("# Constructors");
            state = ParsedMemberType.Constructor;
          }
          content.AppendLine("## " + item.Signature(false));
          content.AppendLine($"- (summary) {item.Summary()}");
          content.AppendLine($"- (since) {item.Since}");
          string returnType = item.Returns();
          if( !string.IsNullOrWhiteSpace(returnType) && !returnType.Equals("void"))
          {
            content.AppendLine($"- (returns) {returnType}");
          }
        }

        string name = kv.Key;
        string path = System.IO.Path.Combine(outputDirectory, name.ToLower().Replace(".", "-") + ".md");
        System.IO.File.WriteAllText(path, content.ToString());
        Console.WriteLine(name);
      });

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
