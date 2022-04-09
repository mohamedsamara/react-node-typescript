const webpack = require("webpack");
const dotenv = require("dotenv");
const ESLintPlugin = require("eslint-webpack-plugin");

const { paths } = require("../utils");

module.exports = {
  target: "web",
  context: paths.client,
  entry: "./index.tsx",
  resolve: {
    alias: {
      "@": `${paths.root}/client`,
    },
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    new ESLintPlugin({ eslintPath: require.resolve("eslint") }),
  ],
};
