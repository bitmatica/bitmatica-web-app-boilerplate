// -----------------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------------

const path = require("path");
const gitRev = require("git-rev-sync");
const qs = require("webpack-query-string");
const merge = require("webpack-merge");

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtendedDefinePlugin = require("extended-define-webpack-plugin");
const autoprefixer = require("autoprefixer");


// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------

const task = process.argv.includes("--task=build") ? "build" : "watch";
const env = process.env.NODE_ENV || (task === "build" ? "production" : "development");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8888;
const version = require("./package.json").version;
const commit = gitRev.long();


// -----------------------------------------------------------------------------
// Paths
// -----------------------------------------------------------------------------

const paths = {
  root:           __dirname,
  nodeModules:    path.resolve(__dirname, "node_modules"),
  build:          path.resolve(__dirname, "build"),
  app:            path.resolve(__dirname, "app"),
  images:         path.resolve(__dirname, "app/images"),
  scripts:        path.resolve(__dirname, "app/scripts"),
  styles:         path.resolve(__dirname, "app/styles"),
  stylesLocal: [
    path.resolve(__dirname, "app/styles/shared"),
    path.resolve(__dirname, "app/styles/components"),
  ],
};


// -----------------------------------------------------------------------------
// Task: Watch
// Start development server, watch sources, and hot reload on change.
// -----------------------------------------------------------------------------

const watchConfig = {
  debug: true,
  devtool: "eval-source-map",
  
  devServer: {
    host,
    port,
    contentBase: paths.build,
    historyApiFallback: true,
  },
};


// -----------------------------------------------------------------------------
// Task: Build
// Build project into optimized format suitable for production.
// -----------------------------------------------------------------------------

const buildConfig = {
  debug: false,
  devtool: "source-map",
  
  plugins: [
    // Clean build directory before performing new build.
    new CleanWebpackPlugin([paths.build]),
    
    // Minify Javascript files.
    // Hide warnings. They aren't important and our libraries raise a lot.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    
   // Assign the module and chunk ids by occurrence count.
   // This make ids predictable and reduces total file size.
    new webpack.optimize.OccurrenceOrderPlugin(true),
    
    // Remove repeated input files from output.
    new webpack.optimize.DedupePlugin(),
  ],
};


// -----------------------------------------------------------------------------
// Common Configuration
// -----------------------------------------------------------------------------

const commonConfig = {
  entry: {
    browser: path.resolve(paths.scripts, "browser.js"),
  },
  
  output: {
    path: paths.build,
    filename: "[name].js",
  },
  
  resolve: {
    root: paths.app,
  },
  
  context: paths.app,
  
  module: {
    loaders: [
      // Scripts Loader
      // - babel: Transform JSX and ES6+ to plain Javascript.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel?cacheDirectory",
        ],
      },
      
      // Local Styles (CSS Modules) Loader
      // - sass: Transform Sass to plain CSS.
      // - postcss: Apply PostCSS transformations like Autoprefixer.
      // - css: Resolve @import and url(...) statements.
      //        Generate CSS module with locally scoped selectors.
      // - ExtractTextPlugin: Join all CSS imports into one output file.
      {
        test: /\.scss$/,
        include: paths.stylesLocal,
        loader: ExtractTextPlugin.extract("style", [
          "css?-autoprefixer&" + qs({
            sourceMap: true,
            modules: true,
            importLoaders: 2,
            localIdentName: "[path][name]__[local]__[hash:base64:5]",
          }),
          "postcss",
          "sass?" + qs({sourceMap: true}),
        ]),
      },
      
      // Global Styles Loader
      // - sass: Transform Sass to plain CSS.
      // - postcss: Apply PostCSS transformations like Autoprefixer.
      // - css: Resolve @import and url(...) statements.
      // - ExtractTextPlugin: Join all CSS imports into one output file.
      {
        test: /\.scss$/,
        exclude: paths.stylesLocal,
        loader: ExtractTextPlugin.extract("style", [
          "css?-autoprefixer&" + qs({sourceMap: true}),
          "postcss",
          "sass?" + qs({sourceMap: true}),
        ]),
      },
      
      // Image Loader
      // - image-webpack: Minify images.
      // - file: Copy images to build /images directory.
      {
        test: /\.(jpe?g|png|gif|svg|ico|webp)$/,
        loaders: [
          "file?" + qs({name: "/images/[hash].[ext]"}),
          "image-webpack?" + qs({
            bypassOnDebug: true,
            progressive: true,
          }),
        ],
      },
      
      // JSON Loader
      // - json: Read JSON into Javascript object.
      {
        test: /\.json$/,
        loader: "json",
      },
    ],
  },
  
  plugins: [
    // Copy static files into build directory.
    new CopyWebpackPlugin([
      {from: "static"},
    ]),
    
    // Provide information about the build context to the app by inserting a
    // globally-accessible `CONTEXT` object into the built Javascript files.
    new ExtendedDefinePlugin({
      CONTEXT: {
        env,
        version,
        commit,
      },
    }),
    
    // Join all CSS imports into one output CSS file.
    // During browser development, this plugin is disabled to allow hot style
    // reloading. Each style import is then inserted into its own <style> tag.
    new ExtractTextPlugin("main.css", {
      allChunks: true,
      disable: (task === "watch"),
    }),
  ],
  
  sassLoader: {
    includePaths: [paths.app],
  },

  postcss: () => [
    // Disable Flexbox 2009 syntax ("display: -webkit-box;") because it breaks
    // Safari 8 (and maybe earlier).
    autoprefixer({flexbox: "no-2009"}),
  ],
};


// -----------------------------------------------------------------------------
// Assemble Config
// -----------------------------------------------------------------------------

const taskConfig = (task === "build") ? buildConfig : watchConfig;
const config = merge(commonConfig, taskConfig);

module.exports = config;
