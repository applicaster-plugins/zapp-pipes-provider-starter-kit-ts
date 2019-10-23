// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "./bundle"),
    publicPath: "/",
    library: "zappPipes",
    libraryTarget: "var"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  devtool: "nosources-source-map",
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts", ".json"] }
};
