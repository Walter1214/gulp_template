const gulp = require('gulp');
const pug = require('gulp-pug');
const runSequence = require('run-sequence');
const moment = require('moment');

const CONFIG = require('./config.js');

const SOURCE = [
  'src/html/**/*.pug',
  '!*src/html/**/_*.pug',
  '!*src/html/include/*.pug',
];
const SOURCE_WATCH = [
  'src/html/**/*.pug',
];

if (CONFIG.DEV_MODE) {
  gulp.watch(SOURCE_WATCH, () => runSequence('pug', 'browser-sync-reload'));
}

gulp.task('pug', () => {
  CONFIG.log('pug');
  return gulp.src(SOURCE)
    .pipe(pug({
      pretty: CONFIG.DEV_MODE,
      data: {
        DEV_MODE: CONFIG.DEV_MODE,
        DATE_TIME: moment().format('YYYY_M_D_HH_mm'),
      },
    }))
  // .pipe( hash_src( { build_dir: "./dist", src_path: "./src" }) )
    .pipe(gulp.dest('./dist'));
});
