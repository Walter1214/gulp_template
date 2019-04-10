const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const gutil = require('gulp-util');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps'); // sourcemap
// const gulpPlumber = require('gulp-plumber');            // catch Error 用
// const notify = require('gulp-notify');
const path = require('path');
const envify = require('envify/custom');

const sourcemapsHandler = require('./sourcemapHandler');
const CONFIG = require('./config.js');

const SOURCE = [
  'src/js/app.js',
];
function getWatchifyHandler(bundler, fileNameWithPath) {
  return () => {
    gutil.log('Begin build for', fileNameWithPath);
    const fileName = path.basename(fileNameWithPath);
    console.log(fileNameWithPath, fileName);
    return bundler.bundle()
      .on('error', (err) => {
        gutil.log('Browserify Error', err);
      })
      .pipe(source(fileName))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(CONFIG.DEV_MODE ? gutil.noop() : uglify())
      .pipe(sourcemapsHandler())
      .pipe(gulp.dest('dist/js/'))
      .on('end', () => {
        gulp.start('browser-sync-reload');
      });
  };
}
gulp.task('js', () => {
  CONFIG.log('js');
  const streams = SOURCE.map((fileNameWithPath) => {
    const b = browserify(fileNameWithPath, {
      debug: CONFIG.DEV_MODE,
      cache: {},
      packageCache: {},
    });
    b.transform(babelify, { presets: ['es2015'] });
    b.transform(envify({
      NODE_ENV: CONFIG.DEV_MODE ? 'develoption' : 'production',
      API_NAME: 'milkmidiGulpTemplate',
    }));
    let watchfn;
    if (CONFIG.DEV_MODE) {
      const bundler = watchify(b);
      watchfn = getWatchifyHandler(bundler, fileNameWithPath);
      bundler.on('update', watchfn);
      bundler.on('log', gutil.log);
    } else {
      watchfn = getWatchifyHandler(b, fileNameWithPath);
    }
    return watchfn();
  });
  return streams;
});
