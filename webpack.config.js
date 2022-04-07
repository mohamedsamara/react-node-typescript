const webpack = require("webpack");
const dotenv = require("dotenv");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { isDev, paths } = require("./utils");

const publicPath = process.env.PUBLIC_PATH || "/";

const serverConfig = {
  mode: isDev ? "development" : "production",
  context: paths.server,
  entry: "./server.ts",
  output: {
    publicPath,
    filename: "server.js",
    path: paths.build,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.server.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

const clientConfig = {
  mode: isDev ? "development" : "production",
  context: paths.client,
  entry: "./index.tsx",
  output: {
    publicPath,
    path: `${paths.build}/static`,
    filename: isDev
      ? `${paths.js}/[name].js`
      : `${paths.js}/[name].[contenthash:8].js`,
    chunkFilename: isDev
      ? `${paths.js}/[name].chunk.js`
      : `${paths.js}/[name].[contenthash:8].chunk.js`,
  },
  target: "web",
  devtool: isDev ? "cheap-module-source-map" : "source-map",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          title: process.env.APP_NAME || "React Node TypeScript",
          template: `${paths.public}/index.html`,
          scriptLoading: "defer",
        },
        !isDev && {
          minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            trimCustomFragments: true,
          },
        }
      )
    ),
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};

module.exports = [serverConfig, clientConfig];
