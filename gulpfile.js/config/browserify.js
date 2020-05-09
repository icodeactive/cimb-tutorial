var paths = require('./paths');

module.exports = {
  bundleConfigs: [
    {
      entries: paths.app + "/scripts/bundle.js",
      dest: paths.htmldocAssets + "/js",
      outputName: "bundle.js"
    }
  ]
};