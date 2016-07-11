var express = require("express"),
    app = express(),
    compression = require("compression"),
    helmet = require("helmet");

// change to 'production' before deployment
// app.set("env", "development");

app.set("port", (process.env.PORT || 5000));
app.use(compression()); // gzip
app.use(helmet()); // security

app.use(express.static(__dirname + "/"));

app.get("/*", function(req, res) {
  console.log(req.ip + ":", req.hostname + req.originalUrl);
  res.sendFile("index.html", { root: __dirname });
});

app.listen(app.get("port"), function() {
  console.log("App is running on port", app.get("port"));
});
