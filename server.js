const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const port = process.env.PORT || 80;
app.listen(port);
