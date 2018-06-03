# Automation

## The Plan

1. Review automation options
1. Quick npm scripts intro

## Automation options

1. Command line? (ugh, reinventing the wheel, that's WHY these other options were built!)
1. Grunt
1. Gulp
1. NPM

### Grunt

1. The "original" (first one built)
1. Configuration over code
1. File oriented - writes intermediary files between steps
1. Large plugin ecosystem
1. People have moved on to more modern options

### Gulp

1. In-memory streams - pipe tasks together rather than intermediary files
1. Fast
1. Code over configuration
1. In grunt you configure the tool, in gulp you code your tasks
1. Large plugin ecosystem

### NPM

1. most have moved on to THIS
1. declared in package.json
1. leverage your OS's command line
1. directly use npm packages
1. call separate node scripts if necessary
1. convention-based pre/post hooks (for running other scripts before, after yours as an example)
1. leverage world's largest package manager

## Why npm scripts

1. use tools directly
1. no need for separate plugins (such as w/ grunt and gulp) (eliminate dependence on plugin authors)
1. simpler debugging
1. better documentation
1. easy to learn!
1. simple
1. read more at [bit.ly/npmvsgulp](http://bit.ly/npmvsgulp) for a comparison

```json
{
  "name": "javascript-development-environment",
  "version": "1.0.0",
  "description": "JavaScript development environment Pluralsight course by Cory House",
  "scripts": {
    "start": "node buildScripts/srcServer.js""
  },
  "author": "Cory House",
  "license": "MIT",
  "dependencies": {
    "whatwg-fetch": "1.0.0"
  },
  ...
```

1. now if we wanted to output a message before we run the start script, we could build a startMessage.js file to push out some info.
1. we need to create the npm script to call this startMessage.js file PRIOR to the start
1. we can use a convention for "pre-" and "post-" script name to all it before or after... so for example

```json
{
  "name": "javascript-development-environment",
  "version": "1.0.0",
  "description": "JavaScript development environment Pluralsight course by Cory House",
  "scripts": {
    "prestart": "node buildScripts/startMessage.js",
    "start": "node buildScripts/srcServer.js""
  },
  "author": "Cory House",
  "license": "MIT",
  "dependencies": {
    "whatwg-fetch": "1.0.0"
  },
  ...
```

1. npm will call PRESTART prior to START when i call start

```javascript
var chalk = require('chalk');

console.log(chalk.green('Starting app in dev mode...'));
```

1. Now that we have this convention, let's run some other automated scripts
1. We add "security-scan": "nsp check" in order to call our security scan. Interestingly, "npm run security-scan" is longer than "nsp check", but the benefit is NSP no longer has to be installed globally.. it can be referenced fm within npm scripts via the node_modules\.bin\ directory
1. we'll use a package called npm runall to run scripts in parallel
1. "npm-run-all --parallel security-check open:src" (where we've renamed the start script to open:src

```json
{
  "name": "javascript-development-environment",
  "version": "1.0.0",
  "description": "JavaScript development environment Pluralsight course by Cory House",
  "scripts": {
    "prestart": "node buildScripts/startMessage.js",
    "start": "npm-run-all --parallel security-check open:src",
    "open:src": "node buildScripts/srcServer.js",
    "security-check": "nsp check",
    "share": "lt --port 3000"
  },
```

1. I then added localtunnel to its own script...

```json
{
  "name": "javascript-development-environment",
  "version": "1.0.0",
  "description": "JavaScript development environment Pluralsight course by Cory House",
  "scripts": {
    "prestart": "node buildScripts/startMessage.js",
    "start": "npm-run-all --parallel security-check open:src",
    "open:src": "node buildScripts/srcServer.js",
    "security-check": "nsp check",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel localtunnel open:src"
  },
```