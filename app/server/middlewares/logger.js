'use strict';
// CODING STANDARD - https://github.com/felixge/node-style-guide


// ============
// Dependencies
// ============
const bunyan = require('bunyan'); // Logger

let path;
if (process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging') {
  path = '/home/ubuntu/SimpTek-Dashboard/shared/logs';
} else {
  path = '.';
}

const log = bunyan.createLogger({
  name: "SimpTek-Dashboard",
  port: process.env.PORT,
  streams: [{
    stream: process.stdout,
    level: 'info'
  }, {
    path: path + '/SimpTek-Dashboard.log',
    level: 'info'
  }, {
    path: path + '/SimpTek-Dashboard-Error.log',
    level: 'error'
  }]
});


// ======
// Logger
// ======
/**
 * Logger for all the paths
 **/
module.exports = (req, res, next) => {
  req.log = log.child({
    ip: req.headers['x-forwarded-for'],
    method: req.method,
    endpoint: req.url
  });

  next(); // proceeding the req to the endpoints
};
