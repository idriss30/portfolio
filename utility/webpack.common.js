const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, "..", "./src/index.js"),
    },

    about: {
      import: path.resolve(__dirname, "..", "./src/about.js"),
    },
    project: {
      import: path.resolve(__dirname, "..", "./src/project.js"),
    },
    contact: {
      import: path.resolve(__dirname, "..", "./src/contact.js"),
    },
  },

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
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: "Idriss Cissoko",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About Idriss",
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
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, "..", "./src/fav.png"),
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "..", "./dist"),
  },
};
