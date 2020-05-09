const browserSync = require('browser-sync');
const config = require('../config/browserSync');

function browserSyncInit() {
  return browserSync(config);
}

exports.browserSync = browserSyncInit;