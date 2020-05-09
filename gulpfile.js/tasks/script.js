const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const path = require('path');
const paths = require('../config/paths');
const configLocal = require('../config/script');
const jsbeautify = require('gulp-jsbeautify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
var browserifyJs = require('./browserify.js')

var src = {
    l10n: configLocal.src + 'l10n.js',
    libs: configLocal.src + 'libs/*.js',
    app: configLocal.src + 'app.js',
    plugins: configLocal.src + 'plugins/*.js'
};

async function scriptLibs() {
    isMin = false;
    return gulp.src([paths.vendor + '/jquery/dist/jquery.js', paths.vendor + '/modernizr/dist/modernizr.js', paths.vendor + '/detectizr/dist/detectizr.js', paths.vendor + '/jquery-validation/dist/jquery.validate.js', paths.vendor + '/slick-carousel/slick/slick.js', paths.internalLibs + '/popperjs/popper.min.js', paths.vendor + '/bootstrap/js/bootstrap.js', paths.internalLibs + '/holderjs/holder.min.js', src.libs], { allowEmpty: true })
        .pipe(concat('libs.js'))
        .pipe(jsbeautify({ indentSize: 2 }))
        .pipe(gulp.dest(configLocal.dest));
}

async function scriptLocal() {
    isMin = false;

    return gulp.src([src.l10n, src.app, src.plugins], { allowEmpty: true })
        .pipe(jshint(path.resolve(__dirname, '../config/.jshintrc')))
        .pipe(jshint.reporter(stylish))
        .pipe(concat('script.js'))
        .pipe(jsbeautify({ indentSize: 2 }))
        .pipe(gulp.dest(configLocal.dest));
}

function scriptLocalWatch() {
    isMin = false;

    return gulp.src([src.l10n, src.app, src.plugins], { allowEmpty: true })
        .pipe(changed(configLocal.dest, { extension: '.js' }))
        .pipe(jshint(path.resolve(__dirname, '../config/.jshintrc')))
        .pipe(jshint.reporter(stylish))
        .pipe(concat('script.js'))
        .pipe(jsbeautify({ indentSize: 2 }))
        .pipe(gulp.dest(configLocal.dest))
        .pipe(browserSync.reload({ stream: true }));
}

function scriptMinLibs() {
    isMin = true;

    return gulp.src([paths.vendor + '/jquery/dist/jquery.js', paths.vendor + '/modernizr/modernizr.js', paths.vendor + '/detectizr/dist/detectizr.js', paths.vendor + '/jquery-validation/dist/jquery.validate.js', paths.vendor + '/slick-carousel/slick/slick.js', paths.vendor + '/bootstrap-sass/assets/javascripts/bootstrap.js', src.libs], { allowEmpty: true })
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest(configLocal.dest));
}

function scriptMinLocal() {
    isMin = true;

    return gulp.src([src.l10n, src.app, src.plugins], { allowEmpty: true })
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest(configLocal.dest));
}

const jsBuild = gulp.parallel(browserifyJs.browserify, scriptLibs, scriptLocal);
const jsCompile = gulp.parallel(scriptMinLibs, scriptMinLocal);

exports.scriptLibs = scriptLibs;
exports.scriptLocal = scriptLocal;
exports.scriptLocalWatch = scriptLocalWatch;
exports.scriptMinLibs = scriptMinLibs;
exports.scriptMinLocal = scriptMinLocal;
exports.jsBuild = jsBuild;
exports.jsCompile = jsCompile;