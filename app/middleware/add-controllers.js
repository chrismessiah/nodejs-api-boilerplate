'use strict';

// *******************************************************
// Get all read all controllers/*/index.js and export them
// *******************************************************

const humps = require('humps');
const fs = require('fs');

let path = './app/controllers/';
let files = fs.readdirSync(path);
let controller = {};

files.forEach(function(fileName){
  let controllerName = humps.camelize(fileName);
  controller[controllerName] = require(`../controllers/${fileName}`);
});
