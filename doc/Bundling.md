# Bundling

## Why Bundle

1. CommonJS doesn't work in web browsers
1. Package project into file(s)
1. Improve Node performance. it's not just for the web. Node's perf can be improved

## Topics

1. Module formats
1. Bundlers
1. Implement ES6 modules and bundlig

## Five Predominant Module Formats

1. Immediately Invoked Function Expressions (IIFEs)
1. Asynchronous Module Definition (AMD)
1. CommonJS (CJS)
1. Univeral Module Definition (UMD)
1. ES6 Modules

### IIFEs

1. Global Variables. these are generally bad and yield much criticism
1. myGlobal;
1. In turn, we created IIFEs

```javascript
(function() {
    // my code here
})();
```

```javascript
define (['jq'], function(jq) {}); // AMDs
```

#### CommonJS

```javascript
var jquery = require('jquery')
```

#### ES6 Module

```javascript
import jQuery from 'jquery'
```

## Why Use ES6 Modules (same as es2015 module)

1. Standardized
1. Statically analyzable
- improved autocomplete
- intelligent refactoring
- fails fast
- tree shaking
1. Easy to read
- named imports
- default exports

## Selecting a Bundler

1. First popular bunder was requirejs
1. Utilized and helped popularize AMD pattern
1. Fell out of favor recently

## Bundlers

1. Browserify
1. Webpack
1. Rollup
1. JSPM

### Browserify

1. First bundler to reach mass adoption
1. Bundle npm packages for the web
1. (bundles code that uses the commonjs pattern)
1. Large plugin ecosystem

### Webpack

1. Handles more than just JS
1. Import css, images, fonts, etc. just like JS
1. Built in hot-reloading web server

### Rollup

1. First bundler to offer tree shaking
1. Saving bandwidth, speeding page reloads
1. Tree shaking apps show as much as 20% perf increase
1. Faster loading production code
1. Quite new (relatively speaking next to competition)
1. Great for library authors
1. No hot reloading and code splitting

### JSPM

1. interesting b/c it uses SystemJS, a universal module loader
1. Can load modules at runtime
1. Has its own package manager
1. Can install from npm, git, etc.
1. Uses Rollup (so tree shaking!)

Browserify | Webpack | Rollup | JSPM
---------- | ------- | ------ | ----
Simple | Comprehensive | Tree-shaking Performance | Runtime loader Package Manager

## Why Webpack

1. Much more than just JS
- CSS
- Images
- Fonts
- HTML
1. Offers strategic bundle splitting
1. Includes web server that supports HOT MODULE RELOADING
1. Webpack 2 offers tree shaking