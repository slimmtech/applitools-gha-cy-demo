export default [
  {
    ignores: ["node_modules/**", "cypress/reports/**", "cypress/results/**"],
    rules: {
      // Unused Imports
      "no-unused-vars": 2,
      // Formatting
      semi: ["error", "always"],
      // Require trailing commas for multi-line arrays/objects
      "comma-dangle": ["error", "always-multiline"],
      // Add a space after commas
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
    },
  },
];
