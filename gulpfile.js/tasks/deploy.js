const gulp = require('gulp');
const deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("../../htmldoc", {"allowEmpty": true})
      .pipe(deploy())
  });