const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            // Add custom rules here
            "prefer-const": "error",
            "no-unused-vars": "off", // TypeScript handles this
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
];

module.exports = eslintConfig;