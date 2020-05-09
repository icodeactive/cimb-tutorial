var config = {};

config.app = "./app";
config.htmldoc = "./htmldoc";
config.htmldocAssets = config.htmldoc + "/assets";
config.vendor = "./vendor";
config.internalLibs = "./internal-libs";

config.sourceAssets    = config.app + "/assets";
config.sourceViews    = config.app + "/views";
config.publicAssets    = config.htmldoc + "/assets";

module.exports = config;