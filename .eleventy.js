const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "America/Chicago",
    }).toLocaleString(DateTime.DATE_MED);
  });
};

