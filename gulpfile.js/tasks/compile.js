const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const del = require('del');
var cleanJs = require('./clean.js');
var sassJs = require('./sass.js');
var scriptJs = require('./script.js');
var htmlJs = require('./html.js');
var copyJs = require('./copy.js');
var imageJs = require('./images.js');

function cleanPublish() {
  return del('./.publish');
}

function push() {
  return gulp.src('./htmldoc/**/*')
    .pipe(ghPages());
}

const compile = gulp.series(cleanJs.clean, sassJs.sassCompile, scriptJs.jsCompile, htmlJs.htmlBuild, imageJs.imagesMin, copyJs.copyDefault);
const deploy = gulp.series(compile, push, cleanPublish);

exports.cleanPublish = cleanPublish;
exports.push = push;
exports.compile = compile;
exports.deploy = deploy;