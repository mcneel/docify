using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api_docify
{
    class JsonBuilder
    {
        public static void Write(Dictionary<string, ParsedType> types, string path)
        {
            StringBuilder content = new StringBuilder();

            content.Append(@"
const dataTypes = {
  NONE: 0,
  CLASS: 1,
  STRUCT: 2,
  ENUM: 3,
  INTERFACE: 4
}
");
            content.AppendLine("rhinocommonApi = [");

            List<ParsedType> sortedTypes = new List<ParsedType>(types.Values);
            sortedTypes.Sort((a, b) => { return a.FullName.CompareTo(b.FullName); });
            bool objectWritten = false;
            for( int i=0; i<sortedTypes.Count; i++ )
            {
                string jsonType = WriteTypeAsObject(sortedTypes[i]);
                if (string.IsNullOrEmpty(jsonType))
                    continue;
                if (objectWritten)
                    content.AppendLine(",");
                content.Append(jsonType);
                objectWritten = true;
            }
            content.AppendLine("]");
            content.AppendLine();
            System.IO.File.WriteAllText(path, content.ToString());
        }

        static string WriteTypeAsObject(ParsedType type)
        {
            if (!type.IsPublic)
                return null;
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("{");
            sb.AppendLine($"  name: '{type.FullName}',");
            sb.AppendLine($"  dataType: {(int)(type.DataType)},");
            sb.AppendLine($"  summary: `{type.Summary()}`,");
            string constructors = MembersAsJsonArray(type, ParsedMemberType.Constructor);
            string properties = MembersAsJsonArray(type, ParsedMemberType.Property);
            string methods = MembersAsJsonArray(type, ParsedMemberType.Method);
            string events = MembersAsJsonArray(type, ParsedMemberType.Event);
            if(!string.IsNullOrWhiteSpace(constructors))
                sb.AppendLine($"  constructors: {constructors},");
            if (!string.IsNullOrWhiteSpace(properties))
                sb.AppendLine($"  properties: {properties},");
            if (!string.IsNullOrWhiteSpace(methods))
                sb.AppendLine($"  methods: {methods},");
            if (!string.IsNullOrWhiteSpace(events))
                sb.AppendLine($"  events: {events}");
            sb.Append("}");
            return sb.ToString();
        }

        static string MembersAsJsonArray(ParsedType type, ParsedMemberType filter)
        {
            if (type.Members == null)
                return null;
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("[");
            bool memberAdded = false;
            foreach (var member in type.Members)
            {
                if (filter != member.MemberType)
                    continue;
                if (memberAdded)
                    sb.AppendLine(",");
                sb.AppendLine("    {");
                sb.Append($"      signature: '{member.Signature(false)}'");
                string summary = member.Summary();
                if (!string.IsNullOrWhiteSpace(summary))
                {
                    sb.AppendLine(",");
                    sb.Append($"      summary: `{summary.Replace("\\", "\\\\")}`");
                }
                if (member.MemberType == ParsedMemberType.Method)
                {
                    string returns = member.ReturnDocString();
                    if (!string.IsNullOrWhiteSpace(returns))
                    {
                        sb.AppendLine(",");
                        sb.Append($"      returns: `{returns.Replace("\\", "\\\\")}`");
                    }
                }
                sb.AppendLine();
                sb.Append("    }");
                memberAdded = true;
            }
            sb.AppendLine();
            sb.Append("  ]");

            return memberAdded ? sb.ToString() : null;
        }
    }
}
