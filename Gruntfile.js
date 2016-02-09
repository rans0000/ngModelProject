//require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed',
			},
			dist: {
				files: {
					'html/css/style.css': 'html/scss/style.scss'
				}
			}
		},
		watch: {
			html: {
				files: ['html/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		},
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
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'express', 'express-keepalive']);
	grunt.registerTask('myserver', ['express', 'express-keepalive']);
	grunt.registerTask('devhtml', ['watch:html', 'express', 'express-keepalive']);
};