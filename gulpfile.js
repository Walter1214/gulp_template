const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const rimraf = require('rimraf');
const gutil = require('gulp-util');

const DEV_MODE = gutil.env._[0] !== 'p' && gutil.env._[0] !== 'pp';

const config = require('./task/config.js');

config.setDevMode(DEV_MODE);

requireDir('./task');

const DEFAULT_TASK = [
  'pug', 'js', 'stylus', 'image', 'vendor',
];

gulp.task('default', ['d']);

gulp.task('d', () => {
  config.log('d');
  return runSequence(...DEFAULT_TASK.concat(['browser-sync']));
});
gulp.task('p', () => {
  config.log('p');
  return runSequence(...['rimraf'].concat(DEFAULT_TASK));
});
gulp.task('rimraf', (cb) => {
  config.log('rimraf');
  rimraf('./dist', cb);
});
