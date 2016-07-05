(function() {
  "use strict";

  var appConfig = require("./app.config");

  require("./common/common.module");
  require("./home/home.module");
  require("./products/products.module");
  require("./contact/contact.module");

  var appRequires = [
    "ngRoute",
    "ngSanitize",
    "common",
    "home",
    "products",
    "contact"
  ];

  var appModule = angular.module("canonshopApp", appRequires);
  appModule.config(appConfig);

  module.exports = appModule;

})();
