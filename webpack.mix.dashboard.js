// const mix = require('laravel-mix');

// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for the application as well as bundling up all the JS files.
//  |
//  */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

const mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");
require("dotenv").config();

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
mix.webpackConfig(webpack => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                "window.Quill": "quill"
            })
        ]
    };
});
mix.sass("packages/core/resources/sass/app.scss", "public/dashboard/css")
    .options({
        postCss: [require("autoprefixer"), require("postcss-rtl")]
    })
    .postCss(
        "packages/core/resources/assets/css/main.css",
        "public/dashboard/css",
        [tailwindcss("tailwind.js"), require("postcss-rtl")()]
    )
    .copy(
        "node_modules/vuesax/dist/vuesax.css",
        "public/dashboard/css/vuesax.css"
    ) // Vuesax framework css
    .copy(
        "packages/core/resources/assets/css/iconfont.css",
        "public/dashboard/css/iconfont.css"
    ) // Feather Icon Font css
    .copyDirectory(
        "packages/core/resources/assets/fonts",
        "public/dashboard/fonts"
    ) // Feather Icon fonts
    .copyDirectory(
        "node_modules/material-icons/iconfont",
        "public/dashboard/css/material-icons"
    ) // Material Icon fonts
    .copyDirectory(
        "node_modules/material-icons/iconfont/material-icons.css",
        "public/dashboard/css/material-icons/material-icons.css"
    ) // Material Icon fonts css
    .copy(
        "node_modules/prismjs/themes/prism-tomorrow.css",
        "public/dashboard/css/prism-tomorrow.css"
    ) // Prism Tomorrow theme css
    .copyDirectory(
        "packages/core/resources/assets/images",
        "public/dashboard/images"
    )
    .js("packages/core/resources/js/app.js", "public/dashboard/js")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "packages/core/resources/js/src"),
                "@assets": path.resolve(
                    __dirname,
                    "packages/core/resources/assets"
                ),
                "@sass": path.resolve(__dirname, "packages/core/resources/sass")
            }
        }
    }); // Copy all images from resources to public folder

// Change below options according to your requirement
if (mix.inProduction()) {
    mix.version();
    mix.webpackConfig({
        output: {
            publicPath: "/",
            chunkFilename: "dashboard/js/chunks/[name].[chunkhash].js"
        }
    });
    mix.setResourceRoot("/");
} else {
    mix.webpackConfig({
        output: {
            chunkFilename: "dashboard/js/chunks/[name].js"
        }
    });
}
