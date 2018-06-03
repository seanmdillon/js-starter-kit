# Package Management

## Review JavaScript Package Managers

1. Bower. Bower's become mostly irrelevant as of late
1. npm. This has become the defacto option for JS package managers
1. jspm. JavaScript Package Manager. bundles code, has other options. interesting option worth considering, but npm w/ a bundler is the most common/popular
1. Jam. Another option, not > NPM
1. Volo. Another option, not > NPM

## Setup NPM

1. Install Node and setup NPM
1. [http://nodejs.org/en/](https://nodejs.org/en/)
1. Auth prefs 6.x version but you can use 4.x version
1. You can run nvm on mac or nvm on windows to run multiple versions of node.
1. When you install NPM, nvm comes bundled
1. package.json is NPM's jam
1. bit.ly/jsdevpackagejson is the package.json file for this course

## Setup Security Scanning

1. Once we setup package.json and install packages, we'll want to scan.
1. retire.js is a great way to check
1. Node Security Platform is a great site to help w/ Continuous Security monitoring for your node apps

```bash
$ npm install --global nsp
$ cp your-fantastic-app
$ nsp check
(+) No known vulnerabilities found
$
```

1. We'll run it by hand but you probably want to run it as a part of your start script
1. You can run manually, but it's easy to forget to do so
1. npm install, may have issues later after install
1. Run during production build, or in pull request, but expensive to change b/c you've already used the package
1. npm start - slows start slightly but a good place to do the check

```bash
$ npm install -g nsp
dir/npm/nsp -> dir/npm/nsp/bin/nsp
+ nsp@3.2.1
add 115 package in 7.604s

$ nsp check
(+) No known vulnerabilities found
$
```

1. We COULD install this locally vs locally by automating the check into our package.json, but for now we used -g for global install