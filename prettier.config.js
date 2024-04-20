/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
