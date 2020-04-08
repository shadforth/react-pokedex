const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  modules: false,
                },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: ["react-hot-loader/babel"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[hash:8].[ext]", // Check if need to change
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]", // Check if need to change
        },
      },
    ],
  },
  plugins: [],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: "minimal",
};
