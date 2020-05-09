const gulp = require('gulp');

async function copyTask(config) {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
}

async function copyFonts() {
    return copyTask(require('../config/fonts'));
}

async function copyMedia() {
    return copyTask(require('../config/media'));
}

async function copyImage() {
    return copyTask(require('../config/images'));
}

async function copyRoot() {
    return copyTask(require('../config/root'));
}

async function copyData() {
    return copyTask(require('../config/data'));
}


const copyDefault = gulp.parallel(copyFonts, copyRoot, copyMedia, copyData);

exports.copyFonts = copyFonts;
exports.copyMedia = copyMedia;
exports.copyImage = copyImage;
exports.copyRoot = copyRoot;
exports.copyData = copyData;
exports.copyDefault = copyDefault;