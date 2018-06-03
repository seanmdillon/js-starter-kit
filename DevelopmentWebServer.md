# Development Webservers

1. Review Development webserver options
1. Configure a Dev Webserver
1. Services for sharing your work

## Webservers

### http-server

1. Ultra-simple
1. Single command serves current directory

### live-server

1. Lightweight
1. Support live-reloading

### Express

1. Comprehensive
1. Highly configurable
1. Production grade
1. Can run it everywhere
1. Good for building APIs in Node
1. Competitors - KOA and HAPI (also both strong for Node)

### budo

1. Integrates w/ browserify
1. Includes hot reloading

### webpack dev server

1. built in to webpack
1. serves fm memory
1. includes hot reloading

### browsersync

1. free webserver
1. dedicated IP for sharing work on LAN
1. all interactions remain in sync (all devices)
1. great for cross-device testing!
1. integrates w/ webpack, express

## BIG POINT, THESE ARE NOT FOR PRODUCTION, THEY'RE FOR DEVELOPMENT

## Will use Express for dev

## Configure Express

1. like to keep build related tools in a single folder
1. /buildScripts
1. srcServer.js
