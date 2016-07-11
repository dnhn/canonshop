/* eslint-disable */

"use strict";

var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    browserify = require("browserify"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    del = require("del"),
    buffer = require("vinyl-buffer"),
    stream = require("vinyl-source-stream");

var NPM = "node_modules/",
    sassOptions = {
      outputStyle: "compressed"
    },
    autoPrefixer = ["last 3 versions", "IE >= 9"];

gulp.task("styles", function() {
  return gulp.src("app/css/main.scss")
    .pipe($.sass(sassOptions).on("error", $.sass.logError))
    .pipe($.autoprefixer({ browsers: autoPrefixer }))
    .pipe($.size({
      title: "css",
      gzip: false,
      showFiles: true,
      showTotal: false
    }))
    .pipe(gulp.dest("styles"))
    .pipe(reload({ stream: true }));
});

gulp.task("fonts", function() {
  gulp.src(NPM + "bootstrap-sass/assets/fonts/**/*.*")
    .pipe(gulp.dest("fonts"));
});

gulp.task("scripts-lib", function() {
  var src = [
    NPM + "jquery/dist/jquery.min.js",
    NPM + "angular/angular.min.js",
    NPM + "angular-route/angular-route.min.js",
    NPM + "angular-sanitize/angular-sanitize.min.js",
    NPM + "bootstrap-sass/assets/javascripts/bootstrap.min.js",
    NPM + "slick-carousel/slick/slick.min.js"
  ];
  gulp.src(src)
    .pipe($.concat("vendor.js"))
    .pipe($.size({
      title: "js",
      gzip: false,
      showFiles: true,
      showTotal: false
    }))
    .pipe(gulp.dest("scripts"))/*
    .pipe(reload({ stream: true }))*/;
});

gulp.task("scripts-app", function() {
  return browserify("app/js/app.js")
    .bundle()
    .pipe(stream("main.js"))
    .pipe(buffer())
    // .pipe($.uglify({ mangle: false }))
    .pipe($.size({
      title: "ng",
      gzip: false,
      showFiles: true,
      showTotal: false
    }))
    .pipe(gulp.dest("scripts"))
    .pipe(reload({ stream: true }));
});

gulp.task("lint", function() {
  return gulp.src("app/js/**/*.js")
    .pipe($.eslint())
    .pipe($.eslint.result(function(result) {
      if(result.errorCount > 0) {
        console.log(result.filePath);
        console.log("Errors:", result.errorCount, "Warnings:", result.warningCount);
        console.log("Results:", result.messages, "\n");
      }
    }))
    .pipe($.eslint.results(function(results) {
      console.log("Total files:", results.length);
      console.log("Error:", results.errorCount,
                  "Warning:", results.warningCount);
    }))
    .pipe($.eslint.failAfterError());
});

gulp.task("clean", function() {
  del(["styles", "fonts", "scripts"], { dryRun: false }) // dryRun for debug only, does not perform deletion
    .then(function(paths) {
      console.log("\nFiles deleted:\n");
      console.log(paths.join("\n"));
    });
});

gulp.task("serve", ["styles", "fonts", "scripts-lib", "scripts-app"], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: { baseDir: ["./"] }
  });

  gulp.watch([
    "*.html",
    "app/**/*.html",
    "images/**/*"
  ]).on("change", reload);

  gulp.watch("app/**/*.scss", ["styles"]);
  gulp.watch("app/**/*.js", ["scripts-app"]);
});

gulp.task("serve:prod", function() {
  browserSync({
    notify: false,
    port: 9100,
    server: { baseDir: ["./"] }
  });
});

gulp.task("build", ["lint"], function() {
  del(["styles", "fonts", "scripts"], { dryRun: false }) // dryRun for debug only, does not perform deletion
    .then(function(paths) {
      console.log("\nFiles deleted:\n");
      console.log(paths.join("\n"), "\n");
      gulp.start("styles", "fonts", "scripts-lib", "scripts-app");
    });
});

gulp.task("default", function() {
  gulp.start("build");
});

/* eslint-enable */
