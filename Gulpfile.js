var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

// Gulp tasks
gulp.task('build', function () {
  return browserify({entries: './src/main.js', extensions: ['.js'], debug: true})
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on('error',gutil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));

});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    middleware: function(connect,opt){
      return [
        function(req,res,next){
          if(req.method == 'POST' && req.url == '/'){
            return res.end('I recive a POST');
          }
          next();
        }
      ]
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.js'], ['build']);
});

gulp.task('default', ['build','connect','watch']);

