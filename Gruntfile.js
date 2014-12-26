'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      files: [
        'app/index.html',
        'app/scripts/main.js'
      ]
    },

    browserSync: {
      files: {
        src: ['index.html']
      },
      options: {
        server: {
          baseDir: './app'
        },
        watchTask: true
      }
    }
  });

  grunt.registerTask('serve', ['browserSync', 'watch']);
  grunt.registerTask('default', ['serve']);
};
