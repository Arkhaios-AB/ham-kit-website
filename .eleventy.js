const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Copy static assets to root
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/js/theme-toggle.js": "theme-toggle.js" });
  eleventyConfig.addPassthroughCopy({ "src/js/burger-menu.js": "burger-menu.js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Create navigation collection
  eleventyConfig.addCollection("navigation", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.navTitle && item.data.navOrder)
      .sort((a, b) => a.data.navOrder - b.data.navOrder);
  });

  // Configure markdown-it with anchor plugin
  const markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: false,
    slugify: (s) => s.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove punctuation
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
      .trim()
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

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
