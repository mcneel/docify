using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
{
    enum ParsedDataType
    {
        None = 0,
        Class = 1,
        Struct = 2,
        Enum = 3,
        Interface = 4,
        Namespace = 5
    }

    /// <summary>
    /// Class, struct, enum, or interface declaration
    /// </summary>
    class ParsedType : XmlDocumentedItem
    {
        BaseTypeDeclarationSyntax _declarationType;
        NamespaceDeclarationSyntax _namespaceType;
        List<ParsedMember> _members;
        public ParsedType(BaseTypeDeclarationSyntax type, DocumentationCommentTriviaSyntax documentation) : base(documentation)
        {
            _declarationType = type;
        }

        public ParsedType(NamespaceDeclarationSyntax node, DocumentationCommentTriviaSyntax documentation) : base(documentation)
        {
            _namespaceType = node;
        }


        public void Merge(ParsedType other)
        {
            if (!FullName.Equals(other.FullName) && !other.Name.Equals("NamespaceDoc"))
                throw new Exception("Invalid Merge");
            if( other.Documentation!= null )
            {
                // TODO: deal with merging documentation
                //if (this.Documentation != null)
                //    throw new Exception("two Documentation sections on merge");
                Documentation = other.Documentation;
            }
            if( !IsPublic && other.IsPublic )
            {
                // partial classes can appear as non-public. If one of the declarations
                // is public, then the whole thing is public
                _declarationType = other._declarationType;
            }
        }

        public ParsedDataType DataType
        {
            get
            {
                if (_namespaceType != null)
                    return ParsedDataType.Namespace;
                if (_declarationType is ClassDeclarationSyntax)
                    return ParsedDataType.Class;
                if (_declarationType is StructDeclarationSyntax)
                    return ParsedDataType.Struct;
                if (_declarationType is EnumDeclarationSyntax)
                    return ParsedDataType.Enum;
                if (_declarationType is InterfaceDeclarationSyntax)
                    return ParsedDataType.Interface;
                return ParsedDataType.None;
            }
        }
        public bool IsClass { get { return _declarationType is ClassDeclarationSyntax; } }

        public string FullName
        {
            get
            {
                if (_namespaceType != null)
                    return _namespaceType.Name.ToString();
                return GetFullContainerName(_declarationType);
            }
        }

        public string[] BaseTypes()
        {
            var types = _declarationType.BaseList.Types;
            string[] rc = new string[types.Count];
            for( int i=0; i<types.Count; i++)
            {
                rc[i] = types[i].ToString();
            }
            return rc;
        }

        public string Name
        {
            get
            {
                string generic = "";
                ClassDeclarationSyntax cds = _declarationType as ClassDeclarationSyntax;
                if (cds != null && cds.TypeParameterList != null)
                {
                    generic = cds.TypeParameterList.ToString();
                }

                var parentClass = _declarationType.Parent as ClassDeclarationSyntax;
                if (parentClass != null)
                    return $"{parentClass.Identifier}.{_declarationType.Identifier}{generic}";
                return $"{_declarationType.Identifier}{generic}";
            }
        }

        public string Namespace
        {
            get
            {
                string ns = "";
                var parent = _declarationType.Parent;
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
                // all namespaces are "public"
                return _namespaceType!= null || _declarationType.IsPublic();
            }
        }

        public List<ParsedMember> Members
        {
            get
            {
                if(null == _members && DataType == ParsedDataType.Enum)
                {
                    _members = new List<ParsedMember>();
                    foreach( var node in _declarationType.ChildNodes())
                    {
                        var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
                        var enumMember = node as EnumMemberDeclarationSyntax;
                        _members.Add(new ParsedMember(enumMember, docComment));
                    }
                }
                return _members;
            }
            set
            {
                _members = value;
            }
        }

        public static string GetFullContainerName(BaseTypeDeclarationSyntax basetype)
        {
            if (basetype == null)
                throw new ArgumentNullException();
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
            ClassDeclarationSyntax cds = basetype as ClassDeclarationSyntax;
            if (cds != null && cds.TypeParameterList != null)
            {
                className += cds.TypeParameterList.ToString();
            }
            return className;
        }


        public string[] GetAttributes()
        {
            string[] rc = new string[_declarationType.AttributeLists.Count];
            for (int i = 0; i < rc.Length; i++)
                rc[i] = _declarationType.AttributeLists[i].ToString();
            return rc;
        }

        public string[] GetBaseList(Dictionary<string, ParsedType> allPublicTypes)
        {
            if (_declarationType != null && _declarationType.BaseList != null)
            {
                int typeCount = _declarationType.BaseList.Types.Count;
                string[] rc = new string[typeCount];
                for( int i=0; i<typeCount; i++)
                {
                    rc[i] = _declarationType.BaseList.Types[i].ToString();
                    if( rc[i].Equals("Runtime.CommonObject"))
                    {
                        rc[i] = "CommonObject"; //temp hack fix
                    }
                    if (allPublicTypes != null && allPublicTypes.ContainsKey(rc[i]))
                        rc[i] = allPublicTypes[rc[i]].FullName;
                }
                return rc;
            }
            return null;
        }
    }
}
