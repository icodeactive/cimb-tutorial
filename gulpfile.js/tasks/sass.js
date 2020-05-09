const path = require('path');
const paths = require('../config/paths');
const configLocal = require('../config/sass');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sasslint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const stripCssComments = require('gulp-strip-css-comments');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const handleErrors = require('../libs/handleErrors');

async function sassLib() {
  isMin = false;

  gulp.src([configLocal.src + '/styles/libs.scss'], { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass(configLocal.settings))
    .on('error', handleErrors)
    .pipe(cssbeautify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(configLocal.dest));
}

async function sassLocal() {
  isMin = false;

  gulp.src([configLocal.src + '/styles/app.scss'], { allowEmpty: true })
    .pipe(sasslint({
      options: { 'config-file': path.resolve(__dirname, '../config/scss-lint.yml') }
    }))
    .pipe(sasslint.format())
    .pipe(sourcemaps.init())
    .pipe(sass(configLocal.settings))
    .on('error', handleErrors)
    .pipe(cssbeautify())
    .pipe(autoprefixer(configLocal.autoprefixer))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(configLocal.dest))
    .pipe(browserSync.reload({ stream: true }));
}

function sassMinLib() {
  isMin = false;

  gulp.src([configLocal.src + '/styles/libs.scss'], { allowEmpty: true })
    .pipe(sass(configLocal.settings))
    .on('error', handleErrors)
    .pipe(cssmin())
    .pipe(stripCssComments({ preserve: false }))
    .pipe(rename('libs.min.css'))
    .pipe(gulp.dest(configLocal.dest));
}

function sassMinLocal() {
  isMin = false;

  gulp.src([configLocal.src + '/styles/app.scss'], { allowEmpty: true })
    .pipe(sass(configLocal.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(configLocal.autoprefixer))
    .pipe(cssmin())
    .pipe(stripCssComments({ preserve: false }))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(configLocal.dest));
}

const sassBuild = gulp.parallel(sassLib, sassLocal);
const sassCompile = gulp.parallel(sassMinLib, sassMinLocal);

exports.sassLib = sassLib;
exports.sassLocal = sassLocal;
exports.sassMinLib = sassMinLib;
exports.sassMinLocal = sassMinLocal;
exports.sassBuild = sassBuild;
exports.sassCompile = sassCompile;
