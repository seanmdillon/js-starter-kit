# Production Build

## The Plan

1. Minification
1. Sourcemaps
1. Dynamic HTML
1. Cache busting
1. Bundle splitting
1. Error logging

---

## MINIFICATION

### Speeding page loads and saving bandwidth

### How does minification work

1. Shortens variable and function names
1. Removes comments
1. Removes whitespace and new lines
1. Dead code elimination / Tree-shaking
1. Debug via sourcemap

Removes all the things humans care about and leaves all the things needed by the computer

### Setup minification

We're going to take a copy of our ```webpack.config.dev.js``` and name it ```webpack.config.prod.js```. Then, we'll tweak some things for production.

We'll change

1. the export default devtool fm ```inline-source-map``` to ```source-map``` since that's what's recommended for production.
1. change output path fm ```src``` to ```output:path:path.resolve(__direname, 'dist')```
1. add a plugin to the array of plugins. add uglify.js

```json
plugins: [
  // Minify JS
  new webpack.optimize.UglifyJSPlugin()
]
```

1. then add the import at the top ```import webpack from 'webpack';```
1. then add dedupe to eliminate any duplicate packages when we bundle into plugins:

```json
// Eliminiate duplicate package when generating bundle
new webpack.optimize.DedupePlugin(),
```

1. then need to create buildScripts/build.js

```javascript
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generate the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});
```

1. Then we need to make a ```distServer.js``` (as a copy to ```srcServer.js```) and make appropriate adjustments for the distribution server
- remove webpack stuff
- remove call to compiler
- remove calls to web pack middleware
- add support to express for serving static files ```app.use(express.static('dist'));```
- add support for compression (import w/ ```import compression from 'compression';```) and ```app.use(compression());``` MAKE SURE YOU ADD THE () to call compression!
1. Keep in mind, this is for running this app *in production* locally. If we put this on a web server, we need to decide how we configure the production build on that app server.
1. Then need to update baseUrl.js and build.js
1. Then need to run the npm scripts to automate the production build process.

```javascript
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js"`
```

---

## HTML Generation

### Why manipulate HTML for production

1. Reference bundles automatically
1. Handle dynamic bundle names
1. Inject production only resources (as in w/ error logging for example)
1. Minify

---

## Referencing Bundled Assets in HTML

### Hard code Your HTML

```html
<html>
<head>
  M<title>Blah</title>
  </head>
  <body>
    <script src="bundle.js"></script>
</body>
</html>
```

### Another way to reference the bundled HTML is using Node.js. Manipulate via Node

### Another way is through html-webpack-plugin

## Demo

### Handling Dynamic HTML (using the html-webpack-plugin)

First, let's update out production webpack config script ```./wepack.config.prod.js``` to use the webpack plugin.

1. Add
1. Add the plugin in the plugins section.

```javascript
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
```

1. Get rid of reference to bundle.js in ```<scripts/>``` tag in index.html, because webpack plugin will add in any necessary script tags for us.
1. Make the same change to the development webpack config as well in the ```plugins[]``` section.
1. Test it.. npm run build -s
1. Once it's running properly, we're going to add some additional options to our webpackplugin configuration:

```javascript
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
```

1. Then, rerun the app (npm run build -s) and check the view source on the html, you'll see the minification. Also could check the "Inspect" tools on network tab to see the components of the page that are coming

---

## Now, Bundle Splitting

### Why Bundle Split

1. Speed initial page load
1. Avoid re-downloading all libraries

### Bundle splitting w/ Webpack

1. So far we've set up webpack to bundle everything into a single bundle.
1. Sometimes, people bundle per page.
1. Another approach to use is to bundle things separately by components, that way if our user is getting components from another app (mine or others), they wont have to download all of those components again and again b/c they'll already be there.
1. That means defining multiple entry points into ```webpack.config.prod.js```.

```javascript
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
```

...becomes...

```javascript
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  ],
```

Of course, the src\vendor file is not created yet, need to go make that in the ```\src``` folder.

```javascript
/* This file contains references to the vendor libraries we're using in this project. This is used by webpack in the production build only*. A separate bundle for vendor code isu useful since it's unlikely to change as often as the application's code. So all the libraries we reference here will be writte to vendor.js so they can be cached until one of them change. So basically, this avoids customers having to download a huge JS file anytime a line of code changes. They only have to download vendor.js when a vendor library changes which should be less frequent. Any files that aren't referenced here will be bundle into main.js for production build.
*/

/* eslint-disable no-unused-vars */

/* only have this one polyfill call, but in a real app we'd likely call angular, bootstrap, etc. HERE in this file */
import fetch from 'whatwg-fetch';
```

### not done w/ code splitting

1. Now, we need to add a plugin to the webpack.config.prod.js to have a separate chunk for vendor plugin bundles. (webpack calls this chunks, we call this bundles.. same-same).
1. MAKE SURE the name here is the same as the webpack.config.prod.js entry[] array

```javascript
    // Use CommonsChunkPlugin to create a separate bundle of vendor
    // libraries to that they're cached separatelyu.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

```

1. Also need to update our output filename from bundle.js to [name].js. This will ensure that the entry array aligns to the bundle output.

```javascript
  entry: [
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
```

---

## Cache Busting

1. To save bandwidth and unnecessary HTTPD requests, you can bundle for up to a year.
1. You can:
- Save HTTP Requests. You can tell a person's browser to not download your files for up to one year.
- When you're ready to update, you can *Force request for a new bundle* by changing the filename.
1. Here's how we plan to bust the cache
- Hash bundle filename. This ensures that if we rebuild the app and there's no change, it wont change the hash.
- Generate HTML dynamically. Inject the proper filename as part of the build process. We'll do this w/ the html-webpack plugin

### Setup Cache Busting

1. Configure your webserver to send far future headers.
1. You need to find the header to send that the user's browser shouldn't pull files for a year later.
1. You just need to create the hash and assign it to the filename
1. To do this, we'll use webpack MD5 hash
1. To do this, we'll make three slight changes to our webpack config. ```webpack.config.prod.js```
- Add the necessary import: ```import WebpackMd5Hash from 'webpack-md5-hash';
- Add the plugin:

```javascript
  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),
```

- Update the filename to use the hash result IN the filename:

```javascript
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
```

1. Now we're going to configure webpack to use a similar technique for cache busting and generate a css file that we can cache as well.
- Import 'import ExtractTextPlugin from 'extract-text-webpack-plugin';
- Then add it to "plugins":

```javascript
plugins: [
  // Generate an external css file with a hash in the filename (principally for caching, etc.)
  new ExtractTextPlugin('[name].[contenthash].css'),
  ...
```
- update the loader in the module section:

```javascript
module: {
  loaders: [
    ...
    {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourcemap')}
  ]
}
```
- it's important to note we don't need the style loader anymore so we replace it.