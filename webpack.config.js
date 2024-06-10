const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devServer: {
    static: path.resolve(__dirname, "src"),
  },
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     esModule: false,
          //     name: "images/[name].[ext]",
          //   },
          // },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
      inject: "body", // 独自差分修正　'body'を指定してスクリプトを<body>の最後に挿入
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/access.pug",
      filename: "access.html",
      inject: "body", // 独自差分修正　'body'を指定してスクリプトを<body>の最後に挿入
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/members/taro.pug",
      filename: "members/taro.html",
      inject: "body", // 独自差分修正　'body'を指定してスクリプトを<body>の最後に挿入
    }),
    new CleanWebpackPlugin(),
  ],
};
