// Karma configuration
// Generated on Mon May 06 2019 10:39:18 GMT-0300 (GMT-03:00)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        //urlRoot: '/base',

        proxies: {
            "/templates/": "base/www/templates/"
        },

        /* proxyReq: function(proxyReq, req, res, options) {
             // console.log(req);
         },*/


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            { pattern: 'www/templates/diario.html', watched: false, included: false, served: true, nocache: true },
            { pattern: 'www/js/lib/moment-with-locales.min.js', watched: false, included: true, served: true, nocache: true },
            { pattern: 'www/js/lib/jquery-3.4.0.min.js', watched: false, included: true, served: true, nocache: true },
            { pattern: 'www/js/domain.js', watched: false, included: true, served: true, nocache: true },
            'test/db.test.js'
        ],

        middleware: ['custom'],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],

        specReporter: {
            maxLogLines: 5, // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: true, // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },
        plugins: ["karma-firefox-launcher", "karma-jasmine", "karma-spec-reporter",
            {
                'middleware:custom': ['factory', function(config) {
                    return function(request, response, /* next */ ) {
                        console.log("middleware in action: ", request);
                        response.writeHead(200)
                        return response.end("content!")
                    }
                }]
            }
        ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}