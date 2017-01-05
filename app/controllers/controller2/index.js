'use strict';

// ******************************************************************
// Standard template for reading controller methods. You probably
// don't need to touch this. This file will be removed in future
// ******************************************************************

const humps = require('humps');
const fs = require('fs');

let files = fs.readdirSync(__dirname);
files.splice(files.indexOf('index.js'), 1);

files.forEach(function(fileName) {
  let methodName = humps.camelize(fileName).replace('.js','');
  exports[methodName] = function(req, res, next) {
    return require(`./${fileName}`)(req, res, next);
  };
});
