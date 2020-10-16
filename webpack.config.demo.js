const path = require("path");
const config = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...config,
  mode: "development",
  entry: "./demo/index.js",
  output: {
    filename: "[name]-[chunkhash].js",
    path: path.resolve(__dirname, "demo_dist"),
    publicPath: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Flocking boids",
      meta: {
        description:
          "Simulation of the group of items (boids) with flocking behavior, that can be rendered on the provided canvas"
      },
      template: "./demo/index.html",
      favicon: "./demo/favicon.ico"
    })
  ]
};
