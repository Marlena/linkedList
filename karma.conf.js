/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 10/27/13
 * Time: 6:35 AM
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',

        frameworks: ['jasmine'],

        browsers: ['Firefox'],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};