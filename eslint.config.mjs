import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            'prefer-const': 'error',
            'react/no-unescaped-entities': 'warn',
            '@next/next/no-img-element': 'warn',
            'react-hooks/set-state-in-effect': 'warn' // Downgrade to warning for legitimate patterns
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    },
    // Override default ignores of eslint-config-next
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        // Add our custom ignores:
        'node_modules/**',
        'playwright-report/**',
        'test-results/**'
    ])
])

export default eslintConfig