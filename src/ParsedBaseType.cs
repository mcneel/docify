using System;
using System.Collections.Generic;
using System.Linq;
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
    /// Class, struct, enum, or interface declaration
    /// </summary>
    class ParsedBaseType : XmlDocumentedItem
    {
        public ParsedBaseType(BaseTypeDeclarationSyntax basetype, DocumentationCommentTriviaSyntax documentation) : base(documentation)
        {
            BaseType = basetype;
            Documentation = documentation;
        }

        public void Merge(ParsedBaseType other)
        {
            if (!FullName.Equals(other.FullName))
                throw new Exception("Invalid Merge");
            if( other.Documentation!= null )
            {
                // TODO: deal with merging documentation
                //if (this.Documentation != null)
                //    throw new Exception("two Documentation sections on merge");
                Documentation = other.Documentation;
            }
        }

        public DocumentationCommentTriviaSyntax Documentation { get; private set; }
        private BaseTypeDeclarationSyntax BaseType { get; }

        public string FullName
        {
            get
            {
                return GetFullContainerName(BaseType);
            }
        }

        public string Name
        {
            get
            {
                return $"{BaseType.Identifier}";
            }
        }

        public string Namespace
        {
            get
            {
                string ns = "";
                var parent = BaseType.Parent;
                while (parent != null)
                {
                    var namespaceDeclaration = parent as NamespaceDeclarationSyntax;
                    if (namespaceDeclaration != null)
                    {
                        ns = $"{namespaceDeclaration.Name}.{ns}";
                    }
                    parent = parent.Parent;
                }
                return ns.TrimEnd(new char[] { '.' });
            }
        }

        public bool IsPublic
        {
            get
            {
                return BaseType.IsPublic();
            }
        }

        public List<ParsedMember> Members { get; set; }

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
