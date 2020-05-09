var paths = require('./paths');

module.exports = {
  watch: paths.app + '/scripts/**/*.js',
  src: paths.app + '/scripts/',
  dest: paths.htmldocAssets + '/js',
};
