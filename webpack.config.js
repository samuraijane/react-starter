const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: { // [1]
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html")
    })
  ]
});

/*
NOTES
  [1] Webpack's dev server bundles files and then performs read/write
      operations in memory so you will never see files run through
      `devServer` written to the disk.
*/
