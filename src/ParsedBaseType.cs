using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;


namespace api_docify
{
    enum ParsedContainerType
    {
        None = 0,
        Class = 1,
        Struct = 2,
        Interface = 3,
        Enum = 4
    }

    /// <summary>
    /// Class, struct, or interface declaration
    /// </summary>
    class ParsedBaseType
    {
        System.Xml.XmlDocument _documentationAsXml;
        public ParsedBaseType(BaseTypeDeclarationSyntax basetype, DocumentationCommentTriviaSyntax documentation)
        {
            BaseType = basetype;
            Documentation = documentation;
        }
        public DocumentationCommentTriviaSyntax Documentation { get; }
        private BaseTypeDeclarationSyntax BaseType { get; }

        public string FullName
        {
            get
            {
                return GetFullContainerName(BaseType);
            }
        }

        public static string GetFullContainerName(BaseTypeDeclarationSyntax basetype)
        {
            string ns = "";
            var parent = basetype.Parent;
            while (parent != null)
            {
                var parentClassDeclaration = parent as ClassDeclarationSyntax;
                if (parentClassDeclaration != null)
                {
                    ns = $"{parentClassDeclaration.Identifier}.{ns}";
                }
                var namespaceDeclaration = parent as NamespaceDeclarationSyntax;
                if (namespaceDeclaration != null)
                {
                    ns = $"{namespaceDeclaration.Name}.{ns}";
                }
                parent = parent.Parent;
            }

            string className = $"{ns}{basetype.Identifier}";
            return className;
        }
    }
}
