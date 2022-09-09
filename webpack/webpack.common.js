const path = require("path");
const nodeExternals = require("webpack-node-externals");
const src = path.resolve(__dirname, "..", "src");

module.exports = {
  entry: path.resolve(src, "index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "..", "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@server": path.resolve(src, "server"),
      "@helper": path.resolve(src, "helper"),
      "@resource": path.resolve(src, "resource"),
      "@services": path.resolve(src, "services"),
      "@routes": path.resolve(src, "routes"),
    },
  },
  stats: "errors-only",
};
