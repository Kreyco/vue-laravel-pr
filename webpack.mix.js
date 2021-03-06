const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app-client.js', 'public/js')
    .js('resources/assets/js/app-server.js', 'public/js')
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.js'
        }
    }
});
