# Canon Shop [![Build Status](https://travis-ci.org/nhantdn/canonshop.svg)](https://travis-ci.org/nhantdn/canonshop)
An Example AngularJS application

## Technologies used

### Package manager
All packages in this project are managed using [Node.js Package Manager](https://www.npmjs.com).

#### Libraries
Package | version
--- | ---
[AngularJS](https://www.npmjs.com/package/angular) | 1.5.7
[ngRoute](https://www.npmjs.com/package/angular-route) | 1.5.7
[ngSanitize](https://www.npmjs.com/package/angular-sanitize) | 1.5.7
[Bootstrap for Sass](https://www.npmjs.com/package/bootstrap-sass) | 3.3.6
[jQuery](https://www.npmjs.com/package/jquery) | 2.2.4
[slick](https://www.npmjs.com/package/slick-carousel) | 1.6.0

#### Development Tools
Package | version
--- | ---
[gulp.js](https://www.npmjs.com/package/gulp) | 3.9.1
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) | 3.1.0
[gulp-concat](https://www.npmjs.com/package/gulp-concat) | 2.6.0
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) | 3.0.1
[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) | 1.2.4
[gulp-sass](https://www.npmjs.com/package/gulp-sass) | 2.3.2
[gulp-size](https://www.npmjs.com/package/gulp-size) | 2.1.0
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) | 1.5.4
[Browsersync](https://www.npmjs.com/package/browser-sync) | 2.13.0
[Browserify](https://www.npmjs.com/package/browserify) | 13.0.1
[del](https://www.npmjs.com/package/del) | 2.2.1
[vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer) | 1.0.0
[vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream) | 1.1.0

#### Production Server
Package | version
--- | ---
[Express](https://www.npmjs.com/package/express) | 4.14.0
[Helmet](https://www.npmjs.com/package/helmet) | 2.1.1
[Compression](https://www.npmjs.com/package/compression) | 1.6.2

## Commands
Gulp task | Description
--- | ---
`styles`| Build stylesheets
`fonts` | Copy fonts to working directory
`scripts-lib`| Build libraries
`scripts-app`| Build Angular app code
`lint` | Analyse JavaScript source code
`clean`| Clean built folders and files
`watch` | Watch for file changes and rebuild
`serve`| Start a webserver (port 9000), same as `watch` but has auto-reload
`serve:prod` | Browse static site (no reload, port 9100)
`build`| Build all

Node.js command | Description
--- | ---
`npm start`<br>`node server.js`| Start Node.js server (port 5000)

[![Constructocat](https://octodex.github.com/images/constructocat2.jpg)](https://octodex.github.com)
