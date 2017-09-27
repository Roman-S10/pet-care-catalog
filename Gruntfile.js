module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: {
                src: ['build']
            }
        },
        sass: {
            dist: {
                files: {
                    'build/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/main.min.css': ['build/css/main.css']
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['index.html', 'services.html', 'gallery.html', 'store.html', 'contacts.html'],
                    dest: 'build/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'src/fonts/roboto',
                    src: ['*'],
                    dest: 'build/fonts/roboto',
                    filter: 'isFile'
                }]
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /..\/build\//g,
                            replacement: ''
                        }
                    ]
                },
                files: [{
                    expand:true,
                    flatten: true,
                    src: ['build/*.html'],
                    dest: 'build/'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/main.min.js': ['node_modules/materialize-css/dist/js/materialize.js', 'src/js/main.js']
                }
            }
        },
        watch: {
            css: {
                files: 'src/scss/main.scss',
                tasks: ['sass']
            },
            js: {
                files: 'src/js/main.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'copy',
        'sass',
        'cssmin',
        'uglify',
        'imagemin',
        'replace'
    ]);

};