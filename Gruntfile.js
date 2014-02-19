module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        watch: {
            css: {
                files: ['Velociunirapticorn/css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'Velociunirapticorn/css/build/velociunirapticorn.css': 'Velociunirapticorn/css/velociunirapticorn.scss',
                    'Velociunirapticorn/css/build/main.css': 'Velociunirapticorn/css/main.scss',
                    'Velociunirapticorn/css/build/animations.css': 'Velociunirapticorn/css/animations.scss'
                }
            } 
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'watch', 'sass']);

};
