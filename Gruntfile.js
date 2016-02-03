module.exports = function(grunt) {

    grunt.initConfig({
        express: {
            server: {
                options: {
                    port: 9001,
                    bases: 'dev',
                    open: 'http://localhost:9001'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('default', ['express', 'express-keepalive']);
    grunt.registerTask('myserver', ['express', 'express-keepalive']);
};