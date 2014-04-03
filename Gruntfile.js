module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    jasmine: {
      src: "src/js/*.js",
      options: {
        specs: "spec/js/tests/*.js",
        vendor: "bower_components/jquery/dist/jquery.js"
      }
    },

    watch: {
      scripts: {
        files: ["src/js/*.js", "spec/js/tests/*.js"],
        tasks: ['jasmine']
      }
    }

  });

  // This loads in all the grunt tasks auto-magically.
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ["watch"]);

};