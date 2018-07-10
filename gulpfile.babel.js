import gulp from 'gulp';
import pkg from './package.json';
import replace from 'gulp-replace';
import header from 'gulp-header';
import fs from 'fs';

const license = `/* ${pkg.name} ${pkg.version} | ${pkg.license} License | ${pkg.homepage} */\n`;

const src = './src/css/';

let files;

fs.readdir(src, (err, dir) =>{
  files = dir;
});


gulp.task('main', () => {
  return gulp.src(files)
    .pipe(header(license))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['main']);
