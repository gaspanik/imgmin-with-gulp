var
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
	gulp.src('src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images'));
});

gulp.task('default', function() {
	gulp.run('imagemin');
	gulp.watch('src/**', function() {
		gulp.run('imagemin');
	});
});
