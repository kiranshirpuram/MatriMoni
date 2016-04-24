// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
var jshint = require('gulp-jshint');
var Server = require('karma').Server;
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
