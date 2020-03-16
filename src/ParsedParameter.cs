using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
{
    class ParsedParameter : XmlDocumentedItem
    {
        ParameterSyntax _syntax;
        public ParsedParameter(ParameterSyntax syntax, DocumentationCommentTriviaSyntax documentation)
            : base (documentation)
        {
            _syntax = syntax;
        }
        public string Name { get { return _syntax.Identifier.ToString(); } }
        public string Type { get { return _syntax.Type.ToString(); } }
        public string DocString
        {
            get
            {
                return GetParamText(Name);
            }
        }
    }
}
