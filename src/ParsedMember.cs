using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
{
    enum ParsedMemberType
    {
        None = 0,
        Constructor = 1,
        Event = 2,
        Property = 3,
        Method = 4
    }

    /// <summary>
    /// Things "inside" of a class, struct, or interface. This includes
    /// constructors, events, properties, or methods
    /// </summary>
    class ParsedMember
    {
        System.Xml.XmlDocument _documentationAsXml;
        public ParsedMember(MemberDeclarationSyntax member, DocumentationCommentTriviaSyntax documentation)
        {
            Member = member;
            Documentation = documentation;
        }
        public DocumentationCommentTriviaSyntax Documentation { get; }
        private MemberDeclarationSyntax Member { get; }

        public bool HasSinceTag()
        {
            bool exists = (Documentation != null && Documentation.Content.ToFullString().Contains("<since>"));
            return exists;
        }

        public int SinceInsertIndex()
        {
            int rc = Member.SpanStart;
            return rc;
        }

        public ParsedMemberType MemberType
        {
            get
            {
                if (IsConstructor)
                    return ParsedMemberType.Constructor;
                if (IsEvent)
                    return ParsedMemberType.Event;
                if (IsProperty)
                    return ParsedMemberType.Property;
                if (IsMethod)
                    return ParsedMemberType.Method;
                return ParsedMemberType.None;
            }
        }

        public bool IsConstructor
        {
            get { return Member is ConstructorDeclarationSyntax; }
        }
        public bool IsEvent
        {
            get { return Member is EventDeclarationSyntax; }
        }
        public bool IsProperty
        {
            get { return Member is PropertyDeclarationSyntax; }
        }
        public bool IsMethod
        {
            get { return Member is MethodDeclarationSyntax; }
        }


        public bool ParentIsPublic
        {
            get
            {
                var parent = Member.Parent;
                while (parent != null)
                {
                    if (parent is NamespaceDeclarationSyntax)
                        return true;
                    var parentClass = parent as ClassDeclarationSyntax;
                    if (parentClass != null && !parentClass.IsPublic())
                        return false;
                    var interfaceDeclaration = parent as InterfaceDeclarationSyntax;
                    if (interfaceDeclaration != null && !interfaceDeclaration.IsPublic())
                        return false;
                    var structDeclaration = parent as StructDeclarationSyntax;
                    if (structDeclaration != null && !structDeclaration.IsPublic())
                        return false;

                    parent = parent.Parent;
                }
                return true;
            }
        }

        public bool IsPublic
        {
            get
            {
                return Member.IsPublic();
            }
        }

        public bool IsStatic
        {
            get
            {
                return Member.IsStatic();
            }
        }

        public string ClassPath
        {
            get
            {
                return ParsedBaseType.GetFullContainerName(Member.Parent as BaseTypeDeclarationSyntax);

                //string className = "";
                //string ns = "";
                //var parent = Member.Parent.Parent;
                //while (parent != null)
                //{
                //    var parentClassDeclaration = parent as ClassDeclarationSyntax;
                //    if (parentClassDeclaration != null)
                //    {
                //        ns = $"{parentClassDeclaration.Identifier}.{ns}";
                //    }
                //    var namespaceDeclaration = parent as NamespaceDeclarationSyntax;
                //    if (namespaceDeclaration != null)
                //    {
                //        ns = $"{namespaceDeclaration.Name}.{ns}";
                //    }
                //    parent = parent.Parent;
                //}
                //if (ns.Length > 0)
                //    className = ns;
                //var classDeclaration = Member.Parent as ClassDeclarationSyntax;
                //if (classDeclaration != null)
                //{
                //    className = $"{className}{classDeclaration.Identifier}";
                //}
                //var interfaceDeclaration = Member.Parent as InterfaceDeclarationSyntax;
                //if (interfaceDeclaration != null)
                //{
                //    className = $"{className}{interfaceDeclaration.Identifier}";
                //}
                //var structDeclaration = Member.Parent as StructDeclarationSyntax;
                //if (structDeclaration != null)
                //{
                //    className = $"{className}{structDeclaration.Identifier}";
                //}
                //if (classDeclaration == null && interfaceDeclaration == null && structDeclaration == null)
                //    throw new System.NotImplementedException();

                //return className;
            }
        }

        public string Signature(bool forSorting)
        {
            string prefix = forSorting ? ClassPath + "." : "";
            if (!forSorting && IsStatic)
                prefix = "static ";

            {
                MethodDeclarationSyntax method = Member as MethodDeclarationSyntax;
                if (method != null)
                {
                    var signature = new System.Text.StringBuilder();
                    if (forSorting)
                    {
                        signature.Append($"{ClassPath}.{method.Identifier}(");
                    }
                    else
                    {
                        signature.Append($"{prefix}{method.ReturnType} {method.Identifier}(");
                    }
                    int parameterCount = method.ParameterList.Parameters.Count;
                    for (int i = 0; i < parameterCount; i++)
                    {
                        if (i > 0)
                            signature.Append(",");
                        var parameter = method.ParameterList.Parameters[i];
                        string paramType = parameter.Type.ToString();
                        int angleIndex = paramType.IndexOf('<');
                        string prefixType = "";
                        if (angleIndex > 0)
                        {
                            prefixType = paramType.Substring(0, angleIndex);
                            int prefixIndex = prefixType.LastIndexOf('.');
                            if (prefixIndex > 0)
                                prefixType = prefixType.Substring(prefixIndex + 1);
                            string genericType = paramType.Substring(angleIndex + 1);
                            int genericIndex = genericType.LastIndexOf('.');
                            if (genericIndex > 0)
                                genericType = genericType.Substring(genericIndex + 1);
                            paramType = prefixType + "<" + genericType;
                        }
                        else
                        {
                            int index = paramType.LastIndexOf('.');
                            if (index > 0)
                                paramType = paramType.Substring(index + 1);
                        }
                        signature.Append(paramType);
                        if (!forSorting)
                        {
                            signature.Append($" {parameter.Identifier}");
                        }
                    }
                    signature.Append(")");
                    return signature.ToString();
                }
            }
            {
                PropertyDeclarationSyntax property = Member as PropertyDeclarationSyntax;
                if (property != null)
                {
                    var signature = new System.Text.StringBuilder();
                    if (forSorting)
                    {
                        signature.Append($"{ClassPath}.{property.Identifier}");
                    }
                    else
                    {
                        signature.Append($"{prefix}{property.Type} {property.Identifier}");
                    }
                    return signature.ToString();
                }
            }
            {
                EventDeclarationSyntax evt = Member as EventDeclarationSyntax;
                if (evt != null)
                {
                    var signature = new System.Text.StringBuilder();
                    signature.Append($"{prefix}{evt.Identifier}");
                    return signature.ToString();
                }
            }
            {
                OperatorDeclarationSyntax op = Member as OperatorDeclarationSyntax;
                if (op != null)
                {
                    var signature = new System.Text.StringBuilder();
                    signature.Append($"{prefix}{op.OperatorToken}");
                    return signature.ToString();
                }
            }
            {
                EventFieldDeclarationSyntax eventField = Member as EventFieldDeclarationSyntax;
                if (eventField != null)
                {
                    var signature = new System.Text.StringBuilder();
                    string declaration = eventField.ToString();
                    int index = declaration.LastIndexOf(' ');
                    declaration = declaration.Substring(index + 1, declaration.Length - 1 - (index + 1));
                    signature.Append($"{prefix}{declaration}");
                    return signature.ToString();
                }
            }
            {
                ConstructorDeclarationSyntax constructor = Member as ConstructorDeclarationSyntax;
                if (constructor != null)
                {
                    var signature = new System.Text.StringBuilder();
                    if (forSorting)
                    {
                        signature.Append($"{ClassPath}(");
                    }
                    else
                    {
                        if (IsStatic)
                            signature.Append("static ");
                        signature.Append($"{ClassPath}(");
                    }
                    int parameterCount = constructor.ParameterList.Parameters.Count;
                    for (int i = 0; i < parameterCount; i++)
                    {
                        if (i > 0)
                            signature.Append(",");
                        var parameter = constructor.ParameterList.Parameters[i];
                        string paramType = parameter.Type.ToString();
                        int angleIndex = paramType.IndexOf('<');
                        string prefixType = "";
                        if (angleIndex > 0)
                        {
                            prefixType = paramType.Substring(0, angleIndex);
                            int prefixIndex = prefixType.LastIndexOf('.');
                            if (prefixIndex > 0)
                                prefixType = prefixType.Substring(prefixIndex + 1);
                            string genericType = paramType.Substring(angleIndex + 1);
                            int genericIndex = genericType.LastIndexOf('.');
                            if (genericIndex > 0)
                                genericType = genericType.Substring(genericIndex + 1);
                            paramType = prefixType + "<" + genericType;
                        }
                        else
                        {
                            int index = paramType.LastIndexOf('.');
                            if (index > 0)
                                paramType = paramType.Substring(index + 1);
                        }
                        signature.Append(paramType);
                        if (!forSorting)
                        {
                            signature.Append($" {parameter.Identifier}");
                        }
                    }
                    signature.Append(")");
                    return signature.ToString();
                }
            }
            throw new System.NotImplementedException();
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

        public string Returns()
        {
            string rc = "";
            {
                MethodDeclarationSyntax method = Member as MethodDeclarationSyntax;
                if (method != null)
                {
                    rc = $"{method.ReturnType} This is some return comment";
                }
            }
            return rc;
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


    static class MethodDeclarationExtensions
    {
        public static bool IsStatic(this MemberDeclarationSyntax method)
        {
            foreach (var modifier in method.Modifiers)
            {
                if (modifier.Text == "static")
                    return true;
            }
            return false;
        }

        public static bool IsPublic(this MemberDeclarationSyntax method)
        {
            foreach (var modifier in method.Modifiers)
            {
                if (modifier.Text == "public")
                    return true;
            }
            return false;
        }

        public static bool IsNonConst(this MethodDeclarationSyntax method, out bool useAsReturnType)
        {
            useAsReturnType = false;
            if (method.IsStatic())
                return false;

            foreach (var attr in method.AttributeLists)
            {
                if (attr.ToString().Equals("[ConstOperation]", StringComparison.InvariantCulture))
                    return false;
            }

            useAsReturnType = method.ReturnType.ToString().Equals("void", StringComparison.InvariantCulture);

            return true;
        }
    }
}
