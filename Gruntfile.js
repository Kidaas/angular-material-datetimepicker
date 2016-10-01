module.exports = function(grunt) {
    //grunt wrapper function
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          options: {
            sourceMap: true,
          },
          js: { //target
              src: './js/angular-material-datetimepicker.js',
              dest: './js/angular-material-datetimepicker.min.js'
          }
        },

        cssmin: {
          minify: {
            src: 'css/material-datetimepicker.css',
            dest: 'css/material-datetimepicker.min.css'
          }
        },

    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //register grunt default task
    grunt.registerTask('default', ['uglify', 'cssmin']);
}
