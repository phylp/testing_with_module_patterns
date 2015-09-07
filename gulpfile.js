'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');

gulp.task('jshint', function(){
  return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('test', function(){ 
  return gulp.src('test/**/*test.js')
	.pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
	gulp.watch(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'], ['jshint']);
});

// gulp.watch(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'], function(event){
// 	return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
// 	.pipe(jshint())
// 	.pipe(jshint.reporter('default'));
// });

gulp.task('default', ['jshint', 'test', 'watch']);