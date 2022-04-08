const webpack = require("webpack");
const dotenv = require("dotenv");

const { paths } = require("../utils");

module.exports = {
  target: "web",
  context: paths.client,
  entry: "./index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    alias: {
      components: "client/components",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.client.json",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
  ],
};
