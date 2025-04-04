var gulp = require('gulp');
const minify = require("gulp-minify");
// var csso = require('gulp-csso');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
const { watch } = require('gulp');

gulp.task('default', function () {
    return gulp.src(['./static/*.css'])
        // Auto-prefix css styles for cross browser compatibility
        // Minify the file
        .pipe(concatCss('bundle.css'))
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        // Output
        .pipe(gulp.dest('../static/'))
});

