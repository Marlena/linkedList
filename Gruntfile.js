var grunt = require ('grunt');


grunt.initConfig({
    karma:{
        unit: {
            configFile:'spec/karma.conf.js'
        },
        continuous: {
            singleRun:true,
            configFile:'spec/karma.conf.js'
        }
    },
    jshint:{
        all: ['src/**/*.js','spec/**/*.js']

    }
})

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-karma');

grunt.registerTask('default', ['jshint','karma:continuous']);