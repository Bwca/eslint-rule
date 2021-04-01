import { Rule } from "eslint";

export function myAwesomeRule(context: Rule.RuleContext): Rule.RuleListener {
    return {
        ImportDeclaration(node) {
            context.report({
                node,
                message: 'Are you sure about this import?'
            })
        }
    }
}