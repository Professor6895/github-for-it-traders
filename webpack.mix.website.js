const mix = require("laravel-mix");
require('laravel-mix-purgecss');


mix.js("resources/js/app.js", "public/website/js").sass(
  "resources/sass/app.scss",
  "public/website/css"
).purgeCss();
if (mix.inProduction()) {
  mix.version();
}
