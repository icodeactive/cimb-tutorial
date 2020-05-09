var paths = require('./paths');

module.exports = {
  src: paths.bowerComponents + '/**',
  dest: paths.vendor + '/',
};
