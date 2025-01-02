const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
};