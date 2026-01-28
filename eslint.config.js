import js from "@eslint/js";
import queryPlugin from "@tanstack/eslint-plugin-query";
import functionalPlugin from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
 
const namingConventionOptions = [
  "warn",
  { selector: ["default"], format: ["camelCase"] },
  { selector: ["variable", "property"], format: ["UPPER_CASE", "camelCase"] },
  { selector: ["import"], format: null },
  { selector: ["typeLike"], format: ["PascalCase"] },
];
 
const mergeNaming = (...selectors) => [
  ...namingConventionOptions,
  ...selectors,
];
 
const abbreviationOptions = [
  "warn",
  {
    replacements: {
      //too useful in types
      args: false,
      //function is not allowed as a parameter name, rule recommends function_; func is better
      func: false,
      //very well-known
      params: false,
      param: false,
      //extremely widely used, renaming to source doesn't make sense
      src: false,
    },
  },
];
 
const mergeAbbreviations = (replacements) => [
  abbreviationOptions[0],
  {
    ...abbreviationOptions[1],
    replacements: { ...abbreviationOptions[1].replacements, ...replacements },
  },
];
 
export default defineConfig([
  //don't lint js files
  { ignores: ["**/*.js"] },
  //the order matters, the plugins overwrite each other
  securityPlugin.configs.recommended,
  unicornPlugin.configs.all,
  js.configs.all,
  ...tseslint.configs.all,
  functionalPlugin.configs.all,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    //import rules are defined manually as the config objects jam the eslint vscode ui
    plugins: { import: importPlugin },
 
    settings: {
      //enable ts path alias resolver
      "import/resolver": {
        typescript: { project: "*/tsconfig.json" },
      },
      react: { version: "detect" },
    },
 
    rules: {
      //not that important and conflict with prettier
      indent: "off",
      "object-curly-newline": "off",
      "operator-linebreak": [
        "warn",
        "after",
        { overrides: { ":": "before", "?": "before" } },
      ],
      "sort-imports": "off",
 
      //unnecessary
      "implicit-arrow-linebreak": "off",
      "no-confusing-arrow": "off",
 
      //handled by ts-eslint naming convention
      camelcase: "off",
      "new-cap": "off",
      "no-underscore-dangle": "off",
 
      //very interesting rules, but unfortunately not applicable in fullstack
      "functional/functional-parameters": "off",
      "functional/no-return-void": "off",
 
      //requires defining readonly on tons of variables
      "functional/prefer-immutable-types": "off",
      "functional/type-declaration-immutability": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "react/prefer-read-only-props": "off",
 
      //import rules are defined manually as the config objects jam the eslint vscode ui:
      "import/export": "error",
      "import/no-empty-named-blocks": "warn",
      "import/no-named-as-default": "warn",
      "import/no-duplicates": "warn",
      "import/first": "warn",
      "import/no-absolute-path": "error",
      "import/no-commonjs": "error",
      "import/no-cycle": "error",
      "import/no-deprecated": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "warn",
      "import/no-namespace": "error",
      "import/no-self-import": "error",
      "import/no-unassigned-import": "error",
      "import/no-useless-path-segments": "warn",
      "import/no-anonymous-default-export": "warn",
 
      //var length team convention
      "id-length": ["warn", { min: 2, max: 30, properties: "never" }],
      //comments length doesn't really affect the readability
      "max-len": ["warn", { ignoreComments: true, code: 100 }],
      //tenary is functional
      "no-ternary": "off",
      //one-var statements are disgusting
      "one-var": ["warn", "never"],
      //quotes team convention
      quotes: ["warn", "double", { avoidEscape: true }],
      //idiotic rule
      "sort-keys": "off",
      //interesting rule, but gives false positives on promises
      "functional/no-expression-statements": "off",
      //newline after import is important
      "import/newline-after-import": ["warn", { considerComments: true }],
      //some numbers can sometimes have meanings of their own and don't need a const
      //type is better than interface
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/naming-convention": namingConventionOptions,
      "@typescript-eslint/no-magic-numbers": [
        "warn",
        {
          ignore: [
            //first member of array (const FIRST_INDEX = 0)??
            0,
            //several use cases
            1,
            //precentage (const PRECENTAGE_DIVIDER= 100)???
            100,
          ],
        },
      ],
      //passing a function that returns Promise<void> for void is fine when you don't need to do anything after the function
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      //no null assertions can be useful sometimes, but only when ts doesn't recognize complex relations between vars
      "@typescript-eslint/no-non-null-assertion": "error",
      //omitting the qualifier can be confusing and has no purpose
      "@typescript-eslint/no-unnecessary-qualifier": "off",
      //some cases are "false positives"
      "@typescript-eslint/no-unused-expressions": [
        "error",
        //ternary and short circuit (&&, ||) are used expressions...
        { allowShortCircuit: true, allowTernary: true },
      ],
      //await prevents bugs most of the times, the consistency prevents mistakes and is more readable
      "@typescript-eslint/return-await": ["error", "always"],
      //dynamic keys are fine
      "security/detect-object-injection": "off",
      //filename case team convention
      "unicorn/filename-case": ["warn", { case: "camelCase" }],
      //disallowed prefixes team convention
      "unicorn/no-keyword-prefix": [
        "error",
        { disallowedPrefixes: ["handle"], checkProperties: false },
      ],
      //null is good to have
      "unicorn/no-null": "off",
      //ugly syntax for default exports
      "unicorn/prefer-export-from": "off",
      //allowed abbreviations team convention
      "unicorn/prevent-abbreviations": abbreviationOptions,
 
      "unicorn/no-array-sort": "off",
    },
  },
  {
    //frontend configuration
    files: ["Task1/**"],
 
    languageOptions: { globals: globals.browser },
 
    plugins: { import: importPlugin, "react-hooks": hooksPlugin },
    extends: [
      queryPlugin.configs["flat/recommended"],
      reactPlugin.configs.flat.all,
    ],
 
    rules: {
      //deprecated for react 19
      "react/jsx-no-bind": "off",
      "react/react-in-jsx-scope": "off",
 
      //prevent conflicts with prettier
      "react/jsx-indent-props": "off",
      "react/jsx-indent": "off",
      "react/jsx-closing-tag-location": "off",
 
      ...hooksPlugin.configs.recommended.rules,
      //props with both data and functions are a must
      "functional/no-mixed-types": "off",
      //importing node modules doesn't work in frontend
      "import/no-nodejs-modules": "error",
      //interesting rule, but anonymous components are too convenient
      "react/display-name": "off",
      //passing a className is managable and is by far the most convenient option
      "react/forbid-component-props": "off",
      //enforce function components are defined as arrow body
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      //allow up to 85 lines in components
      "max-lines-per-function": ["error", 85],
      //allow up to 15 consts in components
      "max-statements": ["error", 15],
      //allow tsx extensions
      "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
      //reasonable depth before the nesting is too much
      "react/jsx-max-depth": ["warn", { max: 4 }],
      //disallow multiple multiline props per line
      "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
      //interesting rule, but what about components as props?
      "react/jsx-newline": "off",
      //a single child in the same line as its parents is fine
      "react/jsx-one-expression-per-line": ["warn", { allow: "single-child" }],
      //interesting rule, but spreading can be convenient
      "react/jsx-props-no-spreading": "off",
      //prop order team convention
      "react/jsx-sort-props": [
        "warn",
        {
          noSortAlphabetically: true,
          reservedFirst: true,
          shorthandFirst: true,
          multiline: "last",
        },
      ],
      // Enforces the components.tsx pattern that we occasionally use
      "react/no-multi-comp": ["warn", { ignoreStateless: true }],
      // frontend naming conventions
      "@typescript-eslint/naming-convention": mergeNaming({
        selector: ["variable"],
        types: ["function"],
        modifiers: ["exported"],
        format: [
          // the default formats
          "camelCase",
          "UPPER_CASE",
          // allow components to be in PascalCase
          "PascalCase",
        ],
      }),
      //allow PascalCase component file names
      "unicorn/filename-case": [
        "warn",
        { cases: { camelCase: true, pascalCase: true } },
      ],
      //allow abbreviations that are standard for frontend
      "unicorn/prevent-abbreviations": mergeAbbreviations({
        props: false,
        ref: false,
      }),
    },
  },
  {
    //styles files config
    files: ["**/styles.ts"],
    rules: {
      "@typescript-eslint/naming-convention": mergeNaming({
        selector: ["objectLiteralProperty"],
        format: null,
      }),
    },
  },
  {
    //backend configuration
    files: ["Task2/**", "Task3/**"],
    languageOptions: { globals: globals.node },
 
    rules: {
      //console is fine in node
      "no-console": "off",
      //nodejs modules are ok in node
      "import/no-nodejs-modules": "off",
      //allow abbreviations that are standard for backend
      "unicorn/prevent-abbreviations": mergeAbbreviations({
        req: false,
        res: false,
      }),
    },
  },
]);