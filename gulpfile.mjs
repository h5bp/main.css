import gulp from 'gulp';
import cssimport from 'gulp-cssimport';
import header from 'gulp-header';
import autoPrefixer from 'gulp-autoprefixer';
import del from 'del';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const license = `/* ${pkg.name} ${pkg.version} | ${pkg.license} License | ${pkg.homepage} */\n`;

const src = './src';
const dist = './dist/';
let files = [
  `${src}/_base.css`,
  `${src}/_helpers.css`,
  `${src}/_mqs.css`,
  `${src}/_print.css`
];

gulp.task('concat', () => {
  return gulp.src(`${src}/main.css`)
    .pipe(cssimport())
    .pipe(header(license))
    .pipe(autoPrefixer({
      cascade: false
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('copy', () => {
  return gulp.src(files, {})
    .pipe(header(license))
    .pipe(gulp.dest(dist));
});

gulp.task('clean', (done) => {
  del([
    dist
  ]).then(() => {
    done();
  });
});

gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel('copy', 'concat')
  )
);

gulp.task('default', gulp.series('build'));
