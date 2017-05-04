'use strict';

/**
 * Load app configurations
 */

var configSource = process.env.NODE_ENV || 'development';
console.log("Config Source: " + configSource);
module.exports = require('./env/' + configSource);