const gulp = require('gulp');
const concat = require('gulp-concat');
const hash = require('gulp-hash-filename');

gulp.task('vendor', () => {
  console.log('vendor');
  const VENDOR_ARR = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/device.js/lib/device.min.js',
  ];
  return gulp.src(VENDOR_ARR)
    .pipe(concat('vender.js', { newLine: ';\n\n' }))
    .pipe(hash({
      format: '{name}.{hash:10}{ext}',
    }))
    .pipe(gulp.dest('./dist/js/'));
});
