const gulp = require('gulp');
var cleanJs = require('./clean.js');
var sassJs = require('./sass.js');
var scriptJs = require('./script.js');
var htmlJs = require('./html.js');
var copyJs = require('./copy.js');
var watchJs = require('./watch.js');

const defaultActions = gulp.series(cleanJs.clean, sassJs.sassBuild, scriptJs.jsBuild, htmlJs.htmlBuild, copyJs.copyImage, copyJs.copyDefault, watchJs.watch);

gulp.task('default', defaultActions);

