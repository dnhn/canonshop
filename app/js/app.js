(function() {
  "use strict";

  var appConfig = require("./app.config");

  require("./home/home.module");
  require("./products/products.module");
  require("./contact/contact.module");

  var appRequires = [
    "ngRoute",
    "home",
    "products",
    "contact"
  ];

  var appModule = angular.module("canonshopApp", appRequires);
  appModule.config(appConfig);

  module.exports = appModule;

})();
