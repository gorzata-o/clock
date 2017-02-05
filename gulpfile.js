var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
	return gulp.src("scss/*.scss")
	.pipe(sass({
		outputStyle:'extended',
	}))
	.pipe(gulp.dest("css"));
});


gulp.task("watch", function(){
	gulp.watch("scss/*.scss", ["sass"]);
});


// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("app/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);