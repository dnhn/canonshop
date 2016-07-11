(function() {
  "use strict";
  var commonFactory = function() {
    function getSiteData() {
      return {
        "nav": {
          "home": {
            "url": "/",
            "title": "Home"
          },
          "products": {
            "url": "/products",
            "title": "Products",
            "dropdown": [
              { "url": "/camera", "title": "Cameras" },
              { "url": "/lens", "title": "Lenses" },
              { "url": "/flash", "title": "Flashes" }
            ],
            "dropdown2": [
              { "url": "/accessories", "title": "Accessories" },
              { "url": "/bags", "title": "Bags" }
            ]
          },
          "contact": {
            "url": "/contact",
            "title": "Contact"
          }
        },
        "footer": {
          "address": "<strong>Canon Shop</strong><br>68<sup>th</sup> floor, Bitexco Financial Tower<br>District 1, Ho Chi Minh City, 700000<br><abbr title='Phone'>P:</abbr> (+84-8) 3-840-1687<br><abbr title='Mobile'>M:</abbr> (+84) 989-366-421",
          "copy": "&copy; Copyright Canon Shop 2016.<br>This website is not related to Canon Inc.<br>",
          "made": "Made with <span class='glyphicon glyphicon-heart'></span> by <a href='http://code.nhan.me' class='navbar-link' target='_blank'>Nhan To-Doan</a>"
        }
      };
    }

    return {
      getSiteData: getSiteData
    };
  };

  module.exports = {
    name: "commonFactory",
    type: "factory",
    func: commonFactory
  };

})();
