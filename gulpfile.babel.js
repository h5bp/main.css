import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import del from 'del';
import sass from 'gulp-sass';

import pkg from './package.json';

const license = `/* ${pkg.name} ${pkg.version} | ${pkg.license} License | ${pkg.homepage} */\n`;

const src = './src';
const dist = './dist/';

gulp.task('sass', () => {
  return gulp.src(`${src}/*.scss`)
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(plugins().header(license))
    .pipe(plugins().autoprefixer({
      cascade: false
    }))
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
    'sass'
  )
);

gulp.task('default', gulp.series('build'));
