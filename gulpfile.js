var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css');

gulp.task('style', function () {
    return gulp.src('./assets/main.scss')
        .pipe(concat('app.min.css'))
        .pipe(sass())
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./assets/**/*.scss'], ['style']);
});

  gulp.task('default', ['style']);