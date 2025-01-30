import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			"react/no-unescaped-entities": 0,
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
					ignoreRestSiblings: true,
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: ".*Types$", // Ignores variables ending with 'Types'
				},
			],
		},
	},
];

export default eslintConfig;
