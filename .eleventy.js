const { minify } = require("html-minifier-terser");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addTransform("minify", async (content) => {
    return await minify(content, {
      collapseWhitespace: true,
      continueOnParseError: true,
      minifyCSS: true,
      minifyJS: true,
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
