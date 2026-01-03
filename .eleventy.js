module.exports = function(eleventyConfig) {
  // Copy static assets to root
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/js/theme-toggle.js": "theme-toggle.js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Create navigation collection
  eleventyConfig.addCollection("navigation", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.navTitle && item.data.navOrder)
      .sort((a, b) => a.data.navOrder - b.data.navOrder);
  });

  // Set directories
  return {
    dir: {
      input: "src",
      output: ".",          // Output to root
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
