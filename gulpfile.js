var gulp = require('gulp')
,	imagemin = require('gulp-imagemin');

var paths = {
	srcDir: 'src/*',
	destDir: 'images'
}

gulp.task('imagemin', function() {
	gulp.src(paths.srcDir)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.destDir));
});

gulp.task('default', function() {
	gulp.run('imagemin');
	gulp.watch(paths.srcDir, function() {
		gulp.run('imagemin');
	});
});
