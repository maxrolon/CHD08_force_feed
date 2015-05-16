var path = require('path');

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

	grunt.initConfig({
		sass: { 
			options: {
				style: 'compressed'
			},
			scaffold: {			 
				files: {													
					'public/assets/css/main.css':'src/sass/styles.scss'
				}
			}
		 },

		autoprefixer: {
			options: {
				map: true
			},
			scaffold: {
				src: 'public/assets/css/main.css',
				dest: 'public/assets/css/main.css'
			}
		},

		browserify: {
			options: {
				browserifyOptions:{
					debug:true
				},
				preBundleCB: function(b) {
					b.plugin('minifyify', {
					 map: 'main.js.map',
					 output: 'public/assets/js/main.js.map',
				 });
				}
			},
			main: {
				src: ['src/js/app.js'],
				dest: 'public/assets/js/main.js',
			}
		},
		
		uglify: {
			compress: {
				files: {
					'public/assets/js/vendor.js': [
						'src/js/vendor/jquery/dist/jquery.min.js',
						'src/js/vendor/gsap/src/minified/TweenMax.min.js',
						'src/js/vendor/rangeslider.js/dist/rangeslider.min.js',
						'src/js/vendor/debounce/debounce.js'
					]
				},
				options: {
					mangle: true
				}
			}
		},
		
		image_resize: {
			 options: {
				width: '50%'
			},
			resized: {
				files: [
					{'public/assets/img/sprite-sm.png': 'public/assets/img/sprite.png'}
				]
			},
		},

		sprite:{
			ui: {
				engine: 'pngsmith',
				algorithm: 'binary-tree',
				src: 'src/sprite/*.png',
				destImg: 'public/assets/img/sprite.png',
				imgPath: '/assets/img/sprite.png',
				cssTemplate: 'src/templates/sprite/sprite.handlebars',
				destCSS: 'src/sass/partials/_sprite.scss',
				padding: 5
			}
		},
		
		watch: {
			sass: {
				options:{
				 	livereload: false,
				},
				files: ['src/sass/**/*.scss'],
				tasks: ['sass']
		 },
		 css: {
				options: {
					livereload: true,
					spawn: false
				},
				files: ['public/assets/css/*.css'],
				tasks: ['autoprefixer']
			},
			sprite: {
				options: {
					livereload: true
				},
				files: ['src/sprite/*.png', 'src/templates/sprite/sprite.handlebars'],
				tasks: ['sprite']
			},
			image_resize: {
				options: {
					livereload: true
				},
				files: ['public/assets/img/sprite.png'],
				tasks: ['image_resize']
			},
			browserify: {
				options: {
					livereload: true
				},
				files: ['src/js/**/*.js'],
				tasks: ['browserify']
			}
		}
});

	grunt.registerTask('compile', [
		'sprite',
		'sass',
		'autoprefixer',
		'browserify'
	]);

	grunt.registerTask('dev', [
		'compile',
		'watch'
	]);

	grunt.registerTask('default', ['dev']);
};