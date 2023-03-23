using System;
using System.Xml;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Docify.Parse
{
    class XmlDocumentedItem
    {
        System.Xml.XmlDocument _documentationAsXml;

        protected XmlDocumentedItem(DocumentationCommentTriviaSyntax documentation)
        {
            Documentation = documentation;
        }

        protected DocumentationCommentTriviaSyntax Documentation { get; set; }

        public bool HasSinceTag()
        {
            bool exists = (Documentation != null && Documentation.Content.ToFullString().Contains("<since>"));
            return exists;
        }

        public bool HasDeprecatedTag()
        {
            bool deprecated = (Documentation != null && Documentation.Content.ToFullString().Contains("<deprecated>"));
            return deprecated;
        }

        public string Since
        {
            get
            {
                string since = "(unknown)";
                var xml = DocumentationAsXml();
                if (xml != null)
                {
                    var element = xml.GetElementsByTagName("since");
                    if (element != null && element.Count > 0)
                        since = element[0].InnerText;
                }
                return since;
            }
        }

        public string Deprecated
        {
            get
            {
                string deprecated = "(unknown)";
                var xml = DocumentationAsXml();
                if (xml != null)
                {
                    var element = xml.GetElementsByTagName("deprecated");
                    if (element != null && element.Count > 0)
                        deprecated = element[0].InnerText;
                }
                return deprecated;
            }
        }

        public string Summary()
        {
            return GetTagText("summary");
        }

        public string Remarks()
        {
            return GetTagText("remarks");
        }

        public string ReturnDocString()
        {
            return GetTagText("returns");
        }

        string GetTagText(string tag, string attributeName = null)
        {
            var xml = DocumentationAsXml();
            if (xml != null)
            {
                var element = xml.GetElementsByTagName(tag);
                if (element != null && element.Count > 0)
                {
                    if (attributeName == null)
                        return Markdownify(element[0]);
                    for (int i = 0; i < element.Count; i++)
                    {
                        var el = element[i];
                        for (int j = 0; j < el.Attributes.Count; j++)
                        {
                            var attr = el.Attributes[j];
                            if (attr.Name.Equals("name") && attr.Value.Equals(attributeName))
                                return Markdownify(el);
                        }
                    }
                }
            }
            return "";
        }

        private string Markdownify(System.Xml.XmlNode el)
        {
            var sb = new System.Text.StringBuilder();

            for (int i = 0; i < el.ChildNodes.Count; i++)
            {
                System.Xml.XmlNode child = el.ChildNodes[i];
                switch (child.Name)
                {
                    case "see":
                    case "seealso":
                        sb.Append(" " + child.Attributes[0].Value); // TODO: linkify
                        break;
                    //case "b":
                    //    sb.Append(string.Format("**{0}**", child.InnerText));
                    //    break;
                    case "pre":
                        {
                            // Morteza March 23, 2023: added case to render multiline diagram in corner parameter for `CreateFromBox(IEnumerable<Point3d> corners)` method.
                            sb.Append("<pre>");
                            string lines = Markdownify(child);
                            sb.Append(lines);
                            sb.Append("</pre>");
                            break;
                        }
                    case "para":
                        {
                            sb.AppendLine();
                            var lines = child.InnerText.Split(new char[] { '\n' });
                            for( int j=0; j<lines.Length; j++)
                            {
                                sb.Append(lines[j]);
                            }
                        }
                        break;
                    default:
                        {
                            var lines = child.InnerText.Split(new char[] { '\n' });
                            for( int j=0; j<lines.Length; j++)
                            {
                                if (j > 0)
                                    sb.Append(' ');
                                sb.Append(lines[j].Trim());
                            }
                        }
                        break;
                }
            }

            return sb.ToString().Trim();
        }

        protected string GetParamText(string paramName)
        {
            return GetTagText("param", paramName);
        }

        public string[] GetSampleReferences()
        {
            var xml = DocumentationAsXml();
            if (xml != null)
            {
                var element = xml.GetElementsByTagName("example");
                if (element != null && element.Count > 0)
                {
                    int count = element[0].ChildNodes.Count;
                    if (count > 0 && element[0].ChildNodes[0].Attributes != null)
                    {
                        string[] rc = new string[count];
                        for (int i = 0; i < count; i++)
                        {
                            // not all examples have a source attr
                            var sourceAttr = element[0].ChildNodes[i].Attributes.GetNamedItem("source");
                            if (sourceAttr != null)
                                    rc[i] = sourceAttr.Value;
                        }
                        return rc;
                    }
                }
            }
            return null;
        }

        System.Xml.XmlDocument DocumentationAsXml()
        {
            if (_documentationAsXml == null && Documentation != null)
            {
                string comment = Documentation.ToString();
                comment = comment.Replace("///", "");
                comment = comment.Replace("\t", " ");
                comment = comment.Replace("null ", "None ");
                comment = comment.Replace("true ", "True ");
                comment = comment.Replace("false ", "False ");
                var doc = new System.Xml.XmlDocument();
                doc.LoadXml("<doc>" + comment + "</doc>");
                _documentationAsXml = doc;
            }
            return _documentationAsXml;
        }
    }
}
