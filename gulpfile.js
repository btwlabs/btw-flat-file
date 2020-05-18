// ////////////////////////////////////
// Required
// ////////////////////////////////////

// Main dependencies
var gulp 			= require('gulp');
var browserSync 	= require('browser-sync').create();
var sass 			= require('gulp-dart-sass');
var sourcemaps 		= require('gulp-sourcemaps');


/**
 * Launch the Server
 */
 gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
		// Change as required, also remember to set in theme settings
		proxy: "file:///Users/dennisthompson/Sites/btw-flat-file-wip/index.html",
		//port: 8000
    });
});


/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function () {
	return gulp
		.src('sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream:true}))
});


/**
 * @task reload
 * Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
	browserSync.reload();
});


/**
 * @task watch
 * Watch scss files for changes & recompile
 * Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
	gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
	gulp.watch(['js/*.js'], ['scripts']);
	gulp.watch(['templates/*.html.twig', '**/*.yml'], ['reload']);
});


/**
 * Default task, running just `gulp` will 
 * compile Sass files, launch BrowserSync, watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);


