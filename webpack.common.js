const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/start-page.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "start-page.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "nauka-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "nauka-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "nauka-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/form.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "form.html",
    }),
  ],
};
