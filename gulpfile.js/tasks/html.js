var config = require('../config/html');
var gulp = require('gulp');
var pug = require('gulp-pug');
var htmlbeautify = require('gulp-html-beautify');
var path = require('path');
var puglint = require('gulp-pug-lint');
var handleErrors = require('../libs/handleErrors');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');

async function htmlBuild() {
    gulp.src(config.src)
        .pipe(puglint(path.resolve(__dirname, '../config/.pug-lintrc')))
        .pipe(pug())
        .on('error', handleErrors)
        .pipe(htmlbeautify(path.resolve(__dirname, '../config/.htmlhintrc')))
        .pipe(gulp.dest(config.dest));
}

function htmlWatch() {
    gulp.src(config.src)
        .pipe(changed(config.dest, { extension: '.html' }))
        .pipe(puglint(path.resolve(__dirname, '../config/.pug-lintrc')))
        .pipe(pug())
        .on('error', handleErrors)
        .pipe(htmlbeautify(path.resolve(__dirname, '../config/.htmlhintrc')))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({ stream: true }));
}

exports.htmlBuild = htmlBuild;
exports.htmlWatch = htmlWatch;