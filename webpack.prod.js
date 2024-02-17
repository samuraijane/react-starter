const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join, resolve } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.js",
    path: resolve("./build/prod")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      publicPath: "build/prod",
      template: join(`${__dirname}/public/index.html`)
    })
  ]
});
