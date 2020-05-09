var paths = require('./paths');

module.exports = {
    server: {
        baseDir: paths.htmldoc,
        routes: {
            "/vendor/": paths.vendor
        }
    },
    files: [paths.htmldoc + '/**/*.html']
};