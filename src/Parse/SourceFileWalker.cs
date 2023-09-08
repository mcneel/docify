using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Docify.Parse
{
    class SourceFileWalker : Microsoft.CodeAnalysis.CSharp.CSharpSyntaxWalker
    {
        public static (List<ParsedType>, List<ParsedMember>, List<ParsedType>) ParseSource(string code)
        {
            var options = new Microsoft.CodeAnalysis.CSharp.CSharpParseOptions().WithPreprocessorSymbols("RHINO_SDK").WithDocumentationMode(Microsoft.CodeAnalysis.DocumentationMode.Parse);
            var tree = Microsoft.CodeAnalysis.CSharp.CSharpSyntaxTree.ParseText(code, options);
            SourceFileWalker sfw = new SourceFileWalker();
            sfw.Visit(tree.GetRoot());
            return (sfw._parsedBaseTypes, sfw._parsedMembers, sfw._parsedNamespaces);
        }

        List<string> _usingDirectives = new List<string>();
        List<ParsedMember> _parsedMembers = new List<ParsedMember>();
        List<ParsedType> _parsedBaseTypes = new List<ParsedType>();
        List<ParsedType> _parsedNamespaces = new List<ParsedType>();

        private SourceFileWalker() : base(Microsoft.CodeAnalysis.SyntaxWalkerDepth.StructuredTrivia)
        {
        }

        public override void VisitNamespaceDeclaration(NamespaceDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedNamespaces.Add(new ParsedType(node, docComment));
            base.VisitNamespaceDeclaration(node);
        }

        public override void VisitClassDeclaration(ClassDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedType(node, docComment));
            base.VisitClassDeclaration(node);
        }
        public override void VisitStructDeclaration(StructDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedType(node, docComment));
            base.VisitStructDeclaration(node);
        }
        public override void VisitInterfaceDeclaration(InterfaceDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedType(node, docComment));
            base.VisitInterfaceDeclaration(node);
        }
        public override void VisitEnumDeclaration(EnumDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedType(node, docComment));
            base.VisitEnumDeclaration(node);
        }

        public override void VisitEnumMemberDeclaration(EnumMemberDeclarationSyntax node)
        {
            base.VisitEnumMemberDeclaration(node);
        }

        public override void VisitConstructorDeclaration(ConstructorDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitConstructorDeclaration(node);
        }

        public override void VisitMethodDeclaration(MethodDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitMethodDeclaration(node);
        }

        public override void VisitIndexerDeclaration(IndexerDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitIndexerDeclaration(node);
        }

        public override void VisitPropertyDeclaration(PropertyDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitPropertyDeclaration(node);
        }
        public override void VisitEventFieldDeclaration(EventFieldDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitEventFieldDeclaration(node);
        }
        public override void VisitEventDeclaration(EventDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitEventDeclaration(node);
        }

        public override void VisitOperatorDeclaration(OperatorDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitOperatorDeclaration(node);
        }

        public override void VisitFieldDeclaration(FieldDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment, _usingDirectives));
            base.VisitFieldDeclaration(node);
        }

        public override void VisitUsingDirective(UsingDirectiveSyntax node)
        {
            _usingDirectives.Add(node.Name.ToFullString());
            base.VisitUsingDirective(node);
        }
    }
}
