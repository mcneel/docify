using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace api_docify
{
    class JsonBuilder
    {
        public static void Write(Dictionary<string, ParsedType> types, string path)
        {
            StringBuilder content = new StringBuilder();

            content.Append(@"// auto-generated from api_docify
const DataTypes = {
  NONE: 0,
  CLASS: 1,
  STRUCT: 2,
  ENUM: 3,
  INTERFACE: 4
}
");
            content.AppendLine("var RhinoCommonApi = [");

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
            content.AppendLine();
            content.AppendLine("]");
            content.AppendLine();
            content.AppendLine("export { DataTypes, RhinoCommonApi }");

            System.IO.File.WriteAllText(path, content.ToString());
        }

        static string JsonQuote(string s)
        {
            s = s.Replace("\\", "\\\\");
            if (s.Contains('\n'))
                return "`" + s + "`";
            s = s.Replace("'", "\\'");
            return "'" + s + "'";
        }

        static string WriteTypeAsObject(ParsedType type)
        {
            if (!type.IsPublic)
                return null;
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("  {");
            sb.AppendLine($"    name: '{type.FullName}',");
            sb.AppendLine($"    dataType: {(int)(type.DataType)},");
            sb.Append($"    summary: {JsonQuote(type.Summary())}");
            string values = MembersAsJsonArray(type, ParsedMemberType.EnumValue);
            string constructors = MembersAsJsonArray(type, ParsedMemberType.Constructor);
            string properties = MembersAsJsonArray(type, ParsedMemberType.Property);
            string methods = MembersAsJsonArray(type, ParsedMemberType.Method);
            string events = MembersAsJsonArray(type, ParsedMemberType.Event);
            if (values != null || constructors != null || properties != null || methods != null || events != null)
                sb.AppendLine(",");
            else
                sb.AppendLine();

            if (!string.IsNullOrWhiteSpace(values))
            {
                sb.AppendLine($"    values: {values}");
            }
            if (!string.IsNullOrWhiteSpace(constructors))
            {
                sb.Append($"    constructors: {constructors}");
                if (properties != null || methods != null || events != null)
                    sb.AppendLine(",");
                else
                    sb.AppendLine();
            }
            if (!string.IsNullOrWhiteSpace(properties))
            {
                sb.Append($"    properties: {properties}");
                if (methods != null || events != null)
                    sb.AppendLine(",");
                else
                    sb.AppendLine();
            }
            if (!string.IsNullOrWhiteSpace(methods))
            {
                sb.Append($"    methods: {methods}");
                if (events != null)
                    sb.AppendLine(",");
                else
                    sb.AppendLine();
            }
            if (!string.IsNullOrWhiteSpace(events))
                sb.AppendLine($"    events: {events}");
            sb.Append("  }");
            return sb.ToString();
        }

        static string MembersAsJsonArray(ParsedType type, ParsedMemberType filter)
        {
            if (type.Members == null)
                return null;
            if( filter == ParsedMemberType.EnumValue )
            {
                filter = filter;
            }
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("[");
            bool memberAdded = false;
            foreach (var member in type.Members)
            {
                if (filter != member.MemberType)
                    continue;
                if (memberAdded)
                    sb.AppendLine(",");
                sb.AppendLine("      {");
                sb.Append($"        signature: '{member.Signature(false)}'");
                string summary = member.Summary();
                if (!string.IsNullOrWhiteSpace(summary))
                {
                    sb.AppendLine(",");
                    sb.Append($"        summary: {JsonQuote(summary)}");
                }
                string since = member.Since;
                if (!string.IsNullOrWhiteSpace(since) && double.TryParse(since, out double sinceValue))
                {
                    sb.AppendLine(",");
                    sb.Append($"        since: {since}");
                }

                if (member.MemberType == ParsedMemberType.Method)
                {
                    string returns = member.ReturnDocString();
                    if (!string.IsNullOrWhiteSpace(returns))
                    {
                        sb.AppendLine(",");
                        sb.Append($"        returns: {JsonQuote(returns)}");
                    }
                }
                sb.AppendLine();
                sb.Append("      }");
                memberAdded = true;
            }
            sb.AppendLine();
            sb.Append("    ]");

            return memberAdded ? sb.ToString() : null;
        }
    }
}
