using System;
using System.Collections.Generic;
using System.IO;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Docify
{
    public static class ProjectConfigs
    {
        public static void WriteProjectInfo(IDictionary<string, string> projectInfo, string outputDir)
        {
            // configs has lots of options. not using any right now
            var jsonExportCfg = new JsonSerializerSettings {
                Formatting = Formatting.Indented
            };

            var serializedProjInfo = JsonConvert.SerializeObject(projectInfo, jsonExportCfg);
            using (var projInfoFile =
                File.CreateText(Path.Combine(outputDir,
                                             ProgramConfigs.OutputProjectDataFile)))
            {
                projInfoFile.Write(serializedProjInfo);
            }
        }

    }
}
