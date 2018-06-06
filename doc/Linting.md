# Linting

## Why Linting

Enforce Consistency | Avoid Mistakes
------------------- | ---------------
Curly brace position | Extra parenthesis
confirm / alert | Overwriting function
Trailing commas | Assignment in conditional
Globals | Missing default case in switch
allow/disallow eval | debugger/console.log

This list just scratches the surface on reasons WHY to use a Linter.

## Linting Tools

1. JSLint. extremely opinionated
1. JSHint. Improved version of JSLint
1. ESLint. The standard now.
- There are cases where some precompiled languages won't support ESLint

## Configuration approaches for ESLint

### Core Decisions to make

1. Config format
1. Which built in rules
1. Warnings or errors
1. Which plugins?
1. Use preset instead?

### Decision #1: Where put your configuration

1. Five configuration files you can use, in priority order:
- .eslintrc.js
- .eslintrc.yaml
- .eslintrc.yml
- .eslintrc.json
- .eslintrc
- .package.json

Dedicated config file | package.json
--------------------- | ------------
Not tied to npm | One less file

#### Configuring ESLint via package.json

```json
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "example/custom": true
        }
    }
}
```

### Decision #2: Which rules should we enable

1. Suggest the team meet and go through which of the ESLint rules to enable
1. Will be painful but then complete

### Decision #3: Warnings vs Errors

Warning | Error
------- | -----
Can continue development | Breaks the build
Can be ignored | Cannot be ignored
Team must agree: Fix warnings | Team is forced to comply

1. Warnings are good for minor style-istic issues
1. Errors are good for things that could lead to bugs
1. Choose carefully based on context

### Decision #4: Which plugins

1. eslint-plugin-react
1. other popular plugins at github.com/dustinspecker/awesome-eslint
1. for node, for example, and angular, etc.

### Decision #5: Use a preset

1. Multiple popular ways to declare ESLint rules!
- Start from scratch
- ESLint comes w/ a preset that has a lot of defaults that could save you a lot of time
- AUTH prefers to use their baseline as a starting point and then tweak as needed
- There are presets you can use such as airbnb, standardJS, etc. Typically strongly opinionated. low friction but constraining

## A couple of issues that might trip you up

1. ESLint doesn't watch files.

eslint-loader | eslint-watch
------------- | ------------
re-lints all files upon save. | npm package - ESLint wrapper that adds file watch
. | Not tied to webpack
. | Better warning/error formatting
. | Displays clean message
. | Easily lint tests and build scripts too

1. ESLint doesn't support many experimental JavaScript features

Run ESLint directly | Babel-eslint
------------------- | ------------
Supports ES6 and ES7 natively | Also lints stage 0 - 4 features
Also supports object spread | .

## Why Lint via an Automated Build Process

1. Editors offer Linting inline, so why during build?!
1. One place to check, via command line! (not only for linting, but also compile time errors or testing errors)
1. Universal configuration
1. Part of continuous integration. Build should be broken THERE too, not just in IDE

## Sample .eslintrc.json

```json
{
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "node": true,
      "mocha": true
    },
    "rules": {
        "no-console": 1
    }
  }
```