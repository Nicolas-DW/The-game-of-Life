module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      main: {
        cwd: "./", // set working folder / root to copy
        src: ["./index.html", "./style.css", "./js/**/*"], // copy all files and subfolders
        dest: "dist/", // destination folder
        expand: true, // required when using cwd
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", "copy");
};


