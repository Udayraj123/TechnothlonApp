/*
We need to tell the Assemble task about our structure, so let's open up our Gruntfile.js and make some changes.

*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './www/generated'
        }
      }
    },

    assemble: {
         options: {
           layout: 'compile.hbs',// The final build file?! .hbs extension
           layoutdir: './www/layouts/',
           partials: './www/partials/**/*.hbs'
         },
         posts: {
           files: [{
             cwd: './www/content/',
             dest: './www/generated/',//files that are processed they will be placed here
             expand: true,
             src: ['**/*.hbs', '!_pages/**/*.hbs'] //do not take _pages folder. take everything else.
           }, {
             cwd: './www/content/_pages/',
             dest: './www/generated/',//files that are processed they will be placed here
             expand: true,
             src: '**/*.hbs'
           }]
         }
       }

  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['connect']);

};