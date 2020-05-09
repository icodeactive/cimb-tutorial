const gulp = require('gulp');
const watch = require('gulp-watch');
const imagesConfig = require('../config/images');
const sassConfig = require('../config/sass');
const htmlConfig = require('../config/html');
const dataConfig = require('../config/data');
const jsConfig = require('../config/script');
var imageJs = require('./images.js');
var copyJs = require('./copy.js');
var scriptJs = require('./script.js');
var sassJs = require('./sass.js');
var htmlJs = require('./html.js');
var browserSyncJs = require('./browserSync.js');

function watchCodeChange() {
	watch(imagesConfig.src, function () { imageJs.imagesMin; });
	watch(dataConfig.src, function () { copyJs.copyDefault; });
	watch(jsConfig.watch, function () { scriptJs.scriptLocalWatch; });
	watch(sassConfig.watch, function () { sassJs.sassLocal; });
	watch(htmlConfig.watch, function () { htmlJs.htmlWatch; });
}

const watchActions = gulp.series(browserSyncJs.browserSync, watchCodeChange);

exports.watch = watchActions;


