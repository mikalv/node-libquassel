'use strict';

var aliases = [
  './lib/libquassel.js:quassel',
  './lib/network.js:network',
  './lib/identity.js:identity',
  './lib/user.js:user',
  './lib/bufferview.js:bufferview',
  './lib/buffer.js:ircbuffer',
  './lib/message:message',
  './lib/ignore:ignore',
  './lib/alias:alias',
  './node_modules/net-browserify-alt/browser.js:net',
  './node_modules/tls-browserify/index.js:tls',
  './node_modules/debug/src/browser.js:debug'
];

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jsdoc: {
      dist: {
        src: ['lib/*.js', 'package.json', 'README.md'],
        options: {
          template: 'node_modules/loke-jsdoc-theme',
          configure: 'jsdoc.conf.json',
          destination: 'doc'
        }
      }
    },
    browserify: {
      dev: {
        src: ['client/iefix.js', './node_modules/es6-map/implement.js'],
        dest: 'client/libquassel.js',
        options: {
          alias: aliases
        }
      },
      dist: {
        src: ['client/iefix.js', './node_modules/es6-map/implement.js'],
        dest: 'client/libquassel.min.js',
        options: {
          alias: aliases,
          transform: [['uglifyify', {
              global: true,
              ignore: ['**/node_modules/node-forge/*', '**/node_modules/es6-map/*'],
              compress: {
                keep_fnames: true
              },
          }]]
        }
      }
    },
    watch: {
      dist: {
        files: 'lib/*.js',
        tasks: ['browserify:dev']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('dist', ['browserify:dev', 'browserify:dist', 'jsdoc']);
  grunt.registerTask('dev', ['browserify:dev']);
  
  grunt.registerTask('doc', ['jsdoc']);

};
