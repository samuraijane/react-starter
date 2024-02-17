const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html")
    })
  ]
});
