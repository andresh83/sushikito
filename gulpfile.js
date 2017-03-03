
/*
 * ==========================================================
 * Gulpfile.js 
 * Task runner for 'test-libraries'
 * @author: Andres Hernandez <hernandez.andres.d@gmail.com>
 * @date: Jan 2017
 * @copy: MIT
 * ==========================================================
 */

'use strict';

// ==============================================================
// Dependencies 
// ==============================================================

var gulp = require('gulp'),
	sass = require('gulp-sass'); 

// ==============================================================
// Config
// ==============================================================

var input = {
	sass: './src/**/*.{scss,sass}'
}

var output = {
	build: './build/'
}

// ==============================================================
// Sass
// ==============================================================

gulp.task('sass', function () {
	return gulp
		.src (input.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(output.build)); 
}); 

// ==============================================================
// Default
// ==============================================================

gulp.task('default', ['sass']);