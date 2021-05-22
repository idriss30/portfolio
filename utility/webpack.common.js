const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  module: {
    rules: [
      // babel loader to compile
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Idriss Portfolio",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About Idriss Cissoko",
      template: path.resolve(__dirname, "..", "./src/about.html"),
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      title: "idriss Cissoko's projects",
      template: path.resolve(__dirname, "..", "./src/project.html"),
      filename: "project.html",
    }),
    new HtmlWebpackPlugin({
      title: "contact Idriss",
      template: path.resolve(__dirname, "..", "./src/contact.html"),
      filename: "contact.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "..", "./dist"),
  },
};
