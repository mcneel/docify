using System;
using System.IO;
using System.Collections.Generic;
using System.Reflection;

using YamlDotNet;

namespace Docify
{
    public static class ProgramConfigs
    {
        /* ASSUMPTIONS */
        // configs
        private const string ConfigFileName = "docify.yaml";
        private static string CurrentPath => $"{Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)}";
        private static string ConfigFilePath => Path.Combine(CurrentPath, ConfigFileName);

        // output
        // FIXME: come up with a system for output path
        public const string OutputProjectDataFile = "proj_info.json";
        public const string OutputDataFile = "api_info.json";
        public const string OutputExamplesDataFile = "api_examples.json";


        private const string SourceKey = "source";
        private const string ExamplesKey = "examples";
        private const string TargetKey = "target";
        private static string ConfigTemplate = $@"# auto-generated {Program.Name} config file. configure for your project
{SourceKey}: ""{{0}}""
{ExamplesKey}: ""{{1}}""
{TargetKey}: ""{{2}}""
name: ""{{3}}""
shortname: ""your project short name""
description: ""your project description""
";

        private static string _source = null;
        private static string _examples = null;
        private static string _target = null;
        private static IDictionary<string, string> _configs = null;

        public static void InitConfigs(string projectName = "", string targetDir = null, string sourceDir = null, string examplesDir = null, bool force = false)
        {
            if (!force && File.Exists(ConfigFilePath)) {
                Console.Error.WriteLine($"Config file already exists: {ConfigFilePath}");
                Environment.Exit(1);
            }

            using (var cfgFile = File.CreateText(ConfigFilePath))
            {
                targetDir ??= ProgramConfigs.CurrentPath;
                sourceDir ??= ProgramConfigs.CurrentPath;
                examplesDir ??= sourceDir;

                cfgFile.Write(
                    string.Format(
                        ConfigTemplate,
                        sourceDir,
                        examplesDir,
                        targetDir,
                        projectName != string.Empty ? projectName : "your project name"
                        ));
                Console.WriteLine($"Created config file: {ConfigFilePath}");
            }
        }

        private static void UpdateConfigs()
        {
            if (!File.Exists(ConfigFilePath))
            {
                Console.Error.WriteLine($"Can not find config file at: {ConfigFilePath}");
                Environment.Exit(1);
            }

            // make a yaml deserializer
            var deserializer = new YamlDotNet.Serialization.Deserializer();
            string configData = File.ReadAllText(ConfigFilePath);
            try
            {
                _configs = deserializer.Deserialize<Dictionary<string, string>>(configData);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error reading config file: {ex.Message}");
                Environment.Exit(1);
            }

#if DEBUG
            // write parsed configs in debug mode
            foreach (var cfg in _configs)
                Console.WriteLine($"{cfg.Key} = {cfg.Value}");
#endif
            // remove the known properties
            _configs.TryGetValue(SourceKey, out _source);
            _configs.Remove(SourceKey);
            _configs.TryGetValue(ExamplesKey, out _examples);
            _configs.Remove(ExamplesKey);
            _configs.TryGetValue(TargetKey, out _target);
            _configs.Remove(TargetKey);
        }

        public static IDictionary<string, string> GetConfigs()
        {
            if (_configs is null)
                UpdateConfigs();

            return _configs;
        }

        public static string GetProjectSource()
        {
            if (_source is null)
                UpdateConfigs();

            return _source;
        }

        public static string GetExamplesSource()
        {
            if (_examples is null)
                UpdateConfigs();

            return _examples;
        }

        public static string GetProjectTarget()
        {
            if (_target is null)
                UpdateConfigs();

            return _target;
        }

    }
}
