var paths = require('../config/paths');
var gulp = require('gulp');
var del = require('del');

function clean() {
  return del(paths.htmldoc);
}

exports.clean = clean;
