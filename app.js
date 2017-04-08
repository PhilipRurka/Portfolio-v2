'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const express = require('express');
let app = express();
const bodyParser = require('body-parser');


/************************************/
/********** CONFIGURATIONS **********/
/************************************/
// Disabling for security purposes
app.disable('x-powered-by');

// Enable Proxy
if (process.env.NODE_ENV === 'PRODUCTION') {
  app.enable('trust proxy');
}


// Set & Use
app.set('views', __dirname + '/app/client/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


/********************************/
/********** MIDDLEWARE **********/
/********************************/
// Middleware for all files
app.use(require(__dirname + '/app/server/middlewares/logger.js'));


/************************************/
/********** STATICS ROUTES **********/
/************************************/
app.use('/images', express.static(__dirname + '/app/client/images'));
app.use('/resources', express.static(__dirname + '/resources'));


/****************************/
/********** ROUTES **********/
/****************************/
app.use(require('./app/server/controllers'));

/**********************************/
/********** START SERVER **********/
/**********************************/
const env = process.env.NODE_ENV || 'DEVELOP';
app.listen(process.env.PORT);
console.log('Portfolio \nENVIRONMENT: ' + env +
  '\nListening On Port ' + process.env.PORT);
console.log('╲╲╭━━━━╮╲╲');
console.log('╭╮┃▆┈┈▆┃╭╮');
console.log('┃╰┫▽▽▽▽┣╯┃');
console.log('╰━┫△△△△┣━╯');
console.log('╲╲┃┈┈┈┈┃╲╲');
console.log('╲╲┃┈┏┓┈┃╲╲');
console.log('▔▔╰━╯╰━╯▔▔');
