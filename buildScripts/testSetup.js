// This file isn't transpile, so must use CommonJS and ES5

// Register babel t transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
