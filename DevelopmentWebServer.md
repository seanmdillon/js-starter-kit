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

## Sharing work in progress

1. Why not AWS, Azure?
1. There are some options that are ZERO cost, configuration, etc.

### Options for sharing work in progress

1. localtunnel
1. ngrok
1. Surge
1. now

#### localtunnel

1. easily share work on your local machine
1. easiest option thus far
1. punches hole in your fw
1. install npm install localtunnel -g
1. start up all
1. lt --port 3000

#### ngrok

1. another popular option
1. punches hole in your fw
1. secure tunnel to your machine
1. sign up
1. install ngrok
1. install authtoken
1. start your app
1. ./ngrok http 80
1. one advantage is you can setup security so not EVERYBODY can access your app

#### now

1. quickly deploy node.js to the cloud
1. each time you deploy to NOW, you get a new unique url
1. npm install -g now
1. create start script
1. just type "now" and it does its thing
1. a little more perm solution than ngrok or localtunnel
1. if there's a node-based webserver, this is a strong option

#### surge

1. quickly host (only) static files to public url
1. NOT GOOD for dynamic stuff
1. npm install - surge
1. type "surge" in proj directory

### Ultimately

1. localtunnel - easiest setup, ultra versatile
1. ngrok - easy setup, secure
1. now - no firewall hole, hosting persists
1. surge - no firewall hole, hosting persists, but only static files

## Sample this w/ localtunnel

1. install localtunnel w/ npm
1. start node app
1. start lt
1. one hint... you can start lt w/ a specified subdomain : lt --port 3000 --subdomain sketch
1. your url is: [https://sketch.localtunnel.me](https://sketch.localtunnel.me)
1. if you're using a wall of browsers for testing, using localtunnel w/ browsersync is a compelling option