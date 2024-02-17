const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  resolve: {
    alias: {
      theme: resolve(__dirname, "src/theme")
    },
    extensions: [".js", ".ts", ".tsx"] // NOTE 1
  }
};

/*
  NOTES
  [1] Although we are builing a webpack config that allows us to write
  code in TypeScript, we include `.js` here because many of the files
  found within node_modules, and upon which this config depends, have 
  `.js` file extensions.
*/
