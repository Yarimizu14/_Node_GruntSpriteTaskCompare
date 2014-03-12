var fs  = require('fs');
var sys = require('sys');

module.exports=function(grunt){
    'use strict';

    //Minify
    grunt.initConfig({

        sprite: {
            /* スプライト作成タスク1 */
            icons: {
                src: 'images/assets/icons/*.png',
                destImg: 'images/spritesmith-icons.png',
                destCSS: 'stylesheets/spritesmith.css',
            },

            /* スプライト作成タスク2 */
            icons2: {
                src: 'images/assets/icons/*.png',
                destImg: 'images/spritesmith-icons2.png',
                destCSS: 'sass/spritesmith2.sass',
                algorithm: 'alt-diagonal',
                cssFormat: 'sass',
                cssTemplate: "template/spritesmith.sass.mustache",

                // OPTIONAL: Map variable of each sprite
                'cssVarMap': function (sprite) {
                    // `sprite` has `name`, `image` (full path), `x`, `y`
                    //   `width`, `height`, `total_width`, `total_height`
                    // EXAMPLE: Prefix all sprite names with 'sprite-'
                    sprite.name = 'sprite-' + sprite.name;
                },

                // OPTIONAL: Specify css options
                'cssOpts': {
                    // Some templates allow for skipping of function declarations
                    'functions': {
                        'cssClass': function(arg) {
                            console.log(this);
                            console.log(arg);
                            return ;
                        }
                    },

                    // CSS template allows for overriding of CSS selectors
                    /*
                    'cssClass': function (item) {
                    return '.sprite-' + item.name;
                    }
                    */
                }

            },
            /* スプライト作成タスク1 */
            icons3: {
                src: 'images/assets/icons/*.png',
                destImg: 'images/spritesmith-icons.png',
                cssFormat: 'json',
                destCSS: 'stylesheets/spritesmith3.json'
            }

        },

        spritesheet: {
            generate: {

                // An array of filename / source images array pairs. The basename of the sprite file
                // is also prefixed to the CSS classes.
                sprites: {
                    "images/grunt-spritesheet.png": ['images/assets/icons/*.png'],
                    "images/grunt-spritesheet2.png": ['images/assets/icons/*.png']
                },

                // The destination for the build stylesheet
                sheet: "stylesheets/grunt-spritesheet.css",

                // A mustache template used to render your sprites in a css file. (Optional)
                //templateUrl: "path/to/template.mustache",

                // Optionally pass additional options to spritesmith
                spritesmithOptions: {

                }
            },

            generate2: {

                sprites: {
                    "images/grunt-spritesheet2.png": ['images/assets/icons/*.png'],
                },

                sheet: "stylesheets/grunt-spritesheet2.css",

                spritesmithOptions: {

                }
            }

        }



    });

    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-spritesheet');

    grunt.registerTask('default', ['compass']);
};

