const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

var options = {
    remoteUrl: "https://github.com/icodeactive/cimb-tutorial.git",
    branch: "master"
}
gulp.task('deploy', () => gulp.src('../../htmldoc/**/*').pipe(ghPages(options)));
