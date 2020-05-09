var gutil     = require('gulp-util');

module.exports = {

  start: function(filepath) {
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  watch: function(bundleName) {
    gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
  },

  end: function(filepath) {
    gutil.log('Bundled', gutil.colors.green(filepath));
  }
};
