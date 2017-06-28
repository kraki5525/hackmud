var gulp = require('gulp');
var uglify_es = require('uglify-es');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

var minimist = require('minimist');

var uglify = composer(uglify_es, console);
var knownOptions = {
	string: "script",
	default: ""
};

var options = minimist(process.argv.slice(2))

gulp.task('compress', function(cb){
	pump([
		gulp.src(options.script + '/script.js'),
		replace(/^function \(/,'function ___('),
		replace('#s', 'hackmud.s'),
		uglify({
			output: { comments: true}
		}),
		replace('function ___(','function ('),
		replace('hackmud.s', '#s'),
		rename('script.js'),
		gulp.dest('./')
		],
		cb);
});

gulp.task('default', ['compress']);