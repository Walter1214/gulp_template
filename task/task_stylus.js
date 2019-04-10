// var base64 = require( 'gulp-base64' ),
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// const gutil = require('gulp-util');
const gulpPlumber = require('gulp-plumber');

const CONFIG = require('./config.js');
const sourcemapsHandler = require('./sourcemapHandler');

const SOURCE = ['src/css/**/*.styl', '!src/css/**/_*'];
const plugins = [
  autoprefixer({ browsers: ['last 2 version', '> 5%'] }),
  // cssnano,
];
if (!CONFIG.DEV_MODE) {
// plugins.push(cssnano);
} else {
  gulp.watch('src/css/**/*.styl', () => runSequence('stylus', 'browser-sync-stream'));
}
gulp.task('stylus', () => {
  CONFIG.log('stylus');
  return gulp.src(SOURCE)
    .pipe(gulpPlumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: !CONFIG.DEV_MODE,
      'include css': true,
    }))
    .pipe(postcss(plugins))
    .pipe(sourcemapsHandler())
  // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});
