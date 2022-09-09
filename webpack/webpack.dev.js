const NodemonWebpackPlugin = require("nodemon-webpack-plugin");
const { DefinePlugin } = require("webpack");
require("dotenv").config({ path: ".env.development" });

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  watch: true,
  plugins: [
    new NodemonWebpackPlugin(),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
