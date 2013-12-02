module.exports = function (config) {
    config.set({
        basePath:'..',
        browsers:['PhantomJS'],
        files:[
            'spec/**/*_spec.js'],
        frameworks:['jasmine', 'browserify'],
        preprocessors:{
            'spec/**/*.js':['browserify']
        },
        browserify:{
            watch:true
        }
    });
};