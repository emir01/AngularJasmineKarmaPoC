// Karma configuration
module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.min.js', 
      'bower_components/angular-mocks/angular-mocks.js',

      'src/app/**/*.js',
      'src/app/**/*.spec.js',
    ],
    
    plugins: [
      'karma-jasmine',
      'karma-mocha-reporter',
      "karma-chrome-launcher"
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha"],
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
    })
}