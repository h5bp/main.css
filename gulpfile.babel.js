import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('scss', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({'outputStyle': 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['scss']);
