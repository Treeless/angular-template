(function() {
  var sources = require('../sources.json').sources;
  for(var i=0; i < sources.length; i++){
    sources[i] = sources[i].replace("./", "../");
  }
  module.exports = function(config) {
    config.set({

      // base path that will be used to resolve all patterns
      basePath: '.',

      // frameworks to use
      frameworks: ['mocha', 'chai', 'sinon'],

      // list of files / patterns to load in the browser
      files: sources.concat([
        '../bower_components/angular-mocks/angular-mocks.js',
        './unit/*.js',
        './mock/*.js'
      ]),

      reporters: ['mocha', 'html'],

      plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-sinon',
        'karma-mocha-reporter',
        'karma-htmlfile-reporter',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        // 'karma-ie-launcher',
        // 'karma-safari-launcher',
        // 'karma-firefox-launcher'
      ],

      htmlReporter: {
        outputFile: 'output/units.html',
        pageTitle: 'Unit Tests',
        subPageTitle: 'Angular-Template Application'
      },

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      logLevel: config.LOG_INFO,

      autoWatch: true,

      browsers: ['PhantomJS'], //'Chrome', 'Safari', 'Firefox', 'IE',

      singleRun: false
    });
  };
}());
