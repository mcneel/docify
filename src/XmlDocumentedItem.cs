using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
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

        public string Summary()
        {
            return GetTagText("summary");
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
                    if(attributeName==null)
                        return element[0].InnerText.Trim();
                    for(int i=0; i<element.Count; i++ )
                    {
                        var el = element[i];
                        for( int j=0; j<el.Attributes.Count; j++)
                        {
                            var attr = el.Attributes[j];
                            if (attr.Name.Equals("name") && attr.Value.Equals(attributeName))
                                return el.InnerText.Trim();
                        }
                    }
                }
            }
            return "";
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
                            rc[i] = element[0].ChildNodes[i].Attributes["source"].Value;
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
