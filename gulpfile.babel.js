import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import del from 'del';

import pkg from './package.json';

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
    .pipe(plugins().cssimport())
    .pipe(plugins().header(license))
    .pipe(plugins().autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('copy', () => {
  return gulp.src(files, {})
    .pipe(plugins().header(license))
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
