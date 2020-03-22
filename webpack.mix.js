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

mix.js('resources/js/app.js', 'public/js');

mix.postCss('resources/css/filemanager.css', 'packages/Socieboy/FileManager/resources/css', [
    require('tailwindcss'),
])

mix.copy('public/js/app.js', 'packages/Socieboy/FileManager/resources/assets/js/filemanager.js')
