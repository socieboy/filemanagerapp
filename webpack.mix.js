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

mix.js('resources/js/app.js', 'vendor/filemanager/js/filemanager.js');

mix.postCss('resources/css/app.css', 'vendor/filemanager/css/filemanager.css', [
    require('tailwindcss'),
])

mix.copy('public/vendor/filemanager/js/filemanager.js', 'packages/Socieboy/FileManager/resources/assets/js')
mix.copy('public/vendor/filemanager/css/filemanager.css', 'packages/Socieboy/FileManager/resources/assets/css')
