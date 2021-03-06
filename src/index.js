const plugin = require("tailwindcss/plugin");
const flatten = require("flat");

const defaultOptions = {
  prefix: "tw-color",
};

const colorsPlugin = plugin.withOptions(function (options = defaultOptions) {
  return function ({ addUtilities, theme, prefix, e }) {
    const colors = flatten(
      {
        [options.prefix || ""]: theme("colors"),
      },
      {
        delimiter: "-",
      }
    );

    addUtilities({
      ":root": Object.entries(colors).reduce((accumulator, [key, value]) => {
        accumulator[`--${e(key)}`] = value;
        return accumulator;
      }, {}),
    });
  };
});

module.exports = colorsPlugin;
