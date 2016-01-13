module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
    * Sass
    */
    sass: {
      dev: {
        options: {
          style: 'nested',
          sourcemap: 'none'
        },
        files: {
          'read/style.css': 'scss/style.scss'
        }
      },
      live: {
        options: {
          style: 'compressed',
        },
        files: {
          'style.css': 'scss/style.scss'
        }
      }
    },

    /**
    * Autoprefixer
    */
    autoprefixer: {
      options: {
        map: true
      },
      dist: {
        files: {
          'style.css': 'style.css',
          'read/style.css': 'read/style.css'
        }
      }
    },

    /**
    * watch
    */
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      php: {
        files: '**/*.php',
        options: {
          livereload: true
        }
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch']);

};