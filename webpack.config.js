const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: { // [1]
    historyApiFallback: true, // [2]
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
  [2] This allows the user to refresh at a nested route (e.g. "/about")
      and still load the page.
*/
