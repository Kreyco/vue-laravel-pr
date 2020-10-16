/**
 * As our first step, we'll pull in the user's webpack.mix.js
 * file. Based on what the user requests in that file,
 * a generic config object will be constructed for us.
 */
// let mix = require('../src/index');
let mix = require('laravel-mix/src/index');

let ComponentFactory = require('laravel-mix/src/components/ComponentFactory');

new ComponentFactory().installAll();

require(Mix.paths.mix());

/**
 * Just in case the user needs to hook into this point
 * in the build process, we'll make an announcement.
 */

Mix.dispatch('init', Mix);

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.plugins.push(
    new HtmlWebpackPlugin({
        title: 'PRODUCTION prerender-spa-plugin',
        template: Mix.Paths.root('resources/views/index.html'),
        inject: false,
        filename: path.resolve(__dirname, 'dist/index.html')
    })
);

// var PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports.plugins.push(
    new PrerenderSpaPlugin({
        // Mix.output().path,
        // [ '/' ]
        staticDir: path.join(__dirname, 'static'),
        routes: ['/']
    })
);

/**
 * Now that we know which build tasks are required by the
 * user, we can dynamically create a configuration object
 * for Webpack. And that's all there is to it. Simple!
 */

let WebpackConfig = require('../src/builder/WebpackConfig');

module.exports = new WebpackConfig().build();

