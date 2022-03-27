module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
    extends: ['plugin:vue/vue3-recommended', '@yzydeveloper/eslint-config-ts'],
    rules: {
        'vue/no-v-html': 'off',
        'vue/html-quotes': ['error', 'double'],
        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },
            multiline: {
                max: 1
            }
        }],
        'vue/html-self-closing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/require-default-prop': 'off',
        'vue/attribute-hyphenation': [2, 'never', { ignore: ['custom-prop'] }],
    },
}
