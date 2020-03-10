using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
{
    class XmlDocumentedItem
    {
        DocumentationCommentTriviaSyntax _documentation;
        System.Xml.XmlDocument _documentationAsXml;

        protected XmlDocumentedItem(DocumentationCommentTriviaSyntax documentation)
        {
            _documentation = documentation;
        }

        public bool HasSinceTag()
        {
            bool exists = (_documentation != null && _documentation.Content.ToFullString().Contains("<since>"));
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
            var xml = DocumentationAsXml();
            if (xml != null)
            {
                var element = xml.GetElementsByTagName("summary");
                if (element != null && element.Count > 0)
                    return element[0].InnerText;
            }
            return "";
        }

        System.Xml.XmlDocument DocumentationAsXml()
        {
            if (_documentationAsXml == null && _documentation != null)
            {
                string comment = _documentation.ToString();
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
