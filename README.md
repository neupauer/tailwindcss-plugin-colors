# Tailwind CSS Plugin – Colors

Plugin for extracting theme colors as global variables.

## Install

1. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-colors

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-colors
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-colors")],
};

// With Optional Config
module.exports = {
  // ...
  plugins: [
    require("@neupauer/tailwindcss-plugin-colors")({
      // prefix: "",          // No Prefix       --blue-500
      // prefix: "tw-color",  // Default Prefix  --tw-color-blue-500
      prefix: "my-prefix",    // Custom Prefix   --my-prefix-blue-500
    }),
  ],
};
```

## Usage

```html
<div style="color: var(--tw-color-blue-500)"></div>
```
