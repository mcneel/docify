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
        private const string TargetKey = "target";
        private static string ConfigTemplate = $@"# auto-generated {Program.Name} config file. configure for your project
{{0}}: ""{ProgramConfigs.CurrentPath}""
{{1}}: ""{ProgramConfigs.CurrentPath}""
name: ""{{2}}""
shortname: ""your project short name""
description: ""your project description""
";

        private static string _source = null;
        private static string _target = null;
        private static IDictionary<string, string> _configs = null;

        public static void InitConfigs(string projectName = "")
        {
            if (File.Exists(ConfigFilePath)) {
                Console.Error.WriteLine($"Config file already exists: {ConfigFilePath}");
                Environment.Exit(1);
            }

            using (var cfgFile = File.CreateText(ConfigFilePath))
            {
                cfgFile.Write(
                    string.Format(
                        ConfigTemplate,
                        SourceKey,
                        TargetKey,
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
            using (var cfgFile = File.OpenText(ConfigFilePath))
            {
                try
                {
                    _configs = deserializer.Deserialize<Dictionary<string, string>>(
                        cfgFile.ReadToEnd()
                        );
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine($"Error reading config file: {ex.Message}");
                    Environment.Exit(1);
                }
            }

#if DEBUG
            // write parsed configs in debug mode
            foreach (var cfg in configs)
                Console.WriteLine($"{cfg.Key} = {cfg.Value}");
#endif
            // remove the known properties
            _configs.TryGetValue(SourceKey, out _source);
            _configs.Remove(SourceKey);
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

        public static string GetProjectTarget()
        {
            if (_target is null)
                UpdateConfigs();

            return _target;
        }

    }
}
