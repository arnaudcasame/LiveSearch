var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('html', function(){
    gulp.src('builds/development/**/*.html');
});

gulp.task('sass', function () {
    return sass('process/sass/style.scss', {
        sourcemap: true,
        style: 'expanded'
    })
        .on('error', function (err) {
        console.error('Error!', err.message);
    })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('builds/development/css'));
});

gulp.task('watch', function() {
    gulp.watch('builds/development/**/*.html', ['html']);
    gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('builds/development/')
        .pipe(webserver({
        livereload: true,
        open: true,
        port: 2020
    }));
});

gulp.task('default', ['watch', 'html', 'sass','webserver']);
