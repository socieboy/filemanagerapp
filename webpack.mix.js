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

mix.js('packages/Socieboy/FileManager/resources/js/app.js', 'vendor/filemanager/filemanager.js').version();

mix.postCss('packages/Socieboy/FileManager/resources/css/app.css', 'vendor/filemanager/filemanager.css', [
    require('tailwindcss'),
]);

mix.copyDirectory('public/vendor/filemanager/', 'packages/Socieboy/FileManager/public');
mix.copy('public/mix-manifest.json', 'packages/Socieboy/FileManager/public');
