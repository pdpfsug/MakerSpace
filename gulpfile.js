const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean')
const rename = require("gulp-rename");
const minify = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const pkg = require('./package.json');

const { series, parallel } = require('gulp');


function minifyJS(cb) {
  return gulp.src([
    './js/*.js',
    '!./js/*.min.js'
  ])
  .pipe(minify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./js'))

  cb();
}

function compileSCSS(cb) {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass.sync({outputStyle: 'expanded'})
    .on('error', sass.logError))
  .pipe(gulp.dest('./css'))

  cb();
}

function minifyCSS(cb) {
  return gulp.src([
    './css/*.css',
    '!./css/*.min.css'
  ])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./css'))

  cb();
}


function cleanModules(cb) {
  return gulp.src('lib/', {read: false})
    .pipe(clean());
  cb();
}

function copyModules(cb) {
  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
  .pipe(gulp.dest('./lib/bootstrap'))

  // Font Awesome
  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
  ])
  .pipe(gulp.dest('./lib/font-awesome'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
  .pipe(gulp.dest('./lib/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
  ])
  .pipe(gulp.dest('./lib/jquery-easing'))

  // Simple Line Icons
  gulp.src([
    './node_modules/simple-line-icons/fonts/**',
  ])
  .pipe(gulp.dest('./lib/simple-line-icons/fonts'))

  gulp.src([
    './node_modules/simple-line-icons/css/**',
  ])
  .pipe(gulp.dest('./lib/simple-line-icons/css'))

  cb();
}


// TODO Fix differences in SCSS and restore compiling
// exports.default = series(cleanModules, copyModules, parallel(minifyJS, series(compileSCSS, minifyCSS)));

// WORKAROUND
exports.default = series(cleanModules, copyModules, minifyJS);
