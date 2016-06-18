(function() {
  var javascriptLibraries = require('./sources.json').sources;

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    autoprefix = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    rename = require('gulp-rename'),
    filenames = require('gulp-filenames'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    KarmaServer = require('karma').Server,
    protractor = require('gulp-angular-protractor'),
    del = require('del');

  gulp.task('javascript-filenames', function() {
    return gulp.src("**/*.js", {
        cwd: "./src"
      })
      .pipe(filenames("javascript_files"))
  });

  //Merge all our js into one file with maps. See dist/bundle.js
  gulp.task('build-js', ['javascript-filenames'], function() {
    var opts = {
      entries: filenames.get("javascript_files", "full"),
      debug: true
    };
    var bundler = browserify(opts);

    bundler.on('log', gutil.log);
    bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(ngAnnotate())
      .pipe(uglify({
        mangle: true
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  });

  //Compiles scss files to css
  gulp.task('style', function() {
    del.sync('./assets/css/app.css');

    gulp.src('**/*.scss', {
        cwd: './src'
      })
      .pipe(concat('app.scss'))
      .pipe(sass().on('error', function(err) {
        console.log("SASS ERROR: " + err.message);
      }))
      .pipe(cssnano())
      .pipe(autoprefix())
      .pipe(gulp.dest('./assets/css'));
  });

  //Watch my scss files for changes
  gulp.task('watch-sass', function() {
    gulp.watch('**/*.scss', {
      cwd: "./src/"
    }, ['style']);
  });

  //Local webserver
  gulp.task('webserver', ['index'], function() {
    gulp.src('./')
      .pipe(webserver({
        livereload: {
          enable: true,
          filter: function(fileName) {
            // Don't refresh when bundle.js changes or map. These change a lot.
            // We care more about the individual js files, that are compiled from
            if (fileName.match(/bundle/) || fileName.match(/.map$/)) {
              return false;
            } else {
              return true;
            }
          }
        },
        fallback: 'index.html',
        open: true
      }));
  });

  //Adds the javascript files to index.html to be used
  gulp.task('index', ["build-js", 'style'], function() {
    var target = gulp.src('index.html', {
      cwd: './'
    });
    var sources = gulp.src(javascriptLibraries, {
      read: false
    });
    return target
      .pipe(inject(sources))
      .pipe(gulp.dest('./'));
  });

  gulp.task('watch-js', function() {
    gulp.watch(["**/*.js", '../sources.json'], { cwd: './src' }, ['build-js']);
  });

  gulp.task('unit', ["build-js", "watch-js"], function() {
    new KarmaServer({
      configFile: __dirname + '/tests/karma.conf.js',
      autoWatch: true,
      singleRun: false
    }).start();
  });

  gulp.task('e2e', function(done) {
    gulp.src(["./tests/e2e/*.js"])
      .pipe(protractor({
        'configFile': "tests/protractor.conf.js",
        'debug': false,
        'autoStartStopServer': true
      }))
      .on('error', function(e) {
        console.log(e);
      })
      .on('end', done);
  });

  //Default task
  gulp.task('default', ['style', 'watch-sass', 'watch-js', 'build-js', 'index', 'webserver']);
}());
