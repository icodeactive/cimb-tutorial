var paths = require('./paths');

module.exports = {
  watch: paths.app + '/views/**/*.pug',
  src: [paths.app + '/views/**/*.pug', '!**/{common,components,layouts}/**'],
  dest: paths.htmldoc
}