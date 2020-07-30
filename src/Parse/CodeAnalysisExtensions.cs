using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;


namespace Docify.Parse
{
    static class CodeAnalysisExtensions
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
            if (method.Parent is InterfaceDeclarationSyntax)
                return true;
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
