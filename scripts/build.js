const fs = require("fs");
const postcss = require("postcss");
const tailwind = require("tailwindcss");
const colors = require("tailwindcss/colors");
const CleanCSS = require("clean-css");

function buildDistFile(filename) {
  return postcss([
    tailwind({
      corePlugins: false,
      plugins: [
        require("../src/index.js")({
          prefix: "tw-global",
        }),
      ],
      theme: {
        colors: {
          black: "#111",
          white: "#fff",
          primary: colors.blue,
        },
      },
    }),
    require("autoprefixer"),
  ])
    .process("@tailwind utilities", {
      from: null,
      to: `./dist/${filename}.css`,
      map: false,
    })
    .then((result) => {
      fs.writeFileSync(`./dist/${filename}.css`, result.css);
      return result;
    })
    .then((result) => {
      const minified = new CleanCSS().minify(result.css);
      fs.writeFileSync(`./dist/${filename}.min.css`, minified.styles);
    })
    .catch((error) => {
      console.log(error);
    });
}

console.info("Building CSS...");

Promise.all([buildDistFile("dist")]).then(() => {
  console.log("Finished building CSS.");
});
