var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['sass']);
})