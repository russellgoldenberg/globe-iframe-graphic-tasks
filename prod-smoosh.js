var gulp = require('gulp');
var smoosher = require('gulp-smoosher');

//smoosh all the files! (insert code for references/links to resources)
gulp.task('prod-smoosh', function() {
    gulp.src('.tmp/*.html')
        .pipe(smoosher())
        .pipe(gulp.dest('prod'));
});