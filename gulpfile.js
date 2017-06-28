var gulp = require('gulp');
var uglify_es = require('uglify-es');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var minimist = require('minimist');
var exec = require('child_process').exec;

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

gulp.task('upload', ['compress'], function (cb) {
  exec('"C:/Program Files/AutoHotkey/AutoHotkey.exe" upload.ahk', function (err, stdout, stderr) {
	  if (err) {
		console.log(stdout);
		console.log(stderr);
	  }
    cb(err);
  });
});

gulp.task('default', ['upload']);