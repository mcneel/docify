using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api_docify
{
    class SourceFileWalker : Microsoft.CodeAnalysis.CSharp.CSharpSyntaxWalker
    {
        public static (List<ParsedBaseType>, List<ParsedMember>) ParseSource(string code)
        {
            var options = new Microsoft.CodeAnalysis.CSharp.CSharpParseOptions().WithPreprocessorSymbols("RHINO_SDK").WithDocumentationMode(Microsoft.CodeAnalysis.DocumentationMode.Parse);
            var tree = Microsoft.CodeAnalysis.CSharp.CSharpSyntaxTree.ParseText(code, options);
            SourceFileWalker sfw = new SourceFileWalker();
            sfw.Visit(tree.GetRoot());
            return (sfw._parsedBaseTypes, sfw._parsedMembers);
        }

        List<ParsedMember> _parsedMembers = new List<ParsedMember>();
        List<ParsedBaseType> _parsedBaseTypes = new List<ParsedBaseType>();

        private SourceFileWalker() : base(Microsoft.CodeAnalysis.SyntaxWalkerDepth.StructuredTrivia)
        {
        }

        public override void VisitClassDeclaration(ClassDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedBaseType(node, docComment));
            base.VisitClassDeclaration(node);
        }
        public override void VisitStructDeclaration(StructDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedBaseType(node, docComment));
            base.VisitStructDeclaration(node);
        }
        public override void VisitInterfaceDeclaration(InterfaceDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedBaseType(node, docComment));
            base.VisitInterfaceDeclaration(node);
        }
        public override void VisitEnumDeclaration(EnumDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedBaseTypes.Add(new ParsedBaseType(node, docComment));
            base.VisitEnumDeclaration(node);
        }

        public override void VisitConstructorDeclaration(ConstructorDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitConstructorDeclaration(node);
        }

        public override void VisitMethodDeclaration(MethodDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitMethodDeclaration(node);
        }

        public override void VisitPropertyDeclaration(PropertyDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitPropertyDeclaration(node);
        }
        public override void VisitEventFieldDeclaration(EventFieldDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitEventFieldDeclaration(node);
        }
        public override void VisitEventDeclaration(EventDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitEventDeclaration(node);
        }

        public override void VisitOperatorDeclaration(OperatorDeclarationSyntax node)
        {
            var docComment = node.GetLeadingTrivia().Select(i => i.GetStructure()).OfType<DocumentationCommentTriviaSyntax>().FirstOrDefault();
            _parsedMembers.Add(new ParsedMember(node, docComment));
            base.VisitOperatorDeclaration(node);
        }
    }
}
