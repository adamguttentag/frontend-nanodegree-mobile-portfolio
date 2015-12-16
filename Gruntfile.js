module.exports = function(grunt) {
// configure tasks
grunt.initConfig({
  // configuring image optimization
  resize_crop: {
    image_group: {
      options: {
        format: "jpg",
        gravity: "center",
        height: 600,
        width: 800
      },
      files: {
        'build/views/images': 'source/views/images/pizzeria.jpg',
      },
    },
    image_group2: {
      options: {
        format: "jpg",
        gravity: "center",
        height: 75,
        width: 115
      },
      files: {
        'build/img': 'source/views/images/pizzeria.jpg',
      },
    },
  },
  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'source/',
        src: ['img/*.{png,jpg,gif}'],  //specify input directory here
        dest: 'build/'                    //specify output directory here
      },
      {
        expand: true,
        cwd: 'source/',
        src: 'views/images/pizza.png',  //specify input directory here
        dest: 'build/'                    //specify output directory here
      },
      {
        expand: true,
        cwd: 'build/',
        src: 'views/images/pizzeria.jpg',  //specify input directory here
        dest: 'build/'                    //specify output directory here
      }]
    }
  },
  uglify: {
    build: {
        src: 'source/views/js/main.js',     //specify input file here
        dest: 'build/views/js/main.js'  //specify output file here
    }
  },
  minifyHtml: {
    options: {
      cdata: true
    },
    dist: {
      files: {
        'build/views/pizza.html': 'source/views/pizza.html'
      }
    }
  },
  cssmin: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: {
      files: {
        'build/css/print.css': 'source/css/print.css',
        'build/css/style.css': 'source/css/style.css'
      }
    }
  }
});
// load tasks (one per line)
grunt.loadNpmTasks('grunt-resize-crop');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-minify-html');
grunt.loadNpmTasks('grunt-contrib-cssmin');
// register tasks (includes an array of tasks in the order they are to be performed)
grunt.registerTask('default', ['resize_crop','imagemin','uglify','minifyHtml','cssmin']);
};
