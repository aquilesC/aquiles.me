var gulp = require('gulp');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
    return gulp.src(['./static/*.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('../static/'))
});
