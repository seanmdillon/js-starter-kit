# Transpilers

## Options

1. There are hundreds of transpiler options for Javascript
2. Only a few stand out as true credible transpilers for JS

## Three True Options

1. Babel
2. Typescript
3. Elm

### Babel

Babel allows you to enjoy modern, standards-based JS today.

### Typescript

1. Superset of JS
1. Enhanced autocompletion
1. Safer refactoring
1. Clearer intent

Typescript is a superset of JavaScript ES6. Adds in TypeScript-specific enhancements. Choosing between TS and Babel is a tough choice.

Typescript | Babel
----------- | --------------
Enhanced autocompletion | Write standardized JS
Enhanced readability | Leverage full JS Ecosystem (React, ESLint)
Safer refactoring | Use experimental features sooner
Additional non-standard features | No type defs, annotations required
. | ES6 imports are statically analyzable
. | Test, Lint, Babel Compilation, Great Libs, IDE = safety

### Elm

1. Looks nothing like Javascript, transpiles down to Javascript. 
1. Clean syntax
1. Immutable data structures
1. Friendly errors
1. All errors are compile-time errors, can't get runtime errors
1. Interops w/ JS
1. Down side is EVERYBODY on team must learn a new language and functional paradigm.
1. HELL NO WE WONT GO

## Babel Setup

.babelrc | package.json
----------- | --------------
Not npm specific | One less file in your project
Easier to read since isolated | .

```json
{
    "name": "my-package",
    "version": "1.0.0",
    "babel": {
        // my babel config here
    }
}
```

## Transpile for your Environment

Preset | Approach
----------- | --------------
babel-preset-es2015-node | Version Detection
babel-preset-latest-minimal | Feature Detection

1. babel-preset-es2015-node is node-specific, it sniffs for your node version. only transpiles things that need to be transpiled.
1. babel-preset-latest-minimal is NOT node-specific

## Build Script JS Style

ES5 | Transpiled
--- | ----------
No waiting for transpile = faster | Enjoy the latest features
No transpiler dependency | Consistent coding style
. | Use the same linting rules everywhere
. | Can eventually remove transpiler as ES5/6 catches up

## Demo - Transpiling w/ Babel

