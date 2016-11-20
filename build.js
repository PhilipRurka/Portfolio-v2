'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const fs = require('fs');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const globAll = require('glob-all');
const UglifyJS = require("uglify-js");
const concat = require('concat-files');


/*******************************/
/********** VARIABLES  **********/
/*******************************/
const env = process.env.NODE_ENV || 'DEVELOP';

// Sass Config
let configSass = {
  file: __dirname + '/app/client/stylesheets/main.scss',
  sourceComments: true,
  outputStyle: 'expanded'
};

// CSS Prefixer
const prefixer = postcss([autoprefixer({
  remove: false,
  browsers: [
    'ie >= 10',
    '> 5%',
  ]
})]);


/***********************************/
/********** CONFIGURATION **********/
/***********************************/
console.log('ENVIRONMENT: ' + env);

if (env === 'PRODUCTION') {
  // On Production
  // Uglify SCSS, Autoprefix
  // Uflify JS
  console.log('SCSS - Compile SCSS, Uglify CSS, Autoprefix');
  console.log('JS   - Uglify JS');
  configSass.outputStyle = 'compressed';
  configSass.sourceComments = false;
} else {
  // On Other
  // Complile SCSS, Add Soure Comments, Autoprefix
  // ConcatJS, Add Soure Comments
  console.log('SCSS - Compile SCSS, Add Source Comments, Autoprefix');
  console.log('JS   - Concat JS, Add Source Comments');
}


/***************************/
/********** BUILD **********/
/***************************/
// SCSS Build
var result = sass.render(configSass, function(error, result) {
  if (!error) { // No Error, run throught autoprefixer and write to disk
    prefixer.process(result.css).then(function(result2) {
      fs.writeFile(__dirname + '/resources/main.css', result2.css);
    });
  } else {
    console.log(error);
  }
});

// JS Build
const files = globAll.sync([
  __dirname + '/app/client/javascripts/vendors/angular.js',
  __dirname + '/app/client/javascripts/vendors/angulartic.js',
  __dirname + '/app/client/javascripts/vendors/jquery.js',
  __dirname + '/app/client/javascripts/vendors/*.js',
  __dirname + '/app/client/javascripts/app.js',
  __dirname + '/app/client/javascripts/**/*.js'
]);

if (env === 'PRODUCTION') {
  var result = UglifyJS.minify(files, {
    mangle: true
  });
  fs.writeFile(__dirname + '/resources/main.js', result.code);
} else {
  concat(files, __dirname + '/resources/main.js', function() {});
}
