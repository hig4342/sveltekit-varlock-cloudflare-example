/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  printWidth: 100,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};

/**
 * @see https://github.com/sveltejs/prettier-plugin-svelte
 * @type {import("prettier-plugin-svelte").PluginConfig}
 */
const svelteConfig = {
  svelteSortOrder: "options-scripts-markup-styles",
  svelteAllowShorthand: true,
};

/**
 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
 * @type {import("prettier-plugin-tailwindcss").PluginOptions}
 */
const tailwindConfig = {
  tailwindStylesheet: "./src/routes/layout.css",
  tailwindFunctions: ["clsx", "cn", "tv"],
};

const config = {
  ...prettierConfig,
  ...svelteConfig,
  ...tailwindConfig,
};

export default config;
