var paths = require('./paths');

module.exports = {
  src: paths.app,
  watch: paths.app + '/styles/**/*.scss',
  dest: paths.htmldocAssets + '/css',
  settings: {
  	imagePath: 'assets/images' // Used by the image-url helper
  },
  autoprefixer: { overrideBrowserslist: ['last 2 version'], cascade: false }
};
