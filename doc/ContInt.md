# Continuous Integration

## Why CI

1. Forgot to commit new file
1. Forgot to update package.json
1. Commit doesn't run cross-platform
1. Node version conflicts
1. Bad merge
1. Didn't run tests before commiting
1. CI server catches mistakes quickly

## What Does a CI Server Do

1. Run Automated build
1. Run your tests
1. Check code coverage
1. Automate deployment

## CI Engines

1. Travis CI. runs on linux
1. Appveyor. runs on windows
1. Jenkins. my preferred option
1. CircleCI
1. Semaphore
1. SnapCI

## Demo on Travis CI

Needed to sync my GitHub account w/ TravisCI website [http://travis-ci.org](http://travis-ci.org). It asked for me to login to GitHub and sync account.

Note, if you want to do CI on private repo's you need a commercial Travis account ($$$).

Once I was synchronized w/ GitHub, I could specify repo's I wanted to configure CI with. This was fairly straightforward, I simply toggled my js-starter-kit repo (after making it public ugh). I needed to add a Travis config to my project. This was in a file called ```.travis.yml``` in the root dir of my repo (when I put it in .src, it didn't get picked up). This file looked like so:

```yaml
language: node_js
node_js:
  - "6"
```

Once I added that file, I updated my index.html file to force a failure in my single unit test. I updated "Hello, Werld!" to "Hello, Werld?" which would break my test that checked for "Hello, Werld!" in the first H1 of the file.

Add files to git, commit the changes, push the changes, refresh on TravisCI and there's the build executing! Very cool. After 90 secs or so, the build failed and the messages were S/E.

I then went and fixed the error, ran the tests locally on my machine, verified success, added and commited to github, pushed changes, watched the test run in TravisCI, and voila, build passes. All good!

## Demo on AppVeyor

After Travis was configured correctly, then went to Appveyor to get build going.

Setup new account on Appveyor, also had to integrate w/ GitHub so give it creds and authorize.

Once done, go to js-starter-kit repo and add it to Appveyor as project.

It tried to run instantly and failed w/ the message:

*The build phase is set to "MSBuild" mode (default), but no Visual Studio project or solution files were found in the root directory. If you are not building Visual Studio project switch build node to "Script" and provide your custom build comand.*

So this indicated I needed an AppVeyor config. So we add ```appveyor.yml``` to the root dir of the project.

```yaml
# Test against this version of Node.js
environment:
  matrix:
  # node.js
  - nodejs_version: "6"

# Install scripts. (runs after repo cloning)
install:
  # Get the latest stable version of Node.js or io.js
  - ps: Install-Product node $env:nodejs_version
  # install modules
  - npm install

# Post-install test scripts.
test_scrpt:
  # Output useful info for debugging.
  - node --version
  - npm --version

# Don't actually build.
build: off
```