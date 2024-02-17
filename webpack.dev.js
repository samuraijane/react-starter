const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js", // [1]
    path: path.resolve("./build/dev") // [2]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // [3]
      publicPath: "build/dev", // [4]
      template: path.join(`${__dirname}/public/index.html`) // [5]
    })
  ]
});

/*
NOTES
  [1] The name of the bundled JavaScript file.
  [2] The directory where all bundled files will be placed.
  [3] The name of the bundled HTML file.
  [4] The prefix for relative URLs found within the bundled HTML file.
  [5] The location of the HTML file to be used as a template when
      building the bundled HTML file.
*/
