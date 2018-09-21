import gulp from 'gulp';
import pkg from './package.json';
import header from 'gulp-header';
import cssimport from 'gulp-cssimport';
import del from 'del';

const license = `/* ${pkg.name} ${pkg.version} | ${pkg.license} License | ${pkg.homepage} */\n`;

const src = './src/css/';
const dist = './dist/';
const main = 'main.css';
let files = [
  './src/css/_base.css',
  './src/css/_helpers.css',
  './src/css/_mqs.css',
  './src/css/_print.css' ];


gulp.task('concat', () => {
  gulp.src(src + main)
    .pipe(cssimport())
    .pipe(header(license))
    .pipe(gulp.dest(dist));
});
gulp.task('copy', () => {
  gulp.src(files,{})
    .pipe(header(license))
    .pipe(gulp.dest(dist))
});
gulp.task('clean', () => {
  del([dist]);
});

gulp.task('default',['copy','concat']);
