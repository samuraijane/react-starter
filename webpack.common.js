module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      }
    ]
  },
  resolve: {
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
