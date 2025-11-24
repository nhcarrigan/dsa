import NaomisConfig from "@nhcarrigan/eslint-config";

export default [
  ...NaomisConfig,
  {
    rules: {
      "max-lines-per-function": "off",
      "max-depth": "off",
      "max-statements": "off",
      "complexity": "off",
      "unicorn/no-array-reduce": "off",
    },
  },
  {
    files: ["src/**/*.spec.ts"],
    rules: {
      "max-nested-callbacks": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
    },
  },
];
